import $ from 'jquery';

$(".tabs .tabs__item").on("click", function() {
    let tabParent = $(this).parent();
    let tabContainer = tabParent.closest(".tabs-container");
    let tabContentId = $(this).data("content");
    let tabContent = $(".tabs-content" + tabContentId);

    console.log('');

    tabParent.find(".tabs__item").removeClass("tabs__item--active").eq($(this).index()).addClass("tabs__item--active");
    tabContainer.find(".tabs-content").removeClass("tabs-content--show").removeClass("tabs-content--active");
    
    tabContent.addClass("tabs-content--active");

    if( tabContent.hasClass("tabs-content_has-slider") && !tabContent.find(".owl-carousel").hasClass("owl-loaded") ){
        tabContent.addClass("tabs-content--show");
        let bLazy = new Blazy();
        bLazy.revalidate;
    }
});

$(".tabs-content.tabs-content_has-slider .slider.slider_tags").on('changed.owl.carousel', function(event) {
    $(".tabs-content.tabs-content--active").addClass("tabs-content--show");
})

$(document).on("click", "[data-tab]", function(){
    let tabId = $(this).data("tab");
    let tabContent = $(".tabs-content#" + tabId);
    let tabItem = $(".tabs__item[data-content='#" + tabId + "']");
    let tabParent = tabContent.parent();

    if( !tabContent.hasClass("tabs-content--active") && tabItem.length > 0 && tabContent.length > 0){

        tabParent.find(".tabs__item--active").removeClass("tabs__item--active");
        console.log (tabParent.find(".tabs__item--active"));
        tabParent.find(".tabs-content--active").removeClass("tabs-content--active");

        tabItem.addClass("tabs__item--active");
        tabContent.addClass("tabs-content--active");
    }
});