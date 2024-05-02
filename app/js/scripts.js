(()=>{"use strict";var __webpack_modules__={"./assets/js/scripts.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nfunction initMobileMenu() {\n  var menu = new MmenuLight(document.querySelector(\"#menu\"), \"(max-width: 1200px)\");\n  var navigator = menu.navigation({\n    title: 'Меню'\n  });\n  var drawer = menu.offcanvas();\n  document.querySelector(\"#burger\").addEventListener(\"click\", function (evnt) {\n    evnt.preventDefault();\n    drawer.open();\n  });\n}\nfunction initSwiper() {\n  var swiperNode = document.querySelector('.swiper');\n  if (!swiperNode) return;\n  new Swiper('.swiper', {\n    modules: [SwiperNav, SwiperPag, SwiperAutoPlay, SwiperEffectFade],\n    // If we need pagination\n    pagination: {\n      el: '.swiper-pagination'\n    },\n    autoplay: {\n      enable: false,\n      delay: 3000\n    },\n    loop: true,\n    effect: 'fade',\n    speed: 1500,\n    // Navigation arrows\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    },\n    // And if we need scrollbar\n    scrollbar: {\n      el: '.swiper-scrollbar'\n    }\n  });\n}\nfunction handleSubscribe() {\n  var subscribeNode = document.querySelector('.subscribe');\n  if (!subscribeNode) return;\n  var subscribeCheckboxNode = subscribeNode.querySelector('.subscribe-checkbox');\n  var subscribeButtonNode = subscribeNode.querySelector('.subscribe-button');\n  subscribeCheckboxNode.addEventListener('change', function (evnt) {\n    subscribeButtonNode.disabled = !this.checked;\n  });\n}\nfunction ready() {\n  initMobileMenu();\n  initSwiper();\n  handleSubscribe();\n}\ndocument.addEventListener(\"DOMContentLoaded\", ready);\n\n//# sourceURL=webpack:///./assets/js/scripts.js?")}},__webpack_require__={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},__webpack_exports__={};__webpack_modules__["./assets/js/scripts.js"](0,__webpack_exports__,__webpack_require__)})();