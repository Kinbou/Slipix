import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../../Tutoriels/Youtube';
import './progressLol.scss';

// images
import logoSlipix from '../../../../assets/images/progressLol/slipixLogo.png';
import quicklyProgress from '../../../../assets/images/progressLol/quicklyProgress.jpg';
import initiative from '../../../../assets/images/progressLol/initiative.jpg';
import trust from '../../../../assets/images/progressLol/trust.jpg';
import time from '../../../../assets/images/progressLol/time.jpg';
import sylasBroken from '../../../../assets/images/progressLol/sylasBroken.jpg';
import brandJungleWtf from '../../../../assets/images/progressLol/brandJungleWtf.jpg';
import zedForet from '../../../../assets/images/progressLol/zedForet.jpg';
import giveEverything from '../../../../assets/images/progressLol/giveEverything.jpg';
import trollPicture from '../../../../assets/images/progressLol/trollPicture.jpg';
import trollPotter from '../../../../assets/images/progressLol/trollPotter.jpg';


const progressLol = () => (
  <div className="progressLol">
    <div className="breadcrumb">
      <Link to="/">Accueil ></Link>
      <Link to="/guides"> guides > </Link>
      progresser sur League of Legends
    </div>
    <h1 className="globalTitle-page">Progresser sur League of Legends</h1>
    <p>Salut la <span className="red">#TEAMSLIP</span> c'est COACH SLIPIX et on va parler de la progression dans LEAGUE OF LEGENDS</p>
    <img className="progressLol__logo" src={logoSlipix} alt="" />
    <div className="progressLol__intro">
      <p className="progressLol__intro__content">Progresser sur League of Legends, L'objectif de beaucoup de joueurs !</p>
      <p>Progresser pour s'améliorer et ainsi atteindre un <span className="green">objectif personnel</span>, ou
        bien rejoindre un ami dans un rank + élevé ? Ou tout simplement progresser
        car on passe beaucoup de temps sur le jeu. Il y a plein de façons
        différentes de s'améliorer et on va le voir ensemble en détails, et aussi
        avec l'aide de beaucoup de mes vidéos !
      </p>
      <p>J'ai remarqué avec l'experience de mes coachings que il y a une courbe de
        progression très différente selon les joueurs, bien evidemment il y a
        toujours des personnes "<span className="green">douées</span>" comme dans la musique mais surtout
        certaines personnes qui optimisent bien mieux cette <span className="green">courbe</span> !
      </p>
      <p>On va parler dans la globalité de comment progresser sur League of Legends
        alors attachez vos ceintures il y a du boulot !
      </p>
      <ul>
        <p>Voici les différentes catégories qu'il faut maitriser pour progresser :</p>
        <li><i className="fas fa-book progressLol__icon__book" />L'optimisation du temps de jeu</li>
        <li><i className="fas fa-book progressLol__icon__book" />Créer votre champion Pool (vos champions joués)</li>
        <li><i className="fas fa-book progressLol__icon__book" />Être positif, une grande force !</li>
        <li><i className="fas fa-book progressLol__icon__book" />Ma technique secrète</li>
        <li><i className="fas fa-book progressLol__icon__book" />La connaissance</li>
      </ul>
      <div className="progressLol__intro__pictures">
        <img className="progressLol__intro__pictures__image" src={quicklyProgress} alt="" />
        <img className="progressLol__intro__pictures__image" src={initiative} alt="" />
        <img className="progressLol__intro__pictures__image" src={trust} alt="" />
      </div>
    </div>
    <div className="progressLol__optimization">
      <h2>L'optimisation du temps de jeu</h2>
      <p>Bien évidemment on a pas tous les même emploi du temps et on ne peut pas
        tous passer le même nombre d'heures sur le jeu.
      </p>
      <p>Les adultes avec un travail régulier et une vie de famille auront moins
        de temps qu'un jeune étudiant sur League of Legends, mais ce n'est pas une
        excuse pour baisser les bras et se dire "<span className="green">oui mais je ne peux pas trop jouer donc je stuck</span>".
      </p>
      <p>NON et NON ! On peut très bien garder une bonne progression, et on va
        parler de l'optimisation de votre temps.
      </p>
      <img className="progressLol__optimization__pictureTime" src={time} alt="" />
      <p>Si vous avez que 2 parties par jours (ce qui est déjà pas mal) vous devez
        absolument rester "<span className="green">logique</span>".
      </p>
      <p>C'est à dire que pour le peu de games que vous allez faire il va falloir
        rester IMPERATIVEMENT sur votre rôle et votre champion principal.
      </p>
      <p>Si vous
        commencez à jouez de tout et n'importe quoi tout en faisant peu de games
        dans la semaine votre niveau va totalement s'affaiblir.
      </p>
      <p>Alors si vous ne pouvez pas trop jouer, rester sur vos acquis et <span className="green">spammez vos champions préférés</span> !
      </p>
      <p className="progressLol__beforeYoutube">Voici un coaching très intéressant d'un abonné qui ne connait pas assez son champion, par manque d'optimisation de son temps de jeu et parce qu'il jouait <span className="green">trop de champions</span>.</p>
      <Youtube videoId="MSSYY_bY9KM" SameSite="" />
      <p className="progressLol__afterYoutube"><span className="red">Attention</span> on part du principe que vous voulez progresser, je ne vous oblige pas à jouer les même champions, si vous avez peu de temps et que vous voulez juste jouer tranquilou, allez en normale draft mais ne pénalisez pas vos alliés en classées.</p>
    </div>
    <div className="progressLol__championPool">
      <h2>Créer  votre champion Pool</h2>
      <p>Il est très important pour progresser rapidement dans league of legends
        d'avoir un <span className="green">champion pool</span> pas trop grand pour très vite s'habituer aux méchaniques.
      </p>
      <p>Un joueurs qui va jouer 25 champions a 99% de chance de stuck dans son elo
        et je ne rigole vraiment pas sur les stats.
      </p>
      <p>Tout le temps dans mes coachings je refais le champion pool de l'élève car
        il est souvent beaucoup trop grand.
      </p>
      <p>Je conseille <span className="green">3 champions maximum</span> (3 dans votre rôle principal et 1
        champion en rôle secondaire).
      </p>
      <div className="progressLol__pictures">
        <img className="progressLol__pictures__image" src={sylasBroken} alt="" />
        <img className="progressLol__pictures__image" src={brandJungleWtf} alt="" />
        <img className="progressLol__pictures__image" src={zedForet} alt="" />
      </div>
      <p>Le problème quand vous jouez trop de champions c'est que vous ne serez
        jamais à l'aise avec vos champions.
      </p>
      <p>Il est pratiquement impossible de maitriser à la perfection 10 champions
        pour un joueur normal (c'est le niveau des joueurs pro). Par manque
        d'habitude vous allez vous concentrer sur vos sorts, vos combos, vous
        n'allez pas connaître vos dégâts
        par cœur et donc votre cerveau va se concentrer UNIQUEMENT sur la
        <span className="green"> micro-gestion</span> (la gestion de votre champion) et va ignorer en grande partie
        la <span className="green">macro-game</span> (vision de jeu).
      </p>
      <p>Si vous ne savez pas quels champions ou rôles jouer n'hésitez pas à
        visiter mon guide "<span className="gold">TROUVER SON RÔLE/CHAMPION</span>" :
      </p>
      <Link to="/guides/role-champion" className="progressLol__link" target="_blanc">Cliquez ici</Link>
    </div>
    <div className="progressLol__positive">
      <h2>ÊTRE POSITIF, UNE GRANDE FORCE !</h2>
      <p>Vous allez vivre beaucoup de <span className="green">déceptions</span> dans League of Legends, c'est pour
        cela qu'il va falloir essayer de retenir le <span className="green">positif</span> pour avancer dans votre
        quête de progression !
      </p>
      <p>Être négatif et de mauvaise foi, c'est retenir que le mauvais, oublier les
        games faciles et se trouver des excuses dans la défaite.
      </p>
      <p>Il n'y a pas de place pour les <span className="green">pleurnicheuses</span> dans le haut elo de League
        of Legends, alors si vous partez du principe que vous êtes bloqués dans
        votre elo/ranking à cause de vos alliés, on est mal barrés !
      </p>
      <img className="progressLol__positive__troll" src={trollPicture} alt="" />
      <p>Une défaite avec un très bon score ? Oui c'est dur à encaisser mais
        retenez le fait que vous avez réussi à être très bien dans la game et que
        forcément vous avez prit du plaisir à la jouer.
      </p>
      <p>Il faut accepter que <span className="green">pas toutes les games sont gagnables</span> et peu importe
        votre niveau de jeu.
      </p>
      <p>J'ai un exemple parfait. Faker (un des meilleurs joueurs du monde) avait
        fait 5 défaites pour monter un nouveau compte jusqu'au platine , et oui
        même les + grands peuvent perdre des parties, ça reste un jeu 5v5.
      </p>
      <img className="progressLol__positive__faker" src={giveEverything} alt="" />
      <p>Ce qu'il faut retenir c'est de TOUT donner à chaque game , <span className="green">on en apprend toujours et même dans la défaite</span> !
      </p>
      <p>Pour ceux qui me suivent pendant mes
        lives vous le savez déjà, même quand j'enchaîne des mauvaises parties je
        suis toujours la à jouer dans la bonne humeur et ça n'affecte en rien mon
        gameplay.
      </p>
      <p>Si vous voulez + de conseils pour gérer votre <span className="green">mental</span> & votre <span className="green">rage</span>,
        n'hésitez pas à aller voir mon guide sur ce sujet :
      </p>
      <Link to="/guides/mental&rage" className="progressLol__link" target="_blanc">Cliquez ici</Link>
    </div>
    <div className="progressLol__secret">
      <h2>Ma technique secrète</h2>
      <p>Il n'y a pas de miracles dans League of Legends pour progresser, il faut
        jouer jouer et jouer, on ne peut pas atteindre un elo sans y mettre du sien.
      </p>
      <p>Par contre avec le temps j'ai remarqué que les élèves qui jouaient "<span className="green">safe</span>"
        et qui ne tentaient pas de plays progressaient beaucoup moins vite que les élèves <span className="green">agressifs</span>.
      </p>
      <p>Et vous allez voir que c'est logique avec les détails, c'est pour ça que
        je vais vous expliquer ma technique secrète dans cette vidéo :
      </p>
      <p className="progressLol__best">La technique Paire de Couilles. </p>
      <p className="progressLol__beforeYoutube">(Oui désolé pour le nom mais j'en suis fier)</p>
      <Youtube videoId="EDA82qt7AyY" SameSite="" />
      <p className="progressLol__afterYoutube">Vous l'avez donc compris, on tente les plays, on se sort les doigts, on connait ses <span className="green">limites</span> et le potentiel de son champion et donc on sait quand on peut go in ou reculer ! </p>
      <p>Jouer safe vous empêche de connaître vos <span className="green">limites</span> et c'est le problème de
        BEAUCOUP de joueurs bloqués dans un elo.
      </p>
      <p>J'ai remarqué que certains élèves n'osaient pas tenter les plays parce
        qu'ils avaient <span className="green">peur de se faire flame</span> par les alliés en cas de fail.
      </p>
      <p>Si le jugement de vos alliés vous fait peur il y a le bouton "MUTE".
        Faites moi confiance il n'y a aucun intérêt à jouer safe dans
        l'apprentissage d'un champion ou d'un rôle.
      </p>
      <p className="progressLol__beforeYoutube">
        Voici une vidéo ou je coach un abonné qui joue LUX et qui <span className="green">se laisse totalement dominer</span> par un RYZE à cause de son gameplay beaucoup trop safe,
        vous allez voir le problème directement lié à ma technique.
      </p>
      <Youtube videoId="yX6EcSmjQRU" SameSite="" />
      <p className="progressLol__betweenYoutube">
        Une autre vidéo intéressante ou je coach une abonnée qui joue support et qui
        elle aussi se laisse dominer, ne tente pas de plays, ne poke pas bref
        <span className="green">évitez ce genre de gameplay</span> si vous voulez progresser !
      </p>
      <Youtube videoId="-Y35aQrFt9g" SameSite="" />
      <p className="progressLol__betweenYoutube">Pour terminer ce thème encore un coaching très important d'un élève qui joue Ahri, il a réussi a avoir un <span className="green">très bon score</span> mais il perd la partie par manque d'initiative.<br /><span className="green">Il laisse ses adversaires dominer la map</span> et les objectifs alors qu'il peut changer les choses avec ses ressources !</p>
      <Youtube videoId="djvQl7o_He0" SameSite="" />
    </div>
    <div className="progressLol__knowledge">
      <h2>La connaissance</h2>
      <p>C'est bien beau d'avoir les <span className="green">mechaniques du champion</span>, d'être à l'aise dans
        son gameplay, d'avoir du temps pour jouer, d'être positif à 100% mais il
        manque quelque chose de vital mes petits : <span className="green">LA CONNAISSANCE & LE SAVOIR</span> !
      </p>
      <p>Premièrement il est vital de connaître son champion par coeur ! Le stuff à
        faire selon le patch, les sorts à augmenter en priorité, la façon de jouer
        les teamfights, les bonnes Maîtrises, connaître les champion counter ou
        qu'on counter etc...
      </p>
      <p>Tout ça se travail en jouant à fond le champion, oui je me répète beaucoup
        mais encore une fois j'insiste n'hésitez pas à spam un champion précis
        quand vous voulez progresser rapidement dessus, ce n'est pas en le jouant <span className="green">1 partie par jour que vous allez vous améliorer</span>.
      </p>
      <p className="progressLol__beforeYoutube">Dans ce coaching je vais vous expliquer pourquoi c'est très important de connaître le potentiel de votre champion à 100%</p>
      <Youtube videoId="90Fk-maGe8k" SameSite="" />
      <p className="progressLol__afterYoutube">Pour ce qui est du stuff et des runes à utiliser ainsi que les sorts à améliorer en priorité selon les patchs je vous conseille d'utiliser <span className="green">PROBUILD</span>, car les meilleurs joueurs sont obligés d'optimiser pour pouvoir monter donc ça sera à 95% le bon stuff à faire.</p>
      <a className="progressLol__link" href="https://www.probuilds.net/" target="_blanc">ProBuild Cliquez ici</a>
      <p className="progressLol__afterYoutube">Le stuff est-il si important que ça dans League of Legends ? Bien evidemment que oui, acheter le mauvais stuff c'est mal investir les golds que l'on obtient dans la faille.</p>
      <p>League of Legends est un jeu gros jeu de snowball (<span className="green">effet boule de neige</span>)
        donc quand vous avez de l'avance et que vous n'achetez pas les bon objets vous
        n'arriverez pas à carry certaines games.
      </p>
      <p>Je vous conseille d'aller sur le client de League of legends et d'aller
        dans "<span className="green">collection</span>" pour voir et lire tous les objets du jeu, histoire de
        bien se familiariser et d'essayer par vous même d'imaginer un stuff pour
        votre personnage.
      </p>
      <p>Il est important de <span className="green">comprendre ce que l'on fait</span> et pas de copier bêtement un stuff d'une vidéo ou d'un guide.
      </p>
      <p className="progressLol__beforeYoutube">Dans ce coaching d'un élève, on
        remarque que le stuff dans la game en général est une catastrophe, mal
        optimisé donc les joueurs perdent un <span className="green">gros potentiel de victoire</span> !
      </p>
      <Youtube videoId="V5ZCs62ujoI" SameSite="" />
      <p className="progressLol__betweenYoutube">Maintenant voici une vidéo qui regroupe un peu tout ce qu'on a dit, ça devrait compléter le guide écrit !</p>
      <Youtube videoId="AC1t5ESlfrM" SameSite="" />
      <p className="progressLol__betweenYoutube">Et pour terminer voici l'épisode 1 de ma série de gameplays "<span className="green">PROGRESSER SUR LEAGUE OF LEGENDS</span>" au programme environ 30 vidéos ou je joue plein de champions dans des rôles différents et j'explique tout ce que je fais dans les games. Parfait pour <span className="green">bien apprendre</span> et reproduire ensuite dans vos parties !</p>
      <Youtube videoId="EsgqDFrnVt0" SameSite="" />
      <p className="progressLol__afterYoutube">J'espère que ce guide vous aura aidé, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
      <img className="progressLol__pictures__trollPotter" src={trollPotter} alt="" />
      <p className="end">N'hésitez pas à aller consulter les autres guides de Coach Slipix</p>
    </div>
  </div>
);

export default progressLol;
