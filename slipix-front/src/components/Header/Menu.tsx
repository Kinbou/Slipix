import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

// import Authentification from '@containers/Header/Authentification'

import classes from './header.module.scss';

const Ul = styled.ul`
  list-style: none;
  display: contents;

  @media (max-width: 1000px) {
    .header__nav__menu {
      transform: ${({ open }: any) => (open ? 'translateX(-100%)' : 'translateX(100%)')};
    }
    .menu-background {
      display: ${({ open }: any) => (open ? 'block' : 'none')};
    }
  }
`;

const Menu = ({
	open,
	setOpen,
}: any): React.ReactElement => {

	const handleClassActive = () => {
		// @ts-ignore
		document.getElementsByClassName(classes.authentification__nav__profil__avatar__image).className = cx(classes.authentification__nav__profil__avatar__image, classes['authentification__nav__profil__avatar__image--active']);
	};

	return (
	// @ts-ignore
		<Ul open={open}>
			<div className={classes.menuBackground} onClick={() => setOpen(!open)}> </div>
			<div className={cx(classes.header__nav__global, { [classes['header__nav__global--open']]: open })}>
				{/* {['login', 'registration', 'forgotPassword'].includes(showModal) && (
          <Modal content={<Authentification />} />
        )} */}
				<div className={cx(classes.header__nav__menu, classes.header__nav__menu__one)}>
					<NavLink
						to="/"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						// @ts-ignore
						exact={'true'}
						onClick={() => setOpen(!open)}
					>
            Accueil
					</NavLink>
					<NavLink
						to="/trollpicks"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						// @ts-ignore
						exact={'true'}
						onClick={() => setOpen(!open)}
					>
            Trollpicks
					</NavLink>
					<NavLink
						to="/guides"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						// @ts-ignore
						exact={'true'}
						onClick={() => setOpen(!open)}
					>
            Guides
					</NavLink>
					<NavLink
						to="/presentation"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						// @ts-ignore
						exact={'true'}
						onClick={() => setOpen(!open)}
					>
            Présentation
					</NavLink>
					<NavLink
						to="/me-soutenir"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						// @ts-ignore
						exact={'true'}
						onClick={() => setOpen(!open)}
					>
            me soutenir
					</NavLink>
					<NavLink
						to="/me-contacter"
						className={({isActive}) => isActive ? cx(classes.menu__link, classes['menu__link--active']) : classes.menu__link}
						exact={'true'}
						onClick={() => setOpen(!open)}
						// @ts-ignore
						onChange={handleClassActive()}
					>
            Me contacter
					</NavLink>
				</div>
			</div>
		</Ul>
	);
};

export default Menu;
