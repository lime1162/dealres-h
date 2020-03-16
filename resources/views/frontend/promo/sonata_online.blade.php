@extends('layouts.master')

@section('pageTitle', 'Hyundai: модельный ряд, цены на автомобили, где купить Хендэ')

@section('styles')
    <link rel="stylesheet" href="/assets/ss/offers-style.css">
		<link rel="stylesheet" href="/assets/ss/ss.css">
    <link rel="stylesheet" href="/assets/sonata/sonata.css">
@endsection

@section('content')

<section class="nav">
    <ul class="nav__menu">
				<li class="nav__item">
            <a href="#exterior" class="nav__link scroll">
                Экстерьер
            </a>
        </li>
        <li class="nav__item">
            <a href="#interior" class="nav__link scroll">
                Интерьер и комфорт
            </a>
        </li>
				<li class="nav__item">
            <a href="#engine" class="nav__link scroll">
                Двигатель и трансмиссия
            </a>
        </li>
        <li class="nav__item">
            <a href="#safety" class="nav__link scroll">
                Безопасность
            </a>
				</li>
				<li class="nav__item">
            <a href="http://brochures.hyundai.ru/?car=2020-NewSonata&size=1&_ga=2.140707314.1343133674.1580981595-742184443.1572954903" class="nav__link" target="_blank">
                Брошюра
            </a>
				</li>
				<li class="nav__item">
            <a href="/assets/sonata/sonata_online.pdf" class="nav__link" download>
                Прайс-лист
            </a>
        </li>
    </ul>
    <div class="nav__buttons">
        <a target="_blank" href="/test-drive/Sonata" class="df-button nav__button js-open-p-td">
            Тест-драйв
        </a>
        <a target="_blank" href="/configurator/car/29" class="df-button nav__button">
            Конфигуратор
        </a>
        <a target="_blank" href="/find-dealer" class="df-button nav__button">
            Найти дилера
        </a>
    </div>
</section>

<div class="offers-container ss-container">
	<div class="content_area content_area__ss">
		<img class="promo-head lazyload" src="/getPicThumb/assets/sonata/sonata_online.jpg?w=100&h=0" data-src="/assets/sonata/sonata_online.jpg" style="">
		<img class="promo-head-mobile lazyload" src="/getPicThumb/assets/sonata/sonata_online_mob_2.jpg?w=100&h=0" width="640px" height="800px" data-src="/assets/sonata/sonata_online_mob_2.jpg" style="">
		<div class="banner__head">
			<h1 class="df-main-banner__title ss-title">
				<span>Новая SONATA.</span>
			</h1>
			<div class="df-main-banner__subtitle">
				<span>Уникальная комплектация Online.</span>
			</div>
		</div>
		<div class="blue-panel">
			<div class="blue-panel__inner">
				<div>
					Всего 120 автомобилей
				</div>
				<div>
					Цена: 1&nbsp;740&nbsp;000&nbsp;₽
				</div>
				<div>
					<a href="https://showroom.hyundai.ru/model/165" class="blue-panel__more" target="_blank">
						Забронировать из наличия
						<svg>
							<use xlink:href="#arrow-link"></use>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="arrow-mob">
			<img src="/assets/sonata/arrow.svg" alt="" class="arrow-mob__icon">
		</div>
	</div>

	<div class="offers-content" id="second-screen">
		<h2 class="title-offer bordr-btm"><span class="nowrp">Hyundai представляет особую комплектацию нового и&nbsp;технологичного седана SONATA.</span></h2>
		<div class="offer-terms bordr-btm">
			<div class="offers-block">
				<div class="row-inline">
					<p class="offer-terms__text">В комплектацию Online входят самые интересные элементы экстерьера и&nbsp;интерьера, а&nbsp;также опции комфорта, ознакомиться с&nbsp;которыми вы можете ниже.</p>
					<p class="offer-terms__text">Автомобили находятся в&nbsp;наличии в&nbsp;ограниченном количестве&nbsp;– вы можете забронировать любой автомобиль и&nbsp;заказать его доставку в&nbsp;удобный дилерский центр.</p>
					<p class="offer-terms__text">Беспроцентная рассрочка по&nbsp;карте "Халва" на&nbsp;покупку новой SONATA Online предоставляется на&nbsp;срок 12 или 18&nbsp;месяцев.<br>
					Максимальная сумма рассрочки составляет 4&nbsp;900&nbsp;000&nbsp;₽, а&nbsp;срок рассмотрения заявки не&nbsp;превышает 1&nbsp;часа. На лимит карты вы можете приобрести не&nbsp;только сам автомобиль, но&nbsp;и любое дополнительное оборудование (защита картера, сигнализация, ковры и&nbsp;проч.).<br>
					Для оформления карты необходимо забронировать автомобиль, посетить дилерский центр и&nbsp;подать заявку.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="blue-label blue-label--extended">
		<div class="blue-label__inner">
			<div class="blue-label__left">
					<div>
						<div class="blue-label__top">
								<span>от</span> <span id="price-from">1 740 000</span> &#8381;
						</div>
						<div class="blue-label__bottom">
								Доступно в&nbsp;рассрочку
						</div>
					</div>
					<div class="blue-label__separate"></div>
					<div class="reservation__stock">
							<img src="https://optimizator.hyundai.ru/images/cars/new-sonata/svg/check-wh.svg" alt="">
							<span class="reservation__stock-text">Есть в наличии</span>
					</div>
			</div>
			<div class="blue-label__reservation">
					<a target="_blank" href="https://showroom.hyundai.ru/model/165" class="reservation__button df-button">Мгновенное бронирование</a>
			</div>
		</div>
	</div>

	<div class="content_area cnt_grey" id="exterior">
		<div class="offers-content">
			<h1 class="title-offer bordr-btm"><span class="nowrp">Особенности комплектации</span><br/></h1>
			<h2 class="title-offer bordr-btm"><span class="nowrp">Экстерьер</span></h2>
			<div class="offer-terms bordr-btm">
				<div class="offers-block">
					<div class="row-inline">
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/exterior/01.jpg"/>
								<p class="dyn_desc">Глубокий чёрный цвет кузова</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/exterior/02.jpg"/>
								<p class="dyn_desc">17-дюймовые диски оригинального дизайна и&nbsp;полноразмерное запасное колесо</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/exterior/03.jpg"/>
								<p class="dyn_desc">Светодиодные фары прожекторного типа</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/exterior/04.jpg"/>
								<p class="dyn_desc">Каскадная решётка радиатора с&nbsp;хромированными элементами</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/exterior/05.jpg"/>
								<p class="dyn_desc">Светодиодные ходовые огни, плавно исчезающие в&nbsp;корпусе</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/exterior/06.jpg"/>
								<p class="dyn_desc">Невероятные комбинированные задние LED-фонари</p>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<div class="blue-label blue-label--extended">
		<div class="blue-label__inner">
			<div class="blue-label__left">
					<div>
						<div class="blue-label__top">
								<span>от</span> <span id="price-from">1 740 000</span> &#8381;
						</div>
						<div class="blue-label__bottom">
								Доступно в&nbsp;рассрочку
						</div>
					</div>
					<div class="blue-label__separate"></div>
					<div class="reservation__stock">
							<img src="https://optimizator.hyundai.ru/images/cars/new-sonata/svg/check-wh.svg" alt="">
							<span class="reservation__stock-text">Есть в наличии</span>
					</div>
			</div>
			<div class="blue-label__reservation">
					<a target="_blank" href="https://showroom.hyundai.ru/model/165" class="reservation__button df-button">Мгновенное бронирование</a>
			</div>
		</div>
	</div>

	<div class="content_area" id="interior">
		<div class="offers-content">
			<h2 class="title-offer bordr-btm"><span class="nowrp">Интерьер и комфорт</span></h2>
			<div class="offer-terms bordr-btm">
				<div class="offers-block">
					<div class="row-inline">
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/interior/01.jpg"/>
								<p class="dyn_desc">Комбинация натуральной и&nbsp;искусственной кожи чёрного цвета в&nbsp;отделке сидений</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/interior/02.jpg"/>
								<p class="dyn_desc">Электрорегулировка сиденья водителя, включая поясничную зону</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/interior/03.jpg"/>
								<p class="dyn_desc">Подогрев передних и&nbsp;задних сидений</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/interior/04.jpg"/>
								<p class="dyn_desc">Руль с&nbsp;подрулевыми лепестками переключения передач и&nbsp;кожаной отделкой</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/interior/05.jpg"/>
								<p class="dyn_desc">Система доступа в&nbsp;салон без ключа и&nbsp;кнопка запуска двигателя</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/interior/06.jpg"/>
								<p class="dyn_desc">2-х зонный климат-контроль с&nbsp;3-мя режимами интенсивности автоматического кондиционирования</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/interior/07.jpg"/>
								<p class="dyn_desc">Аудиосистема с&nbsp;экраном 8" и&nbsp;интеграцией со&nbsp;смартфонами</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/interior/08.jpg"/>
								<p class="dyn_desc">Передние, задние парктроники и&nbsp;камера заднего вида</p>
							</div>
						</div>
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/interior/09.jpg"/>
								<p class="dyn_desc">Электропривод складывания наружных зеркал</p>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<div class="blue-label blue-label--extended">
		<div class="blue-label__inner">
			<div class="blue-label__left">
					<div>
						<div class="blue-label__top">
								<span>от</span> <span id="price-from">1 740 000</span> &#8381;
						</div>
						<div class="blue-label__bottom">
								Доступно в&nbsp;рассрочку
						</div>
					</div>
					<div class="blue-label__separate"></div>
					<div class="reservation__stock">
							<img src="https://optimizator.hyundai.ru/images/cars/new-sonata/svg/check-wh.svg" alt="">
							<span class="reservation__stock-text">Есть в наличии</span>
					</div>
			</div>
			<div class="blue-label__reservation">
					<a target="_blank" href="https://showroom.hyundai.ru/model/165" class="reservation__button df-button">Мгновенное бронирование</a>
			</div>
		</div>
	</div>

	<div class="content_area cnt_grey" id="engine">
		<div class="offers-content">
			<h2 class="title-offer bordr-btm"><span class="nowrp">Двигатель и&nbsp;трансмиссия</span></h2>
			<div class="offer-terms bordr-btm">
				<div class="offers-block">
					<div class="row-inline">
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/engine/01.jpg"/>
								<p class="dyn_desc">Бензиновый 2.5-литровый двигатель MPI Smartsream. Мощность:&nbsp;180&nbsp;л.с., крутящий момент:&nbsp;232&nbsp;Nm, средний расход:&nbsp;7.7&nbsp;л./100км.</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/engine/02.jpg"/>
								<p class="dyn_desc">6-ступенчатая АКПП с&nbsp;новым удобным электронным селектором переключения</p>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<div class="content_area" id="safety">
		<div class="offers-content">
			<h2 class="title-offer bordr-btm"><span class="nowrp">Безопасность</span></h2>
			<div class="offer-terms bordr-btm">
				<div class="offers-block">
					<div class="row-inline">
						<div class="dyn_data">
							<div class="dyn_pic1 dyn_pic">
								<img src="/assets/sonata/safety/01.jpg"/>
								<p class="dyn_desc">Новая структура подкапотного пространства и&nbsp;6&nbsp;подушек безопасности обеспечивают максимальную защиту</p>
							</div>
							<div class="dyn_pic2 dyn_pic">
								<img src="/assets/sonata/safety/02.jpg"/>
								<p class="dyn_desc">Система управления стабилизацией и&nbsp;система помощи при старте на&nbsp;подъеме</p>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<div class="content_area content_area--form">
		<div class="offers_content">
			<div class="form">
				<div class="form__left">
					<h2 class="form__title">SONATA</h2>
					<p class="form__subtitle">Комплектация Online</p>
					<div id="view360" class="section">
						<view-360 title="Выбери свою SONATA" car-id="29" default-color="139"></view-360>
					</div>
				</div>
				<div class="form__right">
					<div class="form__items">
						<div class="form__item">
							<p class="form__item-title">Экстерьер</p>
							<p class="form__item-value">
								<span class="form-color form-color--black"></span>
								<span class="form__item-text">Midnight Black</span>
							</p>
						</div>
						<div class="form__item">
							<p class="form__item-title">Интерьер</p>
							<p class="form__item-value">
								<span class="form-color form-color--black"></span>
								<span class="form__item-text">Черный</span>
							</p>
						</div>
					</div>
					<div class="form__bottom">
						<div class="form__price">
							<p class="form__price-title">1 740 000 ₽</p>
							<p class="form__price-text">Доступно в&nbsp;рассрочку</p>
						</div>
						<div class="form__button">
							<div class="df-button button--form">
								<a href="https://showroom.hyundai.ru/model/165" target="_blank">
									Забронировать
								</a>
							</div>
						</div>
						<div class="form__desc">
							Что это значит?
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="more-popup df-popup" style="display: none;">
    <div class="df-popup__wrap">
			<h3 class="more-popup__title">Процесс бронирования</h3>
			<p class="more-popup__text">Вы выбираете дилерский центр, в&nbsp;который вам будет удобно приехать, и&nbsp;заполняете контактные данные. Конкретный автомобиль из&nbsp;наличия на&nbsp;центральном складе бронируется за&nbsp;вами.<br><br>

			Менеджер из&nbsp;дилерского центра свяжется с&nbsp;вами для подтверждения брони. После этого нужно будет приехать в&nbsp;ДЦ, подписать контракт и&nbsp;осуществить небольшую предоплату.<br><br>

			Автомобиль со&nbsp;склада отправляется в&nbsp;дилерский центр, где через несколько дней вы сможете его забрать (к-во дней уточняется у&nbsp;дилера).</p>
			<div class="more-popup__buttons">
				<div class="df-button js-close-popup">Понятно</div>
			</div>
    </div>
	</div>
</div>


@endsection

@section('scripts')
	<script src="{{ mix('/js/lazypreview.js') }}"></script>
	<script src="{{ mix('/js/special/libs.js') }}"></script>
	<script src="{{ mix('/js/special/sonata_libs.js') }}"></script>
	<script src="{{ mix('/js/special/sonata_online.js') }}"></script>
@endsection
