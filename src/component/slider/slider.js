import $ from 'jquery';

let sliderInitialized = (countShow, sliderClass, arrows, dots, loop, margin, stagePadding) => {
    let $sliderItem = $(sliderClass);

    if( $sliderItem.length === 0 ){ return null; }
    // if( $sliderItem.hasClass('slick-initialized') ){
        
    // }

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
    sliderInitialized(6, '.slider.slider_subcategory', true, false, false, 20, 40);
    sliderInitialized(9, '.slider.slider_tags', false, false, false, 15, 40);
    sliderInitialized(4, '.slider.slider_category', true, false, false, 15, 40);
    sliderInitialized(3, '.slider.slider_promo', true, false, false, 15, 40);
    
});



// // Слайдер
// if ($('.slider').length > 0) {
//     // Slider On Index Page
//     let $slickContent = $('.content-row__slider .slider.slider_content');
//     $slickContent.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: true,
//         autoplay: false
//     });
// }