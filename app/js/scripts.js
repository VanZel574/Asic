(()=>{"use strict";var __webpack_modules__={"./assets/js/components/embla/EmblaCarouselArrowButtons.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPrevNextBtnsClickHandlers: () => (/* binding */ addPrevNextBtnsClickHandlers)\n/* harmony export */ });\nvar addTogglePrevNextBtnsActive = function addTogglePrevNextBtnsActive(emblaApi, prevBtn, nextBtn) {\n  var togglePrevNextBtnsState = function togglePrevNextBtnsState() {\n    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute('disabled');else prevBtn.setAttribute('disabled', 'disabled');\n    if (emblaApi.canScrollNext()) nextBtn.removeAttribute('disabled');else nextBtn.setAttribute('disabled', 'disabled');\n  };\n  emblaApi.on('select', togglePrevNextBtnsState).on('init', togglePrevNextBtnsState).on('reInit', togglePrevNextBtnsState);\n  return function () {\n    prevBtn.removeAttribute('disabled');\n    nextBtn.removeAttribute('disabled');\n  };\n};\nvar addPrevNextBtnsClickHandlers = function addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn) {\n  var scrollPrev = function scrollPrev() {\n    emblaApi.scrollPrev();\n  };\n  var scrollNext = function scrollNext() {\n    emblaApi.scrollNext();\n  };\n  prevBtn.addEventListener('click', scrollPrev, false);\n  nextBtn.addEventListener('click', scrollNext, false);\n  var removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(emblaApi, prevBtn, nextBtn);\n  return function () {\n    removeTogglePrevNextBtnsActive();\n    prevBtn.removeEventListener('click', scrollPrev, false);\n    nextBtn.removeEventListener('click', scrollNext, false);\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/components/embla/EmblaCarouselArrowButtons.js?")},"./assets/js/components/embla/EmblaCarouselDotButton.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDotBtnsAndClickHandlers: () => (/* binding */ addDotBtnsAndClickHandlers)\n/* harmony export */ });\nvar addDotBtnsAndClickHandlers = function addDotBtnsAndClickHandlers(emblaApi, dotsNode) {\n  var dotNodes = [];\n  var addDotBtnsWithClickHandlers = function addDotBtnsWithClickHandlers() {\n    dotsNode.innerHTML = emblaApi.scrollSnapList().map(function () {\n      return '<button class=\"embla__dot\" type=\"button\"></button>';\n    }).join('');\n    var scrollTo = function scrollTo(index) {\n      emblaApi.scrollTo(index);\n    };\n    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'));\n    dotNodes.forEach(function (dotNode, index) {\n      dotNode.addEventListener('click', function () {\n        return scrollTo(index);\n      }, false);\n    });\n  };\n  var toggleDotBtnsActive = function toggleDotBtnsActive() {\n    var previous = emblaApi.previousScrollSnap();\n    var selected = emblaApi.selectedScrollSnap();\n    dotNodes[previous].classList.remove('embla__dot--selected');\n    dotNodes[selected].classList.add('embla__dot--selected');\n  };\n  emblaApi.on('init', addDotBtnsWithClickHandlers).on('reInit', addDotBtnsWithClickHandlers).on('init', toggleDotBtnsActive).on('reInit', toggleDotBtnsActive).on('select', toggleDotBtnsActive);\n  return function () {\n    dotsNode.innerHTML = '';\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/components/embla/EmblaCarouselDotButton.js?")},"./assets/js/components/embla/index.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Embla: () => (/* binding */ Embla)\n/* harmony export */ });\n/* harmony import */ var _EmblaCarouselArrowButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmblaCarouselArrowButtons.js */ "./assets/js/components/embla/EmblaCarouselArrowButtons.js");\n/* harmony import */ var _EmblaCarouselDotButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmblaCarouselDotButton.js */ "./assets/js/components/embla/EmblaCarouselDotButton.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\nvar Embla = /*#__PURE__*/function () {\n  function Embla(emblaClassName, options, hasDots, plugins) {\n    _classCallCheck(this, Embla);\n    this.emblaNode = document.querySelector(".".concat(emblaClassName));\n    this.OPTIONS = options;\n    this.hasDots = hasDots;\n    this.plugins = plugins;\n    this.initEmbla();\n  }\n  return _createClass(Embla, [{\n    key: "initEmbla",\n    value: function initEmbla() {\n      if (!this.emblaNode) return;\n      var viewportNode = this.emblaNode.querySelector(\'.embla__viewport\');\n      var prevBtnNode = this.emblaNode.querySelector(\'.embla__button--prev\');\n      var nextBtnNode = this.emblaNode.querySelector(\'.embla__button--next\');\n      var emblaApi = EmblaCarousel(viewportNode, this.OPTIONS, this.plugins);\n      if (this.hasDots) {\n        var dotsNode = this.emblaNode.querySelector(\'.embla__dots\');\n        var removeDotBtnsAndClickHandlers = (0,_EmblaCarouselDotButton_js__WEBPACK_IMPORTED_MODULE_1__.addDotBtnsAndClickHandlers)(emblaApi, dotsNode);\n        emblaApi.on(\'destroy\', removeDotBtnsAndClickHandlers);\n      }\n      var removePrevNextBtnsClickHandlers = (0,_EmblaCarouselArrowButtons_js__WEBPACK_IMPORTED_MODULE_0__.addPrevNextBtnsClickHandlers)(emblaApi, prevBtnNode, nextBtnNode);\n      emblaApi.on(\'destroy\', removePrevNextBtnsClickHandlers);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack:///./assets/js/components/embla/index.js?')},"./assets/js/scripts.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_embla_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/embla/index.js */ \"./assets/js/components/embla/index.js\");\n\nfunction initMobileMenu() {\n  var menuNode = document.querySelector(\"#menu\");\n  if (!menuNode) return;\n  var menu = new MmenuLight(document.querySelector(\"#menu\"), \"(max-width: 1200px)\");\n  var navigator = menu.navigation({\n    title: 'Меню'\n  });\n  var drawer = menu.offcanvas();\n  document.querySelector(\"#burger\").addEventListener(\"click\", function (evnt) {\n    evnt.preventDefault();\n    drawer.open();\n  });\n}\n\n// function initSwiper() {\n//     const swiperNode = document.querySelector('.swiper');\n//     if (!swiperNode) return;\n//\n//     new Swiper('.swiper', {\n//         modules: [SwiperNav, SwiperPag, SwiperAutoPlay, SwiperEffectFade],\n//         // If we need pagination\n//         pagination: {\n//             el: '.swiper-pagination',\n//         },\n//         autoplay: {\n//             enable: false,\n//             delay: 3000,\n//         },\n//         loop: true,\n//         effect: 'fade',\n//         speed: 1500,\n//         // Navigation arrows\n//         navigation: {\n//             nextEl: '.swiper-button-next',\n//             prevEl: '.swiper-button-prev',\n//         },\n//\n//         // And if we need scrollbar\n//         scrollbar: {\n//             el: '.swiper-scrollbar',\n//         },\n//     });\n// }\n\n// function handleSubscribe() {\n//     const subscribeNode = document.querySelector('.subscribe');\n//     if (!subscribeNode) return;\n//     const subscribeFormNode = subscribeNode.querySelector('form');\n//     if (!subscribeNode) return;\n//\n//     const subscribeCheckboxNode = subscribeNode.querySelector('.subscribe-checkbox');\n//     const subscribeButtonNode = subscribeNode.querySelector('.subscribe-button');\n//     subscribeCheckboxNode.addEventListener('change', function(evnt) {\n//         subscribeButtonNode.disabled = !this.checked;\n//     });\n//     subscribeFormNode.addEventListener('submit', function(evnt) {\n//         evnt.preventDefault();\n//         const csrf = subscribeFormNode.querySelector('input[name=\"csrfmiddlewaretoken\"]').value;\n//         const email = subscribeFormNode.querySelector('input[type=\"email\"]').value;\n//         const formData = new FormData();\n//         formData.append('email', email);\n//         formData.append('csrfmiddlewaretoken', csrf);\n//\n//         fetch(this.action, {\n//             method: 'POST',\n//             credentials: 'same-origin',\n//             body: formData,\n//         }).then(() => {\n//         }).catch(err => console.log(err));\n//     });\n// }\n\nfunction initMainSlider() {\n  var OPTIONS = {\n    align: 'start',\n    loop: true\n  };\n  var plugins = [EmblaAutoplay({\n    stopOnMouseEnter: true,\n    stopOnInteraction: false\n  })];\n  new _components_embla_index_js__WEBPACK_IMPORTED_MODULE_0__.Embla('main-slider', OPTIONS, true, plugins);\n}\nfunction initNews() {\n  var OPTIONS = {\n    align: 'start',\n    loop: true\n  };\n  new _components_embla_index_js__WEBPACK_IMPORTED_MODULE_0__.Embla('embla', OPTIONS, true);\n}\nfunction ready() {\n  initMobileMenu();\n  initMainSlider();\n  initNews();\n}\ndocument.addEventListener(\"DOMContentLoaded\", ready);\n\n//# sourceURL=webpack:///./assets/js/scripts.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./assets/js/scripts.js")})();