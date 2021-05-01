import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from 'src/frontend/components/Loader';
import {
  animationOne, cardList, card,
} from 'src/utils/animations';
import './jungle.scss';

const Jungle = ({
  stateNameLane,
  laneActif,
  laneSoon,
  setLaneIsLoad,
  setLaneIsLoad2,
  laneIsLoad,
  laneIsLoad2,
  fetchAllLane,
  fetchSoonLane,
  name,
}) => {
  const slug = useParams();
  // permet de récupérer le nom du champion dans l'url
  stateNameLane(slug);
  useEffect(() => {
    fetchAllLane();
    fetchSoonLane();
    return () => {
      setLaneIsLoad(false);
      setLaneIsLoad2(false);
    };
  }, []);
  return (
    <motion.div
      key="tutoriel1"
      initial="in"
      animate="end"
      exit="in"
      variants={animationOne}
    >
      <div className="jungle">
        {(!laneIsLoad || !laneIsLoad2) && <Loader />}
        {(laneIsLoad && laneIsLoad2) && (
          <>
            <div className="breadcrumb">
              <Link className="breadcrumb__link" to="/">Accueil </Link> &gt;
              <Link className="breadcrumb__link" to="/tutoriels-champions">Tutoriels champions </Link> &gt;
              {name.lane}
            </div>
            <h1 className="globalTitle-page">Tutoriels {name.lane}</h1>
            {laneActif.length !== 0 && (
            <motion.div
              variants={cardList}
              initial="in"
              animate="out"
              exit="end"
              className="jungle__cards"
            >
              {laneActif.map((listChampion) => (
                <>
                  <motion.div
                    key={listChampion.id}
                    variants={card}
                    className="jungle__cards__card"
                  >
                    {listChampion.actif === 1 && (
                    <Link to={`/tutoriels-champions/${listChampion.lane}/${listChampion.name}`}>
                      <div className="">
                        <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${listChampion.pictureChampion}`} alt="" />
                        <h3>{listChampion.name}</h3>
                      </div>
                    </Link>
                    )}
                  </motion.div>
                </>
              ))}
            </motion.div>
            )}
            {laneSoon.length !== 0 && (
            <>
              <div className="betweenParagraph" />
              <h2>Prochainement</h2>
              <div className="jungle__cards">
                {laneSoon.map((listChampion) => (
                  <>
                    <div className="jungle__cards__cardSoon">
                      <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${listChampion.pictureChampion}`} alt="" />
                      <p className="jungle__cards__cardSoon__content">Bientôt disponible</p>
                      <h3>{listChampion.name}</h3>
                    </div>
                  </>
                ))}
              </div>
            </>
            )}
            {(laneActif.length === 0 && laneSoon.length === 0) && (
            <h2>Aucun tutoriels {name.lane} n'est disponible</h2>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

Jungle.propTypes = {
  stateNameLane: PropTypes.func.isRequired,
  fetchAllLane: PropTypes.func.isRequired,
  fetchSoonLane: PropTypes.func.isRequired,
  laneIsLoad: PropTypes.bool.isRequired,
  laneIsLoad2: PropTypes.bool.isRequired,
  setLaneIsLoad: PropTypes.func.isRequired,
  setLaneIsLoad2: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  laneActif: PropTypes.arrayOf(
    PropTypes.shape({
      lane: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  laneSoon: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
};

export default Jungle;
