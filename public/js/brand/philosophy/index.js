!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=69)}({"0V6O":function(e,t,n){"use strict";var i=null,o=0;t.a=function(){var e=$(window).outerWidth();if(o===e)return null;o=e,i&&i.destroy(),setTimeout(function(){i=$(window).outerWidth()<768?new Rellax(".parallax",{speed:-.5,center:!0}):new Rellax(".parallax",{speed:-1.5,center:!0})})}},69:function(e,t,n){e.exports=n("KOWi")},EVDa:function(e,t,n){"use strict";t.a=function(){var e=0;function t(){var t=$(window).outerWidth();if(e===t)return null;if(e=t,t>1599){if($(".large-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="large-video" loop muted autoplay playsinline data-object-fit="cover"><source src="/images/brand/common/video/Gradient2.mp4"></video>')}else if(t>1023){if($(".medium-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="medium-video" loop muted autoplay playsinline data-object-fit="cover"><source src="/images/brand/common/video/Gradient2.mp4"></video>')}else if(t>767){if($(".small-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video class="small-video" loop muted autoplay playsinline><source src="/images/brand/common/video/Gradient_Tablet_1.mp4"></video>')}else{if($(".mobile-video").length>0)return null;$(".banner__inner").html(""),$(".banner__inner").append('<video id="myVideo" class="mobile-video" loop muted autoplay playsinline><source src="/images/brand/common/video/Gradient_Tablet_1.mp4"></video>')}objectFitPolyfill()}t(),$(window).on("resize",t)}},K2fq:function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if(function(e,t,i){function o(e,t){return(void 0===e?"undefined":n(e))===t}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||((e=r(f?"svg":"body")).fake=!0),e}var s=[],l=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},u=function(){};u.prototype=c,u=new u;var d=t.documentElement,f="svg"===d.nodeName.toLowerCase(),p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=p;var m=c.testStyles=function(e,n,i,o){var s,l,c,u,f="modernizr",p=r("div"),m=a();if(parseInt(i,10))for(;i--;)(c=r("div")).id=o?o[i]:f+(i+1),p.appendChild(c);return(s=r("style")).type="text/css",s.id="s"+f,(m.fake?m:p).appendChild(s),m.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),p.id=f,m.fake&&(m.style.background="",m.style.overflow="hidden",u=d.style.overflow,d.style.overflow="hidden",d.appendChild(m)),l=n(p,e),m.fake?(m.parentNode.removeChild(m),d.style.overflow=u,d.offsetHeight):p.parentNode.removeChild(p),!!l};u.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(i,function(e){n=9===e.offsetTop})}return n}),function(){var e,t,n,i,r,a;for(var c in l)if(l.hasOwnProperty(c)){if(e=[],(t=l[c]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)1===(a=e[r].split(".")).length?u[a[0]]=i:(!u[a[0]]||u[a[0]]instanceof Boolean||(u[a[0]]=new Boolean(u[a[0]])),u[a[0]][a[1]]=i),s.push((i?"":"no-")+a.join("-"))}}(),function(e){var t=d.className,n=u._config.classPrefix||"";if(f&&(t=t.baseVal),u._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}u._config.enableClasses&&(t+=" "+n+e.join(" "+n),f?d.className.baseVal=t:d.className=t)}(s),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<u._q.length;v++)u._q[v]();e.Modernizr=u}(window,document),!Modernizr.touchevents){var i=!1;$(".content").on("wheel",function(e){if(e.preventDefault(),i)return null;i=!0;var t,n=$(window);t=e.originalEvent.deltaY>0?300:-300,setTimeout(function(){i=!1},300),function(e){var n=e.scrollTop();TweenMax.to(e,.8,{scrollTo:{y:n+t,autoKill:!0},ease:CustomEase.create("custom","M0,0 C0.266,0.412 0.263,0.462 0.386,0.59 0.482,0.69 0.626,0.816 1,1"),autoKill:!0,overwrite:5})}(n)})}},KOWi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("0V6O"),o=n("K2fq"),r=(n.n(o),n("EVDa")),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();$(function(){var e=new ScrollMagic.Controller;Object(r.a)();var t,n=new FastAverageColor;function o(e,t,n,i){this.obj=e,this.maxRadius=t,this.delta=n,this.state="initial",this.vertical=i,this.init()}function a(){t=$(window).outerWidth()>1599?new o($(".circle--2"),250,30):$(window).outerWidth()>1262?new o($(".circle--2"),200,30):$(window).outerWidth()>767?new o($(".circle--2"),176,30):new o($(".circle--2"),150,0,!0)}$.extend($.lazyLoadXT,{edgeY:500,checkDuplicates:!1}),$(".js-set-color").on("lazyload",function(){var e,t=this,i=new Image;i.src=this.style.backgroundImage.replace('url("',"").replace('")',""),i.onload=function(){e=n.getColor(i),$(t).parent().css("background-color",e.hex)}}),$(window).on("load",function(){$("body").addClass("loaded")}),$(".scrollmagic").each(function(){if(new ScrollMagic.Scene({triggerElement:this,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")}),$(this).find(".df-description").length>0){var t=this.querySelector(".df-description");new ScrollMagic.Scene({triggerElement:t,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")})}}),$(".df-slideUp").each(function(){new ScrollMagic.Scene({triggerElement:this,triggerHook:1,offset:150}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")})}),new ScrollMagic.Scene({triggerElement:".vision",triggerHook:.5}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")}),new ScrollMagic.Scene({triggerElement:".manufacturing",triggerHook:.5}).addTo(e).on("enter",function(e){$(e.currentTarget.triggerElement()).addClass("active")}),$(".values__carousel").owlCarousel({center:!0,dots:!1,nav:!1,items:5,loop:!0,smartSpeed:1e3,pullDrag:!1,mouseDrag:!1,URLhashListener:!0,startPosition:"URLHash",responsive:{0:{items:1},768:{items:3},1263:{items:5}},onInitialized:function(){$(".values .owl-item.active.center").prev(".owl-item.active").addClass("center-prev"),$(".values .owl-item.active.center").next(".owl-item.active").addClass("center-next")}}).on("changed.owl.carousel",function(e){location.hash="slide"+e.property.value,setTimeout(function(){$(".values .owl-item").removeClass("center-prev"),$(".values .owl-item").removeClass("center-next"),$(".values .owl-item.active.center").prev(".owl-item.active").addClass("center-prev"),$(".values .owl-item.active.center").next(".owl-item.active").addClass("center-next")},30)}),$("body").on("click",".values__item",function(){$(window).outerWidth()>=768&&(window.location.hash=$(this).data("hash"))}),Object(i.a)(),$(window).on("resize",i.a),o.prototype.init=function(){this.destroy(),this.obj.on("click",this.handler.bind(this))},o.prototype.handler=function(){var e=this.obj.outerWidth()/2,t=this.maxRadius/e;$(".circle").removeClass("active"),this.vertical?"initial"===this.state?(this.obj.addClass("active").parent(".philosophy__wrapper").css("z-index",2),this.obj.find(".circle__body").css("transform","scale("+t+")"),this.state="zoom"):(this.obj.removeClass("active").parent(".philosophy__wrapper").css("z-index",0),this.obj.find(".circle__body").css("transform","scale(1)"),this.state="initial"):"initial"===this.state?(this.obj.addClass("active"),this.obj.find(".circle__body").css("transform","scale("+t+")"),$(".circle--1").css("transform","translateX("+-(e*t-e-this.delta)+"px)"),$(".circle--3").css("transform","translateX("+(e*t-e-this.delta)+"px)"),this.state="zoom"):(this.obj.removeClass("active"),this.obj.find(".circle__body").css("transform","scale(1)"),$(".circle--1").css("transform","translateX("+this.delta+"px)"),$(".circle--3").css("transform","translateX("+-this.delta+"px)"),this.state="initial")},o.prototype.destroy=function(){this.obj.off("click")},a(),$(window).on("resize",a),$(".circle--1, .circle--3").on("click",function(){$(".circle").removeClass("active"),"zoom"===t.state&&$(".circle--2").trigger("click"),$(this).addClass("active")}),$(".subcircle").on("click",function(){$(".circle").removeClass("active")}),$(".philosophy").on("click",function(e){0===$(e.target).closest(".circle").length&&($(".circle").removeClass("active"),"zoom"===t.state&&$(".circle--2").trigger("click"))})});var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=this;this.obg=document.querySelectorAll(t)[0],this.turbVal={val:1e-6},this.turb=document.querySelectorAll(n+" feTurbulence")[0],this.pause=!1,this.anim=new TimelineLite({paused:!0,onUpdate:function(){i.turb.setAttribute("baseFrequency","0 "+i.turbVal.val)},onComplete:function(){i.pause=!1}}),this.init()}return a(e,[{key:"init",value:function(){var e=this;this.anim.to(this.turbVal,1.5,{val:.02}).to(this.turbVal,1.5,{val:1e-6}),this.obg.addEventListener("mousemove",function(){e.pause||(e.anim.restart(),e.pause=!0)})}}]),e}();new s(".circle--1","#noise1"),new s(".subcircle--11","#noise11"),new s(".subcircle--12","#noise12"),new s(".subcircle--13","#noise13"),new s(".circle--2","#noise2"),new s(".circle--3","#noise3"),new s(".subcircle--21","#noise21"),new s(".subcircle--22","#noise22"),new s(".subcircle--23","#noise23")}});