<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected function jsonWithCors($data)
    {
        return response()->json($data)
        // autorise l'accès via XHR depuis n'importe quel domaine(*)
        ->header('Access-Control-Allow-Origin', '*')
        // autorise l'accès via XHR avec seulement ces verbes HTTP
        ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }

    protected function sendEmptyResponse($httpStatusCode=200) {
        // Return response, with headers
        return response('', $httpStatusCode)
            ->header('Access-Control-Allow-Origin', '*') // autorise l'accès via XHR depuis n'importe quel domaine
            ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }

    protected function err404()
    {
        return response('', 404);
    }
}
