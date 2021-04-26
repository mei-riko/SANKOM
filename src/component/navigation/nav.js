import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    let item = itemNav.find(".navbar__link");
    let nav = item.data("nav");

    if( $(".navbar__link.navbar__link--active").length > 0 && !item.hasClass("navbar__link--active") ){
        let navActive = $(".navbar__link.navbar__link--active");
        navActive.removeClass("navbar__link--active");
        $(".navbar .navbar__children" + navActive.data("nav")).removeClass("navbar__children--active");
    }

    item.addClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).addClass("navbar__children--active");
}
function navbarUnHover(){
    let item = $(".navbar").find(".navbar__link.navbar__link--active");
    let nav = item.data("nav");

    item.removeClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).removeClass("navbar__children--active");
}
// Mobile Navbar
function openNavbarOnClick( elem ){
    const idSidebar = elem.data('id');
    const navSidebar = elem.data('sidenav');

    const target = $('.sidebar#' + idSidebar);
    const targetNavbar = $('.navbar_mobile .navbar_mobile__parent[data-nav="' + navSidebar +'"]');

    let parentActive = $('.navbar_mobile .navbar_mobile__parent.navbar_mobile__parent--active');

    if ( target.length > 0 ){
        target.addClass('sidebar--active');
        $('.overlay').removeClass('overlay--disable');
        $('body').addClass('hidden');

        if( targetNavbar.length > 0 && !targetNavbar.hasClass('navbar_mobile__parent--active')){
            targetNavbar.addClass('navbar_mobile__parent--active');
            targetNavbar.find('.navbar_mobile__children').addClass('navbar_mobile__children--active');
            targetNavbar.find('.navbar_mobile__children').show();
                
            if( parentActive.length > 0 && targetNavbar !=  parentActive){
                parentActive.removeClass('navbar_mobile__parent--active');
                parentActive.find('.navbar_mobile__children').hide();
            }
        }
    } else{
        return null;
    }
}

$(function(){
    // Check Windows Size
    if ( $(window).width() > 1400 || !window.matchMedia('screen and (max-width: 1400px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Hover Nav
    var timeout = null;
    // Задержка скрытия меню 0.3сек
    $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child')
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

    // Mobile Sidebar Nav Show
    $('[data-sidenav]').on('click', function( event ){
        event.preventDefault();
        openNavbarOnClick( $(this) );
    });
    // Mobile Nav Open Children
    $('.navbar_mobile .navbar_mobile__parent .navbar_mobile__parent-icon').on('click', function(){
        const parent = $(this).parent();
        const children = parent.find('.navbar_mobile__children');
        const parentActive = $('.navbar_mobile .navbar_mobile__parent.navbar_mobile__parent--active');
        
        if( !parent.hasClass('navbar_mobile__parent--active') ){
            parent.addClass('navbar_mobile__parent--active');
            children.show();
            
            if( parentActive.length > 0 && parent !=  parentActive){
                parentActive.removeClass('navbar_mobile__parent--active');
                parentActive.find('.navbar_mobile__children').hide();
            }
        }else{
            parent.removeClass('navbar_mobile__parent--active');
            children.hide();
        }

        // console.log( parent.prepend( '<span>' + parent.offset().top + '</span>') );

        if( parent.offset().top > 75 || parent.offset().top < 0 ){
            parent.get(0).scrollIntoView(75);
        }
    });
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        // Hide Navigation Sidebar on Desktop
        $(".sidebar.sidebar_nav").removeClass("sidebar--active");
        $('.overlay').addClass('overlay--disable');
        $('body').removeClass('hidden')
        // Hide 
        const navbarActive = $(".navbar_mobile .navbar_mobile__parent.navbar_mobile__parent--active");
        navbarActive.find('.navbar_mobile__children').hide();
        navbarActive.removeClass("navbar_mobile__parent--active");

        // Remove Class
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        // Remove Class
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});