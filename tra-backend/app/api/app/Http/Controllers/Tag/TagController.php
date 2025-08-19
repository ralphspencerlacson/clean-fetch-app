<?php

namespace App\Http\Controllers\Tag;

use App\Http\Controllers\Controller;
use App\Services\Tag\TagService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TagController extends Controller
{
    protected $tagService;

    public function __construct(TagService $tagService)
    {
        $this->tagService = $tagService;
    }

    public function index(): JsonResponse
    {
        try {
            $tags = $this->tagService->getAllTags();

            return response()->json([
                'success' => true,
                'data' => $tags,
                'message' => 'Tags retrieved successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve tags',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $tag = $this->tagService->createTag($request->all());

            return response()->json([
                'success' => true,
                'data' => $tag,
                'message' => 'Tag created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create tag',
                'error' => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        try {
            $tag = $this->tagService->updateTag($id, $request->all());

            return response()->json([
                'success' => true,
                'data' => $tag,
                'message' => 'Tag updated successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update tag',
                'error' => $e->getMessage()
            ], 400);
        }
    }

    public function destroy(int $id): JsonResponse
    {
        try {
            $tag = $this->tagService->destroyTag($id);

            return response()->json([
                'success' => true,
                'message' => 'Tag deleted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete tag',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
