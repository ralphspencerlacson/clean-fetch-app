<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingStatus extends Model
{
    protected $table = 'booking_statuses';

    protected $fillable = ['name', 'sort_order'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}

