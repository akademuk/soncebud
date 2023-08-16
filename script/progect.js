jQuery(document).ready(function ($) {

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

                    <a data-fancybox data-src="#box-${i}" data-modal="false" href="javascript:;" class="stories-btn"></a>

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

                        <div class="modSlider">
                            <div class="swiper-wrapper">
                                ${imageLinks}
                            </div>   
                        </div>

                    </div><!-- //progectModalInner --> 


                

            `);
            modalProgect.append(itemDiv);
        }







    });



    var modSliders = document.querySelectorAll('.modSlider');

    modSliders.forEach(function(modSlider) {
      new Swiper(modSlider, {
        // Здесь вы можете настроить параметры слайдера
        // Например: slidesPerView, autoplay, navigation и т.д.
      });
    });



});