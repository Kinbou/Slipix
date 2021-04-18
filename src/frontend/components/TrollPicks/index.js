import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

import Loader from 'src/frontend/components/Loader';
import { useTitle } from 'src/hooks/useTitle';
import './trollPicks.scss';

const TrollPicks = ({
  fetchTrollpickActif,
  fetchTrollpickSoon,
  trollpicksActif,
  trollpicksSoon,
  trollpickActifIsLoad,
  trollpickSoonIsLoad,
  setTrollpickActifIsLoad,
  setTrollpickSoonIsLoad,
}) => {
  useTitle('TrollPicks');
  useEffect(() => {
    fetchTrollpickActif();
    fetchTrollpickSoon();
    return () => {
      setTrollpickActifIsLoad(false);
      setTrollpickSoonIsLoad(false);
    };
  }, []);
  return (
    <div className="trollpicks">
      <h1 className="globalTitle-page">TrollPicks</h1>
      <div className="backgroundParagraphe trollpicks__intro">
        <h4>Vous trouverez ici mes TrollPicks favoris de la faille</h4>
        <p className="paragraph">Les trollpicks et les picks exotiques font partie de League of Legends depuis toujours!</p>
        <p className="paragraph">Vous l'avez peut être déjà remarqué dans mon contenu mais je suis fan de ce genre de gameplays "originaux" !</p>
        <p className="paragraph">L'avantage d'un pick exotique ou d'un trollpick c'est premièrement de se taper des bonnes barres de rire mais surtout de surprendre vos adversaires!</p>
        <p className="paragraph">Voici mes trollpicks que je joue le + souvent, que j'ai theorycraft moi même, adapté moi même à la meta.</p>
        <p className="paragraph red trollpicks__intro__warning">Attention</p>
        <p className="paragraph"><i className="fas fa-exclamation-triangle icons__exclamation red" />Ce ne sont pas des picks optimaux pour monter en ranked ou rush le ladder mais vous allez sûrement prendre beaucoup de plaisir !<i className="fas fa-exclamation-triangle icons__exclamation red" /></p>
      </div>
      {(!trollpickActifIsLoad || !trollpickSoonIsLoad) && <Loader />}

      {(trollpickActifIsLoad && trollpickSoonIsLoad) && (
        <>
          <div className="trollpicks__cards">
            { trollpicksActif.length !== 0 && (
              trollpicksActif.map((trollpick) => (
                <div className="trollpicks__cards__line tutoriels__cards__line__one" key={trollpick.id}>
                  <Link to={`/trollpicks/${slugify(trollpick.name)}/${trollpick.id}`}>
                    <div className="trollpicks__cards__card trollpicks__cards__cardActif">
                      <h3 className="trollpicks__cards__card__title news__cards__first__title">{trollpick.title}</h3>
                      <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick.image}`} alt="" />
                    </div>
                  </Link>
                </div>
              ))
            )}
            { trollpicksSoon.length !== 0 && (
            <>
              <div className="betweenParagraph" />
              <h2>Prochainement</h2>
              {trollpicksSoon.map((trollpick) => (
                <div className="trollpicks__cards__line tutoriels__cards__line__one" key={trollpick.id}>
                  <div className="trollpicks__cards__card trollpicks__cards__cardSoon">
                    <p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
                    <h3 className="trollpicks__cards__card__title news__cards__first__title">{trollpick.title}</h3>
                    <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick.image}`} alt="" />
                  </div>
                </div>
              ))}
            </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

TrollPicks.propTypes = {
  fetchTrollpickActif: PropTypes.func.isRequired,
  fetchTrollpickSoon: PropTypes.func.isRequired,
  setTrollpickActifIsLoad: PropTypes.func.isRequired,
  setTrollpickSoonIsLoad: PropTypes.func.isRequired,
  trollpickActifIsLoad: PropTypes.bool.isRequired,
  trollpickSoonIsLoad: PropTypes.bool.isRequired,
  trollpicksActif: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  trollpicksSoon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TrollPicks;
