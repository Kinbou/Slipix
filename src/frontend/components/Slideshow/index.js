import React from 'react';
import { Slide } from 'react-slideshow-image';
import youtube from 'src/assets/images/banner/YoutubeSLIPIX.jpg';
import twitch from 'src/assets/images/banner/twitchSlipixSlide.jpg';
import coaching from 'src/assets/images/banner/CoachingSLIPIX.jpg';

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
            <h2>Rejoignez moi sur Youtube !</h2>
            <a href="https://www.youtube.com/user/DeiiZFamily" target="_blanc" label><button type="button" target="_blanc">Cliquez Ici</button></a>
          </div>
        </div>
        <div className="each-slide">
          <img src={twitch} alt="twitch" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__twitch">
            <h2>Rejoignez moi sur Twitch !</h2>
            <a href="https://www.twitch.tv/slipixxx" target="_blanc" label><button type="button">Cliquez Ici</button></a>
          </div>
        </div>
        <div className="each-slide">
          <img src={coaching} alt="coaching" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__coaching">
            <h2>Rejoignez LA #TEAMSLIP SUR DISCORD !</h2>
            <p>+ de 7000 membres</p>
            <a href="https://discord.gg/xsZbWs" target="_blanc" label><button type="button">Cliquez Ici</button></a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
