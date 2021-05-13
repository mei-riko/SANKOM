import $ from 'jquery'

$('.cart .cart__block .cart__input-field').on('change', function(){
    // console.log( $(this).parent().next().hasClass('cart__input-info') );
    const parentRadio = $(this).closest('.cart__input-radio');
    const parentCheckbox = $(this).closest('.cart__input-checkbox');
    const parentBlock = $(this).closest('.cart__block');
    let infoInput;

    if( parentRadio.length > 0 ){
        infoInput = parentRadio.next('.cart__input-info');
        parentBlock.find('.cart__input-radio').removeClass('cart__input-radio--active').eq( parentRadio.index() ).addClass('cart__input-radio--active');
        infoInput.slideDown();
        parentBlock.find('.cart__input-info').eq(infoInput.index()).slideUp();
    }
    if( parentCheckbox.length > 0 ){
        infoInput = parentCheckbox.next('.cart__input-info');
        if( $(this).prop('checked') ){
            infoInput.slideDown();
        }else{
            infoInput.slideUp();
        }
    }
})