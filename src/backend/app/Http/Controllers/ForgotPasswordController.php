<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class ForgotPasswordController extends Controller
{
  use SendsPasswordResetEmails;
  
  public function __construct()
    {
        $this->middleware('guest');
    }
  /**
   * Handle the incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function forgot(Request $request)
  {
    $this->validateEmail($request);
            
    $response = $this->broker()->sendResetLink(
        $request->only('email')
    );
    
    return $response == Password::RESET_LINK_SENT
      ? response()->json(['message' => 'Le lien de réinitialisation du mot de passe à été envoyé sur ta boîte mail.', 'status' => true], 201)
      : $this->emailExist($request->only('email'));
  }

  public function emailExist($email) {
    return User::where('email', $email)->first()
    ? response()->json(['message' => 'Impossible d\'envoyer le lien de réinitialisation', 'status' => false], 401)
    : response()->json(['message' => "L'email n'est pas valide", "status" => false], 404);
  }

  public function reset(Request $request) {
    $request->validate([
      'token' => 'required',
      'email' => 'required|email',
      'password' => 'required|min:8|confirmed',
  ]);

  $status = Password::reset(
    $request->only('email', 'password', 'password_confirmation', 'token'),
    function ($user, $password) use ($request) {
      $user->forceFill([
          'password' => Hash::make($password)
      ])->setRememberToken(Str::random(60));
      $user->save();
      event(new PasswordReset($user));
    }
  );

  return $status == Password::PASSWORD_RESET
  ? response()->json(['message' => 'Votre mot de passe à bien été réinitialisé', 'status' => true], 201)
  : response()->json(['message' => $status]);
  }
}
