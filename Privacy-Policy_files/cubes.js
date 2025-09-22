// cubes.js v2.0 (desktop: no loop, mobile: vertical)
(function(){
  function isMobile(){ return window.matchMedia('(max-width: 800px)').matches; }
  function setViewportVars(){
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    var header = document.querySelector('.site-header');
    document.documentElement.style.setProperty('--header-h', (header ? header.offsetHeight : 0) + 'px');
  }
  setViewportVars();
  window.addEventListener('resize', setViewportVars);
  window.addEventListener('orientationchange', function(){ setTimeout(setViewportVars, 50); });

  function equalize(){
    var wrap = document.querySelector('.cubes-wrap');
    if (!wrap) return;
    var scroller = wrap.querySelector('.cubes');
    var items = document.querySelectorAll('.cube-item .window');
    for (var i=0;i<items.length;i++){ items[i].style.height = 'auto'; }
    if (!scroller || isMobile() || !twoUp(scroller) || items.length < 2) return;
    var maxH = 0;
    for (var j=0;j<items.length;j++){ var h = items[j].offsetHeight; if (h>maxH) maxH=h; }
    if (maxH>0){ for (var k=0;k<items.length;k++){ items[k].style.height = maxH+'px'; } }
  })();