import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'src/hooks/useTitle';
import { motion } from 'framer-motion';

import {
  animationOne, cardList, card, animationCardsPage,
} from 'src/utils/animations';

// import image
import role from 'src/assets/images/guides/roleChampion.jpg';
import laneWin from 'src/assets/images/guides/laneWin.jpg';
import progression from 'src/assets/images/guides/progression.jpg';
import mentalWin from 'src/assets/images/guides/mentalWin.jpg';
import lowEloProblem from 'src/assets/images/picturesYoutube/PROBLEMEBASELO.jpg';
import './guides.scss';

const Guides = () => {
  useTitle('Guides');
  return (
    <motion.div
      className="guides"
      key="guides"
      initial="in"
      animate="out"
      exit="end"
      variants={animationCardsPage}
    >
      <h1 className="globalTitle-page">Guides League of Legends</h1>
      <p className="guides__intro">Vous trouverez ici mes guides & conseils pour vous aider</p>
      <div className="guides__together__cards">
        <motion.div
          className="guides__cards"
          variants={cardList}
          initial="in"
          key="listGuides"
          animate="out"
        >
          <Link to="/guides/role-champion">
            <motion.div
              className="guides__cards__card"
              variants={card}
              key="guideRoleChampion"
            >
              <h3>Trouver son rôle/champion</h3>
              <img src={role} alt="" />
            </motion.div>
          </Link>
          <Link to="/guides/progresser-sur-leagueOfLegends">
            <motion.div
              className="guides__cards__card"
              variants={card}
              key="guideProgressLol"
            >
              <h3>Progresser sur League of Legends</h3>
              <img src={progression} alt="" />
            </motion.div>
          </Link>

          <Link to="/guides/sortir-du-bas-elo">
            <motion.div
              className="guides__cards__card"
              variants={card}
              key="guideLowElo"
            >
              <h3>Sortir du bas Elo</h3>
              <img src={lowEloProblem} alt="" />
            </motion.div>
          </Link>
          <Link to="/guides/gagner-sa-phase-de-lane">
            <motion.div
              className="guides__cards__card"
              variants={card}
              key="guideWinLane"
            >
              <h3>Gagner sa phase de lane</h3>
              <img src={laneWin} alt="" />
            </motion.div>
          </Link>

          <Link to="/guides/mental&rage">
            <motion.div
              className="guides__cards__card"
              variants={card}
              key="guideMentalRage"
            >
              <h3>Le mental & la rage</h3>
              <img className="guides__cards__card__test__picture" src={mentalWin} alt="" />
            </motion.div>
          </Link>
          {/* <Link to="/guides/vision-du-jeu">
          <div className="guides__cards__card">
            <h3>La vision du jeu</h3>
            <img src={gameWin} alt="" />
          </div>
        </Link> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Guides;
