import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useClickOutside from 'src/hooks/useClickOutside';

const index = ({
  type,
  value,
  setValue,
  name,
  classNames,
  cancel,
  disabled = true,
}) => {
  const inputRef = useRef();
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [showPassword, setShowPassword] = useState(false);
  const onValueChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setIsDisabled(true);
    if (showPassword) {
      setShowPassword(false);
    }
  };
  const showHidePassword = () => {
    if (showPassword) {
      return 'text';
    }
    return 'password';
  };
  const editCloseButton = () => {
    console.log('EDIT =>', isDisabled);
    if (isDisabled) {
      setIsDisabled(false);
    }
    else {
      cancel(name);
    }
  };
  useClickOutside(inputRef, reset);

  return (
    <>
      <input
        ref={inputRef}
        type={type === 'password' ? showHidePassword() : type}
        value={value}
        onChange={onValueChange}
        name={name}
        className={[classNames.join(' '), isDisabled ? '' : 'account-profil__container__label__disabled'].join(' ')}
        disabled={isDisabled}
      />
      {type === 'password' && (
        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setShowPassword(!showPassword)} />
      )}
      <i
        className={isDisabled ? 'fas fa-pen' : 'fas fa-times'}
        onClick={editCloseButton}
      />
    </>
  );
};

index.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired,
};


export default index;
