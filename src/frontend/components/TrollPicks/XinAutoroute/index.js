import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../Tutoriels/Youtube';
import { useTitle } from '../../../../hooks/useTitle';
// images
import logoSlipix from '../../../../assets/images/trollpicks/xinAutoroute/slipixLogo.png';
import lowElo from '../../../../assets/images/trollpicks/xinAutoroute/lowElo.jpg';
import degats from '../../../../assets/images/trollpicks/xinAutoroute/degats.jpg';
import runePage from '../../../../assets/images/trollpicks/xinAutoroute/runePage.png';
import troll from '../../../../assets/images/trollpicks/xinAutoroute/troll.png';
import trollContent from '../../../../assets/images/trollpicks/xinAutoroute/trollContent.jpg';

// runes
import rune2 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_2.png';
import rune3 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_3.png';
import rune4 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_4.png';
import rune5 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_5.png';
import rune7 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_7.png';
import rune8 from '../../../../assets/images/trollpicks/xinAutoroute/runes/xin_rune_8.png';
import './xinAutoroute.scss';

const XinAutoroute = () => {
  useTitle('Xin Zhao Autoroute');
  return (
    <div className="xinAutoroute">
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
        <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
        xin Zhao Autoroute
      </div>
      <h2 className="globalTitle-page">Xin Zhao Autoroute</h2>
      <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Xin Zhao</span> autoroute dans League of Legends !</p>
      <img className="logo" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe">
        <p className="intro">Avez-vous déjà rêvé de prendre l'inhibiteur ennemi en 15 minutes de jeu sans trop réfléchir ? Et bien c'est possible !</p>
        <p className="paragraph">Xin Zhao autoroute est à la base un pick créé par <span className="green">Faker</span> en 2017. Il avait monté un compte de Diamant jusqu'à challenger très rapidement sans se prendre la tête !</p>
        <p className="paragraph">Le pick a ensuite été testé par <span className="green">Kameto</span> et on vu la puissance du pick qui était à l'époque redoutable car il n'y avait pas autant de gros bruisers comme en saison 10.</p>
        <p className="paragraph">Cependant j'ai ressorti le pick en 2018 pour le dépoussiérer un peu, j'ai theorycraft les runes/stuff et au final je le trouve vraiment très bon de Fer à Platine !</p>
        <div className="xinAutoroute__pictures">
          <img src={lowElo} alt="" />
          <img src={degats} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe xinAutoroute__runes">
        <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
        <p className="paragraph">J'ai essayé beaucoup de runes différentes pour rendre Xin Zhao Autoroute le + fort possible, au final on retrouve cette page qui selon moi est la + optimale</p>
        <img className="xinAutoroute__pictures__rune" src={runePage} alt="" />
        <div className="xinAutoroute__runes__list">
          <ul>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img className="xinAutoroute__pictures" src={rune2} alt="" />
              <li className="paragraph "><span className="red definition">Déluge de Lames :</span>C'est la rune la + importante pour Xin Zhao Autoroute, c'est simple les 3 prochaines auto-attaques seront très rapides ! Donc ça fonctionne sur le A de Xin Zhao ce qui vous permet de faire des courts trade d'une puissance phénoménale !</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rune3} alt="" />
              <li className="paragraph "><span className="red definition">Ruée Offensive :</span>Vous permet de gagner de la létalité quand vous allez utiliser votre E sur un champion ennemi, bonne synergie avec le Z qui possède d'énormes dégâts de base en early game.</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rune4} alt="" />
              <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rune5} alt="" />
              <li className="paragraph "><span className="red definition">Chasseur Vorace :</span>Une bonne rune late game, vous donne du vol de vie sur vos sorts ! (fonctionne avec le Z et le R)</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rune7} alt="" />
              <li className="paragraph "><span className="gold definition">Coup de Grâce :</span>Très bonne rune vu que vous jouez Ignite en toplane, vous permet de dive votre adversaire très rapidement pour ensuite taper les tourelles !</li>
            </div>
            <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
              <img src={rune8} alt="" />
              <li className="paragraph "><span className="gold definition">Légende Alacrité :</span>Donne de la vitesse d'attaque, très intéressant quand vous prenez des kills en early. Elle va vous aider à creuser la toplane !</li>
            </div>
            <li className="paragraph">Je conseille de prendre 2x force adaptative (on a déjà assez de vitesse d'attaque avec déluge de lames et alacrité). Ensuite vous prenez l'armure contre un AD et la résistance magique contre un AP.</li>
          </ul>
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
        <p className="paragraph">Vous l'avez sûrement deviné, le gameplay de Xin Zhao Autoroute est bien évidemment <span className="red">ULTRA AGGRESSIF</span>.</p>
        <p className="paragraph">Alors si vous cherchez un gameplay <span className="green">calme</span> et <span className="green">reposant</span> ce pick n'est clairement pas pour vous. Par contre si vous avez envie d'enfoncer la tête de votre adversaire dans son clavier, posez vos fesses et essayez !</p>
        <div className="xinAutoroute__gameplay__content">
          <p className="paragraph">Votre but est de gagner en <span className="green">30 minutes MAX</span>. Pourquoi ? Parce que Xin Zhao est un personnage early/mid-game qui va fortement perdre de sa puissance en fin de partie.</p>
          <p className="paragraph">Pour ça il va falloir tenter des kills très tôt dans la partie, c'est pour cela qu'on joue toujours <span className="gold">flash</span>/<span className="red">ignite</span> peu importe le match-up.</p>
          <p className="paragraph">J'ai testé ce pick dans plusieurs elo différents et c'est de Fer à Diamant 4 qu'il brille facilement, les adversaires n'ont pas l'habitude d'affronter un Xin Zhao en toplane et c'est la que vous allez abuser du pick.</p>
          <img className="xinAutoroute__pictures__trollContent" src={trollContent} alt="" />
          <p className="paragraph"> C'est facile de savoir jouer contre un personnage très fort dans la meta car on l'affronte souvent.</p>
          <p className="paragraph">Par contre les adversaires vont se dire "oh bah tiens c'est pas ouf Xin Top" et la c'est un <span className="red">kill level 2</span> que vous allez récupérer très facilement dans 70% des games. (et oui même en gold/platine je peux vous l'assurer).</p>
          <p className="paragraph gold">Vous devez absolument essayer d'avoir votre lvl 2 en premier.</p>
          <p className="paragraph">Vous commencez avec votre E puis une fois le level 2 vous prenez le Q et la PAF : E + AUTO-ATTAQUE + Q + Ignite = l'ennemi flash out ou il est mort (n'hésitez pas à flash in pour avoir le kill c'est le but du pick).</p>
          <p className="paragraph">Ensuite vous allez pouvoir <span className="blue">freeze</span> votre lane une fois le premier kill obtenu, si l'ennemi s'avance = <span className="red">free kill</span>. </p>
          <p className="paragraph">Si jamais il ne s'avance pas vous allez dominer au farming et vous allez pouvoir rush votre lame du roi déchu et la vous serez intenable. </p>
          <p className="paragraph xinAutoroute__gameplay__content__border">Le terme "<span className="green">autoroute</span>" signifie que vous allez très rarement aider vos alliés en teamfights, déjà vous ne jouez pas téléportation donc impossible de les rejoindre et ensuite Xin Zhao ne possède pas un bon teamfight contrairement à d'autres toplaners.</p>
          <p className="paragraph">La grande force du pick est la vitesse pour <span className="green">prendre les tourelles</span>, et donc des golds pour l'équipe.</p>
          <p className="paragraph">N'hésitez pas à ping votre jungler pour prendre le Herald, c'est l'objectif le + important avec un Xin autoroute.</p>
          <p className="paragraph">Une fois que vous avez prit l'inhibiteur très rapidement vous allez en botlane et vous pouvez commencer à créer la deuxième autoroute.</p>
          <p className="paragraph">Bien sûr les guides textuels c'est bien beau mais pour de la <span className="red">pratique</span> il faut du gameplay non ?</p>
        </div>
        <p className="paragraph">Voici tous mes gameplays XIN ZHAO AUTOROUTE, régalez vous, assimilez l'autoroute.</p>
        <Youtube videoId="lvpY6KmLvX0" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="wdEsBT24Eak" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="9XZZ-GY2_fs" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="fzIdL1kytAY" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="FEX2QIlc2ms" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="07eq2oM94IQ" SameSite="" />
        <div className="betweenYoutube" />
        <Youtube videoId="JQfsdVkIHwA" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
        <p className="paragraph">Bien évidemment comme les autres champions il y a des faiblesses. </p>
        <p className="paragraph">Si le jungle ennemi décide de vous camper votre game sera terrible, il y a des scénario ou même sur un gank vous allez réussir à prendre 1 kill avant de mourir voir même le 1v2 (la par contre la game est gagnée) mais bon parfois vous n'allez rien pouvoir faire.</p>
        <p className="paragraph">Il y a également certains match up très dur à gérer comme <span className="red">Malphite</span> parce que il va rush de l'armure et il sera intuable avec son E.</p>
        <p className="paragraph">Ensuite <span className="red">Jax</span> qui avec 2 objets commencera à vous gagner facilement même en 0/10 et <span className="red">Tryndamere</span> qui sera meilleur splitpusher que vous une fois le level 6 atteint.</p>
        <p className="paragraph beforeYoutube">Voici une vidéo ou je parle des faiblesses du pick.</p>
        <Youtube videoId="4nyl76xj0rY" SameSite="" />
        <p className="paragraph afterYoutube">Xin Zhao Autoroute est un de mes picks exotiques préférés ! Il contient tout ce que j'aime : Du <span className="green">greed</span>, de l'early-game et cette manière d'envoyer de <span className="green">sacrées baffes</span> héhé.</p>
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Xin Zhao Autoroute vous aura donné envie d'essayer le champion.</p>
        <img className="xinAutoroute__pictures__troll" src={troll} alt="" />
        <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
      </div>
    </div>
  );
};

export default XinAutoroute;
