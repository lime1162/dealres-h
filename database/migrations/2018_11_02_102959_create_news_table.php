<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('date');

            $table->string('title', 255);
            $table->string('url', 255);
            $table->text('text');

            $table->string('img', 255);

            $table->text('comment');

            $table->string('meta_title', 255);
            $table->string('meta_keywords', 255);
            $table->string('meta_description', 255);

            $table->boolean('visible');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
