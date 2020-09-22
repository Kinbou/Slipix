import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';

import './zedForet.scss';

// images
import destructionZedForet from 'src/assets/images/trollpicks/zedForet/destructionZedForet.jpg';
import retourZedForet from 'src/assets/images/trollpicks/zedForet/retourZedForet.jpg';
import logoSlipix from 'src/assets/images/trollpicks/zedForet/slipixlogo.png';
import pageRunes from 'src/assets/images/trollpicks/zedForet/pageRune.jpg';
import trollHeart from 'src/assets/images/trollpicks/zedForet/trollHeart.jpg';
import trollEnd from 'src/assets/images/trollpicks/zedForet/trollEnd.jpg';

// runes
import delugeDesLames from 'src/assets/images/runes/delugeDesLames.png';
import rueeOffensive from 'src/assets/images/runes/rueeOffensive.png';
import arracheurOeil from 'src/assets/images/runes/arracheurOeil.png';
import chasseurAcharne from 'src/assets/images/runes/chasseurAcharne.png';
import coupDeGrace from 'src/assets/images/runes/coupDeGrace.png';

const ZedForet = () => (
  <div className="zedForet">
    <div className="breadcrumb">
      <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
      <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
      Zed Forêt
    </div>
    <h1 className="globalTitle-page">Zed forêt</h1>
    <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">Zed</span> forêt dans League of Legends !</p>
    <img className="logo" src={logoSlipix} alt="" />
    <div className="backgroundParagraphe lucianMissiles__Intro">
      <p className="intro">Zed Jungle n'est pas un bon pick, mais Zed Forêt c'est totalement différent.</p>
      <p className="paragraph">Parfois un petit détail peut changer l'issue d'une grande guerre.</p>
      <p className="paragraph">J'ai beaucoup joué Zed en Saison 6 c'est d'ailleurs la première fois que je commençais à me sentir "correct" sur le jeux avec mon gros Diamant 2 haha.</p>
      <p className="paragraph">Le problème de Zed c'est qu'il faut beaucoup beaucoup de parties pour bien snowball correctement et <span className="green">gagner sa phase de lane</span>.</p>
      <p className="paragraph">Il y a des <span className="red">match-up durs à gérer</span> et <span className="red">pour se feed</span>. Et on va pas se le cacher Zed c'est seulement fun quand tu commences la game en 5-0.</p>
      <p className="paragraph">T'en a marre d'affronter des <span className="gold">Lux barrière</span>, des <span className="gold">Karma</span>, des <span className="gold">Diana exhaust</span> ? Pas de soucis laisse un gars en midlane et go dans la belle forêt.</p>
      <div className="lucianMissiles__pictures">
        <img className="lucianMissiles__pictures__picture" src={destructionZedForet} alt="" />
        <img className="lucianMissiles__pictures__picture" src={retourZedForet} alt="" />
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
      <p className="paragraph">Voici la page de rune la + optimale pour être efficace avec Lucian Lance-Missiles !</p>

      <img className="effectImage lucianMissiles__pictures__runes" src={pageRunes} alt="" />
      <div className="xinAutoroute__runes__list">
        <ul>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img className="xinAutoroute__pictures" src={delugeDesLames} alt="" />
            <li className="paragraph "><span className="red definition">Deluge de lames :</span>C'est la rune que je préfère pour Zed Forêt, pourquoi pas électrocute ? Parce que c'est une rune qui est meilleure en lane pour poke, la quand on gank on veut optimiser nos dégâts et rien de mieux que 3 auto-attaques très rapides. De + si vous êtes pas bon sur Zed comme moi pas besoin de toucher vos Shurikens avec Déluge de Lames !</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={rueeOffensive} alt="" />
            <li className="paragraph "><span className="red definition">Ruée Offensive :</span>Vous permet de gagner de la pénétration d'armure avec votre Z et votre Ultime. Rien de mieux pour Zed Forêt.</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={arracheurOeil} alt="" />
            <li className="paragraph "><span className="red definition">Arracheur d'œil :</span>Des dégâts d'attaque bonus on ne dit pas non !</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={chasseurAcharne} alt="" />
            <li className="paragraph "><span className="red definition">Chasseur Acharné :</span>Rune très intéressante qui va vous permettre d'avoir une grande présence sur la map avec des kills très tôt. Vous n'avez pas un champion late game alors ne faites pas durer !</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src="" alt="" />
            <li className="paragraph "><span className="gold definition">Triomphe :</span>Triomphe est vraiment pas mal en jungle pour les 2v2 en début de partie en cas de counterganks et aussi en teamfights! Vous pouvez aussi opter pour présence d'esprit mais je ne suis pas fan j'aime trop Triomphe</li>
          </div>
          <div className="xinAutoroute__runes__list__content xinAutoroute__runes__list__border">
            <img src={coupDeGrace} alt="" />
            <li className="paragraph "><span className="gold definition">Coup de grâce :</span>Coup de Grâce est une rune monstrueuse sur Zed car elle synergise avec votre Passif ansi que la marque de L'ultime !</li>
          </div>
          <li className="paragraph">Je conseille de prendre Force adaptative et 10% de vitesse d'attaque pour farmer la jungle sans problèmes. Ensuite vous prenez de l'armure encore une fois pour être tranquille dans la jungle.</li>
        </ul>
      </div>
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
      <p className="paragraph">Pour comparer à un champion similaire dites vous que vous êtes un <span className="purple">Kha'Zix petit prix</span> !</p>
      <div className="xinAutoroute__gameplay__content">
        <p className="paragraph">Vous commencez avec le <span className="gold">Talisman</span> et la <span className="gold">potion rechargeable</span>, c'est bien mieux que la <span className="gold">machette</span>, votre E et votre A vont vous permettre de faire la jungle sans trop de difficultés. </p>
        <p className="paragraph">Ensuite c'est simple, dès que vous voyez quelqu'un de <span className="green">trop avancé</span> ou bien <span className="green">low hp</span> vous foncez pour récupérer des golds. Rien de bien compliqué ça reste de la jungle, jouez sur vos lanes gagnantes tout se passera bien.</p>
        <p className="paragraph">Vous allez trouver ça un peu méchant mais <span className="red">soyez ultra "égoïste"</span>. Prenez le + de kills possible, si vous êtes en retard avec Zed Forêt votre game est TERMINATED. Alors si vos alliés vous spam ping pour "KS" et bah dites vous que c'est pour la bonne cause, attention faut carry après hein.</p>
        <p className="paragraph">Au niveau du Stuff on fait <span className="gold">l'enchantement Guerrier</span> avec le <span className="gold">Smite Bleu</span> pour pouvoir Ralentir votre Cible et donc <span className="green">ne pas louper vos Shurikens</span>.</p>
        <p className="paragraph">Ensuite on enchaîne sur de la létalité basique, j'aime cet ordre : <span className="gold">Draktharr</span> + <span className="gold">Youmuu</span> + <span className="gold">Manteau de la Nuit</span> + <span className="gold">Dominik</span>. Pour les bottes si c'est full AD face à vous = Tabis ninja.</p>
        <p className="paragraph">Sinon j'aime beaucoup les mobilités <span className="green">pour avoir une énorme présence</span> et la synergie avec la rune : Chasseur Acharné. Avec ça vous serez un Hecarim + Kha'Zix petit prix hihi.</p>
        <p className="paragraph gold">N'oubliez pas de crier : PRRRRRR à chaque kills !</p>
      </div>
      <p className="paragraph">Voici tous mes gameplays de Zed Forêt, et pas Zed Jungle !</p>
      <Youtube videoId="EbNRQ5ncXxA" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="jy_rCouKyB8" SameSite="" />
      <div className="betweenYoutube" />
      <Youtube videoId="6agVRlMnNw0" SameSite="" />
    </div>
    <div className="backgroundParagraphe">
      <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
      <p className="paragraph">Comme pour la midlane Zed <span className="red">demande beaucoup de pratique</span> pour pouvoir s'amuser, ce n'est pas le genre de pick que je conseille si vous débutez sur le champion.</p>
      <p className="paragraph">C'est le moment ou vous imaginez votre level sur Zed c'est ça? Boarf au pire y'a plein d'autres trollpicks sur mon site !</p>
      <p className="paragraph">Votre faiblesse sera votre début de partie, <span className="red">si il se passe mal c'est à 95% de chance que votre game sera un enfer sur faille</span>. Ne prenez pas trop de risques dans la jungle ennemi sauf si il joue Janna Jungle faut pas déconner.</p>
      <p className="paragraph">Ensuite comme d'habitude vous allez détester les : <span className="gold">Stopwatch</span>, <span className="gold">Zhonya</span>, <span className="gold">Temporisation des ultime</span> (Lulu, Zilean, Kindred etc...) ainsi que les <span className="gold">Exhausts</span> (Fatigue).</p>
      <p className="paragraph">Autre chose : Veillez bien à prendre Zed Forêt seulement quand <span className="green">il y a au moins 3 Champions Squishy</span> (fragiles) en face ! Sinon vous allez trop galérer à faire un début de partie explosif.</p>
      <p className="paragraph">Les champions comme : <span className="red">Hecarim</span> / <span className="red">Olaf</span> sont des match-up quasi impossible. Ils farm trop vite la Jungle et vous ne pouvez pas les tuer en début de partie.</p>
      <img className="zedForet__pictures__picture__trollHeart" src={trollHeart} alt="" />
      <p className="paragraph">Maintenant à vous de <span className="green">conquérir la Jungle</span> et de la transformer en magnifique Forêt ! Et si Zed forêt est trop dur vous pouvez opter sur Zed Midlane il parait que c'est pas si mal (Je suis drôle hein).</p>
    </div>
    <div className="backgroundParagraphe">
      <p className="paragraph">Amusez vous bien et j'espère que cette présentation de Lucian Lance-Missiles vous aura donné envie d'essayer ce champion</p>
      <img className="zedForet__pictures__picture__trollEnd" src={trollEnd} alt="" />
      <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
    </div>
  </div>
);

export default ZedForet;
