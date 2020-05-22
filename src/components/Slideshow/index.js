import React from 'react';
import { Slide } from 'react-slideshow-image';
import youtube from '../../assets/images/banner/YoutubeSLIPIX.png';
import twitch from '../../assets/images/banner/TwitchSlipixSlide.png';
import coaching from '../../assets/images/CoachingSLIPIX.png';

import './slideshow.scss';

const Slideshow = () => {
  const proprietes = {
    duration: 5000,
    transitionDuration: 900,
    infinite: true,
    indicators: false,
    arrows: true,
  };

  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="containerSlide__each-slide">
          <img src={youtube} alt="youtube" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__youtube">
            <h2>Rejoins moi sur Youtube !</h2>
            <p>Une vidéo par semaine</p>
            <button type="button">Rejoindre</button>
          </div>
        </div>
        <div className="each-slide">
          <img src={twitch} alt="twitch" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__twitch">
            <h2>Rejoins moi sur Twitch !</h2>
            <p>Une vidéo par semaine</p>
            <button type="button">Rejoindre</button>
          </div>
        </div>
        <div className="each-slide">
          <img src={coaching} alt="coaching" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__coaching">
            <h2>REJOINS LA #TEAMSLIP SUR DISCORD !</h2>
            <p>+ de 5000 membres</p>
            <button type="button">Rejoindre</button>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
