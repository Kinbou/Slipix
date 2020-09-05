import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../Tutoriels/Youtube';
import { useTitle } from '../../../../hooks/useTitle';
// images
import logoSlipix from '../../../../assets/images/lowElo/logoSlipix.png';
import lowEloPicture from '../../../../assets/images/lowElo/lowEloPicture.jpg';
import championOtp from '../../../../assets/images/lowElo/championOtp.jpg';
import championStrong from '../../../../assets/images/lowElo/championStrong.png';
import historiqueGame from '../../../../assets/images/lowElo/historiqueGame.jpg';
import troll from '../../../../assets/images/lowElo/troll.jpeg';
import trollRenekton from '../../../../assets/images/lowElo/trollRenekton.jpg';
import trollVs from '../../../../assets/images/lowElo/trollVs.jpg';
import heavyToCarry from '../../../../assets/images/lowElo/heavyToCarry.jpg';
import trollSimpson from '../../../../assets/images/lowElo/trollSimpson.jpg';

import './lowElo.scss';

const LowElo = () => {
  useTitle('Sortir du bas Elo');
  return (
    <div className="lowElo">
      <div className="lowElo__breadcrumb">
        <Link to="/">Accueil</Link> &gt;
        <Link to="/guides"> guides</Link> &gt;
        progresser sur League of Legends
      </div>
      <h1 className="globalTitle-page">Sortir du bas Elo</h1>
      <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est coach Slipix et on va parler du bas elo dans league of Legends</p>
      <img className="picture__logoSlipix" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe lowElo__intro">
        <p className="lowElo__intro__intro">Sortir du bas elo de League of Legends, un objectif sacré à la portée de tout le monde!</p>
        <p className="paragraph">Sortir du bas elo est une priorité chez beaucoup de joueurs, League of Legends est une guerre d'ego mais aussi une compétition entre amis !</p>
        <p className="paragraph">J'ai beaucoup remarqué que mes élèves pendant mes coachings me disaient souvent :</p>
        <p className="paragraph">"il faut que j'arrive à monter pour rattraper mes potes et leur prouver que je suis pas nul"</p>
        <p className="paragraph">Ne vous prenez pas la tête, si vous n'avez pas l'ambition de devenir joueur pro être dans le bas elo (<span className="green">Fer, Bronze, Argent, Or</span>) n'est pas une mauvaise chose !</p>
        <p className="paragraph">Et si vos amis passent leurs temps à vous <span className="green">rabaisser</span> parce que vous êtes bas elo et que ça vous "<span className="green">perturbe</span>" bah changez d'amis rapidement (Slipix destructeur d'amitié depuis 1995)</p>
        <ul>
          <p className="paragraph">Voici les différentes étapes qu'il faut valider pour sortir du bas elo sans trop de difficultés :</p>
          <li><i className="fas fa-book progressLol__icon__book" />La remise en question</li>
          <li><i className="fas fa-book progressLol__icon__book" />L'analyse de replays</li>
          <li><i className="fas fa-book progressLol__icon__book" />Trouver sa moitié</li>
          <li><i className="fas fa-book progressLol__icon__book" />Apprendre sans jouer</li>
          <li><i className="fas fa-book progressLol__icon__book" />Le rythme de jeu</li>
        </ul>
        <div className="lowElo__intro__pictures">
          <img className="lowElo__intro__pictures__picture" src={lowEloPicture} alt="" />
          <img className="lowElo__intro__pictures__picture" src={championOtp} alt="" />
          <img className="lowElo__intro__pictures__picture" src={championStrong} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-question icons__question" />La remise en question<i className="fas fa-question icons__question" /></h2>
        <p className="paragraph">Aie aie aie on est tous concernés par la remise en question et c'est la base si vous voulez sortir du bas elo !</p>
        <p className="paragraph">C'est bien beau de dire "<span className="green">j'ai pas de chance</span>" ou "<span className="green">impossible de monter dans ce jeu</span>" ou encore "<span className="green">j'ai toujours les mauvais alliés</span>" mais si on suit cette logique alors tout le monde serai en bas elo non ? Pourquoi il y a des diamants, puis des silvers ?</p>
        <p className="paragraph">Les diamants sont ceux qui ont réussi à s'améliorer, avec de la remise en question et un bon travail personnel.</p>
        <p className="beforeYoutube paragraph">Dans cette vidéo je vais vous montrer l'exemple parfait de quelqu'un qui pense être <span className="green">bloqué à cause de ses alliés</span> sauf que je vais analyser son historique et essayer de le remettre en place, à voir absolument !</p>
        <Youtube videoId="vWfeB_2kbU4" SameSite="" />
        <p className="afterYoutube paragraph">Vous l'avez compris, au + vous passerez de temps à vous trouver des excuses, au moins vous allez vous concentrer sur VOTRE game et VOS défauts sur le jeu.</p>
        <p className="paragraph">Oui League of Legends n'est pas parfait, oui il y a des games horribles avec des <span className="red">AFK</span>, des <span className="red">rageux</span>, des <span className="red">inters</span> mais ce n'est pas une raison pour rester en bas elo.</p>
        <p className="paragraph">Il faut juste chercher la lumière et la mettre en valeur (pololo je deviens chaud à force d'écrire, bientôt mon livre)</p>
        <p className="paragraph">Alors si vous avez du mal à vous remettre en question et que vous ragez souvent, n'hésitez pas à visiter mon guide à ce sujet !</p>
        <Link to="/guides/mental&rage" target="_blanc" className="link">Cliquez ici</Link>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-film icons__video" />L'analyse des replays<i className="fas fa-film icons__video" /></h2>
        <p className="paragraph">Beaucoup de joueurs sous-estiment cette technique et pourtant elle est redoutable.</p>
        <p className="paragraph">Moi le premier avant je ne regardai pas mes replays (En saison 4 quand j'ai commencé League of Legends je suis très vite monté gold puis je suis resté bloqué 2 mois en gold par <span className="green">manque d'auto-jugement</span>).</p>
        <p className="paragraph">Le fait d'avoir regardé mes replays ma fait prendre conscience de mes erreurs directement en game.</p>
        <img className="picture__troll" src={troll} alt="" />
        <p className="paragraph">Ce qui est drôle c'est que en replays on a l'impression d'être vraiment mauvais et de ne rien comprendre sur la map alors que c'est faux.</p>
        <p className="paragraph">Pendant qu'on joue, notre cerveau se concentre sur beaucoup d'informations (<span className="green">mini-map</span>, les <span className="green">combos des sorts</span>, le <span className="green">farm à récupérer</span>) il est donc normal que en replay avec des pauses on peut très bien analyser nos parties !</p>
        <p className="paragraph">Bref n'hésitez pas à <span className="green">regarder vos replays</span>, d'analyser en détails ce que vous auriez pu faire d'autre pendant un teamfight ou autre...</p>
        <p className="paragraph">Pour regarder vos replays c'est simple il faut cliquer sur le petit logo dans votre historique comme ci-dessous</p>
        <img className="picture__historique" src={historiqueGame} alt="" />
        <p className="paragraph">Dans cette vidéo de coaching en silver/gold j'ai analysé un élève qui jouait Vel'koz et on a remarqué que son gros problème était qu'il se plaçait comme un assassin sauf qu'il joue un mage longue portée!</p>
        <p className="paragraph beforeYoutube">Avec l'analyse il a directement <span className="green">remarqué ses grosses erreurs</span> et il a pu les corriger rapidement !</p>
        <Youtube videoId="ltWONmX0joA" SameSite="" />
        <p className="paragraph betweenYoutube">Voici une série de vidéos ou j'analyse des parties des élèves en bas elo, <span className="green">très intéressant pour voir les erreurs</span> qui se répètent et ainsi les supprimer rapidement. Il y a en tout 7 épisodes de cette série, bon visionnage!</p>
        <Youtube videoId="Igz6BnyN3_Y" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-adjust icons__adjust" />Trouver sa moitié<i className="fas fa-adjust icons__adjust" /></h2>
        <p className="paragraph">Maintenant il est temps de trouver votre meilleur ami(e), votre moitié, votr... Ouais bon vous avez compris votre <span className="green">champion principal</span>!</p>
        <p className="paragraph">Quand on est bloqué depuis longtemps en bas elo il est important de creer un "déclic" pour s'améliorer rapidement.</p>
        <p className="paragraph">Pour ça rien de mieux que la <span className="green">technique de l'OTP</span> (One trick Pony) qui signifie de jouer que un seul champion tout le temps !</p>
        <p className="paragraph">Pourquoi c'est fort d'OTP un champion ? C'est logique en jouant tout le temps le même champion vous allez connaître vos match-up par cœur, vos dégâts par cœur, vos possibilités par coeur et j'en passe!</p>
        <img className="picture__renekton" src={trollRenekton} alt="" />
        <p className="paragraph">C'est la maitrise total qui vous permettra de <span className="green">carry beaucoup de games</span> !</p>
        <p className="paragraph">Des inconvénients ? Oui il y en a, déjà premièrement quand votre champion est ban vous allez vous sentir très très bêtes.</p>
        <p className="paragraph">Vous avez le droit à un dodge par jour ne l'oubliez pas.</p>
        <p className="paragraph">Ou pire encore quand votre champion est pick par l'équipe ennemi. Donc ce que je conseille c'est d'avoir son champion OTP + un champion de secours !</p>
        <p className="paragraph"><i className="fas fa-exclamation-triangle icons__warning" /> : à vos risques et périls si vous voulez OTP un champion qui est trop souvent joué ou ban en bas elo <br />exemple : <span className="red">ZED</span>, <span className="red">YASUO</span>, <span className="red">DARIUS</span>, <span className="red">MORDEKAISER</span>, <span className="red">PYKE</span>.</p>
        <p className="paragraph betweenYoutube">Voici une liste de 5 champions à OTP pour carry et sortir du bas elo !</p>
        <Youtube videoId="Udf6A0N100w" SameSite="" />
        <p className="paragraph betweenYoutube">Encore une liste de 5 champions à otp !</p>
        <Youtube videoId="ffEnte7s3bQ" SameSite="" />
        <p className="paragraph betweenYoutube">Une liste de champions AD carry qui sont parfait pour débuter et prendre rapidement du plaisir !</p>
        <Youtube videoId="q3VjGRXzI1A" SameSite="" />
        <p className="paragraph betweenYoutube">Une liste de champions MIDLANE  qui sont parfait pour débuter et prendre rapidement du plaisir ! </p>
        <Youtube videoId="hdzF80rPSOE" SameSite="" />
        <p className="paragraph betweenYoutube">Une liste de champions JUNGLE  qui sont parfait pour débuter et prendre rapidement du plaisir !</p>
        <Youtube videoId="Q2N6V9h_JWg" SameSite="" />
        <p className="paragraph betweenYoutube">Une vidéo ou je vous présente des champions qui ont les meilleurs pourcentages de victoire en bas elo ! (attention ils sont souvent ban/pick)</p>
        <Youtube videoId="A3jerBTKHOU" SameSite="" />
        <p className="paragraph afterYoutube">Si avec ça vous ne trouvez pas votre moitié je ne peux plus rien faire pour vous mes petits ... Oh wait ! N'hésitez pas à visiter mon guide "<span className="gold">TROUVER SON RÔLE/CHAMPION</span>" ça pourrait encore vous aider à trouver la perle rare !</p>
        <Link className="link" to="/guides/role-champion" target="_blanc">Cliquez ici</Link>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="far fa-edit icons__pent" /> Apprendre sans jouer <i className="far fa-edit icons__pent" /></h2>
        <p className="paragraph">Apprendre sans jouer ? Oui on peut perfectionner son niveau sur League of Legends avec de la <span className="blue">connaissance</span> !</p>
        <p className="paragraph">Il est très important de connaître les bonus des <span className="gold">drakes</span>, du <span className="gold">nashor</span>, l'éfficacité de <span className="gold">l'herald</span>, les golds que l'on gagne avec les plaques de tourelles etc...</p>
        <p className="paragraph">Ainsi que les objets, les différentes statistiques sur les objets, les passifs des sorts de certains personnages bref toutes ces informations sont sur le site officiel de League of Legends, profitez et renseignez vous ! (J'ai failli écrire restez chez vous)</p>
        <p className="paragraph">Pour ça c'est simple, pour optimiser sa courbe de progression il faut en + de jouer à League of Legends regarder des <span className="green">guides</span>, des <span className="green">coachings</span>, des vidéos <span className="green">gameplays explicatives</span> et autres !</p>
        <p className="paragraph">Et oui il faut manger League of Legends, boire League of Legends et dormir League of Legends ! (avec une petite tartiflette quand même)</p>
        <img className="picture__trollVs" src={trollVs} alt="" />
        <p className="paragraph">Vous avez de quoi vous régaler sur Youtube et Twitch avec les différents animateurs français ! Prenez le temps de regarder et de bien analyser leurs gameplays, c'est toujours bénéfique.</p>
        <p className="paragraph beforeLink">Voici ma playlist YouTube la + complète de League of Legends ! Elle regroupe des <span className="green">guides sur tous les thèmes du jeu</span> (environ 100 vidéos au total) Alors régalez vous et je vous promet que la fin sera meilleure que Game of Thrones !</p>
        <a href="https://www.youtube.com/playlist?list=PL-u0LV-sQuCqk66I3UstmE1PxvKeSq-XS" className="link">Playlist complète: APPRENDRE SUR LEAGUE OF LEGENDS</a>
      </div>
      <div className="backgroundParagraphe">
        <h2><i className="fas fa-gamepad icons__gamepad" />Le rythme de jeu<i className="fas fa-gamepad icons__gamepad" /></h2>
        <p className="paragraph">Pour se fixer un objectif il faut s'en donner les moyens, tu vas pas aller manger au Burger King quand ton objectif est de perdre rapidement du poids pour faire le beau à la plage cet été</p>
        <p className="paragraph test">(moi perso je préfère aller au Burger King)</p>
        <p className="paragraph">Sur League of Legends c'est pareil, si vous voulez sortir du bas elo il faut commencer par adapter un rythme de jeu "logique".</p>
        <p className="paragraph">Je m'explique il faut surtout rester cohérent dans votre optimisation de progression, si votre but est de progresser avec Darius et de monter platine rapidement il va falloir sacrifier les games ou vous jouez d'autres champions pour le "fun".</p>
        <p className="paragraph"> Si votre objectif est juste de prendre du plaisir alors jouez ce que vous désirez.</p>
        <p className="paragraph green">Mais si vous voulez sortir du bas elo il faut faire des sacrifices !</p>
        <p className="paragraph">N'hésitez pas à spam vos champions préférés pour détruire le ladder, c'est la base de tout ! Au + vous vous éparpillez au + vous allez galérer à monter et ce peu importe votre niveau global sur le jeu !</p>
        <img className="picture__heavyToCarry" src={heavyToCarry} alt="" />
        <p className="paragraph">J'ai des élèves diamants+ qui galèrent à monter car ils pensent pouvoir le faire en jouant 6-7 champions et bien non c'est très très dur.</p>
        <p className="paragraph beforeYoutube">Voici l'exemple parfait, dans cette vidéo je coach un élève qui joue peu au jeu, et pour le peu de temps qu'il y passe il joue plusieurs rôles/champions à la fois ce qui donne une <span className="red">game catastrophique</span> !</p>
        <Youtube videoId="Krg3QdeQqX4" SameSite="" />
        <p className="paragraph betweenYoutube">Dans cette vidéo je vous explique les erreurs qui sont souvent la en bas elo avec la bonne réactivité à avoir !</p>
        <Youtube videoId="Zzt76aIMpZI" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Pour résumer sur cette page qui parle du bas elo de League of Legends, remettez-vous en question, trouvez votre champion, optimisez votre temps de jeu et surtout <span className="gold">prenez du plaisir</span> ! Derrière chaque bas elo se cache un futur challenger...</p>
        <p className="paragraph preEnd">J'espère que ce guide vous aura aider, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
        <img className="picture__trollSimpson" src={trollSimpson} alt="" />
        <p className="end">N'hésitez pas à aller consulter les autres guides de coach Slipix</p>
      </div>
    </div>
  );
};

export default LowElo;
