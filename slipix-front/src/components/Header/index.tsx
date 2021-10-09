import React from 'react'
import cx from 'classnames'

import logoSlipix from '@/assets/images/SlipixLogo.png'
import Burger from './Burger'

import classes from './header.module.scss'

const Header = () => (
  <header className={classes.header}>
    <nav className={cx(classes.header__nav, classes.active)}>
      <img src={logoSlipix} alt="logo" className={classes.header__logo} />
      <Burger />
    </nav>
  </header>
)

export default Header
