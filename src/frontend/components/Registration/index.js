/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { labelClassname, validEmail } from 'src/utils/selectors';
import { animationOne, transition } from 'src/utils/animations';
import PasswordStrength from 'src/utils/passwordLength';
import './registration.scss';

const Registration = ({ fetchUserRegistration }) => {
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLegalMentionsChecked, setisLegalMentionsChecked] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();
    setErrors(null);
    // eslint-disable-next-line prefer-const
    let dataError = {};
    if (!validEmail(email)) {
      dataError.email = '*L\'email est invalide';
    }
    if (pseudo.length <= 2) {
      dataError.pseudo = '*Le pseudo doit avoir au minimum 3 caractères';
    }
    if (password.length < 8) {
      dataError.password = '*Le mot de passe doit avoir au minimum 6 caractères';
    }
    if (confirmPassword !== password) {
      dataError.confirmPassword = '*La confirmation du mot de passe est incorrecte';
    }
    if (!isLegalMentionsChecked) {
      dataError.isLegalMentionsChecked = '*Veuillez accepter les mentions légales';
    }
    if (!confirmPassword.length) {
      dataError.confirmPassword = '*La confirmation du mot de passe est obligatoire';
    }
    if (Object.keys(dataError).length) {
      setErrors(dataError);
      setPassword('');
      setConfirmPassword('');
      return;
    }
    if (password === confirmPassword && password !== '' && pseudo.length >= 3 && isLegalMentionsChecked) {
      const data = {
        pseudo,
        email,
        password,
        password_confirmation: confirmPassword,
      };
      fetchUserRegistration(data);
    }
  };

  const verifyEmail = () => {
    if (!validEmail(email) && email.length) {
      setErrors({ ...errors, email: '*Ton email n\'est pas valide' });
    }
    else if (!email.length) {
      setErrors({ ...errors, email: '*Ton email est obligatoire' });
    }
  };

  const verifyPseudo = () => {
    if (pseudo.length < 3) {
      setErrors({ ...errors, pseudo: '*Ton pseudo doit contenir au moins 3 caractères' });
    }
  };

  const verifyPassword = () => {
    if (!password.length) {
      setErrors({ ...errors, password: '*Ton mot de passe est obligatoire' });
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: '*Ton mot de passe doit contenir au moins 8 caractères' });
    }
  };

  const verifyConfirmPassword = () => {
    if (!confirmPassword) {
      setErrors({ ...errors, confirmPassword: '*La confirmation du mot de passe est obligatoire' });
    }
    if (password && password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: '*Ta confirmation du mot de passe est différente du mot de passe' });
    }
  };

  const updateError = (key) => {
    if (errors && errors[key]) {
      errors[key] = null;
    }
  };

  return (
    <motion.div
      className="registration"
      key="registration"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1>Inscription</h1>
      <p className="registration__text">Vous n'avez pas encore de compte ? Créez en un ci-dessous.</p>

      <div className="registration__container">
        <form className="registration__form" onSubmit={handleRegistration}>
          <div className="global-input">
            <input
              name="email"
              type="text"
              className={errors && errors.email ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => updateError('email')}
              onBlur={verifyEmail}
            />
            <label className={labelClassname(email)}>Adresse email</label>
            { (errors && errors.email) && <p className="label__errors">{ errors.email }</p> }
          </div>
          <div className="global-input">
            <input
              name="pseudo"
              type="text"
              className={errors && errors.pseudo ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              onFocus={() => updateError('pseudo')}
              onBlur={verifyPseudo}
            />
            <label className={labelClassname(pseudo)}>Pseudo</label>
            { (errors && errors.pseudo) && <p className="label__errors">{ errors.pseudo }</p> }
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
                className: errors && errors.password ? 'inputAnimation inputAnimation--errors' : 'inputAnimation',
              }}
              defaultValue={password}
              changeCallback={(e) => {
                setPassword(e);
              }}
              setFocused={() => updateError('password')}
              onBlur={verifyPassword}
            ><label className={labelClassname(password)}>Mot de passe</label>
            </PasswordStrength>
            { (errors && errors.password) && <p className="label__errors">{ errors.password }</p> }
          </div>
          <div className="global-input">
            <input
              name="confirmPassword"
              type="password"
              className={errors && errors.confirmPassword ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => updateError('confirmPassword')}
              onBlur={verifyConfirmPassword}
            />
            <label className={labelClassname(confirmPassword)}>Confirmer le mot de passe</label>
            { (errors && errors.confirmPassword) && <p className="label__errors">{ errors.confirmPassword }</p> }
          </div>
          <div className="registration__form__legalmentions">
            <input name="mentionsChecked" type="checkbox" onChange={(e) => setisLegalMentionsChecked(e.target.checked)} /> J'ai lu et accepté les <Link to="/mentions-legales" target="_blank" className="">mentions légales</Link>
            { (errors && errors.isLegalMentionsChecked && !isLegalMentionsChecked) && <p className="label__errors">{ errors.isLegalMentionsChecked }</p> }
          </div>
          <button type="submit" className="global-button registration__button" disabled={errors ? 'disabled' : ''}>S'inscrire</button>
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
    </motion.div>
  );
};

Registration.propTypes = {
  fetchUserRegistration: PropTypes.func.isRequired,
};

export default Registration;
