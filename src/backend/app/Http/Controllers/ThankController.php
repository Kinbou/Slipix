<?php

namespace App\Http\Controllers;

use App\Thank;


class ThankController extends Controller
{
    // retourne la liste des remerciements de Slipix
    public function list()
    {
        $thanks = Thank::all();
        return $this->jsonWithCors($thanks);
    }
}
