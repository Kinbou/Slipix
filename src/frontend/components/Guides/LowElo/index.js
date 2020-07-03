import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../Tutoriels/Youtube';

// images
import logoSlipix from '../../../../assets/images/lowElo/logoSlipix.png';

import './lowElo.scss';

const LowElo = () => (
  <div className="lowElo">
    <div className="lowElo__breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/guides"> guides > </Link>
      progresser sur League of Legends
    </div>
    <h1 className="globalTitle-page">Sortir du bas Elo</h1>
    <p>Salut la #TEAMSLIP c'est coach Slipix et on va parler du bas elo dans league of Legends</p>
    <img className="picture__logoSlipix" src={logoSlipix} alt="" />
  </div>
);

export default LowElo;
