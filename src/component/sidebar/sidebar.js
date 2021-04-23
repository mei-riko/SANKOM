import $ from 'jquery';

function openSidebarOnClick( elem ){
    const idSidebar = elem.data('sidebar');
    const target = $('.sidebar#' + idSidebar);

    if ( target.length > 0 ){
        target.addClass('sidebar--active');
        $('.overlay').removeClass('overlay--disable');
        $('body').addClass('hidden');
    } else{
        return null;
    }
}

$('[data-sidebar]').on('click', function(){
    openSidebarOnClick( $(this) );
});

$('.sidebar .sidebar__close').on('click', function(){
    $(this).closest('.sidebar').removeClass('sidebar--active');
    $('.overlay').addClass('overlay--disable');
    $('body').removeClass('hidden')
});

// Cобытие клика по веб-документу
$(document).on('mouseup', function (e){ 
    let sidebarActive = $(".sidebar.sidebar--active"); // элемент
    if (!sidebarActive.is(e.target) // клик был не по блоку
          && sidebarActive.has(e.target).length === 0 // и не по его дочерним элементам
    ) { 
        sidebarActive.removeClass('sidebar--active');
        $('.overlay').addClass('overlay--disable');
        $('body').removeClass('hidden')
    }
});