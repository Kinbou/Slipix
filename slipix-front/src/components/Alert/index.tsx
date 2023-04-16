import { useEffect } from 'react';
import classNames from 'classnames';
import './alert.scss';

interface AlertProps {
	message: string;
	isSuccess: boolean;
	displayAlert: () => void;
}

const Alert = ({ message, isSuccess, displayAlert }: AlertProps) => {
	useEffect(() => {
		const timeoutId = setTimeout(
			() => {
				displayAlert();
			},
			4900,
		);
		return () => {
			clearTimeout(timeoutId);
		};
	}, []);
	const alertIcon = classNames('alert__icon', { 'alert__icon--success': isSuccess });
	const alertCard = classNames('alert', { 'alert--success': isSuccess });
	return (
		<div className={alertCard}>
			<div className={alertIcon}>
				{!isSuccess && <i className="fas fa-exclamation" />}
				{isSuccess && <i className="fas fa-check" />}
			</div>
			<p>{message}</p>
		</div>
	);
};

export default Alert;
