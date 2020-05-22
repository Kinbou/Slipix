import React from 'react';
import { Link } from 'react-router-dom';

// images
import toplane from '../../assets/images/toplane.png';
import jungle from '../../assets/images/jungle.png';
import mid from '../../assets/images/mid.png';
import adc from '../../assets/images/adc.png';
import support from '../../assets/images/support.png';
import titleTuto from '../../assets/images/titleTuto.png';
import titleTuto2 from '../../assets/images/titleTuto2.png';
import './tutoriels.scss';

const Tutoriels = () => (
  <div className="tutoriels">
    {/* <h1>Tutoriels champions</h1> */}
    <h1>Tutoriels champions</h1>
    {/* <img src={titleTuto} alt="" className="" />
    <img src={titleTuto2} alt="" className="" /> */}
    <p>Vous trouverez ici mes tutoriels sur vos champions favoris</p>
    <div className="tutoriels__cards">
      <div className="tutoriels__cards__line tutoriels__cards__line__one">
        <Link to="/">
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
        <Link to="/">
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
