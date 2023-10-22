import { PropsWithChildren } from 'react';
import cx from 'classnames';

export type ButtonProps = PropsWithChildren<{
  category: 'primary' | 'youtube' | 'twitch' | 'discord';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  key?: string;
}>;

const Button = (props: ButtonProps) => {
	return (
		<button
			className={cx('button', {
				['buttonPrimary']: props.category === 'primary',
				['buttonYoutube']: props.category === 'youtube',
				['buttonTwitch']: props.category === 'twitch',
				['buttonDiscord']: props.category === 'discord',
			})}
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
