<?php

namespace App\Services\Product;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    public function getAllProducts(): Collection
    {
        return Product::all();
    }

    public function createProduct(array $data) : Product
    {
        return Product::create($data);
    }
}