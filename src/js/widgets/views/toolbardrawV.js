/*
 *
 * GeoCanViz viewer / Visionneuse GéoCanViz
 * gcviz.github.io/gcviz/License-eng.txt / gcviz.github.io/gcviz/Licence-fra.txt
 *
 * Toolbar draw widget
 */
(function() {
	'use strict';
	define(['jquery-private',
			'gcviz-vm-tbdraw',
			'dijit/TitlePane',
			'gcviz-i18n'
	], function($viz, tbdrawVM, dojotitle, i18n) {
		var initialize;

		initialize = function($mapElem) {
			var $toolbar,
				config = $mapElem.toolbardraw,
				mapid = $mapElem.mapframe.id,
				tp,
				node = '';

			tp = new dojotitle({id: 'tbanno' + mapid, title: '' + i18n.getDict('%toolbardraw-name') + '', content: '<div class="gcviz-tbdraw-content gcviz-tbcontent"></div>', open: false});
			$mapElem.find('.gcviz-tbholder').append(tp.domNode);
			tp.startup();

			// change tabinndex
			tp.domNode.getElementsByClassName('dijitTitlePaneTitleFocus')[0].setAttribute('tabindex', '0');

			// find toolbar and start to add items
			$toolbar = $mapElem.find('.gcviz-tbdraw-content');

			// set color picker
			node += '<button class="gcviz-button" tabindex="0" data-bind="click: colorClick, tooltip: { content: tpColor }"><img class="gcviz-img-button" data-bind="attr: { src: imgColor }"></img></button>';

			// set draw button
			if (config.drawline.enable) {
				node += '<button class="gcviz-button" tabindex="0" data-bind="click: drawClick, tooltip: { content: tpDraw }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>';
			}

			// set text button
			if (config.drawtext.enable) {
				node += '<button class="gcviz-button" tabindex="0" data-bind="click: textClick, tooltip: { content: tpText }"><img class="gcviz-img-button" data-bind="attr: { src: imgText }"></img></button>';

				// create the annotation inputbox (dont use knockout data-bind because there one window for the whole page not by ViewModel)
				if ($viz('#gcviz-draw-inputbox').length === 0) {
					$viz('body').prepend('<div id="gcviz-draw-inputbox">' +
										'<form><fieldset>' +
										'<label for="value">' + i18n.getDict('%toolbardraw-inputbox-label') + '</label>' +
										' <input id="value" class="text ui-widget-content ui-corner-all"/>' +
										'<div>' + i18n.getDict('%toolbardraw-insinputbox') + '</div>' +
										'</fieldset></form></div>');
				}
			}

			// set measure button
			if (config.measureline.enable) {
				node += '<button class="gcviz-button" tabindex="0" data-bind="click: measureLengthClick"><img class="gcviz-img-button" data-bind="attr: { src: imgMeasure }"></img></button>';
			}
			if (config.measurearea.enable) {
				node += '<button class="gcviz-button" tabindex="0" data-bind="click: measureAreaClick"><img class="gcviz-img-button" data-bind="attr: { src: imgMeasure }"></img></button>';
			}

			// color selection panel
			node += '<div class="row" data-bind="visible: isColor">' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'black\'), tooltip: { content: tpBlack }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'red\'), tooltip: { content: tpRed }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'green\'), tooltip: { content: tpGreen }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'blue\'), tooltip: { content: tpBlue }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'yellow\'), tooltip: { content: tpYellow }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: selectColorClick(\'white\'), tooltip: { content: tpWhite }"><img class="gcviz-img-button" data-bind="attr: { src: imgDraw }"></img></button>' +
					'</div>';

			// set erase buttons and undo erase
			node += '<div class="row gcviz-inlineblock">' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: eraseClick, tooltip: { content: tpErase }"><img class="gcviz-img-button" data-bind="attr: { src: imgErase }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: eraseSelClick, tooltip: { content: tpEraseSel }"><img class="gcviz-img-button" data-bind="attr: { src: imgEraseSel }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: eraseUndoClick, tooltip: { content: tpEraseUndo }, enable: stackUndo() > 0"><img class="gcviz-img-button" data-bind="attr: { src: imgEraseUndo }"></img></button>' +
					'</div>';

			node += '<div class="gcviz-tbseparator"></div>';

			// set import and save buttons
			if (config.importexport.enable) {
			node += '<div class="gcviz-inlineblock">' +
						'<input id="fileDialogFF" type="file" accept="application/json" data-bind="event: { change: importClick }"></input>' +
						'<button class="gcviz-button" tabindex="0" data-bind="tooltip: { content: tpImport }">' +
							'<input type="file" accept="application/json" data-bind="event: { change: importClick }"></input>' +
							'<img class="gcviz-img-button" data-bind="attr: { src: imgImport }"></img></button>' +
						'<button class="gcviz-button" tabindex="0" data-bind="click: exportClick, tooltip: { content: tpExport }, enable: isGraphics"><img class="gcviz-img-button" data-bind="attr: { src: imgExport }"></img></button>'+
					'</div>';
			}

			$toolbar.append(node);
			return(tbdrawVM.initialize($toolbar, mapid));
		};

		return {
			initialize: initialize
		};
	});
}).call(this);
