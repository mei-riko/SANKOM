import $ from 'jquery';

$('.filter-row .filter-row__title').on('click', function(){
    if( !$(this).hasClass('filter-row__title--active') ){
        $(this).addClass('filter-row__title--active');
        $(this).parent().addClass('filter-row--active');
        $(this).parent().find('.filter-row__content').slideDown();
    }else{
        $(this).removeClass('filter-row__title--active');
        $(this).parent().removeClass('filter-row--active');
        $(this).parent().find('.filter-row__content').slideUp();
    }
});

// Check Windows Size
$('.filter-nav_toggle .filter-nav_toggle__parent').on('click', function(){
    if ( $(window).width() < 576 || window.matchMedia('screen and (max-width: 576px)').matches ){
        if( !$(this).hasClass('filter-nav_toggle__parent--active') ){
            $(this).addClass('filter-nav_toggle__parent--active');
            $(this).parent().addClass('filter-nav_toggle--active');
            $(this).parent().find('.filter-nav_toggle__children').slideDown();
        }else{
            $(this).removeClass('filter-nav_toggle__parent--active');
            $(this).parent().removeClass('filter-nav_toggle--active');
            $(this).parent().find('.filter-nav_toggle__children').slideUp();
        }
    }
});

$(window).on('resize', function(){
    if ( $(window).width() > 576 || !window.matchMedia('screen and (max-width: 576px)').matches ){
        $('.filter-nav_toggle.filter-nav_toggle--active').removeClass('filter-nav_toggle--active');
        $('.filter-nav_toggle__parent.filter-nav_toggle__parent--active').removeClass('filter-nav_toggle__parent--active');
    }
} );