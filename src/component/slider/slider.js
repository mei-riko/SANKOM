import $ from 'jquery';
import {sliderInitialized} from './sliderInitialized';

// Конструктор объектов для адаптивности
class Responsive {
    constructor(mobileXs, mobileSm, tabletMd, tabletLg, desktop) {
        this[420]   = mobileXs;
        this[576]   = mobileSm;
        this[768]   = tabletMd;
        this[1024]  = tabletLg;
        this[1440]  = desktop;
    }
}
// Recommendation Slider
const recommendationResponsive = new Responsive(
    {items: 2, stagePadding: 50, margin: 15,},
    {items: 2, loop: false, stagePadding: 0, margin: 15,},
    {items: 2, loop: false, stagePadding: 0, margin: 20, },
    {items: 3, loop: false, stagePadding: 0, margin: 20,},
    {items: 4, loop: false, stagePadding: 0, margin: 20,},
);
// Subcategory Slider
const subcategoryIndexResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 3, stagePadding: 50, margin: 15,},
    {items: 4, },
    {items: 5, },
    {items: 6, loop: false, stagePadding: 50, margin: 25,},
);
const subcategoryCatalogResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 3, },
    {items: 4, },
    {items: 5, },
    {items: 5, },
);
// Category Slider
const categoryResponsive = new Responsive(
    {items: 1, stagePadding: 60, margin: 20, },
    {items: 2, stagePadding: 60, margin: 15, },
    {items: 3, stagePadding: 50, margin: 15, },
    {items: 3, stagePadding: 60, margin: 20, },
    {items: 4, loop: false, stagePadding: 25, margin: 10,},
);
// Video Slider
const videoResponsive = new Responsive(
    {items: 2, },
    {items: 2, },
    {items: 2, },
    {items: 2, },
    {items: 2, },
);
// Tags Slider
const tagsResponsive = new Responsive(
    {items: 2, },
    {items: 3, },
    {items: 5, },
    {items: 7, },
    {items: 9, stagePadding: 25, margin: 15, loop: false,},
);
// Index Banner Slider
const bannerResponsive = new Responsive(
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 1, },
);
// Promo Slider
const promoResponsive = new Responsive(
    {items: 1, },
    {items: 1, },
    {items: 2, },
    {items: 2, },
    {items: 3, stagePadding: 25, margin: 15, loop: false,},
);

$(function() {
    // Index Banner Slider
    sliderInitialized(1, '.slider.slider_banner',               '',                     true, true, true, 15, 0, bannerResponsive);

    // Recommendation Slider
    sliderInitialized(2, '.slider.slider_recommendation',       '.slider-xs-container', false, true, true, 10, 30, recommendationResponsive);
    // Subcategory Slider Index
    sliderInitialized(2, '.slider.slider_subcategory-index',    '.slider-container',    true, false, true, 15, 40, subcategoryIndexResponsive);
    // Subcategory Slider Catalog
    sliderInitialized(2, '.slider.slider_subcategory-catalog',  '.slider-container',    true, false, true, 15, 40, subcategoryCatalogResponsive);
    // Category Slider
    sliderInitialized(1, '.slider.slider_category',             '.slider-container',    true, false, true, 15, 40, categoryResponsive);
    // Video Slider
    sliderInitialized(2, '.slider.slider_video',                '.slider-container',    false, false, false, 10, 0, videoResponsive);
    // Tags Slider
    sliderInitialized(2, '.slider.slider_tags',                 '.slider-container',    false, true, true, 15, 40, tagsResponsive);
    // Promo Slider
    sliderInitialized(1, '.slider.slider_promo',                '.slider-container',    true, false, true, 15, 50, promoResponsive);
});

$(window).on('resize', function(){
    sliderInitialized(1, '.slider.slider_banner',               '',                     true, true, true, 15, 0, bannerResponsive);

    sliderInitialized(2, '.slider.slider_recommendation',       '.slider-xs-container', false, true, true, 10, 30, recommendationResponsive);
    sliderInitialized(2, '.slider.slider_subcategory-index',    '.slider-container',    true, false, true, 15, 40, subcategoryIndexResponsive);
    sliderInitialized(2, '.slider.slider_video',                '.slider-container',    false, true, false, 10, 0, videoResponsive);
    sliderInitialized(2, '.slider.slider_tags',                 '.slider-container',    false, true, false, 10, 0, tagsResponsive);
    sliderInitialized(1, '.slider.slider_promo',                '.slider-container',    true, false, true, 15, 50, promoResponsive);
});