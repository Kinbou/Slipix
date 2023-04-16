import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
// @ts-ignore
import { useMediaPredicate } from 'react-media-hook';


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
		}
		else {
			(
				displayMenu('burger')
			);
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
								<div className="menu-background" onClick={handleMenuClose}> </div>
								<div className="header__nav__menu__container" onClick={handleMenuClose}>
									<NavLink
										to="/"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}	
									>
                  Accueil
									</NavLink>
									<NavLink
										to="/nouveaute"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  Nouveautés
									</NavLink>
									<NavLink
										to="/guides"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  Guides
									</NavLink>
									<NavLink
										to="/trollpicks"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  Trollpicks
									</NavLink>
									<NavLink
										to="/presentation"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  Présentation
									</NavLink>
									<NavLink
										to="/me-soutenir"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  me soutenir
									</NavLink>
									<a
										href="https://teespring.com/stores/boutique-teamslip"
										target="_blanc"
										className="header__nav__menu__item"
									>
                  Boutique
									</a>
									<NavLink
										to="/me-contacter"
										className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
										// @ts-ignore
										exact={'true'}
									>
                  Me contacter
									</NavLink>
								</div>
							</>
						)}
						<img src={logoSlipix} alt="logo" className="header__nav__logo__picture" />
					</>
				)}
				{!isMobile && (
					<>
						<div className="header__nav__menu">
							<NavLink
								to="/"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              Accueil
							</NavLink>
							<NavLink
								to="/nouveaute"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              Nouveautés
							</NavLink>
							<NavLink
								to="/guides"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact='true'
							>
              Guides
							</NavLink>
							{/* <NavLink
              to="/tutoriels-champions"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact={"true"}
            >
              Tutoriels champions
            </NavLink> */}
							<NavLink
								to="/trollpicks"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              Trollpicks
							</NavLink>
						</div>
						<div className="header__nav__menu">
							<NavLink
								to="/presentation"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              Présentation
							</NavLink>
							<NavLink
								to="/me-soutenir"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              me soutenir
							</NavLink>
							<a
								href="https://teespring.com/stores/boutique-teamslip"
								target="_blanc"
								className="header__nav__menu__item"
							>
              Boutique
							</a>
							<NavLink
								to="/me-contacter"
								className={({isActive}) => isActive ? cx('header__nav__menu__item', 'header__nav__menu__item--active') : 'header__nav__menu__item--active'}
								// @ts-ignore
								exact={'true'}
							>
              Me contacter
							</NavLink>
						</div>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
