import React, { useEffect, useRef, useState } from 'react';
import zxcvbn from 'zxcvbn';
import PropTypes from 'prop-types';
import './passwordStrength.scss';

const isTooShort = (password, minLength) => password.length < minLength;

const PasswordStrength = ({
  changeCallback = null,
  className = '',
  defaultValue = '',
  minLength = 5,
  minScore = 2,
  namespaceClassName = 'ReactPasswordStrength',
  scoreWords = ['Faible', 'Faible', 'OK', 'Bon', 'Super!'],
  tooShortWord = 'Trop court',
  userInputs = [],
  inputProps,
  style,
  children,
}) => {
  const reactPasswordStrengthInput = useRef();
  const [score, setScore] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (defaultValue.length > 0) {
      setPassword(defaultValue);
    }
  }, []);

  const clear = () => {
    setScore(0);
    setIsValid(false);
    setPassword('');
    reactPasswordStrengthInput.current.value = '';
    if (changeCallback !== null) {
      changeCallback('');
    }
  };

  const handleChange = () => {
    const passwordValue = reactPasswordStrengthInput.current.value;

    let scoreValue = 0;
    let result = null;

    if (isTooShort(passwordValue, minLength) === false) {
      result = zxcvbn(passwordValue, userInputs);
      scoreValue = result.score;
    }
    setIsValid(scoreValue >= minScore);
    setPassword(passwordValue);
    setScore(scoreValue);
    changeCallback(passwordValue);
  };

  const inputClasses = [`${namespaceClassName}-input`];
  const wrapperClasses = [
    namespaceClassName,
    className ? 'className' : '',
    password.length > 0 ? `is-strength-${score}` : '',
  ];
  const strengthDesc = isTooShort(password, minLength) ? tooShortWord : scoreWords[score];

  if (isValid === true) {
    inputClasses.push('is-password-valid');
  }
  else if (password.length > 0) {
    inputClasses.push('is-password-invalid');
  }

  if (inputProps && inputProps.className) {
    inputClasses.push(inputProps.className);
  }

  return (
    <div className={wrapperClasses.join(' ')} style={style}>
      <input
        type="password"
        {...inputProps}
        className={inputClasses.join(' ')}
        onChange={handleChange}
        ref={reactPasswordStrengthInput}
        value={password}
      />
      {children}
      {password.length ? (
        <i
          onClick={clear}
          style={{
            zIndex: 999,
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
          className="fas fa-times"
        />
      ) : null}
      <div className={`${namespaceClassName}-strength-bar`} />
      {/* <span className={`${namespaceClassName}-strength-desc`}>{strengthDesc}</span> */}
    </div>
  );
};

PasswordStrength.propTypes = {
  changeCallback: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  inputProps: PropTypes.object.isRequired,
  minLength: PropTypes.number.isRequired,
  minScore: PropTypes.number.isRequired,
  namespaceClassName: PropTypes.string.isRequired,
  scoreWords: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  tooShortWord: PropTypes.string.isRequired,
  userInputs: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default PasswordStrength;
