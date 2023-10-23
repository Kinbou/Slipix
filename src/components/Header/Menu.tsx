import React, { useId } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import headerCss from './header.module.css';

const Menu = ({ display, open }: { display?: string, open?: boolean }): React.ReactElement => {

	interface ListNavProps {
		link: string,
		name: string,
		id: string,
	}

	const listNav: ListNavProps[] = [
		{
			link: '/',
			name: 'Accueil',
			id: useId(),
		},
		{
			link: '/trollpicks',
			name: 'Trollpicks',
			id: useId(),
		},
		{
			link: '/guides',
			name: 'Guides',
			id: useId(),
		},
		{
			link: '/presentation',
			name: 'Présentation',
			id: useId(),
		},
		{
			link: '/me-soutenir',
			name: 'Me soutenir',
			id: useId(),
		},
		{
			link: '/me-contacter',
			name: 'Me contacter',
			id: useId(),
		},
	];

	return (
		<div className={cx('text',{
			[headerCss['mobile--open']]: open,
			[headerCss.mobile]: display === 'mobile',
		})}>
			{listNav.map((item) => (
				<NavLink
					to={item.link}
					key={item.id}
					className={({isActive}) => 
						cx({
							['text-gold']: isActive,
							[headerCss.menuItem]: display === undefined,
						})}
				>
					{item.name}
				</NavLink>
			))}

		</div>
	);
};

export default Menu;
