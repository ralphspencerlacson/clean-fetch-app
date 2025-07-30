<?php

namespace App\Services\Product;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Validator;

class ProductService
{
    public function getAllProducts(): Collection
    {
        return Product::all();
    }

    public function createProduct(array $data) : Product
    {
        // Validate
        $validator = Validator::make($data, [
            'code' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'remarks' => 'nullable|string',
            'tag' => 'required|exists:tags,id',
            'status' => 'required|boolean',
            'rackRate' => 'required|numeric|min:0',
            'date' => 'required|array|size:2',
            'date.*' => 'date_format:Y-m-d',
            'date.0' => 'required|date',
            'date.1' => 'required|date|after_or_equal:date.0',
        ]);

        if($validator->fails()) {
            throw new \InvalidArgumentException($validator->errors()->first());
        }

        $validated = $validator->validated();

        // Map
        $validated['start_date'] = $validated['date'][0];
        $validated['end_date'] = $validated['date'][1];
        $validated['tag_id'] = $validated['tag'];

        return Product::create($validated);
    }
}