import React, { useEffect } from 'react';
import classNames from 'classnames';
import './alert.scss';

const Alert = ({ message, isSuccess, displayAlert }: any) => {
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
