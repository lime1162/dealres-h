<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HttpTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }


    public function testMainPage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testServiceMaintenance()
    {
        $response = $this->get('/service/maintenance');

        $response->assertStatus(200);
    }

/*
    public function testServiceBodywork()
    {
        $response = $this->get('/service/bodywork');

        $response->assertStatus(200);
    }
*/

    public function testServiceWarranty()
    {
        $response = $this->get('/service/warranty');

        $response->assertStatus(200);
    }


    public function testServiceManuals()
    {
        $response = $this->get('/service/manuals');

        $response->assertStatus(200);
    }


    public function testServiceBook()
    {
        $response = $this->get('/service-book');

        $response->assertStatus(200);
    }

/*
    public function testServiceShell()
    {
        $response = $this->get('/service/shell');

        $response->assertStatus(200);
    }
*/

    public function testServiceBest()
    {
        $response = $this->get('/service/best');

        $response->assertStatus(200);
    }

    public function testServiceHelp()
    {
        $response = $this->get('/service/assistance');

        $response->assertStatus(200);
    }

    public function testServiceForm()
    {
        $response = $this->get('/service-form');

        $response->assertStatus(200);
    }

    public function testTDForm()
    {
        $response = $this->get('/test-drive-form');

        $response->assertStatus(200);
    }


}
