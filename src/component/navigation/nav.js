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

    // console.log( elem.hasClass("navbar-mobile__item--active") );
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

    // Mobile Open Sidebar Nav
    $(document).on('click', "[data-navbar]", function( event ){
        event.preventDefault();
        // console.log(event.target);
        // console.log(event.target.parentNode);

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

    // Open Mobile Nav Inside Level 1
    $('.navbar_mobile .navbar_mobile__category .navbar_mobile__title').on('click', function(event){
        event.preventDefault();

        const $category = $(this).closest('.navbar_mobile__category');
        const $categoryTitle = $(this);
        const $categoryChildren = $category.find('.navbar_mobile__children');
        
        const $categoryTabs = $(this).closest('.navbar_mobile__tabs-content');
        const $categoryActive = $categoryTabs.find('.navbar_mobile__category--active');
        
        if( !$categoryTitle.hasClass('navbar_mobile__title--active') ){
            $category.addClass('navbar_mobile__category--active');
            $categoryTitle.addClass('navbar_mobile__title--active');
            $categoryChildren.addClass('navbar_mobile__children--active').slideDown();

            // Если есть активная категория и она не совпадает с той, по которой нажали
            if( $categoryActive.length > 0 && $category != $categoryActive){
                $categoryActive.removeClass('navbar_mobile__category--active');
                $categoryActive.find('.navbar_mobile__title').removeClass('navbar_mobile__title--active');
                $categoryActive.find('.navbar_mobile__children').removeClass('navbar_mobile__children--active').hide();
            }
        }else{
            $category.removeClass('navbar_mobile__category--active');
            $categoryTitle.removeClass('navbar_mobile__title--active');
            $categoryChildren.removeClass('navbar_mobile__children--active').slideUp();
        }
    });
    // Open Mobile Nav Inside Level 2
    $('.navbar_mobile .navbar_mobile__category .navbar_mobile__children-category').on('click', function(event){
        event.preventDefault();

        const $subcategoryTitle = $(this);
        const $subcategory = $('.navbar_mobile__subcategory' + $subcategoryTitle.data('navcategory'));

        if( $subcategory.length > 0 ){
            $subcategory.addClass('navbar_mobile__subcategory--active');
        }

    });
    $('.navbar_mobile .navbar_mobile__subcategory .navbar_mobile__subcategory-back').on('click', function(event){
        event.preventDefault();
        $('.navbar_mobile__subcategory.navbar_mobile__subcategory--active').removeClass('navbar_mobile__subcategory--active');
    });
    // Open Mobile Nav Tabs
    $('.navbar_mobile .navbar_mobile__tabs .navbar_mobile__tabs-item').on('click', function(event){
        const $tabsItem = $(this);
        const tabsContentId = $tabsItem.data('navtab');

        const $tabsContainer = $tabsItem.closest('.navbar_mobile__tabs-container');
        const $tabsItemActive = $tabsContainer.find('.navbar_mobile__tabs-item--active');

        if( !$tabsItem.hasClass('navbar_mobile__tabs-item--active') ){
            $tabsItem.addClass('navbar_mobile__tabs-item--active');
            $( tabsContentId ).show() ;
            
            if( $tabsItemActive.length > 0 && $tabsItem !=  $tabsItemActive){
                $tabsItemActive.removeClass('navbar_mobile__tabs-item--active');
                $( $tabsItemActive.data('navtab') ).hide() ;
            }
        }
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