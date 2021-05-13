import $ from 'jquery';

// Quick Buy Block
$('#quickBuy').on('click', function(){ 
  $('#quickBlock').slideToggle(); 
});

// Open Before & After Photo
$(document).on('click', '[data-open]', function(e){
  e.preventDefault();
  const triggerFancybox = $(this).data('open');

  // Add Option
  $('[data-fancybox="' + triggerFancybox + '"]').fancybox({
    thumbs : {
      autoStart : true
    }
  })
  // Click First Element
  $('[data-fancybox="' + triggerFancybox + '"]')[0].click();
})

// Sliders Vertical
if( $('.slider-main').length > 0 ){
  $('.slider-main').each(function(){

    let sliderMain                = $(this);
    let sliderNav                 = sliderMain.closest('.product-slider').find('.product-nav');
    let sliderNavId               = sliderMain.data('nav');

    sliderMain.slick({
      slidesToShow: 1,
      dots: false,
      arrows: false,
      asNavFor: sliderNavId,
      fade: true,
    });

    // Navigation For Different Templates

    // Single Product
    if ( sliderMain.hasClass('product-image_single') ){
      sliderNav.slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        autoplay: false,

        asNavFor: sliderMain,

        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
  
        responsive: [
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
  
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
  
              centerPadding: '25px'
            }
          },
          {
            breakpoint: 421,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
  
              centerPadding: '15px'
            }
          }
        ],
      });
    }
    // Complect Two Products
    if ( sliderMain.hasClass('product-image_complect-sm') ){
      sliderNav.slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        autoplay: false,

        asNavFor: sliderMain,

        focusOnSelect: true,
        vertical: false,
        verticalSwiping: false,
        centerMode: true,
  
        centerPadding: '25px',

        responsive: [
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
  
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
            }
          },
          {
            breakpoint: 421,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
  
              centerPadding: '15px'
            }
          }
        ],
      });
    }
    // Complect Three+ Products
    if ( sliderMain.hasClass('product-image_complect-lg') ){
      sliderNav.slick({
        slidesToShow: 2,
        dots: false,
        arrows: false,
        autoplay: false,

        asNavFor: sliderMain,

        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,

        responsive: [
          {
            breakpoint: 1441,
            settings: {
              centerPadding: '25px',
            }
          },
          {
            breakpoint: 577,
            settings: {
 
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
              centerPadding: '25px',
            }
          },
          {
            breakpoint: 421,
            settings: {
              
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
  
              centerPadding: '15px'
            }
          }
        ],
      });
    }
  });
}