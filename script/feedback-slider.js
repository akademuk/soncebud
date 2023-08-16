// Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper3 = new Swiper('.feedback-box', {
    slidesPerView: 'auto', // Автоматически определит количество слайдов на экране
    spaceBetween: 10, // Расстояние между слайдами (можете настроить по своему вкусу)
    loop: false, // Отключение бесконечной петли
      pagination: {
        el: '.feedback-pagination',
        clickable: true,
      },
  });
}
  
  
