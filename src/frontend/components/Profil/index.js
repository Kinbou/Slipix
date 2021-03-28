/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './profil.scss';
import InputProfil from 'src/frontend/components/Inputs';
import Modal from 'src/frontend/containers/Modal';
import Upload from 'src/frontend/components/Modal/Upload';

const Profil = ({
  user,
  showModal,
  displayModal,
  updateUser,
}) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar);
      setPseudo(user.pseudo);
      setEmail(user.email);
    }
  }, [user]);

  const handleClickUpload = () => {
    displayModal('upload');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('passage dans le handleSubmit');
    const data = {};
    if (pseudo !== user.pseudo && pseudo.length > 3) {
      data.pseudo = pseudo;
    }
    if (name !== user.name) {
      data.name = name;
    }
    // if (avatar !== user.avatar) {
    //   data.avatar = avatar;
    // }
    // email en stand by
    if (newPassword.length >= 6 && currentPassword.length >= 6 && newPassword === confirmNewPassword) {
      data.password = currentPassword;
      data.newPassword = newPassword;
      data.confirmNewPassword = confirmNewPassword;
    }
  };

  return (
    <div className="wrapper account-profil">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__link">Accueil</Link> &gt; Mon profil
      </div>

      {showModal === 'upload' && <Modal avatar={avatar} content={<Upload />} />}

      <h1 className="globalTitle-page">Mon profil</h1>
      {user && (
        <form className="account-profil__form" onSubmit={handleSubmit}>
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
                <span>Prénom</span>
                <div>
                  <InputProfil
                    type="text"
                    value={name}
                    setValue={(val) => setName(val)}
                    name="name"
                    classNames={['global-input']}
                    onChange={setName}
                    onCancel={() => setName(user.name)}
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
                    onChange={setPseudo}
                    onCancel={() => setPseudo(user.pseudo)}
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
                    onChange={setEmail}
                    onCancel={() => setEmail(user.email)}
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
                  onChange={setCurrentPassword}
                  onCancel={() => setCurrentPassword('')}
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
                  onChange={setNewPassword}
                  onCancel={() => setNewPassword('')}
                  disabled
                />
              </div>
            </label>
            <label className="account-profil__container__label">
              <span>Confirmation du nouveau mot de passe</span>
              <div>
                <InputProfil
                  type="password"
                  value={confirmNewPassword}
                  setValue={(val) => setConfirmNewPassword(val)}
                  name="confirmNewPassword"
                  classNames={['global-input']}
                  onChange={setConfirmNewPassword}
                  onCancel={() => setConfirmNewPassword('')}
                  disabled
                />
              </div>
            </label>
          </div>

          <button type="submit" className="account-profil__submit">Enregistrer les modifications</button>
        </form>
      )}
    </div>
  );
};

Profil.propTypes = {
  showModal: PropTypes.string.isRequired,
  displayModal: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      pseudo: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default Profil;
