<?php

namespace Database\Seeders;

use App\Models\User\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'password' => Hash::make('password123'),
            'email' => 'admin@example.com',
            'contact_number' => '+1234567890',
            'user_type' => 1, // Admin
            'is_active' => true,
        ]);

        User::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'password' => Hash::make('password123'),
            'contact_number' => '+1234567891',
            'email' => 'john@example.com',
            'user_type' => 2, // Staff
            'is_active' => true,
        ]);

        User::create([
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'password' => Hash::make('password123'),
            'email' => 'jane@example.com',
            'contact_number' => '+1234567892',
            'user_type' => 0, // User
            'is_active' => true,
        ]);
    }
}
