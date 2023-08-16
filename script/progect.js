jQuery(document).ready(function ($) {

    // инициализируем swiper
    $("#courder").on("click", ".stories-btn", function () {
        let modalId = $(this).data("src");
        console.log(modalId);

        let modSlider = $(modalId).find(".modSlider")[0];

        if (modSlider) {
            console.log("Found modSlider:", modSlider);
            let swiper = new Swiper(modSlider, {
                on: {
                    init: function () {
                        $(modalId + ' .navSlider .nav-slide').eq(0).addClass('active');
                    },
                    slideChange: function () {
                        var activeIndex = this.activeIndex;
                        $(modalId + ' .navSlider .nav-slide').eq(activeIndex).addClass('active').siblings().removeClass('active');
                    }
                },
                navigation: {
                    nextEl: modalId + ' .progect-next',
                    prevEl: modalId + ' .progect-prev',
                },
            });

            // кликаем по миниатюре
            $(modalId + ' .navSlider .nav-slide').click(function () {
                var index = $(this).index();
                swiper.slideTo(index);
            });

        } else {
            console.log("modSlider not found");
        }
    });



    // выводим проекты
    let countProgect;
    const courderDiv = $('#courder');
    const modalProgect = $('#modalProgect');


    $.getJSON('script/data-object.json', function (data) {

        countProgect = data.length;
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const firstImage = item.images[0];
            let visible;
            if (i < 3) {
                visible = "visible";
            } else {
                visible = "";
            }

            const itemDiv = $('<div class="case-box-slider-item swiper-slide ' + visible + '">');
            const imageLinks = item.images.map(image => `<img src="${image}" alt="foto">`).join('');
            itemDiv.html(`           
                <div class="case-box-container">

                    <a data-fancybox data-src="#box-${i}" data-modal="true" href="javascript:;" class="stories-btn"></a>

                    <h3>${item.title}</h3>

                    <div class="case-box-item-block1">
                        <div class="case-box-item-block1-container">
                            <img src="img/case-box-item1.svg" alt="${item.city}">
                            ${item.city}
                        </div>
                        <div class="case-box-item-block1-container">
                            <img src="img/case-box-item2.svg" alt="${item.category}">
                            ${item.category}
                        </div>
                    </div>

                    <div class="case-box-item-block2">
                        <div class="case-box-item-block2-content">
                            <span>${item.power}</span>
                            <p>Потужність станції</p>
                        </div>
                        <div class="case-box-item-block2-content">
                            <span>${item.generation}</span>
                            <p>Генерація/рік</p>
                        </div>
                        <div class="case-box-item-block2-content">
                            <span>${item.economy} грн</span>
                            <p>Економія/рік</p>
                        </div>
                    </div>

                    <div class="case-box-slider-item-img">
                        <img src="${firstImage}" alt="${item.title}">
                        <div class="case-box-slider-item-img-text">
                            <a data-fancybox data-src="#box-${i}" data-modal="false" href="javascript:;" class="stories-btn">ще фото</a>
                            <img src="img/foto-modal.svg" alt="foto">
                        </div>
                    </div>          

                </div>


                

            `);
            courderDiv.append(itemDiv);
        }


        // подгружаем проекты
        if (window.innerWidth >= 1200) {
            var itemsToShow = 3; // Number of items to show on each click
            var currentIndex = 0;

            function showItems() {
                var $sliderItems = $('.case-box-slider-item');
                var totalItems = countProgect;
                console.log("cases " + totalItems);

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














    // выводим модалки
    $.getJSON('script/data-object.json', function (data) {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            const itemDiv = $('<div id="box-' + i + '" style="display:none;" class="progectModal">');
            const imageLinks = item.images.map(image => `<div class="swiper-slide"><img src="${image}" alt="Сонячні станції"></div>`).join('');
            const imageNav = item.images.map(image => `<div class="nav-slide"><img src="${image}" alt="Сонячні станції"></div>`).join('');
            const countImages = item.images.length;
            const imageNavElement = countImages > 1 ? `<div class="navSlider">${imageNav}</div>` : '';

            itemDiv.html(` 
                    <div class="progectModalInner">

                        <div class="topProgectModal">

                            <div class="TitleProgectModal">${item.title}</div> 

                            <div class="labelModal">
                                <div class="case-box-item-block1">
                                    <div class="case-box-item-block1-container">
                                       <img src="img/case-box-item1.svg" alt="${item.city}">
                                       ${item.city}
                                    </div>
                                    <div class="case-box-item-block1-container">
                                        <img src="img/case-box-item2.svg" alt="${item.category}">
                                        ${item.category}
                                    </div>
                                </div>
                            </div>

                        </div><!-- //topProgectModal --> 

                        <div class="case-box-item-block2">
                            <div class="case-box-item-block2-content">
                                <span>${item.power}</span>
                                <p>Потужність станції</p>
                            </div>
                            <div class="case-box-item-block2-content">
                                <span>${item.generation}</span>
                                <p>Генерація/рік</p>
                            </div>
                            <div class="case-box-item-block2-content">
                                <span>${item.economy} грн</span>
                                <p>Економія/рік</p>
                            </div>
                        </div>
                        <div class="innerSliderProgect">
                            <div class="modSlider swiper ">
                                <div class="swiper-wrapper">${imageLinks}</div>   
                            </div>

                            <div class="progect-next"><img src="img/progect-next.svg" alt="next"></div>
                            <div class="progect-prev"><img src="img/progect-prev.svg" alt="prev"></div>
                        </div>

                        ${imageNavElement}

                        <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small close" title="Close"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></button>


                    </div><!-- //progectModalInner --> 


                

            `);
            modalProgect.append(itemDiv);
        }







    });























});