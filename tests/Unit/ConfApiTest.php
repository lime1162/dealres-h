<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ConfApiTest extends TestCase
{
    public function testMain() {
        $url = 'https://api.cofigurator.hyundai.ru/carList';
        $r = $this->get($url);

        $r->assertStatus(200);
    }
}
