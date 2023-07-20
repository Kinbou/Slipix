import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
// @ts-ignore
import { useMediaPredicate } from 'react-media-hook';

import Menu from './Menu';


import logoSlipix from '@/assets/images/SlipixLogo.png';
import './header.scss';

const Header = ({
	showMenu,
	displayMenu,
}: any): React.ReactElement => {
	const isMobile = useMediaPredicate('(max-width: 1024px)');

	const handleMenuClose = () => {
		displayMenu('');
	};

	const handleMenuBurger = () => {
		if (showMenu === 'burger') {
			handleMenuClose();
		} else {
			displayMenu('burger');
		}
	};

	return (
		<header className="header">
			<nav className="header__nav">
				{isMobile && (
					<>
						{/* @ts-ignore */}
						<button type="button" 								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'} onClick={handleMenuBurger}>
							<i className="fas fa-bars"></i></button>
						{showMenu === 'burger' && (
							<>
								<div className="menu-background" onClick={handleMenuClose} />
								<div className="header__nav__menu__container" onClick={handleMenuClose}>
									<Menu />
								</div>
							</>
						)}
						<img src={logoSlipix} alt="logo" className="header__nav__logo__picture" />
					</>
				)}
				{!isMobile && (
					<Menu />
				)}
			</nav>
		</header>
	);
};

export default Header;
