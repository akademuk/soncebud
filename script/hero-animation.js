// Ожидаем, пока загрузится вся страница
window.addEventListener('load', function () {
    // Появление первого блока через 1 секунду
    setTimeout(function () {
        const block1 = document.querySelector('.hero-right-box-item1');
        block1.style.opacity = '1';
    }, 1000); // 1000 миллисекунд = 1 секунда

    // Появление второго блока через 2 секунды
    setTimeout(function () {
        const block2 = document.querySelector('.hero-right-box-item2');
        block2.style.opacity = '1';
    }, 2000); // 2000 миллисекунд = 2 секунды

    // Появление третьего блока через 3 секунды
    setTimeout(function () {
        const block3 = document.querySelector('.hero-right-box-item3');
        block3.style.opacity = '1';
    }, 3000); // 3000 миллисекунд = 3 секунды
});