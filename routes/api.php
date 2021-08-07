<?php

use App\Http\Controllers\Api\Categories;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('categories', CategoriesController::class);
Route::apiResource('products', ProductController::class);

Route::get('categories/{id}/products', [CategoriesController::class, 'products']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
