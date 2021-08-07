<?php

use App\Http\Controllers\Admin\ReportsController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});
