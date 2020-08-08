import React from 'react';
import { Link } from 'react-router-dom';
import SocialNetwork from '../Home/SocialNetwork';
// images
import refuseResist from '../../../assets/images/refuseResist.png';
import coachingSlipix from '../../../assets/images/picturesYoutube/coachingSlipix.jpg';
import './presentation.scss';

const Presentation = () => (
  <div className="presentation">
    <h1 className="globalTitle-page">Présentation</h1>
    <h2>Salut c'est <span className="red">Slipix</span>  Bienvenue sur mon site Officiel !</h2>
    <img className="presentation__coaching" src={coachingSlipix} alt="" />
    <p>Joueur de League of Legends depuis 2014, Coach <span className="red">Mental/Stratégique</span> depuis 2018.</p>
    <p>YouTuber/Streamer sur <span className="purple">Twitch</span> par passion depuis 2016, j'ai toujours aimé
      le contact avec ma communauté.
    </p>
    <br />
    <p>Je me suis trouvé une passion pour le Coaching quand j'ai appris 2-3
      trucs à des amis sur League of Legends, et depuis je ne m'en lasse pas.
    </p><br />
    <p>Je suis actuellement à 2000 heures d'experience de coaching en <span className="orange">SoloQ/DuoQ</span> et 1000 heures en Team complète.
    </p>
    <p>Je ne prend plus de réservations coaching <span className="orange">SoloQ/DuoQ</span> depuis juin 2020 afin de me concentrer exclusivement sur le coaching de team</p><br />
    <p className="presentation__content__refuseResist">Je suis en ce moment leader de la Team <span className="red">REFUSE RESIST</span><img src={refuseResist} alt="" className="presentation__image__refuseResist" /></p><p> qui a pour objectif  de rejoindre la <span className="blue">Ligue 2</span>.</p>
    <br />
    <p className="presentation__but">Le but de ce site est simple :<br />
      - Vous aider avec des <span className="green">guides</span> sur la <span className="presentation__game">macro-game</span> et la <span className="presentation__game">micro-gestion</span><br />
      - Vous aider avec des <span className="green">tutoriels</span> complets sur vos champions favoris<br />
      - Theory crafter dans l'âme je vous proposerai du contenu fun sur des
      <span className="blue"> trollpicks</span> que j'ai travaillé.<br />
      - Vous partager mon <span className="green">savoir</span> sur League of Legends ainsi que mon contenu <span className="red">Youtube</span><br /><br />
      Vous trouverez des liens direct avec mes vidéos <span className="red">Youtube</span> pour
      faciliter votre navigation et votre progression.
    </p><br />
    <p>N'hésitez pas à rejoindre le <a href="https://discord.com/invite/fsTYTg5" className="presentation__discord" target="_blanc">discord</a> de la <span className="red">#TEAMSLIP</span> et me suivre sur les réseaux sociaux ainsi que les plateformes <span className="presentation__youtube">Youtube</span> et <span className="presentation__twitch">Twitch</span>.</p>
    <SocialNetwork className="presentation__socialNetwork" />
    <p>tout le contenu de ce site est bien évidemment gratuit, si vous désirez soutenir son avancée de plusieurs manières n'hésitez pas à cliquer ici :  <Link to="/me-soutenir" className="link">Me soutenir</Link>
    </p> <br />
    <p>Merci pour votre lecture et j'espère que ce site vous aidera grandement,
      <span className="red"> Slipix.</span>
    </p>
  </div>
);

export default Presentation;
