import $ from 'jquery';
import {closeNavbarOnClick} from '../navigation/nav';

$(document).on('mouseup', function (e){ 

    // Element For Callback (pink icon)
    let callbackActive = $(".footer-callback__list.footer-callback__list--active"); // элемент
    let callbackIcon = $(".footer-callback__icon");
  
    if ( !callbackIcon.is(e.target) ) {
      callbackActive.removeClass('footer-callback__list--active');
    }

    // Navbar Closing
    let navbarActive = $(".navbar-sidebar.navbar-sidebar--active"); // элемент
    let navbarItem = $(".navbar-mobile .navbar-mobile__item");

    if (!navbarActive.is(e.target) // клик был не по блоку
          && navbarActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !navbarItem.is(e.target)
          && $('body').hasClass('open-navbar')
    ) {
        closeNavbarOnClick();
    }
    let sidebarActive = $(".sidebar.sidebar--active"); // элемент

    if (!sidebarActive.is(e.target) // клик был не по блоку
          && sidebarActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$('.select2-container').is(e.target)
          && $('.select2-container').has(e.target).length === 0
          && !$('.select2-container').hasClass('select2-container--open')
          && !$('.select2-container').hasClass('select2-container--focus')
          && $('body').hasClass('open-sidebar')
    ) { 
        sidebarActive.removeClass('sidebar--active');

        $('.overlay').addClass('overlay--disable');
        $('body').removeClass('hidden');
        $('body').removeClass('open-sidebar');
        
        // Change z-index
        $('.navbar-mobile').removeClass('navbar-mobile--open-sidebar');
        $('.header.header_sticky').removeClass('header_sticky--open-sidebar');
        $('.dialog').removeClass('dialog--open-sidebar');
    }
});