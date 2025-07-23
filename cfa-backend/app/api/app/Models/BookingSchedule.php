<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingSchedule extends Model
{
    protected $table = 'booking_schedules';

    protected $fillable = [
        'start_time',
        'end_time',
        'location',
        'description',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
