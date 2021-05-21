import $ from 'jquery';
import {closeNavbarOnClick} from '../navigation/nav';

// Open Sidebar Function
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
    // Change z-index
    $('.navbar-mobile').addClass('navbar-mobile--open-sidebar');
    $('.header.header_sticky').addClass('header_sticky--open-sidebar');

}
$(document).on('click', '[data-sidebar]', function( event ){
    event.preventDefault();
    
    if( $('body').hasClass('open-navbar') ){
        closeNavbarOnClick();
    }
    
    openSidebarOnClick( $(this) );
});
// Close Sidebar
$('.sidebar .sidebar__close').on('click', function(){
    $(this).closest('.sidebar').removeClass('sidebar--active');
    $('.overlay').addClass('overlay--disable');
    $('body').removeClass('hidden');
    $('body').removeClass('open-sidebar');

    // Change z-index
    $('.navbar-mobile').removeClass('navbar-mobile--open-sidebar');
    $('.header.header_sticky').removeClass('header_sticky--open-sidebar');
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
        
        // Change z-index
        $('.navbar-mobile').removeClass('navbar-mobile--open-sidebar');
        $('.header.header_sticky').removeClass('header_sticky--open-sidebar');
    }
});

// Calculate Cart Sidebar Height
function cartContentHeight(){
    // Height Sidebar
    let sidebarHeight = Math.ceil( $('.sidebar.sidebar_cart#cart').height() );

    // Height Sidebar Close With Margin
    let sidebarCloseHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar__close').outerHeight(true) );

    // Height Sidebar Content
    // let sidebarContentHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar__content').height() );

    // Height Sidebar Footer
    let sidebarFooterHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar__footer').outerHeight(true) );

    // Height Title With Margin
    let sidebarTitleHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar__title').outerHeight(true) );
    
    // Height Cart Prop
    let sidebarCartPropHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar_cart__prop').outerHeight(true) );
    
    // Height Cart Content
    // let sidebarCartContentHeight = Math.ceil( $('.sidebar.sidebar_cart#cart .sidebar_cart__content').height() );

    let permissibleHeight = sidebarHeight - (sidebarCloseHeight + sidebarFooterHeight) - (sidebarTitleHeight + sidebarCartPropHeight) - 15;

    if( permissibleHeight != undefined && permissibleHeight > 100){
        $('.sidebar.sidebar_cart#cart .sidebar_cart__content').height( permissibleHeight );
    }
}
$(function(){
    cartContentHeight();
});
$(window).on('resize', function(){
    cartContentHeight();
});