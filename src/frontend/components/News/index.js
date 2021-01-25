import React from 'react';
import { useTitle } from 'src/hooks/useTitle';
// images
import tropFun from 'src/assets/images/news/tropFun.jpg';
import benLuden from 'src/assets/images/news/banLuden.jpg';
import tropFort from 'src/assets/images/news/tropFort.jpg';
import caFaitMal from 'src/assets/images/news/caFaitMal.jpg';
import './news.scss';

const News = () => {
  useTitle('Nouveautés');
  return (
    <div className="news">
      <h1 className="globalTitle-page">Nouveautés</h1>
      <h3>Vous trouverez ici mes vidéos du moment</h3>
      <div className="news__cards">
        <div className="news__cards__ligne">
          <a href="https://www.youtube.com/watch?v=atD6gzpBngM&t" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title  red">Jinx Bombardement</h2>
              <img src={tropFun} alt="" />
              <p className="news__cards__card__content">Gameplay ultra fun !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=zfYqKojBpls&t" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title">Zilean Ben Luden</h2>
              <img src={benLuden} alt="" />
              <p className="news__cards__card__content">Kamikaze Boom !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=OkXUor_HpUI&t=3s" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title turquoise">Braum Paff</h2>
              <img src={tropFort} alt="" />
              <p className="news__cards__card__content">Le Dieu du ring !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=8D6olUVQ6VE&t" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title jaune">Ivern Ap</h2>
              <img src={caFaitMal} alt="" />
              <p className="news__cards__card__content">Surprise de la nature</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
