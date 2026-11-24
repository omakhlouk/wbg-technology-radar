#!/usr/bin/env node
/* Deterministic interaction regressions. This does not replace live-browser QA. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const {createCanvas,loadImage}=require(require.resolve('@napi-rs/canvas',{paths:[process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,path.join(root,'node_modules')].filter(Boolean)}));
const source=file=>fs.readFileSync(path.join(root,file),'utf8');
const data=JSON.parse(source('data.json'));
const coreVM={console};coreVM.window=coreVM;coreVM.globalThis=coreVM;vm.createContext(coreVM);
vm.runInContext(source('radar-core.js'),coreVM,{filename:'radar-core.js'});
const Core=coreVM.RadarCore;
const logoManifest={tile:128,columns:12,rows:Math.ceil(data.companies.length/12),items:Object.fromEntries(data.companies.map((c,index)=>[c.id,{index}]))};
const testLogos={atlas:await loadImage(createCanvas(logoManifest.tile*logoManifest.columns,logoManifest.tile*logoManifest.rows).toBuffer('image/png')),manifest:logoManifest};
let labelChecks=0,pointChecks=0,filterChecks=0;
for(const [width,height] of [[360,455],[768,660],[1292,660],[1420,760]]){
 const ctx=createCanvas(width,height).getContext('2d');
 for(const lens of ['wbg','its','frontier'])for(const kind of ['companies','trends']){
  const options={data,width,height,lens,kind,labels:'smart',maxLabels:width<600?10:18,time:2,companyLogos:testLogos};
  const before=Core.draw(ctx,options);
  for(const label of before.labels){
   const hovered=Core.draw(ctx,{...options,hoverId:label.id}),after=hovered.labels.find(x=>x.id===label.id);
   assert(after,`Hover removed label ${label.id} at ${width}px`);
   for(const key of ['x','y','w','h'])assert.equal(after[key],label[key],`Hover moved ${label.id}.${key} at ${width}px`);
   const hit=Core.hitTest(label.x+label.w/2,label.y+label.h/2,hovered);
   assert.equal(hit?.id,label.id,`Hover changed click target for ${label.id} at ${width}px`);
   labelChecks++;
  }
  for(const point of before.points.filter(x=>x.visible)){
   assert.equal(Core.hitTest(point.x,point.y,before)?.id,point.id,`Point center failed for ${point.id} at ${width}px`);
   pointChecks++;
  }
  for(const domain of Core.getDomains(lens,data)){
   const filtered=Core.draw(ctx,{...options,domain:domain.id});
   for(const point of filtered.points.filter(x=>!x.visible)){
    assert.notEqual(Core.hitTest(point.x,point.y,filtered)?.id,point.id,`Filtered point remained clickable: ${point.id}`);
    filterChecks++;
   }
  }
 }
}
assert.equal(Core.SWEEP_PERIOD,10,'One sweep should take ten seconds');
assert(Math.abs(Core.sweepAt(0).angle-Core.sweepAt(10).angle)<1e-10,'Sweep does not loop exactly');
assert(Math.abs(Core.sweepAt(2.5).angle-Core.sweepAt(0).angle-Math.PI/2)<1e-10,'Sweep does not advance one quarter-turn');
const staticScene=Core.draw(createCanvas(768,660).getContext('2d'),{data,width:768,height:660,motion:false,time:4});
assert.equal(staticScene.sweep.moving,false,'Pause/reduced motion must disable scanner movement');

/* Small DOM implementation supplies event plumbing, not application behavior.
   Actual HTML, application script, canvas drawing and hit testing run unchanged. */
const unescapeHTML=s=>String(s).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const voidTags=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
class Element {
 constructor(tag,attrs={},doc){this.tagName=tag.toUpperCase();this.attributes={...attrs};this.ownerDocument=doc;this.children=[];this.parentElement=null;this.listeners={};this.dataset={};this.style={setProperty(k,v){this[k]=v;}};this.hidden='hidden'in attrs;this.open=false;this.value=attrs.value||'';this.scrollTop=0;this._text='';this._html='';this.rect={left:0,top:0,width:0,height:0};for(const [k,v]of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=v;this.classes=new Set((attrs.class||'').split(/\s+/).filter(Boolean));this.classList={add:(...v)=>v.forEach(x=>this.classes.add(x)),remove:(...v)=>v.forEach(x=>this.classes.delete(x)),contains:v=>this.classes.has(v),toggle:(v,on)=>{on=on??!this.classes.has(v);on?this.classes.add(v):this.classes.delete(v);return on;}};if(tag==='canvas')this._canvas=createCanvas(300,150);}
 get id(){return this.attributes.id;}
 get className(){return [...this.classes].join(' ');}set className(value){this.attributes.class=String(value);this.classes=new Set(String(value).split(/\s+/).filter(Boolean));}
 get width(){return this._canvas?.width||0;}set width(v){if(this._canvas)this._canvas.width=v;}
 get height(){return this._canvas?.height||0;}set height(v){if(this._canvas)this._canvas.height=v;}
 getContext(type){return this._canvas.getContext(type);}
 set innerHTML(html){this._html=String(html);this.children=[];parseHTML(this._html,this,this.ownerDocument);}
 get innerHTML(){return this._html;}
 set textContent(text){this._text=String(text);this.children=[];this._html=this._text;}
 get textContent(){return this._text||unescapeHTML(this._html.replace(/<[^>]*>/g,''));}
 appendChild(child){if(child.parentElement)child.remove();child.parentElement=this;this.children.push(child);return child;}
 append(...children){children.forEach(child=>this.appendChild(child));}
 contains(child){for(let node=child;node;node=node.parentElement)if(node===this)return true;return false;}
 remove(){if(this.parentElement)this.parentElement.children=this.parentElement.children.filter(x=>x!==this);this.parentElement=null;}
 setAttribute(k,v){this.attributes[k]=String(v);if(k==='class')this.classes=new Set(String(v).split(/\s+/));}
 getAttribute(k){if(k.startsWith('data-'))return this.dataset[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]??null;return this.attributes[k]??null;}
 removeAttribute(k){delete this.attributes[k];}
 addEventListener(type,fn){(this.listeners[type]??=[]).push(fn);}
 removeEventListener(type,fn){this.listeners[type]=(this.listeners[type]||[]).filter(x=>x!==fn);}
 focus(){this.ownerDocument.activeElement=this;}
 select(){this.focus();}
 matches(selector){return selector.split(',').some(part=>{part=part.trim();const tag=part.match(/^[\w-]+/)?.[0];if(tag&&this.tagName!==tag.toUpperCase())return false;for(const id of part.matchAll(/#([\w-]+)/g))if(this.id!==id[1])return false;for(const cls of part.matchAll(/\.([\w-]+)/g))if(!this.classes.has(cls[1]))return false;for(const attr of part.matchAll(/\[([\w-]+)(?:=["']?([^\]"']+)["']?)?\]/g)){const value=this.getAttribute(attr[1]);if(value===null||(attr[2]!==undefined&&value!==attr[2]))return false;}return true;});}
 closest(selector){for(let node=this;node;node=node.parentElement)if(node.matches(selector))return node;return null;}
 querySelectorAll(selector){const parts=selector.trim().split(/\s+/);let roots=[this];for(const part of parts){const next=[];for(const start of roots){const visit=node=>{for(const child of node.children){if(child.matches(part))next.push(child);visit(child);}};visit(start);}roots=next;}return roots;}
 querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
 getBoundingClientRect(){return {...this.rect,right:this.rect.left+this.rect.width,bottom:this.rect.top+this.rect.height,x:this.rect.left,y:this.rect.top};}
 setPointerCapture(){}releasePointerCapture(){}hasPointerCapture(){return false;}
 showModal(){this.open=true;}close(){this.open=false;}
 requestFullscreen(){this.ownerDocument.fullscreenElement=this;this.ownerDocument.dispatch('fullscreenchange',this.ownerDocument);return Promise.resolve();}
 click(){this.ownerDocument.dispatch('click',this);}
}
function parseHTML(html,parent,doc){
 const stack=[parent];
 for(const match of html.matchAll(/<\/?([\w-]+)\b([^>]*)>/g)){
  const tag=match[1].toLowerCase();
  if(match[0].startsWith('</')){for(let i=stack.length-1;i>0;i--)if(stack[i].tagName===tag.toUpperCase()){stack.length=i;break;}continue;}
  const attrs={};for(const attr of match[2].matchAll(/([\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))attrs[attr[1]]=unescapeHTML(attr[2]??attr[3]??attr[4]??'');
  const element=new Element(tag,attrs,doc);stack.at(-1).appendChild(element);
  if(!voidTags.has(tag)&&!match[0].endsWith('/>'))stack.push(element);
 }
}
function appHarness({width=1292,height=660,dpr=1,reducedMotion=false}={}){
 const doc=new Element('document',{},null);doc.ownerDocument=doc;doc.hidden=false;doc.activeElement=null;doc.createElement=tag=>new Element(tag,{},doc);doc.exitFullscreen=()=>{doc.fullscreenElement=null;doc.dispatch('fullscreenchange',doc);return Promise.resolve();};
 doc.dispatch=(type,target,values={})=>{const event={type,target,button:0,pointerId:1,pointerType:'mouse',isPrimary:true,detail:1,clientX:0,clientY:0,defaultPrevented:false,preventDefault(){this.defaultPrevented=true;},stopPropagation(){this.stopped=true;},...values};for(let node=target;node;node=node.parentElement){for(const listener of node.listeners[type]||[])listener(event);if(event.stopped)break;}return event;};
 parseHTML(source('index.html'),doc,doc);doc.body=doc.querySelector('body');doc.activeElement=doc.body;
 const canvas=doc.querySelector('#radar-canvas');canvas.rect={left:25,top:280,width,height};const film=doc.querySelector('#film-canvas');film.rect={left:25,top:180,width:960,height:540};
 const storage=new Map(),raf=[],resizeObservers=[],winListeners={};let href='https://example.test/#radar';
 const location={get href(){return href;},get search(){return new URL(href).search;},get hash(){return new URL(href).hash;},get pathname(){return new URL(href).pathname;}};
 const sandbox={console,document:doc,location,URL,URLSearchParams,Map,Set,Math,Date,performance:{now:()=>0},devicePixelRatio:dpr,Element,HTMLElement:Element,Image:class{constructor(){this.complete=false;this.naturalWidth=0;}},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v))},history:{replaceState(a,b,url){href=String(url);}},navigator:{clipboard:{writeText:async()=>{}}},matchMedia:()=>({matches:reducedMotion,addEventListener(){}}),requestAnimationFrame:fn=>(raf.push(fn),raf.length),cancelAnimationFrame(){},setTimeout:()=>1,clearTimeout(){},ResizeObserver:class{constructor(fn){this.fn=fn;resizeObservers.push(this);}observe(){}},addEventListener:(type,fn)=>(winListeners[type]??=[]).push(fn),scrollTo(){}};
 sandbox.window=sandbox;sandbox.globalThis=sandbox;vm.createContext(sandbox);
 for(const file of ['data.js','radar-core.js','radar-film.js','company-logos.js','app.js'])if(fs.existsSync(path.join(root,file)))vm.runInContext(source(file),sandbox,{filename:file});
 const frame=t=>{const callbacks=raf.splice(0);callbacks.forEach(fn=>fn(t));};frame(100);
 return {window:sandbox,document:doc,canvas,frame,dispatch:doc.dispatch,dispatchWindow:(type,values={})=>(winListeners[type]||[]).forEach(fn=>fn(values)),resize:()=>resizeObservers.forEach(x=>x.fn()),element:s=>doc.querySelector(s),click:el=>doc.dispatch('click',el),pointer:(type,point,values={})=>doc.dispatch(type,canvas,{clientX:canvas.rect.left+point.x,clientY:canvas.rect.top+point.y,...values})};
}

const baseline=appHarness();
const card=baseline.element('#results-grid .card-open');
assert(card,'The first result must have a profile control');
baseline.click(card.querySelector('h3')||card);
assert.equal(baseline.element('#detail-drawer').hidden,false,'Clicking a company name must open its profile');
assert(baseline.element('#detail-content').innerHTML.includes(data.companies.find(x=>x.id===card.dataset.open).name),'Profile must contain the clicked company');
baseline.dispatch('keydown',baseline.document.body,{key:'Escape'});
assert.equal(baseline.element('#detail-drawer').hidden,true,'Escape must close the profile');

let appScenarios=2;
const close=h=>h.dispatch('keydown',h.document.body,{key:'Escape'});
const chosenPoint=h=>h.window.RadarExplorer.getScene().points.find(p=>p.visible&&p.id==='sarvam')||h.window.RadarExplorer.getScene().points.find(p=>p.visible);
for(const dpr of [1,2]){
 const h=appHarness({dpr});
 const button=h.element('#radar-targets button');
 assert(button,'Visible labels need semantic buttons');
 assert(button.getAttribute('aria-label').startsWith('Open '),'Radar buttons need an accessible action label');
 h.dispatch('pointerover',button);h.frame(200);
 assert.equal(h.element('#radar-targets button'),button,'Hover must preserve the focused semantic button');
 h.dispatch('click',button,{detail:0});
 assert.equal(h.window.RadarExplorer.getState().selectedId,button.dataset.open,'Keyboard activation must open the labeled profile');
 close(h);h.frame(300);appScenarios++;

 let point=chosenPoint(h);
 h.pointer('pointermove',point);h.frame(400);
 h.pointer('pointerdown',point);h.frame(500);h.pointer('pointerup',point);h.pointer('click',point);
 assert.equal(h.window.RadarExplorer.getState().selectedId,point.id,'A canvas point must open the intended profile');
 close(h);h.frame(600);appScenarios++;

 // CSS scaling/zoom can occur between paint and the ResizeObserver redraw.
 // Hit testing must use scene units, independently of backing-store DPR.
 point=chosenPoint(h);h.canvas.rect.width*=.75;h.canvas.rect.height*=.75;
 const scaled={x:point.x*.75,y:point.y*.75};
 h.pointer('pointerdown',scaled);h.pointer('pointerup',scaled);h.pointer('click',scaled);
 assert.equal(h.window.RadarExplorer.getState().selectedId,point.id,`CSS-scaled clicks must work at DPR ${dpr}`);
 close(h);h.resize();h.frame(700);appScenarios++;

 for(const action of ['drag','cancel','scroll']){
  point=chosenPoint(h);h.pointer('pointerdown',point,{pointerType:'touch'});
  if(action==='drag')h.pointer('pointermove',{x:point.x+20,y:point.y+30},{pointerType:'touch'});
  else if(action==='cancel')h.pointer('pointercancel',point,{pointerType:'touch'});
  else h.dispatchWindow('scroll');
  h.pointer('pointerup',point,{pointerType:'touch'});h.pointer('click',point,{pointerType:'touch'});
  assert.equal(h.element('#detail-drawer').hidden,true,`${action} must not open an unintended startup`);
  assert.equal(h.window.RadarExplorer.getState().domain,null,`${action} must not filter an unintended area`);
  appScenarios++;
 }
 // Starting the next gesture must recover from a previous cancelled gesture.
 point=chosenPoint(h);h.pointer('pointerdown',point);h.pointer('click',point);
 assert.equal(h.window.RadarExplorer.getState().selectedId,point.id,'A fresh tap must work after cancelled gestures');
 close(h);h.frame(800);appScenarios++;

 // Capture the record at gesture start even if a redraw changes its label map.
 const target=h.window.RadarExplorer.getScene().labels[0],center={x:target.x+target.w/2,y:target.y+target.h/2};
 h.pointer('pointerdown',center);
 h.canvas.rect.width*=.7;h.canvas.rect.height*=.7;h.resize();h.frame(900);
 h.pointer('click',center);
 assert.equal(h.window.RadarExplorer.getState().selectedId,target.id,'Redraw during a click must preserve its captured record');
 close(h);appScenarios++;
}
const motion=appHarness({reducedMotion:true});
assert.equal(motion.window.RadarExplorer.getState().motion,false,'Reduced-motion preference must be respected');
assert.equal(motion.window.RadarExplorer.getScene().sweep.moving,false);
motion.click(motion.element('#motion-control'));motion.frame(200);motion.frame(250);
assert.equal(motion.window.RadarExplorer.getState().motion,true,'Explicit Start sweep must override the initial reduced-motion preference');
const movingAngle=motion.window.RadarExplorer.getScene().sweep.angle;motion.frame(300);
assert.notEqual(motion.window.RadarExplorer.getScene().sweep.angle,movingAngle,'Started sweep must actually move');
motion.click(motion.element('#motion-control'));motion.frame(350);
const pausedAngle=motion.window.RadarExplorer.getScene().sweep.angle;motion.frame(500);
assert.equal(motion.window.RadarExplorer.getScene().sweep.angle,pausedAngle,'Pause must freeze the current angle');
motion.click(motion.element('#motion-control'));motion.frame(600);
assert.equal(motion.window.RadarExplorer.getScene().sweep.angle,pausedAngle,'Resume must continue from the paused angle');
appScenarios+=4;

// The browser paints only the fullscreen subtree in its fullscreen layer.
// Showing an outside drawer is insufficient even when its hidden flag is false.
const fullscreen=appHarness(),stage=fullscreen.element('#radar-stage');
const originalDrawer=fullscreen.element('#detail-drawer'),originalBackdrop=fullscreen.element('#drawer-backdrop');
fullscreen.click(fullscreen.element('[data-action="fullscreen"]'));
assert.equal(fullscreen.document.fullscreenElement,stage,'Expand must enter radar fullscreen');
fullscreen.frame(200);
const fullscreenButton=fullscreen.element('#radar-targets button');
fullscreen.click(fullscreenButton);
assert.equal(originalDrawer.hidden,false,'Fullscreen label activation must open the profile');
assert(stage.contains(originalDrawer),'Open profile must be mounted inside the fullscreen layer');
assert(stage.contains(originalBackdrop),'Profile backdrop must be mounted inside the fullscreen layer');
assert.equal(fullscreen.window.RadarExplorer.getState().selectedId,fullscreenButton.dataset.open);
assert.equal(fullscreen.document.querySelectorAll('#detail-drawer').length,1,'Reparenting must preserve one drawer');
assert.equal(fullscreen.document.querySelectorAll('#drawer-backdrop').length,1,'Reparenting must preserve one backdrop');
fullscreen.click(fullscreen.element('.drawer-close'));
assert.equal(originalDrawer.hidden,true,'Close control must retain its handler after fullscreen reparenting');
assert.equal(fullscreen.document.fullscreenElement,stage,'Closing a profile must preserve radar fullscreen');
appScenarios+=2;

fullscreen.frame(300);
const fullscreenPoint=fullscreen.window.RadarExplorer.getScene().points.find(p=>p.visible&&p.id==='sylvera')||chosenPoint(fullscreen);
fullscreen.pointer('pointerdown',fullscreenPoint);fullscreen.pointer('click',fullscreenPoint);
assert.equal(fullscreen.window.RadarExplorer.getState().selectedId,fullscreenPoint.id,'Fullscreen point click must open the intended startup');
assert(stage.contains(originalDrawer));
fullscreen.click(originalBackdrop);
assert.equal(originalDrawer.hidden,true,'Backdrop listener must survive reparenting');
assert.equal(fullscreen.document.fullscreenElement,stage);
appScenarios++;

const exitControl=stage.querySelector('.fullscreen-exit');
assert(exitControl,'Fullscreen radar needs an exit control inside its visible subtree');
fullscreen.click(exitControl);
assert.equal(fullscreen.document.fullscreenElement,null,'Exit full screen must leave the fullscreen layer');
assert.equal(originalDrawer.parentElement,fullscreen.document.body);
assert.equal(originalBackdrop.parentElement,fullscreen.document.body);
fullscreen.click(fullscreen.element('[data-action="fullscreen"]'));
assert.equal(fullscreen.document.fullscreenElement,stage,'Radar must be expandable again after exiting');
appScenarios++;

fullscreen.frame(400);
fullscreen.click(fullscreen.element('#radar-targets button'));
const profileBeforeExit=fullscreen.window.RadarExplorer.getState().selectedId;
await fullscreen.document.exitFullscreen();
assert.equal(fullscreen.document.fullscreenElement,null);
assert.equal(originalDrawer.parentElement,fullscreen.document.body,'Exiting fullscreen must return the drawer to the document body');
assert.equal(originalBackdrop.parentElement,fullscreen.document.body,'Exiting fullscreen must return the backdrop to the document body');
assert.equal(fullscreen.element('#detail-drawer'),originalDrawer,'Fullscreen exit must preserve the existing drawer node');
assert.equal(fullscreen.element('#drawer-backdrop'),originalBackdrop,'Fullscreen exit must preserve the existing backdrop node');
assert.equal(originalDrawer.hidden,false,'Exiting fullscreen must keep an open profile visible');
assert.equal(fullscreen.window.RadarExplorer.getState().selectedId,profileBeforeExit,'Fullscreen exit must preserve the current profile');
fullscreen.click(fullscreen.element('.drawer-close'));
assert.equal(originalDrawer.hidden,true,'Close control must still work after returning to the body');
appScenarios++;

console.log(JSON.stringify({ok:true,labelChecks,pointChecks,filterChecks,sweepPeriodSeconds:Core.SWEEP_PERIOD,appScenarios,applicationCoverage:['card and radar button activation','canvas point activation','DPR and CSS scaling','gesture capture across redraw','drag/cancel/scroll suppression','Escape closure','reduced motion and pause/resume','fullscreen profile layer and preserved handlers']},null,2));
