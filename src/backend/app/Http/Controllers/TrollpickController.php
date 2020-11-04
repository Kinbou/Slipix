<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Trollpick;

class TrollpickController extends Controller
{
    // retourne la liste des trollpicks au format Json
    public function list()
    {
        $trollpicks = Trollpick::all();
        return $this->jsonWithCors($trollpicks);
    }

    // récupère un trollpick en fonction du nom dans l'url
    public function fetchOneTrollpick($id)
    {
        $trollpick = DB::table('trollpicks')->where('id', $id)->get();
        return $this->jsonWithCors($trollpick);
    }

    public function fetchTrollpickActif()
    {
        $trollpickActif = DB::table('trollpicks')->where('actif', 1)
            ->select('id','title', 'image', 'name')
            ->get();
        return $this->jsonWithCors($trollpickActif);
    }

    public function fetchTrollpickSoon()
    {
        $trollpick = DB::table('trollpicks')->where('actif', 0)
        ->select('id','title', 'image')->get();
        return $this->jsonWithCors($trollpick);
    }
}
