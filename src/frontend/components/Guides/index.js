import React from 'react';
import { Link } from 'react-router-dom';

// import image
import role from '../../../assets/images/guides/1280x720_LoL.jpg';
import laneWin from '../../../assets/images/guides/laneWin.jpg';
import gameWin from '../../../assets/images/guides/gameWin.jpg';
import progression from '../../../assets/images/guides/progression.png';
import mentalWin from '../../../assets/images/guides/mentalWin.png';
import lowEloProblem from '../../../assets/images/picturesYoutube/PROBLEMEBASELO.jpg';
import './guides.scss';

const Guides = () => (
  <div className="guides">
    <h1 className="globalTitle-page">Guides League of Legends</h1>
    <p className="guides__intro">Vous trouverez ici mes guides & conseils pour vous aider</p>
    <div className="guides__together__cards">
      <div className="guides__cards">
        <Link to="/guides/role-champion">
          <div className="guides__cards__card">
            <h3>Trouver son rôle/champion</h3>
            <img src={role} alt="" />
          </div>
        </Link>
        <Link to="/guides/progresser-sur-leagueOfLegends">
          <div className="guides__cards__card">
            <h3>Progresser sur League of Legends</h3>
            <img src={progression} alt="" />
          </div>
        </Link>
        <Link to="/guides/sortir-du-bas-elo">
          <div className="guides__cards__card">
            <h3>Sortir du bas Elo</h3>
            <img src={lowEloProblem} alt="" />
          </div>
        </Link>
        <Link to="/guides/gagner-sa-phase-de-lane">
          <div className="guides__cards__card">
            <h3>Gagner sa phase de lane</h3>
            <img src={laneWin} alt="" />
          </div>
        </Link>
        <Link to="/guides/mental&rage">
          <div className="guides__cards__card">
            <h3>Le mental & la rage</h3>
            <img className="guides__cards__card__test__picture" src={mentalWin} alt="" />
          </div>
        </Link>
        {/* <Link to="/guides/vision-du-jeu">
        <div className="guides__cards__card">
          <h3>La vision du jeu</h3>
          <img src={gameWin} alt="" />
        </div>
      </Link> */}
      </div>
    </div>
  </div>
);

export default Guides;
