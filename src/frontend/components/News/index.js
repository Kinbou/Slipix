import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
// images
import Janna from '../../../assets/images/picturesYoutube/JannaForet.jpg';
import coachingPetitCousin from '../../../assets/images/news/coachingPetitCousin.jpg';
import oneshotflak from '../../../assets/images/news/oneshotflak.jpg';
import coupDeGueule from '../../../assets/images/news/coupDeGueule.jpg';
import ironVsDiamant from '../../../assets/images/news/ironVsDiamant.jpg';
import './news.scss';

const News = () => {
  useTitle('Nouveautés');
  return (
    <div className="news">
      <h1 className="globalTitle-page">Nouveautés</h1>
      <h3>Vous trouverez ici mes vidéos du moment</h3>
      <div className="news__cards">
        <div className="news__cards__ligne">
          <a href="https://www.youtube.com/watch?v=7B-ErKC8s6M&t=" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title  red">Coaching Familial</h2>
              <img src={coachingPetitCousin} alt="" />
              <p className="news__cards__card__content">Coaching bas elo de mon petit cousin, le futur faker !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=-WAFOtFb0Lw&t=" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title">Thresh oneShot Flak</h2>
              <img src={oneshotflak} alt="" />
              <p className="news__cards__card__content">Le retour du grand FLAK FLAK, les dégâts monstrueux !</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=vWfeB_2kbU4&t=" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title turquoise">Coup de gueule</h2>
              <img src={coupDeGueule} alt="" />
              <p className="news__cards__card__content">Débat sur la mauvaise foi des joueurs League of Legends.</p>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=omdZsZq7-40&t" target="_blanc">
            <div className="news__cards__card news__cards__first">
              <h2 className="news__cards__card__title news__cards__first__title jaune">Iron vs Diamant</h2>
              <img src={ironVsDiamant} alt="" />
              <p className="news__cards__card__content">Une vidéo d'un viewer Iron qui défonce un random Diamant ?!</p>
            </div>
          </a>
        </div>
        {/* <div className="news__cards__ligne">
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
        </div> */}
      </div>
    </div>
  );
};

export default News;
