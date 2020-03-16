@extends('layouts.master-dealer')

@section('pageTitle', 'Новый Solaris')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/css/solaris-2020/libs.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/solaris-2020/solaris.css') }}">
@endsection

@section('content')

@component('components/plugin-map')@endcomponent

<section class="nav">
    <ul class="nav__menu">
        <li class="nav__item">
            <a href="#design" class="nav__link scroll">
                Дизайн
            </a>
        </li>
        <li class="nav__item">
            <a href="#dynamics" class="nav__link scroll">
                Динамика
            </a>
        </li>
        <li class="nav__item">
            <a href="#comfort" class="nav__link scroll">
                Комфорт
            </a>
        </li>
        <li class="nav__item">
            <a href="#safety" class="nav__link scroll">
                Безопасность
            </a>
        </li>
        <li class="nav__item">
            <a href="#specs" class="nav__link scroll">
                Характеристики
            </a>
        </li>
        <li class="nav__item">
            <a target="_blank" href="{{ route('static_dealerapi_car30', null, false) }}/gallery" class="nav__link">
                Галерея
            </a>
        </li>
        @if($brochure !== false)
        <li class="nav__item">
            <a target="_blank" href="{{ $brochure }}" class="nav__link" target="_blank">
                Брошюра
            </a>
        </li>
        @endif
    </ul>
    <div class="nav__buttons">
        <a target="_blank" href="/test-drive/NewSolaris" class="df-button nav__button js-open-p-td">
            Тест-драйв
        </a>
        <a target="_blank" href="/configurator/car/30" class="df-button nav__button">
            Конфигуратор
        </a>
    </div>
</section>

<section class="banner section section--big lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/title.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/1_title/title.jpg">
    <div class="banner__head">
        <h1 class="banner__title">
            <span>Новый SOLARIS.</span>
        </h1>
        <div class="banner__subtitle h3">
            <!-- <span>В новом исполнении.</span> -->
        </div>
    </div>
    <div class="blue-label">
        <div class="blue-label__top">
            <span>от</span> <span id="price-from">765&nbsp;000</span> &#8381;
        </div>
        <hr style="display: none;">
        <div class="blue-label__bottom" style="display: none;">
            В кредит — от <span id="credit-from"></span> ₽/мес
        </div>
        <!-- <div class="blue-label__bottom">
            Субсидия на покупку<br> 10% от&nbsp;стоимости
        </div> -->
        <!-- <a href="https://www.hyundai.ru/promo/new_owners" class="blue-panel__more">
            Подробнее
            <svg>
                <use xlink:href="#arrow-link"></use>
            </svg>
        </a> -->
    </div>
    <!-- <a href="#view360" class="js-next-slide banner__circle scroll"></a> -->
    <a href="#design" class="js-next-slide banner__circle scroll"></a>
    <!-- <div class="preloader__inner"></div> -->

	<div id="hotbuttons">
		<!-- Установим активной модель. model Св-во codeName!!!!!! -->
		<hot-buttons :car-id="30" model="solaris" :buttons="[1,1,1,1]" page="isModelPage"></hot-buttons>
	</div>
</section>

<section id="view360" class="section">
	<view-360 title="Выбери свой SOLARIS" car-id="30"></view-360>
</section>

<section id="design" class="design">
	<presentation-section
		title = 'Вас окружает красота.'
		background = '/images/cars/solaris-2020/pics/2_design/design_title.jpg'
		background-mobile = '/images/cars/solaris-2020/m_pics/design_title.jpg'
		:slides="[
			{
				icon: '/images/cars/solaris-2020/svg/design_3.svg',
				title: 'Задние светодиодные фонари.',
				description: 'Благодаря яркости и быстрому включению сигналов, привлекают внимание не только своим дизайном, но отличной читаемостью индикации даже на значительном расстоянии.',
				background: '/images/cars/solaris-2020/pics/2_design/design_slider_1.jpg',
				zoom: 2.6,
				correct: {
					x: 100,
					y: 0
				}
			},
			{
				icon: '/images/cars/solaris-2020/svg/design_4.svg',
				title: '16” легкосплавные диски.',
				description: 'Гармонично дополняют образ. Новый дизайн выглядит динамично и привлекательно.',
				background: '/images/cars/solaris-2020/pics/2_design/design_slider_2.jpg',
				zoom: 4,
				correct: {
					x: 0,
					y: 0
				}
			},
            {
				icon: '/images/cars/solaris-2020/svg/design_5.svg',
				title: 'Автоматическое открывание багажника.',
				description: '',
				background: '/images/cars/solaris-2020/pics/2_design/design_slider_3.jpg',
				zoom: 3,
				correct: {
					x: 0,
					y: 0
				}
			}
		]"
	></presentation-section>
</section>

<section class="section s-parallax design design--2">
    <div class="s-parallax__head">
        <h2>
            <span>
                Вас окружает
                <br>красота.
            </span>
        </h2>
    </div>
    <ul class="s-parallax__list s-parallax__list--left">
        <!-- <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1">
            <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                <source data-src="/images/cars/solaris-2020/video/design_4_1_1.mp4" type="video/mp4">
            </video>
            <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/02_design/d1.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/d1.jpg">
            </div>
            <div class="s-parallax__description">
                <span>Светодиодные фары головного света</span> создают мягкий, ровный свет. Улучшают видимость на&nbsp;дороге в&nbsp;тёмное время суток, при этом не&nbsp;ослепляя других участников движения.
            </div>
        </li> -->
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/solaris-2020/m_pics/design_1.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/design_1.jpg">
            <div class="s-parallax__description">
                <span>Светодиодные фары головного света.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="2" data-bgset="/images/cars/solaris-2020/m_pics/design_2.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/design_3.jpg">
            <div class="s-parallax__description">
                <span>Новая решетка радиатора.</span>
            </div>
        </li>
    </ul>
    <ul class="s-parallax__list s-parallax__list--right">
        <!-- <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="3">
            <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                <source data-src="/images/cars/solaris-2020/video/design_4_3_1.mp4" type="video/mp4">
            </video>
            <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/solaris-2020/pics/2_design/d3.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/d3.jpg">
            </div>
            <div class="s-parallax__description">
                <span>Электроскладывание боковых зеркал</span> позволяет перевести зеркала в&nbsp;компактное положение простым нажатием кнопки.
            </div>
        </li> -->
        <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="4" data-bgset="/images/cars/solaris-2020/m_pics/design_4.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/design_2.jpg">
            <div class="s-parallax__description">
                <span>Электроскладывание боковых зеркал.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/solaris-2020/m_pics/design_3.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/2_design/design_4.jpg">
            <div class="s-parallax__description">
                <span>Противотуманные фары.</span>
            </div>
        </li>
    </ul>
</section>

<section id="dynamics" class="section dynamics dynamics--1 view0">
    <div class="dynamics__back dynamics__back--view0 lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/performance_1.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/3_performance/performance_1.jpg"></div>
    <div class="dynamics__back dynamics__back--view1 lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/performance_2.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/3_performance/performance_1.jpg"></div>
    <div class="dynamics__head">
        <h2 class="dynamics__title">
            <span>
                Сильная сторона
                <br>характера.
            </span>
        </h2>
        <div class="dynamics__wrap">
            <ul class="dynamics__tabs">
                <li class="dynamics__tab">
                    <a data-view="view0" href="#" class="dynamics__link js-change-view active">
                        Kappa 1.4 MPI
                    </a>
                </li>
                <li class="dynamics__tab">
                    <a data-view="view1" href="#" class="dynamics__link js-change-view">
                        Gamma 1.6 MPI
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <ul class="dynamics__specs dynamics__specs--0">
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--0">
                <div class="dynamics__description">
                    <span id="count1"></span> л.с.
                </div>
                <div class="dynamics__text">
                    Максимальная мощность
                </div>
            </div>
        </li>
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--1">
                <div class="dynamics__description">
					<span id="count2"></span>.2 сек
                </div>
                <div class="dynamics__text">
                    Разгон до 100 км/ч
                </div>
            </div>
        </li>
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--2">
                <div class="dynamics__description">
                    5.7 л / 100 км
                </div>
                <div class="dynamics__text">
                    Средний расход топлива
                </div>
            </div>
        </li>
    </ul>
    <ul class="dynamics__specs dynamics__specs--1">
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--0">
                <div class="dynamics__description">
					<span id="count3"></span> л.с.
                </div>
                <div class="dynamics__text">
                    Максимальная мощность
                </div>
            </div>
        </li>
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--1">
                <div class="dynamics__description">
					<span id="count4"></span>.3 сек
                </div>
                <div class="dynamics__text">
                    Разгон до 100 км/ч
                </div>
            </div>
        </li>
        <li class="dynamics__spec">
            <div class="dynamics__specs-w dynamics__specs-w--2">
                <div class="dynamics__description">
                    6.0 л / 100 км
                </div>
                <div class="dynamics__text">
                    Средний расход топлива
                </div>
            </div>
        </li>
    </ul>
</section>

<section class="section dynamics dynamics--2">
    <div class="dynamics__back dynamics__back--view0 lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/performance_3a.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/3_performance/performance_2a.jpg"></div>
    <div class="dynamics__back dynamics__back--view1 lazyload lazypreview" data-bgset="/images/cars/solaris-2020/m_pics/performance_3b.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/3_performance/performance_2b.jpg"></div>
    <div class="dynamics__head">
        <h2 class="dynamics__title dynamics__title--small">
            <span>
                Сильная сторона
                <br>характера.
            </span>
        </h2>
    </div>
    <div class="d-composition">
        <div class="d-composition__icon">
            <img src="/images/cars/solaris-2020/svg/performance_3.svg">
        </div>
        <div class="d-composition__title">
            6-ступенчатая АКПП и МКПП.
        </div>
        <div class="d-composition__description">
            6-ступенчатая коробка АКПП наделяет Hyundai Solaris плавностью переключения и&nbsp;комфортом в&nbsp;движении. 6-ступенчатая МКПП обеспечит экономичную и&nbsp;динамичную езду.
        </div>
    </div>
</section>

<section id="comfort" class="comfort">
	<presentation-section
		title = 'Погружение в особую<br>атмосферу.'
		background = '/images/cars/solaris-2020/pics/4_comfort/comfort_title.jpg'
		background-mobile = '/images/cars/solaris-2020/m_pics/comfort_title.jpg'
		:slides="[
            {
                icon: '/images/cars/solaris-2020/svg/comfort_4.svg',
                title: 'Приборная панель «Super Vision»',
                description: 'Навигационный HD-дисплей 10,25 дюйма обладает интуитивно понятным интерфейсом и возможностью настроить одновременное отображение нескольких потоков информации.',
                background: '/images/cars/solaris-2020/pics/4_comfort/comfort_slider_1.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/solaris-2020/svg/comfort_5.svg',
                title: '8-дюймовая мультимедиа с\u00A0навигацией',
                description: 'Увеличенная диагональ экрана облегчает доступ к различной информации, выводимой на центральный дисплей. Это удобно при чтении карт или управлении контентом подключённого к мультимедиа системе смартфона или планшета.',
                background: '/images/cars/solaris-2020/pics/4_comfort/comfort_slider_2.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/solaris-2020/svg/comfort_6.svg',
                title: 'Поясничная поддержка водителя',
                description: 'Снижает усталость при длительном нахождении за рулём, тем самым способствуя сохранению концентрации на протяжении всей поездки.',
                background: '/images/cars/solaris-2020/pics/4_comfort/comfort_slider_3.jpg',
                zoom: 1.8,
                correct: {
                    x: 0,
                    y: -100
                }
            },
            {
                icon: '/images/cars/solaris-2020/svg/comfort_7.svg',
                title: 'Регулировка руля в\u00A04\u00A0направлениях',
                description: '',
                background: '/images/cars/solaris-2020/pics/4_comfort/comfort_slider_4.jpg',
                zoom: 2,
                correct: {
                    x: 0,
                    y: 0
                }
            }
        ]"
	></presentation-section>
</section>

<section class="comfort section s-parallax">
    <div class="s-parallax__head">
        <h2>
            <span>
                Погружение в&nbsp;особую
                <br>атмосферу.
            </span>
        </h2>
    </div>
    <ul class="s-parallax__list s-parallax__list--left">
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/solaris-2020/m_pics/comfort_1.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_1.jpg">
            <div class="s-parallax__description">
                <span>Подогрев форсунок.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/solaris-2020/m_pics/comfort_3.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_3.jpg">
            <div class="s-parallax__description">
                <span>Подогрев передних и задних сидений.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="5" data-bgset="/images/cars/solaris-2020/m_pics/comfort_5.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_5.jpg">
            <div class="s-parallax__description">
                <span>Встроенный Яндекс навигатор</span> даёт возможность пользоваться привычными средствами навигации, а&nbsp;также функцией голосового помощника “Алиса”, не&nbsp;через экран смартфона, а&nbsp;на&nbsp;большом 8-дюймовом дисплее.
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 s-parallax__item--100-mob lazyload lazypreview" data-order="8" data-bgset="/images/cars/solaris-2020/m_pics/comfort_8.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_7.jpg">
            <div class="s-parallax__description">
                <span>Камера заднего вида.</span>
            </div>
        </li>
    </ul>
    <ul class="s-parallax__list s-parallax__list--right">
<!--
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="2" data-bgset="/images/cars/solaris-2020/m_pics/comfort_2.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_2.jpg">
            <div class="s-parallax__description">
                <span>Кожаные сиденья</span> отделка салона органично сочетает в себе практичность и стиль. Салон приятно удивит комфортом и функциональностью.
            </div>
        </li>
-->
        <!-- <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="4">
            <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                <source data-src="/images/cars/solaris-2020/video/comfort_4_4_2.mp4" type="video/mp4">
            </video>
            <div class="s-parallax__back lazyload lazypreview"  data-bgset="/images/cars/solaris-2020/tablet/comfort_7.jpg [(max-width: 640px)] | /images/cars/solaris-2020/tablet/comfort_7.jpg">
            </div>
            <div class="s-parallax__description">
                <span>Удаленный запуск двигателя с&nbsp;ключа</span> функция особенно полезна в&nbsp;холодное время года, позволяет заботиться о&nbsp;двигателе автомобиля, экономя время и&nbsp;не&nbsp;ограничивая себя в&nbsp;комфорте.
            </div>
        </li> -->
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 s-parallax__item--100-mob lazyload lazypreview" data-order="4" data-bgset="/images/cars/solaris-2020/m_pics/comfort_4.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_4.jpg">
            <div class="s-parallax__description">
                <span>Удаленный запуск двигателя с&nbsp;ключа.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="6"  data-bgset="/images/cars/solaris-2020/m_pics/comfort_6.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_6.jpg">
            <div class="s-parallax__description">
                <span>USB зарядка для пассажиров задних сидений.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="7" data-bgset="/images/cars/solaris-2020/m_pics/comfort_7.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_8.jpg">
            <div class="s-parallax__description">
                <span>Подогрев лобового стекла.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="9" data-bgset="/images/cars/solaris-2020/m_pics/comfort_9.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/4_comfort/comfort_9.jpg">
            <div class="s-parallax__description" style="max-width: 400px;">
                <span>Регулировка сиденья водителя</span> по&nbsp;высоте.
            </div>
        </li>
    </ul>
</section>

<section id="safety" class="section safety safety--1">
    <div class="safety__head">
        <h2 class="safety__main">
            <span>
                Безопасность
                <br>на&nbsp;первом&nbsp;месте.
            </span>
        </h2>
    </div>
    <div data-bgset="/images/cars/cars/solaris-2020/m_pics/tech_title.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_title.jpg" class="safety__back safety__back--1 lazyload lazypreview"></div>
</section>

<section class="section s-parallax safety safety--2">
    <div class="safety__head">
        <h2 class="safety__main safety__main--small safety__main--on">
            <span>
                Безопасность
                <br>на&nbsp;первом&nbsp;месте.
            </span>
        </h2>
    </div>
    <ul class="s-parallax__list s-parallax__list--left">
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/solaris-2020/m_pics/tech_1.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_1.jpg">
            <div class="s-parallax__description">
                <span>6 подушек безопасности</span> составляют основу активной системы безопасности автомобиля. При столкновении обеспечивают защиту водителя и&nbsp;всех находящихся в&nbsp;салоне, включая пассажиров задних сидений.
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="3" data-bgset="/images/cars/solaris-2020/m_pics/tech_3.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_3.jpg">
            <div class="s-parallax__description">
            <span>Система курсовой устойчивости</span> повышает управляемость, помогает водителю лучше контролировать автомобиль при маневрировании на&nbsp;скорости.
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="4" data-bgset="/images/cars/solaris-2020/m_pics/tech_4.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_5.jpg">
            <div class="s-parallax__description">
            <span>Датчик давления в&nbsp;шинах.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="7" data-bgset="/images/cars/solaris-2020/m_pics/tech_7.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_6.jpg">
            <div class="s-parallax__description">
            <span>Система Эра Глонасс.</span>
            </div>
        </li>
    </ul>
    <ul class="s-parallax__list s-parallax__list--right">
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="2" data-bgset="/images/cars/solaris-2020/m_pics/tech_2.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_2.jpg">
            <div class="s-parallax__description">
                <span>Передние и задние парктроники</span> предупреждают об&nbsp;опасном сближении с&nbsp;препятствиями, находящимися в&nbsp;зонах ограниченной видимости, помогают лучше чувствовать габариты автомобиля по&nbsp;всему периметру, что делает парковку более комфортной и&nbsp;безопасной.
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="5" data-bgset="/images/cars/solaris-2020/m_pics/tech_5.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_8.jpg">
            <div class="s-parallax__description s-parallax__description--black">
                <span>Системы управления стабилизацией VSM.</span>
            </div>
        </li>
        <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="6" data-bgset="/images/cars/solaris-2020/m_pics/tech_6.jpg [(max-width: 640px)] | /images/cars/solaris-2020/pics/5_tech/tech_7.jpg">
            <div class="s-parallax__description s-parallax__description--black">
                <span>Конструкция кузова с&nbsp;применением высокопрочной стали.</span>
            </div>
        </li>
    </ul>
</section>

<section id="specs">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<specs-section car-id="30" model-type="Седан" number-of-seats="5" engine="Бензиновый" drive="Передний" gear-box="Механическая / Автоматическая"  car-name="Solaris"></specs-section>
				<?php if(strlen($disclaimer) > 0) :?>
				<div class="specs" style="padding-top: 0px;">
				    <div class="section__center">
				        <div class="dsclmr df-text-small-12px">
                            <div class="dsclmr__icon"><svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.75H0V9H2V6.75Z" fill="white"></path> <path d="M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z" fill="white"></path></svg></div>
                            <div class="dsclmr__body">{{ $disclaimer }}</div>
                        </div>
                    </div>
                </div>
                <?php endif; ?>

				<div class="section__center">
					@component('components/model-seo-text', ['model' => 'Hyundai Solaris'])@endcomponent
				</div>
			</div>
		</div>
	</div>
</section>

@endsection

@section('scripts')
	<script src="{{ mix('/js/lazypreview.js') }}"></script>
    <script src="{{ mix('/js/solaris-2020/libs.js') }}"></script>
	<script src="{{ mix('/js/solaris-2020/solaris.js') }}"></script>
	<script src="{{ mix('/js/solaris-2020/main.js') }}"></script>
@endsection
