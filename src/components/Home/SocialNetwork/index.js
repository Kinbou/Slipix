import React from 'react';

import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
// images
import facebook from '../../../assets/images/Facebook.png';
import twitch from '../../../assets/images/Twitch.png';
import twitter from '../../../assets/images/twitter.png';
import youtube from '../../../assets/images/Youtube.png';
import instagram from '../../../assets/images/Instagram.png';
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
        <div className="socialNetwork__card__cover">
          <img src={youtube} alt="youtube" className="socialNetwork__card__cover__picture " />
        </div>
      </div>
      <div className="socialNetwork__card socialNetwork__card__twitch" data-state="#about">
        <div className="socialNetwork__card__cover">
          <img src={twitch} alt="twitch" className="socialNetwork__card__cover__picture presentation__socialNetwork__twitch" />
        </div>
      </div>
      <div className="socialNetwork__card socialNetwork__card__facebook" data-state="#about">
        <div className="socialNetwork__card__cover">
          <img src={facebook} alt="facebook" className="socialNetwork__card__cover__picture" />
        </div>
      </div>
      <div className="socialNetwork__card socialNetwork__card__twitter" data-state="#about">
        <div className="socialNetwork__card__cover">
          <img src={twitter} alt="twitter" className="socialNetwork__card__cover__picture presentation__socialNetwork__twitter" />
        </div>
      </div>
      <div className="socialNetwork__card socialNetwork__card__instagram" data-state="#about">
        <div className="socialNetwork__card__cover">
          <img src={instagram} alt="instagram" className="presentation__socialNetwork__instagram socialNetwork__card__cover__picture" />
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
