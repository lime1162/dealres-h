!function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=51)}({51:function(e,a,t){e.exports=t("sGEF")},dwwU:function(e,a,t){"use strict";var n="https://api.cofigurator.hyundai.ru/";a.a={openFindDealerPopup:!1,openSendDealerPopup:!1,openOfferCreditPopup:!1,openBackCallPopup:!1,openEventPopup:!1,openCheckoutEventPopup:!1,openTestDrivePopup:!1,openSendEmailPopup:!1,openSendApprovalPopup:!1,openRules:!1,openSuccess:!1,API:{CAR:n+"car/",CAR_LIST:n+"carList",CAR_LIST2:"/api/carList",CAR_LIST3:"/ajax/new/getServiceJSON",CAR_MODIFICATIONS:n+"car/modifications/",CAR_COMPLECTATIONS:n+"car/complectations/",DEALERS_LIST:"/requestapi/getDealers?notest=1",GET_DEALERS_CREDIT:n+"dealersCredit",ENGINES_LIST:"/ajax/new/getServiceJSON",TO_CALC_COST:"/ajax/new/calculator",START_CALC_COST:n+"credit/startNew/",CHECK_VIN:"/api/service/checkVin",CONTACT_FORM:"/api/send/servicerequest",OFFER_CREDIT_FORM:"/api/send/offercreditrequest",START_CONTACT_FORM:"/api/send/start",SERVICE_FORM:"/api/send/servicerequest",TD_FORM:"/api/send/testdrive",CONTACT_US_FORM:"/api/send/contactus",MOTORSTUDIO_CHECKOUT_FORM:"/api/send/motorstudio_request",VACANCY_FORM:"/api/send/jobseeker",VACANCY_XMMP_FORM:"/api/send/jobseeker_xmmp",NEW_EVENT_MOTORSTUDION_FORM:"/api/send/eventRequest",CHECK_CREDIT:"/api/checkEcredit/"},car:{code:"",id:0,image:"",link:"",name:""},savedModel:"",year:"",engine:"",vEngine:"",mileage:15,user:{phone:""},years:{},engines:{},vEngines:[],city:"",dealer:"",cost:{works:0,parts:0,partsPl2:0,total:0},serviceParts:"parts",data:[],dataEngines:[],dealersData:[],dealers:[],dealersCities:[],selectedEvents:[],selectedEvent:0,carsIdLinks:[{id:22,link:"Creta"},{id:26,link:"NewTucson"},{id:25,link:"NewSantaFe"},{id:23,link:"Solaris"},{id:27,link:"NewElantra"},{id:24,link:"Sonata"},{id:16,link:"H-1"},{id:29,link:"NewSonata"},{id:28,link:"i30N"}],start:{carcaseList:[],modelsList:[],currentCar:{name:"",id:0},currentCarSpec:{name:""},modificationList:{},modification:{name:""},dataModifications:{},complectationList:{},complectation:{name:"",price:0},dataComplectations:{},packets:{},selectedPackets:[],activeColorObj:{nameRus:"",cost:"",carImage:""},activeColor:0,colorsAPI:{},prevColor:0,spritespin:{},selectedPrograms:[],currentTerm:36,includeKASKO:!1,compareSelected:"",creditPack:{pay:0,prepay:0,prepayRub:0,sum:0,addCost:0,lastPay:0},openMobileLine:!1},dealerCars:{carId:0},tradein:{currentCar:null,sendUrl:"",state:{step1:!1,step2:!1,step3:!1},step2:{brand:"",model:"",age:"",year:"",complectation:"",body:"",condition:"",milleage:void 0,vin:""},step3:{name:"",surname:"",patronymic:"",tel:"",email:"",city:""}}}},sGEF:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("dwwU");$(function(){$.ajax({url:n.a.API.CAR_LIST,success:function(e){e&&e.cars&&(e.cars[29]?e.cars[29].minPrice&&e.cars[29].payment&&($("#price-from").text(e.cars[29].minPrice.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," ")),$("#credit-from").text(e.cars[29].payment.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," "))):console.error("wrong car id 29")),$(".banner").addClass("isEntered")}});var e=new ScrollMagic.Controller;if($(window).outerWidth()>1262)var a=new ScrollMagic.Controller({globalSceneOptions:{offset:-48,triggerHook:"0"}});else a=new ScrollMagic.Controller({globalSceneOptions:{offset:-104,triggerHook:"0"}});e.scrollTo(function(e){$("html, body").animate({scrollTop:e})}),$("a.scroll").on("click",function(a){a.preventDefault();var t=$(this).attr("href");$(window).outerWidth()>1262?e.scrollTo($(t).offset().top-47):e.scrollTo($(t).offset().top-103)});var t=new ScrollMagic.Scene({triggerElement:"#design"}).addTo(a);t.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),l()}),t.on("leave",function(e){$("a.scroll").removeClass("active"),l()});var r=new ScrollMagic.Scene({triggerElement:"#dynamics"}).addTo(a);r.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),l()}),r.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),l()});var o=new ScrollMagic.Scene({triggerElement:"#comfort"}).addTo(a);o.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),l()}),o.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),l()});var i=new ScrollMagic.Scene({triggerElement:"#safety"}).addTo(a);i.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),l()}),i.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),l()});var s=new ScrollMagic.Scene({triggerElement:"#specs"}).addTo(a);function l(){var e=$("a.scroll.active"),a=$(window).width(),t=$(".nav").scrollLeft();e.length>0&&(e.offset().left<t||e.offset().left+e.width()>=a)&&$(".nav").animate({scrollLeft:e.position().left})}s.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#specs"]').addClass("active"),l()}),s.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),l()}),$.extend($.lazyLoadXT,{edgeY:500});var c,d=new ScrollMagic.Scene({triggerElement:".nav",duration:"0",triggerHook:"0"}).setPin(".nav").addTo(e);function p(){$(window).outerWidth()<1263?d.offset(-56):d.offset(0)}function f(){$(window).outerWidth()>1262?(c&&c.destroy(),c=new Rellax(".s-parallax__list--right",{center:!0,speed:5}),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--right").append($(this).find(".s-parallax__list--right").prev(".s-parallax__list--left").find(".s-parallax__item--right"))})):(c&&c.destroy(),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--left").append($(this).find(".s-parallax__list--left").next(".s-parallax__list--right").find(".s-parallax__item"))}));$(".s-parallax__item").each(function(){$(this).data("order")&&$(this).css("order",$(this).data("order"))})}$(window).on("resize",function(){p()}),p(),$(window).on("resize",function(){f()}),f(),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:2.5}).staggerFromTo(".safety .safety__center-img--change-1",.5,{opacity:1},{opacity:0},5),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:2.5}).staggerFromTo(".safety .safety__center-img--change-2",.5,{opacity:0},{opacity:1},5),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:2.5}).staggerFrom(".comfort .s-parallax__bg",.3,{opacity:0},2.5),new TimelineMax({repeat:-1,yoyo:!1,repeatDelay:0}).staggerFrom(".schema__animate",.2,{visibility:"hidden"},.2);var u={score:0,update:function(){$("#count1").text(this.score)}},g={score:0,update:function(){$("#count2").text(this.score)}},m=new TimelineMax({paused:!0});m.add("start").to(u,2,{score:"+=180",roundProps:"score",onUpdate:u.update.bind(u),ease:Linear.easeNone},"start").to(g,2,{score:"+=9",roundProps:"score",onUpdate:g.update.bind(g),ease:Linear.easeNone},"start");var v=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:"0",triggerHook:"0.45"}).addTo(e);v.on("enter",function(e){$(".dynamics--1").addClass("isEntered"),v.destroy()});var C=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:$(".dynamics--1").height(),triggerHook:"0.5"}).addTo(e);C.on("enter",function(e){$("#d-video1").get(0).play(),m.play()}),C.on("leave",function(e){$("#d-video1").get(0).pause(),m.kill()});new ScrollMagic.Scene({triggerElement:".dynamics--2",duration:$(".dynamics--2").height(),triggerHook:"0.5"}).addTo(e);var h=new ScrollMagic.Scene({triggerElement:".safety--1",duration:"0",triggerHook:"0.45"}).addTo(e);h.on("enter",function(e){$(".safety--1").addClass("isEntered"),$("#d-video2").get(0).play()}),h.on("leave",function(e){$("#d-video2").get(0).pause()}),new ScrollMagic.Scene({triggerElement:".safety--2",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--2").addClass("isEntered")}),new ScrollMagic.Scene({triggerElement:".safety--3",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--3").addClass("isEntered")}),new ScrollMagic.Scene({triggerElement:".safety--4",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--4").addClass("isEntered")}),$(".js-show-df-hint-popup").on("click",function(e){e.preventDefault();var a=$(this).parent(".df-help").find(".df-hint-popup");if(a.hasClass("df-hint-popup--left")||a.hasClass("df-hint-popup--right"))return null;a.addClass("df-hint-popup--right")}),$(".js-close-df-hint-popup").on("click",function(e){e.preventDefault(),$(this).parent(".df-hint-popup").removeClass("df-hint-popup--right")}),$(window).on("click",function(e){0===$(e.target).closest(".df-hint-popup").length&&0===$(e.target).closest(".js-show-df-hint-popup").length&&$(".df-hint-popup").removeClass("df-hint-popup--right")})})}});