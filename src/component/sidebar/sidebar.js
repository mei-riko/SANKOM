import $ from 'jquery';
import {closeNavbarOnClick} from '../navigation/nav';

function openSidebarOnClick( elem ){
    const idSidebar = elem.data('sidebar');
    const target = $('.sidebar#' + idSidebar);

    if ( target.length > 0 ){
        target.addClass('sidebar--active');
        $('.overlay').removeClass('overlay--disable');
        $('body').addClass('hidden');
        $('body').addClass('open-sidebar');
    } else{
        return null;
    }
    // Change z-index mobile nav
    $('.navbar-mobile').addClass('navbar-mobile--open-sidebar');
}

$('[data-sidebar]').on('click', function( event ){
    event.preventDefault();
    
    if( $('body').hasClass('open-navbar') ){
        closeNavbarOnClick();
    }
    
    openSidebarOnClick( $(this) );
});

$('.sidebar .sidebar__close').on('click', function(){
    $(this).closest('.sidebar').removeClass('sidebar--active');
    $('.overlay').addClass('overlay--disable');
    $('body').removeClass('hidden');
    $('body').removeClass('open-sidebar');

    // Change z-index mobile nav
    $('.navbar-mobile').removeClass('navbar-mobile--open-sidebar');
});

// Cобытие клика по веб-документу
$(document).on('mouseup', function (e){ 
    let sidebarActive = $(".sidebar.sidebar--active"); // элемент
    if (!sidebarActive.is(e.target) // клик был не по блоку
          && sidebarActive.has(e.target).length === 0 // и не по его дочерним элементам
          && $('body').hasClass('open-sidebar')
    ) { 
        sidebarActive.removeClass('sidebar--active');
        $('.overlay').addClass('overlay--disable');
        $('body').removeClass('hidden');
        $('body').removeClass('open-sidebar');
        
        // Change z-index mobile nav
        $('.navbar-mobile').removeClass('navbar-mobile--open-sidebar');
    }
});