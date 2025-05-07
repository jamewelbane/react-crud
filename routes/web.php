<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{any}', function () {
    return view('app'); // Or however you load your React/Vite view
})->where('any', '.*');
