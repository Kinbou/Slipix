import React from 'react';
import { Link } from 'react-router-dom';

import './toplane.scss';

// champions
// import rumble from '../../../../assets/images/championsToplane/rumble.jpg';
// import pantheon from '../../../../assets/images/championsToplane/pantheon.jpg';
// import gnar from '../../../../assets/images/championsToplane/gnar.jpg';
// import camille from '../../../../assets/images/championsToplane/camille.jpg';
// import volibear from '../../../../assets/images/championsToplane/volibear.jpg';
// import mordekaiser from '../../../../assets/images/championsToplane/mordekaiser.jpg';
// import kled from '../../../../assets/images/championsToplane/kled.jpg';
// import vladimir from '../../../../assets/images/championsToplane/vladimir.jpg';

// // Soon
// import aatrox from '../../../../assets/images/championsToplane/aatrox.jpg';
// import darius from '../../../../assets/images/championsToplane/darius.jpg';
// import sett from '../../../../assets/images/championsToplane/sett.jpg';
// import yasuo from '../../../../assets/images/championsToplane/yasuo.jpg';

const Toplane = () => (
  <div className="toplane">
    <div className="breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/tutoriels-champions"> Tutoriels champions > </Link>
      toplane
    </div>
    <h1 className="globalTitle-page">Tutoriels Toplane</h1>
    <div className="toplane__cards">
      <div className="toplane__cards__line">
        <Link to="/tutoriels-champions/toplane/rumble">
          <div className="toplane__cards__card">
            <img src={rumble} alt="" />
            <h3>Rumble</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/toplane/pantheon">
          <div className="toplane__cards__card">
            <img src={pantheon} alt="" />
            <h3>Pantheon</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/toplane/gnar">
          <div className="toplane__cards__card">
            <img src={gnar} alt="" />
            <h3>Gnar</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/toplane/camille">
          <div className="toplane__cards__card">
            <img src={camille} alt="" />
            <h3>Camille</h3>
          </div>
        </Link>
      </div>
    </div>
    <div className="toplane__cards">
      <div className="toplane__cards__line">
        <Link to="/tutoriels-champions/top/volibear">
          <div className="toplane__cards__card">
            <img src={volibear} alt="" />
            <h3>Volibear</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/top/mordekaiser">
          <div className="toplane__cards__card">
            <img src={mordekaiser} alt="" />
            <h3>Mordekaiser</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/top/kled">
          <div className="toplane__cards__card">
            <img src={kled} alt="" />
            <h3>Kled</h3>
          </div>
        </Link>
        <Link to="/tutoriels-champions/top/vladimir">
          <div className="toplane__cards__card">
            <img src={vladimir} alt="" />
            <h3>Vladimir</h3>
          </div>
        </Link>
      </div>
    </div>
    <div>
      <div className="betweenParagraph" />
      <h2>Prochainement</h2>
      <div className="toplane__cards__line">
        <div className="toplane__cards__cardSoon">
          <img src={aatrox} alt="" />
          <h3>Aatrox</h3>
        </div>
        <div className="toplane__cards__cardSoon">
          <img src={yasuo} alt="" />
          <h3>Yasuo</h3>
        </div>
        <div className="toplane__cards__cardSoon">
          <img src={darius} alt="" />
          <h3>Darius</h3>
        </div>
        <div className="toplane__cards__cardSoon">
          <img src={sett} alt="" />
          <h3>Sett</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Toplane;
