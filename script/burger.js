$(document).ready(function () {
    $('.burger-icon').click(function () {
        $(this).toggleClass('open');
        $('.burger-menu').toggleClass('open');
        $('.body').toggleClass('open');
        $('.sub-menu').removeClass('open');
    });

    $('.submenu-trigger').click(function () {
        $('.sub-menu3').toggleClass('open');
    });
    $('.submenu-trigger2').click(function () {
        $('.sub-menu2').toggleClass('open');
    });
    $('.submenu-trigger2').click(function () {
        $('.body').toggleClass('open');
    });

    $('.close-submenu').click(function () {
        $('.sub-menu3').removeClass('open');
    });

    $('.modal-img2').click(function () {
        $('.body').removeClass('open');
    });
    $('.modal-img2').click(function () {
        $('.sub-menu2').removeClass('open');
    });

    $('.btn-link').click(function () {
        $('.burger-menu').removeClass('open');
        $('.burger-icon').removeClass('open');
        $('.body').removeClass('open');
        $('.sub-menu').removeClass('open');
    });
});