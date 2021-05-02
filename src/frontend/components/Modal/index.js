import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import './modal.scss';
import { animationModal, transition } from 'src/utils/animations';

const Modal = ({
  displayModal, content, showModal, modalParams,
}) => {
  const closeModal = () => {
    displayModal('');
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal !== 'crop' ? (
        <>
          <div className="modal-background" onClick={closeModal}> </div>
          <motion.div
            className="modal"
            key="home"
            initial="in"
            animate="out"
            exit="exit"
            variants={animationModal}
            transition={transition}
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
          <motion.div
            className="modal"
            key="home"
            initial="in"
            animate="out"
            exit="exit"
            variants={animationModal}
            transition={transition}
          >
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
    </AnimatePresence>
  );
};

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  displayModal: PropTypes.func.isRequired,
  showModal: PropTypes.string.isRequired,
  modalParams: PropTypes.object.isRequired,
};

export default Modal;
