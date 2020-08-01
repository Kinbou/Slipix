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

    public function fetchChampiontest($name)
    {
        $champion = DB::table('champions')->where('name', $name)
            ->join('competences', 'champions.competence_id', '=', 'competences.id')
            ->select('champions.*', 'competences.*')
            ->get();
        return $this->jsonWithCors($champion);
    }
    public function fetchChampionte($name, $lane )
    {
        $champion = DB::table('lanes')->where('name', $lane, 'nameChampion', $name) 
            ->join('champions', 'lanes.champion_id', '=', 'champions.id')
            ->join('competences', 'lanes.competence_id', '=', 'competences_id')       
            ->select('champions.*', 'lanes.*', 'competences.*')
            ->get();
        return $this->jsonWithCors($champion);
    }
    public function fetchChampion($lane, $champion)
    {
        $lane = DB::table('lanes')
            ->where([
                ['nameChampion', $champion],
                ['lane', $lane],
            ])
            ->join('competences', 'lanes.competence_id', '=', 'competences.id')
            ->join('champions', 'lanes.champion_id', '=', 'champions.id')
            ->join('youtube', 'lanes.youtube_id', '=', 'youtube.id')
            ->select('lanes.*', 'champions.*', 'competences.*', 'youtube.*')
            ->get();
        // $champion = DB::table('champions')->where('name', $name)
        //     ->union($lane)    
        //     ->select('champions.*')
        //     ->get();
        return $this->jsonWithCors($lane);
    }
}
