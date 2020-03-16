webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier__ = __webpack_require__("./resources/js/vue/components/Notifier.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Notifier__);
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
	name: "SpecsSection",
	components: { Notifier: __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default.a },
	props: ['carId', 'modelType', 'numberOfSeats', 'engine', 'drive', 'gearBox', 'page'],
	data: function data() {
		return {
			success: true,
			specifications: [],
			modifications: [],
			footnotes: []
		};
	},

	methods: {
		getData: function getData() {
			var that = this;

			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.$store.state.API.CAR_MODIFICATIONS + this.carId).then(function (response) {
				that.specifications = response.data.specifications;
				that.modifications = response.data.modifications;
				that.footnotes = response.data.footnotes;
				that.success = true;
				setTimeout(function () {
					that.dropdown(0);
				}, 1000);
			}).catch(function (error) {
				if (that.page === 'isDealerCarPage') {
					that.$emit('error');
				} else {
					that.success = false;
					that.$root.$emit('notify', { type: 'error', text: 'Ошибка загрузки данных, повторите попытку позднее' });
					console.log(error);
				}
			});
		},
		dropdown: function dropdown(index) {
			$(this.$refs[index]).slideToggle();
			$(this.$refs['arrow-' + index]).toggleClass('rotate');
		}
	},
	mounted: function mounted() {
		this.getData();
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

// using examples:
// this.$root.$emit('notify', { type: 'success', text: 'Success message.', persist: true })
// this.$root.$emit('notify', 'Message string')

// Assepts '\n' and converts to new line via '<br>'

// options object:
// type: @string, error | success – styling class
// text: @string, text message
// persist: @bool, no autohide if true

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notifier',
  data: function data() {
    return {
      options: {
        text: '',
        type: '',
        persist: false
      },
      active: false,
      timeoutID: null,
      timeoutDuration: 10000
    };
  },

  computed: {
    messageText: function messageText() {
      return this.options.text.toString().replace(/\n/g, '<br>');
    },
    styleType: function styleType() {
      return this.options.type || '';
    }
  },
  methods: {
    show: function show(data) {
      clearTimeout(this.timeoutID);
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        Object.assign(this.options, data);
      }
      if (typeof data === 'string') {
        Object.assign(this.options, {
          text: data,
          type: '',
          persist: false
        });
      }
      this.active = true;
    },
    hide: function hide() {
      this.active = false;
    },
    onShow: function onShow() {
      var _this = this;

      if (!this.options.persist) {
        this.timeoutID = setTimeout(function () {
          _this.hide();
        }, this.timeoutDuration);
      }
    },
    onHide: function onHide() {
      Object.assign(this.options, {
        text: '',
        type: '',
        persist: false
      });
    }
  },
  mounted: function mounted() {
    this.$root.$on('notify', this.show);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ic-svg[data-v-3d124400] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  pointer-events: none;\n  user-select: none;\n}\n.ic-svg.ic-phone[data-v-3d124400] {\n    width: 21px;\n    height: 19px;\n}\n.ic-svg.ic-mail[data-v-3d124400] {\n    width: 16px;\n    height: 12px;\n}\n.ic-svg.ic-arrow-s[data-v-3d124400] {\n    width: 13px;\n    height: 9px;\n}\n.ic-svg.ic-arrow-m[data-v-3d124400] {\n    width: 33px;\n    height: 10px;\n}\n.ic-svg.ic-arrow-b[data-v-3d124400] {\n    width: 30px;\n    height: 12px;\n}\n.ic-svg.ic-ru[data-v-3d124400] {\n    width: 21px;\n    height: 14px;\n}\n.ic-svg.ic-car[data-v-3d124400] {\n    width: 51px;\n    height: 36px;\n}\n.ic-svg.ic-calc[data-v-3d124400] {\n    width: 30px;\n    height: 33px;\n}\n.ic-svg.ic-map[data-v-3d124400] {\n    width: 36px;\n    height: 41px;\n}\n.ic-svg.ic-steering-wheel[data-v-3d124400] {\n    width: 33px;\n    height: 33px;\n}\n.ic-svg.ic-gift[data-v-3d124400] {\n    height: 52px;\n    width: 42px;\n}\n.ic-svg.ic-fix[data-v-3d124400] {\n    height: 47px;\n    width: 50px;\n}\n.ic-svg.ic-pig[data-v-3d124400] {\n    height: 59px;\n    width: 62px;\n}\n.ic-svg.ic-key[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.ic-svg.ic-shield[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-steering-wheel-thin[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-fix-w-gear[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-gear[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-case[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-car-2[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-close-sm[data-v-3d124400] {\n    height: 15px;\n    width: 15px;\n}\n.ic-video[data-v-3d124400] {\n  display: inline-block;\n  background: #e63312;\n  width: 19px;\n  height: 19px;\n  position: relative;\n  vertical-align: middle;\n}\n.ic-video[data-v-3d124400]::after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 5px;\n    left: 7px;\n    border: 5px solid;\n    border-color: transparent transparent transparent #fff;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.notifier[data-v-3d124400] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #082c56;\n  color: #fff;\n  font-size: 1.23077em;\n  font-family: \"HyundaiSansHead\", \"Hevetica\", Arial, sans-serif;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: .015em;\n  cursor: pointer;\n  z-index: 5000;\n}\n.notifier.error[data-v-3d124400] {\n    background: #e63312;\n}\n.notifier.error .notify__ic[data-v-3d124400] {\n      display: none;\n}\n.notifier.success .notify__text[data-v-3d124400] {\n    max-width: 200px;\n    margin-left: 90px;\n}\n.notifier.success .notify__text[data-v-3d124400]::before {\n      content: url(" + escape(__webpack_require__("./resources/js/vue/assets/image/notifier-success.png")) + ");\n      position: absolute;\n      top: 50%;\n      left: 45px;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%);\n}\n.notifier-body[data-v-3d124400] {\n  position: relative;\n  padding: 30px 25px;\n}\n.notify__text[data-v-3d124400] {\n  cursor: inherit;\n  max-width: 350px;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.specs {\n  position: relative;\n  height: auto;\n  color: #000;\n  padding-top: 57px;\n}\n.specs__title {\n    display: block;\n    font-size: 4.2rem;\n    font-weight: 500;\n    text-align: center;\n    margin-bottom: 26px;\n}\n.specs__main {\n    table-layout: fixed;\n    width: 100%;\n    font-size: 1.6rem;\n    border: 1px solid #E4DCD3;\n}\n.specs__main tr td {\n      padding: 12px 32px;\n      border: 1px solid #E4DCD3;\n}\n.specs__main tr td:first-of-type {\n        width: 311px;\n        background-color: #E4DCD3;\n        font-weight: 500;\n        border-bottom: 1px solid #fff;\n}\n.specs__main .mobile {\n      display: none;\n}\n.specs__error {\n    font-size: 1.6rem;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n.specs__success {\n    margin-top: 40px;\n}\n.specs-dd {\n  color: #000;\n  border: 1px solid #E4DCD3;\n  border-bottom: none;\n}\n.specs-dd:nth-last-of-type(2) {\n    border-bottom: 1px solid #E4DCD3;\n}\n.specs-dd:not(:first-of-type) th {\n    display: none;\n}\n.specs-dd__head {\n    position: relative;\n    display: block;\n    font-size: 1.6rem;\n    font-weight: 500;\n    padding: 16px 32px;\n}\n.specs-dd__head svg {\n      display: block;\n      position: absolute;\n      top: 50%;\n      right: 32px;\n      -webkit-transform: translateY(-50%) rotate(180deg);\n              transform: translateY(-50%) rotate(180deg);\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.specs-dd__head svg.rotate {\n        -webkit-transform: translateY(-50%) rotate(0deg);\n                transform: translateY(-50%) rotate(0deg);\n}\n.specs-dd__dropdown {\n    display: none;\n    padding-left: 344px;\n}\n.specs-dd__table {\n    table-layout: fixed;\n    width: 100%;\n}\n.specs-dd__table tr th {\n      font-size: 1.6rem;\n      font-weight: 500;\n      padding-bottom: 29px;\n}\n.specs-dd__table tr td {\n      vertical-align: bottom;\n      padding-bottom: 26px;\n      padding-right: 32px;\n}\n.specs-dd__table tr td:not(:first-of-type) .specs-dd__subtitle {\n        display: none;\n}\n.specs-dd__table--mobile {\n      display: none;\n}\n.specs-dd__subtitle {\n    font-size: 1.6rem;\n    line-height: 1.25;\n    color: #666666;\n    margin-bottom: 7px;\n}\n.specs-dd__value {\n    max-width: 100%;\n    font-size: 1.4rem;\n    line-height: 1.14;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.specs-dd__value svg {\n      display: block;\n      width: 14px;\n      height: 14px;\n}\n.dsclmr {\n  position: relative;\n  display: block;\n  padding-left: 32px;\n  margin-top: 37px;\n  padding-bottom: 58px;\n}\n.dsclmr__icon {\n    position: absolute;\n    left: 0;\n    top: 0.5em;\n    margin-top: -3px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background-color: #C4C4C4;\n}\n.dsclmr__icon svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n}\n.dsclmr__item {\n    font-size: 1.2rem;\n    line-height: 1.5;\n    color: #000;\n}\n.dsclmr__item:not(:last-of-type) {\n      margin-right: 10px;\n}\n.dsclmr__item:not(:last-of-type)::after {\n        content: ';';\n        display: inline-block;\n}\n@media only screen and (max-width: 1262px) {\n.specs-dd__dropdown {\n    padding-top: 16px;\n    padding-left: 32px;\n}\n}\n@media only screen and (max-width: 767px) {\n.specs {\n    padding-top: 36px;\n}\n.specs__title {\n      font-size: 30px;\n      margin-bottom: 44px;\n}\n.specs__main tr td {\n      width: 100%;\n      padding: 12px 16px;\n}\n.specs__main tr td:first-of-type {\n        width: 100%;\n}\n.specs__main .desctop {\n      display: none;\n}\n.specs__main .mobile {\n      display: table-row;\n}\n.specs__main .mobile td {\n        width: 100% !important;\n        background-color: transparent !important;\n        border: none !important;\n}\n.specs__success {\n      margin-top: 31px;\n}\n.specs-dd__head {\n    padding-left: 16px;\n}\n.specs-dd__table {\n    display: none;\n}\n.specs-dd__table tr th {\n      position: relative;\n      padding-bottom: 23px;\n}\n.specs-dd__table tr th:not(.first) {\n        padding-top: 26px;\n}\n.specs-dd__table tr th:not(.first)::after {\n          content: '';\n          display: block;\n          position: absolute;\n          top: 0;\n          left: -16px;\n          right: 16px;\n          height: 1px;\n          background-color: #E4DCD3;\n}\n.specs-dd__table tr td {\n      padding-bottom: 0;\n}\n.specs-dd__table--mobile {\n      display: table;\n}\n.specs-dd__subtitle {\n    padding-bottom: 1px !important;\n}\n.specs-dd__value {\n    padding-bottom: 25px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d124400\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    },
    on: {
      "enter": _vm.onShow,
      "after-leave": _vm.onHide
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "notifier",
    class: _vm.styleType,
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.hide($event)
      }
    }
  }, [_c('div', {
    staticClass: "notifier-body"
  }, [_c('span', {
    staticClass: "notify__text",
    domProps: {
      "innerHTML": _vm._s(_vm.messageText)
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d124400", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c401f59\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "specs"
  }, [_c('div', {
    staticClass: "section__center"
  }, [_c('h2', {
    staticClass: "specs__title"
  }, [_vm._v("Характеристики")]), _vm._v(" "), _c('table', {
    staticClass: "specs__main"
  }, [_c('tr', [_c('td', [_vm._v("Тип модели")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.modelType))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.modelType))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Количество мест")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.numberOfSeats))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.numberOfSeats))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Двигатель")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.engine))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.engine))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Привод")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.drive))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.drive))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Коробка передач")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.gearBox))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.gearBox))])])]), _vm._v(" "), (!_vm.success) ? _c('div', {
    staticClass: "specs__error"
  }, [_vm._v("\n\t\t\tПри загрузке данных произошла ошибка, повторите попытку позднее.\n\t\t")]) : _c('div', {
    staticClass: "specs__success"
  }, [_vm._l((_vm.specifications), function(spec, index) {
    return _c('div', {
      staticClass: "specs-dd"
    }, [_c('a', {
      staticClass: "specs-dd__head",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.dropdown(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(spec.name) + "\n\t\t\t\t\t"), _c('svg', {
      ref: 'arrow-' + index,
      refInFor: true,
      attrs: {
        "width": "12",
        "height": "8",
        "viewBox": "0 0 12 8",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [_c('path', {
      attrs: {
        "d": "M1 7L6 2L11 7",
        "stroke": "black",
        "stroke-width": "2"
      }
    })])]), _vm._v(" "), _c('div', {
      ref: index,
      refInFor: true,
      staticClass: "specs-dd__dropdown"
    }, [_c('table', {
      staticClass: "specs-dd__table"
    }, [_c('tr', _vm._l((_vm.modifications), function(mod) {
      return _c('th', [_vm._v(_vm._s(mod.name))])
    }), 0), _vm._v(" "), _vm._l((spec.data), function(param) {
      return [_c('tr', [_c('td', {
        staticClass: "specs-dd__subtitle",
        attrs: {
          "colspan": param.values.length
        },
        domProps: {
          "innerHTML": _vm._s(param.name)
        }
      })]), _vm._v(" "), _c('tr', _vm._l((param.values), function(value) {
        return _c('td', [(value === true) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-checkmark",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-checkmark"
          }
        })])]) : _vm._e(), _vm._v(" "), (value === false) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-minus",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-minus"
          }
        })])]) : _vm._e(), _vm._v(" "), (value !== false && value !== true) ? _c('div', {
          staticClass: "specs-dd__value",
          domProps: {
            "innerHTML": _vm._s(value)
          }
        }) : _vm._e()])
      }), 0)]
    })], 2), _vm._v(" "), _c('table', {
      staticClass: "specs-dd__table specs-dd__table--mobile"
    }, [_vm._l((_vm.modifications), function(mod, indexMod) {
      return [_c('tr', [_c('th', {
        class: {
          first: indexMod === 0
        }
      }, [_vm._v(_vm._s(mod.name))])]), _vm._v(" "), _vm._l((spec.data), function(param) {
        return [_c('tr', [_c('td', {
          staticClass: "specs-dd__subtitle",
          domProps: {
            "innerHTML": _vm._s(param.name)
          }
        })]), _vm._v(" "), _c('tr', [_c('td', [(param.values[indexMod] === true) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-checkmark",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-checkmark"
          }
        })])]) : _vm._e(), _vm._v(" "), (param.values[indexMod] === false) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-minus",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-minus"
          }
        })])]) : _vm._e(), _vm._v(" "), (param.values[indexMod] !== false && param.values[indexMod] !== true) ? _c('div', {
          staticClass: "specs-dd__value",
          domProps: {
            "innerHTML": _vm._s(param.values[indexMod])
          }
        }) : _vm._e()])])]
      })]
    })], 2)])])
  }), _vm._v(" "), _c('div', {
    staticClass: "dsclmr df-text-small-12px"
  }, [_c('div', {
    staticClass: "dsclmr__icon"
  }, [_c('svg', {
    attrs: {
      "width": "2",
      "height": "9",
      "viewBox": "0 0 2 9",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M2 6.75H0V9H2V6.75Z",
      "fill": "white"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z",
      "fill": "white"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dsclmr__body"
  }, _vm._l((_vm.footnotes), function(dsclmr, index) {
    return _c('span', {
      staticClass: "dsclmr__item"
    }, [_vm._v(_vm._s(index) + ". " + _vm._s(dsclmr))])
  }), 0)])], 2)]), _vm._v(" "), _c('notifier')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c401f59", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("a4f3ba74", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notifier.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notifier.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("52080006", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpecsSection.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpecsSection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/vue/assets/image/notifier-success.png":
/***/ (function(module, exports) {

module.exports = "/images/notifier-success.png?ebc854ddcb0facf38df675005c14d1a5";

/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c401f59\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/CarPageTemplate/SpecsSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SpecsSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c401f59", Component.options)
  } else {
    hotAPI.reload("data-v-4c401f59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/Notifier.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d124400\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/Notifier.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3d124400",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/Notifier.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notifier.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d124400", Component.options)
  } else {
    hotAPI.reload("data-v-3d124400", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});