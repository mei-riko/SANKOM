!function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=2)}([function(e,a){e.exports=jQuery},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.sliderInitialized=void 0;var n,i=t(0),l=(n=i)&&n.__esModule?n:{default:n};var r=a.sliderInitialized=function(e,a,t,n,i,r,o){var s=(0,l.default)(a);if(0===s.length)return null;s.find(".slider__item").length>e?(s.closest(".slider-container").addClass("slider-container--active"),s.closest(".slider-container").removeClass("slider-container--disable"),s.owlCarousel({items:e,loop:i,margin:r,nav:t,dots:n,stagePadding:o})):(s.closest(".slider-container").removeClass("slider-container--active"),s.closest(".slider-container").addClass("slider-container--disable"))};(0,l.default)(document).ready((function(){r(1,".slider.slider_banner",!0,!0,!0,15,0),r(6,".slider.slider_subcategory-index",!0,!1,!1,25,50),r(9,".slider.slider_tags",!1,!1,!1,15,50),r(4,".slider.slider_category",!0,!1,!1,15,50),r(3,".slider.slider_promo",!0,!1,!1,15,50),r(5,".slider.slider_subcategory-catalog",!0,!1,!1,15,50),r(4,".slider.slider_recommendation",!1,!0,!1,25,0)}))},function(e,a,t){"use strict";var n,i=t(0),l=(n=i)&&n.__esModule?n:{default:n};t(1),t(3),t(4),t(5),t(6),(0,l.default)(document).ready((function(){(0,l.default)(".scroll").on("click",(function(){return(0,l.default)("html, body").animate({scrollTop:(0,l.default)((0,l.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,l.default)("[data-fancybox]").fancybox({autoFocus:!1,touch:!1}),(0,l.default)('a[data-trigger="click"]').on("click",(function(e){e.preventDefault()}));for(var e=function(e){e.addEventListener("focus",(function(){e.classList.add("input__field--focus")})),e.addEventListener("blur",(function(){0===e.value.length&&e.classList.remove("input__field--focus")}))},a=(0,l.default)(".input__field"),t=0;t<a.length;t++)e(a[t]);if((0,l.default)(".input.input_label-inside").on("click",(function(){(0,l.default)(this).find(".input__field").focus()})),(0,l.default)(".open-content").on("click",(function(){var e=(0,l.default)(this),a=e.data("id");e.hasClass("active")?(e.removeClass("active"),e.text("Читать дальше >")):(e.addClass("active"),e.text("Скрыть подробности")),(0,l.default)("[data-content="+a+"]").slideToggle()})),(0,l.default)(".tags-row .tags-row__show").on("click",(function(){var e=(0,l.default)(this);e.hasClass("active")?(e.removeClass("active"),e.text("Показать все теги"),e.parent().removeClass("active")):(e.addClass("active"),e.text("Скрыть"),e.parent().addClass("active"))})),(0,l.default)(".faq.faq_toggle .faq__title").on("click",(function(e){e.preventDefault;var a=(0,l.default)(this);a.parent().find(".faq__content").slideToggle(),a.parent().toggleClass("faq_toggle--active")})),(0,l.default)(".b-lazy").length>0){var n=new Blazy({offset:100,breakpoints:[{width:576,src:"data-src-small"}],success:function(e){setTimeout((function(){var a=e.parentNode;a.className=a.className.replace(/\bloading\b/,"")}),200)}});(0,l.default)(".owl-carousel").on("changed.owl.carousel",n.revalidate)}}))},function(e,a,t){"use strict";var n,i=t(0),l=(n=i)&&n.__esModule?n:{default:n};(0,l.default)(".filter-row .filter-row__title").on("click",(function(){(0,l.default)(this).hasClass("filter-row__title--active")?((0,l.default)(this).removeClass("filter-row__title--active"),(0,l.default)(this).parent().removeClass("filter-row--active"),(0,l.default)(this).parent().find(".filter-row__content").slideUp()):((0,l.default)(this).addClass("filter-row__title--active"),(0,l.default)(this).parent().addClass("filter-row--active"),(0,l.default)(this).parent().find(".filter-row__content").slideDown())}))},function(e,a,t){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=t(0),r=(n=l)&&n.__esModule?n:{default:n},o=t(1);(0,r.default)((function(){if((0,r.default)(".product-nav .product-nav__image").length>0){var e,a=(0,r.default)(".product-image .product-image__link").height(),t=void 0!==i((0,r.default)(".product-image").data("count"))?(0,r.default)(".product-image").data("count"):2,n=void 0!==i((0,r.default)(".product-image").data("offset"))?(0,r.default)(".product-image").data("offset"):25;e=(a-100)/Number(t)-n-2,(0,r.default)(".product-nav .product-nav__image").css("height",e)}(0,o.sliderInitialized)(2,".slider.slider_video",!1,!0,!1,15,0)})),(0,r.default)(".slider-main").length>0&&(0,r.default)(".slider-main").each((function(){var e=(0,r.default)(this),a=e.closest(".product-slider").find(".product-nav"),t=e.data("nav"),n=e.data("vertical"),i=e.data("count");e.slick({slidesToShow:1,dots:!1,arrows:!1,asNavFor:t,fade:!0}),a.slick({slidesToShow:i,dots:!1,arrows:!1,asNavFor:e,focusOnSelect:!0,autoplay:!1,vertical:n,verticalSwiping:n,centerMode:n})})),(0,r.default)("#quickBuy").on("click",(function(){(0,r.default)("#quickBlock").slideToggle()}))},function(e,a,t){"use strict";var n,i=t(0),l=(n=i)&&n.__esModule?n:{default:n};(0,l.default)(".tabs .tabs__item").on("click",(function(){var e=(0,l.default)(this).data("content"),a=(0,l.default)(".tabs-content"+e);(0,l.default)(".tabs .tabs__item").removeClass("tabs__item--active").eq((0,l.default)(this).index()).addClass("tabs__item--active"),(0,l.default)(".tabs-content").removeClass("tabs-content--show").removeClass("tabs-content--active"),a.addClass("tabs-content--active")})),(0,l.default)(".tabs-content_has-slider .slider.slider_tags").on("changed.owl.carousel",(function(e){(0,l.default)(".tabs-content.tabs-content--active").addClass("tabs-content--show")}))},function(e,a,t){"use strict";var n,i=t(0),l=(n=i)&&n.__esModule?n:{default:n};function r(){var e=(0,l.default)(".navbar").find(".navbar__link.navbar__link--active"),a=e.data("nav");e.removeClass("navbar__link--active"),(0,l.default)(".navbar .navbar__children"+a).removeClass("navbar__children--active")}(0,l.default)((function(){(0,l.default)(window).width()>1400||!window.matchMedia("screen and (max-width: 1400px)").matches?(0,l.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop"):(0,l.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");var e=null;(0,l.default)(".navbar.navbar--desktop .navbar__item.navbar__item_has-child").mouseenter((function(a){clearTimeout(e);var t=(0,l.default)(this);e=setTimeout((function(){!function(e){var a=e.find(".navbar__link"),t=a.data("nav");if((0,l.default)(".navbar__link.navbar__link--active").length>0&&!a.hasClass("navbar__link--active")){var n=(0,l.default)(".navbar__link.navbar__link--active");n.removeClass("navbar__link--active"),(0,l.default)(".navbar .navbar__children"+n.data("nav")).removeClass("navbar__children--active")}a.addClass("navbar__link--active"),(0,l.default)(".navbar .navbar__children"+t).addClass("navbar__children--active")}(t)}),200)})).mouseleave((function(a){clearTimeout(e),e=setTimeout(r,400)}))})),(0,l.default)(window).on("resize",(function(){(0,l.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches?((0,l.default)(".navbar").removeClass("navbar--active"),(0,l.default)(".navbar .navbar__children.navbar__children--active").removeClass("navbar__children--active"),(0,l.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop")):(0,l.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile")}))}]);