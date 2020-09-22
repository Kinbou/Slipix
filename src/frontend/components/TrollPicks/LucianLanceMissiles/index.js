import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';

// images
import lucianAssassin from 'src/assets/images/trollpicks/lucianLanceMissiles/lucianAssassin.jpg';
import lucianBest from 'src/assets/images/trollpicks/lucianLanceMissiles/lucianBest.jpg';
import pageRunes from 'src/assets/images/trollpicks/lucianLanceMissiles/pageRunes.jpg';
import logoSlipix from 'src/assets/images/trollpicks/lucianLanceMissiles/logoSlipixLucian.png';
import weaknessLucian from 'src/assets/images/trollpicks/lucianLanceMissiles/weaknessLucian.jpg';
import trollEnd from 'src/assets/images/trollpicks/lucianLanceMissiles/trollEnd.jpg';

// runes
import moissonNoire from 'src/assets/images/runes/moissonNoire.png';
import rueeOffensive from 'src/assets/images/runes/rueeOffensive.png';
import arracheurOeil from 'src/assets/images/runes/arracheurOeil.png';
import chasseurUltime from 'src/assets/images/runes/chasseurUltime.png';

import './lucianLanceMissiles.scss';


const LucianLanceMissiles = () => (
  <div className="lucianMissiles">
    <div className="breadcrumb">
      <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
      <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
      Lucian Lance Missiles
    </div>
    <h1 className="globalTitle-page">Lucian Lance Missiles</h1>
    <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Lucian</span> lance-missiles dans League of Legends !</p>
    <img className="logo" src={logoSlipix} alt="" />
    <div className="backgroundParagraphe lucianMissiles__Intro">
      <p className="intro">T'en a marre de voir des Lucian avec toujours le même playstyle ? On va changer ça !</p>
      <p className="paragraph">Lucian lance-missiles est un pick que je joue depuis 2016 environ, je l'ai joué pour la première fois en ARAM car on était FULL AD et j'avais vu qu'il y avait un <span className="green">Ratio de 0.9 de votre puissance</span> sur le Z (Le lance-missiles).</p>
      <p className="paragraph">Au final on se retrouve avec un pick vraiment fun puisque l'ultime de Lucian possède également un <span className="purple">ratio AP pour booster les dégâts</span>.</p>
      <p className="paragraph">Il est temps pour vous de bombarder vos ennemis !</p>
      <div className="lucianMissiles__pictures">
        <img className="lucianMissiles__pictures__picture" src={lucianAssassin} alt="" />
        <img className="lucianMissiles__pictures__picture" src={lucianBest} alt="" />
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
      <p className="paragraph">Voici la page de rune la + optimale pour être efficace avec Lucian Lance-Missiles !</p>

      <img className="effectImage lucianMissiles__pictures__runes" src={pageRunes} alt="" />
      <div className="xinAutoroute__runes__list">
        <ul>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img className="xinAutoroute__pictures" src={moissonNoire} alt="" />
            <li className="paragraph "><span className="red definition">Moisson noire :</span>C'est la rune principale pour LUCIAN AP, on peut stacker la Moisson Noire très facilement car le Z est un skillshot Large et l'ultime est facile à toucher. Vous allez avoir des dégâts bonus monstrueux en late game.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={rueeOffensive} alt="" />
            <li className="paragraph "><span className="red definition">Ruée Offensive :</span>Vous permet de gagner de la pénétration magique pour le Z quand vous allez utiliser votre E.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={arracheurOeil} alt="" />
            <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={chasseurUltime} alt="" />
            <li className="paragraph "><span className="red definition">Chasseur Ultime :</span>Réduit le cooldown de l'ultime qui est votre deuxième sort principal, rune indispensable.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src="" alt="" />
            <li className="paragraph "><span className="witchColor definition">Ruban de mana :</span>Facile à stack avec votre Z, ça vous permettra de spam vos sorts sans blue buff obligatoire</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src="" alt="" />
            <li className="paragraph "><span className="witchColor definition">Tempête menaçante :</span>Beaucoup de puissance bonus en fin de partie, peut être redoutable dans les games très serrées.</li>
          </div>
          <li className="paragraph">Je conseille de prendre 2x force adaptative. Ensuite vous prenez l'armure contre un AD et la résistance magique contre un AP.</li>
        </ul>
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
      <p className="paragraph">Pas besoin d'être un génie pour jouer LUCIAN LANCE-MISSILES.</p>
      <div className="xinAutoroute__gameplay__content">
        <p className="paragraph">Votre objectif principal est d'acheter le <span className="green">LUDEN</span>/<span className="green">RABADON</span> pour avoir de la CDR et de gros dégâts sur votre Z et R. </p>
        <p className="paragraph">Restez bien à distance, <span className="red">vous n'êtes pas un Lucian AD</span>, vos auto-attaques sont seulement utiles pour réduire le Cooldown de votre E.</p>
        <p className="paragraph">Vous avez le <span className="gold">combo E + Z + R</span> vers un adversaire et croyez moi il y a beaucoup de Burst potentiel, l'ultime de Lucian Lance-Missiles est loin d'être nul.</p>
        <p className="paragraph">En maxing de Sorts ça sera : Z , E , A et l'ultime à chaque niveaux.</p>
        <div className="lucianMissiles__gameplay__content__important">
          <p className="paragraph">Possibilité de le jouer AP avec un thème Hybride sur les auto-attaques. Le stuff sera : <span className="green">Pistolame + Dent de Nashor + Fléau de Liche</span>.</p>
          <p className="paragraph">Je suis moins fan de ce playstyle je préfère tout donner sur le Z et le R mais vous pouvez essayer, après tout on est la pour se fendre la poire.</p>
        </div>
        <p className="paragraph gold">N'hésitez pas à dire à vos adversaires que c'est broken quand vous allez les tuer de loin avec le Z héhé.</p>
      </div>
      <p className="paragraph">Voici tous mes gameplays de Lucian Lance-Missiles, baissez-vous !</p>
      <p className="paragraph">(Relis bien il y a 2 "S" petit coquin)</p>
      <Youtube videoId="Gjg81op0CxQ" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="YS9sVWEIlc8" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="VRfkVdtJkOU" SameSite="" />
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
      <p className="paragraph">Des faiblesses sur ce magnifique Lucian ? Et bien oui c'est bien rigolo de trollpick mais ça peut pas être parfait.</p>
      <p className="paragraph">Votre source principale de poke/dégâts est votre Z et il y a <span className="red">beaucoup de Cooldown en début de partie</span>, il va pas falloir trop en louper sinon ça sera très dur.</p>
      <p className="paragraph">(de + il faut stack la rune <span className="gold">ruban de mana</span> et <span className="gold">Moisson Noire</span> si possible)</p>
      <p className="paragraph">Contre un assassin avec de la mobilité ça sera pas simple de vous en sortir, vous pouvez tenter de fuir avec le E et le Flash mais tuer un assassin sera quasiment Impossible contrairement à un bon Lucian AD basique.</p>
      <p className="paragraph">Le gameplay peut aussi se trouver <span className="red">très répétitif un peu comme Kaïsa laser</span>. Il faut aimer rester de loin et bombarder, pour les amateurs de combats violents ça sera pas votre style de tartiflettes.</p>
      <img className="kaisaLaser__pictures__troll" src={weaknessLucian} alt="" />
      <p className="paragraph">Lucian Lance-Missiles restera un de mes premiers trollpicks que j'ai Theory Craft alors même si il a mal vieillit il est loin d'avoir dit son dernier mot, <span className="green">essayez le et vous allez bien vous marrer c'est promis</span> !</p>
    </div>
    <div className="backgroundParagraphe">
      <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Lucian Lance-Missiles vous aura donné envie d'essayer ce champion</p>
      <img className="kaisaLaser__pictures__picture__troll" src={trollEnd} alt="" />
      <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
    </div>
  </div>
);

export default LucianLanceMissiles;
