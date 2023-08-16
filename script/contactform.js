jQuery(document).ready(function ($) {

    // маска телефона
    $('input[type="tel"]').mask('+38(999) 999-99-99');

     // получаем токен от reCaptcha 
    //  grecaptcha.ready(function () {
    //     grecaptcha.execute('6LeS8ygmAAAAAHevT7-0kqokA8gd4n8e2pOxYnvI', { action: 'homepage' }).then(function (token) {
    //         console.log(token);
    //         document.getElementById('g-recaptcha-response').value = token;
    //     });
    // });

    // добавляем адрес в форму (для рекламы)
    let fullURL = window.location.href;
    sessionStorage.setItem('fullURL', fullURL);
    $("input[name='url']").val(sessionStorage.getItem('fullURL'));


    // форма с проверкой
    $("#ajax-contact-form").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note').html(result);
                }
            });
            return false;
        }
    });

    // форма с проверкой
    $("#ajax-contact-form2").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    });

    // форма с проверкой
    $("#ajax-contact-form3").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    });
    // форма с проверкой
    $("#ajax-contact-form4").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    });

     // форма с проверкой
     $("#ajax-contact-form5").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    });
   
    $("#form").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        /* если нужно перенаправление */
                        window.location.href = "feedback.html";
                    } else {
                        result = msg;
                    }
                    // $('#note').html(result);
                }
            });
            return false;
        }
    });


});/* //jQuery(document).ready  */