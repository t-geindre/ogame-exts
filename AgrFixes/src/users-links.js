// ==UserScript==
// @name     AntiGameReborn Fixes [Users links]
// @version  1
// @match    https://*.ogame.gameforge.com/game/*
// ==/UserScript==


// https://s175-fr.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch&galaxy=2&system=188&position=5&type=2&routine=2

(function(document) {
  function fixLinks() {
    Array.from(document.querySelectorAll('[href*="page=fleet1"]')).map(el => {
      el.href = el.href
        .replace(/page=fleet1/, 'page=ingame&component=fleetdispatch')
        .replace(/type=1/, 'routine=2');
    });
  };
  document.getElementById('ago_panel').addEventListener('click', fixLinks);
  fixLinks();
})(window.document);