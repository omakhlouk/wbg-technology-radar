/* The film is a camera tour of RadarCore, using the same records and positions. */
(function(root){
  'use strict';
  const duration=180;
  const scenes=Object.freeze([
    {id:'opening',start:0,end:14,lens:'wbg',title:'Technology radar',caption:'Development · Enterprise · Frontier'},
    {id:'public-services',start:14,end:26,lens:'wbg',domain:'wbg-services',title:'Public services',caption:'Voice, identity and access'},
    {id:'sarvam',start:26,end:42,lens:'wbg',companyId:'sarvam'},
    {id:'climate',start:42,end:54,lens:'wbg',domain:'wbg-climate',title:'Climate & Earth',caption:'From observation to action'},
    {id:'satsure',start:54,end:70,lens:'wbg',companyId:'satsure'},
    {id:'development',start:70,end:84,lens:'wbg',title:'Development priorities',caption:'Energy, food, health and productive firms'},
    {id:'enterprise',start:84,end:98,lens:'its',title:'Enterprise technology',caption:'Software, knowledge, data and trust'},
    {id:'factory',start:98,end:114,lens:'its',companyId:'factory'},
    {id:'reducto',start:114,end:130,lens:'its',companyId:'reducto'},
    {id:'frontier',start:130,end:146,lens:'frontier',title:'The frontier',caption:'Physical AI, science and new compute'},
    {id:'lila-sciences',start:146,end:164,lens:'frontier',companyId:'lila-sciences'},
    {id:'closing',start:164,end:180,lens:'wbg',title:'Explore the radar',caption:'Open a company. Follow the evidence.'}
  ]);
  const clamp=n=>Math.max(0,Math.min(1,n));
  const smooth=n=>{n=clamp(n);return n*n*(3-2*n);};
  function frameAt(seconds,data){
    const absolute=Math.max(0,Number(seconds)||0),time=absolute%duration;
    const scene=scenes.find(s=>time>=s.start&&time<s.end)||scenes[0],localTime=time-scene.start;
    const d=data||root.RADAR_DATA||{companies:[],trends:[],sources:[]},company=d.companies.find(c=>c.id===scene.companyId);
    const fadeIn=smooth(localTime/1.1),fadeOut=smooth((scene.end-time)/.7);
    return {scene,company,lens:scene.lens,domain:company?.domainsByLens?.[scene.lens]||scene.domain||null,selectedId:company?.id||null,time,localTime,progress:localTime/(scene.end-scene.start),alpha:Math.min(fadeIn,fadeOut),zoom:company?1+.55*smooth(localTime/3)*smooth((scene.end-time)/1.5):1,sceneIndex:scenes.indexOf(scene),totalDuration:duration};
  }
  function text(ctx,value,x,y,width,size,color='#eef5ff',maxLines=2,weight='400',align='left'){
    ctx.font=`${weight} ${size}px ${root.RadarCore.FONT}`;ctx.fillStyle=color;ctx.textAlign=align;ctx.textBaseline='top';
    const lines=root.RadarCore.wrap(ctx,value,width,maxLines);lines.forEach((line,i)=>ctx.fillText(line,x,y+i*size*1.23));return lines.length*size*1.23;
  }
  function companyCapabilities(company){
    if(Array.isArray(company?.filmCapabilities)&&company.filmCapabilities.length)return company.filmCapabilities.slice(0,3);
    if(Array.isArray(company?.capabilities)&&company.capabilities.length)return company.capabilities.slice(0,3);
    return company?[company.summary]:[];
  }
  function draw(ctx,options={}){
    const data=options.data||root.RADAR_DATA,width=options.width||ctx.canvas.width,height=options.height||ctx.canvas.height;
    const square=(options.format||options.mode)==='square'||options.mode==='hologram'||width/height<1.35;
    const t=Number(options.time??options.seconds)||0,frame=frameAt(t,data),core=root.RadarCore;
    const sx=width/(square?1080:1920),sy=height/1080;
    ctx.save();ctx.scale(sx,sy);
    const w=square?1080:1920,h=1080;
    ctx.fillStyle='#000000';ctx.fillRect(0,0,w,h);
    if(square){ctx.beginPath();ctx.arc(540,540,530,0,Math.PI*2);ctx.clip();}
    const glow=ctx.createRadialGradient(w*.5,1100,0,w*.5,1050,square?1000:1400);
    glow.addColorStop(0,'#1439a6');glow.addColorStop(.36,'#08152d');glow.addColorStop(.72,'#02050b');glow.addColorStop(1,'#000000');
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const company=frame.company,isSpotlight=Boolean(company),f=frame.alpha;
    const logo=options.logo;
    if(logo){const lw=square?200:210,lh=lw*(logo.height/logo.width||.2);ctx.globalAlpha=.9;ctx.drawImage(logo,square?540-lw/2:82,square?68:54,lw,lh);ctx.globalAlpha=1;}
    else text(ctx,'WORLD BANK GROUP',square?540:82,square?68:54,440,18,'#e4efff',1,'400',square?'center':'left');
    if(!square)text(ctx,'TECHNOLOGY & INNOVATION',1838,61,400,17,'#8da7cb',1,'400','right');
    ctx.globalAlpha=f;
    const title=isSpotlight?company.name:frame.scene.title;
    const subtitle=isSpotlight?company.category:frame.scene.caption;
    if(square){
      text(ctx,title,540,127,760,isSpotlight?38:39,'#f2f7ff',1,'400','center');
      if(!isSpotlight)text(ctx,subtitle,540,177,740,18,'#90acd2',1,'400','center');
    }else{
      text(ctx,'Technology radar',82,111,800,42,'#eef5ff',1,'400');
      text(ctx,core.LENSES[frame.lens],82,168,600,19,'#90acd2',1,'400');
    }
    let cx=square?540:540,cy=square?518:598,r=square?297:325;
    const ease=isSpotlight?smooth(frame.localTime/3)*smooth((frame.scene.end-frame.time)/1.5):0;
    const baseModel=core.layout({data,lens:frame.lens,kind:'companies'}),selected=baseModel.nodes.find(n=>n.id===company?.id);
    let centerX=cx,centerY=cy,zoom=frame.zoom;
    if(isSpotlight&&selected){
      centerX=cx-selected.x*r*zoom*ease*.78;
      centerY=(square?405:558)-selected.y*r*zoom*ease*.78;
    }
    const clip=square?(isSpotlight?{x:100,y:210,w:880,h:430}:{x:50,y:196,w:980,h:737}):{x:35,y:225,w:1010,h:780};
    const labelBounds=square&&isSpotlight?{x:105,y:255,w:870,h:350}:clip;
    const result=core.draw(ctx,{data,width:w,height:h,lens:frame.lens,kind:'companies',domain:frame.domain,selectedId:company?.id,time:t,centerX,centerY,radius:r,zoom,background:false,clip,labelBounds,fontSize:square?18:18,maxLabels:isSpotlight?9:square?15:18,labels:'smart',domainLabels:!isSpotlight,ringLabels:!isSpotlight,alpha:f,centerLabel:'WBG'});
    if(square&&isSpotlight){
      const topFade=ctx.createLinearGradient(0,203,0,258);topFade.addColorStop(0,'#000000');topFade.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=topFade;ctx.fillRect(90,203,900,56);
      const bottomFade=ctx.createLinearGradient(0,601,0,655);bottomFade.addColorStop(0,'rgba(3,9,22,0)');bottomFade.addColorStop(1,'#030916');ctx.fillStyle=bottomFade;ctx.fillRect(90,601,900,55);
    }
    if(isSpotlight){
      const cardX=square?225:1110,cardY=square?660:326,cardW=square?630:700;
      if(square){
        const shade=ctx.createLinearGradient(0,630,0,1000);shade.addColorStop(0,'rgba(2,6,14,0)');shade.addColorStop(.15,'rgba(3,9,22,.94)');shade.addColorStop(1,'rgba(3,9,22,.94)');ctx.fillStyle=shade;ctx.fillRect(150,630,780,430);
        text(ctx,company.category||'Company spotlight',540,643,660,18,'#93b0d7',1,'400','center');
      }else{
        const domain=core.getDomains(frame.lens,data).find(d=>d.id===frame.domain);
        text(ctx,domain?.name||core.LENSES[frame.lens],cardX,252,cardW,19,domain?.color||'#91b6ef',1);
        text(ctx,company.name,cardX,296,cardW,50,'#f4f8ff',2);
        text(ctx,company.category||'',cardX,363,cardW,22,'#9ab5d8',2);
      }
      let y=square?688:438;
      const caps=companyCapabilities(company);
      caps.slice(0,3).forEach((cap,index)=>{
        const size=square?20:26;
        ctx.fillStyle='#5098ff';ctx.beginPath();ctx.arc(cardX+4,y+size*.47,2.7,0,Math.PI*2);ctx.fill();
        const lines=text(ctx,cap,cardX+20,y,cardW-25,size,'#dce9ff',2);y+=Math.max(square?42:62,lines+(square?7:12));
      });
      const use=company.filmApplication||company.proposedUse||company.application||'';
      if(use){
        const ruleY=square?874:730;
        ctx.beginPath();ctx.moveTo(cardX,ruleY);ctx.lineTo(cardX+cardW,ruleY);ctx.lineWidth=1;ctx.strokeStyle='#233d62';ctx.stroke();
        text(ctx,'POTENTIAL WBG APPLICATION',cardX,ruleY+17,cardW,12,'#7fa2d0',1);
        text(ctx,use,cardX,ruleY+40,cardW,square?20:24,'#c9dcf8',square?2:3);
      }
    }else if(!square){
      const x=1130,y=358;
      text(ctx,frame.scene.title,x,y,680,50,'#f2f7ff',2);
      text(ctx,frame.scene.caption,x,y+140,640,29,'#a1bee5',3);
      if(frame.scene.id==='opening'||frame.scene.id==='closing'){
        const counts=`${data.companies.length} companies & builders\n${data.trends.length} technology trends`;
        counts.split('\n').forEach((s,i)=>text(ctx,s,x,y+285+i*43,640,24,'#7d9ac4',1));
      }else if(frame.domain){
        const domain=core.getDomains(frame.lens,data).find(d=>d.id===frame.domain);
        if(domain?.description)text(ctx,domain.description,x,y+270,640,23,'#8da7cb',4);
      }
    }
    // Minimal fixed metadata, kept inside the circular hologram safe area.
    ctx.globalAlpha=.85;
    if(square){
      if(!isSpotlight)text(ctx,core.LENSES[frame.lens],540,941,610,18,'#9bb9e3',1,'400','center');
      text(ctx,'Explore at the QR code',540,980,560,14,'#6e8cb4',1,'400','center');
    }else{
      text(ctx,'Public-source landscape · Company applications are proposals',82,1022,1140,16,'#6485b3',1);
      text(ctx,'Explore the live radar',1838,1022,520,17,'#92b9ef',1,'400','right');
    }
    ctx.globalAlpha=1;
    // A quiet progress line instead of scene counters and labels.
    ctx.fillStyle='#1a2b44';ctx.fillRect(square?400:82,square?1012:1063,square?280:1756,2);
    ctx.fillStyle='#4c90f4';ctx.fillRect(square?400:82,square?1012:1063,(square?280:1756)*(frame.time/duration),2);
    ctx.restore();
    return {...result,...frame};
  }
  root.RadarFilm=Object.freeze({duration,scenes,frameAt,draw,companyCapabilities});
})(typeof window!=='undefined'?window:globalThis);
