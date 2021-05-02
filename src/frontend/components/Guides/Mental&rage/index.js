import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';
import { motion } from 'framer-motion';

import { animationOne, transition } from 'src/utils/animations';
import { useTitle } from 'src/hooks/useTitle';
import './mental&rage.scss';

// Picture
import logoSlipix from 'src/assets/images/guides/mental&rage/slipixLogo.png';
import cerveau from 'src/assets/images/guides/mental&rage/cerveau.jpg';
import OMental from 'src/assets/images/guides/mental&rage/0Mental.jpg';
import rage from 'src/assets/images/guides/mental&rage/rage.jpeg';
import textRage from 'src/assets/images/guides/mental&rage/textRage.jpg';
import troll from 'src/assets/images/guides/mental&rage/troll.jpg';


const Guide = () => {
  useTitle('Mental & Rage');
  return (
    <motion.div
      className="guide"
      key="mentalRage"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil </Link> &gt;
        <Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        mental&rage
      </div>
      <h1 className="globalTitle-page">Mental & Rage</h1>
      <div className="guide__intro">
        <div className="guide__content">
          <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler du <span className="blue">mental</span> & la <span className="red">rage</span> dans League of Legends !</p>
          <img className="logo" src={logoSlipix} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe guide__mental">
        <h2 className="blue"><i className="fas fa-brain icons__brain" />Le mental<i className="fas fa-brain icons__brain" /></h2>
        <p className="paragraph">Le <span className="blue">mental</span> est très important pour tenir la pression qui est totalement présente dans les jeux vidéos. Il permet également d'éviter une étape qui va vous faire perdre beaucoup de games : La <span className="red">rage</span>. Mais ça vous le savez déjà, c'est bien pour cela que vous avez cliqué sur ce guide (c'est bien d'assumer).</p>
        <img className="guide__mental__cerveau" src={cerveau} alt="" />
        <p className="paragraph">Avoir un bon <span className="blue">mental</span> vous permettra d'enchaîner vos parties sans pour autant être trop affecté par de mauvaises games. Par exemple un joueur qui a un faible <span className="blue">mental</span> ne va pas jouer de la même façon après 2 défaites alors que un joueur qui a bossé son <span className="blue">mental</span> pourra enchaîner sans trop de problèmes.</p><br />
        <p className="paragraph">Ne pas oublier que avoir un bon <span className="blue">mental</span> signifie "rester positif" et ce même dans une game très compliquée, par exemple quand je suis dans un bon <span className="blue">mental</span> je vais encourager mes alliés en écrivant dans le tchat des "<span className="gold">Well played</span>" ou des "<span className="gold">wow gg</span>", ça peut paraître pas grand chose mais parfois les petits détails font gagner les + grandes guerres.</p><br />
        <p className="paragraph"> Un allié qui était peut être épuisé de ses games précédentes? Un allié qui commençait à être <span className="red">toxic</span> ? Peut être que grâce à votre positivité il va essayer de faire un effort et la game sera bien + agréable. (bien sûr ce n'est pas valable pour toutes les games)</p>
        <p className="paragraph beforeYoutube">Comment bosser son <span className="blue">mental</span> ? Il n'y a pas de méthodes miracle, il faut premièrement RELATIVISER et en tirer que le positif ! Une mauvaise défaite, un AFK dans votre team, un gamin qui vous insulte ?</p>
        <img className="guide__mental__picture" src={OMental} alt="" />
        <p className="paragraph"> Ce n'est pas très grave, on passe vite à la game suivante et on essaye de se rappeler d'une victoire avec de bon alliés ou une victoire que vous avez <span className="gold">hard carry</span>.</p>
        <p className="paragraph">Ce n'est bien évidemment pas facile mais avec le temps ça ira beaucoup mieux, faites moi confiance se plaindre dans League of Legends ne vous attirera rien de bon si ce n'est de l'<span className="red">ego surdimensionné</span> et l'impression de n'avoir rien à se reprocher.</p>
        <p className="paragraph beforeYoutube">Voici une vidéo indispensable ou j'explique à un abonné que <span className="red">rager</span> et se <span className="red">plaindre</span> ne l'aidera jamais</p>
        <Youtube className="guide__mental__youtube" videoId="vWfeB_2kbU4" SameSite="" />
        <p className="paragraph afterYoutube">Un mauvais <span className="blue">mental</span> peut-il carrément changer votre façon de jouer ? Et bien oui, dans mes coachings j'ai remarqué que un élève avait un gameplay totalement différent après une série victoires et une série de défaites.</p>
        <p className="paragraph">Après la série de défaites, souvent les joueurs ont une perte de confiance et se mettent à jouer ultra safe et sans tenter de plays, ce n'est clairement pas la bonne solution.</p>
        <p className="paragraph beforeYoutube">Dans ce coaching de niveau <span className="gold">Gold/Platine</span> on assiste à l'exemple parfait du joueur qui a perdu confiance en lui à cause des défaites !</p>
        <Youtube videoId="K2DZTVPWhYg" SameSite="" />
        <p className="paragraph afterYoutube">Souvent en tant que spectateur d'un contenu <span className="red">Youtube</span>/<span className="twitch">Twitch</span> vous faites des remarques de différence de niveaux entre des bons joueurs dans une partie , et bien oui parfois on va remarquer une énorme différence parce que un des joueurs va perdre son <span className="blue">mental</span> et donc environ 25% de ses capacités sur le jeu.</p>
        <p className="paragraph">Sauf que 25% de capacités en haut elo sur League of Legends ça va se ressentir dès le début de partie et donc mener à faire de très mauvais scores. Ce n'est pas que le joueur est forcément mauvais, si il est arrivé dans le haut elo il ne l'est probablement pas. C'est qu'il ne se donne plus à fond et lance une game même sans en avoir envie !</p>
        <p className="paragraph beforeYoutube">Dans cette vidéo vous allez assister à une partie de niveau Haut <span className="gold">Diamant/Master</span> qui n'a absolument aucun sens, oui on dirait une game de bas elo mais c'est juste que mes ennemis étaient dans un très mauvais <span className="blue">mental</span> et donc ils jouent très mal !</p>
        <Youtube videoId="mhxVmuJkNwU" SameSite="" />
      </div>
      <div className="backgroundParagraphe guide__rage">
        <h2 className="rage red"><i className="fas fa-fist-raised icons__raised" />La rage<i className="fas fa-fist-raised icons__raised" /></h2>
        <p className="paragraph">La <span className="red">rage</span>, la <span className="red">toxicité</span> et la mauvaise foi seront vos pires ennemis sur League of Legends. On pourrait se dire qu'on est tous différent et pourtant même le joueur le + calme du monde est capable de vriller dans League of Legends. Le matin on se lève tout va bien puis le soir après 4 défaites c'est la fin du monde. Au final votre pire ennemi c'est clairement vous-même, mais ne vous inquiétez pas Coach Slipix est la pour vous aider héhé !</p>
        <img className="guide__rage__content__rage" src={rage} alt="" />
        <p className="paragraph">Dans les stats de <span className="gold">Riot Games</span> un joueur dans une phase de <span className="red">rage</span>/<span className="red">tilt</span> perd environ 25% de games en + (aie ça fait mal). On pourrait croire que c'est une stratégie pour nous dire de se ressaisir mais malheureusement c'est bien le cas.</p>
        <p className="paragraph"> Avec toute l'expérience que j'ai acquise dans mes coachings je peux vous assurer à 300% (300 c'est stylé puis je suis d'origine spartiate AOUH) que c'est bien vrai !</p>
        <p className="paragraph">Dans un état de <span className="red">rage</span> ou de <span className="red">toxicité</span> vous n'allez jamais retenir le positif, être désagréable, perdre votre temps dans le tchat, être <span className="red">défaitiste</span> alors que la game n'a même pas commencée et j'en oublie !</p>
        <img className="guide__rage__content__textRage" src={textRage} alt="" />
        <p className="paragraph">Alors maintenant on va trouver une solution ! Voici mes 4 étapes pour éviter de trop <span className="red">rager</span> sur le jeu :</p>
        <ul>
          <li><i className="fas fa-plus-circle positif" />Faire des pauses entre les défaites, 15 minutes minimum oui c'est beaucoup mais c'est indispensable pour repartir à 0 mentalement !</li>
          <li><i className="fas fa-plus-circle positif" />Ne pas jouer si vous n'avez pas envie, Oui j'ai remarqué que beaucoup de mes élèves lancent des parties juste pour "monter en elo" et pas forcément pour jouer à son jeu préféré !</li>
          <li><i className="fas fa-plus-circle positif" />Mute le tchat dans la game, Oui parfois on a besoin de se concentrer sur nous même et si vous êtes sensible aux alliés qui écrivent des abominations, go bouton MUTE !</li>
          <li><i className="fas fa-plus-circle positif" />Faites de la DuoQ avec un joueur qui est positif, c'est toujours mieux d'être accompagné pour pouvoir se rassurer et se donner à fond !</li><br />
        </ul>
        <p className="paragraph">Et toi Slipix ça t'arrive de <span className="red">rager</span> ? Bien evidemment mes petits ! On <span className="red">rage</span> tous sur ce jeu c'est comme ça, mais je sais le prendre sur moi ça va être la différence avec quelqu'un qui n'aura pas le mental pour se remettre en question et donc il va moins monter en ranked (oui ça y joue beaucoup).</p>
        <p className="paragraph betweenYoutube">Je vous ai preparé une vidéo qui regroupe toutes les situations qui me font le + <span className="red">rager</span> dans League of Legends, il est temps de voir si on a des points en commun !</p>
        <Youtube className="guide__mental__youtube" videoId="EvWGqQWxeU8" SameSite="" />
        <p className="paragraph betweenYoutube">Il n'y a pas que les situations qui font <span className="red">rager</span>, certains champions vont déclencher une haine en nous quand on va jouer contre. Alors pour votre plaisir voici une vidéo qui regroupe tous les champions qui me font le + <span className="red">rager</span> dans League of Legends !</p>
        <p className="paragraph before">(On a tous nos Nemesis c'est ça qui est bon)</p>
        <Youtube className="guide__mental__youtube" videoId="msp79-TYqtk" SameSite="" />
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Pour résumer sur cette page qui parle du <span className="blue">Mental</span> et de la <span className="red">Rage</span> ne sous-estimez jamais votre bonne humeur sur le jeu. Alors prenez du plaisir, amusez vous avec vos ami(e)s et ne lancez pas de rankeds après 7 défaites.
        </p>
        <p className="paragraph">J'espère que ce guide vous aura aider , à bientôt sur la faille la <span className="red">#TEAMSLIP</span> !</p>
        <img className="guide__rage__content__troll" src={troll} alt="" />
        <p className="paragraph end">N'hésitez pas à consulter les autres guides de Coach Slipix</p>
      </div>
    </motion.div>
  );
};

export default Guide;
