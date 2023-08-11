$(document).ready(function () {
    $('.request-right-column-box input').change(function () {
        $('.request-right-column-box').removeClass('checked-label');
        $(this).parent('.request-right-column-box').addClass('checked-label');

        $('.form-input-flex-box div').removeClass('checked');
        if (this.checked) {
            var targetClass = $(this).attr('id');
            $('.' + targetClass).addClass('checked');
        }
    });
});