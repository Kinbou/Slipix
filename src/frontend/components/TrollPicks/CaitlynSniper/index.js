import React from 'react';
import { Link } from 'react-router-dom';


import './caitlynSniper.scss';

// runes
import moissonNoire from 'src/assets/images/runes/moissonNoire.png';
import coupBas from 'src/assets/images/runes/coupBas.png';
import arracheurOeil from 'src/assets/images/runes/arracheurOeil.png';
import chasseurUltime from 'src/assets/images/runes/chasseurUltime.png';
import presenceDesprit from 'src/assets/images/runes/presenceDesprit.png';
import coupDeGrace from 'src/assets/images/runes/coupDeGrace.png';

// images
import logoSlipix from 'src/assets/images/trollpicks/caitlynSniper/logoSlipix.png';
import caitlynLetalite from 'src/assets/images/trollpicks/caitlynSniper/caitlyn_letalite.png';
import missionSniper from 'src/assets/images/trollpicks/caitlynSniper/missionSniper.jpg';
import pageRune from 'src/assets/images/trollpicks/caitlynSniper/pageRune.png';
import trollSniper from 'src/assets/images/trollpicks/caitlynSniper/trollSniper.png';
import sniperCaitlyn from 'src/assets/images/trollpicks/caitlynSniper/sniperCaitlyn.png';

import Youtube from '../../Tutoriels/Youtube';

const CaitlynSniper = () => (
  <div className="caitlynSniper">
    <div className="breadcrumb">
      <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
      <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
      Caitlyn Laser
    </div>
    <h1 className="globalTitle-page">Caitlyn Sniper</h1>
    <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Caitlyn</span> sniper dans League of Legends !</p>
    <img className="logo" src={logoSlipix} alt="" />
    <div className="backgroundParagraphe caitlynSniperIntro">
      <p className="intro">UN ADC QUI SE TRANSFORME EN ASSASSIN AVEC UN STUFF TOTALEMENT DIFFERENT ?</p>
      <p className="paragraph">Caitlyn Sniper est un pick exotique qui est à la limite d'être viable contre certaines compositions.</p>
      <p className="paragraph">L'objectif est de prendre de la "<span className="green">létalité</span>" (pénétration d'armure fixe) pour avoir les <span className="green">dégâts purs</span> (non réduits par l'armure) sur les champions ennemis avec nos sorts !</p>
      <p className="paragraph">On remarque que le Ratio AD et les dégâts de bases des sorts de Caitlyn sont MONSTRUEUX, d'ou la création de Caitlyn Sniper</p>
      <div className="caitlynSniper__pictures">
        <img className="caitlynSniper__pictures__picture" src={caitlynLetalite} alt="" />
        <img className="caitlynSniper__pictures__picture" src={missionSniper} alt="" />
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
      <p className="paragraph">On part sur une page de runes qui sera la pour maximiser vos dégâts et votre génération de ressources</p>
      <img className="effectImage" src={pageRune} alt="" />
      <div className="xinAutoroute__runes__list">
        <ul>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img className="xinAutoroute__pictures" src={moissonNoire} alt="" />
            <li className="paragraph "><span className="red definition">Moisson noire :</span>C'est la rune principale pour Caitlyn Sniper ça va augmenter les dégâts de vos sorts pour terminer vos cibles. Il est facile de récupérer des stacks de moisson noire avec Caitlyn Sniper grâce à votre grande portée.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={coupBas} alt="" />
            <li className="paragraph "><span className="red definition">Coup Bas :</span>Une rune qui va donner des dégâts bruts quand votre piège touchera une cible.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={arracheurOeil} alt="" />
            <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={chasseurUltime} alt="" />
            <li className="paragraph "><span className="red definition">Chasseur Ultime :</span>Rune indispensable pour Caitlyn Sniper, ça vous permettra de spam votre ultime. (en late game environ 25 secondes de cooldown)</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={presenceDesprit} alt="" />
            <li className="paragraph "><span className="gold definition">Présence d'esprit :</span>Rune indispensable car votre seule source de Mana. (on ne fait pas la muramana c'est trop late game)</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={coupDeGrace} alt="" />
            <li className="paragraph "><span className="gold definition">Coup de grâce :</span>Rune pour finir votre adversaire, très grosse synergie avec Moisson Noire et l'ultime.</li>
          </div>
          <li className="paragraph">Je conseille de prendre 2x force adaptative. Ensuite vous prenez l'armure contre un AD et la résistance magique contre un AP.</li>
        </ul>
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
      <p className="paragraph">Il est temps pour vous de <span className="red">sniper vos ennemis</span> sans la moindre pitié !</p>
      <div className="xinAutoroute__gameplay__content">
        <p className="paragraph">Votre but est d'acheter toute la létalité possible pour chercher les dégâts monstrueux de votre A et de votre R.</p>
        <p className="paragraph">On commence avec <span className="green">Draktharr</span> puis <span className="green">Youmuu</span> et enfin le <span className="green">Manteau de la Nuit</span>. Ensuite pour le late game on achète un <span className="green">Dominik</span> pour réduire l'armure ennemi en pourcentage.</p>
        <p className="paragraph">Vous devez jouer <span className="red">très agressif</span> , Caitlyn Sniper s'épuise en fin de partie car les champions gagnent de l'armure par niveau et donc la létalité est moins efficace en late game.</p>
        <p className="paragraph">Jouez avec un Support ultra agressif comme un <span className="gold">Nautilus</span>/<span className="gold">Leona</span>/<span className="gold">Blitzcrank</span> ou bien une <span className="gold">Morgana</span>/<span className="gold">Senna</span> pour vous feed très rapidement.</p>
        <p className="paragraph">Une fois que vous avez de l'avance vient l'étape fou rire : On met un A + R = un kill. Non je n'exagère pas les dégâts sont vraiment COLOSSAUX.</p>
        <p className="paragraph gold">N'hésitez pas à faire des 360 No Scope pour se rappeler la bonne époque des TrickShots sur Modern Warfare 2.</p>
      </div>
      <p className="paragraph beforeYoutube">Voici tous mes gameplay de Caitlyn Sniper !</p>
      <Youtube videoId="8ff3fDRnnzk" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="FN26WECjmpU" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="oDt_bgKYbzk" SameSite="" />
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
      <p className="paragraph">Caitlyn Sniper peut être redoutable tout comme terriblement nulle selon la composition ennemi !</p>
      <p className="paragraph">Vous devez la jouer seulement si il y a au moins <span className="green">3 Squishy en face</span> (champions fragiles/sensibles)</p>
      <p className="paragraph">La létalité se fait totalement counter par l'armure donc c'est très compliqué de faire des dégâts contre des tanks et des bruisers.</p>
      <p className="paragraph">Caitlyn Sniper est <span className="green">redoutable contre les mages</span> sans mobilité et les autres ADC. Les assassins seront très durs à gérer car vous n'avez pas le bouclier du danseur fantôme ainsi que l'attackspeed pour les 1v1.</p>
      <p className="paragraph"><span className="red">Très dépendant de toucher le A</span> qui est votre source de DPS en teamfight.</p>
      <p className="paragraph">Il ya 2 champions à bannir quand vous jouez Caitlyn Sniper : <soan className="red">Braum et Yasuo</soan>. C'est simple leurs Murs vont vous empêcher de finir les cibles avec votre R.</p>
      <img src={sniperCaitlyn} alt="" className="caitlynSniper__pictures__picture__sniperCaitlyn" />
      <p className="paragraph">Caitlyn Sniper est un de mes trollpicks favoris, vous allez vous marrer avec les <span className="green">réactions de vos ennemis</span> pour vos dégâts croyez moi !</p>
    </div>
    <div className="backgroundParagraphe">
      <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Caitlyn Sniper vous aura donné envie d'essayer ce champion</p>
      <img src={trollSniper} alt="" className="caitlynSniper__pictures__picture__troll" />
      <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
    </div>
  </div>
);

export default CaitlynSniper;
