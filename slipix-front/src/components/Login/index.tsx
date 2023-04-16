/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

import { labelClassname, validEmail, urlBack } from '@/utils/selectors';
import { animationOne, transition } from '@/utils/animations/index';
import './login.scss';

interface LoginProps {
  displayModal: (value: string) => void;
  loginUser: ( email: string, password: string, checkedRemember: boolean, checkedCaptcha: string ) => void;
  errorLogin: {[key: string]: string};
}

const Login = ({
	displayModal,
	loginUser,
	errorLogin,
}: LoginProps) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkedRemember, setCheckedRemember] = useState<boolean>(false);
	const [checkedCaptcha, setCheckedCaptcha] = useState<string>('');
	const [errorCaptcha, setErrorCaptcha] = useState<string>('');
	const [errorFront, setErrorFront] = useState({ email: '', password: '' });
	const captchaRef = useRef<any>(null);

	const onExpire = () => {
		setCheckedCaptcha('');
		// captchaRef?.current?.onreset();
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

	const handleSubmit = (event: React.FormEvent) => {
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
						onFocus={() => setErrorFront({ ...errorFront, email: '' })}
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
						onFocus={() => setErrorFront({ ...errorFront, password: '' })}
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
					<ReCAPTCHA
						sitekey="6Le1jp0aAAAAAOUpDSbuRIioKNiPRrqLdX_erLPU"
						className="captcha__content"
						onChange={(response: any): void => setCheckedCaptcha(response)}
						ref={captchaRef}
						theme="dark"
					/>,
					{errorCaptcha && <p>{errorCaptcha}</p>}
				</div>
				<button
					type="submit"
					className="global-button"
					// @ts-ignore
					disabled={
						errorFront.email ||
              errorFront.password ||
              errorCaptcha ||
              !checkedCaptcha
					}
				>Se connecter
				</button>
			</form>
			<button type="button" className="login__link" onClick={handleForgotPasseword}>Mot de passe oublié ?</button>
		</motion.div>
	);
};

export default Login;
