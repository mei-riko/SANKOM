import $ from 'jquery';

// Input
const addFocusListener = (elem) => {
    // console.log ( elem );
    elem.addEventListener('focus', function() {
        elem.classList.add('input__field--focus');
    });
    elem.addEventListener('blur', function() {
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