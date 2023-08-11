// Ожидаем, пока загрузится вся страница
window.addEventListener('load', function () {
    // Ждем 3 секунды и затем добавляем класс
    setTimeout(function () {
        const element = document.querySelector('.sun');
        element.classList.add('open'); // Замените 'your-class-name' на ваш класс
    }, 2000); // 3000 миллисекунд = 3 секунды
});