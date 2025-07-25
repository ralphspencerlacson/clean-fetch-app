<?php

namespace App\Models\Service;

use App\Models\Tag\Tag;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'code',
        'name',
        'description',
        'remarks',
        'tag_id',
        'status',
        'start_date',
        'end_date',
        'item',
        'rack_rate',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'rack_rate' => 'decimal:2',
        'status' => 'integer',
        'item' => 'integer',
        'tag_id' => 'integer',
    ];

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
