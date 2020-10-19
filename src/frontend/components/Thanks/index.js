import React from 'react';
import { useTitle } from 'src/hooks/useTitle';
import './thanks.scss';

// images icons
import iconSpyritRay from 'src/assets/images/thanks/thank_1.png';
import iconTadaje from 'src/assets/images/thanks/thank_2.png';
import iconHavven from 'src/assets/images/thanks/thank_3.png';
import iconZorobama from 'src/assets/images/thanks/thank_4.png';
import iconskyzixFR from 'src/assets/images/thanks/thank_5.png';
import iconMerguez from 'src/assets/images/thanks/thank_6.png';
import iconMuii from 'src/assets/images/thanks/thank_7.png';
import iconSoularyön from 'src/assets/images/thanks/thank_8.png';
import iconDid17vyt from 'src/assets/images/thanks/thank_9.png';
import iconVnnb from 'src/assets/images/thanks/thank_10.png';
import iconZyrul from 'src/assets/images/thanks/thank_11.png';
import iconChamz from 'src/assets/images/thanks/thank_12.png';
import iconToutankill from 'src/assets/images/thanks/thank_13.png';
import iconShineyman32 from 'src/assets/images/thanks/thank_14.png';
import iconRoxxSstar from 'src/assets/images/thanks/thank_15.png';
import iconGummiDrops from 'src/assets/images/thanks/thank_16.png';
import iconExerebro from 'src/assets/images/thanks/thank_17.png';

// pictures
import pictureMerguez from 'src/assets/images/thanks/pictureMerguez.jpg';
import pictureMuii from 'src/assets/images/thanks/pictureMuii.jpg';
import pictureSpyritRay from 'src/assets/images/thanks/pictureSpyritRay.png';
import thankTroll from 'src/assets/images/thanks/thankTroll.jpg';

const Thanks = () => {
  useTitle('Remerciements');
  return (
    <div className="thanks">
      <h1 className="globalTitle-page">Remerciements</h1>
      <div className="thanks__backgroundParagraphe">

        <p className="paragraph">Yo le Slip, on a décidé de te faire une petite surprise !
        </p>
        <p className="paragraph"> voit par toi-même à quel point tu as changé l'évolution de beaucoup de joueur sur la faille de l'invocateur ;)
        </p>
        <p className="paragraph"> Alors on a qu'une chose à te dire ... reste comme tu es, et continue à faire ce que tu aimes !
        </p>
      </div>
      <div className="thanks__cards">
        <div className="thanks__cards__card multicolor">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconSpyritRay} alt="" />
              <p className="thanks__cards__card__box__author__name">SpyritRay</p>
            </div>
            <div className="line" />
            <img className="thanks__pictures" src={pictureSpyritRay} alt="" />
            <p className="thanks__cards__card__box__content">"Pour notre patron préféré, j'ai commencé le jeux en regardant ses vidéos, et depuis le confinement je try hard pour finalement, en grande partie grâce à lui, atteindre le plat il y a peu avec 75-80% de wr sur Talon :D "</p>
          </div>
        </div>
        <div className="thanks__cards__card multicolor">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconSoularyön} alt="" />
              <p className="thanks__cards__card__box__author__name">Soularyön</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Through the Fire and Flames</p>
            <p className="thanks__cards__card__box__content">Tu arrives dans la faille</p>
            <p className="thanks__cards__card__box__content">Tu nous dirige, nous défend de flame</p>
            <p className="thanks__cards__card__box__content">A travers tes poulets, tu vois ton travail</p>
            <br />
            <p className="thanks__cards__card__box__content">Grâce à toi on sera tous des pros</p>
            <p className="thanks__cards__card__box__content">Avec des Zed Forêts ou des Thresh FLAK</p>
            <p className="thanks__cards__card__box__content">Nos adversaires n’auront plus les motss</p>
            <p className="thanks__cards__card__box__content">On les laissera dans la rivers, dans une flaque</p>
            <br />
            <p className="thanks__cards__card__box__content">P’tite tartiflette dans l’ventre</p>
            <p className="thanks__cards__card__box__content">Chef Dumas en fond d’stream</p>
            <p className="thanks__cards__card__box__content">Tu laisses la pression redescendre</p>
            <p className="thanks__cards__card__box__content">Nous sommes tous friand de ta doctrine</p>
            <br />
            <p className="thanks__cards__card__box__content">Tu bats tes ennemis tel un batteur</p>
            <p className="thanks__cards__card__box__content">Mais qu’on ne dise pas que tu sois sans coeur</p>
            <p className="thanks__cards__card__box__content">Car tu nous sors de notre mélancolie</p>
            <p className="thanks__cards__card__box__content">Tu m’as sauvé de mon corps sans vie</p>
            <br />
            <p className="thanks__cards__card__box__content">C’est pour cela que je te remercie</p>
            <p className="thanks__cards__card__box__content">A travers ce poème tout pourrie</p>
            <p className="thanks__cards__card__box__content">J’espère que cela t’as faire rire</p>
            <p className="thanks__cards__card__box__content">C’est tout ce que je demande, c’est tout ce que j’avais à dire…"</p>
            <br />
            <p className="thanks__cards__card__box__content">Merci</p>
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconTadaje} alt="" />
              <p className="thanks__cards__card__box__author__name">Tadaje</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"MERCI SLIPIX
              Je suis actuellement gold 3-4 après un an de jeu, main right click dans l'âme, j'ai spam nocturne top/mid et opéré selon la voie des grosse paire de couille à push sans aucune vision :)

              Plus sérieusement tu m'as énormément appris sur le jeux et fais passer de bons moment grâce à tes videos pedagogiques et pleine de testostérones, ( remercie aussi Bob et Arcadia et toute la bromance de ma part ) tu mérite ta communauté de tryharder, j'espère le meilleur pour toi,
              Tu es mon barbu préféré devant alderiate à présent"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card greenBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconHavven} alt="" />
              <p className="thanks__cards__card__box__author__name">Havven</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Hey Slipix, je souhaitais te laisser un message pour te remercier, tu as apporté tellement à la commu fr et tu m'as permis de passer de iron 1 à silver 3 et en plein rush gold avec 60~65% de winrate, tu m'as appris comment gagner mais aussi comment m'amuser sur le jeu avec tes trollpicks ^^ je te souhaite en tout cas une excellente continuation pour tous tes projets futur et un grand merci pour ce site qui même si encore en développement est déja trés complet et est vraiment utile, et aussi GG à kinbou pour le site !"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconZorobama} alt="" />
              <p className="thanks__cards__card__box__author__name">Zorobama</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Je souhaite te remercier pour toute la bonne humeur que tu mets dans tes streams, les bonnes choses que tu apportes à la communauté LoL et au jeu en proposant du contenu varié. Tu es très proche de ta communauté et la remercie à chaque live et c'est ce qui est plaisant avec toi. Ne change rien!"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card purpleBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconskyzixFR} alt="" />
              <p className="thanks__cards__card__box__author__name">skyzixFR</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"salut slipix. Merci beaucoup à toi pour ces streams de qualité que tu nous propose régulièrement. Tu me régale toute les fois ou je viens sur les lives. J'avais participé à l'évènement "la guerre des slips" et tu m'y avais donné pas mal de conseil qui m'ont bien servi par la suite (j'étais la yuumi). Je suis monté gold grâce à toi (et aussi la technique paire de couille toi même tu sais ;).
              un grand merci à toi et j'espère te voir encore longtemps sur twitch. Ta commu est belle et est le reflet de son streamer. Bonne journée/soirée à toi."
            </p>
          </div>
        </div>
        <div className="thanks__cards__card multicolor">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconMerguez} alt="" />
              <p className="thanks__cards__card__box__author__name">Merguez</p>
            </div>
            <div className="line" />
            <img className="thanks__pictures thanks__pictures__merguez" src={pictureMerguez} alt="" />
            <p className="thanks__cards__card__box__content">"xin zhao le dog qui m'a donné le silver merci boss slip"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card multicolor">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconMuii} alt="" />
              <p className="thanks__cards__card__box__author__name">Muii</p>
            </div>
            <div className="line" />
            <img className="thanks__pictures thanks__pictures__muii" src={pictureMuii} alt="" />
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconDid17vyt} alt="" />
              <p className="thanks__cards__card__box__author__name">Did17vyt</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Oooh le Slip ! Si je paye ma tournée tous les soirs (ou presque) c'est d'abord parce que tes lives et tes videos me font triper, ensuite parce que c'est une récompense pour les progrès que tu m'as permis de faire (from Iron  3 to Silver 1 !) et enfin pour t'encourager dans ce que tu réalises tout en restant le même.
              Change pas sale grec, t'es le boss !
              Cœur et Tartiflette,"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card purpleBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconVnnb} alt="" />
              <p className="thanks__cards__card__box__author__name">Vnnb</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Juste un merci (j'ai pas d'idée sinon) et aussi, merci à toi de nous donner cette opportunité de remercier le slip ^^ "
            </p>
          </div>
        </div>
        <div className="thanks__cards__card greenBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconZyrul} alt="" />
              <p className="thanks__cards__card__box__author__name">Zyrul</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Je tiens a te remercier énormément Slipix, j'étais hardstuck silver depuis quelques années et depuis que je regarde tes vidéos net tes tuto' je monte en élo beaucoup plus facilement ! Tu es pour moi le meilleur streamer, on passe toujours un bon moment avec toi =) , Je te fais pleins de bisous et j'espère pouvoir continuer à te regarder encore pendant plusieurs années ! =p"</p>
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconChamz} alt="" />
              <p className="thanks__cards__card__box__author__name">Chamz</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Tout d'abord merci Slipix. Je suis un grand fan de pick atypique et je ne joue jamais méta. Je commençais à manquer d'idée et puis je t'ai découvert... Et on peut dire que tu as l'esprit plus perverti que le mien =D. En plus j'ai découvert que tu faisais du coaching alors à ce moment-là tu es devenu mon Youtubeur/Streamer préféré. J'avais peur de faire de la ranked mais avec Sett supp, Thresh flak et Graves déluge, j'ai réussi à monter bronze 1 (bon c'est pas fou mais il faudrait un miracle pour que je sois gold...)
              Encore un énorme merci, bonne chance pour ton site et j'espère te voir aux LCS"
            </p>
          </div>
        </div>
        <div className="thanks__cards__card purpleBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconToutankill} alt="" />
              <p className="thanks__cards__card__box__author__name">Toutankill</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Merci Slipix pour ton contenu, même si je ne suis pas un grand joueur de Lol, j'ai toujours trouvé tes conseils pertinents et bienvenus. Merci également pour tes vidéos fun, je passe toujours un bon moment devant, puisses-tu continuer à en faire aussi longtemps qu'il te plaira ! Force à toi et bravo pour ton site "</p>
          </div>
        </div>

        <div className="thanks__cards__card greenBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconShineyman32} alt="" />
              <p className="thanks__cards__card__box__author__name">Shineyman32</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Merci pour ton trollpick kaïsa laser il est vraiment fun et on peut vraiment carry des games de folie avec =) "</p>
          </div>
        </div>
        <div className="thanks__cards__card purpleBlue">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconRoxxSstar} alt="" />
              <p className="thanks__cards__card__box__author__name">Roxx-Sstar</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Je remercie Slip pour sa bonne humeur, il m'a permis de monter en elo ex bronze3 vers Silver 2 en ce moment, super ses lives et guides. Ils sont très instructifs, MERCI MERCI SLIPPPP !!!"</p>
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconGummiDrops} alt="" />
              <p className="thanks__cards__card__box__author__name">GummiDrops</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Bonjour à toi Slipix ! Je sais que ce message sera court, mais je voulais te remercier du fond du coeur pour tes conseils, grâce à toi j'ai pu sortir du gold :D. Je te suis aussi depuis tes duo avec Yoonns Voli / Trundle :D je t'adore reste comme tu es ! =)"</p>
          </div>
        </div>
        <div className="thanks__cards__card redYellow">
          <div className="glass" />
          <div className="thanks__cards__card__box">
            <div className="thanks__cards__card__box__author">
              <img className="thanks__icon" src={iconExerebro} alt="" />
              <p className="thanks__cards__card__box__author__name">Yann le Thomas</p>
            </div>
            <div className="line" />
            <p className="thanks__cards__card__box__content">"Slipix c'est un synonyme de bonne humeur et de bons moments. Même sur un jeu aussi rageant que LoL il donne envie d'y retourner et de tenter des choses. Perso, je joue moins en ce moment, mais le regarder c'est une façon d'apprécier le jeu encore plus et de voir ce qu'on peut faire de mieux dans cette communauté :)"</p>
          </div>
        </div>
      </div>
      <div className="thanks__backgroundParagraphe">
        <p className="paragraph gold">Pour ceux et celles qui désirent faire passer un message pour Slipix sur le site n'hésitez pas à me mp directement sur  sur le serveur discord de la #teamSlip que vous pouvez retrouver directement sur la page d'accueil du site (mon pseudo: Kinbou)</p>
        <img className="thanks__pictures thanks__pictures__troll" src={thankTroll} alt="" />
      </div>
    </div>
  );
};

export default Thanks;
