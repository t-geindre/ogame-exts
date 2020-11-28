// ==UserScript==
// @name     AntiGameReborn Fixes [Fleet dispatch]
// @version  1
// @match    https://*.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch*
// ==/UserScript==

(function(window) {
	const resources = ['metal', 'crystal', 'deuterium'];
	document.getElementById('continueToFleet2').addEventListener('click', () => resources.map( res => {
  	let cargoRes = "cargo"+res.charAt(0).toUpperCase()+res.slice(1);
	  window.fleetDispatcher[cargoRes] = document.getElementById('ago_calc_resource_'+res).value;
	}));
})(unsafeWindow);

