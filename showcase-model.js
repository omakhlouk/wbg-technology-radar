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
  function duration(options={}) {return scenesFor(options.lens,options.chapter).length * Math.max(2,Number(options.secondsPerScene)||10);}
  function frameAt(seconds,options={}) {
    const lens = ['all','wbg','its','frontier'].includes(options.lens) ? options.lens : 'all';
    const scenes = scenesFor(lens,options.chapter||'auto');
    const secondsPerScene = Math.max(2,Number(options.secondsPerScene)||10);
    const total = scenes.length*secondsPerScene;
    const absoluteTime = Math.max(0,Number(seconds)||0);
    const time = total ? absoluteTime%total : 0;
    const index = Math.min(scenes.length-1,Math.floor(time/secondsPerScene));
    const scene = scenes[index]||{id:'overview',title:'Technology & Innovation Radar',companyIds:[]};
    const focalIds = new Set(scene.companyIds||[]);
    const companies = data.companies.filter(c=>lens==='all'||c.lenses.includes(lens)||focalIds.has(c.id));
    const sectors = story.overview?.sectors||[];
    const domains = data.domains.map(domain=>({
      ...domain,name:sectors.find(s=>s.id===domain.id)?.label||domain.name,
      shortName:sectors.find(s=>s.id===domain.id)?.label||domain.shortName
    }));
    return {
      time:absoluteTime,sceneTime:time-index*secondsPerScene,sceneIndex:index,
      sceneCount:scenes.length,sceneDuration:secondsPerScene,totalDuration:total,
      progress:secondsPerScene?(time-index*secondsPerScene)/secondsPerScene:0,
      sequenceProgress:total?time/total:0,labelPage:Math.floor(absoluteTime/secondsPerScene),
      scene:{...scene,squareInsight:scene.squareInsight||scene.implication},companies,
      allCompanies:data.companies,domains,
      trends:data.trends.filter(t=>lens==='all'||t.lenses.includes(lens)),
      highlightId:options.selectedId||null,checked:data.meta?.checked||'2026-11-23',
      counts:{companies:data.companies.length,trends:data.trends.length,sources:data.sources.length}
    };
  }
  root.RadarShowcaseModel=Object.freeze({data,story,byCompany,byTrend,bySource,lensNames,scenesFor,duration,frameAt});
})(typeof window!=='undefined'?window:globalThis);
