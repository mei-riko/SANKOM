import $ from 'jquery';

let sliderInitialized = (countShow, sliderClass, arrows, dots, loop, stagePadding) => {
    let $sliderItem = $(sliderClass);

    if( $sliderItem.length === 0 ){ return null; }
    // if( $sliderItem.hasClass('slick-initialized') ){
        
    // }

    if ( $sliderItem.find('.slider__item').length > countShow ){
        $sliderItem.owlCarousel({
            items: countShow,
            loop: loop,
            margin: 10,
            nav: arrows,
            dots: dots,
            stagePadding: stagePadding,
        })
    }
}


$(document).ready(() => {
    sliderInitialized(1, '.slider.slider_banner', true, true, false, 0);
    sliderInitialized(4, '.slider.slider_category', true, false, true, 50);
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