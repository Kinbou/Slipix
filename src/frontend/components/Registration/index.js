/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PasswordStrength from 'src/utils/passwordLength';
import PropTypes from 'prop-types';

import { labelClassname, validEmail } from 'src/utils/selectors';
import './registration.scss';

const Registration = ({ fetchUserRegistration }) => {
  useEffect(() => () => {
    // clearModalInputs();
  }, []);
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLegalMentionsChecked, setisLegalMentionsChecked] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();
    setErrors(null);

    if (!validEmail(email)) {
      setErrors((err) => ({
        ...err,
        email: 'L\'email est invalide',
      }));
    }

    if (pseudo.length <= 2) {
      setErrors((err) => ({
        ...err,
        pseudo: 'Le pseudo doit avoir au minimum 3 caractères',
      }));
    }
    if (password.length < 8) {
      setErrors((err) => ({
        ...err,
        password: 'Le mot de passe doit avoir au minimum 8 caractères et une majuscule et un chiffre',
      }));
    }
    if (confirmPassword !== password) {
      setErrors((err) => ({
        ...err,
        confirmPassword: 'La confirmation du mot de passe est incorrecte',
      }));
    }
    if (!isLegalMentionsChecked) {
      setErrors((err) => ({
        ...err,
        isLegalMentionsChecked: 'Veuillez accepter les mentions légales',
      }));
    }

    // if (email === '' || password === '' || confirmPassword === '' || pseudo === '') {
    //   setErrors((err) => ({
    //     ...err,
    //   }));
    // }
    console.log(errors);
    if (errors !== null) {
      return;
    }
    if (password === confirmPassword && password !== '' && pseudo.length >= 3 && isLegalMentionsChecked) {
      const data = {
        pseudo,
        email,
        password,
        password_confirmation: confirmPassword,
      };
      console.log(data);
      fetchUserRegistration(data);
    }
  };

  console.log(isLegalMentionsChecked);
  return (
    <div className="registration">
      <h1>Inscription</h1>
      {/* {errorMessage !== '' && (
        <div className="global-error">
          <p>{errorMessage}</p>
        </div>
      )} */}
      <p className="registration__text">Vous n'avez pas encore de compte ? Créez en un ci-dessous.</p>

      <div className="registration__container">
        <form className="registration__form" onSubmit={handleRegistration}>
          <div className="global-input">
            <input
              name="email"
              type="email"
              className="inputAnimation"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={labelClassname(email)}>Adresse email</label>
            { (errors && errors.email) && <p>{ errors.email }</p> }
          </div>
          <div className="global-input">
            <input
              name="pseudo"
              type="text"
              className="inputAnimation"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <label className={labelClassname(pseudo)}>Pseudo</label>
            { (errors && errors.pseudo) && <p>{ errors.pseudo }</p> }
          </div>
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
                className: 'inputAnimation',
              }}
              changeCallback={setPassword}
              // className="inputAnimation"
              // changeCallback={({ password }) => {
              //   changeValue('password', password);
              // }}
              // defaultValue={inputPassword}
              // eslint-disable-next-line no-return-assign
              // ref={(ref) => reactInputPassword = ref}

            ><label className={labelClassname(password)}>Mot de passe</label>
              { (errors && errors.password) && <p>{ errors.password }</p> }
            </PasswordStrength>

          </div>
          <div className="global-input">
            <input
              name="confirmPassword"
              type="password"
              className="inputAnimation"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className={labelClassname(confirmPassword)}>Confirmer le mot de passe</label>
            { (errors && errors.confirmPassword) && <p>{ errors.confirmPassword }</p> }
          </div>
          <div className="registration__form__legalmentions">
            <input name="mentionsChecked" type="checkbox" onChange={(e) => setisLegalMentionsChecked(e.target.checked)} /> J'ai lu et j'accepte les <Link to="/mentions-legales" target="_blank" className="">mentions légales</Link>
          </div>
          <button type="submit" className="global-button registration__button">S'inscrire</button>
        </form>

        <div className="registration__infos">
          <p>Le pseudo doit contenir au moins 3 caractères.</p>
          <p>Pour votre sécurité, nous vous conseillons
            de respecter les critères ci-dessous pour votre mot de passe :
          </p>
          <ul>
            <li>- 8 caractères minimum (obligatoire)</li>
            <li>- 1 lettre en minuscule minimum</li>
            <li>- 1 lettre en majuscule minimum</li>
            <li>- 1 chiffre minimum</li>
            <li>- 1 caractère spécial minimum</li>
          </ul>
          <p>
            Tous les champs sont obligatoires
          </p>
        </div>
      </div>
    </div>
  );
};

Registration.propTypes = {
  // email: PropTypes.string.isRequired,
  // inputPassword: PropTypes.string.isRequired,
  // confirmPassword: PropTypes.string.isRequired,
  // pseudo: PropTypes.string.isRequired,
  // changeValue: PropTypes.func.isRequired,
  // submitRegistration: PropTypes.func.isRequired,
  // changeRegistrationError: PropTypes.func.isRequired,
  // errorMessage: PropTypes.string.isRequired,
  // isLegalMentionsChecked: PropTypes.bool.isRequired,
  // checkLegalMentions: PropTypes.func.isRequired,
  // clearModalInputs: PropTypes.func.isRequired,
  // requestIsLoad: PropTypes.bool.isRequired,
  fetchUserRegistration: PropTypes.func.isRequired,
};

export default Registration;
