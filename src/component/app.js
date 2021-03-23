import $ from 'jquery'
import '../component/slider/slider';

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
    console.log ( elem );
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

  // Open More Content
  const openContent = ( block ) => {
    let blockId = block.data( 'id' );
    if ( !block.hasClass('active') ){
      block.addClass('active');
      block.text('Скрыть подробности')
    }else{
      block.removeClass('active');
      block.text('Читать дальше >')
    }

    $('[data-content=' + blockId + ']').slideToggle();
  }
  $('.open-content').on('click', function(){
    openContent( $(this) );
  });
  
});