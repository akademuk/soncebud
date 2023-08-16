// Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  const swiper = new Swiper('.case-box', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    slideToClickedSlide: true,

    pagination: {
      el: '.case-pagination',
      clickable: true,
    },
});
}
  