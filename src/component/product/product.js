import $ from 'jquery';

// Sliders Product Images
const sliderMainElem = $('.product-slider .product-slider__swiper');
if( sliderMainElem.length > 0 ){
  sliderMainElem.each(function(){

    let sliderMain                = $(this);
    let sliderImage               = sliderMain.find('.product-image');
    let sliderNavId               = sliderImage.data('nav');


    // Navigation For Different Templates

    // Single Product
    if ( sliderImage.hasClass('product-image_single') ){
      let swiperNav =  new Swiper( sliderNavId, {
        // loop: true,

        slidesPerView: 4,
        spaceBetween: 10,

        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        // centeredSlides: true,

        breakpoints: {
          576: {
            direction: 'vertical',
            spaceBetween: 15,
          },
        },
      });
      let swiperMain = new Swiper( this , {
        spaceBetween: 15,
        // loop: true,
        effect: "fade",

        thumbs: {
          swiper: swiperNav,
        }
      });
    }
    // Complect Two Products
    if ( sliderImage.hasClass('product-image_complect-sm') ){      
      let swiperNav =  new Swiper( sliderNavId, {
        slidesPerView: 2,
        spaceBetween: 10,
        // centeredSlides: true,

        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
          576: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      });

      let swiperMain = new Swiper( this , {
        spaceBetween: 15,
        effect: "fade",

        thumbs: {
          swiper: swiperNav,
        }
      });
    }
    // Complect Three+ Products
    if ( sliderImage.hasClass('product-image_complect-lg') ){
      let swiperNav =  new Swiper( sliderNavId, {
        slidesPerView: 2,
        spaceBetween: 10,

        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,


        breakpoints: {
          576: {
            slidesPerView: 3,
            spaceBetween: 10,

            direction: 'vertical',
            // centeredSlides: true,
            // loop: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: 'vertical',
          },
        },
      });
      let swiperMain = new Swiper( this , {
        spaceBetween: 15,
        // loop: true,
        effect: "fade",

        thumbs: {
          swiper: swiperNav,
        }
      });
    }
  });
}

$(function(){
  // Show Fixed Product Bar
  let $productContent = $('[data-product="show"]');

  if ( $productContent.length > 0 ){
    let heightContent = Math.ceil( $productContent.height() );
    let offsetContent = Math.ceil( $productContent.offset().top );
  
    let $productFixedBar = $('.product-page_fixed');
    let offsetWindow = $(window).scrollTop();
  
    // If Offset True Show Sticky Info
    if ( offsetContent <= ( offsetWindow + heightContent ) ){
      $productFixedBar.addClass('product-page_fixed--active');
    }
    // Show Sticky Info On Scroll
    $( window ).on('scroll',function() {
      offsetWindow = $(this).scrollTop();
  
      if ( offsetContent > ( offsetWindow + heightContent )){
        $productFixedBar.removeClass('product-page_fixed--active');
      }else{
          $productFixedBar.addClass('product-page_fixed--active');
      }
    });
  }
  // Video In Content
  let $productVideo = $('.product-page .product-page__video.swiper-container');

  if( $productVideo.length > 0 ){
    $productVideo.each(function(index, element){
      // .product-page__video-pagination
      $(this).find(".swiper-pagination").addClass("pagination-" + index); 
      const swiperVideo = new Swiper(this, {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
  
  
        // And if we need
        pagination: {
          el: ".pagination-" + index,
          clickable: true,
        },
  
        breakpoints: {
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            // spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            direction: 'vertical',
            centeredSlides: true,
          },
        },
      });
    });
  }

});