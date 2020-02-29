
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
});