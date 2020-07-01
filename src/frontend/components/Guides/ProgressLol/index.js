import React from 'react';
import { Link } from 'react-router-dom';
import './progressLol.scss';

const progressLol = () => (
  <div className="progressLol">
    <div className="breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/guides"> guides > </Link>
      progresser sur League of Legends
    </div>
    <h1 className="globalTitle-page">Progresser sur League of Legends</h1>
  </div>
);

export default progressLol;
