(function(){define(["jquery","dojo/dom","dojo/dom-style","knockout","gcviz-gismap"],function(e,f,c,b,d){var a;a=function(g){var i=[];var h=function(m){var j=this,l=m.mapframe,k;j.init=function(){var p=l.map.length,s=m.mapframe.id;while(p--){var v=l.map[p],t=v.layers.length,n=v.layers,r=e("#"+s+"_"+p),q,u;k=d.createMap(s+"_"+p,v);n=n.reverse();while(t--){var o=n[t];d.addLayer(k,o.type,o.url)}r.on("mouseenter mouseleave focusin focusout",function(x){var w=x.type;if(w==="mouseenter"||w==="focusin"){this.focus()}else{if(w==="mouseleave"||w==="focusout"){this.blur()}}});k.on("load",function(w){w.map.resize();k.enableScrollWheelZoom();k.enableKeyboardNavigation();k.isZoomSlider=false});q=e("#"+s+"_"+p+"_root");u=e("#"+s+"_"+p+"_container");r.addClass("gcviz-map");q.addClass("gcviz-root");u.addClass("gcviz-container");u.css("cursor","");j.focus();i.push(k)}return{controlsDescendantBindings:true}};j.focus=function(){j.mapfocus=b.observable();j.mapfocus.focused=b.observable();j.mapfocus.focused.subscribe(function(n){if(!n){}})};j.init()};b.applyBindings(new h(g),g[0]);return i};return{initialize:a}})}).call(this);