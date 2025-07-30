<?php

namespace App\Services\Service;

use App\Models\Service\Service;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Validator;

class ServiceService
{
    public function getAllServices(): Collection
    {
        return Service::all();
    }

    public function createService(array $data): Service
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

        return Service::create($validated);
    }
}