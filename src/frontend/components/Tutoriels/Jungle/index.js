import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from 'src/frontend/components/Loader';
import PropTypes from 'prop-types';


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
}) => {
  const slug = useParams();
  // permet de récupérer le nom du champion dans l'url
  stateNameLane(slug);
  useEffect(() => {
    fetchAllLane();
    fetchSoonLane();
    console.log('passage dans le useEffect');
    return () => {
      setLaneIsLoad(false);
      setLaneIsLoad2(false);
    };
  }, []);
  return (
    <div className="jungle">
      {(!laneIsLoad || !laneIsLoad2) && <Loader />}
      {(laneIsLoad && laneIsLoad2) && (
      <>
        <div className="breadcrumb">
          <Link className="breadcrumb__link" to="/">Accueil </Link> &gt;
          <Link className="breadcrumb__link" to="/tutoriels-champions"> Tutoriels champions  </Link> &gt;
          {laneActif[0].lane}
        </div>
        <h1 className="globalTitle-page">Tutoriels {laneActif[0].lane}</h1>
        <div className="jungle__cards">
          {laneActif.map((listChampion) => (
            <>
              {listChampion.actif === 1 && (
              <Link to={`/tutoriels-champions/${listChampion.lane}/${listChampion.name}`}>
                <div className="jungle__cards__card">
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${listChampion.pictureChampion}`} alt="" />
                  <h3>{listChampion.name}</h3>
                </div>
              </Link>
              )}
            </>
          ))}
        </div>
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
      </>
      )}
    </div>
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
