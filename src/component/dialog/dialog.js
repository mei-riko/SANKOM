import $ from 'jquery';

function openDialogOnClick( elem ){
    const idDialog = elem.data('dialog');
    const target = $('.dialog#' + idDialog);

    if ( target.length > 0 ){
        target.toggleClass('dialog--active');
    } else{
        return null;
    }
}

$('[data-dialog]').on('click', function( event ){
    event.preventDefault();
    openDialogOnClick( $(this) );
});

$('.dialog .dialog__true').on('click', function(){
    $(this).closest('.dialog').removeClass('dialog--active');
});
$('.dialog .dialog__false').on('click', function(){
    $(this).closest('.dialog').removeClass('dialog--active');
});
$('.dialog .dialog__close').on('click', function(){
    if( $(this).data('action') === 'close' ){
        $(this).closest('.dialog').removeClass('dialog--active');
    }
    if( $(this).data('action') === 'toggle'){
        if( !$(this).hasClass('dialog__close--toggle') ){
            $(this).addClass('dialog__close--toggle');
            $(this).closest('.dialog').addClass('dialog--toggle');
            $(this).closest('.dialog').find('.dialog__content').addClass('dialog__content--toggle').hide();
            $(this).text( $(this).data('close') );
        }else{
            $(this).removeClass('dialog__close--toggle');
            $(this).closest('.dialog').removeClass('dialog--toggle');
            $(this).closest('.dialog').find('.dialog__content').removeClass('dialog__content--toggle').show();
            $(this).text( $(this).data('open') );
        }
    }
});