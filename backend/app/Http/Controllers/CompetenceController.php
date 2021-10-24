<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Competence;

class CompetenceController extends Controller
{
    // retourne la liste des champions au format Json
    public function list()
    {
        $competences = Competence::all();
        return $this->jsonWithCors($competences);
    }

    public function fetchCompetence($id)
    {
        $competence = Competence::find($id);
        return $this->jsonWithCors($competence);
    }
}
