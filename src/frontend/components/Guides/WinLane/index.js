import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../Tutoriels/Youtube';

// images
import logoSlipix from '../../../../assets/images/winLane/slipixLogoLane.png';
import snowball from '../../../../assets/images/winLane/snowballLol.jpg';
import back from '../../../../assets/images/winLane/back.jpg';
import roaming from '../../../../assets/images/winLane/roaming.jpg';
import troll from '../../../../assets/images/winLane/troll.jpg';
import troll2 from '../../../../assets/images/winLane/troll2.jpg';
import trollEnd from '../../../../assets/images/winLane/trollEnd.jpg';

import './winLane.scss';

const WinLane = () => (
  <div className="winLane">
    <div className="breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/guides"> guides > </Link>
      Gagner sa lane facilement
    </div>
    <h1 className="globalTitle-page">Gagner sa phase de lane</h1>
    <p className="paragraph">Salut la <span className="red">#TeamSlip</span> c'est coach Slipix et on va parler de la <span className="green">phase de lane</span> dans League of Legends</p>
    <img className="logo" src={logoSlipix} alt="" />
    <div className="backgroundParagraphe winlane__intro">
      <p className="intro">Gagner sa lane sur League of Legends vous permettra de remporter beaucoup de games !</p>
      <p className="paragraph">Dans League of Legends votre phase de lane va définir 80% de l'avenir de votre game.</p>
      <p className="paragraph">Si vous perdez votre phase de lane il sera difficile de revenir dans la partie et vous allez devoir compter sur vos <span className="green">alliés</span> ce qui est plutôt dérangeant dans ce jeu en soloQ.</p>
      <p className="paragraph">Avec ce guide je vais essayer de vous eclairer sur tous les sujets autour de la phase de lane, que ça soit l'aspect <span className="green">micro-gestion</span> ou la <span className="green">macro-game</span> !</p>
      <ul>
        <p className="paragraph">Voici les différentes catégories qu'il faut maitriser pour maîtriser sa lane :</p>
        <li><i className="fas fa-book progressLol__icon__book" />Le Farming</li>
        <li><i className="fas fa-book progressLol__icon__book" />Le Match-Up</li>
        <li><i className="fas fa-book progressLol__icon__book" />Le Roaming</li>
        <li><i className="fas fa-book progressLol__icon__book" />La Gestion de Wave</li>
      </ul>
      <div className="winLane__intro__pictures">
        <img className="winLane__intro__pictures__picture" src={snowball} alt="" />
        <img className="winLane__intro__pictures__picture" src={back} alt="" />
        <img className="winLane__intro__pictures__picture" src={roaming} alt="" />
      </div>
    </div>
    <div className="backgroundParagraphe winLane__farming">
      <h2><i className="fas fa-coins icons__coins" />Le farming<i className="fas fa-coins icons__coins" /></h2>
      <p className="paragraph">Le farming dans League of Legends est primordial tout autant que les <span className="red">kills</span> et les <span className="blue">objectifs</span>.</p>
      <p className="paragraph">Beaucoup de personnes oublient que être en 5/0 dans son match-up n'est pas forcément un énorme avantage quand votre adversaire a le même niveau d'xp que votre champion ainsi que 80 sbires d'avance.</p>
      <p className="paragraph green">15 sbires dans League of Legends= 1 kill.</p>
      <p className="paragraph">Retenez bien ça c'est très important, voila pourquoi le snowball en haut Elo est bien + élevé, car non seulement ils vont prendre les kills et beaucoup de golds, mais aussi l'avantage en sbires juste derrière pour creuser un écart énorme de golds le + rapidement possible.</p>
      <p className="paragraph">Je reçois beaucoup de questions dans mes coachings ainsi que sur les réseaux sociaux : <span className="gold">Slipix comment améliorer son farming ?</span></p>
      <p className="paragraph">Malheureusement c'est l'étape que je trouve vraiment chiante dans le jeu (je trouve ça trop linéaire j'aime la baston).</p>
      <img className="pictures__troll" src={troll} alt="" />
      <p className="paragraph">Il n'y a pas de méthodes miracle pour améliorer son farm, il faut jouer jouer et jouer! Je conseille cependant d'aller 1 fois par jour en partie privé dans le mode "<span className="red">entraînement</span>".</p>
      <p className="paragraph">L'objectif est d'avoir le + de sbires possible en 20 minutes! N'hésitez pas à vous entrainer à farmer sous tours et avec VOS champions c'est très important. </p>
      <p className="paragraph">Le farming sous tour est totalement différent avec un <span className="blue">mage</span> et un <span className="red">assassin</span> par exemple.</p>
      <p className="paragraph">Au final le farming c'est les golds et les golds c'est ce qui va rendre votre game facile ou difficile, alors n'hésitez pas à vous entrainer!</p>
      <p className="paragraph beforeYoutube">J'ai trouvé cette vidéo super détaillée et intéressante pour <span className="green">améliorer votre farming</span>. N'hésitez pas à aller la voir (elle est en anglais mais c'est la + qualitative sur YouTube).</p>
      <Youtube videoId="jOSyf1NQspo" SameSite="" />
    </div>
    <div className="backgroundParagraphe winLane__matchUp">
      <h2><i className="fas fa-trophy icons__trophy" />Le match-up<i className="fas fa-trophy icons__trophy" /></h2>
      <p className="paragraph">La connaissance du match-up dans League of Legends est très importante.</p>
      <p className="paragraph">Par exemple c'est en fonçant sur une <span className="red">Illaoi sous ultime</span> qu'on comprend qu'il ne faut pas le faire, et pour ça il faut vivre le match-up<br /> (j'ai encore mal de son ultime).</p>
      <p className="paragraph">Vous allez affronter en principe les même champions (aujourd'hui même les bas elo jouent des picks qui sont meta)</p>
      <p className="paragraph">mais aussi parfois des <span className="green">picks exotiques</span> ! (des génies en gros)</p>
      <p className="paragraph">Je me répète souvent mais pour progresser dans League of Legends il faut pas toujours chercher compliquer :</p>
      <p className="paragraph"><span className="blue">connaître son match-up</span> c'est le vivre, et plusieurs fois.</p>
      <img className="pictures__troll2" src={troll2} alt="" />
      <p className="paragraph">Donc vous allez devoir spammer votre champion et avec le temps vous allez découvrir vos counters, mais aussi les champions que vous allez pouvoir défoncer sans trop de difficultés et JOUER LE MATCH-UP.</p>
      <p className="paragraph">La <span className="blue">connaissance de votre match-up</span> va vous permettre d'adapter votre playstyle dans la game.</p>
      <p className="paragraph">Par exemple avec mon Gragas mid je counter Fizz totalement en début de partie donc je vais jouer ultra agressif pour l'empêcher de farm et ainsi prendre très vite l'avantage !</p>
      <p className="paragraph">En revanche contre Syndra c'est très compliqué donc au lieu de prendre <span className="red">embrasement</span> (ignite) je prend <span className="purple">téléportation</span> pour tenir le début de partie !</p>
      <p className="paragraph">Tout ça je le sais comment ? Parce que je l'ai vécu et j'ai analysé mon match-up, faites de même il faut juste du temps et des games !</p>
      <p className="paragraph betweenYoutube">ça donne quoi de pas connaître son match-up ? Voici un coaching en bas elo ou l'abonné est totalement perdu face à un champion qu'il ne connait pas.</p>
      <Youtube videoId="yGKJDd4YsSc" SameSite="" />
      <p className="paragraph betweenYoutube">Encore une exemple:  Coaching d'un abonné jouant support, il a un match-up positif mais il n'en profite pas parce qu'il connait pas son match-up !</p>
      <Youtube videoId="47gDddxq9h4" SameSite="" />
    </div>
    <div className="backgroundParagraphe winLane__roaming">
      <h2><i className="fas fa-exchange-alt icons__change" />Le roaming<i className="fas fa-exchange-alt icons__change" /></h2>
      <p className="paragraph">Le roaming est une étape clé de la phase de lane ! Certains champions et aussi certains match-up sont obligés d'utiliser le roaming pour gagner la partie!</p>
      <p className="paragraph">On pourrait croire que le roaming est seulement réservé aux <span className="red">assassins</span> mais c'est faux, tout le monde peut l'utiliser. <br />(ADC est le rôle ou l'on roam le moins mais ça peut arriver pour aider le jungle)</p>
      <p className="paragraph">Imaginez une partie ou vous jouez contre un adversaire qui reste sous-tour, qui refuse totalement de vous trade, il a pour seul objectif de ne pas mourir.</p>
      <p className="paragraph">Sauf que vous jouez un champion qui après 30 minutes de jeu va fortement s'épuiser, il faut donc <span className="green">réagir avec le ROAMING</span> !</p>
      <p className="paragraph">Pour roam sur la map il suffit simplement de <span className="blue">push votre vague de sbires</span> pour ensuite bloquer votre adversaire sous sa tour et ainsi l'empêcher de vous suivre</p>
      <p className="paragraph">(il peut choisir de vous suivre mais c'est très risqué car il va perdre beaucoup de farm et d'xp, sans oublier qu'il a peut être un champion très mauvais pour roam).</p>
      <p className="paragraph">Avec ce roaming vous allez mettre énormément de pression, forcer les adversaires à jouer safe, <span className="red">récupérer des kills</span> et ainsi débloquer des objectifs et j'en passe !</p>
      <p className="paragraph betweenYoutube">Voici un tutoriel coaching "comment gagner avec le roaming" et prendre beaucoup d'avantage !</p>
      <Youtube videoId="phBLIwFJNfw" SameSite="" />
      <p className="paragraph betweenYoutube">Petit gameplay fun ou j'essaye un Lee Sin full roaming support (inspiré d'un Corréen qui le joue en grand master). Vous allez voir le nombre d'occasions et de roaming qu'on peut faire pendant les games !</p>
      <Youtube videoId="V20Ifzt9cas" SameSite="" />
      <p className="paragraph betweenYoutube">Un autre de mes gameplays en midlane ou je prend très vite l'avantage sur ma lane et j'en profite pour aller aider mon jungle, ma toplane, ma botlane !</p>
      <Youtube videoId="0XX3w0cHiAM" SameSite="" />
    </div>
    <div className="backgroundParagraphe winLane__wave">
      <h2><i className="fas fa-balance-scale icons__balance" />La gestion de la wave<i className="fas fa-balance-scale icons__balance" /></h2>
      <p className="paragraph">Gérer sa wave est très sous-estimé et peu utilisé en bas elo ! On va commencer par expliquer le <span className="green">push</span> et le <span className="blue">freeze</span> pour pas que vous soyez trop perdus !</p>
      <div className="winLane__wave__definition">
        <p className="paragraph"><span className="green">PUSH</span> : Le push consiste à faire avancer la wave de sbires sous la tour ennemi, ça vous permet de back tranquillement <br /> (le temps que la vague revienne sous VOTRE TOUR vous avez le temps de revenir la récupérer)</p>
        <p className="paragraph">ou bien de faire un <span className="green">roaming pour aider votre team</span>, ou bien tout simplement pour prendre les plaques de la tour. <br /> L'inconvéniant ? Le jungler ennemi pourra vous gank facilement, et selon votre match-up vous ne pourrez pas le dive et donc faire des kills.</p>
        <p className="paragraph winLane__wave__definition__border"><span className="blue">FREEZE</span> : Le freeze consiste à ne pas taper les sbires (seulement mettre le dernier coup pour les golds) et ainsi mettre la vague de sbires sous votre tour.</p>
        <p className="paragraph">Vous serez donc très dur à gank mais SURTOUT vous allez <span className="blue">forcer votre adversaire à avancer</span> vers votre tour <br />(il sera lui vulnérable aux ganks) mais aussi à vos agressions ! <br /> Pour tenter le kill sur un adversaire qui joue ultra safe il faut freeze et non push (sauf si vous pouvez le tuer sous tour).</p>
        <p className="paragraph">Avec votre freeze il va aussi ne pas pouvoir avancer, et perdre beaucoup de sbires.  à noter que le freeze est bien meilleur <span className="red">contre un champion corps à corps</span> car il ne pourra pas récupérer son farm si vous le zonez bien.</p>
      </div>
      <p className="paragraph beforeYoutube">Voici un coaching explicatif sur la gestion de wave, ça devrait compléter le guide</p>
      <Youtube videoId="rzKIH_zGRNo" SameSite="" />
      <p className="paragraph afterYoutube">Les timing back sont très important dans League of Legends !</p>
      <p className="paragraph">On remarque souvent en bas elo que le problème vient aussi du timing back, ils restent souvent pour rien sur la lane, trop peu de PV, trop de peu de mana ou bien trop de golds sur eux !</p>
      <p className="paragraph">Pour bien optimiser votre timing back, soyez bien sûr d'avoir push votre lane, d'avoir assez de mana/pv pour rester!</p>
      <p className="paragraph"><span className="gold">Il faut back seulement quand on ne peut plus tenir ou quand on a les golds pour un objet clé</span> par exemple (chapitre perdu pour un mage AP mid)</p>
      <p className="paragraph betweenYoutube">dans cette vidéo coaching on va parler des agression, et des timing back!</p>
      <Youtube videoId="tYBaoo4oxes" SameSite="" />
      <p className="paragraph betweenYoutube">Une vidéo coaching ou je vous montre comment impacter la map avec un bon timing back ainsi que le roaming</p>
      <Youtube videoId="uAmTtf3wwBY" SameSite="" />
      <p className="paragraph betweenYoutube">Une vidéo intéressante ou je vous donne 3 techniques pour gagner votre lane !</p>
      <Youtube videoId="cJFKzvSRScg" SameSite="" />
      <p className="paragraph betweenYoutube">Un coaching d"un abonné ou je lui explique la domination de lane pour avoir une grande présence en early game.</p>
      <Youtube videoId="xtqB3kAPWRc" SameSite="" />
    </div>
    <div className="backgroundParagraphe winLane__end">
      <p className="paragraph">Pour résumer sur cette page qui parle de la phase de lane, entraînez vous au farming, connaissez vos match-up, bougez et apportez votre présence sur la carte, utilisez le <span className="green">push</span> et le <span className="blue">freeze</span> au bon moment !</p>
      <p className="paragraph">J'espère que ce guide vous aura aidé, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
      <img className="pictures__trollEnd" src={trollEnd} alt="" />
      <p className="paragraph intro">N'hésitez pas à aller consulter les autres guides de coach Slipix</p>
    </div>
  </div>
);

export default WinLane;
