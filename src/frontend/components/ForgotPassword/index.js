/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { labelClassname, validEmail } from 'src/utils/selectors';
import './forgotpassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    let dataError = {};
    if (!validEmail(email)) {
      console.log('passage dans la fonction');
      dataError.email = '*L\'email est invalide';
      setErrors(dataError);
    }
  };

  const removeError = (key) => {
    if (errors && errors[key]) {
      delete errors[key];
      setErrors(errors);
    }
  };
  return (
    <div className="forgotpassword">
      <h1>Réinitialisation du mot de passe</h1>
      <p className="forgotpassword__text1">Vous avez oublié votre mot de passe ?</p>
      <p className="forgotpassword__text2">Indiquez-nous votre adresse email et nous procéderons à la réinitialisation de votre mot de passe.</p>
      <form className="forgotpassword__form" onSubmit={handleSubmit}>
        <div className="global-input">
          <input
            name="email"
            type="text"
            className={errors && errors.email ? 'inputAnimation inputAnimation--errors' : 'inputAnimation'}
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => removeError('email')}
          />
          <label className={labelClassname(email)}>Adresse email</label>
          {errors && errors.email && (<p className="label__errors">{errors.email}</p>)}
        </div>
        <button type="submit" className="global-button">Faire la demande</button>
      </form>
    </div>
  );
};

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ForgotPassword;
