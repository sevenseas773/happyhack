$(function() {
    $('#bg-switcher').bgSwitcher({
        images: ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/background4.jpg', 'images/background5.jpg'],
        interval: 6000,
        loop: true
    });

    $('.slider').slick({
        dots: true,
        arrows: true,
        centerMode: true,
    });

    $('nav a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = (href === "#") ? 'html' : href;
        var position = $(target).offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});
