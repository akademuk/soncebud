const submenuTrigger = document.querySelector('.submenu-trigger');
const closeSubmenuHeader = document.querySelector('.close-submenu-header');
const burgerIcon = document.querySelector('.burger-icon');
const headerImages = document.querySelectorAll('.header-logo-none');
const burgerIcon2 = document.querySelector('.header-logo-mob');
const subMenu = document.querySelector('.sub-menu');

submenuTrigger.addEventListener('click', () => {
    headerImages.forEach(img => {
        img.style.display = 'none';
    });
    closeSubmenuHeader.style.display = 'block';
});

closeSubmenuHeader.addEventListener('click', () => {
    headerImages.forEach(img => {
        burgerIcon2.style.display = 'block';
    });
    closeSubmenuHeader.style.display = 'none';
});

burgerIcon.addEventListener('click', () => {
    if (subMenu.classList.contains('open')) {
        if (burgerIcon.classList.contains('open')) {
            burgerIcon2.style.display = 'block';
            closeSubmenuHeader.style.display = 'none';
        } else {
            burgerIcon2.style.display = 'none';
            closeSubmenuHeader.style.display = 'none';
        }
    }
});



const consultationBtns = document.querySelectorAll('.consultation-btn');
const modalConsultation = document.querySelector('.modal-consultation');
const modalCloseBtn = document.querySelector('.burger-icon');

consultationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalConsultation.classList.add('open');
    });
});

modalCloseBtn.addEventListener('click', () => {
    modalConsultation.classList.remove('open');
});



const consultationBtns2 = document.querySelectorAll('.consultation-btn2');
const body1 = document.querySelectorAll('.body');
const modalConsultation2 = document.querySelector('.modal-consultation2');
const modalCloseBtn2 = modalConsultation2.querySelector('.modal-consultation-close');

consultationBtns2.forEach(btn => {
    btn.addEventListener('click', () => {
        modalConsultation2.classList.add('open');
        body1.classList.add('open');
    });
});

modalCloseBtn2.addEventListener('click', () => {
    modalConsultation2.classList.remove('open');
    body1.classList.remove('open');
});