/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './profil.scss';
import InputProfil from 'src/frontend/components/Inputs';
import Modal from 'src/frontend/containers/Modal';
import Upload from 'src/frontend/components/Modal/Upload';

const Profil = ({ user, showModal, displayModal }) => {
  const [lastName, setLastName] = useState('nom');
  const [firstName, setFirstName] = useState('prénom');
  const [pseudo, setPseudo] = useState('pseudo');
  const [email, setEmail] = useState('email');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const cancelInput = (name) => {
    switch (name) {
      case 'lastname':
        setLastName(user?.name);
        break;
      default:
        break;
    }
  };

  const handleClickUpload = () => {
    console.log('je passe dans la fonction');
    displayModal('upload');
  };

  return (
    <div className="wrapper account-profil">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__link">Accueil</Link> &gt; Mon profil
      </div>

      {showModal === 'upload' && <Modal content={<Upload />} />}

      <h1 className="globalTitle-page">Mon profil</h1>
      <form className="account-profil__form">
        <div className="account-profil__person">
          <div className="account-profil__person__avatar" onClick={handleClickUpload}>
            <img src="https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/akali/akali.jpg" alt="Avatar" />
            <i className="fas fa-image account-profil__person__avatar__icon " />
          </div>
          <div className="account-profil__person__avatar__content">
            <p className="account-profil__person__avatar__content__name">Jennifer Bouquin</p>
          </div>
        </div>
        <div className="account-profil__container">

          <div className="account-profil__infos">
            <h2 className="account-profil__subtitle">Informations personnelles</h2>

            <label className="account-profil__container__label">
              <span>Nom</span>
              <div>
                <InputProfil
                  type="text"
                  value={lastName}
                  setValue={(val) => setLastName(val)}
                  name="lastname"
                  classNames={['global-input']}
                  disabled
                  cancel={cancelInput}
                />
              </div>
            </label>

            <label className="account-profil__container__label">
              <span>Prénom</span>
              <div>
                <InputProfil
                  type="text"
                  value={firstName}
                  setValue={(val) => setFirstName(val)}
                  name="firstname"
                  classNames={['global-input']}
                  disabled
                />
              </div>
            </label>
            <label className="account-profil__container__label">
              <span>Pseudo</span>
              <div>
                <InputProfil
                  type="text"
                  value={pseudo}
                  setValue={(val) => setPseudo(val)}
                  name="pseudo"
                  classNames={['global-input']}
                  disabled
                />
              </div>
            </label>
            <label className="account-profil__container__label">
              <span>Adresse email</span>
              <div>
                <InputProfil
                  type="email"
                  value={email}
                  setValue={(val) => setEmail(val)}
                  name="email"
                  classNames={['global-input']}
                  disabled
                />
              </div>
            </label>
          </div>
        </div>
        <div className="account-profil__container">
          <h2 className="account-profil__subtitle">Mot de passe</h2>
          <label className="account-profil__container__label">
            <span>Mot de passe actuel</span>
            <div>
              <InputProfil
                type="password"
                value={currentPassword}
                setValue={(val) => setCurrentPassword(val)}
                name="currentPassword"
                classNames={['global-input']}
                disabled
              />
            </div>
          </label>
          <label className="account-profil__container__label">
            <span>Nouveau mot de passe</span>
            <div>
              <InputProfil
                type="password"
                value={newPassword}
                setValue={(val) => setNewPassword(val)}
                name="newPassword"
                classNames={['global-input']}
                disabled
              />
            </div>
          </label>
          <label className="account-profil__container__label">
            <span>Confirmation du nouveau mot de passe</span>
            <div>
              <InputProfil
                type="password"
                value={newPassword}
                setValue={(val) => setNewPassword(val)}
                name="newPassword"
                classNames={['global-input']}
                disabled
              />
            </div>
          </label>
        </div>

        <button type="submit" className="account-profil__submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};

Profil.propTypes = {
  showModal: PropTypes.string.isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default Profil;
