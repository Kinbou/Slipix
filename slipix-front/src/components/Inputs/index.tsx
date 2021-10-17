/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useClickOutside from '@/hooks/useClickOutside';


const index = ({
  type,
  value = '',
  name,
  onChange,
  onCancel,
  classNames,
  setFocused,
  onFocus,
  onBlur,
}: any): React.ReactElement => {
  const elementRef = useRef();
  const inputRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const onClose = (): void => {
    if (onBlur) {
      onBlur();
    }
    if (type === 'password' && showPassword) setShowPassword(false);
    setDisabled(true);
  };

  const doCancel = () => {
    onCancel();
    onClose();
  };

  // Permet d'auto focus le input
  useEffect(() => {
    if (showPassword || !showPassword || !disabled) {
      // @ts-ignore
      inputRef.current.focus();
      // Permets de mettre le curseur à la fin du input
      // @ts-ignore
      if (['password', 'text', 'search', 'url', 'tel'].includes(type.toLowerCase()) && value) inputRef.current.setSelectionRange(value.length, value.length);
    }
  }, [disabled, showPassword]);

  useClickOutside(elementRef, () => onClose()); // Le ref de la div parent

  return (
    // @ts-ignore
    <div ref={elementRef}>
      {' '}
      <input
        // @ts-ignore
        ref={inputRef}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        className={[classNames.join(' '), disabled ? '' : 'account-profil__container__label__disabled'].join(' ')}
        disabled={disabled}
        onFocus={onFocus}
      />
      {!disabled ? (
        <>
          {type === 'password' && (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="account-profil__container__label__button"
            >
              {showPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
            </button>
          )}
          <button
            onClick={doCancel}
            type="button"
            className="account-profil__container__label__button"
          ><i className="fas fa-times" />
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            if (setFocused)setFocused();
            setDisabled(false);
          }}
          type="button"
          className="account-profil__container__label__button"
        ><i className="fas fa-pen" />
        </button>
      )}
    </div>
  );
};

index.defaultProps = {
  setFocused: null,
  onFocus: null,
  onBlur: null,
};

index.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.array.isRequired,
  setFocused: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default index;
