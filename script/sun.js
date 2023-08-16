window.addEventListener('load', function () {
    if (window.innerWidth > 1200) { // Проверяем ширину окна
        setTimeout(function () {
            const element = document.querySelector('.sun');
            element.classList.add('open'); // Замените 'your-class-name' на ваш класс
        }, 3000); // 3000 миллисекунд = 3 секунды
    }
});
