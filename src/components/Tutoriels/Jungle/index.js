import React from 'react';
import { Link } from 'react-router-dom';
// images
import zac from '../../../assets/images/championsJungle/zac.jpg';
import olaf from '../../../assets/images/championsJungle/olaf.jpg';
import ekko from '../../../assets/images/championsJungle/ekko.jpg';
import leeSin from '../../../assets/images/championsJungle/lee_sin.jpg';
import evelynn from '../../../assets/images/championsJungle/evelynn.jpg';
import xinZhao from '../../../assets/images/championsJungle/xin_zhao.jpg';
import shaco from '../../../assets/images/championsJungle/shaco.jpg';
import gragas from '../../../assets/images/championsMidlane/gragas.jpg';

import './jungle.scss';

const Jungle = () => (
  <div className="jungle">
    <div className="jungle__breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/tutoriels-champions"> Tutoriels champions > </Link>
      jungle
    </div>
    <h1 className="globalTitle-page">Tutoriels Jungle</h1>
    <div className="jungle__cards">
      <div className="jungle__cards__line">
        <Link to="/tutoriels-champions/jungle/zac">
          <div className="jungle__cards__card">
            <img src={zac} alt="" />
            <h2>Zac</h2>
          </div>
        </Link>
        <Link to="/tutoriels-champions/jungle/olaf">
          <div className="jungle__cards__card">
            <img src={olaf} alt="" />
            <h2>Olaf</h2>
          </div>
        </Link>
        <Link to="/tutoriels-champions/jungle/ekko">
          <div className="jungle__cards__card">
            <img src={ekko} alt="" />
            <h2>Ekko</h2>
          </div>
        </Link>
        <Link to="/tutoriels-champions/jungle/lee-sin">
          <div className="jungle__cards__card">
            <img src={leeSin} alt="" />
            <h2>Lee Sin</h2>
          </div>
        </Link>
      </div>

      <div className="jungle__cards__line">
        <Link to="/tutoriels-champions/jungle/gragas">
          <div className="jungle__cards__card">
            <img src={gragas} alt="" />
            <h2>Gragas</h2>
          </div>
        </Link>
        <div className="jungle__cards__card">
          <img src={evelynn} alt="" />
          <h2>Evelynn</h2>
        </div>
        <Link to="/tutoriels-jungle/lee-sin">
          <div className="jungle__cards__card">
            <img src={xinZhao} alt="" />
            <h2>Xin Zhao</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/shaco">
          <div className="jungle__cards__card">
            <img src={shaco} alt="" />
            <h2>Shaco</h2>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Jungle;
