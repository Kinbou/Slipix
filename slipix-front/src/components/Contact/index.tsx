/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

import tds from '@/assets/images/presentation/tds.png';
import './contact.scss';

const Contact = () => {
	useTitle('Me contacter');
	return (
		<motion.div
			className="contact"
			key="contact"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<h1 className="globalTitle-page">Me Contacter</h1>
			<div className="contact__background">
				<div className="contact__content">
					<p className="contact__content__title">Pour me contacter c'est simple il y a 2 options :</p>
					<p>-M'envoyer un Mail à cette adresse : <span className="gold">deiizfamilyhd@gmail.com </span>
            (Seulement pour les propositions professionnelles style partenariat, sponsor
            etc...)
					</p>
					<p>-M'envoyer directement un message privé sur <span className='twitch'>Discord</span> en rejoignant le serveur <span className="red">#TEAMSLIP</span><a className="contact__content__link" type="a" href="https://discord.gg/fsTYTg5" target="_blanc">Cliquez ici</a></p>
					<p>- M'envoyer directement un message privé sur mes réseaux sociaux <span className='blue'>TWITTER</span> <a className="contact__content__link" type="a" href="https://twitter.com/SlipixLoL" target="_blanc">Cliquez ici</a></p>
					<h4 className="red"><i className="fas fa-exclamation-triangle icons__exclamation" /> NOTES IMPORTANTES <i className="fas fa-exclamation-triangle icons__exclamation" /></h4>
					<p className="contact__content__refuseResist">JE NE FAIS PLUS DE COACHING SUR LEAGUE OF LEGENDS, JE ME CONSACRE A MON CONTENU & LA TEAM DU SUD<img src={tds} alt="" className="contactTds" /></p>
					<p>Il est donc inutile de m'envoyer un message privé sur discord à ce sujet.</p>
					<p>Pareil pour les "conseils", IL Y A MES <span className='orange'>vidéos</span> & MES <span className='orange'>GUIDES</span> POUR VOUS AIDER. C'EST PAS QUE JE NE VEUX PAS, C'EST JUSTE UN MANQUE DE TEMPS POUR VOUS REPONDRE PAR ECRIT</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
