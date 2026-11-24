/* Presentation controls. The exported canvas contains the complete visual story. */
(function () {
  'use strict';
  const $=selector=>document.querySelector(selector), $$=selector=>[...document.querySelectorAll(selector)];
  const M=window.RadarShowcaseModel, R=window.RadarStage, V=window.RadarVideoExport;
  const canvas=$('#radar-canvas'),ctx=canvas.getContext('2d'),stage=$('#stage');
  const query=new URLSearchParams(location.search);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const state={time:0,playing:query.get('play')==='1'||(!reduced&&query.get('play')!=='0'),
    format:query.get('mode')==='hologram'?'square':query.get('mode')==='screen'?'wide':window.innerWidth<760?'square':'wide',
    lens:['wbg','its','frontier'].includes(query.get('lens'))?query.get('lens'):'all',
    chapter:M.story.scenes.some(s=>s.id===query.get('scene'))?query.get('scene'):'auto',
    labels:['all','none'].includes(query.get('labels'))?query.get('labels'):'focus',
    mirror:query.get('mirror')==='1',motion:query.get('motion')==='off'?false:!reduced,
    clean:query.get('clean')==='1',selectedId:null};
  let logo=null,layout=null,currentFrame=null,lastWall=performance.now(),lastRender=0,lastScene='',lastSecond=-1;
  let toastTimer,controlsTimer,restorePlayback=false,recordAbort=null,downloadURL=null,activeDialogTrigger=null;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL=value=>{try{const u=new URL(value,location.href);return ['https:','http:'].includes(u.protocol)?u.href:'#';}catch{return '#';}};
  const stamp=value=>`${Math.floor(Math.max(0,value)/60)}:${String(Math.floor(Math.max(0,value)%60)).padStart(2,'0')}`;
  const frameOptions=()=>({lens:state.lens,chapter:state.chapter,labels:state.labels,selectedId:state.selectedId,secondsPerScene:10});
  const renderOptions=()=>({format:state.format,labels:state.labels,selectedId:state.selectedId,logo,reducedMotion:!state.motion,lens:state.lens});
  const currentDuration=()=>M.duration(frameOptions());
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),4200);}
  function draw(context,width,height,time,modelOptions=frameOptions(),visualOptions=renderOptions(),mirror=state.mirror){
    const frame=M.frameAt(time,modelOptions);
    context.save();if(mirror){context.translate(width,0);context.scale(-1,1);}
    const nextLayout=R.render(context,width,height,frame,visualOptions);context.restore();
    return {frame,layout:nextLayout};
  }
  function render(){
    if(!canvas.width||!canvas.height)return;
    const result=draw(ctx,canvas.width,canvas.height,state.time);layout=result.layout;currentFrame=result.frame;
    const elapsed=state.time%currentDuration();
    $('#timeline').value=String(elapsed);$('#timeline').max=String(currentDuration());
    if(Math.floor(elapsed)!==lastSecond){$('#elapsed-time').textContent=stamp(elapsed);lastSecond=Math.floor(elapsed);}
    $('#total-time').textContent=stamp(currentDuration());
    if(currentFrame.scene.id!==lastScene){
      lastScene=currentFrame.scene.id;const scene=currentFrame.scene;
      $('#chapter-name').textContent=scene.title;$('#chapter-lens').textContent=M.lensNames[scene.lens].toUpperCase();
      $('#scene-description').textContent=`Scene ${currentFrame.sceneIndex+1} of ${currentFrame.sceneCount}. ${scene.title}. ${scene.implication} Featured builders: ${scene.companyIds.map(id=>M.byCompany[id].name).join(', ')}.`;
      const selectedScenes=M.scenesFor(state.lens,state.chapter);
      const featured=new Set(selectedScenes.flatMap(s=>s.companyIds)).size;
      $('#scene-count').textContent=`${selectedScenes.length} ${selectedScenes.length===1?'scene':'scenes'} · ${featured} featured builders`;
    }
    $('#label-summary').textContent=state.labels==='none'?'Select a point to see its name.':`${layout.labelCount} names in view. They rotate with the story.`;
  }
  function resize(){
    const ratio=state.format==='square'?1:16/9;
    const availableWidth=Math.max(100,stage.clientWidth-(state.clean?0:24));
    const availableHeight=Math.max(100,stage.clientHeight);
    const width=Math.min(availableWidth,availableHeight*ratio),height=width/ratio;
    const dpr=Math.min(2,window.devicePixelRatio||1);
    canvas.style.width=width+'px';canvas.style.height=height+'px';
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);render();
  }
  function syncControls(){
    $('#play-button').setAttribute('aria-label',state.playing?'Pause showcase':'Play showcase');
    $('#play-button').setAttribute('aria-pressed',String(state.playing));
    $('#play-button').innerHTML=state.playing?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>';
    $$('[data-format]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.format===state.format)));
    $$('[data-lens]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lens===state.lens)));
    $('#lens-select').value=state.lens;$('#labels-select').value=state.labels;
    $('#mirror-toggle').checked=state.mirror;$('#motion-toggle').checked=state.motion;
    document.body.classList.toggle('clean',state.clean);
  }
  function setPlaying(value){state.playing=value;lastWall=performance.now();syncControls();render();}
  function setLens(lens){state.lens=lens;state.chapter='auto';state.time=0;state.selectedId=null;lastScene='';syncControls();render();renderChapters();}
  function moveScene(direction){
    state.chapter='auto';const count=M.scenesFor(state.lens).length;
    state.time=(((Math.floor(state.time/10)+direction)%count+count)%count)*10;state.selectedId=null;lastScene='';render();
  }
  function revealCleanControls(){if(!state.clean)return;document.body.classList.add('controls-visible');clearTimeout(controlsTimer);controlsTimer=setTimeout(()=>document.body.classList.remove('controls-visible'),2200);}
  function setClean(value){state.clean=value;syncControls();resize();if(value)revealCleanControls();}
  async function fullscreen(){
    closeAllDialogs();setClean(true);
    try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();}
    catch{toast('Cinema view is ready. Your browser did not allow full screen.');}
  }
  function openDialog(id){
    const already=$$('dialog[open]');if(!already.length){restorePlayback=state.playing;activeDialogTrigger=document.activeElement;}
    already.forEach(d=>d.close());state.playing=false;syncControls();
    $('#'+id).showModal();$('#'+id).scrollTop=0;
  }
  function closeAllDialogs(){$$('dialog[open]').forEach(d=>d.close());}
  $$('dialog').forEach(dialog=>{
    dialog.addEventListener('close',()=>{setTimeout(()=>{if(!document.querySelector('dialog[open]')&&!recordAbort){setPlaying(restorePlayback);activeDialogTrigger?.focus?.({preventScroll:true});}},0);});
    dialog.addEventListener('cancel',event=>{if(recordAbort){event.preventDefault();toast('Cancel the recording before closing this window.');}});
  });
  $$('[data-close]').forEach(b=>b.addEventListener('click',()=>{if(recordAbort){toast('Cancel the recording before closing this window.');return;}$('#'+b.dataset.close).close();}));
  function sources(ids){
    return `<ul class="source-list">${[...new Set(ids)].map(id=>M.bySource[id]).filter(Boolean).map(s=>{
      const check=M.story.meta.recheckedSources?.find(x=>x.id===s.id)?.checked||s.checked||M.data.meta.checked;
      return `<li><a href="${esc(safeURL(s.url))}" target="_blank" rel="noopener noreferrer">${esc(s.title||s.publisher)}</a><small>${esc(s.publisher||'Primary source')}${s.date?' · Published '+esc(s.date):''} · Checked ${esc(check)}</small></li>`;
    }).join('')}</ul>`;
  }
  function builderButtons(ids){return `<div class="builder-links">${ids.map(id=>`<button data-company="${esc(id)}">${esc(M.byCompany[id]?.name||id)}</button>`).join('')}</div>`;}
  const boundBuilders=new WeakSet();
  function bindBuilderLinks(){$$('[data-company]').forEach(b=>{if(boundBuilders.has(b))return;boundBuilders.add(b);b.addEventListener('click',()=>showCompany(b.dataset.company));});}
  function showScene(scene=currentFrame.scene){
    $('#details-content').innerHTML=`<p class="eyebrow">${esc(M.lensNames[scene.lens])} · SCENE INSIGHTS</p><h2 id="details-title">${esc(scene.title)}</h2><p class="detail-lead">${esc(scene.implication)}</p><h3>What is changing</h3><p>${esc(scene.claim)}</p>${builderButtons(scene.companyIds)}<h3>The opportunity</h3><p>${esc(scene.detail.opportunity)}</p><h3>Evidence to look for</h3><p>${esc(scene.detail.proofToSeek)}</p><h3>A first experiment</h3><p>${esc(scene.detail.firstExperiment)}</p><h3>The connected trends</h3>${scene.trendIds.map(id=>`<p><strong>${esc(M.byTrend[id]?.shortTitle||M.byTrend[id]?.title)}</strong><br>${esc(M.byTrend[id]?.summary)}</p>`).join('')}<h3>Sources and evidence</h3>${sources(scene.sourceIds)}<p class="small-note">Potential WBG and ITS applications are editorial proposals. Inclusion does not imply adoption or endorsement.</p>`;
    bindBuilderLinks();openDialog('details-dialog');
  }
  function showCompany(id){
    const company=M.byCompany[id];if(!company)return;state.selectedId=id;
    if(state.lens!=='all'&&!company.lenses.includes(state.lens)){state.lens='all';state.chapter='auto';syncControls();}
    const relevantScene=M.story.scenes.find(s=>s.companyIds.includes(id));
    const domain=M.data.domains.find(d=>d.id===company.domain);
    $('#details-content').innerHTML=`<p class="eyebrow">BUILDER SPOTLIGHT</p><h2 id="details-title">${esc(company.name)}</h2><div class="detail-tags"><span>${esc(company.category)}</span><span>${esc(domain?.name||'Technology')}</span><span>${esc(company.horizon||'next')}</span></div><p class="detail-lead">${esc(company.summary)}</p><a class="secondary-button" href="${esc(safeURL(company.website))}" target="_blank" rel="noopener noreferrer">Official website</a><h3>Potential relevance</h3><p>${esc(company.proposedUse||company.relevance||'Review the connected trends and source evidence for possible applications.')}</p>${company.distinctive||company.differentiator?`<h3>What distinguishes it</h3><p>${esc(company.distinctive||company.differentiator)}</p>`:''}${company.evaluationQuestion?`<h3>A question to test</h3><p>${esc(company.evaluationQuestion)}</p>`:''}<h3>Public availability</h3><p>${esc(company.availability||'Confirm current availability with the provider.')}</p><h3>Evidence and limits</h3><p>${esc(company.evidenceLabel||'Public company information')}. ${esc(company.evidenceNote||company.note||'Local suitability and performance have not been independently evaluated here.')}</p>${relevantScene?`<h3>In the showcase</h3><button class="secondary-button" data-jump-scene="${esc(relevantScene.id)}">Show “${esc(relevantScene.radarTitle)}”</button>`:''}<h3>Sources</h3>${sources(company.sourceIds||[])}<p class="small-note">Public-source profile. Potential relevance is our interpretation.</p>`;
    $('[data-jump-scene]')?.addEventListener('click',()=>{selectScene(relevantScene.id);closeAllDialogs();restorePlayback=false;setPlaying(false);});
    openDialog('details-dialog');render();
  }
  function renderNames(){
    const term=$('#company-search').value.trim().toLowerCase();
    const matches=M.data.companies.filter(c=>[c.name,c.category,c.summary,c.region,c.location].join(' ').toLowerCase().includes(term)).sort((a,b)=>a.name.localeCompare(b.name));
    $('#name-count').textContent=`${matches.length} of ${M.data.companies.length} builders`;
    $('#company-results').innerHTML=matches.length?matches.map(c=>`<button class="company-result" data-company="${esc(c.id)}"><strong>${esc(c.name)}</strong><span>${esc(c.category)}</span></button>`).join(''):'<p>No matching builders. Try a different name or capability.</p>';
    bindBuilderLinks();
  }
  function renderChapters(){
    $('#chapter-grid').innerHTML=M.scenesFor(state.lens).map((scene,i)=>`<button class="chapter-card" data-scene="${esc(scene.id)}" aria-current="${currentFrame?.scene.id===scene.id}"><small>${esc(M.lensNames[scene.lens].toUpperCase())} · ${stamp(i*10)}</small><strong>${esc(scene.title)}</strong><span>${scene.companyIds.map(id=>esc(M.byCompany[id].name)).join(' · ')}</span></button>`).join('');
    $$('[data-scene]').forEach(b=>b.addEventListener('click',()=>{selectScene(b.dataset.scene);restorePlayback=false;closeAllDialogs();setPlaying(false);}));
  }
  function selectScene(id){
    const scenes=M.scenesFor(state.lens),index=scenes.findIndex(s=>s.id===id);
    if(index<0){state.lens='all';state.time=M.story.scenes.findIndex(s=>s.id===id)*10;}else state.time=index*10;
    state.chapter='auto';state.selectedId=null;lastScene='';syncControls();render();
  }
  function pointAt(event){
    if(!layout)return null;const rect=canvas.getBoundingClientRect();let x=(event.clientX-rect.left)*canvas.width/rect.width;
    const y=(event.clientY-rect.top)*canvas.height/rect.height;if(state.mirror)x=canvas.width-x;
    for(let i=layout.targets.length-1;i>=0;i--){const p=layout.targets[i];if(x>=p.x&&x<=p.x+p.w&&y>=p.y&&y<=p.y+p.h)return p;}
    return null;
  }
  canvas.addEventListener('click',event=>{const hit=pointAt(event);if(hit)showCompany(hit.id);else if(state.clean)revealCleanControls();});
  canvas.addEventListener('pointermove',event=>{
    revealCleanControls();if(state.clean){$('#point-tooltip').hidden=true;return;}
    const hit=pointAt(event);canvas.style.cursor=hit?'pointer':'default';const tooltip=$('#point-tooltip');tooltip.hidden=!hit;
    if(hit){const rect=stage.getBoundingClientRect();tooltip.textContent=hit.name;tooltip.style.left=Math.min(stage.clientWidth-210,Math.max(10,event.clientX-rect.left+14))+'px';tooltip.style.top=Math.max(12,event.clientY-rect.top-40)+'px';}
  });
  canvas.addEventListener('pointerleave',()=>{$('#point-tooltip').hidden=true;});
  $('#play-button').addEventListener('click',()=>setPlaying(!state.playing));
  $('#restart-button').addEventListener('click',()=>{state.time=0;state.selectedId=null;lastScene='';render();});
  $('#timeline').addEventListener('input',()=>{state.time=Number($('#timeline').value);lastWall=performance.now();render();});
  $$('[data-format]').forEach(b=>b.addEventListener('click',()=>{state.format=b.dataset.format;syncControls();resize();}));
  $('#clean-button').addEventListener('click',()=>setClean(true));
  $('#leave-clean').addEventListener('click',()=>{setClean(false);if(document.fullscreenElement)document.exitFullscreen();});
  $('#fullscreen-button').addEventListener('click',fullscreen);
  $('#insights-open').addEventListener('click',()=>showScene());
  $('#names-open').addEventListener('click',()=>{renderNames();openDialog('names-dialog');$('#company-search').focus();});
  $('#mobile-names-open').addEventListener('click',()=>{renderNames();openDialog('names-dialog');$('#company-search').focus();});
  $('#mobile-insights-open').addEventListener('click',()=>showScene());
  $('#company-search').addEventListener('input',renderNames);
  $('#chapters-open').addEventListener('click',()=>{renderChapters();openDialog('chapters-dialog');});
  $('#settings-open').addEventListener('click',()=>openDialog('settings-dialog'));
  $('#help-open').addEventListener('click',()=>openDialog('help-dialog'));
  $('#export-open').addEventListener('click',()=>openDialog('export-dialog'));
  $$('[data-lens]').forEach(b=>b.addEventListener('click',()=>setLens(b.dataset.lens)));
  $('#resume-sequence').addEventListener('click',()=>{state.chapter='auto';restorePlayback=true;closeAllDialogs();setPlaying(true);});
  $('#lens-select').addEventListener('change',event=>setLens(event.target.value));
  $('#labels-select').addEventListener('change',event=>{state.labels=event.target.value;render();});
  $('#mirror-toggle').addEventListener('change',event=>{state.mirror=event.target.checked;render();});
  $('#motion-toggle').addEventListener('change',event=>{state.motion=event.target.checked;render();});
  $('#copy-link').addEventListener('click',async()=>{
    const url=new URL(location.pathname,location.origin);url.searchParams.set('mode',state.format==='square'?'hologram':'screen');url.searchParams.set('clean','1');url.searchParams.set('play','1');
    if(state.lens!=='all')url.searchParams.set('lens',state.lens);if(state.mirror)url.searchParams.set('mirror','1');if(state.labels!=='focus')url.searchParams.set('labels',state.labels);if(!state.motion)url.searchParams.set('motion','off');
    try{await navigator.clipboard.writeText(url.href);toast('Clean display link copied.');}catch{toast('Clipboard unavailable. Use Cinema view for a clean display.');}
  });
  function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
  function outputSize(){return state.format==='square'?{width:1080,height:1080}:{width:1920,height:1080};}
  $('#snapshot-button').addEventListener('click',async()=>{
    try{const size=outputSize(),time=state.time,model=frameOptions(),visual=renderOptions(),mirror=state.mirror;
      const result=await V.snapshot({...size,timeSec:time,renderFrame:(c,t,w,h)=>draw(c,w,h,t,model,visual,mirror)});
      download(result.blob,`wbg-radar-${state.format}.png`);toast('Still image downloaded.');
    }catch(error){toast(error.message);}finally{render();}
  });
  $('#record-button').addEventListener('click',async()=>{
    if(recordAbort)return;const length=$('#export-length').value;
    const model={...frameOptions(),selectedId:null,secondsPerScene:length==='preview'?2:10};
    if(length==='scene')model.chapter=currentFrame.scene.id;
    const visual={...renderOptions(),selectedId:null},mirror=state.mirror,size=outputSize();
    const durationSec=M.duration(model);recordAbort=new AbortController();$('#record-button').disabled=true;$('#snapshot-button').disabled=true;$('#export-length').disabled=true;
    $('#record-progress').hidden=false;$('#record-download').hidden=true;$('#record-meter').value=0;
    if(downloadURL){URL.revokeObjectURL(downloadURL);downloadURL=null;}
    try{
      const result=await V.record({...size,durationSec,fps:30,signal:recordAbort.signal,
        renderFrame:(c,t,w,h)=>draw(c,w,h,t,model,visual,mirror),
        onProgress:status=>{$('#record-meter').value=status.progress;$('#record-status').textContent=status.state==='paused'?'Paused — return to this tab to continue.':status.state==='finalizing'?'Finalizing video…':status.state==='complete'?'Video ready.':`Recording ${stamp(status.elapsedSec)} / ${stamp(durationSec)}`;}});
      downloadURL=URL.createObjectURL(result.blob);const link=$('#record-download');link.href=downloadURL;link.download=`wbg-radar-${state.format}-${state.lens}.${result.extension}`;link.textContent=`Download ${result.extension.toUpperCase()} video`;link.hidden=false;
      $('#record-status').textContent='Your recording is ready.';
    }catch(error){$('#record-status').textContent=error.name==='AbortError'?'Recording cancelled.':error.message;}
    finally{recordAbort=null;$('#record-button').disabled=false;$('#snapshot-button').disabled=false;$('#export-length').disabled=false;render();}
  });
  $('#cancel-record').addEventListener('click',()=>recordAbort?.abort());
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!document.querySelector('dialog[open]')){setClean(false);return;}
    if(document.querySelector('dialog[open]')||/INPUT|SELECT|TEXTAREA|BUTTON|A|SUMMARY/.test(event.target.tagName)||event.target.isContentEditable)return;
    if(event.code==='Space'){event.preventDefault();setPlaying(!state.playing);}
    if(event.key==='ArrowRight'){event.preventDefault();moveScene(1);}
    if(event.key==='ArrowLeft'){event.preventDefault();moveScene(-1);}
    if(event.key.toLowerCase()==='r'){state.time=0;state.selectedId=null;render();}
    if(event.key.toLowerCase()==='f')fullscreen();
    if(event.key.toLowerCase()==='n'){renderNames();openDialog('names-dialog');}
    if(event.key.toLowerCase()==='i')showScene();
  });
  document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&state.clean)setClean(false);resize();});
  document.addEventListener('visibilitychange',()=>{lastWall=performance.now();});
  window.addEventListener('resize',resize);new ResizeObserver(resize).observe(stage);
  function tick(now){
    const dt=Math.min(.12,Math.max(0,(now-lastWall)/1000));lastWall=now;
    if(state.playing&&!document.hidden){state.time+=dt;if(now-lastRender>=1000/30){render();lastRender=now;}}
    requestAnimationFrame(tick);
  }
  async function init(){
    const mark=new Image();mark.src='wbg-logo-white.svg';
    try{await mark.decode();logo=mark;}catch{/* The renderer includes a text brand fallback. */}
    if(document.fonts?.ready)await document.fonts.ready;
    syncControls();resize();$('#stage-loading').hidden=true;
    if(state.clean)revealCleanControls();requestAnimationFrame(tick);
  }
  init().catch(error=>{$('#stage-loading').innerHTML='<p>The radar could not start. Please reload the page.</p>';console.error(error);});
})();
