import React, { useId } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import headerCss from './header.module.css';

const Ul = styled.div`
  list-style: none;
  display: contents;

  @media (max-width: 1000px) {
    .menu-background {
      display: ${({ open }: { open: boolean }) => (open ? 'block' : 'none')};
    }
  }
`;

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
		<div className={cx({
			[headerCss['mobile--open']]: open,
			[headerCss.mobile]: display === 'mobile',
		})}>
			{listNav.map((item) => (
				<NavLink
					to={item.link}
					key={item.id}
					className={({isActive}) => 
						cx(headerCss.menuItem, {
							[headerCss['menuItem--active']]: isActive,
						})}
				>
					{item.name}
				</NavLink>
			))}

		</div>
	);
};

export default Menu;
