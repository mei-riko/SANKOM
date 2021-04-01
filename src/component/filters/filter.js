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