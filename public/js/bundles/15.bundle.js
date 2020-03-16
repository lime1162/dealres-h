webpackJsonp([15],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/common/Rules.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "Rules",
	components: {},
	props: ['isOpened'],
	data: function data() {
		return {};
	},

	computed: {},
	methods: {
		closeRules: function closeRules() {
			if (typeof this.$store.state.openRules !== 'undefined') {
				this.$store.dispatch('OPEN_RULES', false);
			}
			this.$emit('close');
		},
		onEnter: function onEnter() {
			this.$root.$emit('fixOverflow', true);
		},
		onLeave: function onLeave() {
			this.$root.$emit('fixOverflow', false);
		}
	},
	filters: {},
	mounted: function mounted() {
		var that = this;

		this.$nextTick(function () {});
	},

	watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/Rules.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.rules {\n  color: #000;\n}\n.rules__center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    position: relative;\n    width: 100%;\n    padding: 64px 72px;\n    padding-bottom: 56px;\n    margin: 0 32px;\n    max-width: 1216px;\n    background-color: #ffffff;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n.rules__center p {\n      margin-bottom: 32px;\n}\n.rules__title {\n    margin-bottom: 32px;\n}\n.rules__left, .rules__right {\n    width: calc(50% - 16px);\n}\n.rules__left {\n    margin-right: 16px;\n}\n.rules__right {\n    margin-left: 16px;\n}\n@media only screen and (max-width: 1262px) {\n.rules__center {\n    display: block;\n}\n.rules__left, .rules__right {\n    margin: 0;\n    width: 100%;\n}\n}\n@media only screen and (max-width: 767px) {\n.rules__center {\n    padding: 32px 16px;\n    margin: 16px;\n}\n.rules__close {\n    top: 10px;\n    right: 16px;\n}\n.rules__title {\n    margin-bottom: 24px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c1d9b26\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/common/Rules.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "popup"
    },
    on: {
      "enter": _vm.onEnter,
      "leave": _vm.onLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpened),
      expression: "isOpened"
    }],
    staticClass: "rules df-popup"
  }, [_c('div', {
    staticClass: "df-popup__wrap",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.closeRules($event)
      }
    }
  }, [_c('div', {
    staticClass: "rules__center df-popup__center"
  }, [_c('a', {
    staticClass: "rules__close df-popup__close",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.closeRules($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "16",
      "height": "16",
      "viewBox": "0 0 16 16",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('rect', {
    attrs: {
      "y": "14.5454",
      "width": "20.5702",
      "height": "2.05702",
      "transform": "rotate(-45 0 14.5454)"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "1.45459",
      "width": "20.5702",
      "height": "2.05702",
      "transform": "rotate(45 1.45459 0)"
    }
  })])]), _vm._v(" "), _c('h3', {
    staticClass: "rules__title"
  }, [_vm._v("Правила обработки персональных данных")]), _vm._v(" "), _c('div', {
    staticClass: "rules__left df-text-main-16px"
  }, [_c('p', [_vm._v("\n\t\t\t\t\t\tНастоящим Я, в соответствии с требованиями Федерального закона от 27.07.09 № 152-ФЗ «О персональных данных» даю свое согласие лично, своей волей и в своем интересе на обработку (сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, распространение, передачу (включая трансграничную передачу), обезличивание, блокирование и уничтожение) моих персональных данных, в том числе с использованием средств автоматизации.\n\t\t\t\t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t\t\t\tТакое согласие мною даётся в отношении следующих персональных данных: фамилии, имя, отчество; контактный адрес электронной почты (e-mail); контактный телефон; для определения потребностей в производственной мощности, мониторинга исполнения сервисными центрами гарантийной политики; ведения истории обращения в сервисные центры; проведения дилерами, дистрибьюторами, контрагентами маркетинговых исследований в области продаж, сервиса и послепродажного обслуживания; для рекламных, исследовательских, информационных, а также иных целей, в том числе, путем осуществления со мной прямых контактов по различным средствам связи.\n\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "rules__right df-text-main-16px"
  }, [_c('p', [_vm._v("\n\t\t\t\t\t\tСогласие дается Hyundai Motor Company (Хёндэ Мотор Компани, 231 Янгджи-Донг, Сеочо-Гу, Сеул, 137-938, Республика Корея), ООО «Хендэ Мотор СНГ» (г. Москва, ул.Тестовская, д.10), ООО «Хендэ Мотор МануфактурингPус» (197706, Санкт-Петербург, г. Сестрорецк, Левашовское ш., д. 20, литер А).\n\t\t\t\t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t\t\t\tЯ даю свое согласие передавать мои персональные данные для обработки исследовательским агентствам: ООО «Международный институт маркетинговых и социальных исследований «ГФК-Русь» (г. Москва, 9-я Парковая улица, д. 48, корп. 4), ЗАО «Бизнес Аналитика МК» (г. Москва, ул. Новослободская, д. 31, стр. 2); АО «АВТОАССИСТАНС» (г.Москва, ул. Обручева д. 52 стр.3), ООО «Ипсос» (г. Москва, Гамсоновскийпереулок, д. 5), а также любым другим третьим лицам, для целей, указанных в настоящем согласии.\n\t\t\t\t\t")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c1d9b26", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/Rules.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/Rules.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("32096122", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rules.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rules.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/vue/components/common/Rules.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c1d9b26\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/Rules.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/common/Rules.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c1d9b26\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/common/Rules.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/common/Rules.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rules.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c1d9b26", Component.options)
  } else {
    hotAPI.reload("data-v-1c1d9b26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});