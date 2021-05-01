<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\ForgotPasswordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::group(['middleware' => 'throttle:10,3'], function () => {

// });
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
    Route::put('/update-user',[AuthController::class, 'update']);
    Route::post('/update-avatar', [UploadController::class, 'updateAvatar']);
    Route::get('/email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
    Route::get('/email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::post('/password/email', [ForgotPasswordController::class, 'forgot']);
    Route::post('/password/reset', [ForgotPasswordController::class, 'reset'])->name('password.reset');
});


// Route::group([
//     'middleware' => 'api',
//     'pefix' => 'email'
// ], function ($router) {
//     Route::get('/email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
//     Route::get('/email/resend', [VerificationController::class, 'resend']);
// });