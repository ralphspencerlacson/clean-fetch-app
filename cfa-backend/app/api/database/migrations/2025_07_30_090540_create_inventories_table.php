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
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('inventoryable_id');
            $table->string('inventoryable_type');

            $table->integer('quantity')->default(0);
            $table->integer('items_per_order')->default(1);
            $table->integer('reorder_point')->default(0)->nullable();
            $table->string('location')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
