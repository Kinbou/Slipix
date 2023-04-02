import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './modal.scss';
import { animationModal, transition } from '@/utils/animations/index';

const Modal = ({
	displayModal, content, showModal,
}: any) => {
	const closeModal = (): void => {
		displayModal('');
	};

	return (
		<AnimatePresence mode='wait'>
			{showModal !== 'crop'
				? (
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
				)
				: (
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

export default Modal;
