import React from 'react';
import { Link } from 'react-router-dom';
import './visionGame.scss';

const VisionGame = () => (
  <div className="visionGame">
    <div className="breadcrumb">
      <Link to="/">Accueil &gt;</Link>
      <Link to="/guides"> guides &gt; </Link>
      la vision du jeu
    </div>
    <h1 className="globalTitle-page">La vision du jeu</h1>
  </div>
);

export default VisionGame;
