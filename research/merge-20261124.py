"""Merge the dated, targeted research refresh without restamping inherited evidence."""
import copy
import json
import os
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

REPO = Path(__file__).resolve().parent.parent
TODAY = '2026-11-24'
base = json.loads((REPO/'data.json').read_text())
before = {k: {r['id'] for r in base[k]} for k in ('companies','trends','sources')}
base_version = base['meta']['version']
refreshes = [json.loads((REPO/'research'/name).read_text()) for name in ('development-refresh-20261124.json','frontier-refresh-20261124.json')]
relations = {'sourceIds','wbgContextSourceIds','companyIds','trendIds','lenses'}

def union(a,b):
    return list(dict.fromkeys(a+b))

def merge(old,new):
    result = copy.deepcopy(old)
    for k,v in new.items():
        if k in relations and isinstance(v,list): result[k] = union(result.get(k,[]),v)
        elif isinstance(v,dict) and isinstance(result.get(k),dict): result[k] = {**result[k],**v}
        else: result[k] = copy.deepcopy(v)
    return result

def clean(value):
    if isinstance(value,list): return [clean(x) for x in value]
    if isinstance(value,dict): return {k:clean(v) for k,v in value.items() if k not in {'retrievalRef','sourceRefs'}}
    return value

reviewed_companies=set()
reviewed_trends=set()
reviewed_sources=set()
for refresh in refreshes:
    for collection in ('companies','trends','sources'):
        by_id={item['id']:item for item in base[collection]}
        for row in refresh[collection]:
            row=clean(row)
            if row['id'] in by_id:
                by_id[row['id']].update(merge(by_id[row['id']],row))
            else:
                base[collection].append(row)
                by_id[row['id']]=row
            {'companies':reviewed_companies,'trends':reviewed_trends,'sources':reviewed_sources}[collection].add(row['id'])
    for signal in refresh.get('signals',[]):
        if not any(x.get('title')==signal.get('title') and x.get('date')==signal.get('date') for x in base['signals']):
            base['signals'].append(clean(signal))

company_by_id = {c['id']:c for c in base['companies']}
trend_by_id = {t['id']:t for t in base['trends']}
source_by_id = {s['id']:s for s in base['sources']}

# Union existing and newly supplied relations before rebuilding the reverse map.
for t in base['trends']:
    for cid in t.get('companyIds',[]):
        if cid in company_by_id:
            company_by_id[cid]['trendIds']=union(company_by_id[cid].get('trendIds',[]),[t['id']])
for t in base['trends']:
    t['companyIds']=[c['id'] for c in base['companies'] if t['id'] in c.get('trendIds',[])]

spotlights={
 'sarvam':{
  'capabilities':['Recognize local-language speech','Turn dictation into usable text','Extract fields with source locations'],
  'filmApplication':'Explore voice-assisted public-service enquiries with a clear route to human support.',
  'proposedUse':'Test voice-assisted service enquiries in a target Indian language, measuring completion, correction effort and access to human support.',
  'wbgContextSourceIds':['wbg-dpi-program-2026'],
  'recentDevelopment':'Released Dictate and Extract APIs on 23–24 November 2026, connecting speech and documents to usable text and structured fields.',
  'evidenceDate':'2026-11-24'},
 'satsure':{
  'capabilities':['Detect changes along corridors','Monitor construction progress','Prioritize vegetation risks'],
  'filmApplication':'Combine satellite alerts with field evidence to prioritize project inspections.',
  'proposedUse':'Compare satellite alerts with dated field records along one road or power corridor, measuring confirmed findings and false flags.',
  'wbgContextSourceIds':['wbg-gems-2026','wbg-geo']},
 'factory':{
  'capabilities':['Investigate a reported issue','Write and test a fix','Open a pull request for review'],
  'filmApplication':'Clear a bounded software-maintenance backlog with engineer review.',
  'proposedUse':'Compare agent-assisted maintenance in an Azure sandbox with the current engineering process, retaining tests and pull-request review.',
  'wbgContextSourceIds':['wbg-govtech-country-work'],
  'recentDevelopment':'Announced Azure deployment and Azure DevOps integration on 18 November 2026.',
  'evidenceDate':'2026-11-18'},
 'reducto':{
  'capabilities':['Read complex tables and layouts','Extract fields into a schema','Link results to source regions'],
  'filmApplication':'Compare project indicators with a source page for every extracted value.',
  'proposedUse':'Extract predefined indicators from public project reports into a comparison table, checking each value, unit and period against its source.',
  'wbgContextSourceIds':['wbg-documents-reports','wbg-govtech-country-work']},
 'lila-sciences':{
  'capabilities':['Propose material candidates','Run and measure experiments','Use results to choose again'],
  'filmApplication':'Track catalyst advances that could change future electrolyzer costs and durability.',
  'proposedUse':'Track independently reproduced catalyst results that could alter electrolyzer cost and durability assumptions before investment decisions.',
  'wbgContextSourceIds':['wbg-esmap-electrolyzers-2026'],
  'recentDevelopment':'September 2026 catalyst research describes a human-supervised loop linking AI choices to physical laboratory measurements.',
  'evidenceDate':'2026-09-25'}
}
for cid,fields in spotlights.items():
    company_by_id[cid].update(merge(company_by_id[cid],fields))
    assert len(company_by_id[cid]['capabilities'])==3
    assert all(len(x)<=65 for x in company_by_id[cid]['capabilities'])
    assert len(company_by_id[cid]['filmApplication'])<=110

new_companies=reviewed_companies-before['companies']
updated_companies=reviewed_companies&before['companies']
new_trends=reviewed_trends-before['trends']
meta=base['meta']
meta.update({
 'version':'2026.11.24.7',
 'interfaceVersion':'2026.11.24.7',
 'edition':'November 2026 · Expanded research',
 'lastRefresh':TODAY,
 'refreshedAt':TODAY,
 'spotlightsChecked':TODAY,
 'updatedCount':len(updated_companies),
 'additionsCount':len(new_companies),
 'refreshedCompanyCount':len(reviewed_companies),
 'sourceReviewCount':len(reviewed_sources),
 'trendAdditionsCount':len(new_trends),
 'trendUpdatesCount':len(reviewed_trends-new_trends),
 'spotlightEnrichedCount':len(spotlights),
 'automaticUpdates':False,
 'previousEdition':{'companies':len(before['companies']),'trends':len(before['trends']),'version':base_version},
 'refreshScope':f"Targeted 24 November review: {len(new_companies)} profiles added and {len(updated_companies)} existing profiles refreshed, supported by {len(reviewed_sources)} reviewed source records; {len(new_trends)} trends added and {len(reviewed_trends-new_trends)} updated. Five film profiles use the same capability and application fields as the live radar. Other records retain their earlier review dates.",
 'coverageSummary':f"A curated, source-linked landscape of {len(base['companies'])} companies, products and public-good builders across {len(base['trends'])} trends. Coverage spans development priorities, institutional technology and frontier research. Company claims, proposed applications and documented WBG work are distinguished; this is a research snapshot, not an exhaustive market census or an endorsement.",
 'coverageGaps':[
  'Country-level availability, procurement requirements and full lifecycle costs.',
  'Independent outcome evidence for individual products and deployments.',
  'Housing, municipal waste, urban mobility and disability accessibility.',
  'Tourism and value-added manufacturing remain selective.',
  'Fragile and conflict-affected delivery settings and distributional outcomes.'
 ],
 'datePolicy':'Source dates describe publication or announced events. Review dates indicate a source check. Undated pages and month-only events retain that precision.',
 'refreshedCompanyIds':sorted(reviewed_companies)
})
# meta.checked intentionally remains the inherited full-landscape review date.
base['signals'].sort(key=lambda x:x.get('date') or '',reverse=True)
base=clean(base)

errors=[]
for collection in ('companies','trends','sources'):
    ids=[x['id'] for x in base[collection]]
    if len(ids)!=len(set(ids)): errors.append(f'duplicate {collection} IDs')
for c in base['companies']:
    for tid in c.get('trendIds',[]):
        if tid not in trend_by_id: errors.append(f'{c["id"]}: missing trend {tid}')
    for sid in c.get('sourceIds',[])+c.get('wbgContextSourceIds',[]):
        if sid not in source_by_id: errors.append(f'{c["id"]}: missing source {sid}')
for t in base['trends']:
    for sid in t.get('sourceIds',[]):
        if sid not in source_by_id: errors.append(f'{t["id"]}: missing source {sid}')
    for cid in t.get('companyIds',[]):
        if cid not in company_by_id: errors.append(f'{t["id"]}: missing company {cid}')
for sig in base['signals']:
    if sig.get('trendId') and sig['trendId'] not in trend_by_id: errors.append('missing signal trend')
    for sid in sig.get('sourceIds',[]):
        if sid not in source_by_id: errors.append(f'signal: missing source {sid}')
def check_date(value,label):
    if not value: return
    if re.fullmatch(r'\d{4}-\d{2}-\d{2}',value):
        try: parsed=date.fromisoformat(value)
        except ValueError: errors.append(f'{label}: invalid date {value}'); return
        if value>TODAY: errors.append(f'{label}: future evidence date {value}')
    elif re.fullmatch(r'\d{4}-\d{2}',value):
        if not 1<=int(value[5:])<=12: errors.append(f'{label}: invalid month {value}')
    elif re.fullmatch(r'\d{4}',value): pass
    else: errors.append(f'{label}: unsupported date {value}')
for collection in ('companies','trends','sources','signals'):
    for row in base[collection]:
        for field in ('date','checked','verified','evidenceDate'):
            if field in row: check_date(row[field],f'{collection}/{row.get("id",row.get("title"))}/{field}')
for row in base['sources']:
    p=urlparse(row['url'])
    if p.scheme not in ('http','https') or not p.netloc: errors.append('bad source URL '+row['url'])
for row in base['companies']:
    p=urlparse(row['website'])
    if p.scheme not in ('http','https') or not p.netloc: errors.append('bad company URL '+row['website'])
if errors: raise ValueError('\n'.join(errors))

payload=json.dumps(base,ensure_ascii=False,indent=2)
for name,content in [('data.json',payload+'\n'),('data.js','window.RADAR_DATA = '+payload+';\n')]:
    temp=REPO/(name+'.refresh-tmp'); temp.write_text(content); os.replace(temp,REPO/name)
report={'companies':len(base['companies']),'trends':len(base['trends']),'sources':len(base['sources']),'signals':len(base['signals']),'additions':len(new_companies),'updates':len(updated_companies),'reviewedSources':len(reviewed_sources),'inheritedChecked':meta['checked'],'lastRefresh':meta['lastRefresh'],'spotlights':list(spotlights),'validation':'All IDs, relationship references, URL structure, date values and film text lengths passed.'}
(REPO/'research'/'merge-result-20261124.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
