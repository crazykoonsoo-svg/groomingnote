/* 그루밍노트 공통 헤더: 모바일 메뉴 (홈은 homepage.js가 처리) */
(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('mobile-nav');
  document.querySelectorAll('header .desktop-nav, header #mobile-nav').forEach(function(nav){
    var homecare = nav.querySelector('a[href="/homecare/"]');
    if(!homecare || nav.querySelector('.care-nav-link')) return;
    [
      ['daily-life', '생활·행동'],
      ['health', '건강·진료']
    ].forEach(function(topic){
      var link = document.createElement('a');
      link.className = 'care-nav-link';
      link.href = '/homecare/#' + topic[0];
      link.textContent = topic[1];
      homecare.after(link);
      homecare = link;
    });
  });
  if(!t||!n)return;
  function close(){t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','메뉴 열기');n.hidden=true;}
  t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));t.setAttribute('aria-label',o?'메뉴 열기':'메뉴 닫기');n.hidden=o;});
  n.querySelectorAll('a').forEach(function(link){link.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!n.hidden){close();t.focus();}});
  window.addEventListener('resize',function(){if(innerWidth>1240)close();});
})();
