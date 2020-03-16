@extends('layouts.master')

@section('pageTitle', 'Стать дилером')

@section('styles')
  <link rel="stylesheet" href="{{ mix('/css/becomeDealer/become-dealer.css') }}">
@endsection

@section('content')

<section class="head">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="head__banner">
          <div class="head__composition">
            <h1 class="head__title">Как стать дилером Hyundai</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="info">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="info-block">
          <p class="info-text df-text-main-16px">Если Вы приняли решение подать заявку на&nbsp;получение статуса официального дилера ООО "Хендэ Мотор СНГ", Вам необходимо максимально подробно и&nbsp;открыто заполнить анкету кандидата и&nbsp;прислать ее&nbsp;на&nbsp;наш электронный адрес.
          <br><br>
          После получения анкеты, мы свяжемся с&nbsp;Вами для прояснения статуса заявки.</p>
          <p>
          Приоритетными для развития бизнеса ХМСНГ являются следующие города:<br><br>

1) Москва<br>
a. Западное Дегунино / Левобережный<br>
b. Каширское ш.<br>
c. Варшавское ш.<br>
d. Район Сокольники<br><br>

2) Санкт-Петербург<br>
a. Софийская ул.<br>
b. Васильевский остров<br>
c. Московский район<br>
d. Комендантский район<br><br>

3) Иркутск<br>
4) Нижнекамск<br>
5) Петропавловск-Камчатский<br>
6) Братск<br>
7) Йошкар-Ола<br>
8) Липецк<br>
9) Ставрополь<br>
10) Пятигорск<br>
11) Воронеж<br>
12) Самара<br>
13) Чита<br>
14) Набережные Челны<br>
15) Курск<br>
16) Березняки<br>
17) Миасс<br>
18) Элиста<br>

Мы ждем заявки от кандидатов, желающих развивать бизнес вместе с ХМСНГ.<br><br>
          </p>
          <h5>Первичная анкета для кандидатов в&nbsp;дилеры Hyundai</h5>
          <a href="/media/downloads/new_candidate_application_2019.pptx" class="df-download-link" target>
            <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download-link"></use>
            </svg>
            <span>Скачать файл</span>
          </a>
          <div class="info-item df-text-small-12px">
            <p class="info-item__text">
              <span class="info-item__span">С уважением,</span>
              Отдел развития дилерской сети ООО "Хендэ Мотор СНГ"
            </p>
            <a href="mailto:Development@hyundai.ru" class="df-link-1">Development@hyundai.ru</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


@endsection

@section('scripts')

@endsection
