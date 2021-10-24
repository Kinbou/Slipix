<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Lane;

class LaneController extends Controller
{
    // retourne la liste des champions au format Json
    public function list()
    {
        $lanes = Lane::all();
        return $this->jsonWithCors($lanes);
    }

    public function fetchLaneAlltesy($name)
    {
        $champion = DB::table('lanes')->where('lanes.lane', $name)
            ->join('champions', 'lanes.champion_id', '=', 'champions.id')
            ->select('champions.name','champions.pictureChampion', 'lanes.actif', 'lanes.lane')
            ->get();
        return $this->jsonWithCors($champion);
    }

    public function fetchLaneActif($name)
    {
        $champion = DB::table('lanes')->where('lanes.lane', $name)
            ->where([
                ['lanes.lane', $name],
                ['lanes.actif', 1],
            ])
            ->join('champions', 'lanes.champion_id', '=', 'champions.id')
            ->select('champions.name','champions.pictureChampion', 'lanes.actif', 'lanes.lane')
            ->get();
        return $this->jsonWithCors($champion);
    }

    public function fetchLaneSoon($name)
    {
        $champion = DB::table('lanes')->where('lanes.lane', $name)
            ->where([
                ['lanes.lane', $name],
                ['lanes.actif', 0],
            ])
            ->join('champions', 'lanes.champion_id', '=', 'champions.id')
            ->select('champions.name','champions.pictureChampion', 'lanes.actif', 'lanes.lane')
            ->get();
        return $this->jsonWithCors($champion);
    }
}
