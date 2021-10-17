import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Modal from '@containers/Modal/index'
import Authentification from '@containers/Header/Authentification'
import { urlBack } from '@/utils/selectors'

import classes from './header.module.scss'

const Ul = styled.ul`
  list-style: none;
  display: contents;

  @media (max-width: 1000px) {
    .header__nav__menu {
      transform: ${({ open }: any) => (open ? 'translateX(0)' : 'translateX(100%)')};
    }
    .menu-background {
      display: ${({ open }: any) => (open ? 'block' : 'none')};
    }
  }
`

const Menu = ({
  open,
  setOpen,
  displayModal,
  showModal,
  user,
  requestUserAuthentification,
  logoutUser
}: any): React.ReactElement => {
  useEffect(() => {
    requestUserAuthentification()
  }, [])

  const [classActive, setClassActive] = useState(false)
  const test = useRef(null)
  const handleModal = () => {
    const button = test.current
    // @ts-ignore
    displayModal('login', button.getBoundingClientRect())
  }

  const handleLogout = () => {
    logoutUser()
  }

  const handleClassActive = () => {
    // @ts-ignore
    document.getElementsByClassName(classes.authentification__nav__profil__avatar__image).className = cx(classes.authentification__nav__profil__avatar__image, classes['authentification__nav__profil__avatar__image--active'])
  }

  return (
    // @ts-ignore
    <Ul open={open}>
      <div className={classes.menuBackground} onClick={() => setOpen(!open)}> </div>
      <div className={classes.header__nav__global}>
        {['login', 'registration', 'forgotPassword'].includes(showModal) && (
          <Modal content={<Authentification />} />
        )}
        <div className={cx(classes.header__nav__menu, classes.header__nav__menu__one)}>
          <NavLink
            to="/"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/nouveaute"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Nouveautés
          </NavLink>
          <NavLink
            to="/guides"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Guides
          </NavLink>
          <NavLink
            to="/tutoriels-champions"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Tutoriels champions
          </NavLink>
          <NavLink
            to="/trollpicks"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Trollpicks
          </NavLink>
          <NavLink
            to="/presentation"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/me-soutenir"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
          >
            me soutenir
          </NavLink>
          <a
            href="https://teespring.com/stores/boutique-teamslip"
            target="_blanc"
            className={classes.menu__link}
          >
            Boutique
          </a>
          <NavLink
            to="/me-contacter"
            className={classes.menu__link}
            activeClassName={classes['menu__link--active']}
            exact
            onClick={() => setOpen(!open)}
            // @ts-ignore
            onChange={handleClassActive()}
          >
            Me contacter
          </NavLink>
        </div>
        <div className={cx(classes.header__nav__menu, classes.header__nav__menu__two)}>
          {user
            ? (
            <div className={classes.authentification__nav__profil}>
              <p className={classes.authentification__nav__profil__content}>Slip {user.pseudo}</p>
              <div className={classes.authentification__nav__profil__avatar}>
                <img
                  className={classes.authentification__nav__profil__avatar__image}
                  src={`${urlBack}/${user.avatar}`}
                  alt="avatar"
                  onClick={() => {
                    setClassActive(!classActive)
                  }}
                />
                <div className={classes.authentification__nav__profil__avatar__dropdownList}>
                  <Link to="/profil">Mon Profil</Link>
                  <Link to="" className={classes.authentification__nav__profil__dropdownList__list} onClick={() => handleLogout()}>Se déconnecter</Link>
                </div>
              </div>
            </div>
              )
            : (
              <button
                type="button"
                ref={test}
                className={classes.header__nav__account__button}
                title="S'inscrire / Se connecter"
                onClick={handleModal}
              ><i className="fas fa-user" />
              </button>
              )}
        </div>
      </div>
    </Ul>
  )
}

export default Menu
