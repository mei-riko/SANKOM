import $ from 'jquery'

import '../component/slider/slider';
import '../component/filters/filter';
import '../component/product/product';
import '../component/tabs/tabs';
import '../component/navigation/nav';
import '../component/sidebar/sidebar';
import '../component/dialog/dialog';

$(document).ready(() =>{
  $(".scroll").on('click', function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });
  // Link Disable
  $('a[data-trigger="click"]').on('click', function(e){
    e.preventDefault();
  })

  // Input
  const addFocusListener = (elem) => {
    // console.log ( elem );

    elem.addEventListener('focus', function() {
      elem.classList.add('input__field--focus');
    });
    elem.addEventListener('blur', function() {
      if( elem.value.length === 0 ){
        elem.classList.remove('input__field--focus');
      }
    });
  }
  let inputs = $('.input__field');
  for(let i = 0; i < inputs.length; i++) {
    addFocusListener( inputs[i] );
  }
  $('.input.input_label-inside').on('click', function(){
    $(this).find('.input__field').focus();
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
  // Show More Tags
  $('.tags-row .tags-row__show').on('click', function(){
    let tagsShow = $(this);

    if ( !tagsShow.hasClass('active') ){
      tagsShow.addClass('active');
      tagsShow.text('Скрыть');
      tagsShow.parent().addClass('active');
    }else{
      tagsShow.removeClass('active');
      tagsShow.text('Показать все теги')
      tagsShow.parent().removeClass('active');
    }
    
  });
  // Faq Toggle
  $('.faq.faq_toggle .faq__title').on('click', function(e){
    e.preventDefault;
    let faq = $(this);
    faq.parent().find(".faq__content").slideToggle();
    faq.parent().toggleClass('faq_toggle--active');    
  });

  // B-lazy
  if( $('.b-lazy').length > 0 ){
    var bLazy = new Blazy({
      offset: 100, 
      // breakpoints: [{
      //   width: 768, 
      //   src: 'data-src-small'
      // }],
      success: function(element){
        setTimeout(function(){
          var parent = element.parentNode;
          parent.className = parent.className.replace(/\bloading\b/,'');
        }, 200);
      }
    });

    $('.owl-carousel').on('changed.owl.carousel', bLazy.revalidate);
  }
});