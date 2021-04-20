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

$(function(){
    if ( $(window).width() > 1400 || !window.matchMedia('screen and (max-width: 1400px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Hover Nav
    var timeout = null;
    // Задержка скрытия меню 0.4сек
    $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child')
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 200);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 400);
        });
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        // Hide Navigation on Desktop
        $(".navbar").removeClass("navbar--active");
        $(".navbar .navbar__children.navbar__children--active").removeClass("navbar__children--active");
        // Remove Class
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        // Remove Class
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});