!function(e){var o={};function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="/",n(n.s=70)}({"/53P":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n("0V6O"),i=n("K2fq"),a=(n.n(i),n("EVDa"));$(function(){var e=new ScrollMagic.Controller;Object(a.a)();var o=new FastAverageColor;$.extend($.lazyLoadXT,{edgeY:500,checkDuplicates:!1}),$(".js-set-color").on("lazyload",function(){var e,n=this,t=new Image;t.src=this.style.backgroundImage.replace('url("',"").replace('")',""),t.onload=function(){e=o.getColor(t),$(n).parent().css("background-color",e.hex)}}),$(window).on("load",function(){$("body").addClass("loaded")}),$(".scrollmagic").each(function(){if(new ScrollMagic.Scene({triggerElement:this,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")}),$(this).find(".df-description").length>0){var o=this.querySelector(".df-description");new ScrollMagic.Scene({triggerElement:o,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")})}}),$(".df-slideUp").each(function(){new ScrollMagic.Scene({triggerElement:this,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")})}),new ScrollMagic.Scene({triggerElement:".history",triggerHook:.5}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")}),Object(t.a)(),$(window).on("resize",t.a);var n=[],i=0;function r(){n=[],$(".description__item").each(function(){n.push({name:$(this).data("slide"),height:$(this).outerHeight()})}),l(i)}function l(e){$(".process").addClass(n[e].name),$(".description__list").height(n[e].height),i=e}r(),$(window).on("resize",r),$(".factory__workshop").on("click",function(){var e=$(this).data("number");$(".process").removeClass("first second third fourth"),l(+e)}),$(".js-prev-slide").on("click",function(e){e.preventDefault(),$(".process").removeClass("first second third fourth"),l(i>0?i-1:n.length-1)}),$(".js-next-slide").on("click",function(e){e.preventDefault(),$(".process").removeClass("first second third fourth"),i<n.length-1?l(i+1):l(0)}),$(".factory__workshop--1").trigger("click"),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[60.060051,30.126692],controls:[],zoom:9},{suppressMapOpenBlock:!0}),o=null;e.behaviors.disable("scrollZoom"),$(window).width()<768&&e.behaviors.disable("drag");var n=ymaps.templateLayoutFactory.createClass("<div class='c-find-dealer__cont'><div id='zoom-in' class='c-find-dealer__zoomIn'></div><div id='zoom-out' class='c-find-dealer__zoomOut'></div></div>",{build:function(){n.superclass.build.call(this),this.zoomInCallback=ymaps.util.bind(this.zoomIn,this),this.zoomOutCallback=ymaps.util.bind(this.zoomOut,this),$("#zoom-in").bind("click",this.zoomInCallback),$("#zoom-out").bind("click",this.zoomOutCallback)},clear:function(){$("#zoom-in").unbind("click",this.zoomInCallback),$("#zoom-out").unbind("click",this.zoomOutCallback),n.superclass.clear.call(this)},zoomIn:function(){var e=this.getData().control.getMap();e.setZoom(e.getZoom()+1,{checkZoomRange:!0})},zoomOut:function(){var e=this.getData().control.getMap();e.setZoom(e.getZoom()-1,{checkZoomRange:!0})}}),t=ymaps.templateLayoutFactory.createClass("<div class='c-find-dealer__cont'><div id='location' class='c-find-dealer__location'></div></div>",{build:function(){t.superclass.build.call(this),this.locationCallback=ymaps.util.bind(this.location,this),$("#location").bind("click",this.locationCallback)},clear:function(){$("#location").unbind("click",this.locationCallback),t.superclass.clear.call(this)},location:function(){o&&e.panTo([o.lat,o.lng])}}),i=new ymaps.control.ZoomControl({options:{layout:n}}),a=new ymaps.control.ZoomControl({options:{layout:t}});e.controls.add(i,{float:"none",position:{right:"0px",top:"0px"}}),e.controls.add(a,{float:"none",position:{right:"0px",bottom:"0px"}});var r=new ymaps.Placemark([60.060051,30.126692],{},{iconLayout:"default#image",iconImageHref:"/images/map/Point.png"});e.geoObjects.add(r),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var n={};n.lat=e.coords.latitude,n.lng=e.coords.longitude,o=n},function(e){$("#location").hide()})})})},"0V6O":function(e,o,n){"use strict";var t=null,i=0;o.a=function(){var e=$(window).outerWidth();if(i===e)return null;i=e,t&&t.destroy(),setTimeout(function(){t=$(window).outerWidth()<768?new Rellax(".parallax",{speed:-.5,center:!0}):new Rellax(".parallax",{speed:-1.5,center:!0})})}},70:function(e,o,n){e.exports=n("/53P")},EVDa:function(e,o,n){"use strict";o.a=function(){var e=0;function o(){var o=$(window).outerWidth();if(e===o)return null;if(e=o,o>1599){if($(".large-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="large-video" loop muted autoplay playsinline data-object-fit="cover"><source src="/images/brand/common/video/Gradient2.mp4"></video>')}else if(o>1023){if($(".medium-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="medium-video" loop muted autoplay playsinline data-object-fit="cover"><source src="/images/brand/common/video/Gradient2.mp4"></video>')}else if(o>767){if($(".small-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="small-video" loop muted autoplay playsinline><source src="/images/brand/common/video/Gradient_Tablet_1.mp4"></video>')}else{if($(".mobile-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video id="myVideo" class="mobile-video" loop muted autoplay playsinline><source src="/images/brand/common/video/Gradient_Tablet_1.mp4"></video>')}objectFitPolyfill()}o(),$(window).on("resize",o)}},K2fq:function(e,o){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if(function(e,o,t){function i(e,o){return(void 0===e?"undefined":n(e))===o}function a(){return"function"!=typeof o.createElement?o.createElement(arguments[0]):f?o.createElementNS.call(o,"http://www.w3.org/2000/svg",arguments[0]):o.createElement.apply(o,arguments)}function r(){var e=o.body;return e||((e=a(f?"svg":"body")).fake=!0),e}var l=[],s=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,o){var n=this;setTimeout(function(){o(n[e])},0)},addTest:function(e,o,n){s.push({name:e,fn:o,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},d=function(){};d.prototype=c,d=new d;var u=o.documentElement,f="svg"===u.nodeName.toLowerCase(),p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=p;var m=c.testStyles=function(e,n,t,i){var l,s,c,d,f="modernizr",p=a("div"),m=r();if(parseInt(t,10))for(;t--;)(c=a("div")).id=i?i[t]:f+(t+1),p.appendChild(c);return(l=a("style")).type="text/css",l.id="s"+f,(m.fake?m:p).appendChild(l),m.appendChild(p),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(o.createTextNode(e)),p.id=f,m.fake&&(m.style.background="",m.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),s=n(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=d,u.offsetHeight):p.parentNode.removeChild(p),!!s};d.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&o instanceof DocumentTouch)n=!0;else{var t=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){n=9===e.offsetTop})}return n}),function(){var e,o,n,t,a,r;for(var c in s)if(s.hasOwnProperty(c)){if(e=[],(o=s[c]).name&&(e.push(o.name.toLowerCase()),o.options&&o.options.aliases&&o.options.aliases.length))for(n=0;n<o.options.aliases.length;n++)e.push(o.options.aliases[n].toLowerCase());for(t=i(o.fn,"function")?o.fn():o.fn,a=0;a<e.length;a++)1===(r=e[a].split(".")).length?d[r[0]]=t:(!d[r[0]]||d[r[0]]instanceof Boolean||(d[r[0]]=new Boolean(d[r[0]])),d[r[0]][r[1]]=t),l.push((t?"":"no-")+r.join("-"))}}(),function(e){var o=u.className,n=d._config.classPrefix||"";if(f&&(o=o.baseVal),d._config.enableJSClass){var t=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");o=o.replace(t,"$1"+n+"js$2")}d._config.enableClasses&&(o+=" "+n+e.join(" "+n),f?u.className.baseVal=o:u.className=o)}(l),delete c.addTest,delete c.addAsyncTest;for(var h=0;h<d._q.length;h++)d._q[h]();e.Modernizr=d}(window,document),!Modernizr.touchevents){var t=!1;$(".content").on("wheel",function(e){if(e.preventDefault(),t)return null;t=!0;var o,n=$(window);o=e.originalEvent.deltaY>0?300:-300,setTimeout(function(){t=!1},300),function(e){var n=e.scrollTop();TweenMax.to(e,.8,{scrollTo:{y:n+o,autoKill:!0},ease:CustomEase.create("custom","M0,0 C0.266,0.412 0.263,0.462 0.386,0.59 0.482,0.69 0.626,0.816 1,1"),autoKill:!0,overwrite:5})}(n)})}}});