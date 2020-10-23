<?php

use Illuminate\Support\Facades\Route;

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
    'as' => 'thanks',
    'uses' => 'ThankController@list'
]);
