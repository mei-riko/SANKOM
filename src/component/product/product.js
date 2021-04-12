import $ from 'jquery';
import {sliderInitialized} from '../slider/slider';


$(function(){
  if( $('.product-nav .product-nav__image').length > 0 ){
    let heightMain = $('.product-image .product-image__link').height();
    let navCount = $('.product-image').data('count');
    let navOffset = $('.product-image').data('offset');
    let heightNav = 0;
  
    heightNav = (heightMain - 100)/Number(navCount) - navOffset - 2;
  
    // console.log( heightMain + "::" + navCount + "::" + heightNav);
    $('.product-nav .product-nav__image').css('height', heightNav);
  }

  // (countShow, sliderClass, arrows, dots, loop, margin, stagePadding);
  sliderInitialized(2, '.slider.slider_video', false, true, false, 15, 0);
});

// Sliders Vertical
if( $('.slider-main').length > 0 ){
  $('.slider-main').each(function(){
    let sliderMain = $(this);
    let sliderNav = sliderMain.closest('.product-slider').find('.product-nav');
    let sliderNavId = sliderMain.data('nav');
    let sliderNavOrientation = sliderMain.data('vertical');
    let sliderNavCount = sliderMain.data('count');

    // console.log( sliderNavId + "::" + sliderNavOrientation );

    sliderMain.slick({
      slidesToShow: 1,
      dots: false,
      arrows: false,
      asNavFor: sliderNavId,
      fade: true,
    });
    
    sliderNav.slick({
      slidesToShow: sliderNavCount,
      dots: false,
      arrows: false,
      asNavFor: sliderMain,
      focusOnSelect: true,
      autoplay: false,
      vertical: sliderNavOrientation,
      verticalSwiping: sliderNavOrientation,
      centerMode: sliderNavOrientation,
    });

  });
  
}

// if( $('.slider-nav').length > 0 ){
//   $(sliderNav).slick({
//     slidesToShow: 3,
//     dots: false,
//     arrows: false,
//     asNavFor: sliderMain,

//     focusOnSelect: true,
//     autoplay: false,
//   });
// }

// Quick Buy Block
$('#quickBuy').on('click', function(){
  $('#quickBlock').slideToggle();
});