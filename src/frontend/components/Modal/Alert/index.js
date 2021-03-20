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
      5000,
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const alertClass = classNames('alert__icon', { 'alert__icon--success': isSuccess });
  return (
    <div className="alert">
      <div className={alertClass}>
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