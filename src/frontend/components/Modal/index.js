import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ displayModal, content, showModal }) => {
  const closeModal = () => {
    displayModal('');
  };

  return (
    <>
      {showModal !== 'crop' ? (
        <>
          <div className="modal-background" onClick={closeModal}> </div>
          <div className="modal">
            <button
              className="modal__close global-button"
              type="button"
              title="Fermer la fenêtre"
              onClick={closeModal}
            >
              <i className="fas fa-times" />
            </button>
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="modal-background" onClick={closeModal}> </div>
          <div className="modal">
            <button
              className="modal__close global-button"
              type="button"
              title="Fermer la fenêtre"
              onClick={closeModal}
            >
              <i className="fas fa-times" />
            </button>
            <h4>Modifier le média</h4>
            {content}
          </div>
        </>
      )}
    </>
  );
};

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  displayModal: PropTypes.func.isRequired,
  showModal: PropTypes.string.isRequired,
};

export default Modal;
