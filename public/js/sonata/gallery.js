!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=50)}({50:function(e,r,n){e.exports=n("Dr6A")},Dr6A:function(e,r){$(document).ready(function(){var e=new ScrollMagic.Controller,r=new ScrollMagic.Scene({triggerElement:".nav",duration:"0",triggerHook:"0"}).setPin(".nav").addTo(e);function n(){$(window).outerWidth()<1263?r.offset(-56):r.offset(0)}function t(e){return void 0===e?null:1===(e=""+e).length?"0"+e:e}$(window).on("resize",function(){n()}),n(),$("#gallery").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#gallery-nav",infinite:!0,lazyLoad:"ondemand"}),$("#gallery-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:"#gallery",dots:!1,centerMode:!0,focusOnSelect:!0}),$(".gallery__total").text(t($(".gallery__item").not(".slick-cloned").length)),$(".gallery__download").attr("href",$(".gallery__item.slick-current").data("image")),$("#gallery").on("afterChange",function(e,r,n,o){$(".gallery__current").text(t(n+1)),$(".gallery__download").attr("href",$(".gallery__item.slick-current").data("image"))})})}});