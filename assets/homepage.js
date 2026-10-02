"use strict";
const articles = [
{"title": "애견미용국비지원, 국민내일배움카드로 배울 수 있을까?", "description": "지원 대상과 한도, 실제 과정의 자부담 예시, 고용24에서 국비과정 찾는 순서를 확인하세요.", "category": "진로", "label": "진로·자격증", "path": "/career/dog-grooming-government-support/", "tags": "애견미용국비지원 국민내일배움카드 애견미용국비 고용24 훈련장려금 자부담 애견미용학원비 애완동물미용 한국유기견구호연맹 교육지원", "recent": true},
{"title": "강아지첫미용, 언제 시작하고 무엇을 준비할까?", "description": "첫 예약 시점과 준비, 짧은 적응 연습과 첫날 작업 범위를 확인하세요.", "category": "미용", "label": "애견미용정보", "path": "/homecare/puppy-first-grooming/", "tags": "강아지첫미용 새끼강아지미용 첫미용시기 미용적응 첫미용준비", "recent": false},
{"title": "시츄미용, 집에서 유지할 수 있는 털 길이는?", "description": "집에서 유지할 털 길이와 얼굴·눈 주변 관리, 엉킴 확인 기준을 살펴보세요.", "category": "견종", "label": "견종별 가이드", "path": "/breeds/shih-tzu-grooming/", "tags": "시츄미용 시츄털관리 시츄얼굴미용 시츄빗질 시츄미용주기", "recent": false},
{"title": "강아지이중모 관리, 속털을 얼마나 정리해야 할까?", "description": "빠진 속털 정리와 짧은 미용의 차이, 브러싱·목욕·건조 확인 기준을 살펴보세요.", "category": "미용", "label": "애견미용정보", "path": "/homecare/double-coated-dog-care/", "tags": "강아지이중모 속털 겉털 이중모관리 이중모빗질 이중모미용 털갈이 브러싱 목욕 건조", "recent": false},
{"title": "부산애견미용학원, 퇴근 후 배워 취업까지 준비하려면?", "description": "서면역 1번·연산역 17번 출구 1분, 월~목 21:30까지 운영하는 이바우펫 서면점·연산점의 직장인 수강 기준을 정리했습니다.", "category": "지역", "label": "지역별 학원 가이드", "path": "/academy-guide/부산-애견미용학원/", "tags": "부산애견미용학원 서면 연산 서면역 연산역 직장인 야간반 토요일 주말반 실견수업 취업 비용 교육지원", "recent": false},
{"title": "강아지털엉킴, 집에서 어디까지 관리해도 될까?", "description": "엉킨 털의 상태를 확인하고 집에서 관리할 범위와 전문가에게 맡길 기준을 살펴보세요.", "category": "미용", "label": "애견미용정보", "path": "/homecare/dog-matted-coat/", "tags": "강아지털엉킴 털뭉침 엉킨털 빗질 목욕전빗질", "recent":false},
{"title": "강아지미용스트레스, 싫어하는 신호부터 살펴보세요", "description": "불편한 신호부터 짧은 적응 연습과 미용 전 준비까지 살펴보세요.", "category": "미용", "label": "애견미용정보", "path": "/homecare/dog-grooming-stress/", "tags": "강아지미용스트레스 미용 적응 거부 빗질 보상 스트레스 미용전준비", "recent":false},
 {"title": "광주애견미용학원, 상무지구에서 실견수업까지 배우려면?", "description": "상무역 4번 출구 30초 거리 이바우펫 광주점의 가정견 실견수업, 과정 구성, 자율출석 시간제를 정리했습니다.", "category": "지역", "label": "지역별 학원 가이드", "path": "/academy-guide/광주-애견미용학원/", "tags": "광주애견미용학원 광주광역시 상무역 상무지구 서구 실견수업 가정견 자율출석 자격증 취업 창업 비용 교육지원", "recent":false},
 {"title":"강아지귀청소, 집에서 어디까지 해야 할까?","description":"귀 상태 확인부터 귀세정제 사용과 면봉 주의, 적응 연습까지 살펴보세요.","category":"미용","label":"애견미용정보","path":"/homecare/dog-ear-cleaning/","tags":"강아지귀청소 귀세정제 귀냄새 귀청소주기 면봉 위생미용 홈케어","recent":false},
 {"title":"강아지드라이, 목욕 후 털은 어떻게 말려야 할까?","description":"수건으로 물기를 줄이는 방법부터 바람 조절과 털 안쪽 건조 확인까지 살펴보세요.","category":"목욕","label":"애견미용정보","path":"/homecare/dog-coat-drying/","tags":"강아지드라이 털말리기 목욕 건조 드라이기 드라이어 자연건조","recent":false},
 {"title": "강아지발톱깎기, 어디까지 잘라야 할까?", "description": "발톱 길이와 혈관 확인부터 검은 발톱, 도구 사용과 적응 연습까지 살펴보세요.", "category": "미용", "label": "애견미용정보", "path": "/homecare/dog-nail-trimming/", "tags": "강아지발톱깎기 강아지발톱관리 발톱깎는법 검은발톱 혈관 퀵 그라인더 위생미용", "recent": false},
 {"title":"강아지샴푸 종류와 선택법, 향보다 먼저 확인할 것은?","description":"피부와 털에 맞는 샴푸 선택 기준과 희석·헹굼·약용 제품 사용법을 살펴보세요.","category":"목욕","label":"목욕·관리","path":"/reviews/dog-shampoo/","tags":"강아지샴푸 애견샴푸 약용샴푸 목욕 희석 헹굼 저자극 보습"},
 {"title":"강아지브러시 종류와 선택법, 우리 강아지 털에는 어떤 빗이 맞을까?","description":"털 상태에 맞는 브러시 종류와 선택 기준, 안전한 빗질 방법을 정리했습니다.","category":"미용","label":"미용·관리","path":"/reviews/dog-grooming-brushes/","tags":"강아지브러시 강아지 빗 슬리커 핀브러시 브리슬 고무브러시 콤 브러싱 털 엉킴"},
 {title:"애견미용클리퍼 종류와 선택법, 초보자는 무엇을 확인할까?",description:"클리퍼 종류와 날 관리, 발열·안전관리까지 초보자 선택 기준을 정리했습니다.",category:"미용",label:"미용·관리",path:"/reviews/dog-grooming-clippers/",tags:"애견미용클리퍼 클리퍼 트리머 바리깡 날 교체 날관리 위생미용"},
 {title:"애견미용가위 종류와 선택법, 초보자는 무엇부터 준비할까?",description:"일자가위·커브가위·숱가위 등 종류와 초보자 선택 기준을 정리했습니다.",category:"미용",label:"미용·관리",path:"/reviews/dog-grooming-scissors/",tags:"애견미용가위 가위 일자가위 커브가위 숱가위 블렌딩가위 청커가위 미용도구"},
 {title:"반려동물시장규모, 국내 펫산업은 얼마나 커졌을까?",description:"반려동물 양육가구와 시장 규모, 미용업 변화를 공식자료로 살펴보세요.",category:"업계",label:"업계",path:"/industry/pet-market-size/",tags:"반려동물시장규모 펫산업 시장규모 반려동물 산업 미용업"},
 {title:"강아지발바닥털미용, 어디까지 잘라도 될까?",description:"발바닥 털 관리의 범위와 집에서 미용하기 전 알아둘 점.",category:"미용",label:"애견미용정보",path:"/homecare/dog-paw-hair-trimming/",tags:"강아지 발바닥털 발바닥 털 위생 부분미용 홈케어"},
 {title:"강아지셀프미용, 집에서 어디까지 해도 될까?",description:"집에서 할 수 있는 관리와 전문가의 도움이 필요한 미용.",category:"미용",label:"애견미용정보",path:"/homecare/dog-self-grooming/",tags:"강아지 셀프미용 홈미용 홈케어"},
 {title:"강아지 목욕 주기, 얼마나 자주 씻겨야 할까요?",description:"생활환경과 피부·털 상태에 맞춰 목욕 주기를 살펴보세요.",category:"목욕",label:"목욕·홈케어",path:"/homecare/dog-bathing-frequency/",tags:"강아지목욕 목욕주기 목욕 주기 샴푸 홈케어 피부"},
 {title:"강아지 미용 종류, 어떤 차이가 있을까요?",description:"전체미용, 위생미용, 부분미용의 차이를 알아보세요.",category:"미용",label:"애견미용정보",path:"/homecare/dog-grooming-types/",tags:"미용종류 미용 종류 전체미용 위생미용 부분미용"},
 {title:"강아지 미용 주기, 몇 주마다 해야 할까요?",description:"견종과 털 특징에 따라 달라지는 미용 주기의 기준.",category:"미용",label:"애견미용정보",path:"/homecare/dog-grooming-frequency/",tags:"미용주기 미용 주기 얼마나 자주"},
 {title:"애견미용 자격증 종류와 급수, 무엇부터 확인할까요?",description:"발급기관과 급수, 준비 과정을 비교하는 첫 번째 안내.",category:"자격증",label:"진로·자격증",path:"/career/dog-grooming-certificate/",tags:"자격증 종류 급수 민간자격 국가자격증 발급기관"},
 {title:"애견미용자격증3급, 처음 준비한다면?",description:"3급 준비를 시작하기 전 확인할 과정과 기본 사항.",category:"자격증",label:"진로·자격증",path:"/career/dog-grooming-certificate-level-3/",tags:"3급 삼급 자격증 입문 필기 실기"},
 {title:"애견미용자격증2급, 3급과 무엇이 다를까요?",description:"급수별 기준을 확인하고 다음 준비 과정을 살펴보세요.",category:"자격증",label:"진로·자격증",path:"/career/dog-grooming-certificate-level-2/",tags:"2급 이급 3급 자격증 비교 필기 실기"},
 {title:"애견미용학원 선택할 때 비교해야 할 7가지",description:"교육과정과 실습 방식, 피드백을 확인하는 선택 기준.",category:"진로",label:"취업·창업",path:"/career/how-to-choose-dog-grooming-academy/",tags:"학원 선택 추천 비용 교육기관 실견수업"},
 {title:"푸들미용 종류와 스타일, 얼마나 자주 해야 할까요?",description:"푸들의 미용 스타일과 털 관리 포인트를 알아보세요.",category:"견종",label:"견종별 가이드",path:"/breeds/poodle-grooming/",tags:"푸들 푸들미용 곱슬털 스타일"},
 {title:"비숑미용 스타일 종류와 관리할 때 알아둘 점",description:"풍성한 털과 둥근 얼굴을 관리하는 기본 가이드.",category:"견종",label:"견종별 가이드",path:"/breeds/bichon-grooming/",tags:"비숑 비숑미용 엉킴 브러싱"},
 {title:"말티즈미용 스타일과 관리 알아보기",description:"말티즈의 털과 얼굴 관리, 미용 스타일을 살펴보세요.",category:"견종",label:"견종별 가이드",path:"/breeds/maltese-grooming/",tags:"말티즈 말티즈미용 얼굴"},
 {title:"포메라니안미용 스타일과 관리 알아보기",description:"이중모의 특징에 맞는 미용과 관리 방법을 확인하세요.",category:"견종",label:"견종별 가이드",path:"/breeds/pomeranian-grooming/",tags:"포메 포메라니안 포메라니안미용 이중모"},
 {title:"애견미용사 되는법, 무엇부터 해야 할까요?",description:"직업을 이해하고 교육과 실습의 첫걸음을 살펴보세요.",category:"진로",label:"취업·창업",path:"/career/how-to-become-dog-groomer/",tags:"애견미용사 되는법 직업 대학 교육 취업 준비"},
 {title:"애견미용사취업, 자격증 다음에 필요한 것은?",description:"자격증 이후 실무 경험과 취업 준비 사항을 확인하세요.",category:"진로",label:"취업·창업",path:"/career/dog-groomer-employment/",tags:"취업 취직 면접 실무"},
 {title:"애견미용사 전망, 앞으로도 수요가 있을까?",description:"애견미용사의 진로를 고민할 때 살펴볼 업계 흐름.",category:"진로",label:"취업·창업",path:"/career/dog-groomer-outlook/",tags:"전망 수요 진로 취업"},
 {title:"애견미용실창업, 비용과 준비 과정 알아보기",description:"미용실 창업을 위한 준비 과정과 확인 사항.",category:"진로",label:"취업·창업",path:"/career/dog-grooming-shop-startup/",tags:"창업 비용 준비 미용실"},
 {title:"동물미용업, 창업 전 알아야 할 등록 기준",description:"애견미용실 운영을 준비할 때 확인할 등록 관련 정보.",category:"업계",label:"업계",path:"/industry/animal-grooming-business/",tags:"동물미용업 등록 시설 기준 창업"}
];
const breeds = {
 poodle:{name:"푸들",tag:"곱슬털 관리",title:"푸들, 스타일만큼 중요한 털 관리",description:"미용 종류와 스타일을 살펴보고, 털 엉킴을 줄이는 관리 방법과 미용 주기를 함께 알아보세요.",path:"/breeds/poodle-grooming/"},
 bichon:{name:"비숑",tag:"풍성한 털 관리",title:"비숑, 둥근 얼굴과 풍성한 털",description:"비숑의 미용 스타일을 비교하고, 풍성한 털을 유지하기 위한 브러싱과 엉킴 관리 방법을 살펴보세요.",path:"/breeds/bichon-grooming/"},
 maltese:{name:"말티즈",tag:"얼굴·털 관리",title:"말티즈, 생활에 맞는 미용 스타일",description:"말티즈의 미용 스타일과 얼굴 주변 관리 등 보호자가 알아두면 좋은 털 관리 포인트를 확인해보세요.",path:"/breeds/maltese-grooming/"},
 pomeranian:{name:"포메라니안",tag:"이중모 관리",title:"포메라니안, 털의 구조부터 알아보기",description:"이중모의 특징을 이해하고, 털 상태에 맞는 미용 스타일과 집에서의 관리 방법을 함께 살펴보세요.",path:"/breeds/pomeranian-grooming/"}
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
 document.querySelectorAll('[data-breed]').forEach(t=>{const active=t.dataset.breed===key;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;if(active&&focus)t.focus();});
}
document.querySelectorAll('[data-breed]').forEach(t=>{t.addEventListener('click',()=>selectBreed(t.dataset.breed));t.addEventListener('keydown',e=>{const keys=Object.keys(breeds),i=keys.indexOf(t.dataset.breed);let next;if(e.key==='ArrowRight')next=keys[(i+1)%keys.length];if(e.key==='ArrowLeft')next=keys[(i+keys.length-1)%keys.length];if(e.key==='Home')next=keys[0];if(e.key==='End')next=keys[keys.length-1];if(next){e.preventDefault();selectBreed(next,true);}});});
const toggle=$(".menu-toggle"),mobileNav=$("#mobile-nav");
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');mobileNav.hidden=true;}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'메뉴 열기':'메뉴 닫기');mobileNav.hidden=open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();toggle.focus();}});
window.addEventListener('resize',()=>{if(innerWidth>800)closeMenu();});
$("#back-top").addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
window.addEventListener('scroll',()=>{$("#back-top").hidden=window.scrollY<700;},{passive:true});
render();
