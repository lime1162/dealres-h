!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=53)}({53:function(e,t,a){e.exports=a("Td31")},Td31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("dwwU");$(function(){$.ajax({url:n.a.API.CAR_LIST,success:function(e){e&&e.cars&&(e.cars[22]?e.cars[22].minPrice&&e.cars[22].payment&&($("#price-from").text(e.cars[22].minPrice.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," ")),$("#credit-from").text(e.cars[22].payment.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," "))):console.error("wrong car id 22")),$(".banner").addClass("isEntered")}});var e=new ScrollMagic.Controller;if($(window).outerWidth()>1262)var t=new ScrollMagic.Controller({globalSceneOptions:{offset:-48,triggerHook:"0"}});else t=new ScrollMagic.Controller({globalSceneOptions:{offset:-104,triggerHook:"0"}});e.scrollTo(function(e){$("html, body").animate({scrollTop:e})}),$("a.scroll").on("click",function(t){t.preventDefault();var a=$(this).attr("href");$(window).outerWidth()>1262?e.scrollTo($(a).offset().top-47):e.scrollTo($(a).offset().top-103)});var a=new ScrollMagic.Scene({triggerElement:"#design"}).addTo(t);a.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),c()}),a.on("leave",function(e){$("a.scroll").removeClass("active"),c()});var r=new ScrollMagic.Scene({triggerElement:"#dynamics"}).addTo(t);r.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),c()}),r.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),c()});var o=new ScrollMagic.Scene({triggerElement:"#comfort"}).addTo(t);o.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),c()}),o.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),c()});var i=new ScrollMagic.Scene({triggerElement:"#safety"}).addTo(t);i.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),c()}),i.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),c()});var s=new ScrollMagic.Scene({triggerElement:"#specs"}).addTo(t);function c(){var e=$("a.scroll.active"),t=$(window).width(),a=$(".nav").scrollLeft();e.length>0&&(e.offset().left<a||e.offset().left+e.width()>=t)&&($(".nav").animate({scrollLeft:e.position().left}),console.log(e.position().left))}s.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#specs"]').addClass("active"),c()}),s.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),c()}),$.extend($.lazyLoadXT,{edgeY:500});var l,d=new ScrollMagic.Scene({triggerElement:".nav",duration:"0",triggerHook:"0"}).setPin(".nav").addTo(e);function p(){$(window).outerWidth()<1263?d.offset(-56):d.offset(0)}function u(){$(window).outerWidth()>1262?(l&&l.destroy(),l=new Rellax(".s-parallax__list--right",{center:!0,speed:5}),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--right").append($(this).find(".s-parallax__list--right").prev(".s-parallax__list--left").find(".s-parallax__item--right"))})):(l&&l.destroy(),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--left").append($(this).find(".s-parallax__list--left").next(".s-parallax__list--right").find(".s-parallax__item"))}));$(".s-parallax__item").each(function(){$(this).data("order")&&$(this).css("order",$(this).data("order"))})}$(window).on("resize",function(){p()}),p(),$(window).on("resize",function(){u()}),u(),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:1}).staggerFrom(".design .s-parallax__bg",.3,{opacity:0},3),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:1}).staggerFrom(".comfort .s-parallax__bg",.3,{opacity:0},3);var f={score:0,update:function(){$("#count1").text(this.score)}},g={score:0,update:function(){$("#count2").text(this.score)}},v={score:0,update:function(){$("#count3").text(this.score)}},m={score:0,update:function(){$("#count4").text(this.score)}},C=new TimelineMax({paused:!0}),h=new TimelineMax({paused:!0});C.add("start").to(f,2,{score:"+=123",roundProps:"score",onUpdate:f.update.bind(f),ease:Linear.easeNone},"start").to(g,2,{score:"+=10",roundProps:"score",onUpdate:g.update.bind(g),ease:Linear.easeNone},"start"),h.add("start").to(v,2,{score:"+=149",roundProps:"score",onUpdate:v.update.bind(v),ease:Linear.easeNone},"start").to(m,2,{score:"+=10",roundProps:"score",onUpdate:m.update.bind(m),ease:Linear.easeNone},"start"),$(".js-change-view").on("click",function(e){e.preventDefault();var t=$(this).data("view");$(".js-change-view").each(function(){$(this).parents(".dynamics").removeClass($(this).data("view"))}).removeClass("active"),$(this).addClass("active"),$(this).parents(".dynamics").addClass(t),"view1"===t&&h.play()});var S=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:"0",triggerHook:"0.45"}).addTo(e);S.on("enter",function(e){$(".dynamics--1").addClass("isEntered"),S.destroy()});var _=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:$(".dynamics--1").height(),triggerHook:"0.5"}).addTo(e);_.on("enter",function(e){C.play()}),_.on("leave",function(e){C.kill()});var w=new ScrollMagic.Scene({triggerElement:".dynamics--2",duration:$(".dynamics--2").height(),triggerHook:"0.5"}).addTo(e);w.on("enter",function(e){}),w.on("leave",function(e){});var T=new ScrollMagic.Scene({triggerElement:".safety--1",duration:"0",triggerHook:"0.45"}).addTo(e);T.on("enter",function(e){$(".safety--1").addClass("isEntered"),T.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--2",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--2").addClass("isEntered"),T.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--3",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--3").addClass("isEntered"),T.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--4",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--4").addClass("isEntered"),T.destroy()}),$(".js-show-df-hint-popup").on("click",function(e){e.preventDefault();var t=$(this).parent(".df-help").find(".df-hint-popup");if(t.hasClass("df-hint-popup--left")||t.hasClass("df-hint-popup--right"))return null;t.addClass("df-hint-popup--right")}),$(".js-close-df-hint-popup").on("click",function(e){e.preventDefault(),$(this).parent(".df-hint-popup").removeClass("df-hint-popup--right")}),$(window).on("click",function(e){0===$(e.target).closest(".df-hint-popup").length&&0===$(e.target).closest(".js-show-df-hint-popup").length&&$(".df-hint-popup").removeClass("df-hint-popup--right")})})},dwwU:function(e,t,a){"use strict";var n="https://api.cofigurator.hyundai.ru/";t.a={openFindDealerPopup:!1,openSendDealerPopup:!1,openOfferCreditPopup:!1,openBackCallPopup:!1,openEventPopup:!1,openCheckoutEventPopup:!1,openTestDrivePopup:!1,openSendEmailPopup:!1,openSendApprovalPopup:!1,openRules:!1,openSuccess:!1,API:{CAR:n+"car/",CAR_LIST:n+"carList",CAR_LIST2:"/api/carList",CAR_LIST3:"/ajax/new/getServiceJSON",CAR_MODIFICATIONS:n+"car/modifications/",CAR_COMPLECTATIONS:n+"car/complectations/",DEALERS_LIST:"/requestapi/getDealers?notest=1",GET_DEALERS_CREDIT:n+"dealersCredit",ENGINES_LIST:"/ajax/new/getServiceJSON",TO_CALC_COST:"/ajax/new/calculator",START_CALC_COST:n+"credit/startNew/",CHECK_VIN:"/api/service/checkVin",CONTACT_FORM:"/api/send/servicerequest",OFFER_CREDIT_FORM:"/api/send/offercreditrequest",START_CONTACT_FORM:"/api/send/start",SERVICE_FORM:"/api/send/servicerequest",TD_FORM:"/api/send/testdrive",CONTACT_US_FORM:"/api/send/contactus",MOTORSTUDIO_CHECKOUT_FORM:"/api/send/motorstudio_request",VACANCY_FORM:"/api/send/jobseeker",VACANCY_XMMP_FORM:"/api/send/jobseeker_xmmp",NEW_EVENT_MOTORSTUDION_FORM:"/api/send/eventRequest",CHECK_CREDIT:"/api/checkEcredit/"},car:{code:"",id:0,image:"",link:"",name:""},savedModel:"",year:"",engine:"",vEngine:"",mileage:15,user:{phone:""},years:{},engines:{},vEngines:[],city:"",dealer:"",cost:{works:0,parts:0,partsPl2:0,total:0},serviceParts:"parts",data:[],dataEngines:[],dealersData:[],dealers:[],dealersCities:[],selectedEvents:[],selectedEvent:0,carsIdLinks:[{id:22,link:"Creta"},{id:26,link:"NewTucson"},{id:25,link:"NewSantaFe"},{id:23,link:"Solaris"},{id:27,link:"NewElantra"},{id:24,link:"Sonata"},{id:16,link:"H-1"},{id:29,link:"NewSonata"},{id:28,link:"i30N"}],start:{carcaseList:[],modelsList:[],currentCar:{name:"",id:0},currentCarSpec:{name:""},modificationList:{},modification:{name:""},dataModifications:{},complectationList:{},complectation:{name:"",price:0},dataComplectations:{},packets:{},selectedPackets:[],activeColorObj:{nameRus:"",cost:"",carImage:""},activeColor:0,colorsAPI:{},prevColor:0,spritespin:{},selectedPrograms:[],currentTerm:36,includeKASKO:!1,compareSelected:"",creditPack:{pay:0,prepay:0,prepayRub:0,sum:0,addCost:0,lastPay:0},openMobileLine:!1},dealerCars:{carId:0},tradein:{currentCar:null,sendUrl:"",state:{step1:!1,step2:!1,step3:!1},step2:{brand:"",model:"",age:"",year:"",complectation:"",body:"",condition:"",milleage:void 0,vin:""},step3:{name:"",surname:"",patronymic:"",tel:"",email:"",city:""}}}}});