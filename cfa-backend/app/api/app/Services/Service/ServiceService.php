<?php

namespace App\Services\Service;

use App\Models\Service\Service;
use Illuminate\Database\Eloquent\Collection;

class ServiceService
{
    public function getAllServices(): Collection
    {
        return Service::all();
    }

    public function createService(array $data): Service
    {
        return Service::create($data);
    }
}