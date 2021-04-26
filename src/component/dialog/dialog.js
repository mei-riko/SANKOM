import $ from 'jquery';

function openDialogOnClick( elem ){
    const idDialog = elem.data('dialog');
    const target = $('.dialog#' + idDialog);

    console.log( target );

    if ( target.length > 0 ){
        target.toggleClass('dialog--active');
        // $('.overlay').removeClass('overlay--disable');
        // $('body').addClass('hidden');
    } else{
        return null;
    }
}

$('[data-dialog]').on('click', function( event ){
    event.preventDefault();
    openDialogOnClick( $(this) );
});

// Cобытие клика по веб-документу (включая диалоговое окно и его дочерние элементы)
$(document).on('mouseup', function (e){ 
    let dialogActive = $(".dialog.dialog--active"); // элемент
    dialogActive.removeClass('dialog--active');
});