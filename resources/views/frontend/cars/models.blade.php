@extends('layouts.master')

@section('pageTitle', 'Модели Hyundai: весь модельный ряд Hyundai, цены на новые автомобили')

@section('styles')
  <link rel="stylesheet" href="{{ mix('/css/cars/index.css') }}">
@endsection

@section('content')

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<section class="cars">
				<h1 class="h2 cars__title">Модельный ряд Hyundai</h1>
				<ul class="cars__list">
					<li class="cars__item">
						<a href="/NewElantra">
							<div class="cars__name">ELANTRA</div>
							<div class="cars__price">
								<span>1 059 000</span>
								<span>&mdash;</span>
								<span>1 325 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/c39098757f7d312d4dfb9620fd2a0306_Frame-2.png" alt="ELANTRA">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 8 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/i30n">
							<div class="cars__name">i30 N</div>
							<div class="cars__price">
								<span>2 200 000</span>
								<span>&mdash;</span>
								<span>2 350 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/32a0ec8797f5ee5b08c70fdabb7b06bd_i30N_img.png" alt="i30 N">
							</div>
							<div class="cars__program">Стандарт без КАСКО</div>
							<div class="cars__fp">от 46 075 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/NewSonata">
							<div class="cars__name">Новая SONATA</div>
							<div class="cars__price">
								<span>1 740 000</span>
								<span>&mdash;</span>
								<span>1 999 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/e8ff54a5d01f09e522a2b204c119a8c5_Sonata Elegance_Oxford Blue(XB2)_180 1.png" alt="Новая SONATA">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 10 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/Solaris">
							<div class="cars__name">SOLARIS</div>
							<div class="cars__price">
								<span>746 000</span>
								<span>&mdash;</span>
								<span>1 011 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/185018e10b0570201e0e9cfd1293d708_Frame.png" alt="Solaris">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 6 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/Sonata">
							<div class="cars__name">SONATA</div>
							<div class="cars__price">
								<span>1 380 000</span>
								<span>&mdash;</span>
								<span>1 820 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/529d10ac031ca685bf85555361cb159b_s660_300sonata.png" alt="SONATA">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 9 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/NewSantaFe">
							<div class="cars__name">SANTA FE</div>
							<div class="cars__price">
								<span>2 119 000</span>
								<span>&mdash;</span>
								<span>2 999 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/456c3076b6128831dc40f9cbcd1180f9_ace5d4fb8d6773411eb243bae523e81d_f65846f28fb7b380050960314bafbac0_s660_300santa-fe.png" alt="SANTA FE">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 15 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/NewTucson">
							<div class="cars__name">TUCSON</div>
							<div class="cars__price">
								<span>1 499 000</span>
								<span>&mdash;</span>
								<span>2 269 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/97cfab8f5d3e6e963d8183e5ad70e734_Frame-1.png" alt="TUCSON">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 11 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/Creta">
							<div class="cars__name">CRETA</div>
							<div class="cars__price">
								<span>957 000</span>
								<span>&mdash;</span>
								<span>1 485 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/d0ee30e3d35226917d318a3ef0719f20_s660_300creta.png" alt="CRETA">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 7 000 ₽/мес</div>
						</a>
					</li>
					<li class="cars__item">
						<a href="/H-1">
							<div class="cars__name">H-1</div>
							<div class="cars__price">
								<span>2 129 000</span>
								<span>&mdash;</span>
								<span>2 439 000</span>
								<span>₽</span>
							</div>
							<div class="cars__img">
								<img src="https://api.cofigurator.hyundai.ru/images/car_type/330b8fb7ff8382afb78a44ab5e002080_H1.png" alt="H-1">
							</div>
							<div class="cars__program">Старт</div>
							<div class="cars__fp">от 16 000 ₽/мес</div>
						</a>
					</li>
					
				</ul>
			</section>
		</div>
	</div>
</div>

@endsection

@section('scripts')

@endsection
