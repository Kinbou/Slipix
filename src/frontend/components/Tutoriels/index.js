import React from 'react';
import { Link } from 'react-router-dom';

// images
import toplane from '../../../assets/images/logoLanes/toplane.png';
import jungle from '../../../assets/images/logoLanes/jungle.png';
import mid from '../../../assets/images/logoLanes/mid.png';
import adc from '../../../assets/images/logoLanes/adc.png';
import support from '../../../assets/images/logoLanes/support.png';
import './tutoriels.scss';

const Tutoriels = () => (
  <div className="tutoriels">
    <h1 className="globalTitle-page">Tutoriels champions</h1>
    <p>Vous trouverez ici mes tutoriels sur vos champions favoris</p>
    <div className="tutoriels__cards">
      <div className="tutoriels__cards__line tutoriels__cards__line__one">
        <Link to="/tutoriels-toplane">
          <div className="tutoriels__cards__card">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Toplane</h3>
            <img src={toplane} alt="" />
          </div>
        </Link>
        <Link to="/tutoriels-jungle">
          <div className="tutoriels__cards__card">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Jungle</h3>
            <img src={jungle} alt="" />
          </div>
        </Link>
        <Link to="/tutoriels-midlane">
          <div className="tutoriels__cards__card">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Midlane</h3>
            <img src={mid} alt="" />
          </div>
        </Link>
      </div>
      <div className="tutoriels__cards__line tutoriels__cards__line__two">
        <Link to="/">
          <div className="tutoriels__cards__card">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels ad carry</h3>
            <img src={adc} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="tutoriels__cards__card">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Support</h3>
            <img src={support} alt="" />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Tutoriels;
