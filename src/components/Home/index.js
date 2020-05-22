import React from 'react';

import SocialNetwork from './SocialNetwork';
import Publicity from './Publicity';
// picture
import championBroken from '../../assets/images/ChampionBroken.jpg';
import lowEloProblem from '../../assets/images/PROBLEMEBASELO.jpg';
import trueOneShot from '../../assets/images/VraiOneShot.jpg';
import championOtpSaison10 from '../../assets/images/championOtpSaison10.jpg';
import background from '../../assets/images/faille_de_linvocateur.jpg';
import logoLol from '../../assets/images/logoLol.png';
import logoSlipix from '../../assets/images/SlipixLogo.png';
import './home.scss';

const Home = () => (
  <div className="home" styles={{ backgroundImage: `url(${background})` }}>
    <div className="home__introduction">
      <img src={logoLol} alt="" />
      <h1>Bienvenue sur mon site League of Legends</h1>
      <img src={logoSlipix} alt="Slipix" />
    </div>
    <div className="home__introduction__content">
      <p><strong className="home__introduction__content__important">Progresser </strong>et <strong className="home__introduction__content__important">apprendre</strong> peu importe votre niveau, dans la bonne ambiance c'est ici !</p><br />
      <p className="home__introduction__content__italic">"La persévérance, c'est ce qui rend l'impossible possible, le possible probable et le probable réalisé." <span className="home__introduction__content__important">-Moine de IONIA</span></p>
    </div>
    <div className="home__content">
      <p>Découvrez les 4 vidéos tendances</p>
    </div>
    <div className="home__news">
      <img src={championBroken} alt="3 champion broken" />
      <img src={lowEloProblem} alt="problème bas élo" />
      <img src={trueOneShot} alt="le vrai one shot" />
      <img src={championOtpSaison10} alt="3 champion otp saison 10" />
    </div>
    <h2>Mes réseaux sociaux et plateformes</h2>
    <SocialNetwork />
    <Publicity />
  </div>
);

export default Home;
