import React from 'react';
import { Link } from 'react-router-dom';

import discord from '../../../../assets/images/socialNetwork/Discord.png';
// import utip from '../../../assets/images/Utip.png';
import discordTitle from '../../../../assets/images/discordTitle.png';
import teamSlip from '../../../../assets/images/teamSlip.png';
import './publicity.scss';

const Publicity = () => (
  <div className="publi">
    <a href="https://discord.com/invite/fsTYTg5" target="_blanc">
      <div className="publi__banner discord">
        <div className="publi__banner__left">
          <img className="discordTitle" src={discordTitle} alt="" />
        </div>
        <div className="publi__banner__right">
          <p>Rejoins Nous</p>
          <div className="publi__banner__right__picture">
            <img src={discord} alt="" />
            <img src={teamSlip} alt="" />
          </div>
        </div>
      </div>
    </a>
    {/* <Link to="">
      <div className="publi__banner discord">
        <div className="publi__banner__left">
          <p>Soutenez-moi gratuitement</p>
          <p>En regardant des Pubs</p>
        </div>
        <div className="publi__banner__right">
          <p>Regarder une Pub</p>
          <img src={utip} alt="" />
        </div>
      </div>
    </Link> */}
  </div>
);

export default Publicity;
