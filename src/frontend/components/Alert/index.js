import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './alert.scss';

const Alert = ({ message, isSuccess, displayAlert }) => {
  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        displayAlert();
      },
      6000,
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

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  displayAlert: PropTypes.func.isRequired,
};

export default Alert;
