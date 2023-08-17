$(document).ready(function () {
    // При клике на ссылку с якорем
    $('a[href^="#"]').on('click', function (event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();

        // Получаем целевой якорь
        var target = $(this.hash);

        // Проверяем, что целевой якорь существует на странице
        if (target.length) {
            // Анимированная прокрутка до целевого якоря
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); // Здесь можно настроить скорость анимации
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Обработчик для клика на ссылку
    document.querySelectorAll('.scroll-anchor').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault(); // Отменить стандартное действие ссылки
            var target = document.querySelector(this.getAttribute('href')); // Получить элемент-якорь
            if (target) {
                var offset = target.getBoundingClientRect().top - 100; // Вычислить позицию с учетом отступа
                window.scrollTo({
                    top: offset + window.scrollY,
                    behavior: 'smooth' // Плавная прокрутка
                });
            }
        });
    });
});