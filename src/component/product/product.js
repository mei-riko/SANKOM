import $ from 'jquery';

// Quick Buy Block
$('#quickBuy').on('click', function(){ $('#quickBlock').slideToggle(); });

// Height Nav Block
// $(function(){
//   if( $('.product-nav .product-nav__image').length > 0 ){

//     let heightMain = $('.product-image .product-image__link').height();
//     let navCount =  typeof $('.product-image').data('count') !== undefined ? $('.product-image').data('count') : 2;
//     let navOffset = typeof $('.product-image').data('offset') !== undefined ? $('.product-image').data('offset') : 25;
//     let heightNav = 0;
  
//     if(window.innerWidth > 420){
//       heightNav = (heightMain - 100)/Number(navCount) - navOffset - 2;
//       $('.product-nav .product-nav__image').css('height', heightNav);
//     }
//   }
// });

// Sliders Vertical
if( $('.slider-main').length > 0 ){
  $('.slider-main').each(function(){
    let sliderMain            = $(this);
    let sliderNav             = sliderMain.closest('.product-slider').find('.product-nav');
    let sliderNavId           = sliderMain.data('nav');
    let sliderNavOrientation  = sliderMain.data('vertical');
    let sliderNavCount        = sliderMain.data('count');

    // console.log( sliderNavId + "::" + sliderNavOrientation );

    sliderMain.slick({
      slidesToShow: 1,
      dots: false,
      arrows: false,
      asNavFor: sliderNavId,
      fade: true,
    });
    
    // [420]   = mobileXs;
    // [576]   = mobileSm;
    // [768]   = tabletMd;
    // [1024]  = tabletLg;
    // [1440]  = desktop;

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
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: false,
            verticalSwiping: false,
            centerPadding: '25px'
          }
        }
      ],
    });
  });
}

// $(window).on('resize', function(){
  // let heightMain = $('.product-image .product-image__link').height();
  // let navCount =  typeof $('.product-image').data('count') !== undefined ? $('.product-image').data('count') : 2;
  // let navOffset = typeof $('.product-image').data('offset') !== undefined ? $('.product-image').data('offset') : 25;
  // let heightNav = 0;

  // if(window.innerWidth > 420){
  //   heightNav = (heightMain - 100)/Number(navCount) - navOffset - 2;
  //   $('.product-nav .product-nav__image').css('height', heightNav);
  // }
// });