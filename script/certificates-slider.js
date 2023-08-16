  // Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper1 = new Swiper('.certificates-container', {
    slidesPerView: 'auto', // Автоматически определит количество слайдов на экране
    spaceBetween: 16,
    centeredSlides: false,
    loop: false, // Отключение бесконечной петли
      pagination: {
        el: '.certificates-pagination',
        clickable: true,
      },
      breakpoints: {
       1200: {
          centeredSlides: true,
        },
        768: {
          centeredSlides: false,
        }
      }
  });
  
}

