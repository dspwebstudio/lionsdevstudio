$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1240) {
            $('.js-nav-click').click(function () { 
                $('.navbar-toggler').click();
            });
            $('.navbar-brand').click(function () { 
                $('.navbar-nav').hide();
            });
            $('.navbar-toggler').click(function () { 
                $('.navbar-nav').show();
            });
    }
});
