import $ from 'jquery';

$(".tabs .tabs__item").on("click", function() {
    let tabContentId = $(this).data("content");
    let tabContent = $(".tabs-content" + tabContentId);

    $(".tabs .tabs__item").removeClass("tabs__item--active").eq($(this).index()).addClass("tabs__item--active");

    $(".tabs-content").removeClass("tabs-content--show").removeClass("tabs-content--active");
    tabContent.addClass("tabs-content--active");
});

$(".tabs-content_has-slider .slider.slider_tags").on('changed.owl.carousel', function(event) {
    $(".tabs-content.tabs-content--active").addClass("tabs-content--show");
})

$("[data-tab]").on("click", function(){
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