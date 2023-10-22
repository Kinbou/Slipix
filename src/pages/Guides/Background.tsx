import { PropsWithChildren } from 'react';
import cx from 'classnames';

type BackgroundProps = PropsWithChildren<{
	title?: string,
	iconName?: React.ReactNode,
	color?: string,
}>

const Background = ({ children, title, iconName, color = 'gold' }: BackgroundProps) => {
	return (
		<div className="bg-bgGuide rounded-md p-2em flex flex-col items-center text-center my-1em w-80%">
			<div className={`text-${color} flex items-center mb-2em`}>{iconName && <i className={cx(`${iconName} text-1.8rem mr-.5em`)} />}{title && <h2 className='h2'>{title}</h2>}{iconName && <i className={cx(`${iconName} text-1.8rem ml-.5rem`)} />}</div>
			{children}
		</div>
	);
};

export default Background;
