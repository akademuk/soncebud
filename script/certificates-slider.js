  // Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper1 = new Swiper('.certificates-container', {
    slidesPerView: 'auto', 
    spaceBetween: 8,
    loop: false,
      pagination: {
        el: '.certificates-pagination',
        clickable: true,
      },
  });
}

