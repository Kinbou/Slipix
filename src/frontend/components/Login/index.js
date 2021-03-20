/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { labelClassname } from 'src/utils/selectors';
import PropTypes from 'prop-types';
import './login.scss';

const Login = ({
  displayModal,
  loginUser,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasseword = () => {
    displayModal('forgotPassword');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email, password);
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
          /> Se souvenir de moi
        </label>
        {/* {!requestIsLoad && <button type="submit" className="global-button">Se connecter</button>} */}
        <button type="submit" className="global-button">Se connecter</button>
        {/* {requestIsLoad && <button type="button" className="global-button" disabled><Loader withMargin={false} />
      </button>} */}
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
