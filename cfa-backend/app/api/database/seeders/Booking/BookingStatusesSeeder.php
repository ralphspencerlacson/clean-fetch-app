<?php

namespace Database\Seeders\Booking;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookingStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('booking_statuses')->insert([
            ['name' => 'Pending',               'sort_order' => 1],
            ['name' => 'Picked Up',             'sort_order' => 2],
            ['name' => 'In Cleaning',           'sort_order' => 3],
            ['name' => 'Out for Delivery',      'sort_order' => 4],
            ['name' => 'Completed',             'sort_order' => 5],
            ['name' => 'Cancelled',             'sort_order' => 6],
        ]);
    }
}
