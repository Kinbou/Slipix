import React from 'react';
import { Link } from 'react-router-dom';

import { useTitle } from 'src/hooks/useTitle';
import './roleChampion.scss';

// images
import logoSlipix from 'src/assets/images/roleChampion/slipixLogoRole.png';
import twistedfast from 'src/assets/images/roleChampion/twistedfast.jpg';
import superRammus from 'src/assets/images/roleChampion/superRammus.jpg';
import riverWick from 'src/assets/images/roleChampion/riverWick.jpg';
import coupleTroll from 'src/assets/images/roleChampion/coupleTroll.png';
import duplaisir from 'src/assets/images/roleChampion/duplaisir.jpg';
import pasFacile from 'src/assets/images/roleChampion/pasFacile.jpg';
import banYasuo from 'src/assets/images/roleChampion/banYasuo.jpg';
import trollPicture from 'src/assets/images/roleChampion/trollPicture.jpg';

import Youtube from 'src/frontend/components/Youtube';

const RoleChampion = () => {
  useTitle('Trouver son Rôle/Champion');
  return (
    <div className="roleChampion">
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
        <Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        Rôle/Champion
      </div>
      <h1 className="globalTitle-page">Trouver son Rôle/Champion</h1>
      <p className="paragraph">Salut la <span className="red">#TeamSlip</span> c'est coach Slipix et on va parler des <span className="blue">rôles</span> et des <span className="red">champions</span> dans League of Legends</p>
      <img className="logo" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe roleChampion__intro">
        <p className="intro">
          Trouver son rôle et son champion est primordial dans League of Legends !
        </p>
        <p className="paragraph">
          C'est un jeu ou vous aurez beaucoup de moments difficiles donc autant jouer
          les <span className="red">champions</span> qu'on aime et qui nous font aimer le jeu !
        </p>
        <p className="paragraph">
          Les questions que je reçois le + souvent pendant mes lives, mes coachings
          ou sur mes réseaux sociaux sont par rapport aux <span className="red">champions</span> ou rôles.
        </p>
        <p className="paragraph">Exemple : "Slipix donne moi un <span className="red">champions</span> fort pour 1v9" ou encore "Hey
          Slipix tu as une idée de <span className="red">champions</span> à jouer en midlane?".
        </p>
        <div className="roleChampion__intro__pictures">
          <img className="roleChampion__intro__pictures__picture" src={twistedfast} alt="" />
          <img className="roleChampion__intro__pictures__picture" src={superRammus} alt="" />
          <img className="roleChampion__intro__pictures__picture" src={riverWick} alt="" />
        </div>
        <p className="paragraph">
          Et pourtant il faut trouver seul son <span className="blue">rôle</span> et son <span className="red">champion</span> ! C'est comme
          demander à  quelqu'un quel instrument de musique jouer alors que de base on
          préfère la guitare.
        </p>
        <p className="paragraph">
          Vous l'avez donc compris, jouez ce que vous aimez ! Maintenant on arrive à
          la phase "compliquée" c'est de savoir vraiment ce que vous aimez faire dans
          League of Legends.
        </p>
        <p className="paragraph">Pour ça il faut se poser les bonnes questions et vous allez voir que
          ensemble on va y arriver héhé
        </p>
        <img className="roleChampion__intro__heart" src={coupleTroll} alt="" />
      </div>
      <div className="backgroundParagraphe roleChampion__role">
        <h2 className="roleChampion__role__title"><i className="fas fa-university icon__temple" />Trouver son rôle<i className="fas fa-university icon__temple" /></h2>
        <p className="roleChampion__role__content paragraph">Premièrement il ne faut pas s'attarder à "gagner" mais à prendre du plaisir, ne l'oubliez jamais je sais que je me répète mais ça reste un jeu ! Par exemple moi j'ai un meilleur winrate en midlane mais ce n'est pas pour autant que je vais jouer QUE midlane<br /> (il faut voir ses priorités, monter en elo ou bien s'amuser).
        </p>
        <img className="roleChampion__role__picture" src={duplaisir} alt="" />
        <p className="paragraph">Trouver son <span className="blue">rôle</span> determinera votre playstyle et ensuite vous allez pouvoir
          adapter vos champions à votre <span className="blue">rôle</span>! <br />(Je conseille d'abord de trouver le
          <span className="blue"> rôle</span> puis de s'interesser aux champions du <span className="blue">rôle</span>, ce n'est que mon avis).
        </p><br />
        <p className="paragraph">Il est très important de savoir ce qu'on recherche dans League of Legends
          : Monter le + haut possible en ranked ou bien juste s'amuser en normal draft?
        </p>
        <p className="paragraph">Dans ces cas la pour le tryhard de la ranked il vaut mieux trouver son
          rôle principal (avec 3 champions pour optimiser) et ensuite un <span className="blue">rôle </span>
          secondaire en cas d'autofill (avec 2 champions pour optimiser).
        </p>
        <p className="roleChampion__lists"><i className="fas fa-feather-alt icon" />Les questions à se poser pour trouver son rôle <i className="fas fa-feather-alt icon" /></p>
        <ul>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime jouer seul ou bien en intéraction avec mes alliés ?</li>
          <p className="roleChampion__role__list paragraph">Si vous préférez jouer seul dans votre coin, la toplane sera votre paradis en jouant des duellistes ! Pas besoin de se regrouper parfois pour gagner des parties.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime être présent sur la map et être très mobile ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez avoir une grande présence sur la carte, le rôle de jungle/midlane sera parfait pour vous ! C'est avec le roaming d'un midlaner et l'initiative d'un jungler que les parties sont gagnées.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime farm et last hit les sbires ?</li>
          <p className="roleChampion__role__list paragraph">Si vous n'aimez pas le farming de sbires, le rôle de support et de jungle sera optimal. Et si vous aimez ça, le rôle d'ADC sera parfait !</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime faire des teamfights ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez faire des bon gros teamfights, vous pouvez opter pour la toplane en jouant un tank qui va initier le combat, tout comme un jungle tank ou bruiser qui fera la même.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime faire les objectifs ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez faire les objectifs neutres (Drake, Herald, Nashor) le rôle de jungle est la pour vous ! C'est avec le smite qu'on fait ces objectifs.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime faire des gros dégâts (du DPS) ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez arroser vos ennemis d'une pluie de dégâts que ça soit du BURST ou du DPS il est temps pour vous de jouer Midlane ou bien ADC.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />J'aime protéger mes alliés ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez sauver et protéger vos alliés de leurs pires bêtises, le rôle de support saura faire honneur à votre esprit d'entraide.</p>
        </ul>
        <p className="roleChampion__role__introYoutube paragraph">Pour vous aider en + de ma technique des questions/réponses voici une vidéo ou je vous explique comment trouver son <span className="blue">rôle</span> avec de la remise en forme !</p>
        <Youtube videoId="Z7G2ywfAQz0" SameSite="" />
        <p className="roleChampion__afterYoutube paragraph">Une fois que vous avez enfin trouvé votre rôle de rêve, on va ensemble s'attaquer aux <span className="red">champions</span> ! Ne pas oublier que pour avoir une courbe de progression stable et positive, il faut jouer très souvent le même rôle et ne pas s'éparpiller !</p>
        <p className="roleChampion__introYoutube paragraph">Voici un exemple parfait d'un coaching sur un abonné qui jouait tous les <span className="blue">rôles</span> à la fois, on remarque une manque de connaissance de ses match-ups, à ne pas faire si vous voulez monter en rankeds rapidement.</p>
        <Youtube videoId="uKVDl9wCl2U" SameSite="" />
      </div>
      <div className="backgroundParagraphe roleChampion__champion">
        <h2 className="roleChampion__champion__title"><i className="fab fa-phoenix-framework icon__phoenix" />Trouver son Champion<i className="fab fa-phoenix-framework icon__phoenix" /></h2>
        <p className="paragraph">Il y a environ 150 <span className="red">champions</span> dans League of Legends, tous avec une
          identité unique ainsi que des kits de sorts différents.
        </p>
        <p className="paragraph">Et oui le charme de League of Legends c'est aussi son vaste choix de gameplay !</p>
        <p className="paragraph">Le problème c'est que ce côté positif de large choix est également un vice
          pour votre progression dans le jeu.
        </p>
        <img className="roleChampion__champion__picture roleChampion__champion__picture__notEasy" src={pasFacile} alt="" />
        <p className="paragraph">J'ai souvent remarqué que dans mes coachings, les élèves bas elo (Fer,
          Bronze,Argent,Or) changeaient très souvent de <span className="red">champions</span> et se lassaient
          très vite d'un <span className="red">champion</span>. C'est le problème quand on a beaucoup de choix.
        </p>
        <p className="space paragraph">Par exemple quand on veut acheter une voiture c'est bien + simple de
          choisir quand on a le choix entre 5 modèles au lieu de 150.
        </p>
        <p className="paragraph">Maintenant que vous avez trouvé votre <span className="blue">rôle</span> (j'espère grâce à mon
          aide) il est temps de choisir votre premier champion !
        </p>
        <p className="paragraph">Ce que je conseille au début, c'est de faire beaucoup de normales games en
          draft et non en classée pour ne pas abîmer votre MMR.
        </p>
        <p className="space paragraph">Jouez sur le même <span className="blue">rôle</span> tous les <span className="red">champions</span> que vous trouvez intéressants,
          c'est vital pour votre préparation aux rankeds.
        </p>
        <p className="paragraph">Attention de ne pas spam un seul champion sans avoir essayé les autres, il
          vaut mieux commencer à en découvrir plusieurs avant de faire son ultime choix.
        </p>
        <img className="roleChampion__champion__picture roleChampion__champion__picture__yasuo" src={banYasuo} alt="" />
        <p className="paragraph">Si par exemple vous voullez devenir un joueur de toplane, vous pouvez
          essayer plein de <span className="red">champions</span> différents en toplane jusqu'à trouver votre coup de coeur !
        </p>
        <p className="paragraph">Une fois que vous avez mis de côté dans votre tête environ 5 <span className="red">champions</span> que
          vous adorez, il est temps de faire la même technique que pour trouver son
          <span className="blue"> rôle</span> : Les Questions/Réponses.
        </p>
        <p className="roleChampion__lists"><i className="fas fa-feather-alt icon" />Les questions à se poser pour trouver son champion <i className="fas fa-feather-alt icon" /></p>
        <ul>
          <li><i className="fas fa-arrow-alt-circle-right icon" />Mon champion doit savoir gérer les duels ?</li>
          <p className="roleChampion__role__list paragraph">Si vous aimez vous battre et principalement en duel optez pour les bruisers comme Darius, Jax ou Renekton ainsi que les assassins tels que Zed, Fizz ou Talon !</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />Mon champion doit être au corps à corps ou à distance ? </li>
          <p className="roleChampion__role__list paragraph">Pas vraiment compliqué mais c'est toujours bien de le préciser, ne vous forcez pas à jouer des corps à corps ou des distances si vous n'aimez pas ça.</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />Mon champion doit être facile ou dur à jouer ? </li>
          <p className="roleChampion__role__list paragraph"> Et oui on a pas tous envie de forcément faire des plays ou des montages en jouant du Yasuo, Zed et j'en passe ! Si vous aimez les champions facile ne vous en privez pas, et à l'inverse si vous aimez les combos et les plays lancez-vous !</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />Mon champion doit être fort en début de partie ou en fin de partie ? </li>
          <p className="roleChampion__role__list paragraph">Très important de s'adapter à son champion, si vous aimez jouer relativement safe en début et milieu de partie prenez des champions qui sont redoutables en fin de partie comme Veigar, Vayne, Kayle ou encore Jax ! Pareil pour le contraire si vous aimez mettre du rythme choisissez des champions redoutables en début de partie comme Olaf, Draven, Lee Sin ou bien Qiyana !</p>
          <li><i className="fas fa-arrow-alt-circle-right icon" />Mon champion est-il bon pour monter en elo ? </li>
          <p className="roleChampion__role__list paragraph">Voici la question piège, je reçois beaucoup trop de messages dans ce style. Au début le but n'est pas de trouver un champion bon pour monter mais un champion avec lequel on prend du plaisir ! De + on peut monter avec TOUS les champions, alors ne vous prenez pas la tête à vous demander si votre champion est fort ou non, jouer les champions forts c'est important à partir du Master+ pour optimiser son winrate.</p>
        </ul>
        <p className="roleChampion__introYoutube paragraph">Pour vous aider en + de ma technique des questions/réponses voici une vidéo ou je vous explique comment trouver son <span className="red">champion</span> avec de la remise en forme !</p>
        <Youtube videoId="q-rWwaUQ-4I" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">Maintenant on passe à une vidéo qui va vous montrer 3 <span className="red">champions</span> à OTP (One trick Pony) ça consiste à jouer que un seul <span className="red">champion</span> et de le spam pour très vite le maîtriser, ce sont en principe des <span className="red">champions</span> qui sont redoutable une fois qu'on a un bon nombre de games dessus. Essayez les et à vous de carry !</p>
        <Youtube videoId="OMRt2MQJIgw" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">Encore une vidéo ou je vous présente 5 <span className="red">champions</span> à OTP ! Et bah dis donc il est plein de ressources ce Coach Slipix héhé</p>
        <Youtube videoId="ffEnte7s3bQ" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">On enchaine avec une vidéo ou je vous présente 3 <span className="red">champions</span> qui ont du potentiel et qui sont surtout très polyvalents, c'est à dire qu'ils n'ont pas vraiment de gros counterpicks et ils sauront s'adapter à la composition de votre équipe !</p>
        <Youtube videoId="MAB-VUtQQL8" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">Je me devais de réaliser cette vidéo car beaucoup d'entre vous détestent les tanks mais ne savent pas comment les contrer. Voici une liste de 3 <span className="red">champions</span> pour les faire pleurer !</p>
        <Youtube videoId="MXTAwZAZyyk" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">Une liste de <span className="red">champions</span> qui ont atteint de très gros pourcentages de victoires en saison 10 ! Il en faut pour tous les goûts, allez-y les tryharders celle la est pour vous !</p>
        <Youtube videoId="J_WiOifXAv4" SameSite="" />
        <p className="roleChampion__betweenYoutube paragraph">Et pour terminer une liste de <span className="red">champions</span> que je trouve super fun dans le jeu, dans la victoire ou la défaite ! (Ce n'est que mon avis et je préfère vous le partager)</p>
        <Youtube videoId="RnO3eqRYNNk" SameSite="" />
      </div>
      <div className="backgroundParagraphe roleChampion__end">
        <p className="paragraph">Pour résumer sur cette page qui parle de votre rôle et de votre champion, n'hésitez pas à vous poser les bonnes questions pour vite trouver votre playstyle et ainsi commencer une bonne courbe de progression !<br /> N'oubliez pas que ça reste un jeu il faut s'amuser, <span className="gold">ne vous forcez pas à jouer des champions forts que vous n'aimez pas...</span></p>
        <p className="paragraph">J'espère que ce guide vous aura aider, à bientot sur la faille la <span className="red">#TEAMSLIP</span></p>
        <img className="roleChampion__champion__picture roleChampion__champion__picture__troll" src={trollPicture} alt="" />
        <p className="end">N'hésitez pas à aller consulter les autres guides de COACH SLIPIX</p>
      </div>
    </div>
  );
};

export default RoleChampion;
