import $ from 'jquery';

export let sliderInitialized = (countShow, sliderClass, sliderContainer, arrows, dots, loop, margin, stagePadding, responsive) => {
    // Находим слайдер для инициализации
    let $sliderItem = $(sliderClass);
    // Если такого элемента нет, то завершаем выполнение
    if( $sliderItem.length === 0 ){ return null; }
    // Создаем переменные для работы с адаптивностью
    let sliderLength = $sliderItem.find('.slider__item').length,
        countLength = 0,
        responsiveSlider = [];

    // Записываем сколько должно быть слайдов на каждом из брейкпоинтов
    responsiveSlider[0] = countShow;
    if( responsive != undefined ){
        responsiveSlider[1] = responsive[420].items;
        responsiveSlider[2] = responsive[576].items;
        responsiveSlider[3] = responsive[768].items;
        responsiveSlider[4] = responsive[1024].items;
        responsiveSlider[5] = responsive[1440].items;
    }
    // console.log( responsiveSlider + ' width ' + window.innerWidth);

    // Если слайдер был инициализирован ранее, то учитываем только неклонированные элементы
    if( $sliderItem.hasClass('owl-loaded') ){
        sliderLength = $sliderItem.find(".owl-item.active").length;
    }
    
    // В зависимости от размера экрана устанавливаем проверочную величину
    if      (window.innerWidth <= 420)                              { countLength = responsiveSlider[0]; }
    else if (window.innerWidth > 420 && window.innerWidth <= 576)   { countLength = responsiveSlider[1]; }
    else if (window.innerWidth > 576 && window.innerWidth <= 768)   { countLength = responsiveSlider[2]; }
    else if (window.innerWidth > 768 && window.innerWidth <= 1024)  { countLength = responsiveSlider[3]; }
    else if (window.innerWidth > 1024 && window.innerWidth <= 1440) { countLength = responsiveSlider[4]; }
    else                                                            { countLength = responsiveSlider[5]; }
    
    // Если число слайдов больше проверочного значения, то инициализируем слайдер
    // Иначе разрушаем ранее инициализированный слайдер
    if( sliderLength > countLength){
        if( $(sliderContainer).length > 0 ){
            $sliderItem.closest(sliderContainer).addClass(sliderContainer.replace('.', '') + '--active');
            $sliderItem.closest(sliderContainer).removeClass(sliderContainer.replace('.', '') + '--disable');
        }

        // console.log('Initial: in array ' + countLength + ' de facto ' + sliderLength);
        $sliderItem.owlCarousel({
            items: countShow,
            loop: loop,
            margin: margin,
            nav: arrows,
            dots: dots,
            stagePadding: stagePadding,
            responsive: responsive,
        })
    }else{
        if( $(sliderContainer).length > 0 ){
            $sliderItem.closest(sliderContainer).removeClass(sliderContainer.replace('.', '') + '--active');
            $sliderItem.closest(sliderContainer).addClass(sliderContainer.replace('.', '') + '--disable');
        }

        // console.log('Destroy - ' + countLength);
        $sliderItem.trigger('destroy.owl.carousel');
    }
}

// Конструктор объектов для адаптивности
class Responsive {
    constructor(mobileXs, mobileSm, tabletMd, tabletLg, desktop) {
        this[420]   = mobileXs;
        this[576]   = mobileSm;
        this[768]   = tabletMd;
        this[1024]  = tabletLg;
        this[1440]  = desktop;
    }
}
// Recommendation Slider
const recommendationResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 3, loop: false, stagePadding: 0, margin: 20,},
    {items: 3, loop: false, stagePadding: 0, margin: 20,},
    {items: 3, loop: false, stagePadding: 0, margin: 20,},
    {items: 4, loop: false, stagePadding: 0, margin: 25,},
);
// Subcategory Slider
const subcategoryIndexResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 3, stagePadding: 50, margin: 15,},
    {items: 4, },
    {items: 5, },
    {items: 6, loop: false, stagePadding: 50, margin: 25,},
);
const subcategoryCatalogResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 3, },
    {items: 4, },
    {items: 5, },
    {items: 5, },
);
// Category Slider
const categoryResponsive = new Responsive(
    {items: 2, stagePadding: 50,},
    {items: 2, stagePadding: 50, margin: 15,},
    {items: 3, },
    {items: 3, },
    {items: 4, loop: false, stagePadding: 25, margin: 15,},
);
// Video Slider
const videoResponsive = new Responsive(
    {items: 2, },
    {items: 2, },
    {items: 2, },
    {items: 2, },
    {items: 2, },
);
// Tags Slider
const tagsResponsive = new Responsive(
    {items: 2, },
    {items: 3, },
    {items: 5, },
    {items: 7, },
    {items: 9, stagePadding: 25, margin: 15, loop: false,},
);
// Index Banner Slider
const bannerResponsive = new Responsive(
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 1, },
);
// Promo Slider
const promoResponsive = new Responsive(
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 1, },
    {items: 3, stagePadding: 25, margin: 15, loop: false,},
);

$(function() {
    // Recommendation Slider
    sliderInitialized(2, '.slider.slider_recommendation',       '.slider-xs-container', false, true, true, 10, 30, recommendationResponsive);
    // Subcategory Slider Index
    sliderInitialized(2, '.slider.slider_subcategory-index',    '.slider-container', true, false, true, 15, 40, subcategoryIndexResponsive);
    // Subcategory Slider Catalog
    sliderInitialized(2, '.slider.slider_subcategory-catalog',  '.slider-container', true, false, true, 15, 40, subcategoryCatalogResponsive);
    // Category Slider
    sliderInitialized(1, '.slider.slider_category',             '.slider-container', true, false, true, 15, 40, categoryResponsive);
    // Video Slider
    sliderInitialized(2, '.slider.slider_video',                '.slider-container', false, false, false, 10, 0, videoResponsive);
    // Tags Slider
    sliderInitialized(2, '.slider.slider_tags',                 '.slider-container', false, true, true, 15, 40, tagsResponsive);
    // Index Banner Slider
    sliderInitialized(1, '.slider.slider_banner',               '', true, true, true, 15, 0, bannerResponsive);
    // Promo Slider
    sliderInitialized(1, '.slider.slider_promo',                '.slider-container', true, false, true, 15, 50, promoResponsive);
});

$(window).on('resize', function(){
    sliderInitialized(2, '.slider.slider_recommendation',       '.slider-xs-container', false, true, true, 10, 30, recommendationResponsive);
    sliderInitialized(2, '.slider.slider_subcategory-index',    '.slider-container',    true, false, true, 15, 40, subcategoryIndexResponsive);
    sliderInitialized(2, '.slider.slider_video',                '.slider-container',    false, true, false, 10, 0, videoResponsive);
    sliderInitialized(2, '.slider.slider_tags',                 '.slider-container', false, true, false, 10, 0, tagsResponsive);
    sliderInitialized(1, '.slider.slider_banner',               '', true, true, true, 15, 0, bannerResponsive);
    sliderInitialized(2, '.slider.slider_promo',                '.slider-container', true, false, false, 10, 0, promoResponsive);
});