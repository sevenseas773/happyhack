$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/background1.jpg', 'images/background12.jpg', 'images/background3.jpg', 'images/background4.jpg','images/background.jpg'],
        interval: 6000,
        loop: true,
    });
});

$('.slider').slick({
    dots: true,
});

