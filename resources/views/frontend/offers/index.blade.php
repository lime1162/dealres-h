@extends('layouts.master-dealer')

@section('pageTitle', 'Спецпредложения')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/css/special/special.css') }}">
@endsection

@section('content')
  <section class="special-title">
    <div class="container">
      <div class="special-title-inner">
        <h2>Спецпредложения</h2>
      </div>
    </div>
  </section>

  <div class="special-tabs">
    <div class="special-tabs-inner">
      <div class="tabs-mobile">
        <div class="tabs-mobile-header">
          <span class="tabs-mobile-header__text df-text-radio-button-14px">Все</span>
        </div>
        <div class="tabs-mobile-content">
          <ul class="df-tabs">
            <li class="df-tabs__item">
              <button class="df-tabs__button df-tabs__button--active" data-type="-1" data-button="all">Все</button>
            </li>
            <li class="df-tabs__item">
              <button class="df-tabs__button" data-type="0" data-button="buyers">Покупателям</button>
            </li>
            <li class="df-tabs__item">
              <button class="df-tabs__button" data-type="1" data-button="service">Сервис</button>
            </li>
            <li class="df-tabs__item">
              <button class="df-tabs__button" data-type="2" data-button="leasing">Трейд-ин</button>
            </li>
          </ul>
        </div>
      </div>
      <ul class="df-tabs">
        <li class="df-tabs__item">
          <button class="df-tabs__button df-tabs__button--active" data-type="-1" data-button="all">Все</button>
        </li>
        <li class="df-tabs__item">
          <button class="df-tabs__button" data-type="0" data-button="buyers">Покупателям</button>
        </li>
        <li class="df-tabs__item">
          <button class="df-tabs__button" data-type="1" data-button="service">Сервис</button>
        </li>
        <li class="df-tabs__item">
          <button class="df-tabs__button" data-type="2" data-button="leasing">Трейд-ин</button>
        </li>
      </ul>
    </div>
  </div>

  <section class="special-content">
    <div class="container">
      <div class="row">
        @foreach($offers as $offer)
        <div class="col-lg-3 col-md-6 col-sm-12" data-type="{{ $offer->type }}">
          <div class="special-item">
            <a href="{{ strpos($offer->url, '/') === false ? '/promo/' . $offer->url : $offer->url }}" class="special-item__link">
              <div class="special-item-label">
                <p class="df-text-input-14px">{{ $offer->label->name }}</p>
              </div>
              <div class="special-item-img" style="background-image: url(https://optimizator.hyundai.ru{{ $offer->getImagePreviewUrl() }})"></div>
              <div class="special-item-desc">
                <h4>{!! $offer->name !!}</h4>
              </div>
            </a>
          </div>
        </div>
        @endforeach
      </div>
    </div>
  </section>


@endsection

@section('scripts')
    <script src="{{ mix('/js/special/custom.js') }}"></script>
@endsection
