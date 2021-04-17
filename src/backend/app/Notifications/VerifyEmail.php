<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Config;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerifyEmail extends Notification
{
    use Queueable;

    protected $pageUrl;
    public static $toMailCallback;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
      $this->pageUrl = 'http://localhost:8080/email-verification';
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
      $verificationUrl = $this->verificationUrl($notifiable); // http://backend.slipix-progresser-sur-league-of-legends.fr/email/verify/8/c2e5798c41a77f52f1a271c327e69f57754ae523?expires=1618188257&signature=e93a902e1e44c5dd2ad2f79f510f04fea14b8639397caf8de92f21e355cc807e
      Log::info($verificationUrl);
      $emailLink = $this->urlForEmail($verificationUrl);

      if (static::$toMailCallback) {
          return call_user_func(static::$toMailCallback, $notifiable, $verificationUrl);
      }
      return (new MailMessage)
        ->subject('Verification de ton email')
        ->greeting('Bonjour, ' . $notifiable->pseudo . '😎')
        ->line('Merci de t\'être inscrit.')
        ->line('Je dois vérifié que ton email renseigné lors de ton inscription est correcte.')
        ->action('Verifie ton email', $emailLink)
        ->line('Merci de ne pas répondre à ce mail')
        ->salutation('La TeamSlip.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
      return [
          //
      ];
    }

    protected function verificationUrl($notifiable)
    {
      $route = URL::temporarySignedRoute(
        'verification.verify',
        Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60000)),
        [
            'id' => $notifiable->getKey(),
            'hash' => sha1($notifiable->getEmailForVerification())
        ]
      ); // Cela créé une url avec expiration de celle-ci pour laravel
      return $route;
    }

    protected function urlForEmail($url)
    {
      // On 'explode' l'url pour obtenir ['http://backend.slipix-progresser-sur-league-of-legends.fr', 'email', 'verify', '8', 'c2e5798c41a77f52f1a271c327e69f57754ae523?expires=1618188257&signature=e93a902e1e44c5dd2ad2f79f510f04fea14b8639397caf8de92f21e355cc807e']
      $exploded = explode('/', $url);
      // On récupère l'id
      $id = $exploded[count($exploded) - 2];
      // On Récupère le hash
      $last = explode('?', $exploded[count($exploded) - 1]);
      $hash = $last[0];
      // On récupère le reste (expires et signature)
      $expiresSignature = $last[1];

      // On construit l'url pour le front/ celui du mail
      $urlEmail = $this->pageUrl . '?id=' . $id . '&hash=' . $hash . '&' . $expiresSignature;
      // On obtient: http://slipix-progresser-sur-league-of-legends.fr/email-verification?id=8&hash=c2e5798c41a77f52f1a271c327e69f57754ae523&expires=1618188257&signature=e93a902e1e44c5dd2ad2f79f510f04fea14b8639397caf8de92f21e355cc807e

      return $urlEmail;
    }
}
