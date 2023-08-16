  // Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper1 = new Swiper('.certificates-container', {
    slidesPerView: 1,
    spaceBetween: 20,
      pagination: {
        el: '.certificates-pagination',
        clickable: true,
      },
  });
  
}

