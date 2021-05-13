import $ from 'jquery';

$(function() {
    // создаём контейнер
    const container = document.createElement('div');
    // добавляем класс
    container.classList.add('container');

    // находим место под закрепленное меню
    const headerContainer = document.querySelector('.header.header_sticky');
    // клонируем нужную часть меню
    const header = document.querySelector('.header .header__main').cloneNode(true);
    // добавляем класс
    header.classList.add('header_sticky__main');

    container.append( header );
    headerContainer.append( container );

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
        $(".navbar__link.navbar__link--active").removeClass("navbar__link--active");
        $(".navbar__children.navbar__children--active").removeClass("navbar__children--active");
        $(".header.header_sticky").removeClass("header_sticky--active");
    }
});