/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { labelClassname, validEmail } from 'src/utils/selectors';
import { animationOne, transition } from 'src/utils/animations';
import PasswordStrength from 'src/utils/passwordLength';
import './registration.scss';

const Registration = ({ fetchUserRegistration, errorsRegistration }) => {
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLegalMentionsChecked, setisLegalMentionsChecked] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (errorsRegistration) {
      let dataErrors = '';
      if (errorsRegistration.email) {
        dataErrors = ({ ...dataErrors, email: errorsRegistration.email[0] });
      }
      if (errorsRegistration.pseudo) {
        dataErrors = ({ ...dataErrors, pseudo: errorsRegistration.pseudo[0] });
      }
      setErrors(dataErrors);
    }
  }, [errorsRegistration]);

  const handleRegistration = (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    if (!email && !pseudo && !password && !confirmPassword && !isLegalMentionsChecked) {
      setErrors({
        ...errors,
        email: '*Ton email est requis',
        pseudo: '*Ton pseudo est requis',
        password: 'ton mot de passe est requis',
        confirmPassword: 'Ta confirmation de password doit être identique à ton mdp',
        isLegalMentionsChecked: 'Tu dois accepter les mentions légales',
      });
      return;
    }
    if (!email.length || !pseudo.length || !password.length || !confirmPassword.length || isLegalMentionsChecked === false) {
      let dataError = '';
      if (!email.length) {
        dataError = { ...dataError, email: '*Ton email est requis' };
      }
      if (!pseudo.length) {
        dataError = { ...dataError, pseudo: '*Ton pseudo est requis' };
      }
      if (!password.length) {
        dataError = { ...dataError, password: '*Ton mot de passe est requis' };
      }
      if (!confirmPassword.length) {
        dataError = { ...dataError, confirmPassword: '*La confirmation de ton mot de passe est requis' };
      }
      if (isLegalMentionsChecked === false) {
        dataError = { ...dataError, isLegalMentionsChecked: '*Tu dois accepter les mentions légales' };
      }
      setErrors(dataError);
      return;
    }
    if (pseudo.length <= 2) {
      setErrors({ ...errors, pseudo: '*Ton pseudo est requis' });
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: 'Ton mot de passe est requis' });
    }

    if (confirmPassword !== password) {
      setErrors({ ...errors, confirmPassword: 'Ta confirmation de password doit être identique à ton mdp' });
    }

    if (Object.keys(errors).length) {
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
      delete errors[key];
      setErrors(errors);
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
          <button
            type="submit"
            className={`${Object.keys(errors).length !== 0 ? 'registration__button registration__button--disabled' : 'registration__button registration__button--actived'}`}
            disabled={Object.keys(errors).length !== 0}
          >S'inscrire
          </button>
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
  errorsRegistration: PropTypes.objectOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
};

export default Registration;
