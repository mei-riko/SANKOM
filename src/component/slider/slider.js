import $ from 'jquery';

export let sliderInitialized = (countShow, sliderClass, arrows, dots, loop, margin, stagePadding) => {
    let $sliderItem = $(sliderClass);

    if( $sliderItem.length === 0 ){ return null; }

    if ( $sliderItem.find('.slider__item').length > countShow ){
        $sliderItem.closest('.slider-container').addClass('slider-container--active');
        $sliderItem.closest('.slider-container').removeClass('slider-container--disable');

        $sliderItem.owlCarousel({
            items: countShow,
            loop: loop,
            margin: margin,
            nav: arrows,
            dots: dots,
            stagePadding: stagePadding,
        })
    } else{
        $sliderItem.closest('.slider-container').removeClass('slider-container--active');
        $sliderItem.closest('.slider-container').addClass('slider-container--disable');
    }
}


$(document).ready(() => {
    sliderInitialized(1, '.slider.slider_banner', true, true, true, 15, 0);
    sliderInitialized(6, '.slider.slider_subcategory-index', true, false, false, 25, 50);
    sliderInitialized(9, '.slider.slider_tags', false, false, false, 15, 50);
    sliderInitialized(4, '.slider.slider_category', true, false, false, 15, 50);
    sliderInitialized(3, '.slider.slider_promo', true, false, false, 15, 50);

    sliderInitialized(5, '.slider.slider_subcategory-catalog', true, false, false, 15, 50);

    sliderInitialized(4, '.slider.slider_recommendation', false, true, false, 25, 0);
});