(() => {
  'use strict';

  const DATA = window.RADAR_DATA || {};
  const trends = Array.isArray(DATA.trends) ? DATA.trends : [];
  const companies = Array.isArray(DATA.companies) ? DATA.companies : [];
  const domains = Array.isArray(DATA.domains) ? DATA.domains : [];
  const sources = Array.isArray(DATA.sources) ? DATA.sources : [];
  const trendMap = new Map(trends.map(item => [item.id, item]));
  const companyMap = new Map(companies.map(item => [item.id, item]));
  const domainMap = new Map(domains.map(item => [item.id, item]));
  const sourceMap = new Map(sources.map(item => [item.id, item]));
  const opportunities = Array.isArray(DATA.opportunities) ? DATA.opportunities : [];
  const opportunityMap = new Map(opportunities.map(item => [item.id, item]));
  const signals = (Array.isArray(DATA.signals) ? DATA.signals : []).map((item, index) => ({ ...item, id: item.id || `signal-${index}`, lenses: item.lenses || trendMap.get(item.trendId)?.lenses || [] }));
  const rings = {
    now: { name: 'Now', description: 'Available to explore', min: 64, max: 113 },
    next: { name: 'Next', description: 'Evidence developing', min: 141, max: 187 },
    horizon: { name: 'Horizon', description: 'Milestones ahead', min: 217, max: 262 }
  };
  const lensNames = { all: 'All signals', wbg: 'WBG development', its: 'ITS & enterprise', frontier: 'Frontier' };
  const lensDescriptions = {
    wbg: { title: 'WBG development', description: 'Technology for inclusive development.', heading: 'Technology with development potential.', context: 'Explore public services, climate resilience and essential infrastructure.', icon: 'climate' },
    its: { title: 'ITS & enterprise', description: 'AI for secure, productive institutions.', heading: 'Capabilities reshaping institutions.', context: 'Compare software, enterprise knowledge, AI infrastructure and security.', icon: 'enterprise' },
    frontier: { title: 'Frontier', description: 'Breakthroughs shaping what comes next.', heading: 'Beyond today’s operating models.', context: 'Follow physical AI, scientific discovery and advanced computing.', icon: 'frontier' },
    all: { title: 'Across all perspectives', heading: 'The full technology landscape.', context: 'Connect development priorities, institutional capabilities and wider change.' }
  };
  const STORAGE_KEY = 'wbg-innovation-radar-shortlist-v1';
  const checked = DATA.meta?.checked || '2026-11-23';
  let storageAvailable = true;
  let initialSaved = [];
  try { initialSaved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (_) { storageAvailable = false; }
  if (!Array.isArray(initialSaved)) initialSaved = [];
  const saved = new Set(initialSaved.filter(id => companyMap.has(id)));
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const wideRadar = window.matchMedia('(min-width: 1100px)');
  const state = { view: 'radar', type: 'trends', lens: 'wbg', domain: 'all', ring: 'all', query: '', savedOnly: false, selected: null, preferLensSelection: true, paused: reducedMotion, radarExpanded: false, dialog: null, tourStep: 0 };
  const preferredSignals = { wbg: ['project-supervision'], its: ['software-agents'], frontier: ['experimental-scientific-ai', 'physical-ai'], all: ['project-supervision', 'software-agents'] };
  const compared = new Set();
  let returnFocus = null;
  let compareReturnFocus = null;
  let domainSelectLens = null;
  let toastTimer = null;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const safeURL = value => { try { const url = new URL(value); return /^https?:$/.test(url.protocol) ? url.href : '#'; } catch (_) { return '#'; } };
  const color = value => /^#[0-9a-f]{3,8}$/i.test(value || '') ? value : '#009fda';
  const array = value => Array.isArray(value) ? value : value ? [value] : [];
  const countLabel = (count, singular, plural = singular + 's') => `${count} ${count === 1 ? singular : plural}`;
  const dateLabel = value => { if (!value) return ''; const date = new Date(String(value).slice(0, 10) + 'T12:00:00Z'); return Number.isNaN(date.getTime()) ? String(value) : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date); };
  const shortDate = value => { if (!value) return ''; const date = new Date(String(value).slice(0, 10) + 'T12:00:00Z'); return Number.isNaN(date.getTime()) ? String(value) : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date); };
  const activeDomains = () => array(DATA.lensDomains?.[state.lens]).length ? DATA.lensDomains[state.lens] : domains;
  const domainIdFor = item => item.domainsByLens?.[state.lens] || item.domain;
  const domainFor = item => activeDomains().find(domain => domain.id === domainIdFor(item)) || domainMap.get(item.domain) || { name: 'Emerging technology', shortName: 'Emerging technology', color: '#009fda' };
  const sourceRecords = item => array(item.sourceIds).map(id => sourceMap.get(id)).filter(Boolean);
  const horizonOf = item => rings[item.horizon] ? item.horizon : ({ experiment: 'now', assess: 'next', watch: 'horizon' }[item.ring] || 'next');
  const ringFor = item => rings[horizonOf(item)];
  const applicationFor = item => item.applicationsByLens?.[state.lens] || item.application || item.proposedUse || '';
  const applicationHeading = () => ({ wbg: 'Potential WBG application', its: 'Potential ITS application', frontier: 'What this could change', all: 'Potential relevance' }[state.lens]);
  const evidenceFor = item => typeof item.evidence === 'string' ? item.evidence : typeof item.evidenceSummary === 'string' ? item.evidenceSummary : typeof item.evidenceType === 'string' ? item.evidenceType : [item.evidenceLabel, item.evidenceNote].filter(value => typeof value === 'string' && value.trim()).join(' · ') || (sourceRecords(item).length ? 'Public sources linked below' : 'Evidence not yet specified');
  const relatedCompanies = item => array(item.companyIds).map(id => companyMap.get(id)).filter(Boolean);
  const relatedTrends = item => array(item.trendIds).map(id => trendMap.get(id)).filter(Boolean);

  const iconPaths = {
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    bookmark: '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18M7 14h3m4 0h3m-10 3h3"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 0 1 5 .8c0 1.8-2.5 2-2.5 4M12 17h.01"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    pause: '<path d="M8 5v14m8-14v14"/>',
    play: '<path d="m8 4 12 8-12 8Z"/>',
    cursor: '<path d="m4 3 6.5 17 2.5-7 7-2.5Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
    download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
    external: '<path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    link: '<path d="m10 13 4-4m-7 5-2 2a3.5 3.5 0 0 0 5 5l4-4a3.5 3.5 0 0 0 0-5M17 10l2-2a3.5 3.5 0 0 0-5-5l-4 4a3.5 3.5 0 0 0 0 5"/>',
    layers: '<path d="m12 3 10 6-10 6L2 9Zm-10 11 10 6 10-6M2 18l10 6 10-6"/>',
    enterprise: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 5V3h8v2M3 11h18m-11 0v3h4v-3"/>',
    trust: '<path d="M12 2 3 6v6c0 5.5 9 10 9 10s9-4.5 9-10V6Z"/><path d="m8 12 3 3 5-6"/>',
    inclusion: '<circle cx="8" cy="7" r="3"/><path d="M2 21v-3a6 6 0 0 1 12 0v3m3-17a3 3 0 0 1 0 6m1 4a5 5 0 0 1 4 5v2"/>',
    climate: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18M5 7h14M5 17h14"/>',
    resources: '<path d="m13 2-8 12h6l-1 8 9-13h-6Z"/>',
    frontier: '<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4M10 10h4v4h-4Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
    compare: '<rect x="3" y="4" width="7" height="16" rx="1"/><rect x="14" y="4" width="7" height="16" rx="1"/><path d="M6 9h1m10 0h1M6 13h1m10 0h1"/>',
    expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>'
  };
  function icon(name, extra = '') { return `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.layers}</svg>`; }
  function hydrateIcons(scope = document) { $$('[data-icon]', scope).forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
  function ringPill(item) { const key = horizonOf(item); const alias = { now: 'experiment', next: 'assess', horizon: 'watch' }[key]; return `<span class="ring-pill ${key} ${alias}" title="${rings[key].description}">${rings[key].name}</span>`; }
  function domainLabel(item) { const domain = domainFor(item); return `<span class="domain-label"><i class="domain-dot" style="--domain-color:${color(domain.color)}"></i>${escape(domain.shortName || domain.name)}</span>`; }
  function textSection(title, text, options = {}) {
    if (!text) return '';
    return `<section class="detail-section${options.className ? ' ' + options.className : ''}"><h3>${escape(title)}${options.inference ? '<span class="proposed-tag">Proposed use</span>' : ''}</h3><p>${escape(text)}</p></section>`;
  }
  function sourceList(item, compact = false) {
    const records = sourceRecords(item);
    if (!records.length) return '<p class="detail-meta">Source references are available in the research dataset.</p>';
    const html = `<ul class="source-list">${records.map(source => `<li><a href="${escape(safeURL(source.url))}" target="_blank" rel="noopener noreferrer">${escape(source.title || source.publisher || 'Source')}</a><p><span class="source-publisher">${escape(source.publisher || 'Primary source')}</span>${source.date ? ' · Published ' + escape(shortDate(source.date)) : ' · Publication date not stated'}<br>Checked ${escape(shortDate(source.checked || checked))}</p></li>`).join('')}</ul>`;
    return compact ? `<details class="sources-details"><summary>Sources &amp; evidence <span>(${records.length})</span>${icon('chevron')}</summary>${html}</details>` : html;
  }
  function companyChips(item) {
    const related = relatedCompanies(item);
    if (!related.length) return '';
    return `<div class="company-chips">${related.map(company => `<button type="button" data-open-company="${escape(company.id)}">${escape(company.name)}</button>`).join('')}</div>`;
  }
  function trendChips(item) {
    const related = relatedTrends(item);
    if (!related.length) return '';
    return `<div class="trend-chips">${related.map(trend => `<button type="button" data-open-trend="${escape(trend.id)}">${escape(trend.shortTitle || trend.title)}</button>`).join('')}</div>`;
  }
  function bookmarkButton(item, wide = false) {
    const isSaved = saved.has(item.id);
    return `<button type="button" class="${wide ? 'secondary-button bookmark-wide ' : 'bookmark-button '}${isSaved ? 'saved' : ''}" data-save="${escape(item.id)}" aria-pressed="${isSaved}" aria-label="${isSaved ? 'Remove ' : 'Save '}${escape(item.name)}${isSaved ? ' from' : ' to'} shortlist">${icon(isSaved ? 'check' : 'bookmark')}${wide ? isSaved ? 'Saved to shortlist' : 'Save to shortlist' : ''}</button>`;
  }
  function compareButton(item, wide = false) {
    const selected = compared.has(item.id);
    return `<button type="button" class="compare-button${selected ? ' selected' : ''}${wide ? ' compare-wide' : ''}" data-compare="${escape(item.id)}" aria-pressed="${selected}" aria-label="${selected ? 'Remove ' : 'Add '}${escape(item.name)} ${selected ? 'from' : 'to'} comparison">${icon(selected ? 'check' : 'compare')}<span>${selected ? 'Selected' : 'Compare'}</span></button>`;
  }

  function matches(item, type, ignoreQuery = false) {
    if (state.lens !== 'all' && !array(item.lenses).includes(state.lens)) return false;
    if (state.domain !== 'all' && domainIdFor(item) !== state.domain) return false;
    if (state.ring !== 'all' && horizonOf(item) !== state.ring) return false;
    if (state.savedOnly) {
      if (type === 'companies' && !saved.has(item.id)) return false;
      if (type === 'trends' && !relatedCompanies(item).some(company => saved.has(company.id))) return false;
    }
    if (state.query.trim() && !ignoreQuery) {
      const words = state.query.toLocaleLowerCase().trim().split(/\s+/);
      const related = type === 'companies' ? relatedTrends(item).map(trend => trend.title).join(' ') : relatedCompanies(item).map(company => company.name).join(' ');
      const text = [item.name, item.title, item.shortTitle, item.summary, item.whyNow, applicationFor(item), item.proposedUse, item.distinctive, item.availability, item.region, item.category, domainFor(item).name, related].filter(Boolean).join(' ').toLocaleLowerCase();
      if (!words.every(word => text.includes(word))) return false;
    }
    return true;
  }
  function currentItems(type = state.type) {
    if (type === 'opportunities' || type === 'signals') return (type === 'opportunities' ? opportunities : signals).filter(item => matchesEditorial(item, type));
    return (type === 'companies' ? companies : trends).filter(item => matches(item, type));
  }
  function matchesEditorial(item, type) {
    const linked = type === 'signals' ? [trendMap.get(item.trendId)].filter(Boolean) : relatedTrends(item);
    const lenses = array(item.lenses).length ? array(item.lenses) : [...new Set(linked.flatMap(trend => array(trend.lenses)))];
    if (state.lens !== 'all' && !lenses.includes(state.lens)) return false;
    if (state.domain !== 'all' && !linked.some(trend => domainIdFor(trend) === state.domain)) return false;
    if (state.ring !== 'all' && !linked.some(trend => horizonOf(trend) === state.ring)) return false;
    if (state.savedOnly && !array(item.companyIds).some(id => saved.has(id)) && !linked.some(trend => relatedCompanies(trend).some(company => saved.has(company.id)))) return false;
    if (state.query.trim()) {
      const words = state.query.toLocaleLowerCase().trim().split(/\s+/);
      const text = [item.title, item.text, item.problem, array(item.users).join(' '), item.outcome, item.approach, linked.map(trend => trend.title).join(' '), relatedCompanies(item).map(company => company.name).join(' ')].filter(Boolean).join(' ').toLocaleLowerCase();
      if (!words.every(word => text.includes(word))) return false;
    }
    return true;
  }
  function hasFilters() { return state.lens !== 'all' || state.domain !== 'all' || state.ring !== 'all' || Boolean(state.query) || state.savedOnly; }

  function updateControls() {
    if (domainSelectLens !== state.lens) {
      $('#domain-select').innerHTML = '<option value="all">All domains</option>' + activeDomains().map(domain => `<option value="${escape(domain.id)}">${escape(domain.name)}</option>`).join('');
      if (state.domain !== 'all' && !activeDomains().some(domain => domain.id === state.domain)) state.domain = 'all';
      domainSelectLens = state.lens;
    }
    $$('.nav-link').forEach(button => { const active = button.dataset.view === state.view; button.classList.toggle('active', active); active ? button.setAttribute('aria-current', 'page') : button.removeAttribute('aria-current'); });
    $$('[data-lens]').forEach(button => { const active = button.dataset.lens === state.lens; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    $$('[data-type]').forEach(button => { const active = button.dataset.type === state.type; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    $('#domain-select').value = state.domain;
    $('#ring-select').value = state.ring;
    $('#saved-filter').classList.toggle('active', state.savedOnly);
    $('#saved-filter').setAttribute('aria-pressed', String(state.savedOnly));
    $('#saved-filter').hidden = state.view === 'about';
    $('#clear-filters').hidden = !hasFilters();
    $('#shortlist-count').textContent = saved.size;
    $('#filter-section').hidden = state.view === 'about';
    $('#lens-section').hidden = state.view === 'about';
    $('#active-lens-caption').textContent = state.lens === 'all' ? 'Every perspective in one view' : lensNames[state.lens];
    const type = state.view === 'startups' ? 'companies' : state.view === 'trends' ? 'trends' : state.view === 'usecases' ? 'opportunities' : state.view === 'signals' ? 'signals' : state.type;
    const count = currentItems(type).length;
    const total = type === 'companies' ? companies.length : type === 'opportunities' ? opportunities.length : type === 'signals' ? signals.length : trends.length;
    $('#result-summary').innerHTML = `<strong>${count}</strong> of ${total} ${type === 'companies' ? 'companies' : type === 'opportunities' ? 'use cases' : type === 'signals' ? 'signals' : 'trends'}${state.savedOnly ? ' · shortlist' : ''}`;
    $('#search-input').placeholder = state.view === 'startups' ? 'Search companies, capabilities, use cases…' : state.view === 'usecases' ? 'Search problems, use cases, companies…' : state.view === 'signals' ? 'Search recent developments…' : 'Search trends, companies, use cases…';
    $('#motion-button').setAttribute('aria-pressed', String(state.paused));
    $('#motion-button').innerHTML = icon(state.paused ? 'play' : 'pause') + `<span>${state.paused ? 'Resume motion' : 'Pause motion'}</span>`;
    document.body.dataset.motion = state.paused ? 'paused' : 'running';
    $('#radar-layout').classList.toggle('is-expanded', state.radarExpanded);
    $('#detail-panel').hidden = state.radarExpanded;
    $('#radar-size-button').setAttribute('aria-pressed', String(state.radarExpanded));
    $('#radar-size-button').innerHTML = icon(state.radarExpanded ? 'sidebar' : 'expand') + `<span>${state.radarExpanded ? 'Show side panel' : 'Expand radar'}</span>`;
    $('#radar-interaction-hint').textContent = state.radarExpanded ? 'Select a signal to open its full details. Select a domain to focus.' : 'Select a signal to explore it. Select a domain to focus.';
    $('#startups-heading').textContent = state.savedOnly ? 'Your builder shortlist' : 'Startups & ecosystem builders';
    $('#directory-description').textContent = state.savedOnly ? 'A working selection saved in this browser. Export it to use in your next conversation or research brief.' : 'Startups, scaleups and public-interest technology builders, connected to the problems they could help address.';
  }
  function showView(view, updateHash = true, scroll = false) {
    if (!['radar', 'trends', 'startups', 'usecases', 'signals', 'about'].includes(view)) view = 'radar';
    state.view = view;
    $$('.view-section').forEach(section => { section.hidden = section.id !== `${view}-view`; });
    renderCurrentView();
    if (updateHash) history.replaceState(null, '', `#${view}`);
    if (scroll) window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }
  function renderCurrentView() {
    updateControls();
    renderDomains();
    if (state.view === 'radar') renderRadar();
    if (state.view === 'trends') renderTrends();
    if (state.view === 'startups') renderCompanies();
    if (state.view === 'usecases') renderUseCases();
    if (state.view === 'signals') renderSignals();
    if (state.view === 'about') renderAbout();
  }

  function renderLensCards() {
    $('#lens-cards').innerHTML = ['wbg', 'its', 'frontier'].map(lens => {
      const spec = lensDescriptions[lens];
      const trendCount = trends.filter(item => array(item.lenses).includes(lens)).length;
      const companyCount = companies.filter(item => array(item.lenses).includes(lens)).length;
      return `<button type="button" class="lens-card${state.lens === lens ? ' active' : ''}" data-lens="${lens}" aria-pressed="${state.lens === lens}"><span class="lens-card-top"><span class="lens-icon">${icon(spec.icon)}</span><strong>${escape(spec.title)}</strong><span class="lens-selected-mark">${icon('check')}</span></span><span class="lens-card-description">${escape(spec.description)}</span><span class="lens-card-counts">${countLabel(trendCount, 'trend')} <span>·</span> ${countLabel(companyCount, 'company', 'companies')}</span></button>`;
    }).join('');
  }
  function renderLensContext() {
    const spec = lensDescriptions[state.lens];
    const related = opportunities.filter(item => state.lens === 'all' || array(item.lenses).includes(state.lens));
    $('#lens-context').innerHTML = `<div><h2>${escape(spec.heading)}</h2><p>${escape(spec.context)}</p></div>${related.length ? `<button type="button" class="text-button" data-view="usecases">Explore ${countLabel(related.length, 'use case')}</button>` : ''}`;
    const section = $('#featured-usecases');
    section.hidden = !related.length;
    if (related.length) section.innerHTML = `<div class="section-heading"><div><p class="eyebrow">WHERE THE CONNECTIONS LEAD</p><h2>${state.lens === 'frontier' ? 'Questions the frontier opens up' : 'From capability to a meaningful use case'}</h2></div><button type="button" class="text-button" data-view="usecases">View all use cases</button></div><div class="featured-usecase-grid">${related.slice(0, 3).map(item => `<button type="button" class="featured-usecase-card" data-open-usecase="${escape(item.id)}"><span class="usecase-card-label">${state.lens === 'frontier' ? 'FUTURE POSSIBILITY' : 'POTENTIAL APPLICATION'}</span><h3>${escape(item.title)}</h3><p>${escape(item.outcome || item.problem)}</p><span class="usecase-card-meta">${countLabel(relatedCompanies(item).length, 'builder')} · ${countLabel(relatedTrends(item).length, 'connected trend')}</span></button>`).join('')}</div>`;
  }

  function pointFor(angle, radius) { const rad = angle * Math.PI / 180; return { x: 430 + Math.cos(rad) * radius, y: 320 + Math.sin(rad) * radius }; }
  function wedgePath(start, end, radius) { const a = pointFor(start, radius), b = pointFor(end, radius); return `M430 320L${a.x.toFixed(2)} ${a.y.toFixed(2)}A${radius} ${radius} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}Z`; }
  function layoutPoints(type) {
    const result = new Map();
    const records = (type === 'companies' ? companies : trends).filter(item => state.lens === 'all' || array(item.lenses).includes(state.lens));
    const contextDomains = activeDomains();
    const sectorWidth = 360 / Math.max(contextDomains.length, 1);
    contextDomains.forEach((domain, di) => {
      Object.keys(rings).forEach(ringId => {
        const group = records.filter(item => domainIdFor(item) === domain.id && horizonOf(item) === ringId).sort((a, b) => String(a.id).localeCompare(String(b.id)));
        const range = rings[ringId];
        group.forEach((item, index) => {
          const columns = Math.min(group.length, type === 'companies' ? (ringId === 'now' ? 3 : 5) : 4);
          const rows = Math.ceil(group.length / Math.max(columns, 1));
          const row = Math.floor(index / Math.max(columns, 1));
          const col = index % Math.max(columns, 1);
          const thisRow = Math.min(columns, group.length - row * columns);
          const angle = -90 + di * sectorWidth + 8 + ((col + .5) / thisRow) * (sectorWidth - 16) + (rows > 1 && row % 2 ? 2 : 0);
          const radius = rows > 1 ? range.min + (row + .5) / rows * (range.max - range.min) : (range.min + range.max) / 2 + ((index % 3) - 1) * (type === 'companies' ? 11 : 13);
          result.set(item.id, { ...pointFor(angle, radius), angle, radius });
        });
      });
    });
    return result;
  }
  const pointLayouts = new Map();
  function currentPointLayout(type) {
    const key = `${state.lens}:${type}`;
    if (!pointLayouts.has(key)) pointLayouts.set(key, layoutPoints(type));
    return pointLayouts.get(key);
  }

  function renderRadar() {
    renderLensContext();
    const items = currentItems();
    if (state.preferLensSelection && state.type === 'trends' && items.length) {
      state.selected = (preferredSignals[state.lens] || []).find(id => items.some(item => item.id === id)) || items[0].id;
      state.preferLensSelection = false;
    } else if (!items.some(item => item.id === state.selected)) state.selected = items[0]?.id || null;
    const active = items.find(item => item.id === state.selected);
    const contextDomains = activeDomains();
    const sectorWidth = 360 / Math.max(contextDomains.length, 1);
    const ringSVG = [120, 196, 270].map((radius, i) => `<circle cx="430" cy="320" r="${radius}" class="radar-ring-fill"/><circle cx="430" cy="320" r="${radius}" class="radar-line"/><text class="axis-label" x="438" y="${320-radius+15}">${['NOW', 'NEXT', 'HORIZON'][i]}</text>`).reverse().join('');
    const domainSVG = contextDomains.map((domain, index) => {
      const start = -90 + index * sectorWidth;
      const end = start + sectorWidth;
      const middle = (start + end) / 2;
      const outer = pointFor(start, 270), inner = pointFor(start, 41), label = pointFor(middle, 310), tick1 = pointFor(middle, 278), tick2 = pointFor(middle, 289);
      const selected = state.domain === domain.id;
      const labelLines = String(domain.shortName || domain.name).split(' & ');
      const labels = labelLines.length > 1 ? [labelLines[0], '& ' + labelLines.slice(1).join(' & ')] : String(domain.shortName || domain.name).length > 18 ? String(domain.shortName || domain.name).split(/\s(?=\S+$)/) : labelLines;
      return `<path class="sector-hit${selected ? ' selected' : ''}" d="${wedgePath(start, end, 270)}" data-domain="${escape(domain.id)}" role="button" tabindex="0" aria-label="${selected ? 'Clear ' : 'Filter by '}${escape(domain.name)} domain"/><path class="domain-separator" d="M${inner.x} ${inner.y}L${outer.x} ${outer.y}"/><path class="sector-tick" stroke="${color(domain.color)}" d="M${tick1.x} ${tick1.y}L${tick2.x} ${tick2.y}"/><text class="sector-label${selected ? ' selected' : ''}" x="${label.x}" y="${label.y - (labels.length > 1 ? 5 : 0)}" text-anchor="middle" data-domain="${escape(domain.id)}" aria-hidden="true">${labels.map((line, li) => `<tspan x="${label.x}" dy="${li ? 17 : 0}">${escape(line)}</tspan>`).join('')}</text>`;
    }).join('');
    const points = items.map(item => {
      const pos = currentPointLayout(state.type).get(item.id);
      if (!pos) return '';
      const selected = state.selected === item.id;
      const domain = domainFor(item);
      const radius = state.type === 'trends' ? 7.8 : 5.8;
      const title = item.name || item.title;
      return `<g class="radar-point${selected ? ' selected' : ''}" tabindex="0" role="button" aria-label="${escape(title)}, ${ringFor(item).name}, ${escape(domain.name)}" aria-pressed="${selected}" data-point="${escape(item.id)}" data-tooltip="${escape(item.id)}" transform="translate(${pos.x.toFixed(2)} ${pos.y.toFixed(2)})"><circle class="point-halo" r="${radius+11}" fill="${color(domain.color)}"/>${selected ? `<circle class="point-selected-ring" r="${radius+7}" stroke="${color(domain.color)}"/>` : ''}<circle class="point-core" r="${radius}" fill="${color(domain.color)}"/><title>${escape(title)}</title></g>`;
    }).join('');
    let selectedLabel = '';
    if (active) {
      const pos = currentPointLayout(state.type).get(active.id);
      if (pos) {
        const name = active.shortTitle || active.name || active.title;
        const displayName = name.length > 33 ? name.slice(0, 31) + '…' : name;
        const x = Math.max(135, Math.min(725, pos.x));
        selectedLabel = `<text x="${x}" y="${pos.y - 23}" text-anchor="middle" class="selected-label" aria-hidden="true">${escape(displayName)}</text>`;
      }
    }
    $('#radar-graphic').innerHTML = `<svg class="radar-svg" viewBox="40 0 780 660" aria-labelledby="radar-svg-title radar-svg-desc"><title id="radar-svg-title">Interactive ${state.type === 'trends' ? 'technology trend' : 'company'} radar</title><desc id="radar-svg-desc">${items.length} matching signals across ${domains.length} domains. Inner ring: Now. Middle ring: Next. Outer ring: Horizon. Select a point for details or use the ${state.type === 'trends' ? 'Trends' : 'Startup landscape'} view for an accessible list.</desc><defs><linearGradient id="sweep-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#39bde6" stop-opacity="0"/><stop offset="100%" stop-color="#53d7f3" stop-opacity=".42"/></linearGradient><clipPath id="radar-clip"><circle cx="430" cy="320" r="270"/></clipPath></defs>${ringSVG}${domainSVG}<g clip-path="url(#radar-clip)" pointer-events="none"><g class="radar-sweep"><path class="radar-sweep-fill" d="${wedgePath(-42, 0, 270)}"/><path class="radar-sweep-line" d="M430 320H700"/></g></g><circle cx="430" cy="320" r="40" class="radar-center"/><text class="radar-center-text" x="430" y="317" text-anchor="middle">IN</text><text class="radar-center-text" x="430" y="332" text-anchor="middle">FOCUS</text>${points}${selectedLabel}${items.length ? '' : '<text x="430" y="485" text-anchor="middle" class="radar-empty">No signals match these filters</text>'}<text class="radar-caption" x="430" y="648" text-anchor="middle">NOW · NEXT · HORIZON — FOLLOW THE EVIDENCE</text></svg>`;
    $('#radar-domain-legend').innerHTML = contextDomains.map(domain => `<button type="button" data-domain="${escape(domain.id)}" aria-pressed="${state.domain === domain.id}" class="${state.domain === domain.id ? 'active' : ''}"><i style="background:${color(domain.color)}"></i>${escape(domain.shortName || domain.name)}</button>`).join('');
    renderDetailPanel(active, state.type);
    hideTooltip();
  }

  function renderDetailPanel(item, type) {
    if (!item) {
      $('#detail-panel').innerHTML = `<div class="detail-empty">${icon('search')}<h2>No matching signals</h2><p>Try a broader search, choose another domain, or reset the filters to explore the full landscape.</p><button type="button" class="secondary-button" data-action="clear-filters">Clear filters</button></div>`;
      return;
    }
    const isCompany = type === 'companies';
    const domain = domainFor(item);
    const intro = `<div class="detail-topline"><span class="detail-kicker">${isCompany ? 'COMPANY SPOTLIGHT' : 'SIGNAL SPOTLIGHT'}</span>${ringPill(item)}</div><div class="detail-intro">${domainLabel(item)}<h2>${escape(isCompany ? item.name : item.title)}</h2><span class="plain-label">${isCompany ? 'PUBLIC CAPABILITY' : 'IN PLAIN LANGUAGE'}</span><p class="detail-summary">${escape(item.summary)}</p>${isCompany ? `<a class="website-link" href="${escape(safeURL(item.website))}" target="_blank" rel="noopener noreferrer">Official website ${icon('external')}</a>` : ''}</div>`;
    const body = isCompany
      ? `${textSection('Why examine this builder', item.distinctive)}${textSection(applicationHeading(), applicationFor(item), { inference: true })}${textSection('Public availability', item.availability)}${relatedTrends(item).length ? `<section class="detail-section"><h3>Connected trends</h3>${trendChips(item)}</section>` : ''}`
      : `${textSection('Why now', item.whyNow)}${textSection(applicationHeading(), applicationFor(item), { inference: true })}${relatedCompanies(item).length ? `<section class="detail-section"><h3>Meet the builders</h3>${companyChips(item)}</section>` : ''}`;
    $('#detail-panel').innerHTML = `<div class="detail-inner">${intro}${body}${sourceList(item, true)}</div><div class="detail-footer"><button type="button" class="secondary-button" ${isCompany ? 'data-open-company' : 'data-open-trend'}="${escape(item.id)}">${isCompany ? 'Explore this company' : 'Read the full signal'}</button>${isCompany ? bookmarkButton(item) : `<button type="button" class="text-button" data-show-related="${escape(item.id)}">${countLabel(relatedCompanies(item).length, 'company', 'companies')}</button>`}</div>`;
  }

  function renderDomains() {
    $('#domain-grid').innerHTML = activeDomains().map((domain, index) => {
      const inLens = item => state.lens === 'all' || array(item.lenses).includes(state.lens);
      const trendCount = trends.filter(item => inLens(item) && domainIdFor(item) === domain.id).length;
      const companyCount = companies.filter(item => inLens(item) && domainIdFor(item) === domain.id).length;
      return `<button type="button" class="domain-card" style="--domain-color:${color(domain.color)}" data-explore-domain="${escape(domain.id)}"><span class="domain-card-icon">${icon(domain.icon || ['inclusion','climate','resources','trust','enterprise','frontier'][index % 6])}</span><h3>${escape(domain.name)}</h3><p>${countLabel(trendCount, 'trend')} · ${countLabel(companyCount, 'company', 'companies')}</p></button>`;
    }).join('');
  }
  function emptyState(type) {
    const shortlisted = state.savedOnly;
    return `<div class="empty-state">${icon(shortlisted ? 'bookmark' : 'search')}<h3>${shortlisted && !saved.size ? 'Start building your shortlist' : 'No matching ' + ({companies:'companies',opportunities:'use cases',signals:'signals',trends:'trends'}[type] || 'records')}</h3><p>${shortlisted && !saved.size ? 'Save companies that interest you using the bookmark on any company card. Your selection stays in this browser.' : 'Try a different search or broaden your filters to explore more of the landscape.'}</p><button type="button" class="secondary-button" data-action="clear-filters">${shortlisted && !saved.size ? 'Explore all companies' : 'Clear filters'}</button></div>`;
  }
  function renderTrends() {
    const items = currentItems('trends');
    $('#trends-grid').innerHTML = items.length ? items.map(item => `<button type="button" class="trend-card" style="--domain-color:${color(domainFor(item).color)}" data-open-trend="${escape(item.id)}"><span class="trend-card-top">${domainLabel(item)}${ringPill(item)}</span><h3>${escape(item.title)}</h3><p>${escape(item.summary)}</p><span class="trend-card-bottom"><span>${countLabel(relatedCompanies(item).length, 'company', 'companies')} · ${countLabel(sourceRecords(item).length, 'source')}</span><strong>Explore signal</strong></span></button>`).join('') : emptyState('trends');
  }
  function renderCompanies() {
    const items = currentItems('companies').sort((a, b) => a.name.localeCompare(b.name));
    $('#companies-grid').innerHTML = items.length ? items.map(item => `<article class="company-card"><div class="company-card-top"><div class="company-monogram" aria-hidden="true">${escape(item.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(word => word[0]).join('').slice(0, 2) || item.name.slice(0, 2))}</div><div><h3>${escape(item.name)}</h3><div class="company-category">${escape(item.category || 'Company')}</div></div>${bookmarkButton(item)}</div><p>${escape(item.summary)}</p>${item.distinctive ? `<div class="company-distinctive"><span>WHY IT’S ON THE RADAR</span><p>${escape(item.distinctive)}</p></div>` : ''}<div class="company-card-tags">${domainLabel(item)}${item.region ? `<span class="region-label">${escape(item.region)}</span>` : ''}${ringPill(item)}</div>${item.availability ? `<div class="company-availability">${escape(item.availability)}</div>` : ''}<div class="company-card-footer"><button type="button" class="text-button" data-open-company="${escape(item.id)}">Explore company</button>${compareButton(item)}</div></article>`).join('') : emptyState('companies');
  }

  function renderUseCases() {
    const items = currentItems('opportunities');
    $('#usecases-grid').innerHTML = items.length ? items.map(item => `<button type="button" class="usecase-card" data-open-usecase="${escape(item.id)}"><span class="usecase-card-label">${escape(array(item.lenses).map(lens => lensNames[lens]).filter(Boolean).join(' · '))}</span><h3>${escape(item.title)}</h3><p class="usecase-problem">${escape(item.problem)}</p><div class="usecase-outcome"><span>POTENTIAL VALUE</span><p>${escape(item.outcome)}</p></div><span class="usecase-card-meta">${countLabel(relatedCompanies(item).length, 'builder')} · ${countLabel(relatedTrends(item).length, 'connected trend')} · ${countLabel(sourceRecords(item).length, 'source')}</span><span class="usecase-read">Explore the use case</span></button>`).join('') : emptyState('opportunities');
  }
  function renderSignals() {
    const items = currentItems('signals').sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    $('#signals-list').innerHTML = items.length ? items.map(item => {
      const trend = trendMap.get(item.trendId);
      const records = sourceRecords(item);
      return `<article class="signal-card"><div class="signal-date"><time datetime="${escape(item.date || '')}">${escape(item.date ? shortDate(item.date) : 'Date not stated')}</time><span>${trend ? escape(domainFor(trend).shortName || domainFor(trend).name) : 'Emerging technology'}</span></div><div class="signal-body"><h3>${escape(item.title)}</h3><p>${escape(item.text || item.summary || '')}</p><div class="signal-links">${trend ? `<button type="button" data-open-trend="${escape(trend.id)}" class="signal-trend">${escape(trend.shortTitle || trend.title)}</button>` : ''}${records.map(source => `<a href="${escape(safeURL(source.url))}" target="_blank" rel="noopener noreferrer">${escape(source.publisher || source.title || 'Primary source')}${icon('external')}</a>`).join('')}</div></div></article>`;
    }).join('') : emptyState('signals');
  }

  function renderCompareTray() {
    const tray = $('#compare-tray');
    tray.hidden = !compared.size;
    document.body.classList.toggle('has-compare-tray', Boolean(compared.size));
    if (!compared.size) return;
    const items = [...compared].map(id => companyMap.get(id)).filter(Boolean);
    tray.innerHTML = `<div class="compare-tray-label">${icon('compare')}<strong>${items.length}/3 selected</strong></div><div class="compare-tray-items">${items.map(item => `<button type="button" data-compare="${escape(item.id)}" aria-label="Remove ${escape(item.name)} from comparison">${escape(item.name)}${icon('close')}</button>`).join('')}</div><div class="compare-tray-actions"><button type="button" class="text-button" data-action="clear-compare">Clear</button><button type="button" class="primary-button" data-action="open-compare" ${items.length < 2 ? 'disabled' : ''}>Compare companies</button></div>`;
  }
  function toggleCompare(id) {
    if (!companyMap.has(id)) return;
    const restoreFocus = document.activeElement?.dataset?.compare === id;
    if (compared.has(id)) compared.delete(id);
    else if (compared.size < 3) compared.add(id);
    else { showToast('Compare up to three companies. Remove one to add another.'); return; }
    renderCompareTray();
    if (state.view === 'startups') renderCompanies();
    if (state.dialog?.type === 'company') {
      const item = companyMap.get(state.dialog.id);
      const button = $('.compare-wide', $('#detail-dialog'));
      if (button) button.outerHTML = compareButton(item, true);
    }
    if (restoreFocus) ($$('[data-compare]').find(button => button.dataset.compare === id) || $('.compare-tray-actions button'))?.focus({ preventScroll: true });
  }
  function openComparison() {
    if (compared.size < 2) return;
    compareReturnFocus = document.activeElement;
    const items = [...compared].map(id => companyMap.get(id)).filter(Boolean);
    const evidenceCell = item => `<p>${escape(evidenceFor(item))}</p><ul class="compare-source-list">${sourceRecords(item).slice(0, 3).map(source => `<li><a href="${escape(safeURL(source.url))}" target="_blank" rel="noopener noreferrer">${escape(source.title || source.publisher || 'Source')}</a></li>`).join('')}</ul>`;
    const rows = [
      ['Public capability', item => `<p>${escape(item.summary)}</p>`],
      ['Distinctive angle', item => `<p>${escape(item.distinctive || item.summary)}</p>`],
      [applicationHeading() + ' · our interpretation', item => `<p>${escape(applicationFor(item) || 'Relevance not yet assessed.')}</p>`],
      ['Public availability', item => `<p>${escape(item.availability || 'Not verified')}</p>`],
      ['Evidence & sources', evidenceCell],
      ['A useful question', item => `<p>${escape(item.evaluationQuestion || item.note || 'No company-specific question recorded.')}</p>`],
      ['Official website', item => `<a href="${escape(safeURL(item.website))}" target="_blank" rel="noopener noreferrer">${escape(item.website.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>`]
    ];
    $('#compare-content').innerHTML = `<header class="compare-head"><div><p class="eyebrow">COMPARE CAPABILITIES</p><h2 id="compare-title">What distinguishes these builders?</h2><p>Read the capability, availability and source evidence alongside the proposed relevance.</p></div><button type="button" class="dialog-close" data-action="close-compare" aria-label="Close comparison">${icon('close')}</button></header><div class="compare-table-wrap" tabindex="0" aria-label="Company comparison. Scroll horizontally to see all columns."><table class="compare-table"><caption class="sr-only">Side-by-side comparison of ${escape(items.map(item => item.name).join(', '))}</caption><thead><tr><th scope="col">Comparison</th>${items.map(item => `<th scope="col"><strong>${escape(item.name)}</strong><span>${escape(item.category || 'Company')}</span></th>`).join('')}</tr></thead><tbody>${rows.map(([label, render]) => `<tr><th scope="row">${escape(label)}</th>${items.map(item => `<td>${render(item)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><footer class="compare-foot"><p>Evidence is attributed to the linked public sources. Proposed relevance is our analysis.</p><button type="button" class="secondary-button" data-action="export-compare">${icon('download')}Export comparison list</button></footer>`;
    const dialog = $('#compare-dialog');
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    $('[data-action="close-compare"]', dialog)?.focus({ preventScroll: true });
  }
  function closeComparison() {
    $('#compare-dialog').close();
    if (compareReturnFocus?.isConnected) compareReturnFocus.focus({ preventScroll: true });
  }

  function renderAbout() {
    const benchmarkItems = Array.isArray(DATA.benchmarks) ? DATA.benchmarks : [];
    const coverageSummary = DATA.meta?.coverageSummary || 'A curated starting point, not an exhaustive market map. Coverage connects development priorities, institutional technology and frontier capabilities; the individual profiles show why each builder is included.';
    const coverageGaps = array(DATA.meta?.coverageGaps).filter(value => typeof value === 'string');
    const coverageSection = `<section class="about-section"><h3>What this edition covers.</h3><p>${escape(coverageSummary)}</p>${coverageGaps.length ? `<h4>Areas for the next research pass</h4><ul>${coverageGaps.map(value => `<li>${escape(value)}</li>`).join('')}</ul>` : ''}</section>`;
    const policySources = sources.filter(source => /world\s?bank|worldbank\.org|ifc\.org/i.test([source.publisher, source.url].join(' '))).slice(0, 5);
    $('#about-view').innerHTML = `<div class="about-intro"><p class="eyebrow">HOW TO READ THE LANDSCAPE</p><h2>A useful map of emerging possibilities.</h2><p>This radar connects consequential technology shifts with the builders behind them. It helps you understand a capability, examine the evidence, compare approaches, and see where the implications could matter.</p></div>${coverageSection}<div class="about-actions"><article class="about-action">${ringPill({horizon:'now'})}<h3>Available to explore.</h3><p>A capability is available to examine in a bounded setting. Local fit, reliability and institutional suitability still depend on the specific product and use.</p></article><article class="about-action">${ringPill({horizon:'next'})}<h3>Evidence is developing.</h3><p>The direction is becoming clearer, while deployment experience, access, economics or integration evidence is still emerging.</p></article><article class="about-action">${ringPill({horizon:'horizon'})}<h3>Watch the milestones.</h3><p>The implications could be substantial, but important technical or practical milestones remain. Read the stated constraints alongside the promise.</p></article></div><section class="about-section"><h3>Three perspectives with different questions.</h3><div class="about-lens-grid"><div><h4>WBG development</h4><p>Which capabilities could improve access, public services, resilience and opportunity in client countries?</p></div><div><h4>ITS &amp; enterprise</h4><p>What could improve software engineering, knowledge, data, infrastructure and secure institutional AI?</p></div><div><h4>Frontier</h4><p>What is becoming technically or economically possible, and what might change if it scales?</p></div></div><p>Signals may appear in more than one perspective. Their relevance can differ by context. The sectors group related capabilities; the rings describe an editorial view of the opportunity, without fixed calendar forecasts or readiness certification.</p></section><section class="about-section"><h3>Capability, evidence and relevance are separate.</h3><div class="about-columns"><div><h4>Public evidence</h4><p>Product documentation, announcements, research and named deployments establish what has been publicly reported. Publication dates and research check dates are shown separately. Vendor descriptions do not establish independent performance validation.</p></div><div><h4>Our interpretation</h4><p>Potential applications, distinctive angles and implications connect that evidence to a particular question. They do not establish an existing WBG relationship, tested institutional use or endorsement.</p></div></div><div class="method-note">Company availability is shown separately from its radar position. Read the individual profile and sources before interpreting a company’s maturity or suitability. The moving sweep is a visual aid; it is not an automated scanning feed.</div></section>${benchmarkItems.length ? `<section class="about-section"><h3>Informed by established radar practices.</h3><div class="benchmark-grid">${benchmarkItems.map(item => `<article><a href="${escape(safeURL(item.url))}" target="_blank" rel="noopener noreferrer">${escape(item.name)}${icon('external')}</a><p>${escape(item.lesson || '')}</p></article>`).join('')}</div></section>` : ''}<section class="about-section"><h3>A visible research cut-off.</h3><p>This edition was checked on <strong>${escape(dateLabel(checked))}</strong> and includes ${trends.length} trends, ${companies.length} builder profiles and ${opportunities.length} use cases. The Recent signals view records dated developments and their implications. This is a curated snapshot, with no automatic background refresh.</p><p>Revisit fast-moving capabilities and commercial availability before relying on a record. Future editions can track actual changes in evidence and positioning; the current edition does not invent a history of movement.</p></section>${policySources.length ? `<section class="about-section"><h3>Public WBG context</h3><ul class="about-source-list">${policySources.map(source => `<li><a href="${escape(safeURL(source.url))}" target="_blank" rel="noopener noreferrer">${escape(source.title)}</a><small>${escape(source.publisher || 'World Bank Group')}${source.date ? ' · ' + escape(shortDate(source.date)) : ''}</small></li>`).join('')}</ul></section>` : ''}<section class="about-section"><h3>Take useful findings with you.</h3><p>Compare up to three companies, save a shortlist, and export a filtered list. Shortlists are stored in this browser. The complete research dataset is available as JSON, including its sources, for review and future updates.</p><div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px"><button type="button" class="primary-button" data-view="radar">Explore the radar</button><button type="button" class="secondary-button" data-action="export-json">${icon('download')}Download research data</button></div></section>`;
  }

  function openUseCase(id, updateHash = true) {
    const item = opportunityMap.get(id);
    if (!item) return;
    const dialog = $('#detail-dialog');
    if (!dialog.open) returnFocus = document.activeElement;
    state.dialog = { type: 'usecase', id };
    const questions = item.experiment || item.measure ? `<details class="further-inquiry"><summary>Questions that would test the idea ${icon('chevron')}</summary>${textSection('What to learn', item.experiment)}${textSection('Evidence of value', item.measure)}</details>` : '';
    $('#dialog-content').innerHTML = `<header class="dialog-head"><button type="button" class="dialog-close" data-action="close-detail" aria-label="Close use case">${icon('close')}</button><div class="usecase-card-label">${escape(array(item.lenses).map(lens => lensNames[lens]).filter(Boolean).join(' · '))}</div><h2 id="dialog-title">${escape(item.title)}</h2><p>${escape(item.problem)}</p><span class="proposal-label">Proposed application</span></header><div class="dialog-body"><div class="dialog-main">${textSection('Who this could serve', array(item.users).join('; '))}${textSection('Potential value', item.outcome)}${textSection('How the capabilities connect', item.approach)}${questions}</div><aside class="dialog-sidebar">${relatedCompanies(item).length ? `<h3>BUILDERS TO EXPLORE</h3>${companyChips(item)}` : ''}${relatedTrends(item).length ? `<h3>CONNECTED TRENDS</h3>${trendChips(item)}` : ''}<h3>EVIDENCE BEHIND THE TECHNOLOGIES</h3>${sourceList(item)}<p class="detail-meta">Candidate companies are examples to examine. The application is an interpretation of the linked evidence.</p></aside></div><footer class="dialog-foot"><p>Use-case brief · Potential value, not a confirmed deployment.</p><button type="button" class="text-button" data-action="copy-link">${icon('link')}Copy use-case link</button></footer>`;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    $('[data-action="close-detail"]', dialog)?.focus({ preventScroll: true });
    if (updateHash) history.replaceState(null, '', `#usecase/${encodeURIComponent(id)}`);
  }

  function openDetail(type, id, updateHash = true) {
    if (type === 'usecase') { openUseCase(id, updateHash); return; }
    const item = (type === 'company' ? companyMap : trendMap).get(id);
    if (!item) { showToast('This record is not available in the current edition.'); return; }
    const isCompany = type === 'company';
    const dialog = $('#detail-dialog');
    if (!dialog.open) returnFocus = document.activeElement;
    state.dialog = { type, id };
    const watchouts = array(item.watchouts);
    const inquiry = !isCompany && (item.experiment || item.measure) ? `<details class="further-inquiry"><summary>Questions to explore further ${icon('chevron')}</summary>${textSection('A question to test', item.experiment)}${textSection('Evidence that would help', item.measure)}</details>` : '';
    const main = isCompany
      ? `${textSection('What makes this builder distinctive', item.distinctive)}${textSection(applicationHeading(), applicationFor(item), { inference: true })}${textSection('Public availability', item.availability)}${textSection('A useful question', item.evaluationQuestion)}${item.note ? textSection('Evidence to keep in view', item.note) : ''}`
      : `${textSection('What is changing', item.whyNow)}${textSection(applicationHeading(), applicationFor(item), { inference: true })}${watchouts.length ? `<section class="detail-section"><h3>Constraints &amp; milestones</h3><ul>${watchouts.map(text => `<li>${escape(text)}</li>`).join('')}</ul></section>` : ''}${inquiry}`;
    const related = isCompany ? (relatedTrends(item).length ? `<h3>CONNECTED TRENDS</h3>${trendChips(item)}` : '') : (relatedCompanies(item).length ? `<h3>MEET THE BUILDERS</h3>${companyChips(item)}` : '');
    $('#dialog-content').innerHTML = `<header class="dialog-head"><button type="button" class="dialog-close" data-action="close-detail" aria-label="Close details">${icon('close')}</button><div class="detail-topline">${domainLabel(item)}${ringPill(item)}</div><h2 id="dialog-title">${escape(isCompany ? item.name : item.title)}</h2><p>${escape(item.summary)}</p>${isCompany ? `<a class="website-link" href="${escape(safeURL(item.website))}" target="_blank" rel="noopener noreferrer">Visit official website ${icon('external')}</a>` : ''}</header><div class="dialog-body"><div class="dialog-main">${main}</div><aside class="dialog-sidebar">${isCompany ? `<div class="company-detail-actions">${bookmarkButton(item, true)}${compareButton(item, true)}</div>` : ''}${related}<h3>SOURCES &amp; EVIDENCE</h3>${isCompany ? `<p class="record-evidence-label">${escape(evidenceFor(item))}</p>` : ''}${sourceList(item)}<p class="detail-meta">Research checked ${escape(dateLabel(item.verified || checked))}.</p></aside></div><footer class="dialog-foot"><p>${isCompany ? 'Company profile · Proposed relevance is our analysis.' : 'Trend assessment · Positioning and implications are editorial judgments.'}</p><button type="button" class="text-button" data-action="copy-link">${icon('link')}Copy record link</button></footer>`;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    $('button[data-action="close-detail"]', dialog)?.focus({ preventScroll: true });
    if (updateHash) history.replaceState(null, '', `#${type}/${encodeURIComponent(id)}`);
  }
  function closeDetail(updateHash = true) {
    const dialog = $('#detail-dialog');
    if (dialog.open) dialog.close();
    state.dialog = null;
    if (updateHash) history.replaceState(null, '', `#${state.view}`);
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  }
  function selectPoint(id) {
    const map = state.type === 'companies' ? companyMap : trendMap;
    if (!map.has(id)) return;
    const restorePointFocus = document.activeElement?.dataset?.point === id;
    state.preferLensSelection = false;
    state.selected = id;
    renderRadar();
    if (restorePointFocus || state.radarExpanded) $$('[data-point]').find(point => point.dataset.point === id)?.focus({ preventScroll: true });
    history.replaceState(null, '', `#radar/${state.type === 'companies' ? 'company' : 'trend'}/${encodeURIComponent(id)}`);
    if (state.radarExpanded) openDetail(state.type === 'companies' ? 'company' : 'trend', id);
  }
  function toggleSave(id) {
    if (!companyMap.has(id)) return;
    const restoreSaveFocus = document.activeElement?.dataset?.save === id;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved])); storageAvailable = true; } catch (_) { storageAvailable = false; }
    showToast(`${saved.has(id) ? 'Added to' : 'Removed from'} your shortlist.${storageAvailable ? '' : ' Saved for this visit only.'}`);
    updateControls();
    if (state.view === 'startups') renderCompanies();
    if (state.view === 'trends' && state.savedOnly) renderTrends();
    if (state.view === 'radar') renderRadar();
    if (state.dialog?.type === 'company') {
      const item = companyMap.get(state.dialog.id);
      const button = $('.bookmark-wide', $('#detail-dialog'));
      if (button) { button.outerHTML = bookmarkButton(item, true); $('.bookmark-wide', $('#detail-dialog'))?.focus({ preventScroll: true }); }
    } else if (restoreSaveFocus) { ($$('[data-save]').find(button => button.dataset.save === id) || $('.shortlist-header'))?.focus({ preventScroll: true }); }
  }
  function clearFilters() {
    Object.assign(state, { lens: 'all', domain: 'all', ring: 'all', query: '', savedOnly: false });
    $('#search-input').value = '';
    renderCurrentView();
  }
  function showRelated(id) {
    const trend = trendMap.get(id);
    if (!trend) return;
    closeDetail(false);
    Object.assign(state, { lens: 'all', domain: 'all', ring: 'all', query: trend.title, savedOnly: false });
    $('#search-input').value = state.query;
    showView('startups', true, true);
  }
  function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3500); }
  function hideTooltip() { $('#radar-tooltip').hidden = true; }
  function showTooltip(id, x, y) {
    const item = (state.type === 'companies' ? companyMap : trendMap).get(id);
    if (!item) return;
    const tooltip = $('#radar-tooltip');
    tooltip.innerHTML = `<strong>${escape(item.name || item.title)}</strong><span>${escape(domainFor(item).shortName || domainFor(item).name)} · ${ringFor(item).name}</span>`;
    tooltip.hidden = false;
    const width = tooltip.offsetWidth, height = tooltip.offsetHeight;
    tooltip.style.left = `${Math.max(10, Math.min(window.innerWidth - width - 10, x + 14))}px`;
    tooltip.style.top = `${Math.max(10, Math.min(window.innerHeight - height - 10, y - height - 15))}px`;
  }

  const tourSteps = [
    { title: 'Start with the question you care about.', body: 'Choose WBG development, ITS & enterprise, or Frontier. Each perspective brings a different context, relevant signals and connected use cases.', art: 'lenses' },
    { title: 'Read the rings in context.', body: 'Now means available to explore in a bounded setting. Next means deployment evidence is developing. Horizon means important milestones remain. Read each record’s availability and sources separately.', art: 'rings' },
    { title: 'Follow a signal to the builders.', body: 'Select a dot to understand what is changing. Explore the connected companies, then compare up to three to see differences in capability, availability and evidence.', art: 'points' },
    { title: 'Keep the evidence with the idea.', body: 'Recent signals show dated developments. Use cases connect technologies to meaningful questions. Save a shortlist and export it for a discussion. The research is a dated snapshot.', art: 'evidence' }
  ];
  function tourArt(kind) {
    if (kind === 'lenses') return '<svg class="tour-art" viewBox="0 0 240 160" aria-hidden="true"><rect x="25" y="24" width="190" height="32" rx="6" fill="#265775" stroke="#3b7898"/><rect x="25" y="65" width="190" height="32" rx="6" fill="#11354f" stroke="#375570"/><rect x="25" y="106" width="190" height="32" rx="6" fill="#11354f" stroke="#375570"/><text x="120" y="45" text-anchor="middle" fill="#d4f3ff" font-size="12">WBG development</text><text x="120" y="86" text-anchor="middle" fill="#9fbacf" font-size="12">ITS &amp; enterprise</text><text x="120" y="127" text-anchor="middle" fill="#9fbacf" font-size="12">Frontier</text></svg>';
    if (kind === 'evidence') return '<svg class="tour-art" viewBox="0 0 240 160" aria-hidden="true"><rect x="54" y="15" width="132" height="132" rx="8" fill="#123752" stroke="#40627b"/><path d="M75 42h72m-72 12h90M75 77h90m-90 12h72M75 112h65" stroke="#7ca5bd" stroke-width="3" stroke-linecap="round"/><path d="m155 119 8 8 16-19" stroke="#52d6bd" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="167" cy="119" r="23" fill="#103b48" stroke="#4aa699"/><path d="m157 119 7 7 14-16" stroke="#61dabc" stroke-width="2.5" fill="none"/></svg>';
    return `<svg class="tour-art" viewBox="0 0 240 160" aria-hidden="true"><circle cx="120" cy="80" r="70" fill="#0a2a45" stroke="#456780"/><circle cx="120" cy="80" r="47" fill="#0d304d" stroke="#456780"/><circle cx="120" cy="80" r="25" fill="#17415e" stroke="#456780"/><path d="M120 10v140M50 80h140" stroke="#365a76" stroke-dasharray="2 4"/>${kind === 'points' ? '<circle cx="140" cy="57" r="5" fill="#4ccfdc"/><circle cx="76" cy="107" r="5" fill="#8c96f5"/><circle cx="160" cy="110" r="5" fill="#54c6ab"/><circle cx="140" cy="57" r="12" fill="none" stroke="#4ccfdc"/><rect x="151" y="30" width="71" height="23" rx="4" fill="#eaf7fd"/><text x="186" y="45" fill="#24465e" text-anchor="middle" font-size="10">Select a signal</text>' : '<text x="120" y="19" fill="#b6cedf" font-size="8" text-anchor="middle">HORIZON</text><text x="120" y="42" fill="#b6cedf" font-size="8" text-anchor="middle">NEXT</text><text x="120" y="82" fill="#d8eaf5" font-size="7" text-anchor="middle">NOW</text>'}</svg>`;
  }
  function renderTour() {
    const step = tourSteps[state.tourStep];
    $('#tour-content').innerHTML = `<div class="tour-top">${tourArt(step.art)}<button type="button" class="dialog-close" data-action="close-tour" aria-label="Close radar guide">${icon('close')}</button></div><div class="tour-body"><div class="tour-step-label">THE RADAR IN FOUR STEPS · ${state.tourStep+1}/4</div><h2 id="tour-title">${escape(step.title)}</h2><p>${escape(step.body)}</p><div class="tour-controls"><div class="tour-dots" aria-hidden="true">${tourSteps.map((_, i) => `<span class="${i === state.tourStep ? 'active' : ''}"></span>`).join('')}</div><div class="tour-buttons">${state.tourStep > 0 ? '<button type="button" class="text-button" data-action="tour-back">Back</button>' : ''}<button type="button" class="primary-button" data-action="tour-next">${state.tourStep === 3 ? 'Explore the radar' : 'Continue'}</button></div></div></div>`;
  }
  function openTour() { state.tourStep = 0; renderTour(); $('#tour-dialog').showModal(); }

  function downloadFile(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = name; a.hidden = true; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function csvCell(value) {
    let text = String(value ?? '');
    if (/^[\s]*[=+\-@]/.test(text) || /^[\t\r]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  }
  function exportCSV(selection = null) {
    const isComparison = Array.isArray(selection);
    const items = (isComparison ? selection : currentItems('companies')).sort((a, b) => a.name.localeCompare(b.name));
    if (!items.length) { showToast('No companies match this selection. Broaden your filters first.'); return; }
    const rows = [['Company', 'Website', 'Category', 'Domain', 'Horizon', 'Region', 'Public capability', 'Distinctive angle', 'Proposed relevance (analysis)', 'Public availability', 'Evidence', 'Useful question', 'Related trends', 'Sources', 'Research checked', 'Saved']];
    items.forEach(item => rows.push([item.name, item.website, item.category || '', domainFor(item).name, ringFor(item).name, item.region || '', item.summary, item.distinctive || '', applicationFor(item), item.availability || 'Not verified', evidenceFor(item), item.evaluationQuestion || '', relatedTrends(item).map(trend => trend.title).join('; '), sourceRecords(item).map(source => source.url).join('; '), item.verified || checked, saved.has(item.id) ? 'Yes' : 'No']));
    downloadFile(`wbg-radar-${isComparison ? 'comparison' : state.savedOnly ? 'shortlist' : 'companies'}-${checked}.csv`, '\uFEFF' + rows.map(row => row.map(csvCell).join(',')).join('\r\n'), 'text/csv;charset=utf-8');
    showToast(`Exported ${items.length} company profile${items.length === 1 ? '' : 's'}.`);
  }
  function exportJSON() { downloadFile(`wbg-innovation-radar-${checked}.json`, JSON.stringify(DATA, null, 2), 'application/json'); showToast('Research dataset downloaded.'); }
  async function copyLink() {
    const record = state.dialog;
    if (!record) return;
    const url = new URL(location.href); url.hash = `${record.type}/${encodeURIComponent(record.id)}`;
    try { await navigator.clipboard.writeText(url.href); showToast('Record link copied.'); }
    catch (_) { showToast('Copy the record link from your browser’s address bar.'); }
  }

  function renderHighlights() {
    const highlights = array(DATA.highlights).slice(0, 3);
    if (!highlights.length) return;
    const section = document.createElement('section');
    section.className = 'edition-highlights';
    section.setAttribute('aria-label', 'Recent signals');
    section.innerHTML = `<div class="highlights-label"><span class="eyebrow">IN THIS EDITION</span><strong>Recent signals</strong></div><div class="highlights-items">${highlights.map(item => `<button type="button" class="highlight-item" ${item.trendId && trendMap.has(item.trendId) ? `data-open-trend="${escape(item.trendId)}"` : 'data-view="about"'}><span class="highlight-date">${escape(item.date ? shortDate(item.date) : 'New research')}</span><strong>${escape(item.title)}</strong><span class="highlight-summary">${escape(item.text || '')}</span></button>`).join('')}</div>`;
    $('.radar-bottomnote').after(section);
  }

  function handleHash() {
    const parts = location.hash.slice(1).split('/');
    if (['trend', 'company', 'usecase'].includes(parts[0]) && parts[1]) {
      let id; try { id = decodeURIComponent(parts.slice(1).join('/')); } catch (_) { id = parts[1]; }
      const selectedMap = parts[0] === 'company' ? companyMap : parts[0] === 'usecase' ? opportunityMap : trendMap;
      const exists = selectedMap.has(id);
      if (!exists) { showView('radar', false); showToast('This record is not available in the current edition.'); return; }
      const record = selectedMap.get(id);
      if (state.lens !== 'all' && !array(record.lenses).includes(state.lens)) state.lens = array(record.lenses)[0] || 'all';
      showView(parts[0] === 'company' ? 'startups' : parts[0] === 'usecase' ? 'usecases' : 'trends', false);
      openDetail(parts[0], id, false);
    } else {
      if ($('#detail-dialog').open) closeDetail(false);
      if (parts[0] === 'radar' && parts[2]) {
        state.type = parts[1] === 'company' ? 'companies' : 'trends';
        try { state.selected = decodeURIComponent(parts.slice(2).join('/')); } catch (_) { state.selected = parts[2]; }
        state.preferLensSelection = false;
        const record = (state.type === 'companies' ? companyMap : trendMap).get(state.selected);
        if (record && state.lens !== 'all' && !array(record.lenses).includes(state.lens)) state.lens = array(record.lenses)[0] || 'all';
      }
      showView(parts[0] || 'radar', false);
    }
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('button, [data-domain], [data-point]');
    if (!target) return;
    if (target.dataset.view) { if ($('#detail-dialog').open) closeDetail(false); showView(target.dataset.view, true, true); return; }
    if (target.dataset.lens) { state.lens = target.dataset.lens; state.domain = 'all'; state.ring = 'all'; state.selected = null; state.preferLensSelection = true; renderCurrentView(); return; }
    if (target.dataset.type) { state.type = target.dataset.type; state.selected = null; renderCurrentView(); return; }
    if (target.dataset.domain) { state.domain = state.domain === target.dataset.domain ? 'all' : target.dataset.domain; renderCurrentView(); return; }
    if (target.dataset.exploreDomain) { state.domain = target.dataset.exploreDomain; state.query = ''; state.ring = 'all'; state.savedOnly = false; $('#search-input').value = ''; showView('trends', true, true); return; }
    if (target.dataset.ring) { state.ring = state.ring === target.dataset.ring ? 'all' : target.dataset.ring; renderCurrentView(); return; }
    if (target.dataset.point) { selectPoint(target.dataset.point); return; }
    if (target.dataset.openTrend) { openDetail('trend', target.dataset.openTrend); return; }
    if (target.dataset.openCompany) { openDetail('company', target.dataset.openCompany); return; }
    if (target.dataset.openUsecase) { openDetail('usecase', target.dataset.openUsecase); return; }
    if (target.dataset.showRelated) { showRelated(target.dataset.showRelated); return; }
    if (target.dataset.save) { toggleSave(target.dataset.save); return; }
    if (target.dataset.compare) { toggleCompare(target.dataset.compare); return; }
    const action = target.dataset.action;
    if (action === 'clear-filters') clearFilters();
    if (action === 'toggle-shortlist') { state.savedOnly = !state.savedOnly; renderCurrentView(); }
    if (action === 'open-shortlist') { Object.assign(state, { savedOnly: true, lens: 'all', domain: 'all', ring: 'all', query: '' }); $('#search-input').value = ''; showView('startups', true, true); }
    if (action === 'toggle-motion') { state.paused = !state.paused; updateControls(); }
    if (action === 'toggle-radar-size' && wideRadar.matches) { state.radarExpanded = !state.radarExpanded; hideTooltip(); updateControls(); }
    if (action === 'close-detail') closeDetail();
    if (action === 'tour') openTour();
    if (action === 'close-tour') $('#tour-dialog').close();
    if (action === 'tour-next') { if (state.tourStep === 3) { $('#tour-dialog').close(); showView('radar', true, true); } else { state.tourStep++; renderTour(); $('[data-action="tour-next"]').focus(); } }
    if (action === 'tour-back') { state.tourStep = Math.max(0, state.tourStep - 1); renderTour(); $('[data-action="tour-next"]').focus(); }
    if (action === 'export-csv') exportCSV();
    if (action === 'export-json') exportJSON();
    if (action === 'copy-link') copyLink();
    if (action === 'open-compare') openComparison();
    if (action === 'close-compare') closeComparison();
    if (action === 'clear-compare') { compared.clear(); renderCompareTray(); if (state.view === 'startups') renderCompanies(); }
    if (action === 'export-compare') exportCSV([...compared].map(id => companyMap.get(id)).filter(Boolean));
  });
  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-point], [data-domain]')) { event.preventDefault(); event.target.dataset.point ? selectPoint(event.target.dataset.point) : (state.domain = state.domain === event.target.dataset.domain ? 'all' : event.target.dataset.domain, renderCurrentView()); }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.matches('input, textarea, select, [contenteditable="true"]') && !$('#detail-dialog').open && !$('#tour-dialog').open && !$('#compare-dialog').open) { event.preventDefault(); if (state.view === 'about') showView('radar'); $('#search-input').focus(); }
  });
  $('#search-input').addEventListener('input', event => { state.query = event.target.value; renderCurrentView(); });
  $('#domain-select').addEventListener('change', event => { state.domain = event.target.value; renderCurrentView(); });
  $('#ring-select').addEventListener('change', event => { state.ring = event.target.value; renderCurrentView(); });
  $('#radar-graphic').addEventListener('pointerover', event => { const point = event.target.closest('[data-tooltip]'); if (point) showTooltip(point.dataset.tooltip, event.clientX, event.clientY); });
  $('#radar-graphic').addEventListener('pointermove', event => { const point = event.target.closest('[data-tooltip]'); if (point) showTooltip(point.dataset.tooltip, event.clientX, event.clientY); });
  $('#radar-graphic').addEventListener('pointerout', event => { if (event.target.closest('[data-tooltip]')) hideTooltip(); });
  $('#radar-graphic').addEventListener('focusin', event => { const point = event.target.closest('[data-tooltip]'); if (point) { const rect = point.getBoundingClientRect(); showTooltip(point.dataset.tooltip, rect.x + rect.width / 2, rect.y); } });
  $('#radar-graphic').addEventListener('focusout', hideTooltip);
  window.addEventListener('scroll', hideTooltip, { passive: true });
  $('#detail-dialog').addEventListener('cancel', event => { event.preventDefault(); closeDetail(); });
  $('#detail-dialog').addEventListener('click', event => { if (event.target === $('#detail-dialog')) { const bounds = event.target.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDetail(); } });
  $('#tour-dialog').addEventListener('click', event => { if (event.target === $('#tour-dialog')) { const bounds = event.target.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.target.close(); } });
  $('#compare-dialog').addEventListener('cancel', event => { event.preventDefault(); closeComparison(); });
  $('#compare-dialog').addEventListener('click', event => { if (event.target === $('#compare-dialog')) { const bounds = event.target.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeComparison(); } });
  window.addEventListener('hashchange', handleHash);
  wideRadar.addEventListener('change', event => { if (!event.matches && state.radarExpanded) { state.radarExpanded = false; updateControls(); } });

  $('#trend-total').textContent = trends.length;
  $('#company-total').textContent = companies.length;
  $('#domain-total').textContent = domains.length;
  $('#edition-date').textContent = dateLabel(checked);
  $('#footer-date').textContent = `Checked ${dateLabel(checked)}`;
  hydrateIcons();
  renderLensCards();
  renderDomains();
  renderHighlights();
  handleHash();
})();
