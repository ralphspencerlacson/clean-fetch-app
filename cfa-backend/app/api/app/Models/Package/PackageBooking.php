<?php

namespace App\Models\Package;

use App\Models\Booking\Booking;
use Illuminate\Database\Eloquent\Model;

class PackageBooking extends Model
{
    protected $table = 'package_bookings';

    protected $fillable = [
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
