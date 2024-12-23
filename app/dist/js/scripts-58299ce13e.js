(()=>{"use strict";var e=function(e,t){var n=[],o=function(){t.innerHTML=e.scrollSnapList().map((function(){return'<button class="embla__dot" type="button"></button>'})).join("");(n=Array.from(t.querySelectorAll(".embla__dot"))).forEach((function(t,n){t.addEventListener("click",(function(){return function(t){e.scrollTo(t)}(n)}),!1)}))},r=function(){var t=e.previousScrollSnap(),o=e.selectedScrollSnap();n[t].classList.remove("embla__dot--selected"),n[o].classList.add("embla__dot--selected")};return e.on("init",o).on("reInit",o).on("init",r).on("reInit",r).on("select",r),function(){t.innerHTML=""}};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}var r=function(){return t=function e(t,n,o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.emblaNode=document.querySelector(".".concat(t)),this.OPTIONS=n,this.hasDots=o,this.plugins=r,this.initEmbla()},(o=[{key:"initEmbla",value:function(){if(this.emblaNode){var t=this.emblaNode.querySelector(".embla__viewport"),n=this.emblaNode.querySelector(".embla__button--prev"),o=this.emblaNode.querySelector(".embla__button--next"),r=EmblaCarousel(t,this.OPTIONS,this.plugins);if(this.hasDots){var i=this.emblaNode.querySelector(".embla__dots"),l=e(r,i);r.on("destroy",l)}var a=function(e,t,n){var o=function(){e.scrollPrev()},r=function(){e.scrollNext()};t.addEventListener("click",o,!1),n.addEventListener("click",r,!1);var i=function(e,t,n){var o=function(){e.canScrollPrev()?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled"),e.canScrollNext()?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled")};return e.on("select",o).on("init",o).on("reInit",o),function(){t.removeAttribute("disabled"),n.removeAttribute("disabled")}}(e,t,n);return function(){i(),t.removeEventListener("click",o,!1),n.removeEventListener("click",r,!1)}}(r,n,o);r.on("destroy",a)}}}])&&n(t.prototype,o),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,r}();function i(){var e=document.querySelector(".custom-scroll");if(e){var t=e.querySelectorAll(".inside-page__nav__item"),n=e.querySelector(".active");[].forEach.call(t,(function(e){e.addEventListener("click",(function(t){t.preventDefault(),n.classList.remove("active"),n=e,e.classList.add("active"),function(e){if(e){var t=e.getAttribute("data-href"),n=document.querySelector(t);if(n){var o=n.getBoundingClientRect().y+window.scrollY-70;window.scrollTo({top:o,behavior:"smooth"})}}}(e.querySelector("[data-href]"))}))}))}}document.addEventListener("DOMContentLoaded",(function(){var e;!function(){if(document.querySelector("#menu")){var e=new MmenuLight(document.querySelector("#menu"),"(max-width: 1200px)"),t=(e.navigation({title:"Меню"}),e.offcanvas());document.querySelector("#burger").addEventListener("click",(function(e){e.preventDefault(),t.open()}))}}(),e=[EmblaAutoplay({stopOnMouseEnter:!0,stopOnInteraction:!1})],new r("main-slider",{align:"start",loop:!0},!0,e),new r("embla",{align:"start",loop:!0},!0),i()}))})();