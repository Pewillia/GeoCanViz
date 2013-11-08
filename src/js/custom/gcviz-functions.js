/*
 *
 * GeoCanViz viewer / Visionneuse GéoCanViz
 * gcviz.github.io/gcviz/License-eng.txt / gcviz.github.io/gcviz/Licence-fra.txt
 *
 * Globals functions
 */
(function () {
	'use strict';
	define([], function() {
	
		var debounce,
			setStyle,
			getFullscreenParam,
			tabFocusRestrictor;

		debounce = function(func, threshold, execAsap) {

			var timeout;

			return function debounced () {
				var obj = this, 
					args = arguments;
						
				function delayed () {
					if (!execAsap) {
						func.apply(obj, args);
					}
					timeout = null; 
				}
				
				if (timeout) {
					clearTimeout(timeout);
				}
				else if (execAsap) {
					func.apply(obj, args);
				}

				timeout = setTimeout(delayed, threshold || 100); 
			};
		};
		
		setStyle = function (elem, propertyObject) {
			for (var property in propertyObject) {
				elem.style[property] = propertyObject[property];
			}
		};

		getFullscreenParam = function (width, height) {
			// get maximal height and width from browser window and original height and width for the map
			var minWW = window.innerWidth,
				minWH = window.innerHeight,
				w, h, ratio;
					
			// calculate the width, height and ratio with the window
			w = minWW - 50;
			ratio = (w/width);
			h = height * ratio;
				
			// if the minimum window width is smaller then map height, use height as starting point to calculate dimension
			if (minWH < h) {
				h = minWH - 50;
				ratio = (h/height);
				w = width * ratio;
			}
		
			return {'width': w, 'height': h, 'ratio': ratio};
		};
		
		tabFocusRestrictor = function (lastItem,firstItem){
		    $(lastItem).blur(function(){
		        $(firstItem).focus();
		    });
		};
		
		return {
			debounce: debounce,
			setStyle: setStyle,
			getFullscreenParam: getFullscreenParam,
			tabFocusRestrictor: tabFocusRestrictor
		};
	});
}());