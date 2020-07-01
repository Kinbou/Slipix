import React from 'react';
import { Link } from 'react-router-dom';

import './toplane.scss';

// champions
import rumble from '../../../../assets/images/championsToplane/rumble.jpg';
import pantheon from '../../../../assets/images/championsToplane/pantheon.jpeg';
import gnar from '../../../../assets/images/championsToplane/gnar.jpg';
import camille from '../../../../assets/images/championsToplane/camille.jpg';

const Toplane = () => (
  <div className="toplane">
    <div className="toplane__breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/tutoriels-champions"> Tutoriels champions > </Link>
      toplane
    </div>
    <h1 className="globalTitle-page">Tutoriels Toplane</h1>
    <div className="toplane__cards">
      <div className="toplane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="toplane__cards__card">
            <img src={rumble} alt="" />
            <h2>Rumble</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="toplane__cards__card">
            <img src={pantheon} alt="" />
            <h2>Pantheon</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="toplane__cards__card">
            <img src={gnar} alt="" />
            <h2>Gnar</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="toplane__cards__card">
            <img src={camille} alt="" />
            <h2>Camille</h2>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Toplane;
