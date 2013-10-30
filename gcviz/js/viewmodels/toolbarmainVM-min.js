(function(){define(["jquery","knockout","gcviz-i18n","gcviz-ko"],function(d,b,c,e){var a;a=function(h,g){var f=function(k,p){var q=this,r=locationPath+"gcviz/images/mainFullscreen.png",l=locationPath+"gcviz/images/mainShowInset.png",m=locationPath+"gcviz/images/mainSmallscreen.png",j=locationPath+"gcviz/images/mainTools.png",s=locationPath+"gcviz/images/mainHelp.png",n=d("#section"+p),i=d("#"+p),o=d("#"+p+"_0");q.counter=b.observable(0);q.imgFullscreen=b.observable(r);q.imgShowInset=l;q.imgTools=j;q.imgHelp=s;q.enableViewInset=b.observable(true);q.tpHelp=c.getDict("%toolbarmain-tphelp");q.tpTools=c.getDict("%toolbarmain-tptools");q.tpInset=c.getDict("%toolbarmain-tpinset");q.tpFullScreen=c.getDict("%toolbarmain-tpfullscreen");q.init=function(){q.heightSection=n.css("height");q.widthSection=n.css("width");q.heightMap=o.css("height");q.widthMap=o.css("width");q.insetState="";n[0].addEventListener("fullscreenchange",function(){if(!document.fullscreen){q.cancelFullScreen(document,p);q.imgFullscreen(r)}},false);n[0].addEventListener("mozfullscreenchange",function(){if(!document.mozFullScreen){q.cancelFullScreen(document,p);q.imgFullscreen(r)}},false);n[0].addEventListener("webkitfullscreenchange",function(){if(!document.webkitIsFullScreen){q.cancelFullScreen(document,p);q.imgFullscreen(r)}},false);return{controlsDescendantBindings:true}};q.fullscreenClick=function(){var t=(document.fullScreenElement&&document.fullScreenElement!==null)||(document.mozFullScreen||document.webkitIsFullScreen);if(t){q.cancelFullScreen(document,p);q.imgFullscreen(r)}else{q.requestFullScreen(n[0],p);q.imgFullscreen(m)}};q.insetClick=function(u){var t=i.find(".gcviz-inset"+p);if(u==="hidden"){t.addClass("hidden")}else{if(t.hasClass("hidden")){t.removeClass("hidden")}else{t.addClass("hidden")}}};q.toolsClick=function(){var t=i.find(".gcviz-tbholder");if(t.hasClass("hidden")){t.removeClass("hidden");n.find(".dijitTitlePaneTitleFocus")[0].focus()}else{t.addClass("hidden")}};q.helpClick=function(){q.counter(q.counter()+1);alert(c.getDict("%toolbarmain-help")+": "+q.counter())};q.cancelFullScreen=function(u,t){var v=u.cancelFullScreen||u.webkitCancelFullScreen||u.mozCancelFullScreen||u.exitFullscreen;if(v){v.call(u)}n.css({width:q.widthSection,height:q.heightSection});i.css({width:q.widthSection,height:q.heightSection});o.css({width:q.widthMap,height:q.heightMap});q.insetClick(q.insetState);q.enableViewInset(true)};q.requestFullScreen=function(u,t){var v=u.requestFullScreen||u.webkitRequestFullScreen||u.mozRequestFullScreen||u.msRequestFullScreen;if(v){v.call(u)}u.setAttribute("style","width: 100%; height: 100%;");u.getElementsByClassName("gcviz")[0].setAttribute("style","width: 100%; height: 93%;");u.getElementsByClassName("gcviz-map")[0].setAttribute("style","width: 100%; height: 100%;");if(i.find(".gcviz-inset"+t).hasClass("hidden")){q.insetState="hidden"}else{q.insetState=""}q.insetClick("hidden");q.enableViewInset(false)};q.init()};b.applyBindings(new f(h,g),h[0])};return{initialize:a}})}).call(this);