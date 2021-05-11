import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Modal from 'src/frontend/containers/Modal';
import Authentification from 'src/frontend/containers/Header/Authentification';
import PropTypes from 'prop-types';
import { urlBack } from 'src/utils/selectors';

const Ul = styled.ul`
  list-style: none;
  display: contents;

  @media (max-width: 1000px) {
    .header__nav__menu {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    }
    .menu-background {
      display: ${({ open }) => (open ? 'block' : 'none')};
    }
  }
`;

const Menu = ({
  open,
  setOpen,
  displayModal,
  showModal,
  user,
  requestUserAuthentification,
  logoutUser,
}) => {
  useEffect(() => {
    requestUserAuthentification();
  }, []);

  const [classActive, setClassActive] = useState(false);
  const test = useRef(null);
  const handleModal = () => {
    const button = test.current;
    displayModal('login', button.getBoundingClientRect());
  };

  const handleLogout = () => {
    logoutUser();
  };

  const handleClassActive = () => {
    document.getElementsByClassName('authentification__nav__profil__avatar__image').className = 'authentification__nav__profil__avatar__image authentification__nav__profil__avatar__image--active';
  };

  return (
    <Ul open={open}>
      <div className="menu-background" onClick={() => setOpen(!open)}> </div>
      <div className="header__nav__global">
        {['login', 'registration', 'forgotPassword'].includes(showModal) && (
        <Modal content={<Authentification />} />
        )}
        <div className="header__nav__menu header__nav__menu__one">
          <NavLink
            to="/"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/nouveaute"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Nouveautés
          </NavLink>
          <NavLink
            to="/guides"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Guides
          </NavLink>
          <NavLink
            to="/tutoriels-champions"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Tutoriels champions
          </NavLink>
          <NavLink
            to="/trollpicks"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Trollpicks
          </NavLink>
          <NavLink
            to="/presentation"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/me-soutenir"
            className="header__nav__menu__item"
            activeClassName="header__nav__menu__item--active"
            exact
            onClick={() => setOpen(!open)}
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
            onClick={() => setOpen(!open)}
            onChange={handleClassActive()}
          >
            Me contacter
          </NavLink>
        </div>
        <div className="header__nav__menu header__nav__menu__two">
          {user ? (
            <div className="authentification__nav__profil">
              <p className="authentification__nav__profil__content">Slip {user.pseudo}</p>
              <div className="authentification__nav__profil__avatar">
                <img
                  className="authentification__nav__profil__avatar__image"
                  src={`${urlBack}/${user.avatar}`}
                  alt="avatar"
                  onClick={() => {
                    setClassActive(!classActive);
                  }}
                />
                <div className="authentification__nav__profil__avatar__dropdownList">
                  <Link to="/profil">Mon Profil</Link>
                  <Link to="" className="authentification__nav__profil__dropdownList__list" onClick={() => handleLogout()}>Se déconnecter</Link>
                </div>
              </div>
            </div>
          )
            : (
              <button
                type="button"
                ref={test}
                className="header__nav__account__button"
                title="S'inscrire / Se connecter"
                onClick={handleModal}
              ><i className="fas fa-user" />
              </button>
            )}
        </div>
      </div>
    </Ul>
  );
};
Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  displayModal: PropTypes.func.isRequired,
  showModal: PropTypes.string.isRequired,
  requestUserAuthentification: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      pseudo: PropTypes.string,
    }),
  ),
};

Menu.defaultProps = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: '',
      pseudo: '',
    }),
  ),
};

export default Menu;
