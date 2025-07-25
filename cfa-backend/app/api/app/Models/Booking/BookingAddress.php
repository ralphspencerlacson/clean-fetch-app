<?php

namespace App\Models\Booking;

use Illuminate\Database\Eloquent\Model;

class BookingAddress extends Model
{
    protected $table = 'booking_addresses';

    protected $fillable = [
        'label',
        'address_line',
        'city',
        'province',
        'zip',
        'latitude',
        'longitude'
    ];

    public function booking()
    {
        return $this->hasOne(Booking::class, 'booking_address_id');
    }
}

