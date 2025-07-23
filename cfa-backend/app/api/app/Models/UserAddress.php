<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    protected $table = 'user_addresses';

    protected $fillable = [
        'label',
        'address_line',
        'city',
        'province',
        'zip',
        'latitude',
        'longitude'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
