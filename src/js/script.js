
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

    /* Скрипт для переключения контента внутри карточки товара ПОДРОБНЕЕ -- НАЗАД */
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



    /* МОДАЛЬНЫЕ ОКНА */

    /* Первое модальное окно при нажатии на ЗАКАЗАТЬ ЗВОНОК и ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ */
    $('[data-modal=consultation]').on('click', function() { 
        $('.overlay, #consultation').fadeIn();
    });

    /* При нажатии на крестик у мод. окон они закрываются */
    $('.modal__close').on('click', function() { 
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    /* Второе модальное окно при нажатии на КУПИТЬ */
    $('.button_mini').on('click', function() { 
        $('.overlay, #order').fadeIn();
    });


    /* Подставляет название товара во Второе модальное окно при нажатии на КУПИТЬ */
    $('.button_mini').each(function(i) { 
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); /* Вытаскиваем название товара из карточки товара */
            $('.overlay, #order').fadeIn();
        });
    });


    /* ВАЛИДАЦИЯ ФОРМ JQuary. Обращаемся к трем формам по ID*/
    
    function valideForms(form){
        $(form).validate({
            rules: { /* Правила проверки для каждой категории */
                name: {
                    required: true,
                    minlength: 2 /* Минимальное кол-во вводимых символов */
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: { /* Форма сообщений при ошибках пользователя */
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимально {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите ваш e-mail",
                  email: "Неправильный адрес почты! Формат: name@domain.com"
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');


    /* МАСКА ВВОДА НОМЕРА ТЕЛЕФОНА JQuary */
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    
    /* ОТПРАВКА ДАННЫХ ЗАПОЛНЕННЫХ ФОРМ НА ПОЧТУ */
    $('form').submit(function(e) {
        e.preventDefault(); /* Данные отправляются без перезагрузки страницы */
        $.ajax({
            type: "POST", /* Отправка */
            url: "mailer/smart.php", /* Через файл smart */
            data: $(this).serialize() /* Метод собирает и отправляет данные форм */
        }).done(function() { /* После отправки данных формы выполняютя следующие команды */
            $(this).find("input").val(""); /* Заполненная пользователем форма очищается */
            $('#consultation, #order').fadeOut(); /* Окна с формами закрываются */
            $('.overlay, #thanks').fadeIn('slow'); /* Окно с благодарностью показывается пользователю */

            $('form').trigger('reset');
        });
        return false;
    });


    /* КНОПКА ВВЕРХ САЙТА + ПЛАВНЫЙ СКРОЛ */
    $(window).scroll(function() { /* Скрипт следит за скролом в окне пользователя */
        if ($(this).scrollTop() > 1600) { /* Если отступ сверху при скролинге больше 1600px */
            $('.pageup').fadeIn(); /* Кнопка ссылка вверх появляется */
        } else {
            $('.pageup').fadeOut(); /* Если услов. не выполняется кнопка исчезает */
        }
    });

    $("a[href^='#']").click(function(){ /* Функция плавного скролинга страницы для локальных ссылок по ID */
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    /* АНИМАЦИЯ НА САЙТЕ С ПОМОЩЬЮ animation.css */
    new WOW().init();

});