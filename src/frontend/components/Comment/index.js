/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './comment.scss';
import { urlBack, labelClassname } from 'src/utils/selectors';

const StyledComment = styled.div`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(91%)')};
  transition: all .3s linear;
`;

const Comment = ({ showComment, displayComment, user }) => {
  const [comment, setComment] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  const handleCancel = () => {
    setFocusInput(false);
    setComment('');
  };

  return (
    <StyledComment open={showComment} className="comment">
      <i className="fas fa-comments comment__icon" onClick={() => displayComment(!showComment)} />
      <div className="comment__content">
        <h1 className="comment__content__title">Commentaires</h1>
        <div className="comment__content__comment">
          <div className="comment__content__comment__intro">
            <p>Nombres de commentaires</p>
          </div>
          <div className="comment__content__comment__content">
            <div className={user ? '' : 'comment__content__comment__content__iconUser'}>
              {user ? (
                <img
                  className="authentification__nav__profil__avatar__image"
                  src={`${urlBack}/${user.avatar}`}
                  alt="avatar"
                />
              ) : (
                <i className="fas fa-user" />
              )}
            </div>
            <form className="comment__content__comment__content__form">
              <div className="global-input">
                {' '}
                <input
                  name="comment"
                  type="text"
                  className="inputAnimation"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onFocus={() => setFocusInput(true)}
                />
                <label className={labelClassname(comment)}>Ajouter un commentaire</label>
                <div className={focusInput ? 'comment__content__comment__content__form__contentButton--display' : 'comment__content__comment__content__form__contentButton--hidden'}>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="comment__content__comment__content__form__contentButton__button comment__content__comment__content__form__contentButton__button--cancel"
                  >Annuler
                  </button>
                  <button
                    type="button"
                    className="comment__content__comment__content__form__contentButton__button comment__content__comment__content__form__contentButton__button--validate"
                  >Ajouter un commentaire
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="comment__content__comment__content">
            <p>Espace de commentaire</p>
          </div>
        </div>
      </div>
    </StyledComment>
  );
};

Comment.propTypes = {
  displayComment: PropTypes.func.isRequired,
  showComment: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      pseudo: PropTypes.string,
    }),
  ),
};

Comment.defaultProps = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: '',
      pseudo: '',
    }),
  ),
};

export default Comment;
