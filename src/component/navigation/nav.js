import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    let parentHeader = itemNav.closest('.header');
    let item = itemNav.find(".navbar__link");
    let nav = item.data("nav");

    if( parentHeader.find(".navbar__link.navbar__link--active").length > 0 && !item.hasClass("navbar__link--active") ){
        let navActive = $(".navbar__link.navbar__link--active");
        navActive.removeClass("navbar__link--active");
        parentHeader.find(".navbar .navbar__children" + navActive.data("nav")).removeClass("navbar__children--active");
    }

    item.addClass("navbar__link--active");
    parentHeader.find(".navbar .navbar__children" + nav).addClass("navbar__children--active");
}
function navbarUnHover(){
    let item = $('.navbar').find(".navbar__link.navbar__link--active");
    let nav = item.data("nav");

    item.removeClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).removeClass("navbar__children--active");
}
function navbarDesktopInitialize( itemNav ){
    // Desktop Hover Nav
    let timeout = null;
    // Задержка скрытия меню 0.3сек
    itemNav
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 100);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 300);
        });
}

// Mobile Navbar
function openNavbarOnClick( elem ){
    const idNavbar = elem.data('navbar');
    const target = $('.navbar-sidebar#' + idNavbar);

    // Если есть открытое меню - скрыть его
    $(".navbar-sidebar").removeClass("navbar-sidebar--active");

    if ( target.length > 0 ){
        target.addClass('navbar-sidebar--active');
        $('.overlay').removeClass('overlay--disable');
        $('body').addClass('hidden');
        $('body').addClass('open-navbar');
    } else{
        return null;
    }

    // Change z-index
    $('.header.header_sticky').addClass('header_sticky--open-sidebar');
}
export function closeNavbarOnClick(){
    $(".navbar-sidebar").removeClass("navbar-sidebar--active");
    $(".navbar-mobile .navbar-mobile__item").removeClass("navbar-mobile__item--active");
    
    if( $('body').hasClass('open-navbar') && !$('body').hasClass('open-sidebar') ){
        $('body').removeClass('hidden');
        $('.overlay').addClass('overlay--disable');
        // Change z-index
        $('.header.header_sticky').removeClass('header_sticky--open-sidebar');
    }

    $('body').removeClass('open-navbar');
};

$('.navbar-sidebar .navbar-sidebar__close').on('click', function(){
    closeNavbarOnClick();
});

$(function(){
    // Check Windows Size
    if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        $('.navbar').removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $('.navbar').removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Navbar
    navbarDesktopInitialize( $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child') );

    // Mobile Sidebar Nav
    $(document).on('click', "[data-navbar]", function( event ){
        event.preventDefault();

        if( !$(this).hasClass('navbar-mobile__item--active') ){
            if( $('body').hasClass('open-sidebar') ){
                $(".sidebar.sidebar--active").removeClass('sidebar--active');
                $('body').removeClass('open-sidebar');
            }
            openNavbarOnClick( $(this) );
            // Убрать активные классы у кнопок, кроме той, на которую нажали
            $(this).parent().find(".navbar-mobile__item").removeClass("navbar-mobile__item--active").eq($(this).index()).addClass("navbar-mobile__item--active");
        }else{
            closeNavbarOnClick();
        }
    });

    // Mobile Nav Slide
    $('.navbar_mobile .navbar_mobile__category .navbar_mobile__category-title').on('click', function(e){
        e.preventDefault();

        const parent = $(this).parent();
        const title = $(this);
        const children = parent.find('.navbar_mobile__category-children');

        const parentActive = $('.navbar_mobile .navbar_mobile__category.navbar_mobile__category--active');

        
        if( !parent.hasClass('navbar_mobile__category--active') ){
            parent.addClass('navbar_mobile__category--active');
            title.addClass('navbar_mobile__category-title--active');
            children.show();
            
            if( parentActive.length > 0 && parent !=  parentActive){
                parentActive.removeClass('navbar_mobile__category--active');
                parentActive.find('.navbar_mobile__category-title').removeClass('navbar_mobile__category-title--active');
                parentActive.find('.navbar_mobile__category-children').hide();
            }
        }else{
            parent.removeClass('navbar_mobile__category--active');
            title.removeClass('navbar_mobile__category-title--active');
            children.hide();
        }

    });
    $('.navbar_mobile .navbar_mobile__parent .navbar_mobile__parent-link').on('click', function(e){
        e.preventDefault();

        const parent = $(this).parent();
        const title = $(this);
        const icon = $(this).find('.navbar_mobile__parent-icon');
        const children = $('.navbar_mobile__children#' + icon.data('nav') );

        const parentActive = $('.navbar_mobile .navbar_mobile__parent.navbar_mobile__parent--active');
        
        if( !parent.hasClass('navbar_mobile__parent--active') ){
            parent.addClass('navbar_mobile__parent--active');
            icon.addClass('navbar_mobile__parent-icon--active');
            title.addClass('navbar_mobile__parent-link--active');

            children.show();
            
            if( parentActive.length > 0 && parent !=  parentActive){
                parentActive.removeClass('navbar_mobile__parent--active');
                parentActive.find('.navbar_mobile__parent-link').removeClass('navbar_mobile__parent-link--active');
                parentActive.find('.navbar_mobile__parent-icon').removeClass('navbar_mobile__parent-icon--active');
                
                let childrenActiveId = parentActive.find('.navbar_mobile__parent-icon').data('nav');
                parentActive.find('.navbar_mobile__children#' + childrenActiveId).hide();
            }
        }else{
            parent.removeClass('navbar_mobile__parent--active');
            icon.removeClass('navbar_mobile__parent-icon--active');
            title.removeClass('navbar_mobile__parent-link--active');

            children.hide();
        }
        // if( parent.offset().top > 75 || parent.offset().top < 0 ){
        //     parent.get(0).scrollIntoView();
        // }
    });
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        // Close Navigation Sidebar on Desktop
        closeNavbarOnClick();
        // Hide Open Children Nav
        const navbarActive = $(".navbar_mobile .navbar_mobile__parent.navbar_mobile__parent--active");
        navbarActive.find('.navbar_mobile__children').hide();
        navbarActive.removeClass("navbar_mobile__parent--active");

        // Desktop Navbar
        navbarDesktopInitialize( $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child') );

        // Remove Class
        $('.navbar').removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        // Remove Class
        $('.navbar').removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});

// Cобытие клика по веб-документу
$(document).on('mouseup', function (e){ 
    let navbarActive = $(".navbar-sidebar.navbar-sidebar--active"); // элемент
    let navbarItem = $(".navbar-mobile .navbar-mobile__item");


    if (!navbarActive.is(e.target) // клик был не по блоку
          && navbarActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !navbarItem.is(e.target)
          && $('body').hasClass('open-navbar')
    ) {
        closeNavbarOnClick();
        // navbarActive.removeClass('navbar-sidebar--active');
        // $('.overlay').addClass('overlay--disable');
        // $('body').removeClass('hidden')
    }
});