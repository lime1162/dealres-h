webpackJsonp([9],{"/I7p":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,'.specs{position:relative;height:auto;color:#000;padding-top:57px}.specs__title{display:block;font-size:4.2rem;font-weight:500;text-align:center;margin-bottom:26px}.specs__main{table-layout:fixed;width:100%;font-size:1.6rem;border:1px solid #e4dcd3}.specs__main tr td{padding:12px 32px;border:1px solid #e4dcd3}.specs__main tr td:first-of-type{width:311px;background-color:#e4dcd3;font-weight:500;border-bottom:1px solid #fff}.specs__main .mobile{display:none}.specs__error{font-size:1.6rem;padding-top:50px;padding-bottom:50px}.specs__success{margin-top:40px}.specs-dd{color:#000;border:1px solid #e4dcd3;border-bottom:none}.specs-dd:nth-last-of-type(2){border-bottom:1px solid #e4dcd3}.specs-dd:not(:first-of-type) th{display:none}.specs-dd__head{position:relative;display:block;font-size:1.6rem;font-weight:500;padding:16px 32px}.specs-dd__head svg{display:block;position:absolute;top:50%;right:32px;-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg);-webkit-transition:.3s;transition:.3s}.specs-dd__head svg.rotate{-webkit-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg)}.specs-dd__dropdown{display:none;padding-left:344px}.specs-dd__table{table-layout:fixed;width:100%}.specs-dd__table tr th{font-size:1.6rem;font-weight:500;padding-bottom:29px}.specs-dd__table tr td{vertical-align:bottom;padding-bottom:26px;padding-right:32px}.specs-dd__table--mobile,.specs-dd__table tr td:not(:first-of-type) .specs-dd__subtitle{display:none}.specs-dd__subtitle{font-size:1.6rem;line-height:1.25;color:#666;margin-bottom:7px}.specs-dd__value{max-width:100%;font-size:1.4rem;line-height:1.14;font-weight:500;overflow:hidden;text-overflow:ellipsis}.specs-dd__value svg{display:block;width:14px;height:14px}.dsclmr{position:relative;display:block;padding-left:32px;margin-top:37px;padding-bottom:58px}.dsclmr__icon{position:absolute;left:0;top:.5em;margin-top:-3px;width:16px;height:16px;border-radius:50%;background-color:#c4c4c4}.dsclmr__icon svg{display:block;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.dsclmr__item{font-size:1.2rem;line-height:1.5;color:#000}.dsclmr__item:not(:last-of-type){margin-right:10px}.dsclmr__item:not(:last-of-type):after{content:";";display:inline-block}@media only screen and (max-width:1262px){.specs-dd__dropdown{padding-top:16px;padding-left:32px}}@media only screen and (max-width:767px){.specs{padding-top:36px}.specs__title{font-size:30px;margin-bottom:44px}.specs__main tr td{width:100%;padding:12px 16px}.specs__main tr td:first-of-type{width:100%}.specs__main .desctop{display:none}.specs__main .mobile{display:table-row}.specs__main .mobile td{width:100%!important;background-color:transparent!important;border:none!important}.specs__success{margin-top:31px}.specs-dd__head{padding-left:16px}.specs-dd__table{display:none}.specs-dd__table tr th{position:relative;padding-bottom:23px}.specs-dd__table tr th:not(.first){padding-top:26px}.specs-dd__table tr th:not(.first):after{content:"";display:block;position:absolute;top:0;left:-16px;right:16px;height:1px;background-color:#e4dcd3}.specs-dd__table tr td{padding-bottom:0}.specs-dd__table--mobile{display:table}.specs-dd__subtitle{padding-bottom:1px!important}.specs-dd__value{padding-bottom:25px!important}}',""])},"3ZRJ":function(t,e,s){var i=s("REBr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("82fcdcb2",i,!0,{})},OVVy:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"specs"},[s("div",{staticClass:"section__center"},[s("h2",{staticClass:"specs__title"},[t._v("Технические характеристики Hyundai "+t._s(t.carName))]),t._v(" "),s("table",{staticClass:"specs__main"},[s("tr",[s("td",[t._v("Тип модели")]),t._v(" "),s("td",{staticClass:"desctop"},[t._v(t._s(t.modelType))])]),t._v(" "),s("tr",{staticClass:"mobile"},[s("td",[t._v(t._s(t.modelType))])]),t._v(" "),s("tr",[s("td",[t._v("Количество мест")]),t._v(" "),s("td",{staticClass:"desctop"},[t._v(t._s(t.numberOfSeats))])]),t._v(" "),s("tr",{staticClass:"mobile"},[s("td",[t._v(t._s(t.numberOfSeats))])]),t._v(" "),s("tr",[s("td",[t._v("Двигатель")]),t._v(" "),s("td",{staticClass:"desctop"},[t._v(t._s(t.engine))])]),t._v(" "),s("tr",{staticClass:"mobile"},[s("td",[t._v(t._s(t.engine))])]),t._v(" "),s("tr",[s("td",[t._v("Привод")]),t._v(" "),s("td",{staticClass:"desctop"},[t._v(t._s(t.drive))])]),t._v(" "),s("tr",{staticClass:"mobile"},[s("td",[t._v(t._s(t.drive))])]),t._v(" "),s("tr",[s("td",[t._v("Коробка передач")]),t._v(" "),s("td",{staticClass:"desctop"},[t._v(t._s(t.gearBox))])]),t._v(" "),s("tr",{staticClass:"mobile"},[s("td",[t._v(t._s(t.gearBox))])])]),t._v(" "),t.success?s("div",{staticClass:"specs__success"},[t._l(t.specifications,function(e,i){return s("div",{staticClass:"specs-dd"},[s("a",{staticClass:"specs-dd__head",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.dropdown(i)}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t"),s("svg",{ref:"arrow-"+i,refInFor:!0,attrs:{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 7L6 2L11 7",stroke:"black","stroke-width":"2"}})])]),t._v(" "),s("div",{ref:i,refInFor:!0,staticClass:"specs-dd__dropdown"},[s("table",{staticClass:"specs-dd__table"},[s("tr",t._l(t.modifications,function(e){return s("th",[t._v(t._s(e.name))])}),0),t._v(" "),t._l(e.data,function(e){return[s("tr",[s("td",{staticClass:"specs-dd__subtitle",attrs:{colspan:e.values.length},domProps:{innerHTML:t._s(e.name)}})]),t._v(" "),s("tr",t._l(e.values,function(e){return s("td",[!0===e?s("div",{staticClass:"specs-dd__value"},[s("svg",{staticClass:"ic-svg ic-checkmark",attrs:{tabindex:"-1","aria-visible":"false"}},[s("use",{attrs:{"xlink:href":"#ic-checkmark"}})])]):t._e(),t._v(" "),!1===e?s("div",{staticClass:"specs-dd__value"},[s("svg",{staticClass:"ic-svg ic-minus",attrs:{tabindex:"-1","aria-visible":"false"}},[s("use",{attrs:{"xlink:href":"#ic-minus"}})])]):t._e(),t._v(" "),!1!==e&&!0!==e?s("div",{staticClass:"specs-dd__value",domProps:{innerHTML:t._s(e)}}):t._e()])}),0)]})],2),t._v(" "),s("table",{staticClass:"specs-dd__table specs-dd__table--mobile"},[t._l(t.modifications,function(i,a){return[s("tr",[s("th",{class:{first:0===a}},[t._v(t._s(i.name))])]),t._v(" "),t._l(e.data,function(e){return[s("tr",[s("td",{staticClass:"specs-dd__subtitle",domProps:{innerHTML:t._s(e.name)}})]),t._v(" "),s("tr",[s("td",[!0===e.values[a]?s("div",{staticClass:"specs-dd__value"},[s("svg",{staticClass:"ic-svg ic-checkmark",attrs:{tabindex:"-1","aria-visible":"false"}},[s("use",{attrs:{"xlink:href":"#ic-checkmark"}})])]):t._e(),t._v(" "),!1===e.values[a]?s("div",{staticClass:"specs-dd__value"},[s("svg",{staticClass:"ic-svg ic-minus",attrs:{tabindex:"-1","aria-visible":"false"}},[s("use",{attrs:{"xlink:href":"#ic-minus"}})])]):t._e(),t._v(" "),!1!==e.values[a]&&!0!==e.values[a]?s("div",{staticClass:"specs-dd__value",domProps:{innerHTML:t._s(e.values[a])}}):t._e()])])]})]})],2)])])}),t._v(" "),s("div",{staticClass:"dsclmr df-text-small-12px"},[s("div",{staticClass:"dsclmr__icon"},[s("svg",{attrs:{width:"2",height:"9",viewBox:"0 0 2 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2 6.75H0V9H2V6.75Z",fill:"white"}}),t._v(" "),s("path",{attrs:{d:"M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z",fill:"white"}})])]),t._v(" "),s("div",{staticClass:"dsclmr__body"},t._l(t.footnotes,function(e,i){return s("span",{staticClass:"dsclmr__item"},[t._v(t._s(i)+". "+t._s(e))])}),0)])],2):s("div",{staticClass:"specs__error"},[t._v("\n\t\t\tПри загрузке данных произошла ошибка, повторите попытку позднее.\n\t\t")])]),t._v(" "),s("notifier")],1)},staticRenderFns:[]}},PGwx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={name:"Notifier",data:function(){return{options:{text:"",type:"",persist:!1},active:!1,timeoutID:null,timeoutDuration:1e4}},computed:{messageText:function(){return this.options.text.toString().replace(/\n/g,"<br>")},styleType:function(){return this.options.type||""}},methods:{show:function(t){clearTimeout(this.timeoutID),"object"===(void 0===t?"undefined":i(t))&&Object.assign(this.options,t),"string"==typeof t&&Object.assign(this.options,{text:t,type:"",persist:!1}),this.active=!0},hide:function(){this.active=!1},onShow:function(){var t=this;this.options.persist||(this.timeoutID=setTimeout(function(){t.hide()},this.timeoutDuration))},onHide:function(){Object.assign(this.options,{text:"",type:"",persist:!1})}},mounted:function(){this.$root.$on("notify",this.show)}}},REBr:function(t,e,s){var i=s("kxFB");(t.exports=s("FZ+f")(!1)).push([t.i,'.ic-svg[data-v-3d124400]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;display:inline-block;vertical-align:middle;fill:currentColor;width:1em;height:1em;pointer-events:none;user-select:none}.ic-svg.ic-phone[data-v-3d124400]{width:21px;height:19px}.ic-svg.ic-mail[data-v-3d124400]{width:16px;height:12px}.ic-svg.ic-arrow-s[data-v-3d124400]{width:13px;height:9px}.ic-svg.ic-arrow-m[data-v-3d124400]{width:33px;height:10px}.ic-svg.ic-arrow-b[data-v-3d124400]{width:30px;height:12px}.ic-svg.ic-ru[data-v-3d124400]{width:21px;height:14px}.ic-svg.ic-car[data-v-3d124400]{width:51px;height:36px}.ic-svg.ic-calc[data-v-3d124400]{width:30px;height:33px}.ic-svg.ic-map[data-v-3d124400]{width:36px;height:41px}.ic-svg.ic-steering-wheel[data-v-3d124400]{width:33px;height:33px}.ic-svg.ic-gift[data-v-3d124400]{height:52px;width:42px}.ic-svg.ic-fix[data-v-3d124400]{height:47px;width:50px}.ic-svg.ic-pig[data-v-3d124400]{height:59px;width:62px}.ic-svg.ic-key[data-v-3d124400]{height:30px;width:30px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ic-svg.ic-car-2[data-v-3d124400],.ic-svg.ic-case[data-v-3d124400],.ic-svg.ic-fix-w-gear[data-v-3d124400],.ic-svg.ic-gear[data-v-3d124400],.ic-svg.ic-shield[data-v-3d124400],.ic-svg.ic-steering-wheel-thin[data-v-3d124400]{height:30px;width:30px}.ic-svg.ic-close-sm[data-v-3d124400]{height:15px;width:15px}.ic-video[data-v-3d124400]{display:inline-block;background:#e63312;width:19px;height:19px;position:relative;vertical-align:middle}.ic-video[data-v-3d124400]:after{content:"";width:0;height:0;position:absolute;top:5px;left:7px;border:5px solid;border-color:transparent transparent transparent #fff;-webkit-transform:scale(1);transform:scale(1)}.notifier[data-v-3d124400]{position:fixed;bottom:0;right:0;background:#082c56;color:#fff;font-size:1.23077em;font-family:HyundaiSansHead,Hevetica,Arial,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.015em;cursor:pointer;z-index:5000}.notifier.error[data-v-3d124400]{background:#e63312}.notifier.error .notify__ic[data-v-3d124400]{display:none}.notifier.success .notify__text[data-v-3d124400]{max-width:200px;margin-left:90px}.notifier.success .notify__text[data-v-3d124400]:before{content:url('+i(s("xMgs"))+");position:absolute;top:50%;left:45px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.notifier-body[data-v-3d124400]{position:relative;padding:30px 25px}.notify__text[data-v-3d124400]{cursor:inherit;max-width:350px;display:block}",""])},V7dL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"},on:{enter:t.onShow,"after-leave":t.onHide}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"notifier",class:t.styleType,on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.hide(e)}}},[s("div",{staticClass:"notifier-body"},[s("span",{staticClass:"notify__text",domProps:{innerHTML:t._s(t.messageText)}})])])])},staticRenderFns:[]}},dPAs:function(t,e,s){var i=s("/I7p");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("17b96f53",i,!0,{})},"fQ+X":function(t,e,s){var i=s("VU/8")(s("PGwx"),s("V7dL"),function(t){s("3ZRJ")},"data-v-3d124400",null);t.exports=i.exports},jTha:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mtWM"),a=s.n(i),o=s("fQ+X"),n=s.n(o);e.default={name:"SpecsSection",components:{Notifier:n.a},props:["carId","modelType","numberOfSeats","engine","drive","gearBox","page","carName"],data:function(){return{success:!0,specifications:[],modifications:[],footnotes:[]}},methods:{getData:function(){var t=this;a.a.get(this.$store.state.API.CAR_MODIFICATIONS+this.carId).then(function(e){t.specifications=e.data.specifications,t.modifications=e.data.modifications,t.footnotes=e.data.footnotes,t.success=!0,setTimeout(function(){t.dropdown(0)},1e3)}).catch(function(e){"isDealerCarPage"===t.page?t.$emit("error"):(t.success=!1,t.$root.$emit("notify",{type:"error",text:"Ошибка загрузки данных, повторите попытку позднее"}),console.log(e))})},dropdown:function(t){$(this.$refs[t]).slideToggle(),$(this.$refs["arrow-"+t]).toggleClass("rotate")}},mounted:function(){this.getData()}}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},xMgs:function(t,e){t.exports="/images/notifier-success.png?ebc854ddcb0facf38df675005c14d1a5"},zzMY:function(t,e,s){var i=s("VU/8")(s("jTha"),s("OVVy"),function(t){s("dPAs")},null,null);t.exports=i.exports}});