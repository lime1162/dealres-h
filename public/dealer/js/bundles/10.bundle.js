webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/dealerCars/CarPage.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	name: 'CarPage',
	components: {
		SpecsSection: function SpecsSection() {
			return __webpack_require__.e/* import() */(4/* duplicate */).then(__webpack_require__.bind(null, "./resources/js/vue/components/CarPageTemplate/SpecsSection.vue"));
		},
		CarPageSlider: function CarPageSlider() {
			return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "./resources/js/vue/components/dealerCars/CarPageSlider.vue"));
		},
		HotButtonsDealer: function HotButtonsDealer() {
			return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "./resources/js/vue/components/common/HotButtonsDealer.vue"));
		},
		SignUpTestDriveFormPopup: function SignUpTestDriveFormPopup() {
			return __webpack_require__.e/* import() */(2/* duplicate */).then(__webpack_require__.bind(null, "./resources/js/vue/components/common/SignUpTestDriveFormPopup.vue"));
		}
	},
	data: function data() {
		return {
			id: 0,
			car: {},
			loadingFeaturesSuccess: true,
			openCarPopup: false,
			tdInit: false
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
		openTdPopup: "OPEN_TEST_DRIVE_POPUP"

	}), {
		tdVisible: function tdVisible() {
			if (this.openTdPopup) {
				this.tdInit = true;
			}

			return this.tdInit;
		}
	}),
	methods: {
		closeThis: function closeThis() {
			this.openCarPopup = false;
		},
		onEnter: function onEnter() {
			this.$root.$emit('fixOverflow', true);
		},
		onLeave: function onLeave() {
			this.$root.$emit('fixOverflow', false);
		},
		openTestDrivePopup: function openTestDrivePopup() {
			this.$store.dispatch('OPEN_TEST_DRIVE_POPUP', true);
		},
		goBack: function goBack() {
			this.$router.push({ name: 'home' });
		}
	},
	created: function created() {
		var _this = this;

		this.id = this.$route.params.id;

		if (typeof carsList !== 'undefined') {
			carsList.forEach(function (car) {
				if (car.id === +_this.id) {
					_this.car = car;
				}
			});
		}
	},

	filters: {
		output: function output(value) {
			return typeof value !== 'undefined' ? value : '';
		}
	},
	mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPage.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.car-page {\n  position: relative;\n  background-color: #F6F3F2;\n  color: #000;\n  padding-top: 25px;\n}\n.car-page__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 55px 0;\n    padding-top: 15px;\n}\n.car-page__mobile {\n    display: none;\n}\n.car-page__images {\n    width: calc(100% - 518px);\n    margin-right: 30px;\n}\n.car-page__specifications {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 488px;\n    padding: 43px 40px;\n    background-color: #fff;\n    white-space: nowrap;\n}\n.car-page__line {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.car-page__line--top {\n      margin-bottom: 9px;\n}\n.car-page__line--price {\n      margin-bottom: 15px;\n}\n.car-page__line--buttons {\n      margin-bottom: 26px;\n}\n.car-page__year {\n    font-size: 1.2rem;\n    line-height: 1.5;\n    font-weight: 500;\n}\n.car-page__old-price {\n    width: 100%;\n    font-size: 1.2rem;\n    line-height: 1;\n    font-weight: 500;\n    color: #B7B7B7;\n    text-decoration: line-through;\n}\n.car-page__price {\n    width: calc(50% - 7px);\n    font-size: 2rem;\n    line-height: 1;\n    font-weight: 500;\n    margin-right: 7px;\n}\n.car-page__month-payment {\n    width: calc(50% - 7px);\n    font-size: 1.6rem;\n    line-height: 1;\n    font-weight: 500;\n    color: #002C5F;\n    margin-left: 7px;\n}\n.car-page__book {\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    padding-left: 0;\n    padding-right: 0;\n}\n.car-page__calc {\n    width: calc(50% - 7px);\n    margin-left: 7px;\n    padding-left: 0;\n    padding-right: 0;\n    background-color: transparent;\n    color: #002C5F;\n    border: 1px solid #002C5F;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.car-page__calc:hover {\n      background-color: #002C5F;\n      color: #fff;\n}\n.car-specifications {\n  padding-top: 22px;\n  padding-bottom: 30px;\n  border-top: 1px solid #C4C4C4;\n}\n.car-specifications__line {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 16px;\n    color: #000;\n}\n.car-specifications__line:not(:last-of-type) {\n      margin-bottom: 9px;\n}\n.car-specifications__description {\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.car-specifications__value {\n    width: calc(50% - 7px);\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.car-popup__wrap {\n  height: 100%;\n}\n.car-popup__center {\n  width: 100%;\n  height: 100%;\n}\n.h-buttons {\n  right: 0;\n    right-bottom: 81px;\n}\n@media only screen and (max-width: 1262px) {\n.car-page__inner {\n    display: block;\n    padding-top: 15px;\n}\n.car-page__images {\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 30px;\n    height: 560px;\n}\n.car-page__specifications {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 767px) {\n.car-page__inner {\n    padding-top: 15px;\n}\n.car-page__mobile {\n    display: block;\n    margin-bottom: 26px;\n}\n.car-page__name {\n    font-size: 30px;\n}\n.car-page__month-payment {\n    width: auto;\n}\n.car-page__price {\n    width: auto;\n}\n.car-page__images {\n    height: 64vw;\n    margin-bottom: 16px;\n}\n.car-page__specifications {\n    padding: 34px 20px;\n}\n.car-page__line--top, .car-page__line--price {\n    display: none;\n}\n.car-page__line--top-mobile {\n    margin-bottom: 20px;\n}\n.car-page__line--buttons {\n    display: block;\n}\n.car-page__book {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 16px;\n}\n.car-page__calc {\n    display: block;\n    width: 100%;\n    margin-left: 0;\n}\n.car-specifications {\n    padding-top: 0;\n    border-top: none;\n}\n.car-specifications__line {\n      display: block;\n}\n.car-specifications__line:not(:last-of-type) {\n        margin-bottom: 19px;\n}\n.car-specifications__description {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 5px;\n}\n.car-specifications__value {\n      width: 100%;\n      margin-left: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-487c7a34\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/dealerCars/CarPage.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "car-page"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('a', {
    staticClass: "df-back-link",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.goBack($event)
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tНазад\n\t\t\t\t\t\t"), _c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#back-link"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "car-page__inner"
  }, [_c('div', {
    staticClass: "car-page__mobile"
  }, [_c('div', {
    staticClass: "car-page__line car-page__line--top-mobile"
  }, [_c('div', {
    staticClass: "h3 car-page__name"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.name)) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-page__year"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.year)) + "\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-page__line car-page__line--price-mobile"
  }, [(_vm.car.oldPrice) ? _c('div', {
    staticClass: "car-page__old-price"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.oldPrice)) + " ₽")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "car-page__price"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.minPrice)) + " ₽")]), _vm._v(" "), _c('div', {
    staticClass: "car-page__month-payment"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.monthPayment)) + " ₽/мес.")])])]), _vm._v(" "), _c('div', {
    staticClass: "car-page__images"
  }, [_c('car-page-slider', {
    attrs: {
      "is-popup": false,
      "images": _vm.car.images
    },
    on: {
      "open-popup": function($event) {
        _vm.openCarPopup = true
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "car-page__specifications"
  }, [_c('div', {
    staticClass: "car-page__line car-page__line--top"
  }, [_c('div', {
    staticClass: "h3 car-page__name"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.name)) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-page__year"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.year)) + "\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-page__line car-page__line--price"
  }, [(_vm.car.oldPrice) ? _c('div', {
    staticClass: "car-page__old-price"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.oldPrice)) + " ₽")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "car-page__price"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.minPrice)) + " ₽")]), _vm._v(" "), _c('div', {
    staticClass: "car-page__month-payment"
  }, [_vm._v(_vm._s(_vm._f("currencyFormat")(_vm.car.monthPayment)) + " ₽/мес.")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications"
  }, [_c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tКоробка передач\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.gearBox)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tДвигатель\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.engine)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tТип привода\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.transmission)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tЦвет кузова\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.exteriorColor)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tЦвет салона\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.interiorColor)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tТип салона\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.interiorType)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tПробег\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.milleage)) + "\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__line"
  }, [_c('div', {
    staticClass: "car-specifications__description"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tVIN\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "car-specifications__value"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("output")(_vm.car.vin)) + "\n\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "car-page__line car-page__line--footer"
  }, [_c('a', {
    staticClass: "df-iconed-link df-iconed-link--small",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.openTestDrivePopup($event)
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\tТест драйв\n\t\t\t\t\t\t\t\t\t"), _c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#arrow-link"
    }
  })])]), _vm._v(" "), _c('a', {
    staticClass: "df-iconed-link df-iconed-link--small",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\tТрейд-ин\n\t\t\t\t\t\t\t\t\t"), _c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#arrow-link"
    }
  })])])])])])])])]), _vm._v(" "), _c('hot-buttons-dealer', {
    attrs: {
      "from-hour": 10,
      "to-hour": 18,
      "type": 1,
      "centers-list": ['Первый', 'Второй', 'Третий'],
      "url-call-back": "/",
      "url-ask-question": "/"
    }
  })], 1), _vm._v(" "), (_vm.car.configId && _vm.loadingFeaturesSuccess) ? _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('specs-section', {
    attrs: {
      "page": "isDealerCarPage",
      "carId": _vm.car.configId,
      "model-type": _vm.car.type,
      "numberOfSeats": _vm.car.seats,
      "engine": _vm.car.engine,
      "drive": _vm.car.transmission,
      "gearBox": _vm.car.gearBox
    },
    on: {
      "error": function($event) {
        _vm.loadingFeaturesSuccess = false
      }
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('transition', {
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
      value: (_vm.openCarPopup),
      expression: "openCarPopup"
    }],
    staticClass: "car-popup df-popup"
  }, [_c('div', {
    staticClass: "car-popup__wrap df-popup__wrap",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.closeThis($event)
      }
    }
  }, [_c('div', {
    staticClass: "car-popup__center df-popup__center"
  }, [_c('a', {
    staticClass: "car-popup df-popup__close",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.closeThis($event)
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
  })])]), _vm._v(" "), _c('car-page-slider', {
    attrs: {
      "event": _vm.openCarPopup,
      "is-popup": true,
      "images": _vm.car.images
    }
  })], 1)])])]), _vm._v(" "), (_vm.tdVisible) ? _c('sign-up-test-drive-form-popup') : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "car-page__line car-page__line--buttons"
  }, [_c('button', {
    staticClass: "df-button car-page__book"
  }, [_vm._v("Забронировать")]), _vm._v(" "), _c('button', {
    staticClass: "df-button car-page__calc"
  }, [_vm._v("Рассчет кредита")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-487c7a34", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPage.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPage.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("290a8050", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CarPage.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CarPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/vue/components/dealerCars/CarPage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-487c7a34\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/dealerCars/CarPage.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/dealerCars/CarPage.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-487c7a34\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/dealerCars/CarPage.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/dealerCars/CarPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CarPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-487c7a34", Component.options)
  } else {
    hotAPI.reload("data-v-487c7a34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});