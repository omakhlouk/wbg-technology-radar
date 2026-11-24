/* One radar model and canvas renderer for exploration and the exported film. */
(function (root) {
  'use strict';
  const TAU = Math.PI * 2;
  const FONT = 'Arial, "Liberation Sans", sans-serif';
  const COLORS = Object.freeze({ ink:'#061123', line:'#264164', text:'#eef5ff', muted:'#8ca4c7', blue:'#3885ff', cyan:'#75c8ff' });
  const LENSES = Object.freeze({wbg:'WBG development',its:'ITS & enterprise',frontier:'Frontier'});
  const FEATURED = ['sarvam','satsure','amini','iceye','cropin','pula','qure-ai','eidu','husk','nithio','jumo','altana','factory','cognition','dust','reducto','zep','arize','aembit','resolve-ai','liquid-ai','letta','arcade','physical-intelligence','lila-sciences','riverlane','lightmatter','figure'];
  const SWEEP_PERIOD = 10;
  const layoutCache = new WeakMap();
  const fallbackData = {companies:[],trends:[],domains:[],lensDomains:{},sources:[]};
  const dataOf = data => data || root.RADAR_DATA || fallbackData;
  const kindOf = options => (options.kind || options.type) === 'trends' ? 'trends' : 'companies';
  const hash = text => {let h=2166136261;for(let i=0;i<String(text).length;i++){h^=String(text).charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;};
  const unit = text => hash(text)/4294967295;
  const clean = value => String(value || '').replace(/\s+/g,' ').trim();
  const horizonOf = item => item.horizon || ({experiment:'now',assess:'next',watch:'horizon'})[item.ring] || 'next';
  const nameOf = item => item.name || item.shortTitle || item.title || item.id;
  function getDomains(lens='wbg',data) {const d=dataOf(data);return d.lensDomains?.[lens] || d.domains || [];}
  function domainOf(item,lens,data) {
    const domains=getDomains(lens,data);
    return item.domainsByLens?.[lens] || (domains.some(d=>d.id===item.domain)?item.domain:null);
  }
  function matches(item,options={}) {
    const {lens='wbg',query=''}=options,d=dataOf(options.data),domain=options.domain || 'all',horizon=options.horizon || 'all';
    if(options.allowedIds){const ids=options.allowedIds;if(typeof ids.has==='function'?!ids.has(item.id):!ids.includes(item.id))return false;}
    if(item.lenses && !item.lenses.includes(lens)) return false;
    if(!domainOf(item,lens,d)) return false;
    if(domain!=='all' && domainOf(item,lens,d)!==domain) return false;
    if(horizon!=='all' && horizonOf(item)!==horizon) return false;
    const q=clean(query).toLowerCase();
    if(q){const text=[item.name,item.title,item.shortTitle,item.category,item.summary,item.proposedUse,item.application,item.region,...(item.capabilities||[])].join(' ').toLowerCase();if(!text.includes(q))return false;}
    return true;
  }
  function getItems(options={}) {return (dataOf(options.data)[kindOf(options)]||[]).filter(item=>matches(item,options));}
  function layout(options={}) {
    const d=dataOf(options.data),lens=options.lens || 'wbg',kind=kindOf(options),key=lens+':'+kind;
    let cache=layoutCache.get(d);if(!cache){cache=new Map();layoutCache.set(d,cache);}
    let base=cache.get(key);
    if(!base){
      const domains=getDomains(lens,d),step=TAU/Math.max(1,domains.length),nodes=[];
      const items=(d[kind]||[]).filter(item=>(!item.lenses || item.lenses.includes(lens))&&domainOf(item,lens,d));
      domains.forEach((domain,di)=>{
        const start=-Math.PI/2+step*di,end=start+step;
        ['now','next','horizon'].forEach((horizon,hi)=>{
          const group=items.filter(item=>domainOf(item,lens,d)===domain.id&&horizonOf(item)===horizon).sort((a,b)=>hash(a.id)-hash(b.id));
          const bands=[[.225,.49],[.535,.735],[.785,.965]],band=bands[hi];
          const placed=[];
          group.forEach((item,index)=>{
            let best=null;
            for(let attempt=0;attempt<44;attempt++){
              const angle=start+step*(.12+unit(item.id+':angle:'+attempt)*.76);
              const r=band[0]+(band[1]-band[0])*unit(item.id+':radius:'+attempt);
              const candidate={x:Math.cos(angle)*r,y:Math.sin(angle)*r,angle,radial:r};
              const gap=placed.length?Math.min(...placed.map(other=>Math.hypot(other.x-candidate.x,other.y-candidate.y))):1;
              if(!best || gap>best.gap) best={...candidate,gap};
              if(gap>.063) break;
            }
            placed.push(best);nodes.push({...best,id:item.id,item,domain:domain.id,domainIndex:di,color:domain.color,horizon,kind:kind==='trends'?'trend':'company',priority:FEATURED.indexOf(item.id)>=0?200-FEATURED.indexOf(item.id):0});
          });
        });
      });
      base={domains,nodes,kind,lens};cache.set(key,base);
    }
    return {...base,nodes:base.nodes.map(node=>({...node,visible:matches(node.item,{...options,data:d})}))};
  }
  function roundedRect(ctx,x,y,w,h,r=6){r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  function withAlpha(hex,opacity){if(hex[0]==='#'&&hex.length===7){return `rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${opacity})`;}return hex;}
  function wrap(ctx,text,maxWidth,maxLines=3){const words=clean(text).split(' '),lines=[];let line='';for(const word of words){const next=line?line+' '+word:word;if(line&&ctx.measureText(next).width>maxWidth){lines.push(line);line=word;}else line=next;}if(line)lines.push(line);if(lines.length<=maxLines)return lines;const result=lines.slice(0,maxLines);let last=result[maxLines-1];while(last&&ctx.measureText(last+'…').width>maxWidth)last=last.slice(0,-1);result[maxLines-1]=last+'…';return result;}
  function splitDomain(name){const parts=String(name).split(' & ');if(parts.length===2)return [parts[0],'& '+parts[1]];if(name==='Health, skills & jobs')return ['Health, skills','& jobs'];return [name];}
  function intersects(a,b,pad=4){return a.x<b.x+b.w+pad&&a.x+a.w+pad>b.x&&a.y<b.y+b.h+pad&&a.y+a.h+pad>b.y;}
  // Time-driven scanning is independent of point, label and hit-target geometry.
  function sweepAt(seconds=0){const phase=((Number(seconds)||0)%SWEEP_PERIOD+SWEEP_PERIOD)%SWEEP_PERIOD;return {angle:-Math.PI/2+phase/SWEEP_PERIOD*TAU,period:SWEEP_PERIOD,trail:1.12};}
  function draw(ctx,options={}) {
    const width=options.width || ctx.canvas.width,height=options.height || ctx.canvas.height;
    const data=dataOf(options.data),model=layout({...options,data}),time=Number(options.time)||0;
    const cx=options.centerX??width*.5,cy=options.centerY??height*.5;
    // Reserve horizontal space for sector labels on phones and compact panels.
    const radius=options.radius??Math.min(width<600?width*.29-6:width*.325,height*.365),zoom=Math.max(.1,Number(options.zoom)||1);
    const compact=width<600,baseSize=options.fontSize || (compact?14:Math.max(14,Math.min(16,radius/22)));
    const selectedId=options.selectedId || options.highlightId,hoverId=options.hoverId;
    const focus=model.nodes.find(n=>n.id===options.focusId);
    const focusStrength=Number(options.focusStrength??(focus?1:0));
    const shiftX=focus?-focus.x*radius*(zoom-1)*focusStrength:0,shiftY=focus?-focus.y*radius*(zoom-1)*focusStrength:0;
    const drawCx=cx+shiftX,drawCy=cy+shiftY,drawR=radius*zoom;
    const sweep=sweepAt(time),moving=options.motion!==false;
    const alpha=Number(options.alpha??1),domainFilter=options.domain && options.domain!=='all'?options.domain:null;
    const hoveredDomain=options.hoverDomain||null;
    ctx.save();ctx.globalAlpha=alpha;
    if(options.background!==false){
      ctx.fillStyle=options.pureBlack?'#000000':COLORS.ink;ctx.fillRect(0,0,width,height);
      if(options.pureBlack){ctx.save();ctx.beginPath();ctx.arc(width/2,height/2,Math.min(width,height)*.49,0,TAU);ctx.clip();}
      const glow=ctx.createRadialGradient(width*.5,height*1.06,0,width*.5,height*1.04,Math.max(width*.7,height*.9));
      glow.addColorStop(0,'#1949d5');glow.addColorStop(.3,'#10275e');glow.addColorStop(.66,COLORS.ink);glow.addColorStop(1,COLORS.ink);
      ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
      if(options.pureBlack)ctx.restore();
    }
    const clip=options.clip || null;
    if(clip){ctx.beginPath();ctx.rect(clip.x,clip.y,clip.w,clip.h);ctx.clip();}
    const sectors=[],labels=[],occupied=[...(options.labelExclusions||[])],ringLabelBoxes=[];
    const step=TAU/Math.max(1,model.domains.length);
    model.domains.forEach((domain,index)=>{
      const start=-Math.PI/2+index*step,end=start+step,active=domainFilter===domain.id||hoveredDomain===domain.id;
      if(active){
        const fill=ctx.createRadialGradient(drawCx,drawCy,drawR*.12,drawCx,drawCy,drawR);
        fill.addColorStop(0,withAlpha(domain.color,.035));fill.addColorStop(1,withAlpha(domain.color,.13));
        ctx.beginPath();ctx.moveTo(drawCx,drawCy);ctx.arc(drawCx,drawCy,drawR,start,end);ctx.closePath();ctx.fillStyle=fill;ctx.fill();
        ctx.beginPath();ctx.arc(drawCx,drawCy,drawR,start+.018,end-.018);ctx.strokeStyle=withAlpha(domain.color,.85);ctx.lineWidth=2;ctx.stroke();
      }
      ctx.beginPath();ctx.moveTo(drawCx+Math.cos(start)*drawR*.135,drawCy+Math.sin(start)*drawR*.135);ctx.lineTo(drawCx+Math.cos(start)*drawR,drawCy+Math.sin(start)*drawR);ctx.strokeStyle='rgba(116,155,213,.19)';ctx.lineWidth=.8;ctx.setLineDash([2,7]);ctx.stroke();ctx.setLineDash([]);
      const angle=start+step/2,labelRadius=drawR+baseSize*(compact?1.8:2.6),rawLx=drawCx+Math.cos(angle)*labelRadius,ly=drawCy+Math.sin(angle)*labelRadius;
      const lines=splitDomain(domain.shortName||domain.name),font=compact?baseSize:baseSize+1;
      // Hover changes color only, so sector label bounds cannot displace names.
      ctx.font=`400 ${font}px ${FONT}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=domainFilter&&!active?'#66809f':active?'#f7fbff':'#a7bddb';
      const widest=Math.max(...lines.map(line=>ctx.measureText(line).width));
      const lx=Math.max(widest/2+9,Math.min(width-widest/2-9,rawLx));
      const box={x:lx-widest/2-5,y:ly-lines.length*(font+3)/2-4,w:widest+10,h:lines.length*(font+3)+8};
      if(options.domainLabels!==false){
        lines.forEach((line,li)=>ctx.fillText(line,lx,ly+(li-(lines.length-1)/2)*(font+3)));
        const dotX=lx-(Math.min(widest,65))/2,dotY=box.y-8;ctx.beginPath();ctx.moveTo(dotX,dotY);ctx.lineTo(dotX+Math.min(widest,65),dotY);ctx.strokeStyle=withAlpha(domain.color,active?1:.65);ctx.lineWidth=2;ctx.stroke();occupied.push(box);
      }
      sectors.push({id:domain.id,item:domain,start,end,cx:drawCx,cy:drawCy,radius:drawR,label:box});
    });
    // A visible clockwise scanner, with a soft trail and a crisp leading beam.
    // Pause freezes the scanner; the map and its clickable names never rotate.
    ctx.save();
    // Additive adjacent slices avoid seams and render identically in browser
    // Canvas and the offline film encoder (conic gradients differ between them).
    const wash=ctx.createRadialGradient(drawCx,drawCy,drawR*.13,drawCx,drawCy,drawR);
    wash.addColorStop(0,'rgba(41,104,174,.025)');wash.addColorStop(.5,'rgba(53,129,215,.12)');wash.addColorStop(1,'rgba(86,170,245,.30)');
    ctx.globalCompositeOperation='lighter';
    const slices=72;
    for(let i=0;i<slices;i++){
      const start=sweep.angle-sweep.trail+sweep.trail*i/slices,end=start+sweep.trail/slices;
      ctx.globalAlpha=alpha*Math.pow((i+1)/slices,1.65);ctx.fillStyle=wash;
      ctx.beginPath();ctx.moveTo(drawCx,drawCy);ctx.arc(drawCx,drawCy,drawR,start,end);ctx.closePath();ctx.fill();
    }
    ctx.globalCompositeOperation='source-over';
    ctx.globalAlpha=alpha;
    const bx=drawCx+Math.cos(sweep.angle)*drawR,by=drawCy+Math.sin(sweep.angle)*drawR;
    const beam=ctx.createLinearGradient(drawCx,drawCy,bx,by);
    beam.addColorStop(0,'rgba(95,180,255,0)');beam.addColorStop(.3,'rgba(103,195,255,.4)');beam.addColorStop(1,'rgba(165,226,255,.95)');
    ctx.beginPath();ctx.moveTo(drawCx+Math.cos(sweep.angle)*drawR*.13,drawCy+Math.sin(sweep.angle)*drawR*.13);ctx.lineTo(bx,by);
    ctx.strokeStyle=beam;ctx.lineWidth=1.5;ctx.shadowColor='#45a6ff';ctx.shadowBlur=8;ctx.stroke();
    ctx.beginPath();ctx.arc(drawCx,drawCy,drawR,sweep.angle-.16,sweep.angle);ctx.strokeStyle='rgba(139,218,255,.9)';ctx.lineWidth=2.2;ctx.stroke();
    ctx.beginPath();ctx.arc(bx,by,2.1,0,TAU);ctx.fillStyle='#b9eaff';ctx.fill();ctx.restore();
    [.51,.76,1].forEach((r,index)=>{
      ctx.beginPath();ctx.arc(drawCx,drawCy,drawR*r,0,TAU);ctx.strokeStyle=index===2?'rgba(130,170,231,.32)':'rgba(130,170,231,.22)';ctx.lineWidth=index===2?1.1:.8;ctx.stroke();
    });
    // Small perimeter marks make the scanner legible without adding more text.
    for(let i=0;i<60;i++){
      const a=i*TAU/60,major=i%5===0;
      ctx.beginPath();ctx.moveTo(drawCx+Math.cos(a)*drawR*1.014,drawCy+Math.sin(a)*drawR*1.014);ctx.lineTo(drawCx+Math.cos(a)*drawR*(major?1.035:1.025),drawCy+Math.sin(a)*drawR*(major?1.035:1.025));ctx.strokeStyle=major?'rgba(127,177,236,.29)':'rgba(127,177,236,.14)';ctx.lineWidth=major?1:.7;ctx.stroke();
    }
    const ringNames=[['NOW',.355],['NEXT',.645],['HORIZON',.88]];
    if(options.ringLabels!==false){const size=Math.max(10,baseSize-3);ctx.font=`${size}px ${FONT}`;ringNames.forEach(([name,r])=>{const box={x:drawCx+4,y:drawCy-drawR*r-size*.6-3,w:ctx.measureText(name).width+8,h:size*1.2+6,name,size};ringLabelBoxes.push(box);occupied.push(box);});}
    const inner=drawR*.13;
    ctx.beginPath();ctx.arc(drawCx,drawCy,inner,0,TAU);ctx.fillStyle='#09182e';ctx.fill();ctx.strokeStyle='rgba(121,165,226,.32)';ctx.lineWidth=.8;ctx.stroke();
    ctx.font=`${Math.max(10,baseSize-2)}px ${FONT}`;ctx.fillStyle='#a4c0e5';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(options.centerLabel||'WBG',drawCx,drawCy);
    occupied.push({x:drawCx-inner-5,y:drawCy-inner-5,w:inner*2+10,h:inner*2+10});
    const points=model.nodes.map(node=>({...node,x:drawCx+node.x*drawR,y:drawCy+node.y*drawR,r:node.id===selectedId?5:node.id===hoverId?4.6:node.visible?3.2:1.8}));
    points.forEach(point=>{
      const active=point.id===selectedId||point.id===hoverId,visibility=point.visible?1:.11;
      ctx.globalAlpha=alpha*visibility;
      const lag=((sweep.angle-point.angle)%TAU+TAU)%TAU,echo=moving&&point.visible?Math.max(0,1-lag/.70):0;
      if(echo>0){ctx.beginPath();ctx.arc(point.x,point.y,6+(1-echo)*4,0,TAU);ctx.fillStyle=withAlpha(point.color,echo*.13);ctx.fill();ctx.beginPath();ctx.arc(point.x,point.y,5+(1-echo)*3,0,TAU);ctx.strokeStyle=withAlpha(point.color,echo*.42);ctx.lineWidth=.8;ctx.stroke();}
      if(active){ctx.beginPath();ctx.arc(point.x,point.y,11+(options.motion===false?0:Math.sin(time*2)*1.6),0,TAU);ctx.strokeStyle=withAlpha(point.color,.42);ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.arc(point.x,point.y,7.3,0,TAU);ctx.strokeStyle=point.color;ctx.lineWidth=1;ctx.stroke();}
      ctx.beginPath();ctx.arc(point.x,point.y,point.r,0,TAU);ctx.fillStyle=point.color;ctx.fill();
      if(active||echo>.15){ctx.fillStyle=active?'#ffffff':withAlpha('#e5f7ff',echo*.8);ctx.beginPath();ctx.arc(point.x,point.y,active?2:1.6,0,TAU);ctx.fill();}
    });
    ctx.globalAlpha=alpha;
    const filtered=Boolean(domainFilter||options.query||(options.horizon&&options.horizon!=='all'));
    const maxLabels=options.labels==='none'?0:Number(options.maxLabels)||(compact?(filtered?10:8):options.labels==='more'||options.labels==='all'?(filtered?32:30):(filtered?24:18));
    const candidates=points.filter(p=>p.visible).sort((a,b)=>{
      const score=p=>(p.id===selectedId?100000:0)+(options.featuredIds?.includes(p.id)?5000:0)+p.priority+unit(p.id)*10;
      return score(b)-score(a);
    });
    const perSector=new Map();
    for(const point of candidates){
      if(labels.length>=maxLabels)break;
      const selected=point.id===selectedId,active=selected||point.id===hoverId,count=perSector.get(point.domain)||0;
      if(!filtered&&!selected&&count>=Math.ceil(maxLabels/model.domains.length))continue;
      // Keep hover targets fixed between pointermove and click.
      const text=nameOf(point.item),fontSize=selected?baseSize+1:baseSize;
      ctx.font=`${selected?'600':'400'} ${fontSize}px ${FONT}`;
      const companyLogos=options.companyLogos,logoEntry=point.kind==='company'&&companyLogos?.atlas?companyLogos.manifest?.items?.[point.id]:null;
      const hasLogo=logoEntry&&Number.isInteger(logoEntry.index)&&Number(companyLogos.manifest.tile)>0&&Number(companyLogos.manifest.columns)>0;
      const logoSize=hasLogo?Math.max(24,Math.round(fontSize*1.45)):0,logoSpace=hasLogo?logoSize+8:0;
      const maxTextWidth=compact?130:215,lines=wrap(ctx,text,maxTextWidth,2),textWidth=Math.max(...lines.map(line=>ctx.measureText(line).width)),lh=fontSize+3;
      const w=textWidth+14+logoSpace,h=Math.max(lines.length*lh+8,logoSize+8),right=point.x>=drawCx,offsets=right?[[12,-h/2],[12,-h-9],[12,9],[-w-12,-h/2],[-w-12,-h-9],[-w-12,9]]:[[-w-12,-h/2],[-w-12,-h-9],[-w-12,9],[12,-h/2],[12,-h-9],[12,9]];
      let best=null;
      const bounds=options.labelBounds||clip||{x:0,y:0,w:width,h:height};
      for(const [ox,oy] of offsets){const rect={x:point.x+ox,y:point.y+oy,w,h};if(rect.x<bounds.x+6||rect.y<bounds.y+6||rect.x+w>bounds.x+bounds.w-6||rect.y+h>bounds.y+bounds.h-6)continue;if(occupied.some(other=>intersects(rect,other,3)))continue;if(points.some(other=>other.id!==point.id&&other.visible&&other.x>rect.x-4&&other.x<rect.x+w+4&&other.y>rect.y-4&&other.y<rect.y+h+4))continue;best=rect;break;}
      if(!best&&selected){const ox=right?12:-w-12;best={x:Math.max(bounds.x+8,Math.min(bounds.x+bounds.w-w-8,point.x+ox)),y:Math.max(bounds.y+8,Math.min(bounds.y+bounds.h-h-8,point.y-h-12)),w,h};}
      if(!best)continue;
      const nearX=point.x<best.x?best.x:point.x>best.x+w?best.x+w:point.x,nearY=Math.max(best.y+4,Math.min(best.y+h-4,point.y));
      ctx.beginPath();ctx.moveTo(point.x,point.y);ctx.lineTo(nearX,nearY);ctx.strokeStyle=withAlpha(point.color,active?.8:.38);ctx.lineWidth=.8;ctx.stroke();
      roundedRect(ctx,best.x,best.y,w,h,4);ctx.fillStyle=active?'rgba(17,43,78,.98)':'rgba(6,17,35,.86)';ctx.fill();if(active){ctx.strokeStyle=withAlpha(point.color,.75);ctx.lineWidth=.8;ctx.stroke();}
      if(hasLogo){
        const {tile,columns}=companyLogos.manifest,lx=best.x+6,ly=best.y+(h-logoSize)/2;
        roundedRect(ctx,lx,ly,logoSize,logoSize,4);ctx.fillStyle='#ffffff';ctx.fill();
        const inset=3;ctx.drawImage(companyLogos.atlas,(logoEntry.index%columns)*tile,Math.floor(logoEntry.index/columns)*tile,tile,tile,lx+inset,ly+inset,logoSize-inset*2,logoSize-inset*2);
      }
      ctx.fillStyle=active?'#ffffff':'#c7d8ef';ctx.textAlign='left';ctx.textBaseline='top';lines.forEach((line,i)=>ctx.fillText(line,best.x+7+logoSpace,best.y+(h-lines.length*lh)/2+i*lh));
      occupied.push(best);labels.push({...best,id:point.id,item:point.item,type:point.kind,text});perSector.set(point.domain,count+1);
    }
    ringLabelBoxes.forEach(box=>{roundedRect(ctx,box.x,box.y,box.w,box.h,3);ctx.fillStyle='rgba(6,17,35,.92)';ctx.fill();ctx.font=`${box.size}px ${FONT}`;ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle='rgba(164,190,225,.84)';ctx.fillText(box.name,box.x+4,box.y+box.h/2);});
    ctx.restore();
    return {points,nodes:points,labels,sectors,width,height,cx:drawCx,cy:drawCy,radius:drawR,hitRadius:compact?18:14,sweep:{...sweep,moving},lens:model.lens,kind:model.kind,counts:{visible:points.filter(p=>p.visible).length,total:points.length}};
  }
  function hitTest(x,y,scene){
    if(typeof x==='object'){const s=x;x=y;y=scene;scene=s;}
    if(!scene)return null;
    const label=scene.labels.slice().reverse().find(l=>x>=l.x&&x<=l.x+l.w&&y>=l.y&&y<=l.y+l.h);if(label)return {type:label.type,id:label.id,item:label.item};
    const points=scene.points||scene.nodes||[];let best=null,distance=Infinity;
    points.forEach(point=>{if(!point.visible)return;const d=Math.hypot(x-point.x,y-point.y);if(d<Math.max(scene.hitRadius||14,point.r+7)&&d<distance){best=point;distance=d;}});
    if(best)return {type:best.kind,id:best.id,item:best.item};
    const domainLabel=scene.sectors.find(s=>s.label&&x>=s.label.x-8&&x<=s.label.x+s.label.w+8&&y>=s.label.y-8&&y<=s.label.y+s.label.h+8);if(domainLabel)return {type:'domain',id:domainLabel.id,item:domainLabel.item};
    const dx=x-scene.cx,dy=y-scene.cy,r=Math.hypot(dx,dy);if(r<scene.radius*.14||r>scene.radius)return null;
    let angle=Math.atan2(dy,dx);if(angle<-Math.PI/2)angle+=TAU;const sector=scene.sectors.find(s=>angle>=s.start&&angle<s.end);return sector?{type:'domain',id:sector.id,item:sector.item}:null;
  }
  root.RadarCore=Object.freeze({COLORS,FONT,LENSES,FEATURED,SWEEP_PERIOD,sweepAt,getDomains,getItems,matches,layout,draw,hitTest,nameOf,horizonOf,domainOf,wrap,roundedRect,withAlpha});
})(typeof window!=='undefined'?window:globalThis);
