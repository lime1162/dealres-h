<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CsvTest extends TestCase
{
	public function testVin() {
		$item = \App\Placeholder::where('code', '=', 'vin')->first();
		if(!$item) {
			$this->fail('item vin not found');
		}

		//$root_path = dirname(__FILE__) . '/../../public';
		$root_path = dirname(__FILE__) . '/../../storage/app/public/placeholders/';
		$h = fopen($root_path . $item->image, 'r');
		if($h === false) {
			$this->fail('file not exists');
		}

		$row = 1;
		while (($data = fgetcsv($h, 1000, ";")) !== FALSE) {
			if(count($data) != 1) {
				$this->fail('incorrect row ' . $row);
			}

			if($row == 1) {
				if($data[0] != 'VIN') {
					$this->fail('incorrect title row');
				}
			}
			else if(strlen($data[0]) != 17) {
				$this->fail('incorrect row ' . $row);
			}

			$row++;
		}

		fclose($h);

		$this->assertTrue(true);
	}

	public function testService() {
		$item = \App\Placeholder::where('code', '=', 'service')->first();
		if(!$item) {
			$this->fail('item service not found');
		}

		$root_path = dirname(__FILE__) . '/../../storage/app/public/placeholders/';

//		$root_path = '../..';

		$h = fopen($root_path . $item->image, 'r');
		if($h === false) {
			$this->fail('file not exists');
		}

		$row = 1;
		while (($data = fgetcsv($h, 1000, ";")) !== FALSE) {
			if(count($data) != 30) {
				$this->fail('incorrect row ' . $row);
			}

			if($row > 2) {
				if(substr($data[0], 0, 5) != 'C40AF' || strlen($data[0]) != 10)
					$this->fail('incorrect sap-code, row' . $row);

				if(!in_array($data[5], ['Бензиновый', 'Дизельный']))
					$this->fail('incorrect engine type, row' . $row);

				for($i = 6; $i < count($data); $i++) {
					if($data[$i] < 0) {
						$this->fail('incorrect row' . $row);
					}
				}
			}

			$row++;
		}

		fclose($h);

		$this->assertTrue(true);
	}
}
