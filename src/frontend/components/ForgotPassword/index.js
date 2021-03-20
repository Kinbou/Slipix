import React from 'react';

import './forgotpassword.scss';

const ForgotPassword = () => (
  <div className="forgotpassword">
    <h1>Réinitialisation du mot de passe</h1>
    <p className="forgotpassword__text1">Vous avez oublié votre mot de passe ?</p>
    <p className="forgotpassword__text2">Indiquez-nous votre adresse email et nous procéderons à la réinitialisation de votre mot de passe.</p>
    <form className="forgotpassword__form">
      <input type="text" placeholder="Adresse email" className="global-input" />
      <button type="submit" className="global-button">Faire la demande</button>
    </form>
  </div>
);

export default ForgotPassword;
