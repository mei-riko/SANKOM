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

$(document).on("mouseup", function(e) {
    let dialog = $(".dialog_info"),
    dialogClose = dialog.find(".dialog_info__close"),
    dialogToggle = dialog.find(".dialog_info__toggle"),
    dialogIntro = dialog.find(".dialog_info__intro"),
    dialogIntroOpen = dialogIntro.data("open"),
    dialogIntroClose = dialogIntro.data("close");
    
    if ( dialog.is(e.target) // клик был по блоку
          ||  dialog.has(e.target).length != 0 // или по его дочерним элементам
    ){
        if( $(".dialog_info__close--active").is(e.target) ){
            dialog.removeClass("dialog_info--active");
            dialogClose.removeClass("dialog_info__close--active");
            dialogIntro.text(dialogIntroClose);
        }else if( $(".dialog_info__toggle--active").is(e.target) ){
            dialog.removeClass("dialog_info--active");
            dialogToggle.removeClass("dialog_info__toggle--active");
            dialogIntro.text(dialogIntroClose);
        }else{
            dialog.addClass("dialog_info--active");
            dialogClose.addClass("dialog_info__close--active");
            dialogToggle.addClass("dialog_info__toggle--active");
            dialogIntro.text(dialogIntroOpen);
        }
    }
});