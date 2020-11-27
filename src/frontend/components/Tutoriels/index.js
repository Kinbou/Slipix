import React from 'react';
import { Link } from 'react-router-dom';

// images
import toplane from 'src/assets/images/logoLanes/toplane.png';
import jungle from 'src/assets/images/logoLanes/jungle.png';
import mid from 'src/assets/images/logoLanes/mid.png';
import adc from 'src/assets/images/logoLanes/adc.png';
import support from 'src/assets/images/logoLanes/support.png';
import './tutoriels.scss';

const Tutoriels = () => (
  <div className="tutoriels">
    <h1 className="globalTitle-page">Tutoriels champions</h1>
    <p className="tutoriels__intro">Vous trouverez ici mes tutoriels sur vos champions favoris</p>
    <div className="tutoriels__cards">
      <div className="tutoriels__cards__line tutoriels__cards__line__one">
        <Link to="/tutoriels-champions/toplane">
          <div className="tutoriels__cards__card tutoriels__cards__cardActif">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Toplane</h3>
            <img className="tutoriels__picture" src={toplane} alt="" />
          </div>
        </Link>
        <Link to="/tutoriels-champions/jungle">
          <div className="tutoriels__cards__card tutoriels__cards__cardActif">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Jungle</h3>
            <img className="tutoriels__picture" src={jungle} alt="" />
          </div>
        </Link>
        <Link to="/tutoriels-champions/midlane">
          <div className="tutoriels__cards__card tutoriels__cards__cardActif">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Midlane</h3>
            <img className="tutoriels__picture" src={mid} alt="" />
          </div>
        </Link>
        <Link to="/tutoriels-champions/adc">
          <div className="tutoriels__cards__card tutoriels__cards__cardActif">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels ad carry</h3>
            <img className="tutoriels__picture" src={adc} alt="" />
          </div>
        </Link>
      </div>
      <div className="betweenParagraph" />
      <div className="tutoriels__cards__line tutoriels__cards__line__two">
        <a>
          <div className="tutoriels__cards__card tutoriels__cards__cardSoon">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Support</h3>
            <img className="tutoriels__picture" src={support} alt="" />
            <p className="tutoriels__cards__cardSoon__content">Bientôt disponible</p>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Tutoriels;
