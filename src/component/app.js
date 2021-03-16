import $ from 'jquery'
$(document).ready(() =>{
  $(".scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });
  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });
  // Link Disable
  $('a[data-trigger="click"]').click(function(e){
    e.preventDefault();
  })
	// Navbar
  $(".header .header__nav#open-nav").on("click", function(){
    $(".navbar.navbar_header").addClass("navbar_header--active");
    $(".overlay").addClass("overlay--navbar");
    $(".overlay").removeClass("overlay--disable");
    $("body").addClass("hidden open-navbar compensate-for-scrollbar");

  });
  $(".navbar.navbar_header #close-nav").on("click", function(){
      $(".navbar.navbar_header").removeClass("navbar_header--active");

      $(".overlay").removeClass("overlay--navbar");
      $(".overlay").addClass("overlay--disable");
      
      $("body").removeClass("hidden");
      $("body").removeClass("open-navbar");
      $("body").removeClass("compensate-for-scrollbar");
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar.navbar_header.navbar_header--active"); // элемент
    if (!dropdownActive.is(e.target) // клик был не по блоку
          && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$("#open-nav").is(e.target) ) { 
              $(".navbar.navbar_header").removeClass("navbar_header--active");

              $(".overlay").removeClass("overlay--navbar");
              $(".overlay").addClass("overlay--disable");
              
              $("body").removeClass("hidden");
              $("body").removeClass("open-navbar");
              $("body").removeClass("compensate-for-scrollbar");
            }
  });
});