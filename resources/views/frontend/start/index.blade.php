@extends('layouts.master-dealer')

@section('pageTitle', 'Старт')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/css/start/libs.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/start/start.css') }}">
@endsection

@section('content')

@component('components/plugin-map')@endcomponent

<section class="banner ended">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a href="/all-offers" class="df-back-link banner__back">
					Все предложения
					<svg>
						<use xlink:href="#back-link"></use>
					</svg>
				</a>
				<div class="banner__inner lazyload lazypreview" data-bgset="/images/start/pics/title7.jpg [(max-width: 640px)] | /images/start/pics/title6.jpg">
					<h1 class="banner__title">
						Финансовая программа
					</h1>
					<div class="banner__video">

					</div>
					<a href="#" class="banner__pass js-pass">
						<span>Пропустить</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="14.5454" width="20.5702" height="2.05702" transform="rotate(-45 0 14.5454)"/>
							<rect x="1.45459" width="20.5702" height="2.05702" transform="rotate(45 1.45459 0)"/>
						</svg>
					</a>
					<a href="#" class="banner__button js-go-to-calc">
						<span>Рассчитать</span>
						<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
							<path d="M11 1L6.66896 4.89793C6.28866 5.24021 5.71134 5.24021 5.33104 4.89793L1 1" stroke="#000" stroke-width="2"/>
							</g>
							<defs>
							<clipPath id="clip0">
							<rect width="7" height="12" fill="#000" transform="translate(12) rotate(90)"/>
							</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<a href="#" class="banner__m-button js-go-to-calc">
		Рассчитать
	</a>
</section>

<section class="about">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="about__inner">
					<h2 class="about__title">Как работает СТАРТ</h2>
					<ul class="about__list owl-carousel js-carousel">
						<li class="about__item">
							<div class="about__back">
							</div>
							<div class="about__icon">
								<svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M54.4524 0.709463C53.953 0.217117 53.265 -0.0403546 52.5662 0.00515638L51.5753 0.0683838C42.6902 0.636051 34.375 4.9282 28.7618 11.8444L26.4293 14.7182L20.3253 14.5388C20.3149 14.5384 20.3044 14.5383 20.2941 14.5383C15.4531 14.5383 10.9019 16.425 7.47868 19.8507L1.22681 26.1076C0.929467 26.4052 0.835018 26.8502 0.985967 27.2429C1.13692 27.6358 1.50475 27.9029 1.92473 27.9243L15.1586 28.6047L14.6191 29.2696C14.3472 29.6047 14.3041 30.0709 14.5103 30.45C14.7177 30.8315 14.935 31.2069 15.1616 31.5763L12.0233 35.3049C11.755 35.6237 11.6972 36.0699 11.8752 36.4467C12.5607 37.8964 13.4705 39.1989 14.5798 40.3182C15.7159 41.4647 17.0444 42.4023 18.5283 43.1051C18.6733 43.1739 18.8288 43.2075 18.9834 43.2075C19.223 43.2075 19.4607 43.1265 19.654 42.9696C20.3301 42.4207 21.1096 41.7696 21.8635 41.1401C22.4008 40.6914 22.9505 40.2323 23.4643 39.809C23.771 39.9937 24.0815 40.1728 24.3966 40.3444C24.5561 40.4311 24.7309 40.4739 24.905 40.4739C25.1368 40.4739 25.367 40.3984 25.5576 40.2503L26.283 39.6869L26.9658 52.987C26.9875 53.4073 27.2543 53.7754 27.6467 53.9265C27.7709 53.9742 27.9001 53.9976 28.0283 53.9976C28.3055 53.9976 28.5777 53.889 28.781 53.6855L35.033 47.4286C38.4562 44.0027 40.3413 39.448 40.3413 34.6032V28.769L42.8076 26.8536C50.1992 21.1132 54.7008 12.4572 55.1583 3.10489L55.1837 2.58655C55.2182 1.88596 54.9515 1.20192 54.4524 0.709463ZM4.4243 25.92L8.98372 21.357C12.0011 18.3373 16.0121 16.6726 20.2787 16.6684L24.7399 16.7996L16.8204 26.5574L4.4243 25.92ZM20.4998 39.5046C19.9443 39.9684 19.3747 40.4441 18.8462 40.8791C17.8239 40.3251 16.8991 39.6337 16.0909 38.8181C15.3082 38.0283 14.642 37.129 14.1048 36.1384L16.4025 33.4084C17.0972 34.3413 17.8577 35.2248 18.6792 36.0526C18.6799 36.0533 18.6805 36.0538 18.6811 36.0544C18.6813 36.0547 18.6816 36.055 18.6818 36.0552C18.6821 36.0555 18.6824 36.0557 18.6827 36.056C19.5936 36.9735 20.5734 37.8154 21.6128 38.5767C21.2458 38.8816 20.8698 39.1957 20.4998 39.5046ZM38.2131 34.6032C38.2131 38.879 36.5494 42.8988 33.5282 45.9224L28.9688 50.4854L28.3326 38.0953L38.213 30.4221V34.6032H38.2131ZM53.0328 3.00082C52.6057 11.7314 48.4033 19.812 41.5031 25.1707L24.8117 38.1333C23.4276 37.3239 22.1374 36.3681 20.9566 35.2853L26.5839 29.6536C26.9994 29.2378 26.9994 28.5633 26.5839 28.1473C26.1683 27.7313 25.4944 27.7313 25.0788 28.1473L19.4568 33.7737C18.4231 32.6285 17.5077 31.3824 16.7282 30.0496L30.4139 13.1873C35.6539 6.73103 43.4163 2.72415 51.7108 2.19435L52.7017 2.13113C52.8316 2.12306 52.9185 2.18756 52.9585 2.22703C52.9985 2.26639 53.0646 2.352 53.0582 2.48259L53.0328 3.00082Z" fill="#002C5F"/>
								</svg>
							</div>
							<div class="about__description">СТАРТуем!</div>
							<div class="about__text">
								СТАРТ – это новая версия уже знакомой финансовой программы.
								Выбирайте выгодные опции расчета для получения самых лучших условий.
							</div>
						</li>
						<li class="about__item">
							<div class="about__back">
							</div>
							<div class="about__icon">
								<svg width="52" height="49" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.6019 30.2435L11.9036 30.9594L12.6019 30.2435L1.12308 19.0457L16.9851 16.739C17.6366 16.6443 18.1998 16.2349 18.491 15.6444L25.5841 1.26097L32.6772 15.6444L33.5741 15.2021L32.6772 15.6444C32.9684 16.2349 33.5316 16.6443 34.1832 16.739L50.0451 19.0457L38.5663 30.2435C38.0954 30.7029 37.8805 31.3646 37.9916 32.013L40.7013 47.8238L26.5154 40.36C25.9324 40.0533 25.2358 40.0533 24.6529 40.36L25.1185 41.245L24.6529 40.36L10.4669 47.8238L13.1766 32.013C13.2877 31.3646 13.0728 30.7029 12.6019 30.2435Z" stroke="#002C5F" stroke-width="2"/>
								</svg>
							</div>
							<div class="about__description">Преимущества</div>
							<div class="about__text">
								<ul class="about__options">
									<li class="about__option">
										Первый взнос от&nbsp;0%
									</li>
									<li class="about__option">
										Оформляй только по&nbsp;паспорту и&nbsp;ВУ
									</li>
									<li class="about__option">
										Низкий ежемесячный платеж
									</li>
									<li class="about__option">
										Включай КАСКО и&nbsp;ТО в&nbsp;платежи
									</li>
									<li class="about__option">
										Меняй авто каждые 3&nbsp;года
									</li>
								</ul>
							</div>
						</li>
						<li class="about__item">
							<div class="about__back">
							</div>
							<div class="about__icon">
								<svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="52" cy="52" r="52" fill="#F1F1F1"/>
									<path d="M28.2773 61H22.7712C21.8878 61 21.1091 60.4205 20.8554 59.5743L19.5608 55.2555C18.7674 52.6088 19.3959 49.7402 21.2231 47.6677L32.6762 34.6773C33.0559 34.2467 33.6023 34 34.1764 34H59.4234C59.9541 34 60.4631 34.2109 60.8382 34.5863L70.838 44.5939C71.7606 45.5173 72.8952 46.2008 74.1427 46.585L83.8214 49.5654C84.6604 49.8237 85.2328 50.599 85.2328 51.4768V59C85.2328 60.1046 84.3374 61 83.2328 61H77.239M42.2664 61H63.7496" stroke="#002C5F" stroke-width="2"/>
									<path d="M42.2654 61C42.2654 64.8667 39.1334 68 35.2716 68C31.4098 68 28.2778 64.8667 28.2778 61C28.2778 57.1333 31.4098 54 35.2716 54C39.1334 54 42.2654 57.1333 42.2654 61Z" stroke="#002C5F" stroke-width="2"/>
									<path d="M77.238 61C77.238 64.8667 74.1061 68 70.2443 68C66.3824 68 63.2505 64.8667 63.2505 61C63.2505 57.1333 66.3824 54 70.2443 54C74.1061 54 77.238 57.1333 77.238 61Z" stroke="#002C5F" stroke-width="2"/>
									<path d="M40.2676 46H64.7485" stroke="#002C5F" stroke-width="2"/>
								</svg>
							</div>
							<div class="about__description">По окончании</div>
							<div class="about__text">
								<ul class="about__options">
									<li class="about__option">
										Погаси остаток и&nbsp;оставь автомобиль себе
									</li>
									<li class="about__option">
										Обменяй автомобиль на&nbsp;новый по&nbsp;trade-in
									</li>
									<li class="about__option">
										Верни автомобиль банку без погашения остаточной стоимости
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="calc">
	<start-calc></start-calc>
</section>

<section class="faq">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="faq__inner">
				<h2 class="faq__title">Вопрос-ответ</h2>
				<ul class="faq__list">
					<li class="faq__item">
						<a href="" class="question js-open-question">
							<span>Что такое СТАРТ?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								СТАРТ&nbsp;&mdash; это финансовая программа, с&nbsp;низкими ежемесячными платежами и&nbsp;гарантированным обратным выкупом автомобиля.
								В&nbsp;рамках СТАРТа Вы&nbsp;можете выбрать опцию ПЛЮС по&nbsp;которой стоимость КАСКО и&nbsp;прохождение&nbsp;ТО включены в&nbsp;ежемесячный платеж.
								Также Вам доступен СТАРТ с&nbsp;повышенной гарантированной остаточной стоимостью.
							</p>
						</div>
					</li>
					<li class="faq__item delay2">
						<a href="" class="question js-open-question">
							<span>Чем СТАРТ отличается от обычного кредита?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								Ежемесячные платежи по&nbsp;программе СТАРТ в&nbsp;среднем в&nbsp;2&nbsp;раза ниже, чем по&nbsp;обычному кредиту, к&nbsp;тому&nbsp;же при включении опции ПЛЮС , в&nbsp;каждый ежемесячный платеж будет включена оплата полиса КАСКО и&nbsp;прохождение&nbsp;ТО, что делает покупку и&nbsp;обслуживание автомобиля гораздо более комфортными.
							</p>
						</div>
					</li>
					<li class="faq__item delay4">
						<a href="" class="question js-open-question">
							<span>Кому необходим СТАРТ и его опции?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<div>
								<ul>
									<li>
										Клиентам, которые рационально планируют бюджет и&nbsp;предпочитают минимальные выплаты по&nbsp;кредиту.
									</li>
									<li>
										Клиентам, которые выбирают между доступной и&nbsp;дорогой версией автомобиля, но&nbsp;не&nbsp;хотят увеличивать свою нагрузку по&nbsp;кредиту.
									</li>
									<li>
										Клиентам, которые не&nbsp;хотят ежегодно платить всю сумму за&nbsp;полис КАСКО.
									</li>
									<li>
										Клиентам, которые хотят проходить регулярное техническое обслуживание, стоимость которого уже включена в&nbsp;ежемесячные платежи.
									</li>
									<li>
										Клиентам, которые привыкли идти в&nbsp;ногу со&nbsp;временем и&nbsp;каждые три года менять автомобиль на&nbsp;новый и&nbsp;более современный.
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="faq__item delay5">
						<a href="" class="question js-open-question">
							<span>За счет чего получаются маленькие платежи по кредиту?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								Часть кредита, а&nbsp;именно&nbsp;50% (остаточная стоимость), фиксируется Банком и&nbsp;не&nbsp;включатся в&nbsp;ежемесячные платежи. Таким образом Клиент имеет возможность эксплуатировать автомобиль 3&nbsp;года, не&nbsp;оплачивая сразу всю его стоимость. Через 3&nbsp;года у&nbsp;Клиента есть выбор, что делать с&nbsp;автомобилем и&nbsp;остатком долга.
								А&nbsp;Так&nbsp;же у&nbsp;Вас появилась возможность ежемесячный платеж за&nbsp;счет выбора остаточной стоимости в&nbsp;зависимости от&nbsp;пробега:
							</p>
							<br>
							<ul>
								<li>
									50% при условии пробега не&nbsp;более 90&nbsp;тыс.&nbsp;км&nbsp;за&nbsp;3&nbsp;года
								</li>
								<li>
									60% при условии пробега не&nbsp;более 45&nbsp;тыс.&nbsp;км&nbsp;за&nbsp;3&nbsp;года
								</li>
								<li>
									55% при условии пробега не&nbsp;более 60&nbsp;тыс.&nbsp;км&nbsp;за&nbsp;3&nbsp;года
								</li>
							</ul>
						</div>
					</li>
					<li class="faq__item delay6">
						<a href="" class="question js-open-question">
							<span>Почему по программе СТАРТ не надо платить за регулярное ТО и полис КАСКО?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								Если вы выбрали СТАРТ ПЛЮС, то в&nbsp;каждый ежемесячный платеж уже включена плата за&nbsp;полис КАСКО и&nbsp;прохождение технического обслуживания. Как это работает:<br />
								Сумма 3-х летнего полиса КАСКО и&nbsp;прохождения трех&nbsp;ТО делится на&nbsp;36&nbsp;месяцев, и&nbsp;полученная цифра прибавляется к&nbsp;стандартному ежемесячному платежу по&nbsp;программе СТАРТ.<br />
								Важно отметить, что на&nbsp;них не&nbsp;начисляются проценты.<br />
							</p>
						</div>
					</li>
					<li class="faq__item delay7">
						<a href="" class="question js-open-question">
							<span>Существуют ли риски для Клиента?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								Чтобы Клиент не&nbsp;сталкивался с&nbsp;рисками, в&nbsp;договоре заранее зафиксирована гарантированная остаточная стоимость, т.е. минимальная сумма, которую может получить Клиент при продаже автомобиля Дилеру в&nbsp;рамках программы СТАРТ. Эта сумма достаточна для погашения кредита, при этом это только минимальная стоимость. Фактическая стоимость будет зависеть от&nbsp;технического состояния автомобиля и&nbsp;условий рынка, ее&nbsp;назовет Дилер при оценке автомобиля.
							</p>
						</div>
					</li>
					<li class="faq__item delay8">
						<a href="" class="question js-open-question">
							<span>Какие преимущества получает Клиент?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<div>
								<ul>
									<li>
										Комфортные ежемесячные платежи&nbsp;&mdash; в&nbsp;2&nbsp;раза ниже по&nbsp;сравнению с&nbsp;обычным кредитом.
									</li>
									<li>
										Нет необходимости разово платить значительную сумму за&nbsp;полис КАСКО.
									</li>
									<li>
										Прохождение одного&nbsp;ТО в&nbsp;год уже включено в&nbsp;ежемесячный платеж.
									</li>
									<li>
										Регулярное обновление автомобиля.
									</li>
									<li>
										Более дорогая версия автомобиля без существенного влияния на&nbsp;платеж.
									</li>
									<li>
										Гарантия остаточной стоимости.
									</li>
									<li>
										Несколько вариантов погашения кредита на выбор.
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="faq__item delay9">
						<a href="" class="question js-open-question">
							<span>Что делать с автомобилем по прошествии трех лет?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<div>
								У Клиента есть три опции:
								<br>
								<ul>
									<li>
										Обновить свой автомобиль на&nbsp;новый Hyundai, реализовав автомобиль Дилеру, а&nbsp;полученные от&nbsp;продажи средства использовать для погашения текущего кредита и&nbsp;в&nbsp;качестве взноса за&nbsp;новый автомобиль.
									</li>
									<li>
										Продолжить пользоваться своим автомобилем, погасив кредит за&nbsp;счет собственных средств или продлив кредит еще на&nbsp;2&nbsp;года.
									</li>
									<li>
										Вернуть автомобиль Банку по&nbsp;гарантированной минимальной остаточной стоимости и&nbsp;закрыть задолженность по&nbsp;кредиту.
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="faq__item delay10">
						<a href="" class="question js-open-question">
							<span>Что если через 3 года автомобиль будет стоить дешевле 50%?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<p>
								Средняя рыночная стоимость подержанного Solaris составляет около&nbsp;85% от&nbsp;цены нового. Но&nbsp;даже если случится так, что ситуация на&nbsp;рынке кардинально изменится, у&nbsp;Клиента есть гарантированная остаточная стоимость&nbsp;50%, в&nbsp;пределах которой автомобиль будет выкуплен, а&nbsp;кредит, соответственно, будет погашен. Кроме того, есть возможность продлить кредит еще на&nbsp;2&nbsp;года.
							</p>
						</div>
					</li>
					<li class="faq__item delay10">
						<a href="" class="question js-open-question">
							<span>Какие существуют условия для получения гарантированной остаточной стоимости?</span>
							<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="black"/>
							</svg>
						</a>
						<div class="question__dropdown">
							<div>
								<ul>
									<li>
										Пробег не&nbsp;более 90&nbsp;000&nbsp;км за&nbsp;3&nbsp;года при остаточной стоимости в&nbsp;50%; не&nbsp;более 60&nbsp;000&nbsp;км за&nbsp;3&nbsp;года при остаточной стоимости в&nbsp;55%; не&nbsp;более 45&nbsp;000&nbsp;км за&nbsp;3&nbsp;года при остаточной стоимости в&nbsp;60%.
									</li>
									<li>
										Прохождение плановых ТО у официального Дилера.
									</li>
									<li>
										Качественное состояние автомобиля, соответствующее возрасту автомобиля и&nbsp;нормальным условиям эксплуатации Положительная кредитная история в&nbsp;Банке.
									</li>
									<li>
										Наступление 36 платежа (не ранее).
									</li>
									<li>
										Обновление автомобиля на новый Hyundai.
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<a href="#" class="faq__more js-show-more">Показать еще</a>
				<a href="/ContactUs" class="faq__button df-button">Задать вопрос</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="disclamers">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="disclamers__inner">
					<div class="disclamers__opener" onclick="$('.disclamers__list').slideToggle(); $(this).toggleClass('open');">
						<span>Расшифровка финансового предложения</span>
						<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" style="float: right;">
							<path d="M4.5 6L-4.29138e-07 1.12054e-06L9 4.76837e-07L4.5 6Z" fill="#B7B7B7"></path>
						</svg>
					</div>
					<ul class="disclamers__list" style="display: none;">
						<li class="disclamers__item">
							{{ $disclaimer['Solaris_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['Creta_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewElantra_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['Sonata_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewSonata_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewTucson_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewSantaFe_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['H-1_start'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['Solaris_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['Creta_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewElantra_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['Sonata_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewTucson_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['NewSantaFe_startplus'] }}
						</li>
						<li class="disclamers__item">
							{{ $disclaimer['H-1_startplus'] }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<script>
var oldWindowWidth = 0;

// videoInit()

// window.addEventListener('resize', videoInit);

function videoInit() {
	var windowWidth = window.innerWidth;

	//Для iOs
	if (oldWindowWidth === windowWidth) {
		return null;
	}

	oldWindowWidth = windowWidth;

	function appendVideo(selector, container, src) {
		if (!document.querySelector('.'+selector)) {
			var cont = document.querySelector(container);

			if (cont) {
				cont.innerHTML = '<video id="video" class="' + selector + '" muted autoplay playsinline data-object-fit="cover">' +
				'<source src="' + src +'">' +
				'</video>'
			} else {
				console.error('Не найден контейнер для видео ', container);
			}
		}
	}

	if (windowWidth > 1599) {
		appendVideo('large-video', '.banner__video', '/images/start/video/start_new_1500x545.mp4');
	} else if (windowWidth > 1023) {
		appendVideo('medium-video', '.banner__video', '/images/start/video/start_new_1280x440.mp4');
	} else {
		appendVideo('mobile-video', '.banner__video', '/images/start/video/start_mobile.mp4');
	}
}
</script>
@endsection

@section('scripts')
	<script>
		var carCode = '{{ $code }}'
	</script>
	<script src="{{ mix('/js/lazypreview.js') }}"></script>
    <script src="{{ mix('/js/start/libs.js') }}"></script>
    <script src="{{ mix('/js/start/start.js') }}"></script>
    <script src="{{ mix('/js/start/calc.js') }}"></script>
@endsection
