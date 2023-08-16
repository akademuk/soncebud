// Инициализация Swiper Slider только на мобильных устройствах
if (window.matchMedia("(max-width: 1200px)").matches) {
  var $swiperSelector = $('.case-box');

  $swiperSelector.each(function(index) {
      var $this = $(this);
      $this.addClass('swiper-slider-' + index);
      
      var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
      var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
      var loop = $this.data('loop') ? $this.data('loop') : false;
      var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
      var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 4;
      var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1.2;
      var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;
  
      var swiper = new Swiper('.swiper-slider-' + index, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        breakpoints: {
          1920: {
            slidesPerView: slidesDesktop
          },
          992: {
            slidesPerView: slidesTablet
          },
          320: {
             slidesPerView: slidesMobile
          }
        },
        pagination: {
          el: '.case-pagination',
          clickable: true,
        },
     });
  });
}
  