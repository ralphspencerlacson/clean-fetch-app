<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('booking_schedules', function (Blueprint $table) {
            $table->id();
            $table->date('pickup_date');
            $table->time('pickup_time');
            $table->date('dropoff_date')->nullable();
            $table->time('dropoff_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_schedules');
    }
};
