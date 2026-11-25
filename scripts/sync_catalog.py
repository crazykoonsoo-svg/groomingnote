#!/usr/bin/env python3
"""Sync article titles/media with the catalog; --check reports drift without writing."""
from pathlib import Path
from datetime import datetime, timedelta, timezone
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,sys
ROOT=Path(__file__).resolve().parents[1]
CATALOG=ROOT/'_data/article_catalog.json'
TOPICS = ROOT / '_data/guide_topics.json'
EDITORIAL_PROGRESS = ROOT / 'scripts/editorial-progress'
SECTIONS={'homecare':('미용','애견미용정보'),'breeds':('견종','견종별 가이드'),'career':('진로','자격증·진로'),'academy-guide':('지역','지역별 학원 가이드'),'industry':('업계','업계'),'reviews':('미용','리뷰')}
KST = timezone(timedelta(hours=9))
class Info(HTMLParser):
 def __init__(self,text):
  super().__init__();self.meta={};self.title='';self.in_title=False;self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='title':self.in_title=True
  if tag=='meta':self.meta[a.get('property',a.get('name',''))]=a.get('content','')
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
 def handle_data(self,data):
  if self.in_title:self.title+=data

def region(path):
 if any(x in path for x in ['수원','평택','송파','부천','상동','주안']):return 'capital'
 if any(x in path for x in ['대전','천안','서산']):return 'chungcheong'
 if any(x in path for x in ['광주','광산']):return 'honam'
 return 'yeongnam'

def published_at(value):
 date = datetime.fromisoformat(value)
 if date.tzinfo is None:
  date = date.replace(tzinfo=KST)
 return date.astimezone(KST).isoformat(timespec='seconds')

def classify_topic(section, path, category, info, topics, overrides):
 explicit = info.meta.get('groomingnote:topic')
 if explicit:
  return explicit
 if path in overrides:
  return overrides[path]
 if section == 'career' and category == '자격증':
  return 'certification'
 if section == 'homecare':
  record_path = EDITORIAL_PROGRESS / (path.strip('/').split('/')[-1] + '.json')
  if record_path.is_file():
   series = json.loads(record_path.read_text()).get('series')
   if isinstance(series, str) and series in topics['series_topics']:
    return topics['series_topics'][series]
 return topics['section_defaults'][section]

def main():
 records=json.loads(CATALOG.read_text());known={};errors=[]
 topics = json.loads(TOPICS.read_text())
 overrides = {}
 for topic, paths in topics['overrides'].items():
  for path in paths:
   if path in overrides:errors.append('Duplicate topic override: '+path)
   overrides[path] = topic
 for r in records:
  if r['path'] in known:errors.append('Duplicate: '+r['path'])
  known[r['path']]=r
 updated=[]
 for section,(category,label) in SECTIONS.items():
  for page in (ROOT/section).glob('*/index.html'):
   info=Info(page.read_text())
   if 'article:published_time' not in info.meta:continue
   path='/'+page.parent.relative_to(ROOT).as_posix()+'/'
   r=dict(known.get(path,dict(path=path,description=info.meta.get('description',''),category=category,label=label,tags='',recent=True,card_label=label)))
   r['title']=info.title.removesuffix(' | 그루밍노트').strip();r['section']=section
   r['published_at']=published_at(info.meta['article:published_time'])
   r['topic'] = classify_topic(section, path, r['category'], info, topics, overrides)
   if r['topic'] not in topics['labels']:errors.append('Unknown topic for '+path+': '+r['topic'])
   r['image']=unquote(urlsplit(info.meta.get('groomingnote:card-image') or info.meta.get('og:image','')).path)
   if not (ROOT/r['image'].lstrip('/')).is_file():errors.append('Missing image: '+path)
   r.setdefault('alt',r['title']);r.setdefault('width','1200');r.setdefault('height','1200')
   if section=='academy-guide':r.setdefault('region',region(path))
   updated.append(r)
 lookup={r['path']:r for r in updated};ordered=[lookup.pop(r['path']) for r in records if r['path'] in lookup]
 ordered=list(lookup.values())+ordered
 if errors:print('\n'.join(errors));return 1
 if '--check' in sys.argv:
  if ordered!=records:print('Catalog drift: run python3 scripts/sync_catalog.py');return 1
  print('Catalog check passed:',len(records),'unique articles');return 0
 CATALOG.write_text(json.dumps(ordered,ensure_ascii=False,indent=2)+'\n');print('Synced',len(ordered),'articles');return 0
if __name__=='__main__':raise SystemExit(main())
