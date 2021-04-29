import $ from 'jquery';

// Faq Toggle
$('.faq.faq_toggle .faq__title').on('click', function(e){
    e.preventDefault;
    let faq = $(this);
    faq.parent().find(".faq__content").slideToggle();
    faq.parent().toggleClass('faq_toggle--active');    
});