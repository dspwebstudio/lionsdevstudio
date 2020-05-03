$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1024) {
            $('.nav-link').click(function () { 
                $('.navbar-toggler').click();
            });
    }
});
