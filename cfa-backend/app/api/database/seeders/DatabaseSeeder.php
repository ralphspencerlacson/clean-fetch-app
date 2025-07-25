<?php

namespace Database\Seeders;

use App\Models\User\User;
use Database\Seeders\Booking\BookingStatusesSeeder;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'),
            'contact_number' => '+1234567890',
            'user_type' => 'admin',
            'is_active' => true,
        ]);

        User::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'password' => Hash::make('password123'),
            'contact_number' => '+1234567891',
            'user_type' => 'customer',
            'is_active' => true,
        ]);

        User::create([
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'email' => 'jane@example.com',
            'password' => Hash::make('password123'),
            'contact_number' => '+1234567892',
            'user_type' => 'staff',
            'is_active' => true,
        ]);

        $this->call([
            BookingStatusesSeeder::class,
        ]);
    }
}
