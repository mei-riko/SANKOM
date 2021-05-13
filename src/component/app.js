import $ from 'jquery'

import '../component/slider/slider';
import '../component/filters/filter';
import '../component/product/product';
import '../component/tabs/tabs';
import '../component/tags/tags';
import '../component/faq/faq';
import '../component/input/input';
import '../component/tooltip/tooltip';

import '../component/header/header';
import '../component/navigation/nav';
import '../component/sidebar/sidebar';
import '../component/dialog/dialog';

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

    form.slideToggle();
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