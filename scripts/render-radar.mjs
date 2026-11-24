#!/usr/bin/env node
/* Offline capture of the SAME RadarCore/RadarFilm scripts used by the website. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {tmpdir} from 'node:os';

const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'..');
const require=createRequire(import.meta.url);
const modulePaths=[process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,path.join(root,'node_modules')].filter(Boolean);
function dependency(name){return require(require.resolve(name,{paths:modulePaths}));}
const {createCanvas,loadImage,GlobalFonts}=dependency('@napi-rs/canvas');
const sharp=dependency('sharp');
const args=process.argv.slice(2),value=(flag,fallback)=>{const i=args.indexOf(flag);return i>=0?args[i+1]:fallback;};
const format=value('--format','square'),width=Number(value('--width',format==='wide'?'1920':'1080')),height=Number(value('--height','1080'));
const fps=Number(value('--fps','30')),from=Number(value('--from','0'));
const out=path.resolve(value('--out',path.join(root,format==='wide'?'radar-widescreen-1080.mp4':'radar-hologram-1080.mp4')));
const preview=args.includes('--preview'),seconds=Number(value('--seconds','180'));
const fontDir=value('--font-dir','');
let fontFamily='Liberation Sans (Arial-compatible fallback)';
if(fontDir){
  const candidates=[['arial.ttf','Arial'],['Arial.ttf','Arial'],['arialbd.ttf','Arial'],['Arial_Bold.ttf','Arial']];
  for(const [file,family] of candidates){const full=path.join(fontDir,file);if(fs.existsSync(full))GlobalFonts.registerFromPath(full,family);}
  fontFamily='Arial';
}else{
  for(const file of ['LiberationSans-Regular.ttf','LiberationSans-Bold.ttf']){
    const p=path.join('/usr/share/fonts/truetype/liberation',file);if(fs.existsSync(p))GlobalFonts.registerFromPath(p,'Arial');
  }
}
const sandbox={console,Math,Date,performance:{now:()=>0}};sandbox.globalThis=sandbox;sandbox.window=sandbox;vm.createContext(sandbox);
for(const file of ['data.js','company-logos.js','radar-core.js','radar-film.js']){
  const target=path.join(root,file);if(fs.existsSync(target))vm.runInContext(fs.readFileSync(target,'utf8'),sandbox,{filename:file});
}
const logoPng=await sharp(path.join(root,'wbg-logo-white.svg')).resize({width:640}).png().toBuffer();
const logo=await loadImage(logoPng),canvas=createCanvas(width,height),ctx=canvas.getContext('2d');
const companyLogos={atlas:await loadImage(path.join(root,'startup-logos.png')),manifest:sandbox.COMPANY_LOGOS};
const qr=await loadImage(path.join(root,'radar-qr.png'));
function frame(t){sandbox.RadarFilm.draw(ctx,{data:sandbox.RADAR_DATA,width,height,time:t,format,logo,companyLogos,qr});}
fs.mkdirSync(path.dirname(out),{recursive:true});
if(preview){
  const times=value('--times','6,20,33,47,61,77,91,105,121,138,153,172').split(',').map(Number),files=[];
  const previewDir=path.resolve(value('--preview-dir',path.join(root,'.qa','film-'+format)));fs.mkdirSync(previewDir,{recursive:true});
  for(const time of times){frame(time);const file=path.join(previewDir,`frame-${String(time).padStart(3,'0')}.png`);fs.writeFileSync(file,canvas.toBuffer('image/png'));files.push(file);}
  const thumbW=format==='wide'?480:270,thumbH=270,cols=3,rows=Math.ceil(files.length/cols);
  const tiles=await Promise.all(files.map(async(file,index)=>({input:await sharp(file).resize(thumbW,thumbH).toBuffer(),left:(index%cols)*thumbW,top:Math.floor(index/cols)*thumbH})));
  const sheet=path.join(previewDir,'contact-sheet.png');await sharp({create:{width:thumbW*cols,height:thumbH*rows,channels:3,background:'#000000'}}).composite(tiles).png().toFile(sheet);
  console.log(JSON.stringify({preview:true,format,fontFamily,files,contactSheet:sheet,companyCount:sandbox.RADAR_DATA.companies.length,trendCount:sandbox.RADAR_DATA.trends.length}));
}else{
  // Long writes outside the checkout avoid thousands of live-preview reloads.
  // The public MP4 is replaced only after a complete, successful encoding.
  const tempDirectory=fs.mkdtempSync(path.join(tmpdir(),'wbg-radar-render-'));
  const encodedPath=path.join(tempDirectory,path.basename(out));
  const encoder=spawn('ffmpeg',['-hide_banner','-loglevel','warning','-y','-f','rawvideo','-pix_fmt','rgba','-s',`${width}x${height}`,'-r',String(fps),'-i','pipe:0','-an','-c:v','libx264','-preset',value('--preset','fast'),'-crf',value('--crf','18'),'-pix_fmt','yuv420p','-movflags','+faststart',encodedPath],{stdio:['pipe','ignore','pipe']});
  let errors='';encoder.stderr.on('data',chunk=>{errors+=chunk.toString();if(errors.length>10000)errors=errors.slice(-10000);});
  let pipeError=null;encoder.stdin.on('error',error=>{pipeError=error;});
  const frames=Math.round(seconds*fps),start=Date.now();
  for(let i=0;i<frames;i++){
    if(pipeError)throw pipeError;
    frame(from+i/fps);
    const pixels=ctx.getImageData(0,0,width,height).data;
    if(!encoder.stdin.write(pixels))await once(encoder.stdin,'drain');
    if(i%(fps*15)===0)console.log(JSON.stringify({frame:i,total:frames,seconds:i/fps,elapsed:Math.round((Date.now()-start)/1000)}));
  }
  encoder.stdin.end();const [code]=await once(encoder,'close');if(code!==0)throw Error(`FFmpeg exited ${code}: ${errors}`);
  try{fs.renameSync(encodedPath,out);}catch(error){if(error.code!=='EXDEV')throw error;const ready=out+'.ready';fs.copyFileSync(encodedPath,ready);fs.renameSync(ready,out);}
  fs.rmSync(tempDirectory,{recursive:true,force:true});
  const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  const metadata={file:path.basename(out),format,width,height,fps,durationSeconds:seconds,bytes:fs.statSync(out).size,sha256:sha(out),fontFamily,sharedRenderer:'radar-core.js',filmRenderer:'radar-film.js',dataVersion:sandbox.RADAR_DATA.meta.version,companyCount:sandbox.RADAR_DATA.companies.length,trendCount:sandbox.RADAR_DATA.trends.length,inputs:Object.fromEntries(['data.js','company-logos.js','startup-logos.png','radar-core.js','radar-film.js','wbg-logo-white.svg','radar-qr.png'].map(file=>[file,sha(path.join(root,file))])),createdAt:new Date().toISOString()};
  fs.writeFileSync(out+'.json',JSON.stringify(metadata,null,2)+'\n');console.log(JSON.stringify(metadata));
}
