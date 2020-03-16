webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'CarPageSlider',
	props: {
		images: {
			type: Array,
			required: true
		},
		isPopup: {
			type: Boolean,
			required: true
		},
		event: event
	},
	data: function data() {
		return {
			gallery: '',
			nav: ''
		};
	},

	methods: {
		openPopup: function openPopup() {
			this.$emit('open-popup');
		}
	},
	created: function created() {
		this.gallery = Math.floor(Math.random() * 1000000);
		this.nav = Math.floor(Math.random() * 1000000);
	},
	mounted: function mounted() {
		var _this = this;

		this.$nextTick(function () {
			$('#' + _this.gallery).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				asNavFor: '#' + _this.nav,
				infinite: true,
				lazyLoad: 'ondemand'
			});
			$('#' + _this.nav).slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '#' + _this.gallery,
				dots: false,
				centerMode: false,
				arrows: false,
				focusOnSelect: true
			});
		});
	},

	watch: {
		event: function event() {
			$('#' + this.gallery).slick('refresh');
			$('#' + this.nav).slick('refresh');
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.car-slider {\n  height: 100%;\n}\n.car-slider__wrapper {\n    width: 100%;\n    height: 80%;\n}\n.car-slider__list, .car-slider .slick-list, .car-slider .slick-track {\n    height: 100%;\n}\n.car-slider__item {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: contain;\n    outline: none;\n    background-color: transparent;\n}\n.car-slider__item.pointer {\n      background-color: #fff;\n      cursor: pointer;\n}\n.car-slider__nav {\n    width: 100%;\n    height: calc(20% - 12px);\n    margin-top: 12px;\n}\n.car-slider__nav-list, .car-slider .slick-list, .car-slider .slick-track {\n    height: 100%;\n}\n.car-slider__nav-item {\n    position: relative;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    outline: none;\n    margin-right: 10px;\n}\n.car-slider__nav-item:not(.slick-current)::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.32);\n}\n.car-slider .slick-prev, .car-slider .slick-next {\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.4);\n    background-repeat: no-repeat;\n    background-size: 22%;\n    background-position: 50%;\n    z-index: 10;\n}\n.car-slider .slick-prev::before, .car-slider .slick-next::before {\n      content: '';\n}\n.car-slider .slick-prev {\n    left: 0;\n    background-image: url(\"/images/santaFe/svg/left_slider.png\");\n}\n.car-slider .slick-next {\n    right: 0;\n    background-image: url(\"/images/santaFe/svg/right_slider.png\");\n}\n@media only screen and (max-width: 767px) {\n.car-slider__wrapper {\n    height: 100%;\n}\n.car-slider__nav {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69f4cce7\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "car-slider"
  }, [_c('div', {
    staticClass: "car-slider__wrapper"
  }, [_c('ul', {
    staticClass: "car-slider__list",
    attrs: {
      "id": _vm.gallery
    }
  }, _vm._l((_vm.images), function(image, index) {
    return _c('li', {
      key: index,
      staticClass: "car-slider__item",
      class: {
        pointer: !_vm.isPopup
      },
      style: ('background-image: url(' + image + ')'),
      attrs: {
        "data-image": image
      },
      on: {
        "click": _vm.openPopup
      }
    })
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "car-slider__nav"
  }, [_c('ul', {
    staticClass: "car-slider__nav-list",
    attrs: {
      "id": _vm.nav
    }
  }, _vm._l((_vm.images), function(image, index) {
    return _c('li', {
      key: index,
      staticClass: "car-slider__nav-item",
      style: ('background-image: url(' + image + ')')
    })
  }), 0)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69f4cce7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("08ca6ac0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CarPageSlider.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CarPageSlider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/vue/components/dealerCars/CarPageSlider.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69f4cce7\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69f4cce7\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/dealerCars/CarPageSlider.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/dealerCars/CarPageSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CarPageSlider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69f4cce7", Component.options)
  } else {
    hotAPI.reload("data-v-69f4cce7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});