import React from 'react';
import { motion } from 'framer-motion';

import { useTitle } from 'src/hooks/useTitle';
import { animationOne, transition } from 'src/utils/animations';
import './home.scss';

// picture TENDANCES
import Winrate from 'src/assets/images/picturesYoutube/36%Winrate.jpg';
import otpTeemo from 'src/assets/images/picturesYoutube/otpTeemo.jpg';
import visiteFer4Garen from 'src/assets/images/picturesYoutube/visiteFer4Garen.jpg';
import Xin90000 from 'src/assets/images/picturesYoutube/Xin90000.jpg';

// picture
import logoLol from 'src/assets/images/logoLol.png';
import logoSlipix from 'src/assets/images/SlipixLogo.png';

// import
import SocialNetwork from 'src/frontend/components/SocialNetwork';
import Publicity from './Publicity';

const Home = () => {
  useTitle();
  return (
    <motion.div
      key="home"
      initial="out"
      animate="in"
      exit="exit"
      variants={animationOne}
      transition={transition}
    >
      <div className="home">
        <div className="home__introduction">
          <img className="home__introduction__logo" src={logoLol} alt="" />
          <h1>Bienvenue sur mon site League of Legends</h1>
          <img className="home__introduction__logo" src={logoSlipix} alt="Slipix" />
        </div>
        <div className="home__introduction__content">
          <p><strong className="home__introduction__content__important">Progresser </strong>et <strong className="home__introduction__content__important">apprendre</strong> peu importe votre niveau, dans la bonne ambiance c'est ici !</p><br />
          <p className="home__introduction__content__italic">"La persévérance, c'est ce qui rend l'impossible possible, le possible probable et le probable réalisé." <span className="home__introduction__content__important">-Moine de IONIA</span></p>
        </div>
        <div className="home__content">
          <h2>Découvrez les 4 vidéos tendances</h2>
        </div>
        <div className="home__news">
          <a href="https://youtu.be/aYa9Um6mmW0" target="_blanc"><img src={Winrate} alt="36% winrate" /></a>
          <a href="https://www.youtube.com/watch?v=CVRFZDJRmc0" target="_blanc"><img src={otpTeemo} alt="otp teemo" /></a>
          <a href="https://youtu.be/MMSXDskFFKE" target="_blanc"><img src={visiteFer4Garen} alt="Visite fer 4 Garen" /></a>
          <a href="https://youtu.be/Je09x4vu6MU" target="_blanc"><img src={Xin90000} alt="Xin 9000000" /></a>
        </div>
        <h2>Mes réseaux sociaux et plateformes</h2>
        <SocialNetwork />
        <Publicity />
      </div>
    </motion.div>
  );
};

export default Home;
