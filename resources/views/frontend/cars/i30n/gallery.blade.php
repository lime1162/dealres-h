@extends('layouts.master-dealer')

@section('pageTitle', 'i30 N')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/css/cars/i30n_2019/libs.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/cars/i30n_2019/i30n_2019.css') }}">
@endsection

@section('content')
<section class="nav">
    <ul class="nav__menu">
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}#design" class="nav__link scroll">
                Дизайн
            </a>
        </li>
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}#dynamics" class="nav__link scroll">
                Динамика
            </a>
        </li>
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}#comfort" class="nav__link scroll">
                Комфорт
            </a>
        </li>
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}#safety" class="nav__link scroll">
                Безопасность
            </a>
        </li>
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}#specs" class="nav__link scroll">
                Характеристики
            </a>
        </li>
        <li class="nav__item">
            <a href="{{ route('static_dealerapi_car28', null, false) }}/gallery" class="nav__link active">
                <!-- Фото и видео -->
                Галерея
            </a>
        </li>
    </ul>
    <div class="nav__buttons">
        <a target="_blank" href="/test-drive/i30N" class="df-button nav__button">
            Тест-драйв
        </a>
        <a target="_blank" href="/configurator/car/28" class="df-button nav__button">
            Конфигуратор
        </a>
        <a target="_blank" href="/find-dealer" class="df-button nav__button">
            Найти дилера
        </a>
    </div>
</section>

<section class="gallery">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="gallery__wrapper">
					<ul id="gallery" class="gallery__list">
						<li class="gallery__item" data-image="/images/cars/i30n/slider/1.jpg" style="background-image: url(/images/cars/i30n/slider/1.jpg)"></li>
						<li class="gallery__item" data-image="/images/cars/i30n/slider/2.jpg" style="background-image: url(/images/cars/i30n/slider/2.jpg)"></li>
						<li class="gallery__item" data-image="/images/cars/i30n/slider/3.jpg" style="background-image: url(/images/cars/i30n/slider/3.jpg)"></li>
						<li class="gallery__item" data-image="/images/cars/i30n/slider/4.jpg" style="background-image: url(/images/cars/i30n/slider/4.jpg)"></li>
                        <li class="gallery__item" data-image="/images/cars/i30n/slider/5.jpg" style="background-image: url(/images/cars/i30n/slider/5.jpg)"></li>
                        <!-- <li class="gallery__item" data-image="/images/cars/i30n/gallery_pics/video-thumb1.jpg">
                            <iframe src="https://www.youtube.com/embed/vxqdQJ1nOw4?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;" class="youtube-video"></iframe>
                        </li>
                        <li class="gallery__item" data-image="/images/cars/i30n/gallery_pics/video-thumb2.jpg">
                            <iframe src="https://www.youtube.com/embed/13MVR5-yrr0?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;" class="youtube-video"></iframe>
                        </li>
                        <li class="gallery__item" data-image="/images/cars/i30n/gallery_pics/video-thumb3.jpg">
                            <iframe src="https://www.youtube.com/embed/16Q8xv8bt0s?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;" class="youtube-video"></iframe>
                        </li>
                        <li class="gallery__item" data-image="/images/cars/i30n/gallery_pics/video-thumb4.jpg">
                            <iframe src="https://www.youtube.com/embed/Ik1S2gXrg6c?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;" class="youtube-video"></iframe>
                        </li>
                        <li class="gallery__item" data-image="/images/cars/i30n/gallery_pics/video-thumb5.jpg">
                            <iframe src="https://www.youtube.com/embed/0N0Dz-oSUug?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;" class="youtube-video"></iframe>
                        </li> -->
					</ul>
					<div class="gallery__indicator">
						<span class="gallery__current">01</span>
						<span class="gallery__sep">/</span>
						<span class="gallery__total">00</span>
					</div>
				</div>
				<div class="gallery__nav">
					<ul id="gallery-nav" class="gallery__nav-list">
						<li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/slider/1.jpg)"></li>
						<li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/slider/2.jpg)"></li>
						<li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/slider/3.jpg)"></li>
						<li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/slider/4.jpg)"></li>
                        <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/slider/5.jpg)"></li>
                        <!-- <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/gallery_pics/video-thumb1.jpg)">
                            <span class="view-pagination__label"></span>
                        </li>
                        <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/gallery_pics/video-thumb2.jpg)">
                            <span class="view-pagination__label"></span>
                        </li>
                        <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/gallery_pics/video-thumb3.jpg)">
                            <span class="view-pagination__label"></span>
                        </li>
                        <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/gallery_pics/video-thumb4.jpg)">
                            <span class="view-pagination__label"></span>
                        </li>
                        <li class="gallery__nav-item" style="background-image: url(/images/cars/i30n/gallery_pics/video-thumb5.jpg)">
                            <span class="view-pagination__label"></span>
                        </li> -->
					</ul>
				</div>
				<div class="gallery__wrapper">
					<a href="#" download class="gallery__download">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 9H0" stroke="black" stroke-width="2"/>
							<path d="M5 0L5 6" stroke="black" stroke-width="2"/>
							<path d="M9 3L5.6 5.55C5.24445 5.81667 4.75556 5.81667 4.4 5.55L1 3" stroke="black" stroke-width="2"/>
						</svg>
						Скачать фотографию
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

@endsection

@section('scripts')
    <script src="{{ mix('/js/cars/i30n_2019/libs.js') }}"></script>
	<script src="{{ mix('/js/cars/i30n_2019/gallery.js') }}"></script>
@endsection
