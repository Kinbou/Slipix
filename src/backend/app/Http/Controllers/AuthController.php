<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
    	$validator = $request->validate([
        'email' => 'required|email|exists:users',
        'password' => 'required|string|min:6',
        'checkedRemember' => 'required|boolean',
        'checkedCaptcha' => 'required|string|min:400',
      ], [
        'email.required' => 'Votre email est obligatoire',
        'email.email' => 'Votre email est invalide',
        'password.required' => 'Veuillez saisir votre mot de passe',
        'password.min' => 'Votre mot de passe doit faire au moins 6 caractères',
        'email.exists' =>'Votre mot de passe ou votre email est incorrecte',
        'checkedCaptcha.required' => 'Captcha invalide',
        'checkedCaptcha.string' => 'Captcha invalide',
        'checkedCaptcha.min' => 'Captcha invalide',
      ]);

      $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
        'secret' => env("GOOGLE_RECAPTCHA_SECRET"),
        'response' => $request->checkedCaptcha,
        'remoteip' => $request->ip(),
      ]);
      if($response['success'] === false) {
        return response()->json(['error' => 'Captcha invalide'], 401);
      }
      if (! $token = auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
        return response()->json(['error' => '*Votre mot de passe ou votre email est incorrecte'], 401);
      }
      return $this->createNewToken($token, $request->checkedRemember);
    }

    public function update(Request $request){
        $validator = $request->validate([
            'email' => 'email',
            'pseudo' => 'string|min:3',
            'name' => 'string',
            'password' => 'string',
            'newPassword' => 'string',
            'confirmNewPassword' => 'string',
        ],[
          'pseudo.min' => "Le pseudo doit avoir au moins 3 caractères"
        ]);
        $user = auth()->user();
        if ($request->password) {
          if (strlen($request->newPassword) >= 6) {
            if (Hash::check($request->password, $user->password)) {
              if ($request->password !== $request->newPassword) {
                if ($request->newPassword === $request->confirmNewPassword) {
                  $password = Hash::make($request->newPassword);
                  $user->password = $password;
                } else {
                  return response()->json(['success' => false, "message" => "Le nouveau mot de passe ne corespond pas à la confirmation du mot de passe"], 400);
                }
              } else {
                  return response()->json(['success' => false, "message" => "Le nouveau mot de passe doit être différent"], 400);
              }
            } else {
              return response()->json(['success' => false, "message" => "Le mot de passe est incorrecte"], 400);
            }
          } else {
            return response()->json(['success' => false, "message" => "Le mot de passe doit contenir au minimmum 6 caractères"], 400);
          }
        }
    
        if ($request->pseudo) {

          $user->pseudo = $request->pseudo;
        }
        if ($request->email) {
          $emailExist = User::where(['email' => $request->email]).first();
          if ($emailExist) {
            return response()->json(['success' => false, "message" => "L'email est déjà utilisé"], 400);
          } else {
            $user->email = $request->email;
          }
        }
        
        if ($request->name) {
          $user->name = $request->name;
        }
    
        $user->update();
    
        return response()->json(['success' => true, "message" => "Informations mises à jour", "user" => $user], 200);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = $request->validate([
            'pseudo' => 'required|string|between:3,50|unique:users',
            'email' => 'required|string|email|max:50|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ], [
          'pseudo.required' => 'Le pseudo est requis',
          'pseudo.between' => 'Le pseudo doit être compris entre 3 et 50 caractères',
          'pseudo.unique' => 'Le pseudo est déjà utilisé',
          'email.required' => 'L\'email est requis',
          'email.email' => 'L\'email n\'est pas valide',
          'email.max' => 'L\'email ne peux pas dépasser les 50 caractères',
          'email.unique' => 'L\'email doit être unique',
          'password.required' => 'Le mot de passe est requis',
          'password.confirmed' => 'La confirmation du mot de passe n\'est pas identique',
          'password.min' => 'Le mot de passe doit contenir au moins 6 caractères',
        ]);

        $user = User::create(array_merge(
          $request->only(['pseudo', 'email']),
          ['password' => Hash::make($request->password), 'avatar' => 'images/avatar/defaultAvatar.png']
        ));

        event(new Registered($user));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'Vous avez bien été déconecté']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token, $remember){
        return response()->json([
          'access_token' => $token,
          'token_type' => 'bearer',
          'expires_in' => $remember ? strtotime(date('Y-m-d', strtotime('+1 year'))) / 1000 : auth()->factory()->getTTL() * 1440,
          
          'user' => auth()->user()
        ]
        )->cookie('access_token', $token, auth()->factory()->getTTL() * 1440, '/', true, false);
    }

    public function verificationEmail($user_id, Request $request) {
      if (!$request->hasValidSignature()) {
        return response()->json(['message' => 'l\'url de vérification de l\'email est non valide']);
      }

      $user = User::findOrFail($user_id);

      if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
      }

      return redirect()->to('/');
    }

    public function resendEmail() {
      if (auth()->user()->hasVerifiedEmail()) {
        return response()->json(['message' => 'L\'email est déjà vérifié']);
      }

      auth()->user()->sendEmailVerificationNotification();

      return response()->json(['message' => 'le lien de vérification par e-mail à été envoyé sur votre boîte mail']);
    }
}