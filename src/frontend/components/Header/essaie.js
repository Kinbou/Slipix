import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import PropTypes from 'prop-types';

import './header.scss';

import logoSlipix from 'src/assets/images/SlipixLogo.png';

const Header = ({
  showMenu,
  displayMenu,
}) => {
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
            <button type="button" className="header__nav__menu__burger" onClick={handleMenuBurger} activeClassName="header__nav__menu__item--active"><i className="fas fa-bars"> </i></button>
            {showMenu === 'burger' && (
            <>
              <div className="menu-background" onClick={handleMenuClose}> </div>
              <div className="header__nav__menu__container" onClick={handleMenuClose}>
                <NavLink
                  to="/"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Accueil
                </NavLink>
                <NavLink
                  to="/nouveaute"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Nouveautés
                </NavLink>
                <NavLink
                  to="/guides"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Guides
                </NavLink>
                <NavLink
                  to="/tutoriels-champions"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Tutoriels champions
                </NavLink>
                <NavLink
                  to="/trollpicks"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Trollpicks
                </NavLink>
                <NavLink
                  to="/presentation"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
                >
                  Présentation
                </NavLink>
                <NavLink
                  to="/me-soutenir"
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
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
                  className="header__nav__menu__item"
                  activeClassName="header__nav__menu__item--active"
                  exact
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
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Accueil
            </NavLink>
            <NavLink
              to="/nouveaute"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Nouveautés
            </NavLink>
            <NavLink
              to="/guides"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Guides
            </NavLink>
            <NavLink
              to="/tutoriels-champions"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Tutoriels champions
            </NavLink>
            <NavLink
              to="/trollpicks"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Trollpicks
            </NavLink>
          </div>
          <div className="header__nav__menu">
            <NavLink
              to="/presentation"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
            >
              Présentation
            </NavLink>
            <NavLink
              to="/me-soutenir"
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
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
              className="header__nav__menu__item"
              activeClassName="header__nav__menu__item--active"
              exact
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

Header.propTypes = {
  showMenu: PropTypes.string.isRequired,
  displayMenu: PropTypes.func.isRequired,
};

export default Header;
