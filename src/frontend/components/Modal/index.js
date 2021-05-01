import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './modal.scss';

const Modal = ({
  displayModal, content, showModal, modalParams,
}) => {
  const closeModal = () => {
    displayModal('');
  };

  return (
    <>
      {showModal !== 'crop' ? (
        <>
          <div className="modal-background" onClick={closeModal}> </div>
          <motion.div
            className="modal"
            // initial={{
            //   x: modalParams.x, y: modalParams.y, scale: 0.2, borderRadius: '50%',
            // }}
            // animate={{
            //   scale: 1, borderRadius: '10px', x: '800px', y: 'auto',
            // }}
            layout
            transition={{ duration: 3, type: 'spring' }}
          >
            <button
              className="modal__close global-button"
              type="button"
              title="Fermer la fenêtre"
              onClick={closeModal}
            >
              <i className="fas fa-times" />
            </button>
            {content}
          </motion.div>
        </>
      ) : (
        <>
          <div className="modal-background" onClick={closeModal}> </div>
          <motion.div className="modal">
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
          </motion.div>
        </>
      )}
    </>
  );
};

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  displayModal: PropTypes.func.isRequired,
  showModal: PropTypes.string.isRequired,
  modalParams: PropTypes.object.isRequired,
};

export default Modal;
