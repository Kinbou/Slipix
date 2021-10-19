import { useEffect, useRef, useState } from 'react'
import zxcvbn from 'zxcvbn'

import './passwordStrength.scss'

const isTooShort = (password: any, minLength: any) => password.length < minLength

const PasswordStrength = ({
  changeCallback = null,
  className = '',
  defaultValue = '',
  minLength = 5,
  minScore = 2,
  namespaceClassName = 'ReactPasswordStrength',
  // scoreWords = ['Faible', 'Faible', 'OK', 'Bon', 'Super!'],
  // tooShortWord = 'Trop court',
  userInputs = [],
  inputProps,
  style,
  children,
  setFocused,
  onBlur
}: any) => {
  const reactPasswordStrengthInput = useRef()
  const [score, setScore] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    setPassword(defaultValue)
  }, [defaultValue])

  const clear = () => {
    setScore(0)
    setIsValid(false)
    setPassword('')
    // @ts-ignore
    reactPasswordStrengthInput.current.value = ''
    if (changeCallback !== null) {
      // @ts-ignore
      changeCallback('')
    }
  }
  
  const handleChange = () => {
    // @ts-ignore
    const passwordValue = reactPasswordStrengthInput.current.value

    let scoreValue = 0
    let result = null

    if (isTooShort(passwordValue, minLength) === false) {
      result = zxcvbn(passwordValue, userInputs)
      scoreValue = result.score
    }
    setIsValid(scoreValue >= minScore)
    setPassword(passwordValue)
    setScore(scoreValue)
    changeCallback(passwordValue)
  }

  const inputClasses = [`${namespaceClassName}-input`]
  const wrapperClasses = [
    namespaceClassName,
    className ? 'className' : '',
    password.length > 0 ? `is-strength-${score}` : ''
  ]
  // const strengthDesc = isTooShort(password, minLength) ? tooShortWord : scoreWords[score];

  if (isValid === true) {
    inputClasses.push('is-password-valid')
  } else if (password.length > 0) {
    inputClasses.push('is-password-invalid')
  }

  if (inputProps && inputProps.className) {
    inputClasses.push(inputProps.className)
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
        onFocus={setFocused}
        onBlur={onBlur}
      />
      {children}
      {password.length
        ? (
        <i
          onClick={clear}
          style={{
            zIndex: 999,
            color: '#ffaa55',
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          className="fas fa-times"
        />
          )
        : null}
      <div className={`${namespaceClassName}-strength-bar`} />
    </div>
  )
}

export default PasswordStrength
