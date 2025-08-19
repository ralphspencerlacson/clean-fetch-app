<?php

namespace App\Services\Tag;

use App\Models\Tag\Tag;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class TagService
{
    public function getAllTags(): Collection
    {
        return Tag::all();
    }

    public function createTag(array $data): Tag
    {
        $validator = Validator::make($data, [
            'code' => [
                'required',
                'string',
                'max:255',
                'unique:tags,code',
                'regex:/^[A-Z0-9_]+$/',
            ],
            'name' => 'required|string|max:255|unique:tags,name',
            'description' => 'required|string|max:1000',
            'category' => 'nullable|string|max:100|in:service,product,general',
        ], [
            'code.regex' => 'Tag code must contain only uppercase letters, numbers, and underscores.',
            'category.in' => 'Category must be one of: service, product, general.',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return Tag::create($validator->validated());
    }

    public function updateTag(int $id, array $data): Tag
    {
        $tag = Tag::findOrFail($id);

        $validator = Validator::make($data, [
            'code' => [
                'required',
                'string',
                'max:255',
                'unique:tags,code,' . $id,
                'regex:/^[A-Z0-9_]+$/',
            ],
            'name' => 'required|string|max:255|unique:tags,name,' . $id,
            'description' => 'required|string|max:1000',
            'category' => 'nullable|string|max:100|in:service,product,general',
        ], [
            'code.regex' => 'Tag code must contain only uppercase letters, numbers, and underscores.',
            'category.in' => 'Category must be one of: service, product, general.',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $tag->update($validator->validated());

        return $tag->fresh();
    }

    public function destroyTag(int $id): Tag
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();

        return $tag;
    }
}