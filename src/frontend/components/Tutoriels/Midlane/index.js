import React from 'react';
import { Link } from 'react-router-dom';


import './midlane.scss';

const Midlane = () => (
  <div className="midlane">
    <div className="midlane__breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/tutoriels-champions"> Tutoriels champions > </Link>
      jungle
    </div>
    <h1 className="globalTitle-page">Tutoriels Midlane</h1>
    <div className="midlane__cards">
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/zac">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Yasuo</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Ekko</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Katarina</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Ryze</h3>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Lux</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Akali</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Orianna</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Ahri</h3>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Le Blanc</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Galio</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Vladimir</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Zoé</h3>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Annie</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Twisted Fate</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Kassadin</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Veigar</h3>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Corki</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Gragas</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Zed</h3>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Fizz</h3>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src="" alt="" />
            <h3>Talon</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Midlane;
