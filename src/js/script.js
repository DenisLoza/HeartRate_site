
$(document).ready(function(){ /* СЛАЙДЕР КАРУСЕЛЬ */
    $('.carousel__inner').slick({ 
        speed: 1200, /* Скорость вращения слайдов */
        /* adaptiveHeight: true, */ /* Автоматическая адаптивность под высоту картинки */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>', /* Заменяем отображение иконки на стрелку */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>', /* Заменяем отображение иконки на стрелку */
        responsive: [ /* Адаптивность для моб.устройств */
            {
              breakpoint: 992, /* с разрешением по ширине до 992рх */
              settings: {
                dots: true, /* Отображаем точки */
                arrows: false /* Скрываем стрелки */
                }
            }
        ]
    });

    /* Скрипт для переключения табов ДЛЯ ФИТНЕСА -- ДЛЯ БЕГА -- ДЛЯ ТРИАТЛОНА */
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    /* Скрип для переключения контента внутри карточки товара ПОДРОБНЕЕ -- НАЗАД */
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});