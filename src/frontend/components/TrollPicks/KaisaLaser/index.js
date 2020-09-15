import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';
import { useTitle } from 'src/hooks/useTitle';
import './kaisaLaser.scss';

// images
import logoSlipix from 'src/assets/images/trollpicks/kaisaLaser/slipixLogo.png';
import degatsBroken from 'src/assets/images/trollpicks/kaisaLaser/degatsBroken.jpg';

// runes
import moissonNoire from 'src/assets/images/runes/moissonNoire.png';
import rueeOffensive from 'src/assets/images/runes/rueeOffensive.png';
import arracheurOeil from 'src/assets/images/runes/arracheurOeil.png';
import chasseurVorace from 'src/assets/images/runes/chasseurVorace.png';
import presenceDesprit from 'src/assets/images/runes/presenceDesprit.png';
import coupDeGrace from 'src/assets/images/runes/coupDeGrace.png';
import rune from 'src/assets/images/trollpicks/kaisaLaser/pageRune.png';
import laser from 'src/assets/images/trollpicks/kaisaLaser/laser.png';
import troll from 'src/assets/images/trollpicks/kaisaLaser/troll.png';
import wtf from 'src/assets/images/trollpicks/kaisaLaser/wtf.jpg';

const KaisaLaser = () => {
  useTitle('Kaisa Laser');
  return (
    <div className="kaisaLaser">
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
        <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
        Kaisa Laser
      </div>
      <h1 className="globalTitle-page">Kaisa Laser</h1>
      <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Kaïsa</span> laser dans League of Legends !</p>
      <img className="logo" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe kaisaLaserIntro">
        <p className="intro">Vous aimez les champions qui restent de loin et qui bombardent sans arrêts ? Il est temps d'envoyer les lasers!</p>
        <p className="paragraph">Kaïsa laser est un pick que j'ai imaginé à force de voir des Kaïsa "hybride" (AD et AP en même temps).</p>
        <p className="paragraph">J'ai analysé les <span className="green">ratios du Z</span> de Kaïsa (le laser) et je me suis dit : Non mais pourquoi pas un stuff <span className="purple">40% de CDR FULL AP</span> avec Moisson Noire sur le Z ?</p>
        <p className="paragraph">Oui j'ai des idées bizarres mais parfois ça propose de bon champions très fun à jouer, et croyez moi Kaïsa laser est vraiment cool à jouer.</p>
        <div className="kaisaLaser__pictures">
          <img className="kaisaLaser__pictures__picture" src={degatsBroken} alt="" />
          <img className="kaisaLaser__pictures__picture" src={wtf} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
        <p className="paragraph">Voici la page de rune la + optimale pour être efficace avec Kaïsa Laser !</p>

        <img className="effectImage kaisaLaser__pictures__runes" src={rune} alt="" />
        <div className="xinAutoroute__runes__list">
          <ul>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img className="xinAutoroute__pictures" src={moissonNoire} alt="" />
              <li className="paragraph "><span className="red definition">Moisson noire :</span>C'est la rune principale pour Kaïsa laser, ça va augmenter les dégâts de votre Z quand l'ennemi sera low hp. Il est facile de récupérer des stacks de moisson noire avec Kaïsa laser grâce à la portée du Z.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rueeOffensive} alt="" />
              <li className="paragraph "><span className="red definition">Ruée Offensive :</span>Vous permet de gagner de la pénétration magique pour le Z et le passif ainsi que le de la létalité pour le A. Quand vous allez utiliser votre ultime et votre E.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={arracheurOeil} alt="" />
              <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={chasseurVorace} alt="" />
              <li className="paragraph "><span className="red definition">Chasseur Vorace :</span>Vous permettra de récupérer des points de vie avec vos sorts, parfait en phase de siège quand vous allez prendre du poke.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={presenceDesprit} alt="" />
              <li className="paragraph "><span className="gold definition">Présence d'esprit :</span>Rune indispensable qui vous donnera beaucoup de Mana pour spam votre Z sans se soucier de la mana, bonne synergie avec le Luden.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={coupDeGrace} alt="" />
              <li className="paragraph "><span className="gold definition">Coup de grâce :</span>Rune pour finir votre adversaire, très grosse synergie avec Moisson Noire.</li>
            </div>
            <li className="paragraph">Je conseille de prendre 2x force adaptative. Ensuite vous prenez l'armure contre un AD et la résistance magique contre un AP.</li>
          </ul>
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
        <p className="paragraph">Rien de spécial dans le gameplay de Kaïsa Laser, dites vous que vous êtes la <span className="purple">version troll</span> d'un Xerath ou d'un Vel'koz.</p>
        <div className="xinAutoroute__gameplay__content">
          <p className="paragraph">Votre but est d'acheter très vite votre <span className="green">Luden</span>/<span className="green">Dent de Nashor</span> pour les <span className="purple">40% de CDR</span>, ensuite un Rabadon pour avoir vite énormément d'AP et de spam votre Z sur les ennemis. </p>
          <p className="paragraph">Depuis peu quand Kaïsa touche son Z le cooldown du sort est <span className="green">réduit de 70%</span>, et oui avant c'était 50%. Oui Oui oui au + tu touches tes Z au + tu vas pouvoir rendre dingues tes adversaires, j'adore l'idée.</p>
          <p className="paragraph">Attention vous n'avez pas beaucoup d'outils pour vous défendre face à un <span className="red">assassin</span> avec de la mobilité, vos auto attaques seront faibles et votre A aussi.</p>
          <p className="paragraph">Restez bien avec votre support et votre frontline et <span className="purple">bombardez</span> de loin. Prenez bien evidemment le blue buff pour encore + spam et avoir mana infini, et pensez à bien stack votre moisson noire.</p>
          <p className="paragraph gold">Le ratio AP du Z de Kaïsa est plutôt bon, 70% de votre AP. </p>

        </div>
        <p className="paragraph beforeYoutube">voici tous mes gameplays de Kaïsa Laser, admirez les bombardements !</p>
        <Youtube videoId="LkXhz17WfKU" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="3XnqK4nTEcM" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="m-unHhqWTnM" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
        <p className="paragraph">Des faiblesses sur Kaïsa AP Laser ? Comment c'est possible ? Ah vous avez  déjà oublié que ça reste un pick exotique donc forcément il y a pas mal de faiblesses !</p>
        <p className="paragraph">Premièrement votre seule source de dégâts c'est votre Z. <span className="red">Si vous loupez votre Z</span> dans un 1v1 ou dans les teamfights vous allez être autant utile que le Gromp, et encore lui au moins il file des golds.</p>
        <p className="paragraph">Deuxièmement le Z de Kaïsa ne <span className="green">traverse pas les sbires</span> et c'est un skillshot plutôt fin, vraiment pas facile à mettre selon les champions adverses et le placement des vagues de sbires.</p>
        <p className="paragraph">Les <span className="red">assassins</span> à grande mobilité sont presque impossible à tuer même si vous êtes bien en avance, ils ont des outils pour esquiver votre Z.</p>
        <p className="paragraph">Les champions comme <span className="red">Braum</span>/<span className="red">Yasuo</span> peuvent counter votre Z facilement, très frustrant à jouer contre je vous conseille de bannir Yasuo.</p>
        <img className="kaisaLaser__pictures__troll" src={laser} alt="" />
        <p className="paragraph">Kaïsa Laser restera une de mes découverte trollpick de cette saison 10 depuis son dernier UP et j'en suis vraiment content, moi qui n'aime pas les champions longues distances la <span className="green">je prend beaucoup de plaisir !</span></p>
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Kaïsa Laser vous aura donné envie d'essayer ce champion</p>
        <img className="kaisaLaser__pictures__picture__troll" src={troll} alt="" />
        <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
      </div>
    </div>
  );
};

export default KaisaLaser;
