import $ from 'jquery';

// Show More Tags
$('.tags-row .tags-row__show').on('click', function(){
    let tagsShow = $(this);

    if ( !tagsShow.hasClass('active') ){
        tagsShow.addClass('active');
        tagsShow.text('Скрыть');
        tagsShow.parent().addClass('active');
    }else{
        tagsShow.removeClass('active');
        tagsShow.text('Показать все теги')
        tagsShow.parent().removeClass('active');
    }
});