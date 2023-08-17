
jQuery(document).ready(function ($) {
// Инициализация Swiper Slider только на мобильных устройствах

let swiperList;
if (window.matchMedia("(max-width: 1200px)").matches) {
	swiperList = new Swiper('.case-box', {
		slidesPerView: "auto", // Автоматически определит количество слайдов на экране
		disableOnInteraction: false,
		grabCursor: true,
		watchOverFlow: true,
		lazy: true,
		spaceBetween: 0, // Расстояние между слайдами (можете настроить по своему вкусу)
		loop: false, // Отключение бесконечной петли
		pagination: {
			el: '.case-pagination',
			clickable: true,
		},
	});
}


$('[data-fancybox]').fancybox({
	// Опции Fancybox
	beforeClose: function () {
		// Запоминаем индекс текущего слайда
		activeSlideIndex = swiperList.activeIndex;

		// Останавливаем автопрокрутку
		swiperList.autoplay.stop();
	},
	afterClose: function () {
		// Устанавливаем индекс активного слайда после повторного открытия модального окна
		swiperList.slideTo(activeSlideIndex);

		// Запускаем автопрокрутку
		swiperList.autoplay.start();
	}
});




});

