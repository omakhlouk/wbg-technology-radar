#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data.json'),'utf8'));
const sha=file=>createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
const sandbox={console};sandbox.window=sandbox;sandbox.globalThis=sandbox;vm.createContext(sandbox);
for(const file of ['data.js','company-logos.js','radar-core.js','radar-film.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
assert.equal(JSON.stringify(sandbox.RADAR_DATA),JSON.stringify(data),'Browser data must equal canonical JSON');
for(const kind of ['companies','trends','sources'])assert.equal(new Set(data[kind].map(x=>x.id)).size,data[kind].length,'Duplicate IDs in '+kind);
const companies=new Set(data.companies.map(x=>x.id)),trends=new Set(data.trends.map(x=>x.id)),sources=new Set(data.sources.map(x=>x.id));
for(const kind of ['companies','trends','opportunities','signals']){
 for(const item of data[kind]){
  for(const id of [...(item.sourceIds||[]),...(item.wbgContextSourceIds||[])])assert(sources.has(id),'Unknown source '+id);
  for(const id of item.companyIds||[])assert(companies.has(id),'Unknown company '+id);
  for(const id of item.trendIds||[])assert(trends.has(id),'Unknown trend '+id);
  if(kind==='companies'||kind==='trends')for(const lens of item.lenses||[])assert(data.lensDomains[lens].some(x=>x.id===item.domainsByLens?.[lens]),'Missing area for '+item.id+' in '+lens);
 }
}
for(const s of data.sources)assert(/^https?:\/\//.test(s.url),'Source must have a public HTTP URL');
for(const c of data.companies)assert(/^https?:\/\//.test(c.website),'Company must have a public HTTP URL');
const logos=sandbox.COMPANY_LOGOS;
assert(logos&&logos.items,'Company logo manifest is required');
assert.equal(logos.atlas,'startup-logos.png','Logo atlas must be bundled with the site');
assert.equal(logos.total,data.companies.length,'Logo coverage must describe the current company set');
assert.equal(logos.count,Object.keys(logos.items).length,'Logo coverage count is inconsistent');
for(const key of ['tile','columns','rows'])assert(Number.isInteger(logos[key])&&logos[key]>0,'Invalid logo grid '+key);
assert.equal(logos.width,logos.tile*logos.columns);assert.equal(logos.height,logos.tile*logos.rows);
const atlas=fs.readFileSync(path.join(root,logos.atlas));
assert.equal(atlas.subarray(0,8).toString('hex'),'89504e470d0a1a0a','Logo atlas must be a PNG');
assert.equal(atlas.subarray(12,16).toString(),'IHDR');
assert.equal(atlas.readUInt32BE(16),logos.width);assert.equal(atlas.readUInt32BE(20),logos.height);
assert.equal(sha(logos.atlas),logos.atlasSha256,'Logo atlas differs from its provenance manifest');
const companyMap=new Map(data.companies.map(c=>[c.id,c])),cells=new Set();
const host=url=>new URL(url).hostname.replace(/^www\./,'');
for(const [id,entry] of Object.entries(logos.items)){
 assert(companies.has(id),'Logo has no canonical company: '+id);
 assert(Number.isInteger(entry.index)&&entry.index>=0&&entry.index<logos.columns*logos.rows,'Invalid logo cell for '+id);
 assert(!cells.has(entry.index),'Duplicate logo cell '+entry.index);cells.add(entry.index);
 assert.equal(entry.x,(entry.index%logos.columns)*logos.tile);assert.equal(entry.y,Math.floor(entry.index/logos.columns)*logos.tile);
 assert.equal(entry.width,logos.tile);assert.equal(entry.height,logos.tile);
 assert(/^https?:\/\//.test(entry.sourceUrl),'Logo source must be recorded for '+id);
 assert.equal(host(entry.website),host(companyMap.get(id).website),'Logo identity uses a different company website: '+id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(entry.verifiedAt),'Logo review date is missing for '+id);
 assert(/^[a-f0-9]{64}$/.test(entry.sourceSha256),'Logo source fingerprint is missing for '+id);
}
const expectedMissing=data.companies.filter(c=>!logos.items[c.id]).map(c=>c.id).sort();
assert.deepEqual([...logos.missing].sort(),expectedMissing,'Initials fallbacks must identify every missing mark');
const C=sandbox.RadarCore,F=sandbox.RadarFilm;
for(const lens of ['wbg','its','frontier'])for(const kind of ['companies','trends']){
 const all=C.layout({data,lens,kind});
 for(const domain of data.lensDomains[lens]){
  const selected=C.layout({data,lens,kind,domain:domain.id});
  assert.equal(selected.nodes.length,all.nodes.length);
  selected.nodes.forEach((n,i)=>{assert.equal(n.id,all.nodes[i].id);assert.equal(n.x,all.nodes[i].x);assert.equal(n.y,all.nodes[i].y);});
  assert.equal(C.getItems({data,lens,kind,domain:domain.id}).length,selected.nodes.filter(n=>n.visible).length);
 }
}
assert.equal(F.scenes[0].start,0);assert.equal(F.scenes.at(-1).end,180);
F.scenes.forEach((s,i)=>{assert(s.end>s.start);if(i)assert.equal(s.start,F.scenes[i-1].end);if(s.companyId){const c=data.companies.find(x=>x.id===s.companyId);assert(c,'Unknown spotlight');assert.equal(c.capabilities.length,3);assert(c.filmApplication,'Missing canonical film application');}});
const films=[];
const requiredFilmInputs=['data.js','company-logos.js','startup-logos.png','radar-core.js','radar-film.js','wbg-logo-white.svg','radar-qr.png'];
if(!process.argv.includes('--data-only'))for(const name of ['radar-hologram-1080.mp4','radar-widescreen-1080.mp4']){
 const meta=JSON.parse(fs.readFileSync(path.join(root,name+'.json'),'utf8'));
 assert.equal(meta.file,name);assert.equal(meta.bytes,fs.statSync(path.join(root,name)).size);
 assert.equal(meta.sha256,sha(name),'Film bytes do not match provenance');
 for(const file of requiredFilmInputs)assert(meta.inputs?.[file],'Film provenance is missing '+file);
 for(const [file,hash] of Object.entries(meta.inputs)){assert(!path.isAbsolute(file)&&!file.split(/[\\/]/).includes('..'),'Film input must stay inside the release');assert.equal(sha(file),hash,'Film is out of sync with '+file);}
 assert.equal(meta.durationSeconds,180);assert.equal(meta.fps,30);assert.equal(meta.companyCount,data.companies.length);assert.equal(meta.trendCount,data.trends.length);
 assert.equal(meta.dataVersion,data.meta.version,'Film data edition is outdated');
 assert.equal(meta.format,name.includes('hologram')?'square':'wide');assert.equal(meta.width,name.includes('hologram')?1080:1920);assert.equal(meta.height,1080);
 films.push({name,bytes:meta.bytes,sha256:meta.sha256});
}
console.log(JSON.stringify({ok:true,companies:data.companies.length,trends:data.trends.length,sources:data.sources.length,sharedCoordinates:true,canonicalData:true,companyMarks:logos.count,initialsFallbacks:expectedMissing,films},null,2));
