<?php

namespace App\Models;

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
