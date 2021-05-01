<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Notifications\VerifyEmail;

class VerificationController extends Controller
{

  use VerifiesEmails;

  protected $redirectTo = 'email.verified';

  public function __construct()
  {
    $this->middleware('auth:api')->only('resend');
    // $this->middleware('signed')->only('verify');
    $this->middleware('throttle:30,1')->only('verify', 'resend');
    // Log::debug($this->middleware());
  }

/**
     * Mark the authenticated user's email address as verified.
     *
     * @param  Request  $request
     * @return JsonResponse|RedirectResponse
     *
     * @throws AuthorizationException
     */
    public function verify(Request $request)
    {
      Log::debug('Passe dans la conftion verify');
      $user = User::find($request->route('id'));
      if (! hash_equals((string) $request->route('id'), (string) $user->id)) {
          Log::debug('NO USER');
          throw new AuthorizationException;
      }
      
      if (! hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
          Log::debug('BAD HASH');
          throw new AuthorizationException;
      }
        
      // dd($user->hasVerifiedEmail());
      if ($user->hasVerifiedEmail()) {
        Log::debug('Email vérifiée');
        // return new JsonResponse(['success' => false, 'message' => "Email déjà vérifiée"], 204);
        return $request->wantsJson()
          ? new JsonResponse(['success' => true, "message" => "L'email a déjà été vérifié"], 202)
          : view($this->redirectTo, ["verified" => true, "message" => "Email a déjà été validée"]);
      }
        
      if ($user->markEmailAsVerified()) {
        Log::debug('Email marqué vérifié');
        event(new Verified($user));
      }

      if ($response = $this->verified($request)) {
        Log::debug('Email vérifié return response');
        return $response;
      }

      Log::debug('Tout est OK');
      // return new JsonResponse(['success' => true, "message" => "L'email a bien été vérifiée"], 204);
      return $request->wantsJson()
        ? new JsonResponse(['success' => true, "message" => "L'email a bien été vérifié"], 202)
        : view($this->redirectTo, ["verified" => true, "message" => "L'email a bien été validé"]);
    }

    /**
     * Resend the email verification notification.
     *
     * @param  Request  $request
     * @return JsonResponse|RedirectResponse
     */
    public function resend(Request $request)
    {
        if($request->user()->hasVerifiedEmail()) {
            Log::debug('Email déjà envoyée');
            return new JsonResponse(['success' => false, 'message' => "Email déjà vérifiée"], 202);
        }

        $request->user()->sendEmailVerificationNotification();

        return new JsonResponse(['success' => "L'email a été envoyée"], 202);
    }


}