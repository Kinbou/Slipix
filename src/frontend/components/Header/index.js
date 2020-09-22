import React from 'react';

import logoSlipix from 'src/assets/images/SlipixLogo.png';
import Burger from './Burger';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav className="header__nav active">
      <img src={logoSlipix} alt="logo" className="header__nav__logo__picture" />
      <Burger />
    </nav>
  </header>
);

export default Header;
