import $ from 'jquery';

$(function() {
    if ( $(window).scrollTop() > 200 && !$(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".header.header_sticky").addClass("header_sticky--active");
    }
});

$(window).on("scroll", function(){
    // console.log( $(this).scrollTop() );
    if ( $(this).scrollTop() > 200 && !$(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".header.header_sticky").addClass("header_sticky--active");
    }
    if ( $(this).scrollTop() <= 200 && $(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".header.header_sticky").removeClass("header_sticky--active");
    }
});