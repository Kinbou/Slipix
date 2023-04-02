import React from 'react';
import classNames from 'classnames';

import Reconstruction from '@components/Reconstruction';
import { urlBack } from '@/utils/selectors';
import './header.scss';
// import styles from './header.module.scss'

const Authentification = ({ showModal, displayModal }: any) => {
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

			{showModal === 'login' && (<Reconstruction />)}
			{showModal === 'registration' && (<Reconstruction />)}
			{showModal === 'forgotPassword' && (<Reconstruction />)}

		</>
	);
};

export default Authentification;
