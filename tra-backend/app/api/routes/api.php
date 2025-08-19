<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Tag\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    /**
     * @api {get} /v1 Get API Version
     */
    Route::prefix('v1')->group(function () {
        /**
         * @api Tag Management
         */
        Route::prefix('tags')->group(function () {
            Route::get('/', [TagController::class, 'index']);
            Route::post('/', [TagController::class, 'store']);
            Route::patch('/{id}', [TagController::class, 'update']);
            Route::delete('/{id}', [TagController::class, 'destroy']);
        });
    });
});