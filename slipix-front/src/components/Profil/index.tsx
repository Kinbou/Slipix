/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './profil.scss';
import InputProfil from '@components/Inputs';
import Modal from '@containers/Modal';
import Crop from '@components/Modal/Upload/crop';
import { urlBack } from '@/utils/selectors';

const Profil = ({
  user,
  showModal,
  displayModal,
  updateUser,
  updateAvatarUser,
  displayAlert,
}: any): React.ReactElement => {
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
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar);
      setPseudo(user.pseudo);
      setEmail(user.email);
    }
  }, [user]);

  const removeError = (key: any) => {
    if (errors && errors[key]) {
      // @ts-ignore
      delete errors[key];
      setErrors(errors);
    }
  };

  const handleClickUpload = () => {
    // @ts-ignore
    inputUploadRef.current.click();
  };

  const onFileChange = (e: any) => {
    setImgType(e.target.files[0].type);
    // @ts-ignore
    setNewAvatar(URL.createObjectURL(e.target.files[0]));
    displayModal('crop');
  };


  const verifyPseudo = () => {
    if (!pseudo.length) {
      // @ts-ignore
      setErrors({ ...errors, pseudo: 'Ton pseudo est obligatoire' });
    }
    if (pseudo && pseudo.length < 3) {
      // @ts-ignore
      setErrors({ ...errors, pseudo: 'Ton pseudo ne fait pas 3 caractères' });
    }
  };

  const verifyPassword = () => {
    if (currentPassword.length && currentPassword.length < 8) {
      // @ts-ignore
      setErrors({ ...errors, currentPassword: 'Ton mot de passe ne contient pas 8 caractères' });
    }
  };

  const verifyNewPassword = () => {
    if (newPassword.length && newPassword.length < 8) {
      // @ts-ignore
      setErrors({ ...errors, newPassword: 'Ton mot de passe ne contient pas 8 caractères' });
    }
  };

  const verifyConfirmPassword = () => {
    if (newPassword !== confirmNewPassword) {
      // @ts-ignore
      setErrors({ ...errors, confirmNewPassword: 'Ton mot de passe n\'est pas identique au précédent' });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (avatar !== user.avatar) {
      const blob = await fetch(avatar).then((r) => r.blob());
      const data = { avatar: blob, imgType };
      updateAvatarUser(data);
      setImgType(null);
    }

    if (pseudo === user.pseudo && name === user.name && currentPassword === '') {
      displayAlert('Tu essayes de me rouler dans la tartiflette ? Si tu veux enregistrer des modifications, tes données doivent être différente des anciennes', false);
      return;
    }

    const data = {};
    if (pseudo !== user.pseudo && pseudo.length > 3) {
      // @ts-ignore
      data.pseudo = pseudo;
    }
    if (name !== user.name) {
      // @ts-ignore
      data.name = name;
    }
    if (newPassword && newPassword.length >= 6 && currentPassword.length >= 6 && newPassword === confirmNewPassword) {
      // @ts-ignore
      data.password = currentPassword;
      // @ts-ignore
      data.newPassword = newPassword;
      // @ts-ignore
      data.confirmNewPassword = confirmNewPassword;
    }
    if (currentPassword && (newPassword.length < 6 || confirmNewPassword.length < 6)) {
      setErrors((err) => ({
        // @ts-ignore
        ...err,
        newPassword: 'Le nouveau mot de passe doit avoir au minimum 6 caractères',
      }));
    }
    // @ts-ignore
    if (errors && !errors.newPassword && currentPassword && (newPassword !== confirmNewPassword)) {
      setErrors((err) => ({
        // @ts-ignore
        ...err,
        newPassword: 'La confirmation du mot de passe doit être identique au nouveau mot de passe',
      }));
    }

    if (Object.keys(errors).length !== 0) {
      return;
    }
    if (data) {
      updateUser(data);
    }
  };

  const onCancel = () => {
    setNewAvatar(null);
    // @ts-ignore
    inputUploadRef.current.value = '';
    displayModal('');
  };

  const onCrop = (url: any) => {
    setAvatar(url);
    onCancel();
  };

  return (
    <div className="wrapper account-profil">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__link">Accueil</Link> &gt; Mon profil
      </div>
      {/* @ts-ignore */}
      <input type="file" style={{ visibility: 'hidden' }} accept="image/*" ref={inputUploadRef} onChange={onFileChange} />
      {showModal === 'crop' && <Modal content={<Crop img={newAvatar} imgType={imgType} onCancel={onCancel} onCrop={onCrop} />} />}
      <h1 className="globalTitle-page">Mon profil</h1>
      {user && (
        <form className="account-profil__form" onSubmit={handleSubmit}>
          <div className="account-profil__person">
            <div className="account-profil__person__avatar" onClick={handleClickUpload}>
              <img src={avatar.startsWith('blob') ? avatar : `${urlBack}/${avatar}`} alt="Avatar" />
              <i className="fas fa-image account-profil__person__avatar__icon " />
            </div>
            <div className="account-profil__person__avatar__content">
              <p className="account-profil__person__avatar__content__name">{user.pseudo}</p>
            </div>
          </div>
          <div className="account-profil__container account">
            <div className="account-profil__infos">
              <h2 className="account-profil__subtitle">Informations personnelles</h2>
              <label className="account-profil__container__label">
                <span>Prénom</span>
                <div>
                  <InputProfil
                    type="text"
                    value={name}
                    name="name"
                    classNames={['global-input']}
                    onChange={setName}
                    onCancel={() => setName(user.name)}
                    // @ts-ignore
                    disabled
                    setFocused={() => removeError('name')}
                  />
                </div>
              </label>
              {/* @ts-ignore */}
              <label className={`${errors && errors.pseudo ? 'account-profil__container__label account-profil__container__label--errors' : 'account-profil__container__label'}`}>
                <span>Pseudo</span>
                <div>
                  <InputProfil
                    type="text"
                    value={pseudo}
                    name="pseudo"
                    classNames={['global-input']}
                    onChange={setPseudo}
                    onCancel={() => setPseudo(user.pseudo)}
                    // @ts-ignore
                    disabled
                    setFocused={() => removeError('pseudo')}
                    onBlur={verifyPseudo}
                  />
                  {/* @ts-ignore */}
                  { (errors && errors.pseudo) && <p className="account-profil__container__error">{ errors.pseudo }</p> }
                </div>
              </label>
              <label className="account-profil__container__label">
                <span>Adresse email</span>
                <div>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    className="inputAnimation"
                    disabled
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="account-profil__container">
            <h2 className="account-profil__subtitle">Mot de passe</h2>
            {/* @ts-ignore */}
            <label className={`${errors && errors.currentPassword ? 'account-profil__container__label account-profil__container__label--errors' : 'account-profil__container__label'}`}>
              <span>Mot de passe actuel</span>
              <div>
                <InputProfil
                  type="password"
                  value={currentPassword}
                  name="currentPassword"
                  classNames={['global-input']}
                  onChange={setCurrentPassword}
                  onCancel={() => setCurrentPassword('')}
                  onBlur={verifyPassword}
                  // @ts-ignore
                  disabled
                  setFocused={() => removeError('currentPassword')}
                />
                {/* @ts-ignore */}
                { (errors && errors.currentPassword) && <p className="account-profil__container__error">{ errors.currentPassword }</p> }
              </div>
            </label>
            {/* @ts-ignore */}
            <label className={`${errors && errors.newPassword ? 'account-profil__container__label account-profil__container__label--errors' : 'account-profil__container__label'}`}>
              <span>Nouveau mot de passe</span>
              <div>
                <InputProfil
                  type="password"
                  value={newPassword}
                  name="newPassword"
                  classNames={['global-input']}
                  onChange={setNewPassword}
                  onCancel={() => setNewPassword('')}
                  onBlur={verifyNewPassword}
                  // @ts-ignore
                  disabled
                  setFocused={() => removeError('newPassword')}
                />
                {/* @ts-ignore */}
                { (errors && errors.newPassword) && <p className="account-profil__container__error">{ errors.newPassword }</p> }
              </div>
            </label>
            {/* @ts-ignore */}
            <label className={`${errors && errors.confirmNewPassword ? 'account-profil__container__label account-profil__container__label--errors' : 'account-profil__container__label'}`}>
              <span>Confirmation du nouveau mot de passe</span>
              <div>
                <InputProfil
                  type="password"
                  value={confirmNewPassword}
                  name="confirmNewPassword"
                  classNames={['global-input']}
                  onChange={setConfirmNewPassword}
                  onCancel={() => setConfirmNewPassword('')}
                  onBlur={verifyConfirmPassword}
                  // @ts-ignore
                  disabled
                  setFocused={() => removeError('confirmNewPassword')}
                />
                {/* @ts-ignore */}
                { (errors && errors.confirmNewPassword) && <p className="account-profil__container__error">{ errors.confirmNewPassword }</p> }
              </div>
            </label>
          </div>
          <button
            type="submit"
            className={`${Object.keys(errors).length !== 0 ? 'account-profil__submit account-profil__submit--disabled' : 'account-profil__submit account-profil__submit--actived'}`}
            disabled={Object.keys(errors).length !== 0}
          >
            Enregistrer les modifications
          </button>
        </form>
      )}
    </div>
  );
};

export default Profil;
