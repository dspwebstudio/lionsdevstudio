$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1240) {
            $('.nav-link').click(function () { 
                $('.navbar-toggler').click();
            });
    }
});
