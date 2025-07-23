<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('first_name')->after('id');
            $table->string('last_name')->after('first_name');
            $table->string('contact_number')->nullable()->after('last_name');
            $table->enum('user_type', ['admin', 'customer', 'staff'])->default('customer')->after('contact_number');
            $table->boolean('is_active')->default(true)->after('user_type');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name');
            $table->dropColumn(['first_name', 'last_name', 'contact_number', 'user_type', 'is_active']);
        });
    }
};