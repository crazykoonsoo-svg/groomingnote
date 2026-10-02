/* 그루밍노트 공통 헤더: 모바일 메뉴 (홈은 homepage.js가 처리) */
(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('mobile-nav');
  if(!t||!n)return;
  function close(){t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','메뉴 열기');n.hidden=true;}
  t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));t.setAttribute('aria-label',o?'메뉴 열기':'메뉴 닫기');n.hidden=o;});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!n.hidden){close();t.focus();}});
  window.addEventListener('resize',function(){if(innerWidth>1100)close();});
})();
