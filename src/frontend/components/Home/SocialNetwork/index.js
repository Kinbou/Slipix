import React from 'react';

import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
// images
import facebook from '../../../../assets/images/socialNetwork/Facebook.png';
import twitch from '../../../../assets/images/socialNetwork/Twitch.png';
import twitter from '../../../../assets/images/socialNetwork/twitter.png';
import youtube from '../../../../assets/images/socialNetwork/Youtube.png';
import instagram from '../../../../assets/images/socialNetwork/Instagram.png';
import './socialNetwork.scss';

const SocialNetwork = () => {
  const location = useLocation();
  // return the current pathname
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isPresentation = currentPath === '/presentation';

  const appClass = classNames('socialNetwork', {
    'socialNetwork--home': isHome,
    'socialNetwork--presentation': isPresentation,
  });
  return (
    <div className={appClass}>
      <div className="socialNetwork__card socialNetwork__card__youtube" data-state="#about">
        <a href="https://www.youtube.com/channel/UCA4h2qHrC9x7_ChsOZvjoZQ" target="_blanc">
          <div className="socialNetwork__card__cover">
            <img src={youtube} alt="youtube" className="socialNetwork__card__cover__picture " />
          </div>
        </a>
      </div>
      <div className="socialNetwork__card socialNetwork__card__twitch" data-state="#about">
        <a href="https://www.twitch.tv/slipixxx" target="_blanc">
          <div className="socialNetwork__card__cover">
            <img src={twitch} alt="twitch" className="socialNetwork__card__cover__picture presentation__socialNetwork__twitch" />
          </div>
        </a>
      </div>
      <div className="socialNetwork__card socialNetwork__card__facebook" data-state="#about">
        <a href="https://fr-fr.facebook.com/Slipix/" target="_blanc">
          <div className="socialNetwork__card__cover">
            <img src={facebook} alt="facebook" className="socialNetwork__card__cover__picture" />
          </div>
        </a>
      </div>
      <div className="socialNetwork__card socialNetwork__card__twitter" data-state="#about">
        <a href="https://twitter.com/SlipixLoL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blanc">
          <div className="socialNetwork__card__cover">
            <img src={twitter} alt="twitter" className="socialNetwork__card__cover__picture presentation__socialNetwork__twitter" />
          </div>
        </a>
      </div>
      <div className="socialNetwork__card socialNetwork__card__instagram" data-state="#about">
        <a href="https://www.instagram.com/slipixlol/?hl=fr" target="_blanc">
          <div className="socialNetwork__card__cover">
            <img src={instagram} alt="instagram" className="presentation__socialNetwork__instagram socialNetwork__card__cover__picture" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
