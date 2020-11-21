import React from 'react';
import { useTitle } from 'src/hooks/useTitle';
// images
import autoroute from 'src/assets/images/news/autoroute.jpg';
import sett from 'src/assets/images/news/sett.jpg';
import lulugun from 'src/assets/images/news/lulugun.jpg';
import destruction from 'src/assets/images/news/destruction.jpg';
import './news.scss';

const News = () => {
  useTitle('Nouveautés');
  return (
    <div className="news">
      <h1 className="globalTitle-page">Nouveautés</h1>
      <h3>Vous trouverez ici mes vidéos du moment</h3>
      <div className="news__cards">
        <div className="news__cards__ligne">
          <a href="https://www.youtube.com/watch?v=kpLVENAm3GQ" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title  red">Xin Zhao Autoroute</h2>
              <img src={autoroute} alt="" />
              <p className="news__cards__card__content">Gros Potentiel en saison 11 !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=EVYQ5zTrjAw" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title">Tartisett</h2>
              <img src={sett} alt="" />
              <p className="news__cards__card__content">Le Dieu de la saison 11, Nouveau stuff Broken !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=KYp-9XZIgG0" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title turquoise">Lulugun</h2>
              <img src={lulugun} alt="" />
              <p className="news__cards__card__content">Bombardement.</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=Rp1mDJMF8Wk" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title jaune">Warwick destruction</h2>
              <img src={destruction} alt="" />
              <p className="news__cards__card__content">Ce stuff Oneshot avec l'ultime</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
