export interface ButtonProps {
  category: 'primary' | 'secondary' | 'tertiary' | 'link' | 'transparent';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  key?: string;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className='button'
			type={props.type}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

const defaultProps = {
	className: undefined,
	category: 'primary',
	onClick: undefined,
	disabled: false,
	type: 'button',
};

Button.defaultProps = defaultProps;

export default Button;
