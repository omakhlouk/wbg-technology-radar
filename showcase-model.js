/* Shared, deterministic scene selection for the live radar and exported film. */
(function (root) {
  'use strict';
  const data = root.RADAR_DATA || {companies:[],trends:[],domains:[],sources:[]};
  const story = root.RADAR_SHOWCASE || {scenes:[],meta:{}};
  const byCompany = Object.fromEntries(data.companies.map(item => [item.id,item]));
  const byTrend = Object.fromEntries(data.trends.map(item => [item.id,item]));
  const bySource = Object.fromEntries(data.sources.map(item => [item.id,item]));
  const lensNames = {all:'Full showcase',wbg:'WBG development',its:'ITS & enterprise',frontier:'Frontier'};
  function scenesFor(lens='all',chapter='auto') {
    if(chapter!=='auto') {
      const chosen = story.scenes.find(scene=>scene.id===chapter);
      if(chosen) return [chosen];
    }
    const scenes = story.scenes.filter(scene=>lens==='all'||scene.lens===lens);
    return scenes.length ? scenes : story.scenes;
  }
  function sceneDuration(scene,options={}) {
    return Math.max(2,Number(options.secondsPerScene)||Number(scene.duration)||Number(story.meta.sceneDurationSeconds)||10);
  }
  function timelineFor(options={}) {
    let start=0;
    return scenesFor(options.lens,options.chapter).map(scene=>{
      const duration=sceneDuration(scene,options),entry={scene,start,duration,end:start+duration};
      start=entry.end;return entry;
    });
  }
  function duration(options={}) {return timelineFor(options).reduce((sum,entry)=>sum+entry.duration,0);}
  function frameAt(seconds,options={}) {
    const lens = ['all','wbg','its','frontier'].includes(options.lens) ? options.lens : 'all';
    const timeline = timelineFor({...options,lens,chapter:options.chapter||'auto'});
    const scenes = timeline.map(entry=>entry.scene);
    const total = timeline.length?timeline[timeline.length-1].end:0;
    const absoluteTime = Math.max(0,Number(seconds)||0);
    const time = total ? absoluteTime%total : 0;
    const index = Math.max(0,timeline.findIndex(entry=>time<entry.end));
    const scene = scenes[index]||{id:'overview',title:'Technology & Innovation Radar',companyIds:[]};
    const start=timeline[index]?.start||0,secondsPerScene=timeline[index]?.duration||10;
    const localTime=time-start;
    const focalIds = new Set(scene.companyIds||[]);
    const companies = data.companies.filter(c=>lens==='all'||c.lenses.includes(lens)||focalIds.has(c.id));
    const sectors = story.overview?.sectors||[];
    const domains = data.domains.map(domain=>({
      ...domain,name:sectors.find(s=>s.id===domain.id)?.label||domain.name,
      shortName:sectors.find(s=>s.id===domain.id)?.label||domain.shortName
    }));
    return {
      time:absoluteTime,sceneTime:localTime,sceneIndex:index,
      sceneCount:scenes.length,sceneDuration:secondsPerScene,totalDuration:total,
      progress:secondsPerScene?localTime/secondsPerScene:0,
      sequenceProgress:total?time/total:0,
      labelPage:(scene.labelPage??index)+Math.floor(absoluteTime/(total||1))*(story.meta.trendSceneCount||12),
      scene:{...scene,squareInsight:scene.squareInsight||scene.implication},companies,
      allCompanies:data.companies,domains,
      trends:data.trends.filter(t=>lens==='all'||t.lenses.includes(lens)),
      highlightId:options.selectedId||null,checked:data.meta?.checked||'2026-11-23',
      counts:{companies:data.companies.length,trends:data.trends.length,sources:data.sources.length}
    };
  }
  root.RadarShowcaseModel=Object.freeze({data,story,byCompany,byTrend,bySource,lensNames,scenesFor,sceneDuration,timelineFor,duration,frameAt});
})(typeof window!=='undefined'?window:globalThis);
