function loadJS(e){var t=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src=e,t.parentNode.insertBefore(a,t)}window.HTMLPictureElement||loadJS("https://afarkas.github.io/lazysizes/plugins/respimg/ls.respimg.min.js"),function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,t,a){"use strict";if(e.addEventListener){var i=a.cfg,n=/\s+/g,r=/\s*\|\s+|\s+\|\s*/g,s=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,l=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,o=/\(|\)|'/,d={contain:1,cover:1},u=function(e){var t=a.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},c=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!d[t]&&d[e.style.backgroundSize]&&(t=e.style.backgroundSize),t},f=function(e,t){if(t){var a=t.match(l);a&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",i.customMedia[t]||t)}},z=function(e,a,l){var o=t.createElement("picture"),d=a.getAttribute(i.sizesAttr),u=a.getAttribute("data-ratio"),c=a.getAttribute("data-optimumx");a._lazybgset&&a._lazybgset.parentNode==a&&a.removeChild(a._lazybgset),Object.defineProperty(l,"_lazybgset",{value:a,writable:!0}),Object.defineProperty(a,"_lazybgset",{value:o,writable:!0}),e=e.replace(n," ").split(r),o.style.display="none",l.className=i.lazyClass,1!=e.length||d||(d="auto"),e.forEach(function(e){var a,n=t.createElement("source");d&&"auto"!=d&&n.setAttribute("sizes",d),(a=e.match(s))?(n.setAttribute(i.srcsetAttr,a[1]),f(n,a[2]),f(n,a[3])):n.setAttribute(i.srcsetAttr,e),o.appendChild(n)}),d&&(l.setAttribute(i.sizesAttr,d),a.removeAttribute(i.sizesAttr),a.removeAttribute("sizes")),c&&l.setAttribute("data-optimumx",c),u&&l.setAttribute("data-ratio",u),o.appendChild(l),a.appendChild(o)},y=function(e){if(e.target._lazybgset){var t=e.target,i=t._lazybgset,n=t.currentSrc||t.src;if(n){var r=a.fire(i,"bgsetproxy",{src:n,useSrc:o.test(n)?JSON.stringify(n):n});r.defaultPrevented||(i.style.backgroundImage="url("+r.detail.useSrc+")")}t._lazybgsetLoading&&(a.fire(i,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var i,n,r;!e.defaultPrevented&&(i=e.target.getAttribute("data-bgset"))&&(r=e.target,n=t.createElement("img"),n.alt="",n._lazybgsetLoading=!0,e.detail.firesLoad=!0,z(i,r,n),setTimeout(function(){a.loader.unveil(n),a.rAF(function(){a.fire(n,"_lazyloaded",{},!0,!0),n.complete&&y({target:n})})}))}),t.addEventListener("load",y,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==a&&e.target._lazybgset&&e.detail.dataAttr){var t=e.target._lazybgset,i=c(t);d[i]&&(e.target._lazysizesParentFit=i,a.rAF(function(){e.target.setAttribute("data-parent-fit",i),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==a&&(e.detail.width=u(e.target._lazybgset))})}}),function(e,t){var a=function(e,t){"use strict";var a,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};i=e.lazySizesConfig||e.lazysizesConfig||{};for(t in a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var n=t.documentElement,r=e.Date,s=e.HTMLPictureElement,l="addEventListener",o="getAttribute",d=e[l],u=e.setTimeout,c=e.requestAnimationFrame||u,f=e.requestIdleCallback,z=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],g={},m=Array.prototype.forEach,v=function(e,t){return g[t]||(g[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),g[t].test(e[o]("class")||"")&&g[t]},p=function(e,t){v(e,t)||e.setAttribute("class",(e[o]("class")||"").trim()+" "+t)},b=function(e,t){var a;(a=v(e,t))&&e.setAttribute("class",(e[o]("class")||"").replace(a," "))},h=function(e,t,a){var i=a?l:"removeEventListener";a&&h(e,t),y.forEach(function(a){e[i](a,t)})},A=function(e,i,n,r,s){var l=t.createEvent("Event");return n||(n={}),n.instance=a,l.initEvent(i,!r,!s),l.detail=n,e.dispatchEvent(l),l},_=function(t,a){var n;!s&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[o]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},w=function(){var e,a,i=[],n=[],r=i,s=function(){var t=r;for(r=i.length?n:i,e=!0,a=!1;t.length;)t.shift()();e=!1},l=function(i,n){e&&!n?i.apply(this,arguments):(r.push(i),a||(a=!0,(t.hidden?u:c)(s)))};return l._lsFlush=s,l}(),N=function(e,t){return t?function(){w(e)}:function(){var t=this,a=arguments;w(function(){e.apply(t,a)})}},L=function(e){var t,a=0,n=i.throttleDelay,s=i.ricTimeout,l=function(){t=!1,a=r.now(),e()},o=f&&s>49?function(){f(l,{timeout:s}),s!==i.ricTimeout&&(s=i.ricTimeout)}:N(function(){u(l)},!0);return function(e){var i;(e=!0===e)&&(s=33),t||(t=!0,i=n-(r.now()-a),i<0&&(i=0),e||i<9?o():u(o,i))}},S=function(e){var t,a,i=function(){t=null,e()},n=function(){var e=r.now()-a;e<99?u(n,99-e):(f||i)(i)};return function(){a=r.now(),t||(t=u(n,99))}},M=function(){var s,c,f,y,g,E,M,W,x,F,T,B,k=/^img$/i,O=/^iframe$/i,R="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),$=0,D=0,H=-1,j=function(e){D--,(!e||D<0||!e.target)&&(D=0)},I=function(e){return null==B&&(B="hidden"==C(t.body,"visibility")),B||"hidden"!=C(e.parentNode,"visibility")&&"hidden"!=C(e,"visibility")},q=function(e,a){var i,r=e,s=I(e);for(W-=a,T+=a,x-=a,F+=a;s&&(r=r.offsetParent)&&r!=t.body&&r!=n;)(s=(C(r,"opacity")||1)>0)&&"visible"!=C(r,"overflow")&&(i=r.getBoundingClientRect(),s=F>i.left&&x<i.right&&T>i.top-1&&W<i.bottom+1);return s},J=function(){var e,r,l,d,u,f,z,g,m,v,p,b,h=a.elements;if((y=i.loadMode)&&D<8&&(e=h.length)){for(r=0,H++;r<e;r++)if(h[r]&&!h[r]._lazyRace)if(!R||a.prematureUnveil&&a.prematureUnveil(h[r]))Z(h[r]);else if((g=h[r][o]("data-expand"))&&(f=1*g)||(f=$),v||(v=!i.expand||i.expand<1?n.clientHeight>500&&n.clientWidth>500?500:370:i.expand,a._defEx=v,p=v*i.expFactor,b=i.hFac,B=null,$<p&&D<1&&H>2&&y>2&&!t.hidden?($=p,H=0):$=y>1&&H>1&&D<6?v:0),m!==f&&(E=innerWidth+f*b,M=innerHeight+f,z=-1*f,m=f),l=h[r].getBoundingClientRect(),(T=l.bottom)>=z&&(W=l.top)<=M&&(F=l.right)>=z*b&&(x=l.left)<=E&&(T||F||x||W)&&(i.loadHidden||I(h[r]))&&(c&&D<3&&!g&&(y<3||H<4)||q(h[r],f))){if(Z(h[r]),u=!0,D>9)break}else!u&&c&&!d&&D<4&&H<4&&y>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!g&&(T||F||x||W||"auto"!=h[r][o](i.sizesAttr)))&&(d=s[0]||h[r]);d&&!u&&Z(d)}},U=L(J),V=function(e){var t=e.target;if(t._lazyCache)return void delete t._lazyCache;j(e),p(t,i.loadedClass),b(t,i.loadingClass),h(t,K),A(t,"lazyloaded")},G=N(V),K=function(e){G({target:e.target})},Q=function(e,t){try{e.contentWindow.location.replace(t)}catch(a){e.src=t}},X=function(e){var t,a=e[o](i.srcsetAttr);(t=i.customMedia[e[o]("data-media")||e[o]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Y=N(function(e,t,a,n,r){var s,l,d,c,y,g;(y=A(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?p(e,i.autosizesClass):e.setAttribute("sizes",n)),l=e[o](i.srcsetAttr),s=e[o](i.srcAttr),r&&(d=e.parentNode,c=d&&z.test(d.nodeName||"")),g=t.firesLoad||"src"in e&&(l||s||c),y={target:e},p(e,i.loadingClass),g&&(clearTimeout(f),f=u(j,2500),h(e,K,!0)),c&&m.call(d.getElementsByTagName("source"),X),l?e.setAttribute("srcset",l):s&&!c&&(O.test(e.nodeName)?Q(e,s):e.src=s),r&&(l||c)&&_(e,{src:s})),e._lazyRace&&delete e._lazyRace,b(e,i.lazyClass),w(function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&p(e,"ls-is-cached"),V(y),e._lazyCache=!0,u(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&D--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=k.test(e.nodeName),n=a&&(e[o](i.sizesAttr)||e[o]("sizes")),r="auto"==n;(!r&&c||!a||!e[o]("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=A(e,"lazyunveilread").detail,r&&P.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,D++,Y(e,t,r,n,a))}},ee=S(function(){i.loadMode=3,U()}),te=function(){3==i.loadMode&&(i.loadMode=2),ee()},ae=function(){if(!c){if(r.now()-g<999)return void u(ae,999);c=!0,i.loadMode=3,U(),d("scroll",te,!0)}};return{_:function(){g=r.now(),a.elements=t.getElementsByClassName(i.lazyClass),s=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),d("scroll",U,!0),d("resize",U,!0),e.MutationObserver?new MutationObserver(U).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[l]("DOMNodeInserted",U,!0),n[l]("DOMAttrModified",U,!0),setInterval(U,999)),d("hashchange",U,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[l](e,U,!0)}),/d$|^c/.test(t.readyState)?ae():(d("load",ae),t[l]("DOMContentLoaded",U),u(ae,2e4)),a.elements.length?(J(),w._lsFlush()):U()},checkElems:U,unveil:Z,_aLSL:te}}(),P=function(){var e,a=N(function(e,t,a,i){var n,r,s;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),z.test(t.nodeName||""))for(n=t.getElementsByTagName("source"),r=0,s=n.length;r<s;r++)n[r].setAttribute("sizes",i);a.detail.dataAttr||_(e,a.detail)}),n=function(e,t,i){var n,r=e.parentNode;r&&(i=E(e,r,i),n=A(e,"lazybeforesizes",{width:i,dataAttr:!!t}),n.defaultPrevented||(i=n.detail.width)&&i!==e._lazysizesWidth&&a(e,r,n,i))},r=function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])},s=S(r);return{_:function(){e=t.getElementsByClassName(i.autosizesClass),d("resize",s)},checkElems:s,updateElem:n}}(),W=function(){!W.i&&t.getElementsByClassName&&(W.i=!0,P._(),M._())};return u(function(){i.init&&W()}),a={cfg:i,autoSizer:P,loader:M,init:W,uP:_,aC:p,rC:b,hC:v,fire:A,gW:E,rAF:w}}(e,e.document);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{});