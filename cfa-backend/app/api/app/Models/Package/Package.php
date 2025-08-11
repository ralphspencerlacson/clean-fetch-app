<?php

namespace App\Models\Package;

use App\Models\Booking\Booking;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'code',
        'name',
        'description',
        'price',
    ];

    public function bookings()
    {
        return $this->belongsToMany(Booking::class, 'package_bookings');
    }
    
}
