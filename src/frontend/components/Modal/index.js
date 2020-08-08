import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ displayModal, content }) => {
  const closeModal = () => {
    displayModal('');
  };

  return (
    <>
      <div className="modal-background" onClick={closeModal}> </div>
      <div className="modal">
        <button className="modal__close global-button" type="button" title="Fermer la fenêtre" onClick={closeModal}><i className="fas fa-times" /> </button>
        {content}
      </div>
    </>
  );
};

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default Modal;
