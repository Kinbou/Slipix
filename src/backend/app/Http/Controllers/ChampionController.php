<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Champion;

class ChampionController extends Controller
{
    // retourne la liste des champions au format Json
    public function list()
    {
        $champions = Champion::all();
        return $this->jsonWithCors($champions);
    }

    public function fetchChampion($name, Request $request)
    {
        $champion = DB::table('champions')->where('name', $name)
            ->join('competences', 'champions.competence_id', '=', 'competences.id')
            ->select('champions.*', 'competences.*')
            ->get();
        return $this->jsonWithCors($champion);
    }
}
