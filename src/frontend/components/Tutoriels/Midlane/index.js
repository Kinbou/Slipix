import React from 'react';
import { Link } from 'react-router-dom';

// Champions
// import yasuo from '../../../../assets/images/championsMidlane/yasuo.jpg';
// // import ekko from '../../../../assets/images/championsJungle/ekko.jpg';
// import katarina from '../../../../assets/images/championsMidlane/katarina.jpg';
// import ryze from '../../../../assets/images/championsMidlane/ryze.jpg';
// import lux from '../../../../assets/images/championsMidlane/lux.jpg';
// import akali from '../../../../assets/images/championsMidlane/akali.jpg';
// import orianna from '../../../../assets/images/championsMidlane/orianna.jpg';
// import ahri from '../../../../assets/images/championsMidlane/ahri.jpg';
// import leBlanc from '../../../../assets/images/championsMidlane/le_blanc.jpg';
// import galio from '../../../../assets/images/championsMidlane/galio.jpg';
// import vladimir from '../../../../assets/images/championsMidlane/vladimir.jpg';
// import zoe from '../../../../assets/images/championsMidlane/zoe.jpg';
// import annie from '../../../../assets/images/championsMidlane/annie.jpg';
// import twistedFate from '../../../../assets/images/championsMidlane/twisted_fate.jpg';
// import kassadin from '../../../../assets/images/championsMidlane/kassadin.jpg';
// import veigar from '../../../../assets/images/championsMidlane/veigar.jpg';
// import corki from '../../../../assets/images/championsMidlane/corki.jpg';
// // import gragas from '../../../../assets/images/championsMidlane/gragas.jpg';
// import zed from '../../../../assets/images/championsMidlane/zed.jpg';
// import fizz from '../../../../assets/images/championsMidlane/fizz.jpg';
// import talon from '../../../../assets/images/championsMidlane/talon.jpg';


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
