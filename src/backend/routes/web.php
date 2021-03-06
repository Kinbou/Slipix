<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// Champions

Route::get('/champions', 'ChampionController@list');

Route::get('/champions/{lane}/{champion}',[
    'as' => 'champion',
    'uses' => 'ChampionController@fetchChampion'
]);

// Compétences

Route::get('/competences',[
    'as' => 'competences',
    'uses' =>  'CompetenceController@list'
]);

Route::get('/competences/{id}',[
    'as' => 'competences',
    'uses' =>  'CompetenceController@fetchCompetence'
]);

// ----- LANES -------

// champion actif lane
Route::get('/lanes/{name}/actif',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneActif'
]);

// champion soon ane
Route::get('/lanes/{name}/soon',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneSoon'
]);

// all champion lane
Route::get('/lanes/{name}',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneActif'
]);


// ------ THANKS ------

// all thanks
Route::get('/thanks',[
    'as' => 'thank',
    'uses' => 'ThankController@list'
]);

// ------ TROLLPICKS ------

// all trollpicks
Route::get('/trollpicks/trollpick/{id}',[
    'as' => 'trollpicks',
    'uses' => 'TrollpickController@fetchOneTrollpick',
]);

Route::get('/trollpicks/actif',[
    'as' => 'trollpick',
    'uses' => 'TrollpickController@fetchTrollpickActif'
]);

Route::get('/trollpicks/soon',[
    'as' => 'trollpicks',
    'uses' => 'TrollpickController@fetchTrollpickSoon'
]);

Route::get('/trollpicks',[
    'as' => 'trollpick',
    'uses' => 'TrollpickController@list'
]);








