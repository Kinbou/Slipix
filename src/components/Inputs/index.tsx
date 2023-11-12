import React, { useState, useRef, useEffect } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

interface InputsProps {
	type: string;
	value: string;
	name: string;
	onChange: () => void;
	onCancel: () => void;
	classNames: any;
	setFocused: () => void;
	onFocus: () => void;
	onBlur: () => void;
}

const Inputs = ({
	type,
	value = '',
	name,
	onChange,
	onCancel,
	classNames,
	setFocused,
	onFocus,
	onBlur,
}: InputsProps): React.ReactElement => {
	const elementRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [disabled, setDisabled] = useState<boolean>(true);
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
			inputRef?.current?.focus();
			if (['password', 'text', 'search', 'url', 'tel'].includes(type.toLowerCase()) && value) inputRef?.current?.setSelectionRange(value.length, value.length);
		}
	}, [disabled, showPassword]);

	useClickOutside(elementRef, () => onClose());

	return (
		<div ref={elementRef}>
			{' '}
			<input
				ref={inputRef}
				type={showPassword ? 'text' : type}
				value={value}
				onChange={onChange}
				name={name}
				className={[classNames?.join(' '), disabled ? '' : 'account-profil__container__label__disabled'].join(' ')}
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

Inputs.defaultProps = {
	setFocused: null,
	onFocus: null,
	onBlur: null,
};

export default Inputs;
