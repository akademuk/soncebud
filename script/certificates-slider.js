  // Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper1 = new Swiper('.certificates-container', {
    slidesPerView: 'auto', // Автоматически определит количество слайдов на экране
    spaceBetween: -9, // Расстояние между слайдами (можете настроить по своему вкусу)
    loop: true, // Отключение бесконечной петли
      pagination: {
        el: '.certificates-pagination',
        clickable: true,
      },
  });
}

