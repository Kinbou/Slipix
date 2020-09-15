import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';
import { useTitle } from 'src/hooks/useTitle';
import './threshFlak.scss';

// runes
import delugeDesLames from 'src/assets/images/runes/delugeDesLames.png';
import coupBas from 'src/assets/images/runes/coupBas.png';
import arracheurOeil from 'src/assets/images/runes/arracheurOeil.png';
import chasseurAcharne from 'src/assets/images/runes/chasseurAcharne.png';
import tempeteMenacante from 'src/assets/images/runes/tempeteMenacante.png';
import celerite from 'src/assets/images/runes/celerite.png';

// images
import logoSlipix from 'src/assets/images/trollpicks/threshFlak/slipixLogo.png';
import oneshotflak from 'src/assets/images/trollpicks/threshFlak/oneshotflak.jpg';
import retourOneShot from 'src/assets/images/trollpicks/threshFlak/retourOneShot.jpg';
import runePage from 'src/assets/images/trollpicks/threshFlak/runePage.png';
import capture from 'src/assets/images/trollpicks/threshFlak/capture.jpg';
import threshFlak from 'src/assets/images/trollpicks/threshFlak/threshFlak.png';
import threshFlakEnd from 'src/assets/images/trollpicks/threshFlak/threshFlakEnd.png';
import troll from 'src/assets/images/trollpicks/threshFlak/troll.jpg';

const ThreshFlak = () => {
  useTitle('Thresh Flak Oneshot');
  return (
    <div className="threshFlak">
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
        <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
        Thresh Flak
      </div>
      <h1 className="globalTitle-page">Thresh Flak Oneshot</h1>
      <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Thresh</span> flak Oneshot dans League of Legends !</p>
      <img className="logo" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe">
        <p className="intro">Est-il possible de faire un kill avec une simple auto-attaque ? Thresh FLAK le fait tous les jours !</p>
        <p className="paragraph">Thresh FLAK est le pick exotique le + populaire de ma chaîne YouTube. En même temps c'est pas souvent qu'on voit un Thresh mettre d'aussi grosses patates sur d'autres ADC ...</p>
        <p className="paragraph">Je l'ai joué une vingtaine de games et à chaque fois c'est des <span className="green">barres de rires assurées</span>, n'hésitez pas à le jouer avec vos potes.</p>
        <div className="threshFlak__pictures">
          <img className="threshFlak__pictures__picture" src={oneshotflak} alt="" />
          <img className="threshFlak__pictures__picture" src={retourOneShot} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
        <p className="paragraph">On part sur une page de runes qui sera la pour vous aider à prendre des kills en early game !</p>
        <img className="effectImage threshFlak__pictures__runes" src={runePage} alt="" />
        <div className="xinAutoroute__runes__list">
          <ul>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img className="xinAutoroute__pictures" src={delugeDesLames} alt="" />
              <li className="paragraph "><span className="red definition">Déluge de Lames :</span>Cette rune va vous permettre de prendre des kills en early game, 3 attaques rapide pour saisir les opportunités. Moisson noire est + optimale dans l'idée de oneshot mais elle est clairement pas indispensable, thresh flak possède assez de dégâts.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={coupBas} alt="" />
              <li className="paragraph "><span className="red definition">Coup bas :</span>Vous donne des dégâts BRUT bonus après votre E ou votre A. Très intéressant en early game.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={arracheurOeil} alt="" />
              <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={chasseurAcharne} alt="" />
              <li className="paragraph "><span className="red definition">Chasseur acharné :</span>La rune la + importante de Thresh FLAK, elle vous permettra d'avoir énormément de moovespeed hors combat pour atteindre le carry ennemi et lui glisser votre auto-attaque</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={tempeteMenacante} alt="" />
              <li className="paragraph "><span className="witchColor definition">Tempête menaçante :</span>La rune late game par excellence, parfait pour annoncer à vos adversaire que ça va flaker hardcore.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={celerite} alt="" />
              <li className="paragraph "><span className="witchColor definition">Célérité :</span>Une rune qui va augmenter la moovespeed et qui va très bien synergiser avec Chasseur Acharné + les bottes de mobilité.</li>
            </div>
            <li className="paragraph">Je conseille de prendre 2x force adaptative (on a déjà assez de vitesse d'attaque avec déluge de lames). Ensuite vous prenez l'armure contre un AD et la résistance magique contre un AP.</li>
          </ul>
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
        <p className="paragraph">Incarnez la grande faucheuse ! Votre but est tout simple : PRENDRE DES KILLS !</p>
        <div className="xinAutoroute__gameplay__content">
          <p className="paragraph">Vous devez rush les 100% de critique le + vite possible et ensuite à vous la gloire et le fun.</p>
          <p className="paragraph">Je vous conseille de jouer en <span className="green">duo botlane</span> avec un champion à CC comme Nautilus/Leona/Pyke.</p>
          <p className="paragraph"><span className="red">Prenez bien les âmes</span> car ça va augmenter les dégâts de votre Auto-attaque.</p>
          <p className="paragraph"><span className="green">EXPLICATIONS DU ONESHOT</span> : Le passif du E de Thresh est simple, vous allez charger votre prochain auto-attaque en vous déplaçant. Au + vous avez d'AD au + les bonus de la prochaine auto-attaque seront colossaux.</p>
          <img className="threshFlak__pictures__capture" src={capture} alt="" />
          <p className="paragraph">Mon record actuel sur THRESH FLAK est de <span className="green">2750 avec une auto-attaque</span> (j'avais beaucoup d'âmes et 650 d'AD).</p>
          <p className="paragraph">Au niveau du stuff c'est simple : On commence avec <span className="orange">faux spectrale</span> pour se feed, les 20% de CDR sont très bien, ensuite <span className="orange">Canon ultrarapide</span> item INDISPENSABLE pour augmenter la portée de votre auto-attaque. </p>
          <p className="paragraph">On enchaîne sur <span className="orange">Lame d'infini</span> qui va augmenter vos critiques puis <span className="orange">Lame tempête</span> qui va augmenter les dégâts de votre <span className="orange">Canon ultrarapide</span>.</p>
          <p className="paragraph"> C'est bon vous avez les 100% de critique, maintenant vous prenez un Dominik pour augmenter votre pénétration d'armure et vous prenez des bottes de mobilité pour courir très vite et FLAKER le premier fragile que vous croisez (synergie avec la rune célérité).</p>
          <img className="threshFlak__pictures__capture" src={threshFlak} alt="" />
          <p className="paragraph">Possibilité de vendre les <span className="orange">bottes de mobilité</span> pour un baton du vide qui va augmenter les dégâts bonus de votre E sur l'auto-attaque en very late game.</p>
        </div>
        <p className="paragraph">Voici tous mes gameplays Thresh Flak, régalez vous.</p>
        <Youtube videoId="bMXWro5I1bM" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="H-ql0NHaMCM" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="-WAFOtFb0Lw" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
        <p className="paragraph">Thresh FLAK est le dieu du oneshot, un des picks les + fun à jouer du jeu mais il a <span className="red">beaucoup de faiblesses</span>.</p>
        <img className="threshFlak__pictures__troll" src={troll} alt="" />
        <p className="paragraph">Il est fort contre les compositions avec beaucoup de champions fragiles mais très faible contre les <span className="red">tanks</span>/<span className="red">bruisers</span> (c'est que une seule auto attaque de boostée ensuite le DPS est nul).</p>
        <p className="paragraph">Il se fait zoner très facilement contre des champions avec de la portée comme <span className="red">Vel'koz</span>/<span className="red">Xerath</span>.</p>
        <p className="paragraph">Il est très difficile de se feed en lane, il va falloir être bien meilleur que vos adversaires. <span className="green">N'hésitez pas à duo botlane</span>.</p>
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Thresh Flak Oneshot vous aura donné envie d'essayer le champion.</p>
        <img className="threshFlak__pictures__thresh" src={threshFlakEnd} alt="" />
        <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
      </div>
    </div>
  );
};

export default ThreshFlak;
