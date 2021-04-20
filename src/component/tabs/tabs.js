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