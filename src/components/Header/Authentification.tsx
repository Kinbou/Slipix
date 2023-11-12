import classNames from 'classnames';

import { urlBack } from '@/utils/selectors';
import './header.scss';
// import styles from './header.module.scss'

interface AuthenticationProps {
	showModal: string;
	displayModal: (value: string) => void;
}

const Authentification = ({ showModal, displayModal }: AuthenticationProps) => {
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


		</>
	);
};

export default Authentification;
