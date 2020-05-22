import React from 'react';
import title from '../../assets/images/PARTENAIRES.png';
import instantGaming from '../../assets/images/InstantGamingSLIPIX22.png';
import twitch from '../../assets/images/TwitchSLIPIX.png';
import teamRefuse from '../../assets/images/TeamRefuseResistSLIPIX21.png';
import teespring from '../../assets/images/TeespringSLIPIX20.png';
import './partenaires.scss';

const Partenaires = () => (
  <div className="partenaires">
    <img src={title} alt="partenaire" className="partenaires__title" />
    <div className="partenaires__content">
      <img src={teespring} alt="partenaire" className="partenaires__content__picture" />
      <img src={teamRefuse} alt="partenaire" className="partenaires__content__picture" />
      <img src={instantGaming} alt="partenaire" className="partenaires__content__picture" />
      <img src={twitch} alt="partenaire" className="partenaires__content__picture partenaires__content__picture__twitch" />
    </div>
  </div>
);

export default Partenaires;
