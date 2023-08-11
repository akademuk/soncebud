const upperBand = document.querySelector('.top-container');
let prevScrollPos = window.pageYOffset;

function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 53) {
        upperBand.classList.add('hide-upper-band'); // Скрываем верхний банд при скролле вниз
    }

    // Убираем класс hide-upper-band, когда скролл достиг верха
    if (currentScrollPos <= 0) {
        upperBand.classList.remove('hide-upper-band');
    }

    prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);