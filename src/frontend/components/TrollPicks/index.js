import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';
import './trollPicks.scss';

// images
import zin from '../../../assets/images/trollpicks/zinAutoroutee.jpg';
import caitlyn from '../../../assets/images/trollpicks/caitlyn.jpg';
import kaisa from '../../../assets/images/trollpicks/kaisa.jpg';
import tresh from '../../../assets/images/trollpicks/tresh.jpg';
import zedForet from '../../../assets/images/trollpicks/zedForet.jpg';
import jinxZap from '../../../assets/images/trollpicks/jinxZap.png';
import olafVolVie from '../../../assets/images/trollpicks/olafVolVie.png';
import lucianAp from '../../../assets/images/trollpicks/lucianAp.jpg';

const TrollPicks = () => {
  useTitle('TrollPicks');
  return (
    <div className="trollpicks">
      <h1 className="globalTitle-page">TrollPicks</h1>
      <div className="backgroundParagraphe trollpicks__intro">
        <h4>Vous trouverez ici mes TrollPicks favoris de la faille</h4>
        <p className="paragraph">Les trollpicks et les picks exotiques font partis de League of Legends depuis toujours!</p>
        <p className="paragraph">Vous l'avez peut être déjà remarqué dans mon contenu mais je suis fan de ce genre de gameplays "originaux" !</p>
        <p className="paragraph">L'avantage d'un pick exotique ou d'un trollpick c'est premièrement de se taper des bonnes barres de rire mais surtout de surprendre vos adversaires!</p>
        <p className="paragraph">Voici mes trollpicks que je joue le + souvent, que j'ai theorycraft moi même, adapté moi même à la meta.</p>
        <p className="paragraph red trollpicks__intro__warning">Attention</p>
        <p className="paragraph"><i className="fas fa-exclamation-triangle icons__exclamation red" />Ce ne sont pas des picks optimaux pour monter en ranked ou rush le ladder mais vous allez sûrement prendre beaucoup de plaisir !<i className="fas fa-exclamation-triangle icons__exclamation red" /></p>
      </div>
      <div className="trollpicks__cards">
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <Link to="/trollpicks/xinZhao-autoroute">
            <div className="trollpicks__cards__card">
              <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Xin Zhao Autoroute</h3>
              <img src={zin} alt="" />
            </div>
          </Link>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <Link to="/trollpicks/thresh-flak">
            <div className="trollpicks__cards__card">
              <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Thresh Flak OneShot</h3>
              <img src={tresh} alt="" />
            </div>
          </Link>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <Link to="/trollpicks/caitlyn-sniper">
            <div className="trollpicks__cards__card">
              <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Caitlyn Sniper</h3>
              <img src={caitlyn} alt="" />
            </div>
          </Link>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <Link to="/trollpicks/kaisa-laser">
            <div className="trollpicks__cards__card">
              <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Kaïsa Laser</h3>
              <img src={kaisa} alt="" />
            </div>
          </Link>
        </div>
        <div className="betweenParagraph" />
        <h2>Prochainement</h2>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <div className="trollpicks__cards__cardSoon">
            <p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
            <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Zed Forêt</h3>
            <img src={zedForet} alt="" />
          </div>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <div className="trollpicks__cards__cardSoon">
            <p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
            <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez jinx zap</h3>
            <img src={jinxZap} alt="" />
          </div>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <div className="trollpicks__cards__cardSoon">
            <p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
            <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Olaf vol de vie</h3>
            <img src={olafVolVie} alt="" />
          </div>
        </div>
        <div className="trollpicks__cards__line tutoriels__cards__line__one">
          <div className="trollpicks__cards__cardSoon">
            <p className="trollpicks__cards__cardSoon__content">Bientôt disponible</p>
            <h3 className="trollpicks__cards__card__title news__cards__first__title">Découvrez Lucian Ap</h3>
            <img src={lucianAp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrollPicks;
