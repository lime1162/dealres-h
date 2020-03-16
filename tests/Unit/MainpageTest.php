<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MainpageTest extends TestCase
{
    // /**
    //  * A basic test example.
    //  *
    //  * @return void
    //  */
    // public function testExample()
    // {
    //     $this->assertTrue(true);
    // }

    public function testMainpageNews() {
        $items = \App\News::where('visible', 1)->orderBy('date', 'desc')->limit(12)->get();
        $result = true;
        foreach($items as $item) {
            if($item->getImgPathAttribute() == '' || empty($item->date) || empty($item->title)) {
                $result = false;
                break;
            }
        }

        $this->assertTrue($result);
    }

    public function testMainpageCars() {
        $items = \App\Car::where('visible', 1)->where('is_old_model', 0)->get();
        $result = true;
        foreach($items as $item) {
            if(empty($item->name_menu_rus)
            || empty($item->name_menu_en)
            || empty($item->siebel_code)
            || $item->menu_row < 1
            || $item->menu_row > 4
            || $item->menu_column < 1
            || empty($item->id_text)
            || empty($item->price_min)
            || $item->getImageUrl() == ''
            ) {
                $result = false;
            }
        }

        $this->assertTrue($result);
    }

    public function testNewsFull() {
        $items = \App\News::where('visible', 1)->orderBy('date', 'desc')->get();
        $result = true;
        foreach($items as $item) {
            if($item->getImgPathAttribute() == '' || empty($item->date) || empty($item->title) || empty($item->url) || empty($item->text)) {
                $result = false;
            }
        }

        $this->assertTrue($result);
    }

    public function testOffersFull() {
        $items = \App\SpecialOffer::where('is_active', 1)->orderBy('sort')->get();
        $result = true;
        foreach($items as $item) {
            if(strpos($item->url, '/') !== false) continue;
            if($item->getImagePreviewUrl() == ''
//            || $item->getImageWorldUrl() == ''
            || empty($item->name)
            || empty($item->label_id)
            || empty($item->url)
            || empty($item->text)
            ) {
/*
                var_dump($item->name);
                var_dump($item->url);
                var_dump($item->getImagePreviewUrl());
                var_dump($item->getImageWorldUrl());
                exit;
*/
                $result = false;
            }
        }

        $this->assertTrue($result);
    }

    public function testCarWarrantiesFull() {
        $items = \App\WarrantyCar::all();
        $result = true;
        foreach($items as $item) {
            if(/* empty($item->period) || empty($item->mileage) ||  */empty($item->name) || empty($item->description)) {
                $result = false;
            }
        }

        $this->assertTrue($result);
    }

    public function testBannersFull() {
        $items = \App\Banner::where('visible', 1)->get();
        $result = true;
        if($items->count() == 0) {
            $result = false;
        }
        else {
            foreach($items as $item) {
                if(empty($item->link)
                    || empty($item->image)
                    || ($item->blue_show == 1 && ( strlen($item->blue_row1 . $item->blue_row2 . $item->blue_row3) == 0))
                ) {
                    $result = false;
                }
            }
        }

        $this->assertTrue($result);
    }

    public function testRegionsFull() {
        $items = \App\CitiesRegion::get();
        $result = true;
        if($items->count() == 0) {
            $result = false;
        }
/*
        else {
            foreach($items as $item) {
                if(empty($item->longitude) || empty($item->latitude)) {
                    $result = false;
                }
            }
        }
*/

        $this->assertTrue($result);
    }

    public function testDealersFull() {
        $items = \App\Dealer::where('visible', 1)->get();
        $result = true;
        if($items->count() == 0) {
            $result = false;
        }
        else {
            foreach($items as $item) {
                if(empty($item->name) || /* empty($item->rc_code) || */ empty($item->longitude) || empty($item->latitude) || empty($item->address) || empty($item->phone)) {
                    $result = $item->id;
                }
            }
        }

        $this->assertTrue($result, 'item ' . $result);
    }

    public function testBrandcollectionProducts() {
        $items = \App\BrandcollectionProduct::where('is_active', 1)->get();
        $result = true;
        foreach($items as $item) {
            if(empty($item->category_id) || empty($item->tag_id) || empty($item->name) || empty($item->article) || empty($item->price) || empty($item->image)) {
                $result = $item->id;
            }
        }

        $this->assertTrue($result, 'item ' . $result);
    }

    public function testMotorstudioEvents() {
        $items = \App\MotorstudioEvent::all();
        $result = true;
        foreach($items as $item) {
            if(empty($item->date_start) || empty($item->date_end) || empty($item->name) || empty($item->name_en) || empty($item->calendar_name) || empty($item->calendar_name_en) || empty($item->preview_picture)) {
                $result = $item->id;
            }
        }

        $this->assertTrue($result, 'item ' . $result);
    }
}
