import React from 'react';

// images
import Janna from '../../assets/images/JannaForet.jpg';
import './news.scss';

const News = () => (

  <div className="news">
    <h1>Nouveautés</h1>
    <h3>Vous trouverez ici mes vidéos du moment</h3>
    <div className="news__cards">
      <div className="news__cards__ligne">
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez <span className="news__cards__first__janna">Janna</span> Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une <span className="news__cards__first__janna">Janna jungle full ap</span>, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez Janna Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une Janna jungle full ap, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
      </div>
      <div className="news__cards__ligne">
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez Janna Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une Janna jungle full ap, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez Janna Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une Janna jungle full ap, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
      </div>
      <div className="news__cards__ligne">
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez Janna Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une Janna jungle full ap, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
        <a href="">
          <div className="news__cards__card news__cards__first">
            <h2 className="news__cards__card__title news__cards__first__title">Découvrez Janna Forêt</h2>
            <img src={Janna} alt="" />
            <p className="news__cards__card__content">Vidéo Fun avec une Janna jungle full ap, on essaye de voir un petit potentiel sur le pick...</p>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default News;
