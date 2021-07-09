import $ from 'jquery';

import '../component/slider/slider';
import '../component/filters/filter';
import '../component/tabs/tabs';
import '../component/tags/tags';
import '../component/faq/faq';
import '../component/input/input';
import '../component/tooltip/tooltip';

import '../component/header/header';
import '../component/navigation/nav';
import '../component/sidebar/sidebar';
import '../component/dialog/dialog';

import '../component/product/product';
import '../component/cart/cart';

$(function() {
  // Minimal Height Main
  let heightMain = Math.ceil($(window).outerHeight(true) - $('header').outerHeight(true) - $('footer').outerHeight(true) );
  // console.log( heightMain );
  $('main').css('min-height', heightMain);

  // Animate Scroll
  $(".scroll").on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Fancybox Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });
  // Link Disable
  $(document).on('click', '[data-trigger="click"]', function(e){
    e.preventDefault();
  })
  // Open Promocode Form
  $(document).on('click', '.open-promocode', function(e){
    e.preventDefault();
    const form = $(this).siblings('.form.form_promocode');
    const textOpen = $(this).data('open');
    const textClose = $(this).data('close');

    if( !$(this).hasClass('open-promocode--active') ){
      $(this).addClass('open-promocode--active');
      $(this).text( textClose );
      form.slideDown({
        complete: function(){
          $(this).get(0).scrollIntoView({behavior: "smooth"});
        }
    });
    }else{
      $(this).removeClass('open-promocode--active');
      $(this).text( textOpen );
      form.slideUp();
    }
  });
  // Open More Content
  $('.open-content').on('click', function(){
    let block = $(this);
    let blockId = block.data( 'id' );

    if ( !block.hasClass('active') ){
      block.addClass('active');
      block.text('Скрыть подробности')
    }else{
      block.removeClass('active');
      block.text('Читать дальше >')
    }
    
    $('[data-content=' + blockId + ']').slideToggle();
  });
  // Open Any Block
  $('.open-block').on('click', function(e){
    e.preventDefault(); 

    let block = $(this);
    let blockId = block.data( 'id' );
    let blockOpen = block.data( 'open' );
    let blockClose = block.data( 'close' );

    $(blockId).slideToggle();

    if( blockOpen.length > 0 && blockClose.length > 0) {
      if ( !block.hasClass('active') ){
        block.addClass('active');
        block.text( blockClose )
      }else{
        block.removeClass('active');
        block.text( blockOpen );
      }
    }
  });
  // Open Callback Fixed On Click
  const $footerCallbackIcon = $('.footer-callback .footer-callback__icon');
  const $footerCallback = $footerCallbackIcon.parent();
  const $footerCallbackList = $footerCallback.find('.footer-callback__list');

  function callbackUnhover(){
    if ( $footerCallbackList.hasClass('footer-callback__list--active') ){
      $footerCallbackList.removeClass('footer-callback__list--active');
    }
  }

  $footerCallbackIcon.on('click', function(){
    if ( !$footerCallbackList.hasClass('footer-callback__list--active') ){
      $footerCallbackList.addClass('footer-callback__list--active');
    }else{
      $footerCallbackList.removeClass('footer-callback__list--active');
    }
  });
  // 
  // Open Callback Fixed On Hover
  let timeoutCallback = null;
  // Задержка скрытия 0.3сек
  $footerCallback
      .mouseenter(function(event){
          clearTimeout(timeoutCallback);
          timeoutCallback = setTimeout( function(){
            if ( !$footerCallbackList.hasClass('footer-callback__list--active') ){
              $footerCallbackList.addClass('footer-callback__list--active');
            }
          }, 100);
      })
      .mouseleave(function(event){
          clearTimeout(timeoutCallback);
          timeoutCallback = setTimeout( callbackUnhover, 300);
      });
  // B-lazy
  if( $('.b-lazy').length > 0 ){
    let bLazy = new Blazy({
      offset: 100, 
      success: function(element){
        setTimeout(function(){
          let parent = element.parentNode;
          parent.className = parent.className.replace(/\bloading\b/,'');
        }, 200);
      }
    });
    $('.owl-carousel').on('changed.owl.carousel', bLazy.revalidate);
    
  }
  // Select 2
  if( $('#chooseLocation select.input__field').lenght > 0 ){
    $('#chooseLocation select.input__field').select2();
  }
});

// Resize
$(window).on("resize", function(){
  // Minimal Height Main
  let heightMain = Math.ceil($(window).outerHeight(true) - $('header').outerHeight(true) - $('footer').outerHeight(true) );
  $('main').css('min-height', heightMain);
});

// Cобытие клика по веб-документу
import '../component/framework/mouseup';