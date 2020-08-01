import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from 'src/frontend/components/Loader';
import PropTypes from 'prop-types';

// images
// import zac from '../../../../assets/images/championsJungle/zac.jpg';
// import olaf from '../../../../assets/images/championsJungle/olaf.jpg';
// import ekko from '../../../../assets/images/championsJungle/ekko.jpg';
// import leeSin from '../../../../assets/images/championsJungle/lee_sin.jpg';
// import evelynn from '../../../../assets/images/championsJungle/evelynn.jpg';
// import xinZhao from '../../../../assets/images/championsJungle/xin_zhao.jpg';
// import shaco from '../../../../assets/images/championsJungle/shaco.jpg';
// import gragas from '../../../../assets/images/championsMidlane/gragas.jpg';
// import hecarim from '../../../../assets/images/championsJungle/hecarim.jpg';

import './jungle.scss';

const Jungle = ({
  stateNameLane,
  laneActif,
  laneSoon,
  setLaneIsLoad,
  laneIsLoad,
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
      setLaneIsLoad();
    };
  }, []);
  return (
    <div className="jungle">
      {!laneIsLoad && <Loader />}
      {laneIsLoad && (
      <>
        <div className="breadcrumb">
          <Link className="breadcrumb__link" to="/">Accueil </Link> >
          <Link className="breadcrumb__link" to="/tutoriels-champions"> Tutoriels champions  </Link> >
          {laneActif[0].lane}
        </div>
        <h1 className="globalTitle-page">Tutoriels {laneActif[0].lane}</h1>
        <div className="jungle__cards">
          {laneActif.map((listChampion) => (
            <>
              {listChampion.actif === 1 && (
              <Link to={`/tutoriels-champions/${listChampion.lane}/${listChampion.name}`}>
                <div className="jungle__cards__card">
                  <img src={`http://localhost:8090/images/champions/${listChampion.pictureChampion}`} alt="" />
                  <h3>{listChampion.name}</h3>
                </div>
              </Link>
              )}
            </>
          ))}
          {laneSoon.length !== 0 && (
          <div>
            <div className="betweenParagraph" />
            <h2>Prochainement</h2>
            <div className="jungle__cards">
              {laneSoon.map((listChampion) => (
                <>
                  <Link to={`/tutoriels-champions/${listChampion.lane}/${listChampion.name}`}>
                    <div className="jungle__cards__cardSoon">
                      <img src={`http://localhost:8090/images/champions/${listChampion.pictureChampion}`} alt="" />
                      <p className="jungle__cards__cardSoon__content">Bientôt disponible</p>
                      <h3>{listChampion.name}</h3>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
          )}
        </div>
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
  setLaneIsLoad: PropTypes.func.isRequired,
  laneActif: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
  laneSoon: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
};

export default Jungle;
