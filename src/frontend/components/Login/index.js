/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { labelClassname } from 'src/utils/selectors';
import PropTypes from 'prop-types';
import './login.scss';

const Login = ({
  displayModal,
  loginUser,
  errorLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedRemember, setCheckedRemember] = useState(false);

  const handleForgotPasseword = () => {
    displayModal('forgotPassword');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, checkedRemember);
    loginUser(email, password, checkedRemember);
  };

  return (
    <div className="login">
      <h1>Connexion</h1>
      <p className="login__text">Vous avez déjà un compte ? Connectez-vous ci-dessous.</p>

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="global-input">
          <input
            name="email"
            type="text"
            className="inputAnimation"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={labelClassname(email)}>Adresse email</label>
        </div>
        <div className="global-input">
          <input
            name="password"
            type="password"
            className="inputAnimation"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={labelClassname(password)}>Mot de passe</label>
        </div>
        <label className="login__form__remember">
          <input
            type="checkbox"
            name="rememberMe"
            onChange={(e) => setCheckedRemember(e.target.value === 'on')}
          /> Se souvenir de moi
        </label>
        {errorLogin && <p className="label__errors login__label__error">{errorLogin.error}</p>}
        <button type="submit" className="global-button">Se connecter</button>
      </form>
      <button type="button" className="login__link" onClick={handleForgotPasseword}>Mot de passe oublié ?</button>
    </div>
  );
};

Login.propTypes = {
  displayModal: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,

};

export default Login;
