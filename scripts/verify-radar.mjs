#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data.json'),'utf8'));
const sandbox={console};sandbox.window=sandbox;sandbox.globalThis=sandbox;vm.createContext(sandbox);
for(const file of ['data.js','radar-core.js','radar-film.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
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
const sha=file=>createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
const films=[];
if(!process.argv.includes('--data-only'))for(const name of ['radar-hologram-1080.mp4','radar-widescreen-1080.mp4']){
 const meta=JSON.parse(fs.readFileSync(path.join(root,name+'.json'),'utf8'));
 assert.equal(meta.sha256,sha(name),'Film bytes do not match provenance');
 for(const [file,hash] of Object.entries(meta.inputs))assert.equal(sha(file),hash,'Film is out of sync with '+file);
 assert.equal(meta.durationSeconds,180);assert.equal(meta.fps,30);assert.equal(meta.companyCount,data.companies.length);assert.equal(meta.trendCount,data.trends.length);
 films.push({name,bytes:meta.bytes,sha256:meta.sha256});
}
console.log(JSON.stringify({ok:true,companies:data.companies.length,trends:data.trends.length,sources:data.sources.length,sharedCoordinates:true,canonicalData:true,films},null,2));
