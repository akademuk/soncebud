$(document).ready(function () {
    if (window.innerWidth >= 1200) {
        var itemsToShow = 3; // Number of items to show on each click
        var currentIndex = 0;

        function showItems() {
            var $sliderItems = $('.case-box-slider-item');
            var totalItems = $sliderItems.length;

            for (var i = currentIndex; i < currentIndex + itemsToShow; i++) {
                if (i >= totalItems) {
                    break;
                }
                $sliderItems.eq(i).addClass('visible');
            }

            currentIndex += itemsToShow;

            if (currentIndex >= totalItems) {
                $('.case-box-btn').hide();
            }
        }

        $('.case-box-btn').on('click', function () {
            showItems();
        });

        showItems(); // Show initial items
    }
});
