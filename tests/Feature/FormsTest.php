<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    // public function testExample()
    // {
    //     $this->assertTrue(true);
    // }

    public function testApiSendTestdrive() {
        $dealer = \App\Dealer::first();
        $response = $this->call('GET', '/api/send/testdrive', [
            'dealer' => $dealer->code ?? 'test',
            'salutation' => 'Mr.',
            'name' => 'test',
            'sirname' => 'test',
            'email' => 'test@test.test',
            'phone' => 'test',
            'modelCode' => 'test',
        ]);

//        var_dump($dealer->code); exit;

        $response
            ->assertStatus(200)
            ->assertExactJson([
                'status' => 1,
            ]);
    }

    public function testApiSendServiceRequest() {
        $dealer = \App\Dealer::first();
        $response = $this->call('GET', '/api/send/servicerequest', [
            'dealer' => $dealer->code ?? 'test',
            'salutation' => 'test',
            'name' => 'test',
            'sirname' => 'test',
            'email' => 'test@test.test',
            'phone' => 'test',
            'modelCode' => 'test',
        ]);

        $response
            ->assertStatus(200)
            ->assertExactJson([
                'status' => 1,
            ]);
    }

    public function testSendContactus() {
        $params = [
            'name' => 'test',
            'surname' => 'test',
            'middleName' => 'test',
            'city' => 'test',
            'cityDealer' => 'test',
            'dealer' => 'test',
            'phone' => 'test',
            'email' => 'test@test.test',
            'theme' => 'test',
            'msg' => 'test',
            'model' => 'test',
            'status' => '',
            'wish' => '',
            'human' => 'Y',
        ];
        $strToHash = implode('|', $params);
        $params['hash'] = $strToHash;
        $response = $this->post('/api/send/contactus', $params,
        [
            'HTTP_X-Requested-With' => 'XMLHttpRequest'
        ]);

        $response
            ->assertSeeText('Y');
    }

    public function testApiSendMotorstudioRequest() {
        $response = $this->call('GET', '/api/send/motorstudio_request', [
            'name' => 'test',
            'surname' => 'test',
            'email' => 'test@test.test',
            'tel' => '1',
            'age' => '1',
            'event_id' => '1',
        ]);

        $response
            ->assertStatus(200)
            ->assertExactJson([
                'status' => 1,
            ]);
    }

    public function testApiSendJobseeker() {
        $response = $this->call('GET', '/api/send/jobseeker', [
            'name' => 'test',
            'surname' => 'test',
            'patronymic' => 'test',
            'email' => 'test@test.test',
            'tel' => '1',
            'institute' => 'test',
            'otherinstitute' => 'test',
            'specialty' => 'test',
            'level' => 'test',
            'stage' => 'test',
            'lang' => 'test',
            'file' => UploadedFile::fake()->image('avatar.jpg'),
        ]);

        $response
            ->assertStatus(200)
            ->assertExactJson([
                'status' => 1,
            ]);
    }
}
