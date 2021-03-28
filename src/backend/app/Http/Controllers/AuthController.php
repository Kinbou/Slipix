<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;


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
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated(),true)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'email',
            'pseudo' => 'string',
            'name' => 'string',
            'password' => 'string',
            'newPassword' => 'string',
            'confirmNewPassword' => 'string',
        ]);
        $user = auth()->user();
        if ($request->password) {
          if (strlen($request->newPassword) < 6) {
            if (Hash::check($request->password, $user->password)) {
              if ($request->password !== $request->newPassword) {
                if ($request->newPassword === $request->newPasswordConfirmation) {
                  $password = Hash::make($request->newPassword);
                  $user->password = $password;
                } else {
                  return response()->json(['success' => false, "message" => "Le nouveau mot de passe ne corespond pas à la confirmation du mot de passe"]);
                }
              } else {
                  return response()->json(['success' => false, "message" => "Le nouveau mot de passe doit être différent"]);
              }
            } else {
              return response()->json(['success' => false, "message" => "Mauvais mot de passe"]);
            }
          } else {
            return response()->json(['success' => false, "message" => "Le mot de passe doit contenir au minimmum 6 caractères"]);
          }
        }
    
        if ($request->pseudo) {
          $user->pseudo = $request->pseudo;
        }
        if ($request->email) {
          $emailExist = User::where(['email' => $request->email]).first();
          if ($emailExist) {
            return response()->json(['success' => false, "message" => "L'email est déjà utilisé"]);
          } else {
            $user->email = $request->email;
          }
        }
        
        if ($request->name) {
          $user->name = $request->name;
        }
    
        if ($request->hasFile('avatar')) {
          $avatar = $request->file('avatar');
          $name = $user->pseudo . '_' . time();
          $folder = 'avatar';
          if ($user->avatar !== 'images/avatar/defaultAvatar.png') {
            $this->removeOne($user->avatar, 'public');
          }
          $path = $this->uploadOne($avatar, $folder, 'public', $name);
          $user->avatar = $path;
        }
    
        $user->update();
    
        return response()->json(['success' => true, "message" => "Informations mises à jour", "user" => $user]);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'pseudo' => 'required|string|between:2,100|min:3|unique:users',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password), 'avatar' => 'images/avatar/defaultAvatar.png']

                ));

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
        return response()->json(['message' => 'User successfully signed out']);
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
    protected function createNewToken($token){
        return response()->json([
          'access_token' => $token,
          'token_type' => 'bearer',
          'expires_in' => auth()->factory()->getTTL() * 60,
          
          'user' => auth()->user()
        ]
        )->cookie('access_token', $token, auth()->factory()->getTTL() * 60, '/', true, false);
    }
}