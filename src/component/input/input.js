import $ from 'jquery';

// Input
const addFocusListener = (elem) => {
    // console.log ( elem );
    elem.addEventListener('focus', function() {
        elem.classList.add('input__field--focus');

        // Default Mask Is RU
        if( elem.classList.contains('phone') && elem.value.length === 0 ){
            elem.value = '7';
        }
    });
    elem.addEventListener('blur', function() {
        if( elem.classList.contains('phone') && elem.value === '+7              ' ){
            elem.value = '';
        }
        if( elem.value.length === 0 ){
            elem.classList.remove('input__field--focus');
        }
    });
}
let inputs = $('.input__field');
for(let i = 0; i < inputs.length; i++) {
    addFocusListener( inputs[i] );
}
$('.input.input_label-inside').on('click', function(){
    $(this).find('.input__field').focus();
});

$(function() {
    // Input mask
    if( $('input.phone').length > 0 ) {
        $('input.phone').inputmask({
            mask: "+9 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: false,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('input__field--error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('input__field--error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
            },
        })
    }
});

$('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});


// Change Input Field On Callback Sidebar
$('.sidebar#callback .radio.show .radio__input').on('change', function(){
    if( $(this).closest('.show').hasClass('show_email') ){
        $(this).closest('.form').find('.form__toggle-phone').hide().removeClass('input__field--error');;
        $(this).closest('.form').find('.form__toggle-email').show();
    }
    if( $(this).closest('.show').hasClass('show_phone') ){
        $(this).closest('.form').find('.form__toggle-email').hide();
        $(this).closest('.form').find('.form__toggle-phone').show();
    }
});