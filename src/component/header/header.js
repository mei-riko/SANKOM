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

    // добавляем класс логотипу
    document.querySelector('.header.header_sticky .header__logo').classList.add('header_sticky__logo');

    // Turn Off Transition 
    $(".header.header_sticky").addClass("header_sticky--onload");
    // If Onload Offset Top - Show Sticky
    if ( $(window).scrollTop() > 200 && !$(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".header.header_sticky").addClass("header_sticky--active");
    }

    $(document).on("click", ".header .header__btn-cabinet", function(e){
        let cabinet = $(this);
        let cabinetNav = cabinet.find(".header__cabinet-list");

        if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
            // e.preventDefault();
            if( !cabinetNav.hasClass("header__cabinet-list--active") ){
                cabinetNav.addClass("header__cabinet-list--active")
            }else{
                cabinetNav.removeClass("header__cabinet-list--active")
            }
        }else{
            window.location.href = cabinet.data("href");
        }
    });
});
// Cabinet Nav
$(document).on("mouseup", function(e) {
    let cabinetBtn = $(".header .header__btn-cabinet");
    let cabinetNav = $(".header .header__cabinet-list");
    if ( !cabinetNav.is(e.target) // клик был не по блоку
        &&  cabinetNav.has(e.target).length === 0 // или не по его дочерним элементам
        &&  !cabinetBtn.has(e.target).length === 0 // или не по его дочерним элементам
    ){
        cabinetNav.removeClass("header__cabinet-list--active");
    }
});
// Resize
$(window).on("resize", function(){
    $(".header .header__cabinet-list").removeClass("header__cabinet-list--active");
});
// Scroll
$(window).on("scroll", function(){
    // Turn On Transition 
    $(".header.header_sticky").removeClass("header_sticky--onload");

    // Show Header Sticky Onscroll
    if ( $(this).scrollTop() > 200 && !$(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".header .header__cabinet-list").removeClass("header__cabinet-list--active");

        $(".header.header_sticky").addClass("header_sticky--active");
    }
    // Remove Open Navbar in Sticky Header and Hide Sticky
    if ( $(this).scrollTop() <= 200 && $(".header.header_sticky").hasClass("header_sticky--active") ) {
        $(".navbar__link.navbar__link--active").removeClass("navbar__link--active");
        $(".navbar__children.navbar__children--active").removeClass("navbar__children--active");
        $(".header .header__cabinet-list").removeClass("header__cabinet-list--active");

        $(".header.header_sticky").removeClass("header_sticky--active");
    }
});