!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=61)}({61:function(t,e,n){t.exports=n("Wyr2")},Wyr2:function(t,e){$(function(){$(".nav__current").html($(".nav__link.active").text()),$(".js-slider").length>0&&$(".js-slider").owlCarousel({nav:!0,responsive:{0:{items:1},600:{items:2,margin:32},950:{items:3,margin:32},1263:{items:4,margin:32}}});var t=[];$(".filters__item input").on("change",function(){var e=$(this).attr("value"),n=$(".products__item");$(this).prop("checked")?function(e){t.push(+e)}(e):function(e){t.indexOf(+e)>=0&&t.splice(t.indexOf(+e),1)}(e),n.each(function(){t.length>0&&(t.indexOf($(this).data("tag"))>=0?$(this).fadeIn():$(this).fadeOut())}),0===t.length?($(".products__item").fadeIn(),$(".filters__reset").fadeOut()):$(".filters__reset").fadeIn()}),$(".js-reset-filters").on("click",function(e){e.preventDefault(),t=[],$(".filters__item input").prop("checked",!1),$(".filters__item input").eq(0).trigger("change")});var e=$(".js-p-slider");$(".product").on("click",function(t){t.preventDefault();var n=$(".product:visible"),i=[],o=$(this).find(".product__art").text(),r=0,s=$(this).data("id");n.each(function(t){var e={};e.id=$(this).data("id"),e.img=$(this).find("img").attr("src"),e.name=$(this).find(".product__name").text(),e.art=$(this).find(".product__art").text(),e.price=$(this).find(".product__price").text(),e.description=$(this).find(".product__description").text(),e.material=$(this).find(".product__material").text(),e.size=$(this).find(".product__size").text(),i.push(e),o===e.art&&(r=t)});var a=_.template(document.getElementById("list-template").innerHTML)({products:i});$(".p-product__list").html(a),$("body").addClass("p-product-isOpened"),e.owlCarousel({items:1,nav:!0,dots:!1,autoHeight:!0,onChanged:function(t){var e=t.item.index;null!==e&&(window.location.hash="id="+i[e].id)}}),e.trigger("to.owl.carousel",[r,1,!0]),setTimeout(function(){e.trigger("refresh.owl.carousel")},100),s&&(window.location.hash="id="+s)}),$(document).on("click",".js-close-p-product",function(t){t.preventDefault(),$("body").removeClass("p-product-isOpened"),e.trigger("destroy.owl.carousel"),window.location.hash="_"}),$(document).on("click",".js-p-find-dealer",function(t){t.preventDefault(),$("body").toggleClass("where-buy-isOpened"),setTimeout(function(){$("body").hasClass("where-buy-isOpened")?$(".p-product").animate({scrollTop:$(".where-buy").offset().top},300):$(".p-product").animate({scrollTop:0},300)},500)}),window.location.hash&&$(".product").each(function(){$(this).data("id")==window.location.hash.substr(4,window.location.hash.length-1)&&$(this).trigger("click")}),$(".js-menu-open").on("click",function(t){t.preventDefault(),$(this).toggleClass("isOpened"),$(".nav__menu").slideToggle()}),$(document).on("click",function(t){0===$(t.target).closest(".js-menu-open").length&&$(window).outerWidth()<1263&&($(".js-menu-open").removeClass("isOpened"),$(".nav__menu").slideUp())})})}});