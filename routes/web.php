<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* redirects */
Route::get('Become-a-dealer', function () { return redirect('become-a-dealer'); });
Route::get('brand-collection/category/{cat_name}', function ($cat_name) { return redirect('brand-collection/' . $cat_name); });
Route::get('vacancy', function () { return redirect('CareersMoscow'); });
Route::get('vacancy/{id}', function ($id) { return redirect('CareersMoscow/' . $id); });

Route::get('/service/roadside-assistance', function () { return redirect('/service/assistance'); });

/* Сначала объявим роуты для админки */
Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => 'auth', 'as' => 'admin.'], function () {
    Route::get('/', 'AdminController@index')->name('adminindex');
    Route::get('johndoe', 'ZController@test');
    // Тут будут роуты админки
    Route::resource('users', 'UserController');
    Route::resource('user_roles', 'UserRoleController');

    Route::resource('cars', 'CarsController');
    Route::resource('banners', 'BannersController');
    Route::resource('cities', 'CitiesRegionsController');
    Route::get('dealers/download_xls', ['as' => 'dealers.download_xls', 'uses' => 'DealersController@downloadXLS']);
    Route::resource('dealers', 'DealersController');
    Route::resource('news', 'NewsController');
    Route::resource('offers', 'OffersController');
    Route::resource('placeholders', 'PlaceholderController');
    Route::resource('seo', 'SeoController');
    Route::resource('motorstudio_events', 'MotorstudioEventController');
    Route::get('jobseekers/download', ['as' => 'jobseeker.download', 'uses' => 'JobseekersController@downloadCSV']);
    Route::resource('jobseekers', 'JobseekersController');
    Route::get('motorstudio_requests/download', ['as' => 'motorstudio_requests.download', 'uses' => 'MotorstudioRequestController@downloadCSV']);
    Route::resource('motorstudio_requests', 'MotorstudioRequestController');
    Route::resource('motorstudio_deadlines', 'MotorstudioDeadlineController');
    Route::resource('brandcollection_categories', 'BrandcollectionCategoryController');
    Route::resource('brandcollection_tags', 'BrandcollectionTagController');
    Route::resource('brandcollection_products', 'BrandcollectionProductController');
    Route::resource('warranty_cars', 'WarrantyCarController');
    Route::resource('accessories_categories', 'AccessoriesCategoryController');
    Route::resource('accessories_products', 'AccessoriesProductController');
    Route::resource('special_offer_labels', 'SpecialOfferLabelController');
    Route::resource('special_offers', 'SpecialOfferController');
    Route::resource('csvfile', 'CsvFileController');
    Route::resource('manuals', 'ManualController');
    Route::resource('siebel_logs', 'SiebelLogController');
    Route::resource('storage_photos', 'StoragePhotosController');
    Route::resource('dealer_menu_categories', 'DealerMenuCategoriesController');
    Route::resource('dealer_menu_pages', 'DealerMenuPagesController');

    Route::get('cache_clear', ['as' => 'cache_clear', 'uses' => function() {
        Artisan::call('cache:clear');
        return response('Кэш сброшен<br/><a href="/admin">В админку</a>');
    }]);
});

Route::group(['prefix' => 'requestapi', 'as' => 'requestapi.'], function() {
    Route::get('getDealers', ['as' => 'get_dealers', 'uses' => 'RequestApiController@getDealers']);
    Route::get('getModels', ['as' => 'get_models', 'uses' => 'RequestApiController@getModels']);
    Route::get('getEvents', ['as' => 'get_events', 'uses' => 'RequestApiController@getEvents']); /***/
    Route::get('getOffers', ['as' => 'get_offers', 'uses' => 'RequestApiController@getOffers']); /***/
    // Route::get('sendto_old', ['as' => 'send_to_old', 'uses' => 'RequestApiController@sendTOOld']); /***/
    // Route::get('sendto', ['as' => 'send_to', 'uses' => 'RequestApiController@sendTO']); /***/
    // Route::get('sendtd', ['as' => 'send_td', 'uses' => 'RequestApiController@sendTD']); /***/
    Route::get('brochureCodes', ['as' => 'get_brochure_codes', 'uses' => 'RequestApiController@getBrochureCodes']);
    //Route::get('sendto', ['as' => 'send_to', 'uses' => 'SoapSiebelController@sendcrm']);
    Route::get('sendtd', ['as' => 'send_td', 'uses' => 'SoapSiebelController@sendcrm']);
    Route::get('request_brochure', ['as' => 'request_brochure', 'uses' => 'SoapSiebelController@requestBrochure']);
});

/***/
Route::group(['prefix' => 'api'], function() {
    Route::get('/send/testdrive', ['as' => 'api_send_testdrive', 'uses' => 'Ajax\FormsController@sendTestDrive']);
    Route::get('/send/servicerequest', ['as' => 'api_send_servicerequest', 'uses' => 'Ajax\FormsController@sendServiceRequest']);
    Route::get('/send/offercreditrequest', ['as' => 'offercreditrequest', 'uses' => 'Ajax\FormsController@offerCreditRequest']);

    Route::get('/send/start', ['as' => 'api_send_start', 'uses' => 'Ajax\FormsController@sendStart']);
    Route::post('/send/start', ['as' => 'api_send_start', 'uses' => 'Ajax\FormsController@sendStart']);

    Route::get('/send/contactus', ['as' => 'api_send_contactus', 'uses' => 'SoapSiebelController@sendcontactus']);
    Route::post('/send/contactus', ['as' => 'api_send_contactus_post', 'uses' => 'SoapSiebelController@sendcontactus']);

    Route::get('/send/motorstudio_request', ['as' => 'api_send_motorstudio_request', 'uses' => 'Ajax\FormsController@sendMotorstudioRequest']);
     Route::get('/send/eventRequest', ['as' => 'api_send_event_request', 'uses' => 'Ajax\FormsController@sendEventRequest']);
     Route::post('/send/eventRequest', ['as' => 'api_send_event_request', 'uses' => 'Ajax\FormsController@sendEventRequest']);

    Route::get('/send/jobseeker', ['as' => 'api_send_jobseeker', 'uses' => 'Ajax\FormsController@jobseeker']);
    Route::post('/send/jobseeker', ['as' => 'api_send_jobseeker_post', 'uses' => 'Ajax\FormsController@jobseeker']);

    Route::get('/send/jobseeker_xmmp', ['as' => 'api_send_jobseeker_xmmp', 'uses' => 'Ajax\FormsController@jobseekerXmmp']);
    Route::post('/send/jobseeker_xmmp', ['as' => 'api_send_jobseeker_post_xmmp', 'uses' => 'Ajax\FormsController@jobseekerXmmp']);

    Route::get('/service/checkVin', ['as' => 'api_service_checkvin', 'uses' => 'Ajax\FormsController@checkVin']);

    Route::get('/carList', ['as' => 'api_carlist', 'uses' => 'Ajax\ApiController@carList']);
    Route::get('/dealers', ['as' => 'api_dealers', 'uses' => 'Ajax\ApiController@dealers']);
});
/***/

/***/
Route::group(['prefix' => 'requestnew'], function() {
    Route::get('/checkvin', ['as' => 'api_old_checkvin', 'uses' => 'Ajax\OldController@checkVin']);

    Route::get('/getserviceengines', ['as' => 'api_old_checkvin', 'uses' => 'Ajax\ServiceCalculatorController@getServiceEngines']);

    Route::get('/getserviceenginetypes', ['as' => 'api_old_checkvin', 'uses' => 'Ajax\ServiceCalculatorController@getServiceEngineTypes']);

    Route::get('/getservicecost', ['as' => 'api_old_checkvin', 'uses' => 'Ajax\ServiceCalculatorController@getServiceCost']);
});

Route::get('/getPicThumb/{path}', 'ZController@getPicThumb')->where('path', '.*');

Route::get('/requestapi/getPageData', 'ZController@getPageData');
Route::get('/requestapi/getPageDataAll', 'ZController@getPageDataAll');
Route::get('/requestapi/getLayoutFiles', 'ZController@getLayoutFiles');
Route::get('/requestapi/getAllImages', 'ZController@getAllImages');

Route::get('/requestapi/send_ms_requests', 'ZController@sendMSRequests');

Route::get('/car/{id_text}', ['as' => 'car', 'uses' => 'Frontend\CarController@showCar']);

Route::get('/all-offers', 'SpecialOfferController@index');
Route::get('/all-offers/{code}', 'Frontend\OffersController@offerPage');
Route::get('/offers/{code}', 'Frontend\OffersController@offerPageRedirect');
Route::get('/special-offer', 'Frontend\OffersController@specialOffer');
Route::get('/promo/halva', function() {
    $placeholder = \App\Helpers\PlaceholderHelper::getPlaceholderData('halva');
    return view('frontend.promo.halva', ['header' => true, 'highlight' => false, 'footer' => true, 'placeholder' => $placeholder]);
});
// Katok
Route::get('/promo/katok', function() {
    return view('frontend.katok.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_dealerapi_katok');
Route::get('/pl2', 'Frontend\OffersController@pl2')->name('static_dealerapi_pl2');

Route::get('/promo/solaris_super_series_2', function () {
    return redirect('/Solaris', 302);
})->name('static_dealerapi_ss_2');

Route::get('/promo/creta-rock', function () {
/*
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.cofigurator.hyundai.ru/dealers');
//    curl_setopt($ch, CURLOPT_USERAGENT, 'HH-User-Agent');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $dealers = json_decode(curl_exec($ch), true);
    curl_close($ch);
*/


/*
    $json = file_get_contents('https://api.cofigurator.hyundai.ru/dealers');
    $dealers = json_decode($json, true);
*/

    return view('frontend.promo.creta-rock', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_dealerapi_cretarock');

// sonata_online
Route::get('/promo/sonata_online', function () {
    return view('frontend.promo.sonata_online', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_dealerapi_sonata_online');

// Promo Auto Link
Route::get('/promo/auto_link', function() {
    return view('frontend.promo.auto-link', ['header' => true, 'highlight' => false, 'footer' => true]);
});

Route::get('/promo/{code}', 'SpecialOfferController@detail')->name('dealerapi_specialofferdb');

Route::get('/corporate-clients', 'Frontend\BuyController@corporateClients')->name('static_cc');
Route::get('/find-dealer', 'Frontend\BuyController@findDealer');

Route::get('/motorstudio_moscow', 'Frontend\MotorstudioController@getMotorstudioJSON')->name('static_motorstudio');
Route::get('/motorstudio_moscow_en', 'Frontend\MotorstudioController@getMotorstudioEnJSON');

Route::get('/hms', function () { return redirect('motorstudio_moscow'); });

// Route::get('test', function() {
//     return response(\App\Helpers\CityHelper::getCitiesList());
// });
// Route::get('test1/{id}', function($id) {
//     return response(\App\Helpers\CityHelper::getCitiesDealers($id));
// });
// Route::get('test2', function() {
//     return response(\App\Helpers\CityHelper::getCitiesDealersAll());
// });
// Route::get('test3', function() {
//     return \App\Helpers\PlaceholderHelper::getPlaceholderData(1, 30, 30);
// });

Route::get('admin/login', 'Auth\LoginController@showLoginForm')->name('adminlogin');
Route::post('admin/login', 'Auth\LoginController@login')->name('adminloginpost');
Route::post('admin/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('markup/static/{name}', ['as' => 'markup', 'uses' => 'MarkupController@getView']);

// Потом роуты для ajax-запросов
Route::group(['prefix' => 'ajax', 'namespace' => 'Ajax'], function () {
    // Тут будут роуты для ajax-запросов

    Route::get('/getServiceJSON', 'ServiceCalculatorController@getServiceJSON');

    Route::get('/calculator', 'ServiceCalculatorController@getServiceCost');


    Route::get('/new/getServiceJSON', 'NewServiceCalculatorController@getServiceJSON');

    Route::get('/new/calculator', 'NewServiceCalculatorController@getServiceCost');

    Route::get('/new/getFileAjax', 'NewServiceCalculatorController@getFileAjax');
});



// Роуты для api
Route::group(['prefix' => 'requestapi'], function () {
    // Тут будут роуты для api-запросов
});


// А дальше начинаем делить роуты по группам

// Тачки
/* Route::group(function () {
    // Тут будут роуты для тачек
});*/

// Сервис
Route::group(['prefix' => 'service', 'as' => 'service.'], function () {
    // Тут будут роуты для сервиса

    //Сервис
    Route::get('/maintenance', function () {
        return view('frontend.service.index', ['header' => true, 'highlight' => false, 'footer' => true]);
	})->name('static_dealerapi_service_maintenance');

    //Сервис для дилеров
    // Route::get('/maintenance-dealer', function () {
    //     return view('frontend.service.index-dealer', ['header' => true, 'highlight' => false, 'footer' => true]);
    // })->name('static_service_maintenance');

    //Гарантия
    // Route::get('/warranty', function () {
    //     return view('frontend.service.warranty', ['header' => true, 'highlight' => false, 'footer' => true]);
    // });
    Route::get('/warranty', ['as' => 'warranty', 'uses' => 'Frontend\ServiceController@warrantyCars']);

    //Документация
    Route::get('/manuals', ['as' => 'manuals', 'uses' => 'ServiceController@manuals']);

    //Кузовной ремонт
    Route::get('/bodyworks', function () {
        return view('frontend.service.bodyworks', ['header' => true, 'highlight' => false, 'footer' => true]);
    })->name('static_dealerapi_bodyworks');


    //Оригинальные запчасти
    Route::get('/parts', function () {
        return view('frontend.service.parts', ['header' => true, 'highlight' => false, 'footer' => true]);
    })->name('static_dealerapi_parts');

    //Помощь на дороге
    Route::get('/assistance', function () {
        return view('frontend.service.assistance', ['header' => true, 'highlight' => false, 'footer' => true]);
    })->name('static_dealerapi_assistance');

    //Лучшее для своих
    Route::get('/best', function () {
        return view('frontend.service.best', ['header' => true, 'highlight' => false, 'footer' => true]);
    })->name('static_dealerapi_best');
});

//Моторные масла
Route::get('/shell', 'ServiceController@shell')->name('static_dealerapi_shell');

// Бренд

// Формы / покупка

// Новости
Route::group(['prefix' => 'news', 'as' => 'news.'], function () {
    // Тут будут роуты для новостей
    Route::get('/', ['as' => 'index', 'uses' => 'NewsController@index']);
    Route::get('/{code}', ['as' => 'detail', 'uses' => 'NewsController@detail']);
});

// Спецпредложения
Route::group(['prefix' => 'offers', 'as' => 'offers.'], function () {
    // Тут будут роуты для спецпредложений
    Route::get('/', ['as' => 'index', 'uses' => 'SpecialOfferController@index']);
    Route::get('/{code}', ['as' => 'detail', 'uses' => 'SpecialOfferController@detail']);
});

// Статика


// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Тестовый роут
Route::get('/layout-admin-test', function () {
    return view('admin-test');
})->name('admintest');

//Index
// Route::get('/', function () {
//     return view('index', ['header' => true, 'highlight' => true, 'footer' => true]);
// });
Route::get('/', 'HomeController@index');

//Index dealer
// Route::get('/index-dealer', 'HomeController@indexDealer');


Route::get('/special', function () {
    return view('pages.special.special', ['header' => true, 'highlight' => false, 'footer' => true]);
});

Route::get('/promo1', function () {
    return view('pages.promo.promo1', ['header' => true, 'highlight' => false, 'footer' => true]);
});

Route::get('/promo2', function () {
    return view('pages.promo.promo2', ['header' => true, 'highlight' => false, 'footer' => true]);
});

//Роут для Конфигуратора
Route::get('/configurator', 'SpaConfiguratorController@index')->name('dealerapi_configurator_main');

Route::get('/configurator/favourites', 'SpaConfiguratorController@index')->name('dealerapi_configurator_favourites');

Route::get('/configurator/car/{id?}/{component?}', 'SpaConfiguratorController@index')->where('id', '[0-9]+', 'component', 'exists: modification, complectation, packets, design, summary')->name('dealerapi_configurator');

//Роут для Конфигуратора дилерам
// Route::get('/configurator-dealer/{any?}', 'SpaConfiguratorController@configuratorDealer')->where('any', '.*');

//Страница записи на сервис
/*
Route::get('/service-request', function () {
    return view('frontend.signUpService.index', ['header' => true, 'highlight' => false, 'footer' => true]);

});
*/

//Страница записи на сервис ДИЛЕР
Route::get('/service-request', function () {
    return view('frontend.signUpService.dealer', ['header' => true, 'highlight' => false, 'footer' => true]);
});

//Страница записи на сервис ДИЛЕР
// Route::get('/service-request/dealer', function () {
//     return view('frontend.signUpService.dealer', ['header' => true, 'highlight' => false, 'footer' => true]);
// });


//Страница записи на тест-драйв
/*
Route::get('/test-drive', function () {
    return view('frontend.signUpTestDrive.index', ['header' => true, 'highlight' => false, 'footer' => true, 'code' => 'i30N']);
})->name('dealerapi_testdrive');

//Страница записи на тест-драйв Creta Rock Edition
Route::get('/test-drive-rock', function () {
    return view('frontend.promo.creta-rock-td', ['header' => true, 'highlight' => false, 'footer' => true, 'code' => 'Creta']);
});
*/

//Страница записи на тест-драйв ДИЛЕР

Route::get('/test-drive', function () {
    return view('frontend.signUpTestDrive.dealer', ['header' => true, 'highlight' => false, 'footer' => true, 'code' => 'i30N']);
});

Route::get('/test-drive/{carCode}', function ($carCode) {
    return view('frontend.signUpTestDrive.dealer', ['header' => true, 'highlight' => false, 'footer' => true, 'code' => $carCode]);
});

// ЭСК
Route::get('/service-book', function () {
    return view('frontend.service.book', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_dealerapi_book');

//Страница поиска дилера
/*
Route::get('/find-dealer', function () {
    return view('frontend.findDealer.index', ['header' => true, 'highlight' => false, 'footer' => true]);
});
*/



//Contact Us
Route::get('/ContactUs', 'Frontend\BuyController@contactUs')->name('dealerapi_fos');

//Contact Us dealer
// Route::get('/ContactUs-dealer', 'Frontend\BuyController@contactUsDealer');


Route::group(['prefix' => 'CareersMoscow'], function () {
    //Вакансии
    Route::get('/', 'VacancyController@index');
    Route::get('/{id}', 'VacancyController@detail');
});

/* ----------------- CARS ------------- */

//SantaFe
Route::get('/NewSantaFe', 'Frontend\CarController@NewSantaFe')->name('static_dealerapi_car25');

Route::get('/NewSantaFe/gallery', function () {
    return view('frontend.cars.santaFe.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery25');

//Elantra
Route::get('/NewElantra', 'Frontend\CarController@Elantra')->name('static_dealerapi_car27');

Route::get('/NewElantra/gallery', function () {
    return view('frontend.cars.elantra.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery27');

//Tucson
Route::get('/NewTucson', 'Frontend\CarController@Tucson')->name('static_dealerapi_car26');

Route::get('/NewTucson/gallery', function () {
    return view('frontend.cars.tucson.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery26');

//i30n 2019
Route::get('/i30N', 'Frontend\CarController@i30n')->name('static_dealerapi_car28');

Route::get('/i30N/gallery', function () {
    return view('frontend.cars.i30n.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery28');

Route::get('i30n', function () {
	return redirect('i30N');
});


Route::get('/offer/{code}', function ($code) {
	return redirect('/promo/' . $code);
});


//Solaris
Route::get('/Solaris', 'Frontend\CarController@Solaris')->name('static_dealerapi_car23');

Route::get('/Solaris/gallery', function () {
    return view('frontend.cars.solaris.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery23');

//Solaris 2020
Route::get('/NewSolaris', 'Frontend\CarController@Solaris2020')->name('static_dealerapi_car30');

Route::get('/NewSolaris/gallery', function () {
    return view('frontend.cars.solaris2020.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery30');

//Sonata
Route::get('/Sonata', function () { return redirect('NewSonata', 301); });

//New Sonata
Route::get('/NewSonata', 'Frontend\CarController@NewSonata')->name('static_dealerapi_car29');

Route::get('/NewSonata/gallery', function () {
    return view('frontend.cars.sonataNew.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery29');

//Creta
Route::get('/Creta', 'Frontend\CarController@Creta')->name('static_dealerapi_car22');

Route::get('/Creta/gallery', function () {
    return view('frontend.cars.creta.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery22');

//H-1
Route::get('/H-1', 'Frontend\CarController@H1')->name('static_dealerapi_car16');

Route::get('/H-1/gallery', function () {
    return view('frontend.cars.h1.gallery', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_gallery16');


/* ----------------- CARS END ------------- */


//Product Line 2
Route::get('/pl2', function () {
    return view('frontend.service.pl2', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_pl2');

//i30n
Route::get('/i30N_old', function () {
    return view('frontend.pages.cars.i30n', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_i30n');

//veloster-n
Route::get('/veloster-n', function () {
    return view('frontend.pages.cars.veloster_n', ['header' => true, 'highlight' => false, 'footer' => true]);
});

//IONIQ
Route::get('/ioniq', function () {
    return view('frontend.pages.cars.ioniq', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_ioniq');

//NEXO
Route::get('/nexo', function () {
    return view('frontend.pages.cars.nexo', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_nexo');

//KONA
Route::get('/kona', function () {
    return view('frontend.pages.cars.kona', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_kona');

//Brand-collection
// Route::get('/brand-collection', function () {
//     return view('frontend.brandCollection.index', ['header' => true, 'highlight' => false, 'footer' => true]);
// });

Route::group(['prefix' => 'brand-collection', 'as' => 'brandcollection.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'Frontend\BrandcollectionController@index']);
    Route::get('/all', 'Frontend\BrandcollectionController@all');
    Route::get('/where-buy', 'Frontend\BrandcollectionController@map');
    Route::get('/{code}', ['as' => 'detail', 'uses' => 'Frontend\BrandcollectionController@category']);
});
//Trade-In
Route::get('/special-offer', function () {
    return view('frontend.pages.trade-in', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('dealerapi_specoffer');

// Route::get('/brand-collection', 'Frontend\BrandcollectionController@index');

// Route::get('/brand-collection/{code}', 'Frontend\BrandcollectionController@category');

// Route::get('/brand-collection/product', function () {
//     return view('frontend.brandCollection.product', ['header' => true, 'highlight' => false, 'footer' => true]);
// });
//NEXO
/*
Route::get('/nexo', function () {
    return view('frontend.pages.cars.nexo', ['header' => true, 'highlight' => false, 'footer' => true]);
});
*/

//Sitemap
Route::get('/sitemap', function () {
    return view('frontend.pages.sitemap', ['header' => true, 'highlight' => false, 'footer' => true]);
});

//Error page
Route::get('/warning', function () {
    return view('frontend.pages.warning', ['header' => true, 'highlight' => false, 'footer' => true]);
});

//Search page
Route::get('/search', 'SearchController@searchAsPage');
Route::get('/searchjson', 'SearchController@searchAsJson');

//History page
Route::get('/history', function () {
    return view('frontend.brand.history.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_history');

//History page
Route::get('/future', function () {
    return view('frontend.brand.future.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_future');

//Philosophy page
Route::get('/philosophy', function () {
    return view('frontend.brand.philosophy.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_philosophy');

//Manufacturing page
Route::get('/manufacturing', function () {
    return view('frontend.brand.manufacturing.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_manufacturing');

//Mobility page
Route::get('/perfection-mobility', function () {
    return view('frontend.brand.p-mobility.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_mobility');

//Motorsport page
Route::get('/motorsport', function () {
    return view('frontend.brand.motorsport.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_motorsport');

//Services page
Route::get('/customer-services', function () {
    return view('frontend.brand.services.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->name('static_service');

//Start page
Route::get('/start', 'Frontend\PagesController@start')->name('dealerapi_start');

Route::get('/start/{carCode}', 'Frontend\PagesController@start')->name('dealerapi_start');

Route::get('/XMMP-careers', function() {
    return view('frontend.xmmp.careers', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Become a dealer
Route::get('/become-a-dealer', function() {
    return view('frontend.becomeDealer.index', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Corporate clients
Route::get('/corporate-clients', function() {
    return view('frontend.corporateClients.index', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Legal
Route::get('/Legal', function() {
    return view('frontend.pages.legal', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Privacy
Route::get('/Privacy', function() {
    return view('frontend.pages.privacy', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// TermsConditions
Route::get('/TermsConditions', function() {
    return view('frontend.pages.terms-conditions', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Contractors
Route::get('/contractors', function() {
    return view('frontend.pages.contractors', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// Models
Route::get('/models', function() {
    return view('frontend.cars.models', ['header' => true, 'highlight' => false, 'footer' => true]);
});

// DealerCars
// Route::get('/dealercars/{any?}', function() {
//     return view('frontend.dealer.cars.index', ['header' => true, 'highlight' => false, 'footer' => true]);
// })->where('any', '.*');

// DealerCars Static
// Route::get('/dealercars-static', function() {
//     return view('frontend.dealer.cars.index-static', ['header' => true, 'highlight' => false, 'footer' => true]);
// });

// Dealer About
// Route::get('/about', function() {
//     return view('frontend.dealer.about.index', ['header' => true, 'highlight' => false, 'footer' => true]);
// });

// Dealer About Static
// Route::get('/about-static', function() {
//     return view('frontend.dealer.about.index-static', ['header' => true, 'highlight' => false, 'footer' => true]);
// });

// Trade in
// Route::get('/tradein/{any?}', function() {
//     return view('frontend.dealer.tradein.index', ['header' => true, 'highlight' => false, 'footer' => true]);
// })->where('any', '.*');

// Старые тачки

Route::get('/Equus', function () { return redirect('/'); });
Route::get('/i40', function () { return redirect('/'); });
Route::get('/i40-Wagon', function () { return redirect('/'); });
Route::get('/Elantra', function () { return redirect('/'); });
Route::get('/i30', function () { return redirect('/'); });
Route::get('/i30-3dr', function () { return redirect('/'); });
Route::get('/i30-Wagon', function () { return redirect('/'); });

Route::get('/Solaris-5dr', function () { return redirect('/'); });
Route::get('/GrandSantaFe', function () { return redirect('/'); });
Route::get('/SantaFe', function () { return redirect('/'); });
Route::get('/Tucson', function () { return redirect('/'); });

// DealerCars
Route::get('/dealercars/{any?}', function() {
    return view('frontend.dealerCars.index', ['header' => true, 'highlight' => false, 'footer' => true]);
})->where('any', '.*');
