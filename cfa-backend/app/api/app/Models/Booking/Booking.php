<?php

namespace App\Models\Booking;

use App\Models\PackageBooking;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'bookings';

    protected $fillable = [
        'booking_reference',
        'user_id',
        'schedule_id',
        'address_id',
        'booking_status_id',
        'quantity',
        'amount',
        'remarks',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function packages()
    {
        return $this->hasMany(PackageBooking::class);
    }

    public function schedule()
    {
        return $this->belongsTo(BookingSchedule::class);
    }

    public function address()
    {
        return $this->belongsTo(BookingAddress::class);
    }

    public function status()
    {
        return $this->belongsTo(BookingStatus::class, 'booking_status_id', 'id');
    }
}
