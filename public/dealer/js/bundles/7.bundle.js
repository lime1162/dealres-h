webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier__ = __webpack_require__("./resources/js/vue/components/Notifier.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Notifier__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spritespin__ = __webpack_require__("./node_modules/spritespin/release/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "View360",
    components: { Notifier: __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default.a },
    props: ['title', 'carId', 'defaultColor'],
    data: function data() {
        return {
            success: true,
            spritespinAPI: null,
            colorsAPI: [],
            activeColor: 0,
            prevColor: 0,
            spritespin: null,
            frame: 0,
            lastFrameSrc: 0,
            isLoaded: false,
            isFirstLoaded: false,
            isInit: false,
            progress: 0,
            currentCar: null,
            activeColorObj: null
        };
    },

    computed: {
        sourceArray: function sourceArray() {
            var folder = this.spritespin[this.activeColor].folder;
            var ext = this.spritespin[this.activeColor].extension;
            var result = [];
            for (var i = 0; i < 36; i++) {
                result.push(folder + '/' + i + '.' + ext);
            }

            return result;
        },
        colors: function colors() {
            var colors = [];

            for (var group in this.colorsAPI) {
                for (var color in this.colorsAPI[group]) {
                    colors.push(this.colorsAPI[group][color]);
                }
            }

            return colors;
        },
        currentColor: function currentColor() {
            for (var i = 0; i < this.colors.length; i++) {
                if (this.colors[i].id === this.activeColor) {
                    return this.colors[i].nameRus + ' / ' + this.colors[i].name + ', ' + this.priceFormat(this.colors[i].cost);
                }
            }
        },
        preview: function preview() {
            if (this.carId == 16 && this.activeColorObj) {
                return this.activeColorObj.carImage;
            }
            if (this.prevColor !== 0 && this.isInit && this.isFirstLoaded) {
                return this.spritespin[this.prevColor].folder + '/' + this.frame + '.' + this.spritespin[this.prevColor].extension;
            }
            if (this.activeColor !== 0 && !this.isLoaded) {
                return this.spritespin[this.activeColor].folder + '/' + this.frame + '.' + this.spritespin[this.activeColor].extension;
            }
            if (this.activeColor === 0) {
                return '';
            }
        },
        progressFormatted: function progressFormatted() {
            return Math.round(this.progress) > 100 ? 100 : Math.round(this.progress);
        }
    },
    methods: {
        set360: function set360() {
            var that = this;

            $("#spritespin").spritespin('destroy');

            $("#spritespin").spritespin({
                source: that.sourceArray,
                animate: false,
                //behavior: 'drag',
                frames: 36,
                frameTime: 40,
                frame: that.frame,
                lanes: 1,
                //mods: ['drag', '360'],
                module: null,
                renderer: 'canvas',
                reverse: false,
                scrollThreshold: 500,
                responsive: true,
                onLoad: function onLoad() {
                    that.isLoaded = true;
                    that.isFirstLoaded = true;
                },
                onFrame: function onFrame() {
                    that.frame = that.spritespinAPI.data.frame;
                    that.lastFrameSrc = that.spritespinAPI.data.source[that.frame];
                },
                onProgress: function onProgress() {
                    that.progress += 100 / 36;
                }
            });

            this.spritespinAPI = $("#spritespin").spritespin('api');
        },
        getData: function getData() {
            var that = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.$store.state.API.CAR + this.carId).then(function (response) {
                that.currentCar = response.data;
                that.colorsAPI = response.data.exterior.colors.groups;
                that.spritespin = response.data.exterior.spritespin;

                var activeColor = 0;

                if (typeof that.defaultColor !== 'undefined') {
                    activeColor = +that.defaultColor;
                } else {
                    activeColor = response.data.exterior.colors.defaultColor;
                }

                for (var group in that.colorsAPI) {
                    for (var color in that.colorsAPI[group]) {
                        if (that.colorsAPI[group][color].id === activeColor) {
                            that.setColor(that.colorsAPI[group][color]);
                        }
                    }
                }

                that.success = true;
            }).catch(function (error) {
                that.success = false;
                that.$root.$emit('notify', { type: 'error', text: 'Ошибка загрузки данных, повторите попытку позднее' });
                console.log(error);
            });
        },
        prev: function prev() {
            this.spritespinAPI.prevFrame();
        },
        next: function next() {
            this.spritespinAPI.nextFrame();
        },
        setColor: function setColor(color) {
            this.prevColor = this.activeColor;
            this.activeColor = color.id;
            this.activeColorObj = color;
        },
        init360: function init360() {
            if (!this.isInit && this.carId != 16) {
                this.isInit = true;
                this.set360();
                //this.preloader();
            }
        },
        preloader: function preloader() {
            // var t = new TimelineMax();

            // t
            //     .to(this, 2, {
            //         progress: 99
            //     })
        },
        priceFormat: function priceFormat(value) {
            return value.toString().replace(/\D/g, '').replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' ') + ' ₽';
        }
    },
    mounted: function mounted() {
        var that = this;

        this.getData();
        this.$nextTick(function () {});
    },
    watch: {
        activeColor: function activeColor() {
            if (this.isInit) {
                this.isLoaded = false;
                this.progress = 0;
                this.set360();
                //this.preloader();
            }
        }
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.view {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 43px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 54px;\n  height: 100%;\n}\n.view__title {\n    display: block;\n    text-align: center;\n}\n.view__body {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    position: relative;\n    margin: 0 auto;\n    max-width: 910px;\n    width: 100%;\n}\n.view__body::after {\n      content: '';\n      display: block;\n      top: 0;\n      left: 0;\n      padding-bottom: 45%;\n}\n.view__body #spritespin {\n      position: absolute !important;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n.view__back {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: 100%;\n}\n.view__nav {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 0;\n}\n.view__next, .view__prev {\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.view__next svg, .view__prev svg {\n      stroke: #000;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.view__next:hover svg, .view__prev:hover svg {\n      stroke: #B7B7B7;\n}\n.view__preloader {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    width: 88px;\n    height: 88px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    cursor: pointer;\n}\n.view__preloader img {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n}\n.view__progress {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 88px;\n    font-size: 20px;\n    color: #fff;\n    font-weight: 500;\n    text-align: center;\n}\n.view__bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.colors__current {\n  font-size: 2rem;\n  line-height: 1.2;\n  font-weight: 500;\n  color: #000000;\n  margin-bottom: 20px;\n}\n.colors__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.colors__color {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.colors__color::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -7px;\n    right: -4px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    background-image: url(\"/images/icons/check.svg\");\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: 50%;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.colors__color:not(:last-of-type) {\n    margin-right: 8px;\n}\n.colors__color.active::after {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.preloader-arrow-enter {\n  opacity: 0;\n}\n.preloader-leave-active {\n  opacity: 0;\n}\n@media only screen and (max-width: 1262px) {\n.view {\n    padding: 40px;\n}\n.view__bottom {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n.view__button {\n      margin-top: 40px;\n}\n.colors {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 767px) {\n.view {\n    padding: 31px 16px 40px 16px;\n}\n.view__button {\n      width: 100%;\n      margin-top: 32px;\n}\n.view__preloader {\n      width: 48px;\n      height: 48px;\n}\n.view__progress {\n      font-size: 14px;\n      line-height: 48px;\n}\n.colors__current {\n    font-size: 16px;\n    margin-bottom: 0;\n}\n.colors__list {\n    overflow: auto;\n    padding-top: 20px;\n    min-width: 100%;\n    margin-right: -16px;\n}\n.colors__color {\n    width: 48px;\n    height: 48px;\n    margin-right: 8px;\n}\n}\n", ""]);

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

/***/ "./node_modules/spritespin/release/src/api/common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
__WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */]({
    // Gets a value indicating whether the animation is currently running.
    isPlaying: function () {
        return __WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](this.data).handler != null;
    },
    // Gets a value indicating whether the animation looping is enabled.
    isLooping: function () {
        return this.data.loop;
    },
    // Starts/Stops the animation playback
    toggleAnimation: function () {
        if (this.isPlaying()) {
            this.stopAnimation();
        }
        else {
            this.startAnimation();
        }
    },
    // Stops animation playback
    stopAnimation: function () {
        this.data.animate = false;
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](this.data);
    },
    // Starts animation playback
    startAnimation: function () {
        this.data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](this.data);
    },
    // Sets a value indicating whether the animation should be looped or not.
    // This might start the animation (if the 'animate' data attribute is set to true)
    loop: function (value) {
        this.data.loop = value;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](this.data);
        return this;
    },
    // Gets the current frame number
    currentFrame: function () {
        return this.data.frame;
    },
    // Updates SpriteSpin to the specified frame.
    updateFrame: function (frame) {
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](this.data, frame);
        return this;
    },
    // Skips the given number of frames
    skipFrames: function (step) {
        var data = this.data;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + (data.reverse ? -step : +step));
        return this;
    },
    // Updates SpriteSpin so that the next frame is shown
    nextFrame: function () {
        return this.skipFrames(1);
    },
    // Updates SpriteSpin so that the previous frame is shown
    prevFrame: function () {
        return this.skipFrames(-1);
    },
    // Starts the animations that will play until the given frame number is reached
    // options:
    //   force [boolean] starts the animation, even if current frame is the target frame
    //   nearest [boolean] animates to the direction with minimum distance to the target frame
    playTo: function (frame, options) {
        var data = this.data;
        options = options || {};
        if (!options.force && data.frame === frame) {
            return;
        }
        if (options.nearest) {
            // distance to the target frame
            var a = frame - data.frame;
            // distance to last frame and the to target frame
            var b = frame > data.frame ? a - data.frames : a + data.frames;
            // minimum distance
            var c = Math.abs(a) < Math.abs(b) ? a : b;
            data.reverse = c < 0;
        }
        data.animate = true;
        data.loop = false;
        data.stopFrame = frame;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
        return this;
    }
});
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/api/fullscreen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exitFullscreen */
/* unused harmony export fullscreenEnabled */
/* unused harmony export fullscreenElement */
/* unused harmony export isFullscreen */
/* unused harmony export toggleFullscreen */
/* unused harmony export requestFullscreen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


function pick(target, names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (target[name_1] || name_1 in target) {
            return name_1;
        }
    }
    return names[0];
}
var browser = {
    requestFullscreen: pick(document.documentElement, [
        'requestFullscreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
    ]),
    exitFullscreen: pick(document, [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen'
    ]),
    fullscreenElement: pick(document, [
        'fullscreenElement',
        'webkitFullscreenElement',
        'webkitCurrentFullScreenElement',
        'mozFullScreenElement',
        'msFullscreenElement'
    ]),
    fullscreenEnabled: pick(document, [
        'fullscreenEnabled',
        'webkitFullscreenEnabled',
        'mozFullScreenEnabled',
        'msFullscreenEnabled'
    ]),
    fullscreenchange: pick(document, [
        'onfullscreenchange',
        'onwebkitfullscreenchange',
        'onmozfullscreenchange',
        'onMSFullscreenChange'
    ]).replace(/^on/, ''),
    fullscreenerror: pick(document, [
        'onfullscreenerror',
        'onwebkitfullscreenerror',
        'onmozfullscreenerror',
        'onMSFullscreenError'
    ]).replace(/^on/, '')
};
var changeEvent = browser.fullscreenchange + '.' + __WEBPACK_IMPORTED_MODULE_0__core__["i" /* namespace */] + '-fullscreen';
function unbindChangeEvent() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(document).unbind(changeEvent);
}
function bindChangeEvent(callback) {
    unbindChangeEvent();
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(document).bind(changeEvent, callback);
}
var orientationEvent = 'orientationchange.' + __WEBPACK_IMPORTED_MODULE_0__core__["i" /* namespace */] + '-fullscreen';
function unbindOrientationEvent() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(window).unbind(orientationEvent);
}
function bindOrientationEvent(callback) {
    unbindOrientationEvent();
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(window).bind(orientationEvent, callback);
}
function requestFullscreenNative(e) {
    e = e || document.documentElement;
    e[browser.requestFullscreen]();
}
function exitFullscreen() {
    return document[browser.exitFullscreen]();
}
function fullscreenEnabled() {
    return document[browser.fullscreenEnabled];
}
function fullscreenElement() {
    return document[browser.fullscreenElement];
}
function isFullscreen() {
    return !!fullscreenElement();
}
function toggleFullscreen(data, opts) {
    if (isFullscreen()) {
        this.apiRequestFullscreen(opts);
    }
    else {
        this.exitFullscreen();
    }
}
function requestFullscreen(data, opts) {
    opts = opts || {};
    var oWidth = data.width;
    var oHeight = data.height;
    var oSource = data.source;
    var oSize = data.sizeMode;
    var oResponsive = data.responsive;
    var enter = function () {
        data.width = window.screen.width;
        data.height = window.screen.height;
        data.source = (opts.source || oSource);
        data.sizeMode = opts.sizeMode || 'fit';
        data.responsive = false;
        Object(__WEBPACK_IMPORTED_MODULE_0__core__["b" /* boot */])(data);
    };
    var exit = function () {
        data.width = oWidth;
        data.height = oHeight;
        data.source = oSource;
        data.sizeMode = oSize;
        data.responsive = oResponsive;
        Object(__WEBPACK_IMPORTED_MODULE_0__core__["b" /* boot */])(data);
    };
    bindChangeEvent(function () {
        if (isFullscreen()) {
            enter();
            bindOrientationEvent(enter);
        }
        else {
            unbindChangeEvent();
            unbindOrientationEvent();
            exit();
        }
    });
    requestFullscreenNative(data.target[0]);
}
Object(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */])({
    fullscreenEnabled: fullscreenEnabled,
    fullscreenElement: fullscreenElement,
    exitFullscreen: exitFullscreen,
    toggleFullscreen: function (opts) {
        toggleFullscreen(this.data, opts);
    },
    requestFullscreen: function (opts) {
        requestFullscreen(this.data, opts);
    }
});
//# sourceMappingURL=fullscreen.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__("./node_modules/spritespin/release/src/api/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fullscreen__ = __webpack_require__("./node_modules/spritespin/release/src/api/fullscreen.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony export (immutable) */ __webpack_exports__["b"] = extendApi;
/**
 * @internal
 */
var Api = /** @class */ (function () {
    function Api(data) {
        this.data = data;
    }
    return Api;
}());

/**
 * Adds methods to the SpriteSpin api
 *
 * @public
 */
function extendApi(methods) {
    var api = Api.prototype;
    for (var key in methods) {
        if (methods.hasOwnProperty(key)) {
            if (api[key]) {
                throw new Error('API method is already defined: ' + key);
            }
            else {
                api[key] = methods[key];
            }
        }
    }
    return api;
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/boot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instances */
/* unused harmony export applyEvents */
/* harmony export (immutable) */ __webpack_exports__["a"] = boot;
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["b"] = createOrUpdate;
/* harmony export (immutable) */ __webpack_exports__["c"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./node_modules/spritespin/release/src/core/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playback__ = __webpack_require__("./node_modules/spritespin/release/src/core/playback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/core/plugins.js");





var $ = __WEBPACK_IMPORTED_MODULE_0__utils__["$"];
var counter = 0;
/**
 * Collection of all SpriteSpin instances
 */
var instances = {};
function pushInstance(data) {
    counter += 1;
    data.id = String(counter);
    instances[data.id] = data;
}
function popInstance(data) {
    delete instances[data.id];
}
function eachInstance(cb) {
    for (var id in instances) {
        if (instances.hasOwnProperty(id)) {
            cb(instances[id]);
        }
    }
}
var lazyinit = function () {
    // replace function with a noop
    // this logic must run only once
    lazyinit = function () { };
    function onEvent(eventName, e) {
        eachInstance(function (data) {
            for (var _i = 0, _a = data.plugins; _i < _a.length; _i++) {
                var module_1 = _a[_i];
                if (typeof module_1[eventName] === 'function') {
                    module_1[eventName].apply(data.target, [e, data]);
                }
            }
        });
    }
    function onResize() {
        eachInstance(function (data) {
            if (data.responsive) {
                boot(data);
            }
        });
    }
    var _loop_1 = function (eventName) {
        $(window.document).bind(eventName + '.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], function (e) {
            onEvent('document' + eventName, e);
        });
    };
    for (var _i = 0, eventNames_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* eventNames */]; _i < eventNames_1.length; _i++) {
        var eventName = eventNames_1[_i];
        _loop_1(eventName);
    }
    var resizeTimeout = null;
    $(window).on('resize', function () {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(onResize, 100);
    });
};
/**
 * (re)binds all spritespin events on the target element
 *
 * @internal
 */
function applyEvents(data) {
    var target = data.target;
    // Clear all SpriteSpin events on the target element
    __WEBPACK_IMPORTED_MODULE_0__utils__["unbind"](target);
    // disable all default browser behavior on the following events
    // mainly prevents image drag operation
    for (var _i = 0, eventsToPrevent_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* eventsToPrevent */]; _i < eventsToPrevent_1.length; _i++) {
        var eName = eventsToPrevent_1[_i];
        __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, __WEBPACK_IMPORTED_MODULE_0__utils__["prevent"]);
    }
    // Bind module functions to SpriteSpin events
    for (var _a = 0, _b = data.plugins; _a < _b.length; _a++) {
        var plugin = _b[_a];
        for (var _c = 0, eventNames_2 = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* eventNames */]; _c < eventNames_2.length; _c++) {
            var eName = eventNames_2[_c];
            __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, plugin[eName]);
        }
        for (var _d = 0, callbackNames_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* callbackNames */]; _d < callbackNames_1.length; _d++) {
            var eName = callbackNames_1[_d];
            __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, plugin[eName]);
        }
    }
    // bind auto start function to load event.
    __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, 'onLoad', function (e, d) {
        Object(__WEBPACK_IMPORTED_MODULE_3__playback__["a" /* applyAnimation */])(d);
    });
    // bind all user events that have been passed on initialization
    for (var _e = 0, callbackNames_2 = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* callbackNames */]; _e < callbackNames_2.length; _e++) {
        var eName = callbackNames_2[_e];
        __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, data[eName]);
    }
}
function applyMetrics(data) {
    if (!data.images) {
        data.metrics = [];
    }
    data.metrics = __WEBPACK_IMPORTED_MODULE_0__utils__["measure"](data.images, data);
    var spec = __WEBPACK_IMPORTED_MODULE_0__utils__["findSpecs"](data.metrics, data.frames, 0, 0);
    if (spec.sprite) {
        // TODO: try to remove frameWidth/frameHeight
        data.frameWidth = spec.sprite.width;
        data.frameHeight = spec.sprite.height;
    }
}
/**
 * Runs the boot process.
 *
 * @remarks
 * (re)initializes plugins, (re)initializes the layout, (re)binds events and loads source images.
 *
 * @internal
 */
function boot(data) {
    Object(__WEBPACK_IMPORTED_MODULE_4__plugins__["a" /* applyPlugins */])(data);
    applyEvents(data);
    Object(__WEBPACK_IMPORTED_MODULE_2__layout__["a" /* applyLayout */])(data);
    data.source = __WEBPACK_IMPORTED_MODULE_0__utils__["toArray"](data.source);
    data.loading = true;
    data.target
        .addClass('loading')
        .trigger('onInit.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    __WEBPACK_IMPORTED_MODULE_0__utils__["preload"]({
        source: data.source,
        preloadCount: data.preloadCount,
        progress: function (progress) {
            data.progress = progress;
            data.target.trigger('onProgress.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
        },
        complete: function (images) {
            data.images = images;
            data.loading = false;
            data.frames = data.frames || images.length;
            applyMetrics(data);
            Object(__WEBPACK_IMPORTED_MODULE_2__layout__["a" /* applyLayout */])(data);
            data.stage.show();
            data.target
                .removeClass('loading')
                .trigger('onLoad.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onFrame.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onDraw.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onComplete.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
        }
    });
}
/**
 * Creates a new SpriteSpin instance
 *
 * @public
 */
function create(options) {
    var _this = this;
    var target = options.target;
    // SpriteSpin is not initialized
    // Create default settings object and extend with given options
    var data = $.extend(true, {}, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* defaults */], options);
    // ensure source is set
    data.source = data.source || [];
    // ensure plugins are set
    data.plugins = data.plugins || [];
    // if image tags are contained inside this DOM element
    // use these images as the source files
    target.find('img').each(function () {
        if (!Array.isArray(data.source)) {
            data.source = [];
        }
        data.source.push($(_this).attr('src'));
    });
    // build inner html
    // <div>
    //   <div class='spritespin-stage'></div>
    //   <canvas class='spritespin-canvas'></canvas>
    // </div>
    target
        .empty()
        .addClass('spritespin-instance')
        .append("<div class='spritespin-stage'></div>");
    // add the canvas element if canvas rendering is enabled and supported
    if (data.renderer === 'canvas') {
        var canvas = document.createElement('canvas');
        if (!!(canvas.getContext && canvas.getContext('2d'))) {
            data.canvas = $(canvas).addClass('spritespin-canvas');
            data.context = canvas.getContext('2d');
            target.append(data.canvas);
            target.addClass('with-canvas');
        }
        else {
            // fallback to image rendering mode
            data.renderer = 'image';
        }
    }
    // setup references to DOM elements
    data.target = target;
    data.stage = target.find('.spritespin-stage');
    // store the data
    target.data(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    pushInstance(data);
    return data;
}
/**
 * Creates a new SpriteSpin instance, or updates an existing one
 *
 * @public
 */
function createOrUpdate(options) {
    lazyinit();
    var data = options.target.data(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */]);
    if (!data) {
        data = create(options);
    }
    else {
        $.extend(data, options);
    }
    boot(data);
    return data;
}
/**
 * Destroys the SpriteSpin instance
 *
 * @remarks
 * - stops running animation
 * - unbinds all events
 * - deletes the data on the target element
 *
 * @public
 */
function destroy(data) {
    popInstance(data);
    Object(__WEBPACK_IMPORTED_MODULE_3__playback__["d" /* stopAnimation */])(data);
    data.target
        .trigger('onDestroy', data)
        .html(null)
        .attr('style', null)
        .attr('unselectable', null)
        .removeClass(['spritespin-instance', 'with-canvas']);
    __WEBPACK_IMPORTED_MODULE_0__utils__["unbind"](data.target);
    data.target.removeData(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */]);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callbackNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return eventsToPrevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaults; });
/**
 * The namespace that is used to bind functions to DOM events and store the data object
 */
var namespace = 'spritespin';
/**
 * Event names that are recognized by SpriteSpin. A module can implement any of these and they will be bound
 * to the target element on which the plugin is called.
 */
var eventNames = [
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseover',
    'mouseleave',
    'mousewheel',
    'wheel',
    'click',
    'dblclick',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'selectstart',
    'gesturestart',
    'gesturechange',
    'gestureend'
];
/**
 *
 */
var callbackNames = [
    'onInit',
    'onProgress',
    'onLoad',
    'onFrameChanged',
    'onFrame',
    'onDraw',
    'onComplete',
    'onDestroy'
];
/**
 * Names of events for that the default behavior should be prevented.
 */
var eventsToPrevent = [
    'dragstart'
];
/**
 * Default set of SpriteSpin options. This also represents the majority of data attributes that are used during the
 * lifetime of a SpriteSpin instance. The data is stored inside the target DOM element on which the plugin is called.
 */
var defaults = {
    source: undefined,
    width: undefined,
    height: undefined,
    frames: undefined,
    framesX: undefined,
    lanes: 1,
    sizeMode: undefined,
    renderer: 'canvas',
    lane: 0,
    frame: 0,
    frameTime: 40,
    animate: true,
    retainAnimate: false,
    reverse: false,
    loop: true,
    stopFrame: 0,
    wrap: true,
    wrapLane: false,
    sense: 1,
    senseLane: undefined,
    orientation: 'horizontal',
    detectSubsampling: true,
    preloadCount: undefined,
    responsive: undefined,
    plugins: [
        '360',
        'drag'
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./node_modules/spritespin/release/src/core/api.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot__ = __webpack_require__("./node_modules/spritespin/release/src/core/boot.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__boot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__constants__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__("./node_modules/spritespin/release/src/core/input.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__("./node_modules/spritespin/release/src/core/layout.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playback__ = __webpack_require__("./node_modules/spritespin/release/src/core/playback.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/core/plugins.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__plugins__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery__ = __webpack_require__("./node_modules/spritespin/release/src/core/jquery.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInputState;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateInput;
/* harmony export (immutable) */ __webpack_exports__["b"] = resetInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");


/**
 * Gets the current input state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getInputState(data) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__state__["c" /* getState */])(data, 'input');
}
/**
 * Updates the input state using a mous or touch event.
 *
 * @public
 * @param e - The input event
 * @param data - The SpriteSpin instance data
 */
function updateInput(e, data) {
    var cursor = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getCursorPosition"])(e);
    var state = getInputState(data);
    // cache positions from previous frame
    state.oldX = state.currentX;
    state.oldY = state.currentY;
    state.currentX = cursor.x;
    state.currentY = cursor.y;
    // Fix old position.
    if (state.oldX === undefined || state.oldY === undefined) {
        state.oldX = state.currentX;
        state.oldY = state.currentY;
    }
    // Cache the initial click/touch position and store the frame number at which the click happened.
    // Useful for different behavior implementations. This must be restored when the click/touch is released.
    if (state.startX === undefined || state.startY === undefined) {
        state.startX = state.currentX;
        state.startY = state.currentY;
        state.clickframe = data.frame;
        state.clicklane = data.lane;
    }
    // Calculate the vector from start position to current pointer position.
    state.dX = state.currentX - state.startX;
    state.dY = state.currentY - state.startY;
    // Calculate the vector from last frame position to current pointer position.
    state.ddX = state.currentX - state.oldX;
    state.ddY = state.currentY - state.oldY;
    // Normalize vectors to range [-1:+1]
    state.ndX = state.dX / data.target.innerWidth();
    state.ndY = state.dY / data.target.innerHeight();
    state.nddX = state.ddX / data.target.innerWidth();
    state.nddY = state.ddY / data.target.innerHeight();
}
/**
 * Resets the input state.
 *
 * @public
 */
function resetInput(data) {
    var input = getInputState(data);
    input.startX = input.startY = undefined;
    input.currentX = input.currentY = undefined;
    input.oldX = input.oldY = undefined;
    input.dX = input.dY = 0;
    input.ddX = input.ddY = 0;
    input.ndX = input.ndY = 0;
    input.nddX = input.nddY = 0;
}
//# sourceMappingURL=input.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/jquery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./node_modules/spritespin/release/src/core/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot__ = __webpack_require__("./node_modules/spritespin/release/src/core/boot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");




function extension(option, value) {
    var $target = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["$"])(this);
    if (option === 'data') {
        return $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
    }
    if (option === 'api') {
        var data = $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
        data.api = data.api || new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */](data);
        return data.api;
    }
    if (option === 'destroy') {
        return $target.each(function () {
            var data = $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
            if (data) {
                Object(__WEBPACK_IMPORTED_MODULE_2__boot__["c" /* destroy */])(data);
            }
        });
    }
    if (arguments.length === 2 && typeof option === 'string') {
        option = (_a = {}, _a[option] = value, _a);
    }
    if (typeof option === 'object') {
        return Object(__WEBPACK_IMPORTED_MODULE_2__boot__["b" /* createOrUpdate */])(__WEBPACK_IMPORTED_MODULE_0__utils__["$"].extend(true, { target: $target }, option)).target;
    }
    throw new Error('Invalid call to spritespin');
    var _a;
}
__WEBPACK_IMPORTED_MODULE_0__utils__["$"].fn[__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]] = extension;
//# sourceMappingURL=jquery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");

/**
 * Applies css attributes to layout the SpriteSpin containers.
 *
 * @internal
 */
function applyLayout(data) {
    // disable selection
    data.target
        .attr('unselectable', 'on')
        .css({
        width: '',
        height: '',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none'
    });
    var size = data.responsive ? __WEBPACK_IMPORTED_MODULE_0__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_0__utils__["getOuterSize"](data);
    var layout = __WEBPACK_IMPORTED_MODULE_0__utils__["getInnerLayout"](data.sizeMode, __WEBPACK_IMPORTED_MODULE_0__utils__["getInnerSize"](data), size);
    // apply layout on target
    data.target.css({
        width: size.width,
        height: size.height,
        position: 'relative',
        overflow: 'hidden'
    });
    // apply layout on stage
    data.stage
        .css(layout)
        .hide();
    if (!data.canvas) {
        return;
    }
    // apply layout on canvas
    data.canvas.css(layout).hide();
    // apply pixel ratio on canvas
    data.canvasRatio = data.canvasRatio || __WEBPACK_IMPORTED_MODULE_0__utils__["pixelRatio"](data.context);
    if (typeof layout.width === 'number' && typeof layout.height === 'number') {
        data.canvas[0].width = (layout.width * data.canvasRatio) || size.width;
        data.canvas[0].height = (layout.height * data.canvasRatio) || size.height;
    }
    else {
        data.canvas[0].width = (size.width * data.canvasRatio);
        data.canvas[0].height = (size.height * data.canvasRatio);
    }
    // width and height must be set before calling scale
    data.context.scale(data.canvasRatio, data.canvasRatio);
}
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/playback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPlaybackState;
/* harmony export (immutable) */ __webpack_exports__["e"] = updateFrame;
/* harmony export (immutable) */ __webpack_exports__["d"] = stopAnimation;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyAnimation;
/* harmony export (immutable) */ __webpack_exports__["c"] = startAnimation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");



/**
 * Gets the playback state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getPlaybackState(data) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__state__["c" /* getState */])(data, 'playback');
}
function updateLane(data, lane) {
    data.lane = data.wrapLane
        ? Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(lane, 0, data.lanes - 1, data.lanes)
        : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["clamp"])(lane, 0, data.lanes - 1);
}
function updateAnimationFrame(data) {
    data.frame += (data.reverse ? -1 : 1);
    // wrap the frame value to fit in range [0, data.frames)
    data.frame = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(data.frame, 0, data.frames - 1, data.frames);
    // stop animation if loop is disabled and the stopFrame is reached
    if (!data.loop && (data.frame === data.stopFrame)) {
        stopAnimation(data);
    }
}
function updateInputFrame(data, frame) {
    data.frame = Number(frame);
    data.frame = data.wrap
        ? Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(data.frame, 0, data.frames - 1, data.frames)
        : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["clamp"])(data.frame, 0, data.frames - 1);
}
function updateAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler) {
        updateBefore(data);
        updateAnimationFrame(data);
        updateAfter(data);
    }
}
function updateBefore(data) {
    var state = getPlaybackState(data);
    state.lastFrame = data.frame;
    state.lastLane = data.lane;
}
function updateAfter(data) {
    var state = getPlaybackState(data);
    if (state.lastFrame !== data.frame || state.lastLane !== data.lane) {
        data.target.trigger('onFrameChanged.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    }
    data.target.trigger('onFrame.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    data.target.trigger('onDraw.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
}
/**
 * Updates the frame or lane number of the SpriteSpin data.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param frame - The frame number to set
 * @param lane - The lane number to set
 */
function updateFrame(data, frame, lane) {
    updateBefore(data);
    if (frame != null) {
        updateInputFrame(data, frame);
    }
    if (lane != null) {
        updateLane(data, lane);
    }
    updateAfter(data);
}
/**
 * Stops the running animation.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function stopAnimation(data) {
    data.animate = false;
    var state = getPlaybackState(data);
    if (state.handler != null) {
        window.clearInterval(state.handler);
        state.handler = null;
    }
}
/**
 * Starts animation playback if needed.
 *
 * @remarks
 * Starts animation playback if `animate` property is `true` and the animation is not yet running.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function applyAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler && (!data.animate || state.frameTime !== data.frameTime)) {
        stopAnimation(data);
    }
    if (data.animate && !state.handler) {
        state.frameTime = data.frameTime;
        state.handler = window.setInterval(function () { return updateAnimation(data); }, state.frameTime);
    }
}
/**
 * Starts the animation playback
 *
 * @remarks
 * Starts the animation playback and also sets the `animate` property to `true`
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function startAnimation(data) {
    data.animate = true;
    applyAnimation(data);
}
//# sourceMappingURL=playback.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/plugins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerPlugin;
/* unused harmony export registerModule */
/* unused harmony export getPlugin */
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPlugins;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");

var plugins = {};
/**
 * Registers a plugin.
 *
 * @remarks
 * Use this to add custom Rendering or Updating modules that can be addressed with the 'module' option.
 *
 * @public
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerPlugin(name, plugin) {
    if (plugins[name]) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["error"])("Plugin name \"" + name + "\" is already taken");
        return;
    }
    plugin = plugin || {};
    plugins[name] = plugin;
    return plugin;
}
/**
 * Registers a plugin.
 *
 * @public
 * @deprecated Use {@link registerPlugin} instead
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerModule(name, plugin) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"registerModule" is deprecated, use "registerPlugin" instead');
    registerPlugin(name, plugin);
}
/**
 * Gets an active plugin by name
 *
 * @internal
 * @param name - The name of the plugin
 */
function getPlugin(name) {
    return plugins[name];
}
/**
 * Replaces module names on given SpriteSpin data and replaces them with actual implementations.
 * @internal
 */
function applyPlugins(data) {
    fixPlugins(data);
    for (var i = 0; i < data.plugins.length; i += 1) {
        var name_1 = data.plugins[i];
        if (typeof name_1 !== 'string') {
            continue;
        }
        var plugin = getPlugin(name_1);
        if (!plugin) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["error"])('No plugin found with name ' + name_1);
            continue;
        }
        data.plugins[i] = plugin;
    }
}
function fixPlugins(data) {
    // tslint:disable no-string-literal
    if (data['mods']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"mods" option is deprecated, use "plugins" instead');
        data.plugins = data['mods'];
        delete data['mods'];
    }
    if (data['behavior']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"behavior" option is deprecated, use "plugins" instead');
        data.plugins.push(data['behavior']);
        delete data['behavior'];
    }
    if (data['module']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"module" option is deprecated, use "plugins" instead');
        data.plugins.push(data['module']);
        delete data['module'];
    }
}
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getState;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPluginState;
/* harmony export (immutable) */ __webpack_exports__["d"] = is;
/* harmony export (immutable) */ __webpack_exports__["a"] = flag;
/**
 * Gets a state object by name.
 * @internal
 * @param data - The SpriteSpin instance data
 * @param name - The name of the state object
 */
function getState(data, name) {
    data.state = data.state || {};
    data.state[name] = data.state[name] || {};
    return data.state[name];
}
/**
 * Gets a plugin state object by name.
 *
 * @remarks
 * Plugins should use this method to get or create a state object where they can
 * store any instance variables.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param name - The name of the plugin
 */
function getPluginState(data, name) {
    var state = getState(data, 'plugin');
    state[name] = state[name] || {};
    return state[name];
}
/**
 * Checks whether a flag is set. See {@link flag}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 */
function is(data, key) {
    return !!getState(data, 'flags')[key];
}
/**
 * Sets a flag value. See {@link is}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 * @param value - The value to set
 */
function flag(data, key, value) {
    getState(data, 'flags')[key] = !!value;
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Utils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* unused harmony reexport sourceArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./node_modules/spritespin/release/src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/index.js");



var Utils = __WEBPACK_IMPORTED_MODULE_1__utils__;


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_click__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-click.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_drag__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-drag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_hold__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-hold.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_swipe__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-swipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_wheel__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-wheel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/progress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__render_360__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-360.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_blur__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-blur.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__render_ease__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-ease.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__render_gallery__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-gallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__render_panorama__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-panorama.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__render_zoom__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-zoom.js");












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-click.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'click';
    function click(e, data) {
        if (data.loading || !data.stage.is(':visible')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var half, pos;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            pos = input.currentX - offset.left;
        }
        else {
            half = target.innerHeight() / 2;
            pos = input.currentY - offset.top;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + (pos > half ? 1 : -1));
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mouseup: click,
        touchend: click
    });
})();
//# sourceMappingURL=input-click.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-drag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'drag';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getAxis(data) {
        if (typeof data.orientation === 'number') {
            return data.orientation * Math.PI / 180;
        }
        if (data.orientation === 'horizontal') {
            return 0;
        }
        return Math.PI / 2;
    }
    function dragStart(e, data) {
        var state = getState(data);
        if (data.loading || __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging') || !data.stage.is(':visible')) {
            return;
        }
        // allow browser scroll only on double tap
        var now = new Date().getTime();
        if (state.startAt && (now - state.startAt > 200)) {
            e.preventDefault();
        }
        state.startAt = now;
        state.wasPlaying = !!__WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](data).handler;
        state.frame = data.frame || 0;
        state.lane = data.lane || 0;
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
    }
    function dragEnd(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
            __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
            if (data.retainAnimate && getState(data).wasPlaying) {
                __WEBPACK_IMPORTED_MODULE_0__core__["l" /* startAnimation */](data);
            }
        }
    }
    function drag(e, data) {
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var rad = getAxis(data);
        var sn = Math.sin(rad);
        var cs = Math.cos(rad);
        var x = ((input.nddX * cs - input.nddY * sn) * data.sense) || 0;
        var y = ((input.nddX * sn + input.nddY * cs) * (data.senseLane || data.sense)) || 0;
        // accumulate
        state.frame += data.frames * x;
        state.lane += data.lanes * y;
        // update spritespin
        var oldFrame = data.frame;
        var oldLane = data.lane;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, Math.floor(state.frame), Math.floor(state.lane));
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
    }
    function mousemove(e, data) {
        dragStart(e, data);
        drag(e, data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */]('drag', {
        name: 'drag',
        mousedown: dragStart,
        mousemove: drag,
        mouseup: dragEnd,
        documentmousemove: drag,
        documentmouseup: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */]('move', {
        name: 'move',
        mousemove: mousemove,
        mouseleave: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
})();
//# sourceMappingURL=input-drag.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-hold.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'hold';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function rememberOptions(data) {
        var state = getState(data);
        state.frameTime = data.frameTime;
        state.animate = data.animate;
        state.reverse = data.reverse;
    }
    function restoreOptions(data) {
        var state = getState(data);
        data.frameTime = state.frameTime;
        data.animate = state.animate;
        data.reverse = state.reverse;
    }
    function start(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'loading') || __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging') || !data.stage.is(':visible')) {
            return;
        }
        rememberOptions(data);
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    function stop(e, data) {
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
        restoreOptions(data);
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    function update(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var half, delta;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            delta = (input.currentX - offset.left - half) / half;
        }
        else {
            half = (data.height / 2);
            delta = (input.currentY - offset.top - half) / half;
        }
        data.reverse = delta < 0;
        delta = delta < 0 ? -delta : delta;
        data.frameTime = 80 * (1 - delta) + 20;
        if (((data.orientation === 'horizontal') && (input.dX < input.dY)) ||
            ((data.orientation === 'vertical') && (input.dX < input.dY))) {
            e.preventDefault();
        }
    }
    function onFrame(e, data) {
        data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mousedown: start,
        mousemove: update,
        mouseup: stop,
        mouseleave: stop,
        touchstart: start,
        touchmove: update,
        touchend: stop,
        touchcancel: stop,
        onFrame: onFrame
    });
})();
//# sourceMappingURL=input-hold.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-swipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'swipe';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.fling = getOption(data, 'swipeFling', 10);
        state.snap = getOption(data, 'swipeSnap', 0.50);
    }
    function start(e, data) {
        if (!data.loading && !__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
            __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        }
    }
    function update(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var frame = data.frame;
        var lane = data.lane;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
    }
    function end(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var frame = data.frame;
        var lane = data.lane;
        var snap = state.snap;
        var fling = state.fling;
        var dS, dF;
        if (data.orientation === 'horizontal') {
            dS = input.ndX;
            dF = input.ddX;
        }
        else {
            dS = input.ndY;
            dF = input.ddY;
        }
        if (dS >= snap || dF >= fling) {
            frame = data.frame - 1;
        }
        else if (dS <= -snap || dF <= -fling) {
            frame = data.frame + 1;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        mousedown: start,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchstart: start,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();
//# sourceMappingURL=input-swipe.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-wheel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'wheel';
    function wheel(e, data) {
        if (!data.loading && data.stage.is(':visible')) {
            e.preventDefault();
            var we = e.originalEvent;
            var signX = we.deltaX === 0 ? 0 : we.deltaX > 0 ? 1 : -1;
            var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
            __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + signY, data.lane + signX);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        wheel: wheel
    });
})();
//# sourceMappingURL=input-wheel.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/progress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var template = "\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n";
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    var NAME = 'progress';
    function onInit(e, data) {
        var state = getState(data);
        if (!state.stage) {
            state.stage = __WEBPACK_IMPORTED_MODULE_1__utils__["$"](template);
            state.stage.appendTo(data.target);
        }
        state.stage.find('.spritespin-progress-label')
            .text("0%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: "0%"
        });
        state.stage.hide().fadeIn();
    }
    function onProgress(e, data) {
        var state = getState(data);
        state.stage.find('.spritespin-progress-label')
            .text(data.progress.percent + "%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: data.progress.percent + "%"
        });
    }
    function onLoad(e, data) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["$"](getState(data).stage).fadeOut();
    }
    function onDestroy(e, data) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["$"](getState(data).stage).remove();
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onInit: onInit,
        onProgress: onProgress,
        onLoad: onLoad,
        onDestroy: onDestroy
    });
})();
//# sourceMappingURL=progress.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-360.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var floor = Math.floor;
    var NAME = '360';
    function onLoad(e, data) {
        data.stage.find('.spritespin-frames').detach();
        if (data.renderer === 'image') {
            $(data.images).addClass('spritespin-frames').appendTo(data.stage);
        }
    }
    function onDraw(e, data) {
        var specs = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, data.frame, data.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (data.renderer === 'canvas') {
            data.canvas.show();
            var w = data.canvas[0].width / data.canvasRatio;
            var h = data.canvas[0].height / data.canvasRatio;
            data.context.clearRect(0, 0, w, h);
            data.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
            return;
        }
        var scaleX = data.stage.innerWidth() / sprite.sampledWidth;
        var scaleY = data.stage.innerHeight() / sprite.sampledHeight;
        var top = Math.floor(-sprite.sampledY * scaleY);
        var left = Math.floor(-sprite.sampledX * scaleX);
        var width = Math.floor(sheet.sampledWidth * scaleX);
        var height = Math.floor(sheet.sampledHeight * scaleY);
        if (data.renderer === 'background') {
            data.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
            return;
        }
        $(data.images).hide();
        $(image).show().css({
            position: 'absolute',
            top: top,
            left: left,
            'max-width': 'initial',
            width: width,
            height: height
        });
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();
//# sourceMappingURL=render-360.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-blur.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'blur';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.canvas = state.canvas || __WEBPACK_IMPORTED_MODULE_1__utils__["$"]("<canvas class='blur-layer'></canvas>");
        state.context = state.context || state.canvas[0].getContext('2d');
        state.steps = state.steps || [];
        state.fadeTime = Math.max(getOption(data, 'blurFadeTime', 200), 1);
        state.frameTime = Math.max(getOption(data, 'blurFrameTime', data.frameTime), 16);
        state.trackTime = null;
        state.cssBlur = !!getOption(data, 'blurCss', false);
        var inner = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerSize"](data);
        var outer = data.responsive ? __WEBPACK_IMPORTED_MODULE_1__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_1__utils__["getOuterSize"](data);
        var css = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerLayout"](data.sizeMode, inner, outer);
        state.canvas[0].width = data.width * data.canvasRatio;
        state.canvas[0].height = data.height * data.canvasRatio;
        state.canvas.css(css).show();
        state.context.scale(data.canvasRatio, data.canvasRatio);
        data.target.append(state.canvas);
    }
    function onFrame(e, data) {
        var state = getState(data);
        trackFrame(data);
        if (state.timeout == null) {
            loop(data);
        }
    }
    function trackFrame(data) {
        var state = getState(data);
        var ani = __WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](data);
        // distance between frames
        var d = Math.abs(data.frame - ani.lastFrame);
        // shortest distance
        d = d >= data.frames / 2 ? data.frames - d : d;
        state.steps.unshift({
            frame: data.frame,
            lane: data.lane,
            live: 1,
            step: state.frameTime / state.fadeTime,
            d: d,
            alpha: 0
        });
    }
    var toRemove = [];
    function removeOldFrames(frames) {
        toRemove.length = 0;
        for (var i = 0; i < frames.length; i += 1) {
            if (frames[i].alpha <= 0) {
                toRemove.push(i);
            }
        }
        for (var _i = 0, toRemove_1 = toRemove; _i < toRemove_1.length; _i++) {
            var item = toRemove_1[_i];
            frames.splice(item, 1);
        }
    }
    function loop(data) {
        var state = getState(data);
        state.timeout = window.setTimeout(function () { tick(data); }, state.frameTime);
    }
    function killLoop(data) {
        var state = getState(data);
        window.clearTimeout(state.timeout);
        state.timeout = null;
    }
    function applyCssBlur(canvas, d) {
        var amount = Math.min(Math.max((d / 2) - 4, 0), 2.5);
        var blur = "blur(" + amount + "px)";
        canvas.css({
            '-webkit-filter': blur,
            filter: blur
        });
    }
    function clearFrame(data, state) {
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        // state.context.clearRect(0, 0, w, h)
    }
    function drawFrame(data, state, step) {
        if (step.alpha <= 0) {
            return;
        }
        var specs = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, step.frame, step.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (image.complete === false) {
            return;
        }
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        state.context.globalAlpha = step.alpha;
        state.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
    }
    function tick(data) {
        var state = getState(data);
        killLoop(data);
        if (!state.context) {
            return;
        }
        var d = 0;
        clearFrame(data, state);
        state.context.clearRect(0, 0, data.width, data.height);
        for (var _i = 0, _a = state.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            step.live = Math.max(step.live - step.step, 0);
            step.alpha = Math.max(step.live - 0.25, 0);
            drawFrame(data, state, step);
            d += step.alpha + step.d;
        }
        if (state.cssBlur) {
            applyCssBlur(state.canvas, d);
        }
        removeOldFrames(state.steps);
        if (state.steps.length) {
            loop(data);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        onFrameChanged: onFrame
    });
})();
//# sourceMappingURL=render-blur.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-ease.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var max = Math.max;
    var min = Math.min;
    var NAME = 'ease';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.maxSamples = max(getOption(data, 'easeMaxSamples', 5), 0);
        state.damping = max(min(getOption(data, 'easeDamping', 0.9), 0.999), 0);
        state.abortTime = max(getOption(data, 'easeAbortTime', 250), 16);
        state.updateTime = max(getOption(data, 'easeUpdateTime', data.frameTime), 16);
        state.samples = [];
        state.steps = [];
    }
    function update(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            killLoop(data);
            sampleInput(data);
        }
    }
    function end(e, data) {
        var state = getState(data);
        var samples = state.samples;
        var last;
        var lanes = 0;
        var frames = 0;
        var time = 0;
        for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
            var sample = samples_1[_i];
            if (!last) {
                last = sample;
                continue;
            }
            var dt = sample.time - last.time;
            if (dt > state.abortTime) {
                lanes = frames = time = 0;
                return killLoop(data);
            }
            frames += sample.frame - last.frame;
            lanes += sample.lane - last.lane;
            time += dt;
            last = sample;
        }
        samples.length = 0;
        if (!time) {
            return;
        }
        state.lane = data.lane;
        state.lanes = 0;
        state.laneStep = lanes / time * state.updateTime;
        state.frame = data.frame;
        state.frames = 0;
        state.frameStep = frames / time * state.updateTime;
        loop(data);
    }
    function sampleInput(data) {
        var state = getState(data);
        // add a new sample
        state.samples.push({
            time: new Date().getTime(),
            frame: data.frame,
            lane: data.lane
        });
        // drop old samples
        while (state.samples.length > state.maxSamples) {
            state.samples.shift();
        }
    }
    function killLoop(data) {
        var state = getState(data);
        if (state.handler != null) {
            window.clearTimeout(state.handler);
            state.handler = null;
        }
    }
    function loop(data) {
        var state = getState(data);
        state.handler = window.setTimeout(function () { tick(data); }, state.updateTime);
    }
    function tick(data) {
        var state = getState(data);
        state.lanes += state.laneStep;
        state.frames += state.frameStep;
        state.laneStep *= state.damping;
        state.frameStep *= state.damping;
        var frame = Math.floor(state.frame + state.frames);
        var lane = Math.floor(state.lane + state.lanes);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            killLoop(data);
        }
        else if (Math.abs(state.frameStep) > 0.005 || Math.abs(state.laneStep) > 0.005) {
            loop(data);
        }
        else {
            killLoop(data);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();
//# sourceMappingURL=render-ease.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-gallery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'gallery';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function load(e, data) {
        var state = getState(data);
        state.images = [];
        state.offsets = [];
        state.frame = data.frame;
        state.speed = getOption(data, 'gallerySpeed', 500);
        state.opacity = getOption(data, 'galleryOpacity', 0.25);
        state.stage = getOption(data, 'galleryStage', __WEBPACK_IMPORTED_MODULE_1__utils__["$"]('<div></div>'));
        state.stage.empty().addClass('gallery-stage').prependTo(data.stage);
        var size = 0;
        for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
            var image = _a[_i];
            var naturalSize = __WEBPACK_IMPORTED_MODULE_1__utils__["naturalSize"](image);
            var scale = data.height / naturalSize.height;
            var img = __WEBPACK_IMPORTED_MODULE_1__utils__["$"](image);
            state.stage.append(img);
            state.images.push(img);
            state.offsets.push(-size + (data.width - image.width * scale) / 2);
            size += data.width;
            img.css({
                'max-width': 'initial',
                opacity: state.opacity,
                width: data.width,
                height: data.height
            });
        }
        var innerSize = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerSize"](data);
        var outerSize = data.responsive ? __WEBPACK_IMPORTED_MODULE_1__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_1__utils__["getOuterSize"](data);
        var layout = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerLayout"](data.sizeMode, innerSize, outerSize);
        state.stage.css(layout).css({ width: size, left: state.offsets[state.frame] });
        state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
    }
    function draw(e, data) {
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var isDragging = __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging');
        if (state.frame !== data.frame && !isDragging) {
            state.stage.stop(true, false).animate({ left: state.offsets[data.frame] }, { duration: state.speed });
            state.images[state.frame].animate({ opacity: state.opacity }, { duration: state.speed });
            state.frame = data.frame;
            state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
            state.stage.animate({ left: state.offsets[state.frame] });
        }
        else if (isDragging || state.dX !== input.dX) {
            state.dX = input.dX;
            state.ddX = input.ddX;
            state.stage.stop(true, true).css({ left: state.offsets[state.frame] + state.dX });
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: load,
        onDraw: draw
    });
})();
//# sourceMappingURL=render-gallery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-panorama.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'panorama';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function onLoad(e, data) {
        var state = getState(data);
        var sprite = data.metrics[0];
        if (!sprite) {
            return;
        }
        if (data.orientation === 'horizontal') {
            state.scale = data.target.innerHeight() / sprite.sampledHeight;
            data.frames = sprite.sampledWidth;
        }
        else {
            state.scale = data.target.innerWidth() / sprite.sampledWidth;
            data.frames = sprite.sampledHeight;
        }
        var width = Math.floor(sprite.sampledWidth * state.scale);
        var height = Math.floor(sprite.sampledHeight * state.scale);
        data.stage.css({
            'background-image': "url(" + data.source[sprite.id] + ")",
            'background-repeat': 'repeat-both',
            // set custom background size to enable responsive rendering
            '-webkit-background-size': width + "px " + height + "px",
            '-moz-background-size': width + "px " + height + "px",
            '-o-background-size': width + "px " + height + "px",
            'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
        });
    }
    function onDraw(e, data) {
        var state = getState(data);
        var px = data.orientation === 'horizontal' ? 1 : 0;
        var py = px ? 0 : 1;
        var offset = data.frame % data.frames;
        var left = Math.round(px * offset * state.scale);
        var top = Math.round(py * offset * state.scale);
        data.stage.css({ 'background-position': left + "px " + top + "px" });
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();
//# sourceMappingURL=render-panorama.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'zoom';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function onInit(e, data) {
        var state = getState(data);
        state.source = getOption(data, 'zoomSource', data.source);
        state.doubleClickTime = getOption(data, 'zoomDoubleClickTime', 500);
        state.stage = state.stage || __WEBPACK_IMPORTED_MODULE_1__utils__["$"]("<div class='zoom-stage'></div>");
        state.stage.css({
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute'
        })
            .appendTo(data.target)
            .hide();
    }
    function onDestroy(e, data) {
        var state = getState(data);
        if (state.stage) {
            state.stage.remove();
            delete state.stage;
        }
    }
    function updateInput(e, data) {
        var state = getState(data);
        if (!state.stage.is(':visible')) {
            return;
        }
        e.preventDefault();
        // hack into drag/move module and disable dragging
        // prevents frame change during zoom mode
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        // grab touch/cursor position
        var cursor = __WEBPACK_IMPORTED_MODULE_1__utils__["getCursorPosition"](e);
        // normalize cursor position into [0:1] range
        var x = cursor.x / data.width;
        var y = cursor.y / data.height;
        if (state.oldX == null) {
            state.oldX = x;
            state.oldY = y;
        }
        if (state.currentX == null) {
            state.currentX = x;
            state.currentY = y;
        }
        // calculate move delta since last frame and remember current position
        var dx = x - state.oldX;
        var dy = y - state.oldY;
        state.oldX = x;
        state.oldY = y;
        // invert drag direction for touch events to enable 'natural' scrolling
        if (e.type.match(/touch/)) {
            dx = -dx;
            dy = -dy;
        }
        // accumulate display coordinates
        state.currentX = __WEBPACK_IMPORTED_MODULE_1__utils__["clamp"](state.currentX + dx, 0, 1);
        state.currentY = __WEBPACK_IMPORTED_MODULE_1__utils__["clamp"](state.currentY + dy, 0, 1);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame, data.lane);
    }
    function onClick(e, data) {
        e.preventDefault();
        var state = getState(data);
        // simulate double click
        var clickTime = new Date().getTime();
        if (!state.clickTime) {
            // on first click
            state.clickTime = clickTime;
            return;
        }
        // on second click
        var timeDelta = clickTime - state.clickTime;
        if (timeDelta > state.doubleClickTime) {
            // took too long, back to first click
            state.clickTime = clickTime;
            return;
        }
        // on valid double click
        state.clickTime = undefined;
        if (toggleZoom(data)) {
            updateInput(e, data);
        }
    }
    function onMove(e, data) {
        var state = getState(data);
        if (state.stage.is(':visible')) {
            updateInput(e, data);
        }
    }
    function onDraw(e, data) {
        var state = getState(data);
        // calculate the frame index
        var index = data.lane * data.frames + data.frame;
        // get the zoom image. Use original frames as fallback. This won't work for spritesheets
        var source = state.source[index];
        var spec = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, data.frame, data.lane);
        // get display position
        var x = state.currentX;
        var y = state.currentY;
        // fallback to centered position
        if (x == null) {
            x = state.currentX = 0.5;
            y = state.currentY = 0.5;
        }
        if (source) {
            // scale up from [0:1] to [0:100] range
            x = Math.floor(x * 100);
            y = Math.floor(y * 100);
            // update background image and position
            state.stage.css({
                'background-repeat': 'no-repeat',
                'background-image': "url('" + source + "')",
                'background-position': x + "% " + y + "%"
            });
        }
        else if (spec.sheet && spec.sprite) {
            var sprite = spec.sprite;
            var sheet = spec.sheet;
            var src = data.source[sheet.id];
            var left = -Math.floor(sprite.sampledX + x * (sprite.sampledWidth - data.width));
            var top_1 = -Math.floor(sprite.sampledY + y * (sprite.sampledHeight - data.height));
            var width = sheet.sampledWidth;
            var height = sheet.sampledHeight;
            state.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top_1 + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
        }
    }
    function toggleZoom(data) {
        var state = getState(data);
        if (!state.stage) {
            throw new Error('zoom module is not initialized or is not available.');
        }
        if (state.stage.is(':visible')) {
            state.stage.fadeOut();
            data.stage.fadeIn();
        }
        else {
            state.stage.fadeIn();
            data.stage.fadeOut();
            return true;
        }
        return false;
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mousedown: onClick,
        touchstart: onClick,
        mousemove: onMove,
        touchmove: onMove,
        onInit: onInit,
        onDestroy: onDestroy,
        onDraw: onDraw
    });
    __WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */]({
        toggleZoom: function () { toggleZoom(this.data); } // tslint:disable-line
    });
})();
//# sourceMappingURL=render-zoom.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/cursor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCursorPosition;
function getCursorPosition(event) {
    var touches = event.touches;
    var source = event;
    // jQuery Event normalization does not preserve the 'event.touches'
    // try to grab touches from the original event
    if (event.touches === undefined && event.originalEvent !== undefined) {
        touches = event.originalEvent.touches;
    }
    // get current touch or mouse position
    if (touches !== undefined && touches.length > 0) {
        source = touches[0];
    }
    return {
        x: source.clientX || 0,
        y: source.clientY || 0
    };
}
//# sourceMappingURL=cursor.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/detectSubsampling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectSubsampling;
var canvas;
var context;
function detectionContext() {
    if (context) {
        return context;
    }
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    if (!canvas || !canvas.getContext) {
        return null;
    }
    context = canvas.getContext('2d');
    return context;
}
/**
 * Idea taken from https://github.com/stomita/ios-imagefile-megapixel
 * Detects whether the image has been sub sampled by the browser and does not have its original dimensions.
 * This method unfortunately does not work for images that have transparent background.
 */
function detectSubsampling(img, width, height) {
    if (!detectionContext()) {
        return false;
    }
    // sub sampling happens on images above 1 megapixel
    if (width * height <= 1024 * 1024) {
        return false;
    }
    // set canvas to 1x1 pixel size and fill it with magenta color
    canvas.width = canvas.height = 1;
    context.fillStyle = '#FF00FF';
    context.fillRect(0, 0, 1, 1);
    // render the image with a negative offset to the left so that it would
    // fill the canvas pixel with the top right pixel of the image.
    context.drawImage(img, -width + 1, 0);
    // check color value to confirm image is covering edge pixel or not.
    // if color still magenta, the image is assumed to be sub sampled.
    try {
        var dat = context.getImageData(0, 0, 1, 1).data;
        return (dat[0] === 255) && (dat[1] === 0) && (dat[2] === 255);
    }
    catch (err) {
        // avoids cross origin exception for chrome when code runs without a server
        return false;
    }
}
//# sourceMappingURL=detectSubsampling.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery__ = __webpack_require__("./node_modules/spritespin/release/src/utils/jquery.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$", function() { return __WEBPACK_IMPORTED_MODULE_0__jquery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cursor__ = __webpack_require__("./node_modules/spritespin/release/src/utils/cursor.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCursorPosition", function() { return __WEBPACK_IMPORTED_MODULE_1__cursor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectSubsampling__ = __webpack_require__("./node_modules/spritespin/release/src/utils/detectSubsampling.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detectSubsampling", function() { return __WEBPACK_IMPORTED_MODULE_2__detectSubsampling__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout__ = __webpack_require__("./node_modules/spritespin/release/src/utils/layout.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOuterSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getComputedSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInnerSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInnerLayout", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__measure__ = __webpack_require__("./node_modules/spritespin/release/src/utils/measure.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return __WEBPACK_IMPORTED_MODULE_4__measure__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findSpecs", function() { return __WEBPACK_IMPORTED_MODULE_4__measure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__naturalSize__ = __webpack_require__("./node_modules/spritespin/release/src/utils/naturalSize.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "naturalSize", function() { return __WEBPACK_IMPORTED_MODULE_5__naturalSize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preload__ = __webpack_require__("./node_modules/spritespin/release/src/utils/preload.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return __WEBPACK_IMPORTED_MODULE_6__preload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sourceArray__ = __webpack_require__("./node_modules/spritespin/release/src/utils/sourceArray.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sourceArray", function() { return __WEBPACK_IMPORTED_MODULE_7__sourceArray__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/utils.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "log", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "error", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prevent", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pixelRatio", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["g"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/jquery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
var $ = window.jQuery || window.$;
//# sourceMappingURL=jquery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getOuterSize;
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedSize;
/* harmony export (immutable) */ __webpack_exports__["c"] = getInnerSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = getInnerLayout;
/**
 *
 */
function getOuterSize(data) {
    var width = Math.floor(data.width || data.frameWidth || data.target.innerWidth());
    var height = Math.floor(data.height || data.frameHeight || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
function getComputedSize(data) {
    var size = getOuterSize(data);
    if (typeof window.getComputedStyle !== 'function') {
        return size;
    }
    var style = window.getComputedStyle(data.target[0]);
    if (!style.width) {
        return size;
    }
    size.width = Math.floor(Number(style.width.replace('px', '')));
    size.height = Math.floor(size.width / size.aspect);
    return size;
}
/**
 *
 */
function getInnerSize(data) {
    var width = Math.floor(data.frameWidth || data.width || data.target.innerWidth());
    var height = Math.floor(data.frameHeight || data.height || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
/**
 *
 */
function getInnerLayout(mode, inner, outer) {
    // get mode
    var isFit = mode === 'fit';
    var isFill = mode === 'fill';
    var isMatch = mode === 'stretch';
    // resulting layout
    var layout = {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden'
    };
    // no calculation here
    if (!mode || isMatch) {
        return layout;
    }
    // get size and aspect
    var aspectIsGreater = inner.aspect >= outer.aspect;
    // mode == original
    var width = inner.width;
    var height = inner.height;
    // keep aspect ratio but fit/fill into container
    if (isFit && aspectIsGreater || isFill && !aspectIsGreater) {
        width = outer.width;
        height = outer.width / inner.aspect;
    }
    if (isFill && aspectIsGreater || isFit && !aspectIsGreater) {
        height = outer.height;
        width = outer.height * inner.aspect;
    }
    // floor the numbers
    width = Math.floor(width);
    height = Math.floor(height);
    // position in center
    layout.width = width;
    layout.height = height;
    layout.top = Math.floor((outer.height - height) / 2);
    layout.left = Math.floor((outer.width - width) / 2);
    layout.right = layout.left;
    layout.bottom = layout.top;
    return layout;
}
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/measure.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = measure;
/* harmony export (immutable) */ __webpack_exports__["a"] = findSpecs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detectSubsampling__ = __webpack_require__("./node_modules/spritespin/release/src/utils/detectSubsampling.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__naturalSize__ = __webpack_require__("./node_modules/spritespin/release/src/utils/naturalSize.js");


/**
 * Measures the image frames that are used in the given data object
 */
function measure(images, options) {
    if (images.length === 1) {
        return [measureSheet(images[0], options)];
    }
    else if (options.framesX && options.framesY) {
        return measureMutipleSheets(images, options);
    }
    else {
        return measureFrames(images, options);
    }
}
function measureSheet(image, options) {
    var result = { id: 0, sprites: [] };
    measureImage(image, options, result);
    var frames = options.frames;
    var framesX = Number(options.framesX) || frames;
    var framesY = Math.ceil(frames / framesX);
    var frameWidth = Math.floor(result.width / framesX);
    var frameHeight = Math.floor(result.height / framesY);
    var divisor = result.isSubsampled ? 2 : 1;
    for (var i = 0; i < frames; i++) {
        var x = (i % framesX) * frameWidth;
        var y = Math.floor(i / framesX) * frameHeight;
        result.sprites.push({
            id: i,
            x: x, y: y,
            width: frameWidth,
            height: frameHeight,
            sampledX: x / divisor,
            sampledY: y / divisor,
            sampledWidth: frameWidth / divisor,
            sampledHeight: frameHeight / divisor
        });
    }
    return result;
}
function measureFrames(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], { frames: 1, framesX: 1, detectSubsampling: options.detectSubsampling });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureMutipleSheets(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], {
            frames: undefined,
            framesX: options.framesX,
            framesY: options.framesY,
            detectSubsampling: options.detectSubsampling
        });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureImage(image, options, result) {
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__naturalSize__["a" /* naturalSize */])(image);
    result.isSubsampled = options.detectSubsampling && Object(__WEBPACK_IMPORTED_MODULE_0__detectSubsampling__["a" /* detectSubsampling */])(image, size.width, size.height);
    result.width = size.width;
    result.height = size.height;
    result.sampledWidth = size.width / (result.isSubsampled ? 2 : 1);
    result.sampledHeight = size.height / (result.isSubsampled ? 2 : 1);
    return result;
}
function findSpecs(metrics, frames, frame, lane) {
    var spriteId = lane * frames + frame;
    var sheetId = 0;
    var sprite = null;
    var sheet = null;
    while (true) {
        sheet = metrics[sheetId];
        if (!sheet) {
            break;
        }
        if (spriteId >= sheet.sprites.length) {
            spriteId -= sheet.sprites.length;
            sheetId++;
            continue;
        }
        sprite = sheet.sprites[spriteId];
        break;
    }
    return { sprite: sprite, sheet: sheet };
}
//# sourceMappingURL=measure.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/naturalSize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = naturalSize;
var img;
/**
 * gets the original width and height of an image element
 */
function naturalSize(image) {
    // for browsers that support naturalWidth and naturalHeight properties
    if (image.naturalWidth) {
        return {
            height: image.naturalHeight,
            width: image.naturalWidth
        };
    }
    // browsers that do not support naturalWidth and naturalHeight properties have to fall back to the width and
    // height properties. However, the image might have a css style applied so width and height would return the
    // css size. To avoid thet create a new Image object that is free of css rules and grab width and height
    // properties
    //
    // assume that the src has already been downloaded, so no onload callback is needed.
    img = img || new Image();
    img.src = image.src;
    return {
        height: img.height,
        width: img.width
    };
}
//# sourceMappingURL=naturalSize.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/preload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = preload;
function indexOf(element, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
}
function noop() {
    //
}
function preload(opts) {
    var src;
    var input = opts.source;
    src = typeof input === 'string' ? [input] : input;
    // const src: string[] =  ? [opts.source] : opts.source
    var images = [];
    var targetCount = (opts.preloadCount || src.length);
    var onInitiated = opts.initiated || noop;
    var onProgress = opts.progress || noop;
    var onComplete = opts.complete || noop;
    var count = 0;
    var completed = false;
    var firstLoaded = false;
    var tick = function () {
        count += 1;
        onProgress({
            index: indexOf(this, images),
            loaded: count,
            total: src.length,
            percent: Math.round((count / src.length) * 100)
        });
        firstLoaded = firstLoaded || (this === images[0]);
        if (firstLoaded && !completed && (count >= targetCount)) {
            completed = true;
            onComplete(images);
        }
    };
    for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
        var url = src_1[_i];
        var img = new Image();
        // push result
        images.push(img);
        // bind logic, dont care about abort/errors
        img.onload = img.onabort = img.onerror = tick;
        // begin load
        img.src = url;
    }
    onInitiated(images);
}
//# sourceMappingURL=preload.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/sourceArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sourceArray;
function padNumber(num, length, pad) {
    var result = String(num);
    while (result.length < length) {
        result = String(pad) + result;
    }
    return result;
}
/**
 * Generates an array of source strings
 *
 * @remarks
 * Takes a template string and generates an array of strings by interpolating {lane} and {frame} placeholders.
 *
 * ```
 * sourceArray('http://example.com/image_{frame}.jpg, { frame: [1, 3], digits: 2 })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 *
 * sourceArray('http://example.com/image_FRAME.jpg, { frame: [1, 3], digits: 2, framePlacer: 'FRAME' })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 * ```
 *
 * @param template - The template string
 * @param opts - Interpolation options
 *
 * @public
 */
function sourceArray(template, opts) {
    var digits = opts.digits || 2;
    var lPlacer = opts.lanePlacer || '{lane}';
    var fPlacer = opts.framePlacer || '{frame}';
    var fStart = 0;
    var fEnd = 0;
    if (opts.frame) {
        fStart = opts.frame[0];
        fEnd = opts.frame[1];
    }
    var lStart = 0;
    var lEnd = 0;
    if (opts.lane) {
        lStart = opts.lane[0];
        lEnd = opts.lane[1];
    }
    var result = [];
    for (var lane = lStart; lane <= lEnd; lane += 1) {
        for (var frame = fStart; frame <= fEnd; frame += 1) {
            result.push(template
                .replace(lPlacer, padNumber(lane, digits, '0'))
                .replace(fPlacer, padNumber(frame, digits, '0')));
        }
    }
    return result;
}
//# sourceMappingURL=sourceArray.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = noop;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return error; });
/* harmony export (immutable) */ __webpack_exports__["i"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["l"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["h"] = prevent;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;
/* harmony export (immutable) */ __webpack_exports__["j"] = unbind;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["g"] = pixelRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");

function noop() {
    // noop
}
function wrapConsole(type) {
    return console && console[type] ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.log.apply(console, args);
    } : noop;
}
var log = wrapConsole('log');
var warn = wrapConsole('warn');
var error = wrapConsole('error');
function toArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * clamps the given value by the given min and max values
 */
function clamp(value, min, max) {
    return (value > max ? max : (value < min ? min : value));
}
/**
 *
 */
function wrap(value, min, max, size) {
    while (value > max) {
        value -= size;
    }
    while (value < min) {
        value += size;
    }
    return value;
}
/**
 * prevents default action on the given event
 */
function prevent(e) {
    e.preventDefault();
    return false;
}
/**
 * Binds on the given target and event the given function.
 * The SpriteSpin namespace is attached to the event name
 */
function bind(target, event, func) {
    if (func) {
        target.bind(event + '.' + __WEBPACK_IMPORTED_MODULE_0__core_constants__["e" /* namespace */], function (e) {
            func.apply(target, [e, target.spritespin('data')]);
        });
    }
}
/**
 * Unbinds all SpriteSpin events from given target element
 */
function unbind(target) {
    target.unbind('.' + __WEBPACK_IMPORTED_MODULE_0__core_constants__["e" /* namespace */]);
}
/**
 * Checks if given object is a function
 */
function isFunction(fn) {
    return typeof fn === 'function';
}
function pixelRatio(context) {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
}
//# sourceMappingURL=utils.js.map

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9b6e269e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('h2', {
    staticClass: "view__title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "view__body",
    on: {
      "click": _vm.init360
    }
  }, [(!_vm.isLoaded) ? _c('div', {
    staticClass: "view__back",
    style: ({
      backgroundImage: 'url(' + _vm.preview + ')'
    })
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "view__spritespin",
    attrs: {
      "id": "spritespin"
    }
  }), _vm._v(" "), (_vm.carId != 16) ? _c('transition', {
    attrs: {
      "name": "preloader"
    }
  }, [(!_vm.isLoaded) ? _c('div', {
    staticClass: "view__preloader"
  }, [(!_vm.isInit) ? _c('img', {
    staticClass: "view__img",
    attrs: {
      "src": "/images/icons/360.svg"
    }
  }) : _c('div', {
    staticClass: "view__progress"
  }, [_vm._v(_vm._s(_vm.progressFormatted) + "%")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "view__nav"
  }, [_c('transition', {
    attrs: {
      "name": "preloader-arrow"
    }
  }, [(_vm.isInit) ? _c('a', {
    staticClass: "view__prev",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.prev($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M17 37L1.59055 19.6644C1.25376 19.2855 1.25376 18.7145 1.59055 18.3356L17 1",
      "stroke-width": "2"
    }
  })])]) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "preloader-arrow"
    }
  }, [(_vm.isInit) ? _c('a', {
    staticClass: "view__next",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.next($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1 1L16.4095 18.3356C16.7462 18.7145 16.7462 19.2855 16.4095 19.6644L1 37",
      "stroke-width": "2"
    }
  })])]) : _vm._e()])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "view__bottom"
  }, [_c('div', {
    staticClass: "colors"
  }, [_c('div', {
    staticClass: "colors__current"
  }, [_vm._v(_vm._s(_vm.currentColor))]), _vm._v(" "), _c('ul', {
    staticClass: "colors__list"
  }, _vm._l((_vm.colors), function(color) {
    return _c('li', {
      key: color.id,
      staticClass: "colors__color",
      class: {
        active: _vm.activeColor === color.id
      },
      style: ({
        backgroundColor: color.colorCode
      }),
      attrs: {
        "data-name": color.nameRus + ' / ' + color.name
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.setColor(color)
        }
      }
    })
  }), 0)]), _vm._v(" "), _c('a', {
    staticClass: "view__button df-button",
    attrs: {
      "target": "_blank",
      "href": '/configurator/car/' + _vm.carId
    }
  }, [_vm._v("Создать конфигурацию")])]), _vm._v(" "), _c('notifier')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b6e269e", module.exports)
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("73af2122", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View-360.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View-360.vue");
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

/***/ "./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9b6e269e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/CarPageTemplate/View-360.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] View-360.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b6e269e", Component.options)
  } else {
    hotAPI.reload("data-v-9b6e269e", Component.options)
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