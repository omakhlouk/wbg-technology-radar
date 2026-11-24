/* WBG Radar Showcase · deterministic Canvas2D rendering for screen and video. */
(function (root) {
  'use strict';
  const TAU = Math.PI * 2;
  const FONT = 'Arial, Helvetica, sans-serif';
  const WHITE = '#F3FBFF';
  const MUTED = '#A6BDCB';
  const PALETTE = ['#5CCEFF', '#B3A0FF', '#5EE6CF', '#B4E583', '#FFC879', '#F6A5CE'];
  const DOMAIN_NAMES = ['Enterprise & work', 'Trust & AI foundations', 'Digital public services', 'Climate & Earth', 'Energy & essentials', 'Frontier systems'];
  const ALIASES = {'egov-digit':'DIGIT', 'mojaloop':'Mojaloop', 'chloris':'Chloris', 'physical-intelligence':'Physical Intelligence', 'mechanical-orchard':'Mechanical Orchard'};
  const LENS = {wbg:'WBG DEVELOPMENT', its:'ITS & ENTERPRISE', frontier:'THE FRONTIER', all:'CONNECTED PERSPECTIVES'};
  let lastLayout = {targets:[], labelCount:0, visibleCompanyIds:[]};

  function hash(value) { let h=2166136261; for (const ch of String(value)) { h ^= ch.charCodeAt(0); h=Math.imul(h,16777619); } return (h>>>0)/4294967295; }
  function clamp(x,a,b){ return Math.max(a,Math.min(b,x)); }
  function rgba(hex,a){ const s=String(hex).replace('#',''); const h=s.length===3?s.split('').map(c=>c+c).join(''):s; return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`; }
  function font(ctx,size,weight){ctx.font=`${weight||400} ${size}px ${FONT}`;}
  function line(ctx,x1,y1,x2,y2,color,width=1){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
  function arc(ctx,x,y,r,a,b,color,width=1){ctx.beginPath();ctx.arc(x,y,r,a,b);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
  function circle(ctx,x,y,r,fill,stroke,width=1){ctx.beginPath();ctx.arc(x,y,r,0,TAU);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}}
  function text(ctx,str,x,y,size=20,color=WHITE,weight=400,align='left'){font(ctx,size,weight);ctx.fillStyle=color;ctx.textAlign=align;ctx.textBaseline='alphabetic';ctx.fillText(String(str||''),x,y);}
  function tracked(ctx,str,x,y,size,color,spacing=2,align='left',weight=600){font(ctx,size,weight); const chars=[...String(str||'')], widths=chars.map(c=>ctx.measureText(c).width);const total=widths.reduce((a,b)=>a+b,0)+Math.max(0,chars.length-1)*spacing;let left=align==='center'?x-total/2:align==='right'?x-total:x;ctx.fillStyle=color;ctx.textBaseline='alphabetic';ctx.textAlign='left';chars.forEach((c,i)=>{ctx.fillText(c,left,y);left+=widths[i]+spacing;});return total;}
  function wrap(ctx,str,width,size,weight=400){font(ctx,size,weight);const words=String(str||'').split(/\s+/).filter(Boolean),lines=[];let current='';for(const word of words){const next=current?current+' '+word:word;if(current&&ctx.measureText(next).width>width){lines.push(current);current=word;}else current=next;}if(current)lines.push(current);return lines;}
  function paragraph(ctx,str,x,y,width,size,color=WHITE,weight=400,lineHeight=size*1.32,maxLines=20,align='left'){let lines=wrap(ctx,str,width,size,weight); if(lines.length>maxLines){lines=lines.slice(0,maxLines);let end=lines[maxLines-1];while(end&&ctx.measureText(end+'…').width>width)end=end.slice(0,-1);lines[maxLines-1]=end.replace(/\s+$/,'')+'…';}lines.forEach((l,i)=>text(ctx,l,x,y+i*lineHeight,size,color,weight,align));return y+lines.length*lineHeight;}
  function intersects(a,b,gap=6){return a.x<b.x+b.w+gap&&a.x+a.w+gap>b.x&&a.y<b.y+b.h+gap&&a.y+a.h+gap>b.y;}
  function validRect(rect,space,reserved){
    if(rect.x<space.left||rect.x+rect.w>space.right||rect.y<space.top||rect.y+rect.h>space.bottom)return false;
    const corners=[[rect.x,rect.y],[rect.x+rect.w,rect.y],[rect.x,rect.y+rect.h],[rect.x+rect.w,rect.y+rect.h]];
    if(space.clipRadius&&corners.some(([x,y])=>Math.hypot(x-space.cx,y-space.cy)>space.clipRadius))return false;
    const nx=clamp(space.cx,rect.x,rect.x+rect.w),ny=clamp(space.cy,rect.y,rect.y+rect.h);
    if(Math.hypot(nx-space.cx,ny-space.cy)<space.coreRadius+8)return false;
    return !reserved.some(r=>intersects(rect,r,7));
  }
  function companyPoints(companies,domains,cx,cy,r,square){
    const byDomain={};companies.forEach(c=>(byDomain[c.domain]||(byDomain[c.domain]=[])).push(c));
    const result=[];
    domains.forEach((d,di)=>{const group=(byDomain[d.id]||[]).slice().sort((a,b)=>a.id.localeCompare(b.id));
      group.forEach((company,i)=>{
        const center=-Math.PI/2+(di+.5)*TAU/6;
        const spread=.74;
        const frac=group.length===1?.5:(i+.5)/group.length;
        let angle=center+(frac-.5)*spread;
        const jitter=hash(company.id+':radius');
        const horizon=company.horizon||({experiment:'now',assess:'next',watch:'horizon'}[company.ring])||'next';
        let radius=r*(horizon==='now'?.36+jitter*.205:horizon==='next'?.61+jitter*.17:.825+jitter*.09);
        let px=cx+Math.cos(angle)*radius,py=cy+Math.sin(angle)*radius;
        // Angle within a sector is purely a layout choice; retain the maturity radius
        // while protecting the hologram's brand and explanatory caption.
        if(square&&di===5&&px>350&&px<730&&py<201){
          const safeY=215+hash(company.id+':brand')*27;angle=Math.PI+Math.asin(clamp((cy-safeY)/radius,0,1));
        }
        px=cx+Math.cos(angle)*radius;py=cy+Math.sin(angle)*radius;
        if(square&&(di===2||di===3)&&px>280&&px<800&&py>801){
          const safeY=783+hash(company.id+':caption')*13;const aa=Math.asin(clamp((safeY-cy)/radius,0,1));angle=di===2?aa:Math.PI-aa;
        }
        result.push({company,id:company.id,angle,radius,color:d.color||PALETTE[di],domain:di,x:cx+Math.cos(angle)*radius,y:cy+Math.sin(angle)*radius,horizon});
      });
    });return result;
  }
  function selectLabels(points,scene,frame,options,square){
    if(options.labels==='none')return [];
    const ids=new Set(scene.companyIds||[]),active=points.filter(p=>ids.has(p.id));
    const selected=options.selectedId||frame.highlightId;
    const selectedPoint=points.find(p=>p.id===selected);
    const prioritized=selectedPoint?[selectedPoint,...active.filter(p=>p.id!==selectedPoint.id)]:active;
    const buckets=Array.from({length:6},(_,i)=>points.filter(p=>p.domain===i));
    const candidates=[];
    for(let row=0;row<Math.max(0,...buckets.map(b=>b.length));row++)for(const bucket of buckets)if(bucket[row])candidates.push(bucket[row]);
    const limit=options.labels==='all'?(square?23:26):(square?18:20);
    const remain=Math.max(0,limit-prioritized.length);
    // The overview rotates names in stable pages while the scene's builders stay named.
    const pageIndex=Number.isFinite(frame.labelPage)?frame.labelPage:Math.floor((frame.time||0)/10);
    const offset=candidates.length?(pageIndex*Math.max(1,limit-6))%candidates.length:0;
    const rotated=[];
    for(let step=0;step<candidates.length&&rotated.length<remain;step++){const point=candidates[(offset+step)%candidates.length];if(!prioritized.some(p=>p.id===point.id))rotated.push(point);}
    return [...prioritized.map(p=>({...p,active:ids.has(p.id),selected:p.id===selected})),...rotated.map(p=>({...p,active:false,selected:false}))];
  }
  function placeLabels(ctx,points,scene,space,square){
    const placed=[],reserved=space.reserved.slice();
    points.forEach(p=>{
      const name=(scene.shortLabels&&scene.shortLabels[p.id])||ALIASES[p.id]||p.company.name;
      const size=p.active||p.selected?(square?23:23):(square?18:19);
      font(ctx,size,p.active?600:400);const w=ctx.measureText(name).width+16,h=size+13;
      let chosen=null;
      const side=Math.cos(p.angle)>=0?1:-1;
      const candidates=[];
      for(const dy of [0,-26,26,-52,52,-78,78]){
        for(const sx of [side,-side]){const px=p.x+sx*15; candidates.push({x:sx>0?px:px-w,y:p.y+dy-h*.5,w,h});}
      }
      for(const dr of [35,65,100,135])for(const da of [0,-.14,.14,-.27,.27,-.4,.4]){
        const a=p.angle+da;const xx=space.cx+Math.cos(a)*(p.radius+dr),yy=space.cy+Math.sin(a)*(p.radius+dr);
        const s=Math.cos(a)>=0?1:-1;candidates.push({x:s>0?xx+10:xx-w-10,y:yy-h/2,w,h});
      }
      for(const c of candidates){if(validRect(c,space,reserved)){chosen=c;break;}}
      // A leader to a free perimeter slot is preferable to tiny or overlapping text.
      if(!chosen){
        const free=[];for(let slot=0;slot<64;slot++){const a=slot/64*TAU,r=space.r*(square?.82:.99);const x=space.cx+Math.cos(a)*r,y=space.cy+Math.sin(a)*r;const sx=Math.cos(a)>=0?1:-1;const box={x:sx>0?x-w:x,y:y-h/2,w,h};if(validRect(box,space,reserved))free.push({box,d:Math.hypot(x-p.x,y-p.y)});}
        free.sort((a,b)=>a.d-b.d);if(free.length)chosen=free[0].box;
      }
      if(chosen){reserved.push(chosen);placed.push({...p,name,size,box:chosen});}
    });return placed;
  }
  function wireGlobe(ctx,cx,cy,r,t,color){
    ctx.save();ctx.globalAlpha=.5;circle(ctx,cx,cy,r,null,rgba(color,.25),1);
    for(const k of [-.66,-.33,.33,.66]){const y=cy+r*k;const rx=r*Math.sqrt(1-k*k);ctx.beginPath();ctx.ellipse(cx,y,rx,rx*.13,0,0,TAU);ctx.strokeStyle=rgba(color,.18);ctx.lineWidth=1;ctx.stroke();}
    for(let i=0;i<5;i++){const a=(i/5*TAU+t*(TAU/120));ctx.beginPath();ctx.ellipse(cx,cy,Math.max(5,Math.abs(Math.cos(a))*r),r,0,0,TAU);ctx.strokeStyle=rgba(color,.16);ctx.lineWidth=1;ctx.stroke();}ctx.restore();
  }
  function baseRadar(ctx,cx,cy,r,t,domains,focusSet,square,space){
    const glow=ctx.createRadialGradient(cx,cy,r*.1,cx,cy,r*1.24);glow.addColorStop(0,'rgba(20,90,120,.12)');glow.addColorStop(.7,'rgba(10,55,75,.075)');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.fillRect(cx-r*1.25,cy-r*1.25,r*2.5,r*2.5);
    ctx.save();circle(ctx,cx,cy,r);ctx.clip();
    const grid=28;for(let x=Math.ceil((cx-r)/grid)*grid;x<cx+r;x+=grid)for(let y=Math.ceil((cy-r)/grid)*grid;y<cy+r;y+=grid){if(Math.hypot(x-cx,y-cy)<r){ctx.fillStyle='rgba(103,162,181,.12)';ctx.fillRect(x,y,1,1);}}
    domains.forEach((d,i)=>{
      const a=-Math.PI/2+i*TAU/6,b=a+TAU/6,color=d.color||PALETTE[i];
      const g=ctx.createRadialGradient(cx,cy,r*.22,cx,cy,r);g.addColorStop(0,rgba(color,0));g.addColorStop(.8,rgba(color,focusSet.has(i)?.055:.018));g.addColorStop(1,rgba(color,.04));ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,a,b);ctx.closePath();ctx.fill();
      ctx.setLineDash([3,9]);line(ctx,cx+Math.cos(a)*space.coreRadius,cy+Math.sin(a)*space.coreRadius,cx+Math.cos(a)*r,cy+Math.sin(a)*r,'rgba(142,193,211,.16)');ctx.setLineDash([]);
      ctx.save();if(focusSet.has(i)){ctx.shadowColor=color;ctx.shadowBlur=12;}
      arc(ctx,cx,cy,r,a+.025,b-.025,rgba(color,focusSet.has(i)?.96:.55),focusSet.has(i)?2.8:1.2);ctx.restore();
      arc(ctx,cx,cy,r+6,a+.04,b-.04,rgba(color,focusSet.has(i)?.52:.25),1);
    });
    const rings=[.29,.58,.79,.94];rings.forEach((v,i)=>arc(ctx,cx,cy,r*v,0,TAU,`rgba(150,206,224,${i===0?.29:.35})`,i===0?1:1.3));
    for(let i=0;i<120;i++){const a=i/120*TAU,l=i%5===0?9:3;line(ctx,cx+Math.cos(a)*(r-14),cy+Math.sin(a)*(r-14),cx+Math.cos(a)*(r-14-l),cy+Math.sin(a)*(r-14-l),`rgba(163,214,229,${i%5===0?.35:.18})`,1);}
    const sweep=(t*(TAU/10)-Math.PI/2)%TAU;
    for(let i=35;i>=0;i--){const a=sweep-i*.008;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r*.94,a,a+.009);ctx.closePath();ctx.fillStyle=`rgba(93,215,240,${.003+(36-i)/36*.105})`;ctx.fill();}
    line(ctx,cx+Math.cos(sweep)*space.coreRadius,cy+Math.sin(sweep)*space.coreRadius,cx+Math.cos(sweep)*r*.94,cy+Math.sin(sweep)*r*.94,'rgba(115,224,250,.54)',1.2);
    ctx.save();ctx.shadowColor='#79E5FF';ctx.shadowBlur=17;circle(ctx,cx+Math.cos(sweep)*r*.94,cy+Math.sin(sweep)*r*.94,3.2,'#C8F6FF');ctx.restore();
    ctx.restore();
    // Fine orbital arcs stay subordinate to the names and evidence.
    arc(ctx,cx,cy,r+13,t*(TAU/120),t*(TAU/120)+Math.PI*.6,'rgba(160,226,247,.26)',1);
    arc(ctx,cx,cy,r+13,t*(TAU/120)+Math.PI,t*(TAU/120)+Math.PI*1.2,'rgba(160,226,247,.18)',1);
    return sweep;
  }
  function render(ctx,width,height,frame={},options={}){
    const square=options.format==='square'||(!options.format&&width/height<1.3);
    const W=square?1080:1920,H=1080,s=Math.min(width/W,height/H),ox=(width-W*s)/2,oy=(height-H*s)/2;
    const scene=frame.scene||{title:'Technology shaping opportunity',radarTitle:'Technology Radar',claim:'Explore emerging capabilities and the builders behind them.',implication:'Connect technology possibilities with meaningful development outcomes.',watch:'Follow the evidence.',companyIds:[]};
    const domains=(frame.domains&&frame.domains.length?frame.domains:Array.from({length:6},(_,i)=>({id:['enterprise','trust','inclusion','climate','resources','frontier'][i],name:DOMAIN_NAMES[i],color:PALETTE[i]}))).slice(0,6);
    const allCompanies=frame.allCompanies||frame.companies||[];
    const companies=frame.companies||allCompanies;
    const allowedIds=new Set(companies.map(c=>c.id));
    const time=options.reducedMotion?0:(Number(frame.time)||0);
    const cx=square?540:670,cy=square?545:562,r=square?474:419,coreRadius=square?120:108;
    const emphasis=new Set(scene.companyIds||[]);
    const sceneColor=scene.lens==='wbg'?'#5EE6CF':scene.lens==='its'?'#5CCEFF':scene.lens==='frontier'?'#F6A5CE':'#5CCEFF';
    const reserved=[];
    const space={cx,cy,r,coreRadius,left:square?45:58,right:square?1035:1224,top:square?103:165,bottom:square?918:955,clipRadius:square?487:null,reserved};
    ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#000000';ctx.fillRect(0,0,width,height);ctx.translate(ox,oy);ctx.scale(s,s);
    if(square){ctx.save();ctx.beginPath();ctx.arc(540,540,503,0,TAU);ctx.clip();}
    const anchorPoints=companyPoints(allCompanies,domains,cx,cy,r,square);
    const points=anchorPoints.filter(p=>allowedIds.has(p.id));
    const focusDomains=new Set(points.filter(p=>emphasis.has(p.id)).map(p=>p.domain));
    const sweep=baseRadar(ctx,cx,cy,r,time,domains,focusDomains,square,space);
    // Sector headings: horizontal, outside the startup plotting bands.
    domains.forEach((d,i)=>{
      const a=-Math.PI/2+(i+.5)*TAU/6,rr=square?r*.89:r+62,x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;
      const color=d.color||PALETTE[i],name=d.shortName||d.name||DOMAIN_NAMES[i];
      const lines=wrap(ctx,name,165,square?15:17,600);
      const box={x:x-88,y:y-11,w:176,h:lines.length*(square?18:21)+4};reserved.push(box);
      lines.forEach((l,j)=>text(ctx,l,x,y+j*(square?18:21),square?15:17,rgba(color,.93),600,'center'));
    });
    if(square){
      reserved.push({x:365,y:92,w:350,h:88},{x:288,y:807,w:504,h:100});
      if(options.logo){try{ctx.drawImage(options.logo,410,109,260,61);}catch(_){tracked(ctx,'WORLD BANK GROUP',540,140,16,WHITE,1.6,'center');}}
      else tracked(ctx,'WORLD BANK GROUP',540,140,16,WHITE,1.6,'center');
      tracked(ctx,'ITS · INNOVATION',540,180,12,MUTED,1.2,'center');
    }else{
      if(options.logo){try{ctx.drawImage(options.logo,74,44,268,63);}catch(_){tracked(ctx,'WORLD BANK GROUP',74,82,23,WHITE,1.2);}}
      else tracked(ctx,'WORLD BANK GROUP',74,82,23,WHITE,1.2);
      line(ctx,369,47,369,100,'rgba(160,203,219,.35)');
      text(ctx,'ITS',396,71,28,WHITE,700);text(ctx,'Technology & Innovation',396,99,19,MUTED,400);
      tracked(ctx,'NOVEMBER 2026',1836,65,14,MUTED,2,'right');
      tracked(ctx,'THE TECHNOLOGY RADAR',1836,92,13,'#5CCEFF',2,'right');
      line(ctx,74,126,1846,126,'rgba(125,185,204,.15)');
    }
    // Actual company coordinates are stable across scenes and label pages.
    points.forEach(p=>{
      const active=emphasis.has(p.id),selected=p.id===(options.selectedId||frame.highlightId),pulse=.55+.45*Math.sin(time*(TAU/3)+hash(p.id)*TAU);
      if(active){
        line(ctx,cx+Math.cos(p.angle)*(coreRadius+11),cy+Math.sin(p.angle)*(coreRadius+11),p.x,p.y,rgba(p.color,.12),1);
        circle(ctx,p.x,p.y,13+pulse*5,null,rgba(p.color,.17),1);ctx.save();ctx.shadowColor=p.color;ctx.shadowBlur=14;circle(ctx,p.x,p.y,selected?7.5:6.1,p.color,WHITE,1.3);ctx.restore();
      }else{
        const delta=((p.angle-sweep)%TAU+TAU)%TAU;const scan=delta>.0&&delta<.14;
        circle(ctx,p.x,p.y,scan?3.5:2.7,rgba(p.color,scan?.95:.64));
      }
    });
    // The central globe is an abstract network, not an imitation of the WBG mark.
    const coreFill=ctx.createRadialGradient(cx,cy,5,cx,cy,coreRadius);coreFill.addColorStop(0,'#031520');coreFill.addColorStop(1,'#01070D');circle(ctx,cx,cy,coreRadius,coreFill,rgba(sceneColor,.4),1.1);
    wireGlobe(ctx,cx,cy,coreRadius-13,time,sceneColor);
    arc(ctx,cx,cy,coreRadius+8,-time*(TAU/40),-time*(TAU/40)+Math.PI*.7,rgba(sceneColor,.68),1.4);
    arc(ctx,cx,cy,coreRadius+8,-time*(TAU/40)+Math.PI,-time*(TAU/40)+Math.PI*1.14,rgba(sceneColor,.35),1);
    if(square){
      tracked(ctx,LENS[scene.lens]||LENS.all,cx,cy-45,11,sceneColor,1.1,'center');
      const title=scene.radarTitle||scene.title||'Technology Radar';const lines=wrap(ctx,title,205,27,700);const top=cy-(lines.length-1)*17;
      lines.slice(0,3).forEach((l,i)=>text(ctx,l,cx,top+i*33,27,WHITE,700,'center'));
      tracked(ctx,'WBG RADAR',cx,cy+64,11,MUTED,1.8,'center');
    }else{
      tracked(ctx,'WORLD BANK GROUP',cx,cy-26,10,MUTED,1.7,'center');text(ctx,'WBG',cx,cy+15,45,WHITE,700,'center');tracked(ctx,'TECHNOLOGY RADAR',cx,cy+42,10,sceneColor,1.7,'center');
    }
    const squareRingLabels=square?[[.58,'NOW'],[.79,'NEXT'],[.94,'HORIZON']].map(([v,name])=>{const a=-32*Math.PI/180;const x=cx+Math.cos(a)*r*v,y=cy+Math.sin(a)*r*v;const w=name.length*9+9;const box={x:x-w,y:y-12,w,h:22};reserved.push(box);return {name,x,y,box};}):[];
    const selectedLabels=selectLabels(points,scene,frame,options,square);
    const labels=placeLabels(ctx,selectedLabels,scene,space,square);
    const targets=points.map(p=>({id:p.id,kind:'point',x:(p.x-12)*s+ox,y:(p.y-12)*s+oy,w:24*s,h:24*s,name:p.company.name}));
    labels.slice().reverse().forEach(l=>{
      const b=l.box;const ax=clamp(l.x,b.x,b.x+b.w),ay=clamp(l.y,b.y,b.y+b.h);
      if(Math.hypot(ax-l.x,ay-l.y)>10){ctx.beginPath();ctx.moveTo(l.x,l.y);const elbowX=l.x+(ax-l.x)*.6;ctx.lineTo(elbowX,ay);ctx.lineTo(ax,ay);ctx.strokeStyle=rgba(l.color,l.active?.65:.25);ctx.lineWidth=l.active?1.25:.8;ctx.stroke();}
      // Black underlay protects letters from incidental dots and the sweep.
      ctx.fillStyle='rgba(0,0,0,.88)';ctx.fillRect(b.x-2,b.y-2,b.w+4,b.h+4);
      if(l.active){line(ctx,b.x,b.y+b.h-3,b.x+b.w,b.y+b.h-3,rgba(l.color,.4),1);}
      text(ctx,l.name,b.x+8,b.y+l.size+1,l.size,l.active||l.selected?WHITE:rgba(l.color,.9),l.active||l.selected?600:400);
      targets.push({id:l.id,kind:'label',x:b.x*s+ox,y:b.y*s+oy,w:b.w*s,h:b.h*s,name:l.company.name});
    });
    // Radius labels remain small but explicit, so position has a readable meaning.
    if(square){squareRingLabels.forEach(l=>{ctx.fillStyle='rgba(0,0,0,.9)';ctx.fillRect(l.box.x,l.box.y,l.box.w,l.box.h);tracked(ctx,l.name,l.x-3,l.y+3,12,'#BAD6E2',1.2,'right');});}
    if(!square){
      [[.58,'NOW'],[.79,'NEXT'],[.94,'HORIZON']].forEach(([v,name])=>{const x=cx+13,y=cy-r*v-7;ctx.fillStyle='rgba(0,0,0,.9)';ctx.fillRect(x-3,y-13,85,19);tracked(ctx,name,x,y,11,MUTED,1.7);});
    }
    const sceneIndex=(Number(frame.sceneIndex)||0),sceneCount=Number(frame.sceneCount)||12,progress=clamp(Number(frame.progress)||0,0,1);
    if(square){
      const insight=scene.squareInsight||scene.implication||scene.claim;
      const captionLines=wrap(ctx,insight,480,20,400).slice(0,3);
      captionLines.forEach((caption,i)=>{ctx.save();font(ctx,20,400);ctx.textAlign='center';ctx.textBaseline='alphabetic';ctx.strokeStyle='#000';ctx.lineWidth=7;ctx.lineJoin='round';ctx.strokeText(caption,540,830+i*25);text(ctx,caption,540,830+i*25,20,'#D2E8EF',400,'center');ctx.restore();});
      text(ctx,'Public-source research · Potential applications',540,943,12,'#91ACBA',400,'center');
      tracked(ctx,'NOW · NEXT · HORIZON',540,967,12,MUTED,1.4,'center');
      const y=989,step=12,total=sceneCount*step;for(let i=0;i<sceneCount;i++)circle(ctx,cx-total/2+i*step,y,i===sceneIndex?2.8:1.6,i===sceneIndex?sceneColor:'rgba(155,208,222,.3)');
    }else{
      const x=1280,width=548;
      tracked(ctx,`${String(sceneIndex+1).padStart(2,'0')} / ${String(sceneCount).padStart(2,'0')}`,x,208,14,sceneColor,2);
      tracked(ctx,LENS[scene.lens]||LENS.all,x+104,208,14,MUTED,1.8);
      let y=paragraph(ctx,scene.title,x,260,width,46,WHITE,600,53,3);
      y+=18;line(ctx,x,y,x+46,y,sceneColor,3);y+=38;
      const sceneTime=Number.isFinite(frame.sceneTime)?frame.sceneTime:((Number(frame.time)||0)%10);
      const opportunity=sceneTime>=(Number(frame.sceneDuration)||10)*.4;
      const statement=opportunity?scene.implication:scene.claim;
      const statementLabel=opportunity?(scene.lens==='wbg'?'WBG OPPORTUNITY':scene.lens==='its'?'ITS OPPORTUNITY':'WHY IT MATTERS'):'THE SHIFT';
      tracked(ctx,statementLabel,x,y,14,sceneColor,2);y+=43;
      y=paragraph(ctx,statement,x,y,width,30,WHITE,400,39,5);
      const rosterY=Math.max(677,y+45);
      tracked(ctx,'BUILDERS TO WATCH',x,rosterY,13,MUTED,2);
      const builders=(scene.companyIds||[]).map(id=>allCompanies.find(c=>c.id===id)).filter(Boolean).slice(0,6);
      builders.forEach((company,i)=>{
        const bx=x+(i%2)*281,by=rosterY+40+Math.floor(i/2)*79;
        const alias=(scene.shortLabels&&scene.shortLabels[company.id])||ALIASES[company.id]||company.name;
        paragraph(ctx,alias,bx,by,265,21,WHITE,600,25,2);
        const category=(company.category||'').split(' · ')[0];
        paragraph(ctx,category,bx,by+27,252,15,'#8BA8B9',400,19,2);
      });
      // A quiet bottom legend explains the rings without claiming adoption.
      const legendY=1006;
      let lx=76;
      [['Now','Available to explore','#5CCEFF'],['Next','Evidence developing','#B3A0FF'],['Horizon','Milestones ahead','#F6A5CE']].forEach(([a,b,c],i)=>{circle(ctx,lx,legendY-5,4,c);text(ctx,a,lx+14,legendY,16,WHITE,600);text(ctx,b,lx+14,legendY+23,14,MUTED);lx+=235;});
      const tally=`${allCompanies.length} BUILDERS  /  ${(frame.trends||[]).length||37} TRENDS`;
      tracked(ctx,tally,1176,1029,12,MUTED,1.4,'right');
      const tx=1280,ty=976,tw=548;line(ctx,tx,ty,tx+tw,ty,'rgba(139,194,214,.18)',1);line(ctx,tx,ty,tx+tw*progress,ty,sceneColor,2);
      text(ctx,'Public-source research · Potential applications',tx,1006,14,MUTED);text(ctx,'Evidence checked 23 Nov 2026',tx,1030,14,'#7F9DAE');
    }
    if(square)ctx.restore();ctx.restore();
    lastLayout={targets,labelCount:labels.length,visibleCompanyIds:labels.map(l=>l.id),activeCompanyIds:labels.filter(l=>l.active).map(l=>l.id),format:square?'square':'wide',width,height};
    return lastLayout;
  }
  function hitTest(x,y){for(let i=lastLayout.targets.length-1;i>=0;i--){const t=lastLayout.targets[i];if(x>=t.x&&x<=t.x+t.w&&y>=t.y&&y<=t.y+t.h)return t;}return null;}
  root.RadarStage={render,hitTest,getLayout:()=>lastLayout,version:'2026.11.24.4'};
})(typeof window!=='undefined'?window:globalThis);
