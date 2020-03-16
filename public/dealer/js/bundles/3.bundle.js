webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "PresentationSection",
    components: { PresentationSimpleSlide: __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue___default.a, PresentationTabsSlide: __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue___default.a },
    props: ['title', 'background', 'backgroundMobile', 'slides'],
    data: function data() {
        return {
            id: 0,
            beforeEnter: false,
            enter: false,
            showIcons: false,
            selectedId: 0,
            anim: null,
            out: null,
            controller: null,
            windowWidth: 0
        };
    },

    computed: {
        slide: function slide() {
            var _this = this;

            return this.slides.filter(function (slide, i) {
                return i === _this.selectedId;
            });
        },
        backgroundTotal: function backgroundTotal() {
            if (this.windowWidth > 639) {
                return this.background;
            } else {
                return this.backgroundMobile;
            }
        }
    },
    methods: {
        currentComponent: function currentComponent(slide) {
            if (slide[0].tabs) {
                return 'PresentationTabsSlide';
            } else {
                return 'PresentationSimpleSlide';
            }
        },
        selectItem: function selectItem(index, zoom, cX, cY, r) {
            var back = this.$refs['back'],
                backHeight = $(back).outerHeight(),
                backWidth = $(back).outerWidth(),
                item = this.$refs['icon--' + index],
                r = r ? r : 0,
                itemY = $(item).position().top + r,
                itemX = $(item).position().left + r;

            this.selectedId = index;

            if (this.out) {
                this.out.kill();
                this.anim = null;
            }
            if (this.anim) {
                this.anim.kill();
                this.anim = null;
            }

            this.zoom(back, backWidth, backHeight, itemX, itemY, zoom, cX, cY);
        },
        nextItem: function nextItem() {
            if (this.selectedId < this.slides.length - 1) {
                this.selectItem(this.selectedId + 1, this.slides[this.selectedId + 1].zoom, this.slides[this.selectedId + 1].correct.x, this.slides[this.selectedId + 1].correct.y);
            } else {
                this.selectedId = 0;
                this.selectItem(this.selectedId, this.slides[this.selectedId].zoom, this.slides[this.selectedId].correct.x, this.slides[this.selectedId].correct.y);
            }
        },
        prevItem: function prevItem() {
            if (this.selectedId > 0) {
                this.selectItem(this.selectedId - 1, this.slides[this.selectedId - 1].zoom, this.slides[this.selectedId - 1].correct.x, this.slides[this.selectedId - 1].correct.y);
            } else {
                this.selectedId = this.slides.length - 1;
                this.selectItem(this.selectedId, this.slides[this.selectedId].zoom, this.slides[this.selectedId].correct.x, this.slides[this.selectedId].correct.y);
            }
        },
        close: function close() {
            this.anim.kill();

            this.exit();
        },
        zoom: function zoom(item, w, h, x, y, _zoom, cX, cY) {
            //Анимация приближения области
            //Вычисляем размер сдвига по осям X, Y
            var cX = cX ? cX : 0;
            var cY = cY ? cY : 0;
            var dX = -(w / 2) / 2 - (x - w / 2) - cX;
            var dY = h / 2 - y - cY;
            var that = this;

            this.anim = new TimelineMax({
                onComplete: function onComplete() {
                    that.showIcons = false;
                }
            });

            this.anim.to($(this.$refs['presentation__icons-holder']).find('.presentation__icon'), 0.3, {
                opacity: 0
            }).add('start').to(item, 1, {
                ease: Expo.easeOut,
                transform: 'translate(' + dX + 'px , ' + dY + 'px)'
            }, 'start').to($(this.$refs['presentation__left']), 1, {
                ease: Expo.easeOut,
                transform: 'scale(' + _zoom + ')'
            }, 'start').set(item, {
                willChange: 'auto'
            }).to($(this.$refs['presentation__aside']), 0.5, {
                transform: 'translateX(0)'
            }, 'start').to($(this.$refs['presentation__prev']), 0.3, {
                opacity: 1
            }, 'start+=0.5').to($(this.$refs['presentation__next']), 0.3, {
                opacity: 1
            }, 'start+=0.5').to($(this.$refs['presentation__close']), 0.3, {
                opacity: 1
            }, 'start+=0.5');
        },
        exit: function exit() {
            var item = this.$refs['back'];
            var that = this;

            this.out = new TimelineMax({
                onComplete: function onComplete() {
                    that.showIcons = true;
                }
            });

            this.out.set($(this.$refs['presentation__icons-holder']).find('.presentation__icon'), {
                opacity: 1
            }).to($(this.$refs['presentation__prev']), 0.3, {
                opacity: 0
            }).to($(this.$refs['presentation__next']), 0.3, {
                opacity: 0
            }).to($(this.$refs['presentation__close']), 0.3, {
                opacity: 0
            }).set(item, {
                willChange: 'transform'
            }).add('start').to($(this.$refs['presentation__aside']), 0.5, {
                transform: 'translateX(150%)'
            }).to($(this.$refs['presentation__left']), 1, {
                ease: Expo.easeOut,
                transform: 'scale(1)'
            }, 'start').to(item, 1, {
                ease: Expo.easeOut,
                transform: 'translate(0,0)'
            }, 'start').set(item, {
                willChange: 'auto'
            });
        }

    },
    mounted: function mounted() {
        var that = this;

        this.id = Date.now();

        this.$nextTick(function () {
            that.controller = new ScrollMagic.Controller({});

            var beforePresentation = new ScrollMagic.Scene({ triggerElement: that.$refs[that.id], duration: '0', triggerHook: '1', offset: -500 })
            //.addIndicators({ name: "presentation" })
            .addTo(that.controller);

            beforePresentation.on("enter", function (event) {
                that.beforeEnter = true;

                //Листаем слайды свайпом
                setTimeout(function () {
                    var square = that.$refs['presentation__aside'];
                    var manager = new Hammer.Manager(square, { touchAction: 'pan-y' });
                    var Swipe = new Hammer.Swipe();

                    manager.add(Swipe);

                    var deltaX = 0;
                    var deltaY = 0;

                    manager.on('swipe', function (e) {
                        deltaX = deltaX + e.deltaX;
                        var direction = e.offsetDirection;

                        if (direction === 4) {
                            that.prevItem();
                        } else if (direction === 2) {
                            that.nextItem();
                        }
                    });
                }, 300);

                beforePresentation.destroy();
            });

            var presentation = new ScrollMagic.Scene({ triggerElement: that.$refs[that.id], duration: '0', triggerHook: '0.45' })
            //.addIndicators({ name: "design" })
            .addTo(that.controller);

            presentation.on("enter", function (event) {
                that.enter = true;
                that.showIcons = true;
                presentation.destroy();
            });

            //Отслеживание ширины окна
            $(window).on('resize', function () {
                that.windowWidth = $(window).width();
            });

            that.windowWidth = $(window).width();
        });
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "PresentationSimpleSlide",
	components: {},
	props: ['icon', 'title', 'description'],
	data: function data() {
		return {};
	},

	computed: {},
	methods: {},
	filters: {},
	mounted: function mounted() {},

	watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "PresentationTabsSlide",
	components: {},
	props: ['icon', 'title', 'description', 'slides'],
	data: function data() {
		return {
			currentSlide: 0
		};
	},

	computed: {},
	methods: {
		selectSlide: function selectSlide(slide) {
			this.currentSlide = slide;
		}
	},
	filters: {},
	mounted: function mounted() {},

	watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.presentation {\n  position: relative;\n  overflow: hidden;\n  background-color: #000;\n  height: 40vw;\n}\n.presentation.isEntered .presentation__back::after {\n    opacity: 0.35;\n}\n.presentation.showIcons .presentation__icon {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 0 12px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 12px rgba(0, 170, 210, 0.5);\n}\n.presentation__head {\n    position: absolute;\n    top: 26px;\n    left: 32px;\n    overflow: hidden;\n    z-index: 10;\n}\n.presentation__main {\n    color: #fff;\n    font-size: 7.6rem;\n    line-height: 1.05;\n    font-weight: 500;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.presentation__main--small {\n      opacity: 0.6;\n      color: #C3BAB4;\n      font-size: 2rem;\n      line-height: 1.5;\n}\n.presentation__left {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 50%;\n}\n.presentation__prev, .presentation__next {\n    position: absolute;\n    display: block;\n    width: 80px;\n    height: 80px;\n    background-color: rgba(0, 0, 0, 0.25);\n    z-index: 10;\n    opacity: 0;\n}\n.presentation__prev svg, .presentation__next svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      width: 16px;\n      height: 36px;\n      stroke: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.presentation__prev:focus, .presentation__next:focus {\n      background-color: rgba(0, 0, 0, 0.25);\n}\n.presentation__prev:hover svg, .presentation__next:hover svg {\n      stroke: #666666;\n}\n.presentation__next {\n    left: -80px;\n    bottom: 0;\n}\n.presentation__prev {\n    left: -160px;\n    bottom: 0;\n}\n.presentation__back {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    bottom: 0;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    will-change: transform;\n}\n.presentation__back img {\n      display: block;\n      width: 100%;\n}\n.presentation__back::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: #000;\n      opacity: 0;\n      -webkit-transition: opacity 0.5s;\n      transition: opacity 0.5s;\n}\n.presentation__icons-holder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.presentation__icon {\n    position: absolute;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    z-index: 10;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-box-shadow: 0 0 0 0px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 0px rgba(0, 170, 210, 0.5);\n    -webkit-transition: -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n    transition: -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n    transition: transform 0.3s, box-shadow 0.3s;\n    transition: transform 0.3s, box-shadow 0.3s, -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n}\n.presentation__icon:focus {\n      background-color: #00AAD2;\n}\n.presentation__icon:hover .presentation__center, .presentation__icon:active .presentation__center {\n      -webkit-transform: scale(1.16);\n              transform: scale(1.16);\n}\n.presentation__icon::after, .presentation__icon::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      width: 16px;\n      height: 2px;\n      background-color: #fff;\n      z-index: 5;\n}\n.presentation__icon::after {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n}\n.presentation__center {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.presentation__aside {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 50%;\n    background-color: #000;\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n    z-index: 20;\n    -ms-touch-action: auto;\n        touch-action: auto;\n}\n.presentation__list {\n    height: 100%;\n}\n.presentation__slide {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    color: #fff;\n    padding: 55px;\n    padding-top: 20px;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-size: cover;\n    opacity: 1;\n    -webkit-transition: opacity 0.5s;\n    transition: opacity 0.5s;\n}\n.presentation__animation {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.presentation__frame {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n.presentation__composition {\n    position: absolute;\n    left: 55px;\n    bottom: 55px;\n    max-width: 400px;\n}\n.presentation__img {\n    position: relative;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: #E4DCD3;\n    margin-bottom: 15px;\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n}\n.presentation__img img {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      max-width: 80%;\n      max-height: 80%;\n      margin: auto;\n}\n.presentation__title {\n    font-size: 3.6rem;\n    line-height: 1.11;\n    font-weight: 500;\n    margin-bottom: 30px;\n    overflow: hidden;\n}\n.presentation__title span {\n      display: block;\n      -webkit-transition: -webkit-transform 0.3s;\n      transition: -webkit-transform 0.3s;\n      transition: transform 0.3s;\n      transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.presentation__description {\n    font-size: 1.8rem;\n    line-height: 1.33;\n    overflow: hidden;\n}\n.presentation__description span {\n      display: block;\n      -webkit-transition: -webkit-transform 0.5s;\n      transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.presentation__close {\n    position: absolute;\n    display: block;\n    top: 20px;\n    right: 30px;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.25);\n    opacity: 0;\n    z-index: 10;\n}\n.presentation__close svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      width: 24px;\n      height: 24px;\n      fill: #fff;\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n}\n.presentation__close:hover svg {\n      fill: #666666;\n}\n.presentation__controls {\n    position: relative;\n    margin-right: 50px;\n    z-index: 10;\n}\n.presentation__controls ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.presentation__controls li {\n      width: 100%;\n}\n.presentation__controls a {\n      display: block;\n      line-height: 56px;\n      text-align: center;\n      background-color: rgba(0, 0, 0, 0.25);\n      color: #fff;\n      font-size: 1.8rem;\n      font-weight: 500;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.presentation__controls a:hover {\n        color: #B7B7B7;\n}\n.presentation__controls a.active {\n        background-color: #00AAD2;\n}\n.presentation__dots {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: absolute;\n    bottom: 24px;\n    left: 0;\n    width: 100%;\n    z-index: 10;\n}\n.presentation__dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: #fff;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.presentation__dot:not(:last-of-type) {\n      margin-right: 10px;\n}\n.presentation__dot.active {\n      background-color: #00AAD2;\n}\n.presentation__icon--0 {\n  -webkit-transition-delay: 0.2s, 0.35s;\n          transition-delay: 0.2s, 0.35s;\n}\n.presentation__icon--1 {\n  -webkit-transition-delay: 0.4s, 0.7s;\n          transition-delay: 0.4s, 0.7s;\n}\n.presentation__icon--2 {\n  -webkit-transition-delay: 0.6s, 1.05s;\n          transition-delay: 0.6s, 1.05s;\n}\n.presentation__icon--3 {\n  -webkit-transition-delay: 0.8s, 1.4s;\n          transition-delay: 0.8s, 1.4s;\n}\n.presentation__icon--4 {\n  -webkit-transition-delay: 1s, 1.75s;\n          transition-delay: 1s, 1.75s;\n}\n.presentation__icon--5 {\n  -webkit-transition-delay: 1.2s, 2.1s;\n          transition-delay: 1.2s, 2.1s;\n}\n.presentation__icon--6 {\n  -webkit-transition-delay: 1.4s, 2.45s;\n          transition-delay: 1.4s, 2.45s;\n}\n.presentation__icon--7 {\n  -webkit-transition-delay: 1.6s, 2.8s;\n          transition-delay: 1.6s, 2.8s;\n}\n.presentation__icon--8 {\n  -webkit-transition-delay: 1.8s, 3.15s;\n          transition-delay: 1.8s, 3.15s;\n}\n.presentation__icon--9 {\n  -webkit-transition-delay: 2s, 3.5s;\n          transition-delay: 2s, 3.5s;\n}\n.slide-enter {\n  opacity: 0.2;\n}\n.slide-enter .presentation__title span, .slide-enter .presentation__description span {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.slide-leave-active {\n  opacity: 0;\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n}\n.slide-leave-active .presentation__img {\n    opacity: 0;\n}\n.slide-leave-active .presentation__title span, .slide-leave-active .presentation__description span {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.main-enter {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.main-leave-active {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.frame-enter {\n  opacity: 0;\n}\n.frame-leave-active {\n  opacity: 0;\n}\n@media only screen and (max-width: 1262px) {\n.presentation {\n    height: 81vw;\n}\n.presentation__head {\n      top: 30px;\n      left: 40px;\n}\n.presentation__aside {\n      width: 100%;\n}\n.presentation__prev:focus, .presentation__next:focus {\n      background-color: rgba(0, 0, 0, 0.25);\n}\n.presentation__prev:hover svg, .presentation__next:hover svg {\n      stroke: #fff;\n}\n.presentation__next {\n      left: auto;\n      right: 0;\n}\n.presentation__prev {\n      left: auto;\n      right: 80px;\n}\n.presentation__close {\n      right: 40px;\n}\n.presentation__composition {\n      left: 40px;\n}\n}\n@media only screen and (max-width: 767px) {\n.presentation.showIcons .presentation__icon {\n    -webkit-box-shadow: 0 0 0 10px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 10px rgba(0, 170, 210, 0.5);\n}\n.presentation__head {\n    top: 21px;\n    left: 16px;\n}\n.presentation__main {\n    font-size: 36px;\n}\n.presentation__main--small {\n      font-size: 16px;\n      line-height: 18px;\n}\n.presentation__icon {\n    width: 37px;\n    height: 37px;\n}\n.presentation__close {\n    width: 24px;\n    height: 24px;\n    top: 32px;\n    right: 16px;\n    background-color: transparent;\n}\n.presentation__composition {\n    left: 16px;\n    right: 16px;\n    bottom: 63px;\n}\n.presentation__img {\n    width: 48px;\n    height: 48px;\n}\n.presentation__title {\n    font-size: 20px;\n    margin-bottom: 6px;\n}\n.presentation__description {\n    font-size: 14px;\n}\n.presentation__prev, .presentation__next {\n    display: none;\n}\n.presentation__slide {\n    padding-left: 16px;\n}\n.presentation__controls {\n    margin-right: 0;\n}\n.presentation__controls a {\n      font-size: 16px;\n      line-height: 48px;\n}\n}\n@media only screen and (max-width: 639px) {\n.presentation {\n    height: 398px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54799d6f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: _vm.id,
    staticClass: "presentation",
    class: {
      isEntered: _vm.enter, showIcons: _vm.showIcons
    }
  }, [_c('div', {
    staticClass: "presentation__head"
  }, [_c('transition', {
    attrs: {
      "name": "main",
      "duration": {
        enter: 500,
        leave: 500
      },
      "mode": "out-in"
    }
  }, [(!_vm.enter) ? _c('h2', {
    key: "big",
    staticClass: "presentation__main"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })]) : _c('h2', {
    key: "small",
    staticClass: "presentation__main presentation__main--small"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })])])], 1), _vm._v(" "), _c('div', {
    ref: "presentation__left",
    staticClass: "presentation__left"
  }, [(_vm.beforeEnter) ? _c('div', {
    ref: 'back',
    staticClass: "presentation__back",
    style: ({
      'background-image': 'url(' + _vm.backgroundTotal + ')'
    })
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    ref: "presentation__icons-holder",
    staticClass: "presentation__icons-holder",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.close($event)
      }
    }
  }, _vm._l((_vm.slides), function(slide, index) {
    return _c('a', {
      key: index,
      ref: 'icon--' + index,
      refInFor: true,
      staticClass: "presentation__icon",
      class: ['presentation__icon--' + index],
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectItem(index, slide.zoom, slide.correct.x, slide.correct.y, 24)
        }
      }
    }, [_c('div', {
      staticClass: "presentation__center"
    })])
  }), 0), _vm._v(" "), (_vm.beforeEnter) ? _c('div', {
    ref: "presentation__aside",
    staticClass: "presentation__aside"
  }, [_c('a', {
    ref: "presentation__prev",
    staticClass: "presentation__prev",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.prevItem($event)
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
  })])]), _vm._v(" "), _c('a', {
    ref: "presentation__next",
    staticClass: "presentation__next",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.nextItem($event)
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
  })])]), _vm._v(" "), _c('a', {
    ref: "presentation__close",
    staticClass: "presentation__close",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.close($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M24 0.8568L23.1432 0L12 11.1432L0.8568 0L0 0.8568L11.1432 12L0 23.1432L0.8568 24L12 12.8568L23.1432 24L24 23.1432L12.8568 12L24 0.8568Z"
    }
  })])]), _vm._v(" "), _c('ul', {
    staticClass: "presentation__dots"
  }, _vm._l((_vm.slides), function(dot, index) {
    return _c('li', {
      key: index,
      staticClass: "presentation__dot",
      class: {
        active: _vm.selectedId === index
      },
      on: {
        "click": function($event) {
          _vm.selectItem(index, _vm.slides[index].zoom, _vm.slides[index].correct.x, _vm.slides[index].correct.y)
        }
      }
    })
  }), 0), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide",
      "duration": {
        enter: 1000,
        leave: 1000
      },
      "mode": "out-in"
    }
  }, [_c(_vm.currentComponent(_vm.slide), {
    key: _vm.slide[0].title,
    tag: "component",
    style: ({
      backgroundImage: 'url(' + _vm.slide[0].background + ')'
    }),
    attrs: {
      "icon": _vm.slide[0].icon,
      "title": _vm.slide[0].title,
      "description": _vm.slide[0].description,
      "slides": _vm.slide[0].slides
    }
  })], 1)], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54799d6f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57ad691e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "presentation__slide"
  }, [_c('div', {
    staticClass: "presentation__composition"
  }, [_c('div', {
    staticClass: "presentation__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "presentation__title"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "presentation__description"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.description) + "\n\t\t\t")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57ad691e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1ef8adc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "presentation__slide"
  }, [_c('div', {
    staticClass: "presentation__controls"
  }, [_c('ul', _vm._l((_vm.slides), function(slide, index) {
    return _c('li', {
      key: index
    }, [_c('a', {
      class: {
        active: _vm.currentSlide === index
      },
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectSlide(index)
        }
      }
    }, [_vm._v(_vm._s(slide.name))])])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "presentation__carousel"
  }, [_c('transition', {
    attrs: {
      "name": "frame",
      "mode": "in-out"
    }
  }, _vm._l((_vm.slides), function(slide, index) {
    return (index === _vm.currentSlide) ? _c('div', {
      key: index,
      staticClass: "presentation__frame",
      style: ({
        backgroundImage: 'url(' + slide.img + ')'
      })
    }) : _vm._e()
  }), 0)], 1), _vm._v(" "), _c('div', {
    staticClass: "presentation__composition"
  }, [_c('div', {
    staticClass: "presentation__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "presentation__title"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "presentation__description"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.description) + "\n\t\t\t")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1ef8adc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1efee704", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSection.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7ad182a7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSimpleSlide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSimpleSlide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("01fb1b80", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationTabsSlide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationTabsSlide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54799d6f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/CarPageTemplate/PresentationSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54799d6f", Component.options)
  } else {
    hotAPI.reload("data-v-54799d6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57ad691e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationSimpleSlide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57ad691e", Component.options)
  } else {
    hotAPI.reload("data-v-57ad691e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1ef8adc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/user/work/hyundai/newsite/dealers/www/resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationTabsSlide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ef8adc", Component.options)
  } else {
    hotAPI.reload("data-v-e1ef8adc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});