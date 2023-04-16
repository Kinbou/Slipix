import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { motion } from 'framer-motion';

import Loader from '@components/Loader/index';
import {
	animationOne,
	cardList,
	card,
} from '@/utils/animations/index';
import { useTitle } from '@/hooks/useTitle';
import './trollPicks.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { trollpick_actions } from '@/store/trollpick/trollpick.slice';
import { selectTrollpick } from '@/store/trollpick/trollpick.slice';
import { Trollpick } from '@/api/trollpick/models';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const TrollPicks = () => {
	useTitle('Trollpicks');
	const dispatch = useAppDispatch();
	const { trollpickActif, trollpickSoon } = useAppSelector(selectTrollpick);

	useEffect(() => {
		if (!trollpickActif.length) {
			dispatch(trollpick_actions.getTrollpicksActif());
			dispatch(trollpick_actions.getTrollpicksSoon());
		}
		return () => {
			// setTrollpickActifIsLoad(false);
			// setTrollpickSoonIsLoad(false);
		};
	}, []);
	return (
		<motion.div
			className="trollpicks"
			key="trollpicks"
			initial="in"
			animate="end"
			exit="end"
			variants={animationOne}
		>
			<h1 className="globalTitle-page">Trollpicks</h1>
			<div className="backgroundParagraphe trollpicks__intro">
				<h4>Mes TrollPicks favoris dans League of Legends en SAISON 13</h4>
				<p className="paragraph">Les Trollpicks et les picks exotiques font partie de League of Legends depuis toujours !</p>
				<p className="paragraph">Vous l&apos;avez sûrement déjà remarqué dans mes vidéos,  je suis fan des gameplays différents et originaux !</p>
				<p className="paragraph">L&apos;avantage d&apos;un pick exotique et d&apos;un trollpick c&apos;est premièrement de se taper des bonnes barres de rire mais surtout de surprendre vos adversaires !</p>
				<p className="paragraph">Voici mes trollpicks que je joue le + souvent, que j&apos;ai theorycraft moi même, adapté moi même à la meta.</p>
				<p className="paragraph red trollpicks__intro__warning">Attention</p>
				<p className="paragraph"><i className="fas fa-exclamation-triangle icons__exclamation red" />Ce ne sont pas des picks optimaux pour monter en ranked ou pour atteindre des objectifs, jouez les en NORMALE DRAFT pour bien vous amuser !<i className="fas fa-exclamation-triangle icons__exclamation red" /></p>
			</div>
			{/* {(!trollpickActifIsLoad || !trollpickSoonIsLoad) && <Loader />} */}

			{(true) && (
				<>
					<motion.div
						className="trollpicks__cards"
						variants={cardList}
						initial="in"
						animate="out"
					>
						{trollpickActif.length !== 0 && (
							trollpickActif.map((trollpick: Trollpick) => (
								<div
									className="trollpicks__cards__line tutoriels__cards__line__one"
									key={trollpick.id}
								>
									<Link to={`/trollpicks/${slugify(trollpick.name)}/${trollpick.id}`}>
										<motion.div
											className="trollpicks__cards__card trollpicks__cards__cardActif"
											key={trollpick.id}
											variants={card}
										>
											<h3 className="trollpicks__cards__card__title news__cards__first__title">{trollpick.title}</h3>
											<img src={`${apiBaseUrl}/${trollpick.image}`} alt="" />
										</motion.div>
									</Link>
								</div>
							))
						)}
						{ trollpickSoon.length !== 0 && (
							<>
								<div className="betweenParagraph" />
								<h2>Prochainement</h2>
								{trollpickSoon.map((trollpick: Trollpick) => (
									<motion.div
										className="trollpicks__cards__line tutoriels__cards__line__one"
										key={trollpick.id}
										variants={card}
									>
										<div className="trollpicks__cards__card trollpicks__cards__cardSoon">
											<p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
											<h3 className="trollpicks__cards__card__title news__cards__first__title">{trollpick.title}</h3>
											<img src={`${apiBaseUrl}/images/trollpicks/${trollpick.image}`} alt="" />
										</div>
									</motion.div>
								))}
							</>
						)}
					</motion.div>
				</>
			)}
		</motion.div>
	);
};

export default TrollPicks;
