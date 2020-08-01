<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/test', ['as'=>'test', 'uses'=>'TestController@plop']);

$router->get('/toto-route', ['as'=> 'toto', 'uses'=>'MainController@toto']);

// Champions

$router->get('/champions', 'ChampionController@list');

$router->get('/champions/{lane}/{champion}',[
    'as' => 'champion',
    'uses' => 'ChampionController@fetchChampion'
]);

// Compétences

$router->get('/competences',[
    'as' => 'competences',
    'uses' =>  'CompetenceController@list'
]);

$router->get('/competences/{id}',[
    'as' => 'competences',
    'uses' =>  'CompetenceController@fetchCompetence'
]);

// ----- LANES -------

// champion actif lane
$router->get('/lanes/{name}/actif',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneActif'
]);

// champion soon ane
$router->get('/lanes/{name}/soon',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneSoon'
]);

// all champion lane
$router->get('/lanes/{name}',[
    'as' => 'lane',
    'uses' => 'LaneController@fetchLaneActif'
]);




