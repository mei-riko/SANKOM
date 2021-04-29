export let sliderInitialized = (countShow, sliderClass, sliderContainer, arrows, dots, loop, margin, stagePadding, responsive) => {
    // Находим слайдер для инициализации
    let $sliderItem = $(sliderClass);
    // Если такого элемента нет, то завершаем выполнение
    if( $sliderItem.length === 0 ){ return null; }

    // Может быть несколько одинаковых слайдеров на странице
    $sliderItem.each(function(){
        // Создаем переменные для работы с адаптивностью
        let sliderLength = $(this).find('.slider__item').length,
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

        // Если слайдер был инициализирован ранее, то учитываем только неклонированные элементы
        if( $(this).hasClass('owl-loaded') ){
            sliderLength = $sliderItem.find(".owl-item:not(.cloned)").length;
        }

        // В зависимости от размера экрана устанавливаем проверочную величину
        if      (window.innerWidth <= 420)                              { countLength = responsiveSlider[0]; }
        else if (window.innerWidth > 420 && window.innerWidth <= 576)   { countLength = responsiveSlider[1]; }
        else if (window.innerWidth > 576 && window.innerWidth <= 768)   { countLength = responsiveSlider[2]; }
        else if (window.innerWidth > 768 && window.innerWidth <= 1024)  { countLength = responsiveSlider[3]; }
        else if (window.innerWidth > 1024 && window.innerWidth <= 1440) { countLength = responsiveSlider[4]; }
        else                                                            { countLength = responsiveSlider[5]; }

        // console.log( 'Размер экрана ' + window.innerWidth + ' нужно показать ' + countLength + ' слайдов, реально есть ' + sliderLength);

        // Если число слайдов больше проверочного значения, то инициализируем слайдер
        // Иначе разрушаем ранее инициализированный слайдер
        if( sliderLength > countLength ){
            // Если указана обёртка слайдера
            if( $(sliderContainer).length > 0 && sliderContainer != ''){
                $(this).closest(sliderContainer).addClass(sliderContainer.replace('.', '') + '--active');
                $(this).closest(sliderContainer).removeClass(sliderContainer.replace('.', '') + '--disable');
            }
            $(this).owlCarousel({
                items: countShow,
                loop: loop,
                margin: margin,
                nav: arrows,
                dots: dots,
                stagePadding: stagePadding,
                responsive: responsive,
            })

        }else{
            // Если указана обёртка слайдера
            if( $(sliderContainer).length > 0 && sliderContainer != ''){
                $(this).closest(sliderContainer).removeClass(sliderContainer.replace('.', '') + '--active');
                $(this).closest(sliderContainer).addClass(sliderContainer.replace('.', '') + '--disable');
            }
            $(this).trigger('destroy.owl.carousel');
        }
    });

}