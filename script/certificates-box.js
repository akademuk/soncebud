$(document).ready(function () {
    var itemsToShow = 4; // Number of items to show on each click
    var currentIndex = 0;

    function showItems() {
        var $sliderItems = $('.certificates-item');
        var totalItems = $sliderItems.length;

        for (var i = currentIndex; i < currentIndex + itemsToShow; i++) {
            if (i >= totalItems) {
                break;
            }
            $sliderItems.eq(i).addClass('visible');
        }

        currentIndex += itemsToShow;

        if (currentIndex >= totalItems) {
            $('.certificates-box-btn ').hide();
        }
    }

    $('.certificates-box-btn ').on('click', function () {
        showItems();
    });

    showItems(); // Show initial items
});
