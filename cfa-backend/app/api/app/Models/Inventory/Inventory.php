<?php

namespace App\Models\Inventory;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $fillable = [
        'inventoryable_id',
        'inventoryable_type',
        'quantity',
        'items_per_order',
        'reorder_point',
        'location',
        'notes'
    ];

    public function inventoryable()
    {
        return $this->morphTo();
    }
}
