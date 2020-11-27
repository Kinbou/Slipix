/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { labelClassname } from 'src/utils/selectors';
import './login.scss';

const Login = () => (
  <div className="login">
    <h1>Connexion</h1>
    <p className="login__text">Vous avez déjà un compte ? Connectez-vous ci-dessous.</p>
    <form className="login__form">
      <label className={labelClassname}>
        <input
          name="email"
          type="email"
          className="global-input"
          // onChange={changeInput}
          // value={email}
        />
        <span>Adresse email</span>
      </label>
      <label className={labelClassname}>
        <input
          name="password"
          type="password"
          className="global-input"
          // onChange={changeInput}
          // value={password}
        />
        <span>Mot de passe</span>
      </label>
      <label className="login__form__remember">
        <input
          type="checkbox"
          name="rememberMe"
          // checked={rememberMe}
          // onChange={changeInput}
        /> Se souvenir de moi
      </label>
      {/* {!requestIsLoad && <button type="submit" className="global-button">Se connecter</button>} */}
      <button type="submit" className="global-button">Se connecter</button>
      {/* {requestIsLoad && <button type="button" className="global-button" disabled><Loader withMargin={false} />
      </button>} */}
    </form>
    <button type="button" className="login__link">Mot de passe oublié ?</button>
  </div>
);

export default Login;
