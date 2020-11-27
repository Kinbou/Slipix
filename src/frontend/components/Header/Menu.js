import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Modal from 'src/frontend/containers/Modal';
import Authentification from 'src/frontend/containers/Header/Authentification';
import PropTypes from 'prop-types';

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
  // displayModal,
  showModal,
}) =>
  // const handleModal = () => {
  //   displayModal('login');
  // };
  (
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
          >
            Me contacter
          </NavLink>
        </div>
        {/* Si l'utilisateur n'est pas loggé */}
        {/* <div className="header__nav__menu header__nav__menu__two">
          <button
            type="button"
            className="header__nav__account__button"
            title="S'inscrire / Se connecter"
            onClick={handleModal}
          ><i className="fas fa-user"> </i>
          </button>
        </div> */}
      </div>
    </Ul>
  );
Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  // displayModal: PropTypes.func.isRequired,
  showModal: PropTypes.string.isRequired,
};

export default Menu;
