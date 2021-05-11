/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import './resetPassword.scss';
import { urlBack, urlLocal, labelClassname } from 'src/utils/selectors';
import Loader from 'src/frontend/components/Loader';
import PasswordStrength from 'src/utils/passwordLength';

const ResetPassword = ({ displayAlert }) => {
  const { search } = useLocation();
  const token = new URLSearchParams(search).get('token');
  const email = new URLSearchParams(search).get('email');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorsFront, setErrorsFront] = useState({ password: null, confirmPassword: null });

  const verifyPassword = () => {
    if (!password.length) {
      setErrorsFront({ ...errorsFront, password: '*Ton mot de passe est obligatoire' });
    }
    if (password.length < 8) {
      setErrorsFront({ ...errorsFront, password: '*Ton mot de passe doit contenir au moins 8 caractères' });
    }
  };

  const verifyConfirmPassword = () => {
    if (!confirmPassword) {
      setErrorsFront({ ...errorsFront, confirmPassword: '*La confirmation du mot de passe est obligatoire' });
    }
    if (password && password !== confirmPassword) {
      setErrorsFront({ ...errorsFront, confirmPassword: '*Ta confirmation du mot de passe est différente du mot de passe' });
    }
  };

  const updateError = (key) => {
    if (errorsFront && errorsFront[key]) {
      errorsFront[key] = null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (token && email && password && confirmPassword) {
      axios.post(`${urlBack}/api/auth/password/reset`, {
        method: 'post',
        token,
        email,
        password,
        password_confirmation: confirmPassword,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((result) => {
          if (result.data.message === 'passwords.token') {
            displayAlert('Tu as déja réinitialisé ton mot de passe', false);
          }
          else displayAlert(result.data.message, true);
        })
        .catch((errors) => {
          displayAlert(errors.response.data, false);
        });
    }
  };

  return (
    <div className="resetPassword">
      <h1 className="globalTitle-page">Réinitialisation du mot de passe</h1>
      <div className="emailVerification__content">
        {loading ? <Loader />
          : (
            <>
              <div className="backgroundParagraphe resetPassword__content">
                <form onSubmit={handleSubmit}>
                  <div className="global-input">
                    <PasswordStrength
                      style={{
                        border: 0,
                        fontSize: '1em',
                      }}
                      minLength={8}
                      minScore={2}
                      inputProps={{
                        name: 'password',
                        autoComplete: 'off',
                        className: errorsFront && errorsFront.password ? 'inputAnimation inputAnimation--errors' : 'inputAnimation',
                      }}
                      defaultValue={password}
                      changeCallback={(e) => {
                        setPassword(e);
                      }}
                      setFocused={() => updateError('password')}
                      onBlur={verifyPassword}
                    ><label className={labelClassname(password)}>Mot de passe</label>
                    </PasswordStrength>
                    { (errorsFront && errorsFront.password) && <p className="label__errors">{ errorsFront.password }</p> }
                  </div>
                  <div className="spacer" />
                  <div className="global-input">
                    <input
                      name="confirmPassword"
                      type="password"
                      className={errorsFront.confirmPassword ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={verifyConfirmPassword}
                      onFocus={() => setErrorsFront({ ...errorsFront, password: null })}
                    />
                    <label className={labelClassname(confirmPassword)}>Confirmation du mot de passe</label>
                    {errorsFront.confirmPassword && (<p className="label__errors">{errorsFront.confirmPassword}</p>)}
                  </div>
                  <button type="submit" className="global-button resetPassword__content__button">Envoyer</button>
                </form>
              </div>
              <Link to="/" className="emailVerification__content__redirection">Retour sur l'accueil du site</Link>
            </>
          )}
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  displayAlert: PropTypes.func.isRequired,
};

export default ResetPassword;
