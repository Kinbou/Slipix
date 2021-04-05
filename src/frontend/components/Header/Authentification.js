import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Login from 'src/frontend/containers/Login';
import Registration from 'src/frontend/containers/Registration';
import ForgotPassword from 'src/frontend/components/ForgotPassword';
import { urlBack } from 'src/utils/selectors';

const Authentification = ({ showModal, displayModal }) => {
  const handleLogin = () => {
    displayModal('login');
  };
  const handleRegistration = () => {
    displayModal('registration');
  };

  const loginClass = classNames('authentification__nav__item', { 'authentification__nav__item--active': showModal === 'login' });
  const registrationClass = classNames('authentification__nav__item', { 'authentification__nav__item--active': showModal === 'registration' });

  return (
    <>
      <nav className="authentification__nav">
        <div className="authentification__nav__content">
          <img
            src={`${urlBack}/images/logo/authentification/logo_login.png`}
            alt=""
            className="authentification__nav__content__picture authentification__nav__content__picture--login"
          />
          <img
            src={`${urlBack}/images/logo/authentification/logo_registration.png`}
            alt=""
            className="authentification__nav__content__picture authentification__nav__content__picture--registration"
          />
          <button type="button" className={loginClass} onClick={handleLogin}>Connexion</button>
          <button type="button" className={registrationClass} onClick={handleRegistration}>Inscription</button>
        </div>
      </nav>

      {showModal === 'login' && (<Login />)}
      {showModal === 'registration' && (<Registration />)}
      {showModal === 'forgotPassword' && (<ForgotPassword />)}

    </>
  );
};

Authentification.propTypes = {
  showModal: PropTypes.string.isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default Authentification;
