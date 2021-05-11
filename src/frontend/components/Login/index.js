/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Reaptcha from 'reaptcha';
import { motion } from 'framer-motion';

import { labelClassname, validEmail, urlBack } from 'src/utils/selectors';
import { animationOne, transition } from 'src/utils/animations';
import './login.scss';

const Login = ({
  displayModal,
  loginUser,
  errorLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedRemember, setCheckedRemember] = useState(false);
  const [checkedCaptcha, setCheckedCaptcha] = useState(null);
  const [errorCaptcha, setErrorCaptcha] = useState(null);
  const [errorFront, setErrorFront] = useState({ email: null, password: null });
  const captchaRef = useRef();

  const onExpire = () => {
    setCheckedCaptcha(null);
    captchaRef.current.reset();
  };

  useEffect(() => {
    onExpire();
  }, [errorLogin]);

  const verifyEmail = () => {
    if (!validEmail(email) && email.length) {
      setErrorFront({ ...errorFront, email: '*Ton email n\'est pas valide' });
    }
    else if (!email.length) {
      setErrorFront({ ...errorFront, email: '*Ton email est obligatoire' });
    }
  };

  const verifyPassword = () => {
    if (!password.length) {
      setErrorFront({ ...errorFront, password: '*Ton mot de passe est requis' });
    }
  };

  const handleForgotPasseword = () => {
    displayModal('forgotPassword');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkedCaptcha === null) {
      setErrorCaptcha('Coche le captcha');
      return;
    }
    loginUser(email, password, checkedRemember, checkedCaptcha);
  };

  return (
    <motion.div
      className="login"
      key="login"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1>Connexion</h1>
      <p className="login__text">Vous avez déjà un compte ? Connectez-vous ci-dessous.</p>
      {errorLogin && errorLogin.error && (
        <p className="label__errors login__label__error">{errorLogin.error}</p>
      )}

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="global-input">
          <input
            name="email"
            type="text"
            className={errorFront.email ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={verifyEmail}
            onFocus={() => setErrorFront({ ...errorFront, email: null })}
          />
          <label className={labelClassname(email)}>Adresse email</label>
          {errorFront.email && (<p className="label__errors">{errorFront.email}</p>)}
        </div>
        <div className="global-input">
          <input
            name="password"
            type="password"
            className={errorFront.password ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={verifyPassword}
            onFocus={() => setErrorFront({ ...errorFront, password: null })}
          />
          <label className={labelClassname(password)}>Mot de passe</label>
          {errorFront.password && (<p className="label__errors">{errorFront.password}</p>)}
        </div>
        <label className="login__form__remember">
          <input
            type="checkbox"
            name="rememberMe"
            onChange={(e) => setCheckedRemember(e.target.value === 'on')}
          /> Se souvenir de moi
        </label>

        <div className="captcha">
          <img src={`${urlBack}/images/logo/tristanaCaptcha300.png`} alt="" />
          <Reaptcha
            sitekey="6Le1jp0aAAAAAOUpDSbuRIioKNiPRrqLdX_erLPU"
            onVerify={(response) => setCheckedCaptcha(response)}
            theme="dark"
            className="captcha__content"
            onExpire={onExpire}
            ref={captchaRef}
          />
          {errorCaptcha && <p>{errorCaptcha}</p>}
        </div>
        <button
          type="submit"
          className="global-button"
          disabled={errorFront.email !== null || errorFront.password !== null || !errorCaptcha === null || checkedCaptcha === null}
        >Se connecter
        </button>
      </form>
      <button type="button" className="login__link" onClick={handleForgotPasseword}>Mot de passe oublié ?</button>
    </motion.div>
  );
};

Login.defaultProps = {
  errorLogin: null,
};

Login.propTypes = {
  displayModal: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  errorLogin: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
    }),
  ),
};

export default Login;
