<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

use App\Car;

class BrochureHelper {
	public static function getBrochure($id_text) {
		$result = false;

        $cars = Car::with('manuals')->where('visible', 1)->has('manuals')->orderBy('name')->get();

    	foreach($cars as $car)
    	{
            if($car->id_text == $id_text)
            {
                foreach($car->manuals as $manual)
                {
                    if($manual->name == 'Брошюра')
                    {
                        $result = $manual->getFileUrl();
                        break(2);
                    }
                }
            }
    	}

    	return $result;
	}
}
