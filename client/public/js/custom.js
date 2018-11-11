jQuery(document).ready(function ($) {
    $('.navbar-fostrap').click(function () {
        $('.nav-fostrap').toggleClass('visible');
        $('body').toggleClass('cover-bg');
    });
    // Hero rotating texts
    $("#hero .rotating").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 3000
    });
    
    $('.parallax').parallax();

});