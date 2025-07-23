<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PackageBooking extends Model
{
    protected $table = 'package_bookings';

    protected $fillables = [
        'package_id',
        'booking_id',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}
