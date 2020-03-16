<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ConfiguratorApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCarList()
    {
        $response = $this->get('/configurator');

        $response->assertStatus(200);
    }
}
