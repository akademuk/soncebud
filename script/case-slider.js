// Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper = new Swiper('.case-box', {
    slidesPerView: 'auto', // Автоматически определит количество слайдов на экране
    spaceBetween: 16, // Расстояние между слайдами (можете настроить по своему вкусу)
    loop: false, // Отключение бесконечной петли
    pagination: {
      el: '.case-pagination',
      clickable: true,
    },
});
}
  