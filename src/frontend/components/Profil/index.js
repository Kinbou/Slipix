/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './profil.scss';
import InputProfil from 'src/frontend/components/Inputs';
import Modal from 'src/frontend/containers/Modal';
import Crop from 'src/frontend/components/Modal/Upload/crop';

const Profil = ({
  user,
  showModal,
  displayModal,
  updateUser,
  updateAvatarUser,
}) => {
  const inputUploadRef = useRef();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);
  const [imgType, setImgType] = useState(null);
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar);
      setPseudo(user.pseudo);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {

  });

  const removeError = (key) => {
    if (errors && errors[key]) {
      delete errors[key];
      setErrors(errors);
    }
  };

  const handleClickUpload = () => {
    inputUploadRef.current.click();
  };

  const onFileChange = (e) => {
    setImgType(e.target.files[0].type);
    setNewAvatar(URL.createObjectURL(e.target.files[0]));
    displayModal('crop');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (avatar !== user.avatar) {
      const blob = await fetch(avatar).then((r) => r.blob());
      const data = { avatar: blob, imgType };
      updateAvatarUser(data);
      setImgType(null);
    }

    if (pseudo === user.pseudo && name === user.name && newPassword === '') return;

    const data = {};
    if (pseudo !== user.pseudo && pseudo.length > 3) {
      data.pseudo = pseudo;
    }
    else if (pseudo !== user.pseudo) {
      setErrors((err) => ({
        ...err,
        pseudo: 'Le pseudo doit avoir au minimum 3 caractères',
      }));
    }
    if (name !== user.name) {
      data.name = name;
    }

    if (newPassword.length >= 6 && currentPassword.length >= 6 && newPassword === confirmNewPassword) {
      data.password = currentPassword;
      data.newPassword = newPassword;
      data.confirmNewPassword = confirmNewPassword;
    }

    if (currentPassword && (newPassword.length < 6 || confirmNewPassword.length < 6)) {
      setErrors((err) => ({
        ...err,
        newPassword: 'Le nouveau mot de passe doit avoir au minimum 6 caractères',
      }));
    }

    if (!errors.newPassword && currentPassword && (newPassword !== confirmNewPassword)) {
      setErrors((err) => ({
        ...err,
        newPassword: 'La confirmation du mot de passe doit être identique au nouveau mot de passe',
      }));
    }

    if (errors !== null) {
      return;
    }

    console.log(data);
    if (data) {
      console.log('je passe dans l\'action updateData', data);
      updateUser(data);
    }
  };

  const onCancel = () => {
    setNewAvatar(null);
    inputUploadRef.current.value = '';
    displayModal('');
  };

  const onCrop = (url) => {
    setAvatar(url);
    onCancel();
  };

  return (
    <div className="wrapper account-profil">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__link">Accueil</Link> &gt; Mon profil
      </div>

      <input type="file" style={{ visibility: 'hidden' }} accept="image/*" ref={inputUploadRef} onChange={onFileChange} />

      {showModal === 'crop' && <Modal content={<Crop img={newAvatar} imgType={imgType} onCancel={onCancel} onCrop={onCrop} />} />}

      <h1 className="globalTitle-page">Mon profil</h1>
      {user && (
        <form className="account-profil__form" onSubmit={handleSubmit}>
          <div className="account-profil__person">
            <div className="account-profil__person__avatar" onClick={handleClickUpload}>
              <img src={avatar.startsWith('blob') ? avatar : `http://localhost:8000/${avatar}`} alt="Avatar" />
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
                { (errors && errors.name) && <p>{ errors.name }</p> }
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
              <label className={`${errors && errors.pseudo ? 'account-profil__container__label account-profil__container__label--errors' : 'account-profil__container__label'}`}>
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
                    setFocused={() => removeError('pseudo')}
                  />
                  { (errors && errors.pseudo) && <p className="account-profil__container__error">{ errors.pseudo }</p> }
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
              { (errors && errors.currentPassword) && <p>{ errors.currentPassword }</p> }
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
              { (errors && errors.newPassword) && <p>{ errors.newPassword }</p> }
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
              { (errors && errors.confirmNewPassword) && <p>{ errors.confirmNewPassword }</p> }
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
  updateAvatarUser: PropTypes.func.isRequired,
};

export default Profil;
