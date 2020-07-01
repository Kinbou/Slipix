import React from 'react';
import { Link } from 'react-router-dom';

// Champions
import yasuo from '../../../../assets/images/championsMidlane/yasuo.jpg';
import ekko from '../../../../assets/images/championsJungle/ekko.jpg';
import katarina from '../../../../assets/images/championsMidlane/katarina.jpg';
import ryze from '../../../../assets/images/championsMidlane/ryze.jpg';
import lux from '../../../../assets/images/championsMidlane/lux.jpg';
import akali from '../../../../assets/images/championsMidlane/akali.jpg';
import orianna from '../../../../assets/images/championsMidlane/orianna.jpg';
import ahri from '../../../../assets/images/championsMidlane/ahri.jpg';
import leBlanc from '../../../../assets/images/championsMidlane/le_blanc.jpg';
import galio from '../../../../assets/images/championsMidlane/galio.jpg';
import vladimir from '../../../../assets/images/championsMidlane/vladimir.jpg';
import zoe from '../../../../assets/images/championsMidlane/zoe.jpg';
import annie from '../../../../assets/images/championsMidlane/annie.jpg';
import twistedFate from '../../../../assets/images/championsMidlane/twisted_fate.jpg';
import kassadin from '../../../../assets/images/championsMidlane/kassadin.jpg';
import veigar from '../../../../assets/images/championsMidlane/veigar.jpg';
import corki from '../../../../assets/images/championsMidlane/corki.jpg';
import gragas from '../../../../assets/images/championsMidlane/gragas.jpg';
import zed from '../../../../assets/images/championsMidlane/zed.jpg';
import fizz from '../../../../assets/images/championsMidlane/fizz.jpg';
import talon from '../../../../assets/images/championsMidlane/talon.jpg';


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
            <img src={yasuo} alt="" />
            <h2>Yasuo</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={ekko} alt="" />
            <h2>Ekko</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={katarina} alt="" />
            <h2>Katarina</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={ryze} alt="" />
            <h2>Ryze</h2>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={lux} alt="" />
            <h2>Lux</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={akali} alt="" />
            <h2>Akali</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={orianna} alt="" />
            <h2>Orianna</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={ahri} alt="" />
            <h2>Ahri</h2>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={leBlanc} alt="" />
            <h2>Le Blanc</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={galio} alt="" />
            <h2>Galio</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={vladimir} alt="" />
            <h2>Vladimir</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={zoe} alt="" />
            <h2>Zoé</h2>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={annie} alt="" />
            <h2>Annie</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={twistedFate} alt="" />
            <h2>Twisted Fate</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={kassadin} alt="" />
            <h2>Kassadin</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={veigar} alt="" />
            <h2>Veigar</h2>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={corki} alt="" />
            <h2>Corki</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={gragas} alt="" />
            <h2>Gragas</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={zed} alt="" />
            <h2>Zed</h2>
          </div>
        </Link>
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={fizz} alt="" />
            <h2>Fizz</h2>
          </div>
        </Link>
      </div>
      <div className="midlane__cards__line">
        <Link to="/tutoriels-jungle/olaf">
          <div className="midlane__cards__card">
            <img src={talon} alt="" />
            <h2>Talon</h2>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Midlane;
