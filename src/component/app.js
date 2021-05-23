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
  // Open Callback Fixed
  $('.footer-callback .footer-callback__icon').on('click', function(){
    let icon = $(this);
    let list = icon.parent().find('.footer-callback__list');

    if ( !list.hasClass('footer-callback__list--active') ){
      list.addClass('footer-callback__list--active');
    }else{
      list.removeClass('footer-callback__list--active');
    }
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
});

// Cобытие клика по веб-документу
import '../component/framework/mouseup';