---
layout: null
---
"use strict";
const articles = {{ site.data.article_catalog | jsonify }};
const breeds = {
 maltipoo:{"name": "말티푸", "tag": "털 기르기·부분 정돈", "title": "말티푸, 기를 털과 정돈할 부위 나누기", "description": "원하는 스타일을 위해 남길 길이와 생활에 필요한 부분 정돈을 나누고, 기르는 동안의 관리 방법을 확인하세요.", "path": "/breeds/maltipoo-grooming/"},
 toypoodle:{"name": "토이푸들", "tag": "발·얼굴 접촉·미용 준비", "title": "토이푸들, 편안한 접촉부터 미용 준비", "description": "발과 얼굴을 만질 때의 반응과 도구 소리에 익숙한 정도를 살펴 필요한 작업 범위를 상담해보세요.", "path": "/breeds/toy-poodle-grooming/"},
 poochon:{"name": "푸숑", "tag": "모질·얼굴·생활 스타일", "title": "푸숑, 털 상태에 맞는 둥근 얼굴과 길이", "description": "사진에서 원하는 특징과 실제 모량, 집에서 관리하기 어려운 부위를 함께 살펴 미용 범위를 정해보세요.", "path": "/breeds/poochon-grooming/"},
 coton:{"name": "꼬똥드툴레아", "tag": "긴 털·안쪽 엉킴 관리", "title": "꼬똥드툴레아, 유지할 수 있는 긴 털", "description": "털 안쪽의 엉킴과 집에서 가능한 빗질 범위를 살펴보고, 생활에 맞는 길이와 관리 방법을 정해보세요.", "path": "/breeds/coton-de-tulear-grooming/"},
 labrador:{"name": "래브라도리트리버", "tag": "짧은 이중모·목욕 관리", "title": "래브라도, 짧은 이중모의 빗질과 건조", "description": "털이 짧아도 빠진 털 정리와 건조 확인은 필요합니다. 래브라도의 털 구조에 맞춰 집에서 할 관리와 맡길 작업을 나눠보세요.", "path": "/breeds/labrador-retriever-grooming/"},
 papillon:{"name": "파피용", "tag": "귀 장식털·부분 정돈", "title": "파피용, 귀 장식털과 생활 관리", "description": "귀 장식털은 남기고 오염되는 부위만 정리할 수 있을까요? 파피용의 털 특징과 부위별 미용 상담 기준을 살펴보세요.", "path": "/breeds/papillon-grooming/"},
 beagle:{"name": "비글", "tag": "짧은 털·일상 관리", "title": "비글, 짧은 털의 빗질과 목욕", "description": "털이 짧은 비글도 빠진 털과 오염을 관리해야 합니다. 빗질·목욕·귀 확인을 생활에 맞게 나누고 필요한 미용 서비스를 상담해보세요.", "path": "/breeds/beagle-grooming/"},
 corgi:{"name": "웰시코기", "tag": "이중모·부분 정돈", "title": "웰시코기, 자연스러운 털과 엉덩이 정돈", "description": "동그란 엉덩이 미용이 모든 코기에게 필요할까요? 오염되는 부위와 털 구조를 살펴 우리 강아지에게 필요한 정돈 범위를 정해보세요.", "path": "/breeds/welsh-corgi-grooming/"},
 bordercollie:{"name": "보더콜리", "tag": "이중모·산책 후 관리", "title": "보더콜리, 산책 후 관리와 부분 정돈", "description": "털 유형에 맞춰 오염 확인과 속털 빗질, 목욕·건조와 부분 정돈을 계획하세요.", "path": "/breeds/border-collie-grooming/"},
 yorkshire:{"name": "요크셔테리어", "tag": "긴 털·생활 스타일", "title": "요크셔테리어, 유지할 수 있는 털 길이", "description": "긴 털을 유지할 범위와 집에서 가능한 빗질을 살펴보고, 생활에 맞는 미용 스타일을 상담하세요.", "path": "/breeds/yorkshire-terrier-grooming/"},
 poodle:{name:"푸들",tag:"곱슬털 관리",title:"푸들, 스타일만큼 중요한 털 관리",description:"미용 종류와 스타일을 살펴보고, 털 엉킴을 줄이는 관리 방법과 미용 주기를 함께 알아보세요.",path:"/breeds/poodle-grooming/"},
 bichon:{name:"비숑",tag:"풍성한 털 관리",title:"비숑, 둥근 얼굴과 풍성한 털",description:"비숑의 미용 스타일을 비교하고, 풍성한 털을 유지하기 위한 브러싱과 엉킴 관리 방법을 살펴보세요.",path:"/breeds/bichon-grooming/"},
 maltese:{name:"말티즈",tag:"얼굴·털 관리",title:"말티즈, 생활에 맞는 미용 스타일",description:"말티즈의 미용 스타일과 얼굴 주변 관리 등 보호자가 알아두면 좋은 털 관리 포인트를 확인해보세요.",path:"/breeds/maltese-grooming/"},
 pomeranian:{name:"포메라니안",tag:"이중모 관리",title:"포메라니안, 털의 구조부터 알아보기",description:"이중모의 특징을 이해하고, 털 상태에 맞는 미용 스타일과 집에서의 관리 방법을 함께 살펴보세요.",path:"/breeds/pomeranian-grooming/"},
 shihtzu:{name:"시츄",tag:"긴 털·얼굴 관리",title:"시츄, 털 길이와 얼굴 관리부터",description:"몸통과 얼굴의 털 길이를 나눠 정하고, 눈 주변 정돈과 엉킴 확인 기준을 함께 살펴보세요.",path:"/breeds/shih-tzu-grooming/"},
 schnauzer:{"name": "슈나우저", "tag": "겉털·수염 관리", "title": "슈나우저, 미용 방식과 수염 관리", "description": "클리핑과 핸드스트리핑의 차이를 알아보고, 수염·다리 관리와 미용 상담 기준을 확인해보세요.", "path": "/breeds/schnauzer-grooming/"},
 golden:{"name": "골든리트리버", "tag": "긴 털·부분 정돈", "title": "골든리트리버, 긴 털과 부분 정돈", "description": "귀 뒤·다리·꼬리의 긴 털을 확인하고, 브러싱과 부분 정돈·목욕·건조 기준을 살펴보세요.", "path": "/breeds/golden-retriever-grooming/"},
 cocker:{"name": "코카스파니엘", "tag": "귀털·부위별 길이", "title": "코카스파니엘, 귀털과 몸통 길이", "description": "귀털의 오염과 귀 이상 증상을 구분하고, 부위별 길이와 빗질·목욕 전 확인 기준을 살펴보세요.", "path": "/breeds/cocker-spaniel-grooming/"},
 dachshund:{"name": "닥스훈트", "tag": "단모·장모·강모", "title": "닥스훈트, 털 유형에 맞는 관리", "description": "단모·장모·강모를 구분하고, 빗질과 부분 정돈·전문 미용의 상담 기준을 살펴보세요.", "path": "/breeds/dachshund-grooming/"}
};
const state={category:"전체",query:"",limit:9};
const $=s=>document.querySelector(s);
function normalized(s){return s.toLowerCase().replace(/\s+/g,"");}
function matches(a){const text=normalized(a.title+a.description+a.tags+a.category);return (state.category==="전체"||a.category===state.category)&&state.query.trim().split(/\s+/).every(q=>text.includes(normalized(q)));}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function render(){
 const results=articles.filter(matches);
 $("#article-grid").innerHTML=results.slice(0,state.limit).map(a=>`<a class="article-card" href="${a.path}" aria-label="${escapeHTML(a.title)} · 원문 읽기"><div class="card-meta"><span class="card-category">${a.label}</span>${a.recent?'<span class="new-label">최근 업데이트</span>':''}</div><h3>${a.title}</h3><p>${a.description}</p><div class="card-bottom"><span>GroomingNote</span><span class="read-label">원문 읽기</span></div></a>`).join("");
 $("#result-count").textContent=`${results.length}개의 가이드`;
 $("#empty").hidden=results.length>0; $("#show-more").hidden=results.length<=state.limit;
 $("#show-more").textContent=`글 더 보기 (${results.length-state.limit})`;
 $("#search-state").hidden=!state.query; $("#search-label").textContent=`‘${state.query}’ 검색 결과`;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===state.category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}
function moveToExplore(){ $("#explore").scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
function selectCategory(category){state.category=category;state.query="";state.limit=9;$("#search").value="";render();}
function search(query){state.query=query.trim().slice(0,100);state.category="전체";state.limit=9;$("#search").value=state.query;render();moveToExplore();}
$("#search-form").addEventListener('submit',e=>{e.preventDefault();search($("#search").value);});
document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>search(b.dataset.query)));
document.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>{selectCategory(b.dataset.topic);moveToExplore();}));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.category=b.dataset.filter;state.limit=9;render();}));
document.querySelectorAll('[data-nav-topic]').forEach(a=>a.addEventListener('click',()=>selectCategory(a.dataset.navTopic)));
$("#clear-search").addEventListener('click',()=>{state.query="";$("#search").value="";state.limit=9;render();});
$("#reset").addEventListener('click',()=>selectCategory('전체'));
$("#show-more").addEventListener('click',()=>{state.limit+=9;render();});
function selectBreed(key,focus=false){
 const b=breeds[key]; $("#breed-tag").textContent=b.tag;$("#breed-title").textContent=b.title;$("#breed-description").textContent=b.description;$("#breed-link").href=b.path;$("#breed-link").textContent=b.name+' 미용 가이드 읽기';$("#breed-panel").setAttribute('aria-labelledby','breed-tab-'+key);
 document.querySelectorAll('[data-breed]').forEach(t=>{const active=t.dataset.breed===key;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;if(active){if(focus)t.focus({preventScroll:true});const track=t.parentElement;const left=t.offsetLeft-track.offsetLeft;if(left<track.scrollLeft)track.scrollTo({left,behavior:'auto'});else if(left+t.offsetWidth>track.scrollLeft+track.clientWidth)track.scrollTo({left:left+t.offsetWidth-track.clientWidth,behavior:'auto'});}});
}
document.querySelectorAll('[data-breed]').forEach(t=>{t.addEventListener('click',()=>selectBreed(t.dataset.breed));t.addEventListener('keydown',e=>{const keys=Array.from(document.querySelectorAll('[data-breed]'),tab=>tab.dataset.breed),i=keys.indexOf(t.dataset.breed);let next;if(e.key==='ArrowRight')next=keys[(i+1)%keys.length];if(e.key==='ArrowLeft')next=keys[(i+keys.length-1)%keys.length];if(e.key==='Home')next=keys[0];if(e.key==='End')next=keys[keys.length-1];if(next){e.preventDefault();selectBreed(next,true);}});});
const toggle=$(".menu-toggle"),mobileNav=$("#mobile-nav");
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');mobileNav.hidden=true;}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'메뉴 열기':'메뉴 닫기');mobileNav.hidden=open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();toggle.focus();}});
window.addEventListener('resize',()=>{if(innerWidth>800)closeMenu();});
$("#back-top").addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
window.addEventListener('scroll',()=>{$("#back-top").hidden=window.scrollY<700;},{passive:true});
render();

const breedTrack=$("#breed-tab-track"),breedPrev=$("#breed-prev"),breedNext=$("#breed-next");
function updateBreedArrows(){breedPrev.disabled=breedTrack.scrollLeft<=1;breedNext.disabled=breedTrack.scrollLeft+breedTrack.clientWidth>=breedTrack.scrollWidth-1;}
function slideBreeds(direction){const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;breedTrack.scrollBy({left:direction*Math.max(120,breedTrack.clientWidth*.75),behavior:reduced?'auto':'smooth'});}
breedPrev.addEventListener('click',()=>slideBreeds(-1));
breedNext.addEventListener('click',()=>slideBreeds(1));
breedTrack.addEventListener('scroll',updateBreedArrows,{passive:true});
window.addEventListener('resize',updateBreedArrows);
updateBreedArrows();

