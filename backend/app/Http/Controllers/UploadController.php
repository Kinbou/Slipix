<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Traits\UploadTrait;
use Illuminate\Support\Facades\Log;

class UploadController extends Controller 
{

  use UploadTrait;

  public function updateAvatar(Request $request)
  {
    if ($request->hasFile('avatar')) { // On regarde si un fichier est envoyé avec la requête
      $picture = $request->file('avatar'); // On stock le fichier dans la variable $picture
      $name = auth()->user()->pseudo . '_'.time(); // On nomme le fichier, par ex: john_873468276
      $folder = "avatar"; // Dossier dans lequel on va enregistré le fichier: /public/images/avatar
      $path = $this->uploadOne($picture, $folder, 'public', $name); // On upload l'image et en retour on obtient le chemin /images/avatar/john_873468276.jpeg
      $user = User::find(auth()->user()->id); // On récupère l'utilisateur 
      if ($user->avatar !== 'images/avatar/defaultAvatar.png') { // Si l'utilisateur a déjà un avatar, on supprime l'image avant d'uploader le nouveau
        $this->removeOne($user->avatar, 'public');
      }
      $user->avatar = $path; // On assigne le chemin de l'avatar (ex: /images/avatar/john_872346876.jpeg)
      $user->save(); // On sauvegarde 
      Log::info($picture);
      return response()->json(['success' => true, 'avatar' => $path, 'file' => $picture], 204); // On retourne un succès
    }
    return response()->json(['success' => false, 'message' => 'Aucun fichier uploadé'], 400); // Il n'y a pas de fichier 'avatar' donc on retourne une 'Bad request'
  }
}