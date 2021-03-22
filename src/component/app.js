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
});