import React from 'react';
// import YouTube from 'react-youtube';
import Youtube from '../../Youtube';
import sort1 from '../../../../assets/images/sortZac/zac_sort_1.png';
import sort2 from '../../../../assets/images/sortZac/zac_sort_2.png';
import sort3 from '../../../../assets/images/sortZac/zac_sort_3.png';
import sort4 from '../../../../assets/images/sortZac/zac_sort_4.png';
import sort5 from '../../../../assets/images/sortZac/zac_sort_5.png';
import logoLol from '../../../../assets/images/logoLol.png';
import zacHead from '../../../../assets/images/sortZac/zac-head.png';

import './zac.scss';

const Zac = () => (
  <div className="zac">
    <div className="zac__title">
      <img src={logoLol} alt="" />
      <h1 className="">Tutoriel Zac</h1>
      <img className="zac__title__zac" src={zacHead} alt="" />
    </div>
    <h3>Comment bien jouer Zac ? C'est ici que ça se passe !</h3>
    <p className="zac__definition">Zac est un jungler tank très polyvalent qui une fois totalement maitrisé, peut être redoutable dans vos games !</p>
    <div className="zac__content">
      <div className="zac__content__history">
        <h4>L'histoire du champion</h4>
        <p className="zac__content__history__content">"Zac est le produit d'une fuite toxique qui, dégoulinant par une veine techno-chimique, se transforma en bassin dans une profonde caverne du Puisard de Zaun.<br /> En dépit de ses humbles origines, Zac a évolué pour passer du stade de dépôt primordial à celui d'être pensant qui se faufile dans les canalisations de la ville.<br /> De temps en temps, il émerge pour aider ceux qui ne s'en sortent pas seuls ou pour reconstruire les infrastructures en mauvais état de Zaun."</p>
      </div>
      <div className="zac__content__skill">
        <h4>Les compétences</h4>
        <div className="zac__content__skill__content">
          <div className="zac__content__skill__content__left">
            <img src={sort1} alt="" />
          </div>
          <div className="zac__content__skill__content__right">
            <p className="zac__content__skill__content__right__title">Passif : <span>division cellulaire</span></p><br />
            <p>À chaque fois que Zac frappe un ennemi avec une compétence, il perd un bout de lui-même qu'il peut absorber pour récupérer des PV.<br /> S'il subit des dégâts mortels, Zac se divise en 4 blobs qui tentent de se recombiner.<br /> S'il reste des blobs, Zac revient à la vie avec un nombre de PV qui dépend des PV des blobs survivants.<br /> Chaque blob a un pourcentage des PV max, de l'armure et de la résistance magique de Zac.<br /> Cette compétence a un délai de récupération de 5 minutes.
            </p>
          </div>
        </div>
        <div className="zac__content__skill__content">
          <div className="zac__content__skill__content__left">
            <img src={sort2} alt="" />
          </div>
          <div className="zac__content__skill__content__right">
            <p className="zac__content__skill__content__right__title">A : <span>étirements</span></p><br />
            <p>Zac étend un bras et attrape un ennemi. S'il attaque ensuite un ennemi différent, il envoie les deux cibles l'une contre l'autre
            </p>
          </div>
        </div>
        <div className="zac__content__skill__content">
          <div className="zac__content__skill__content__left">
            <img src={sort3} alt="" />
          </div>
          <div className="zac__content__skill__content__right">
            <p className="zac__content__skill__content__right__title">Z : <span>matières instables</span></p><br />
            <p>Zac explose en direction des ennemis proches, leur infligeant des dégâts magiques équivalents à un pourcentage de leurs PV max.
            </p>
          </div>
        </div>
        <div className="zac__content__skill__content">
          <div className="zac__content__skill__content__left">
            <img src={sort4} alt="" />
          </div>
          <div className="zac__content__skill__content__right">
            <p className="zac__content__skill__content__right__title">E : <span>Fronde</span></p><br />
            <p>Zac fixe ses bras au sol et prend de l'élan pour se projeter vers l'avant.
            </p>
          </div>
        </div>
        <div className="zac__content__skill__content">
          <div className="zac__content__skill__content__left">
            <img src={sort5} alt="" />
          </div>
          <div className="zac__content__skill__content__right">
            <p className="zac__content__skill__content__right__title">R : <span>Boing</span></p><br />
            <p>Zac rebondit quatre fois, projetant en l'air les ennemis touchés et les ralentissant.
            </p>
          </div>
        </div>
      </div>
      <div className="zac__content__asset">
        <div className="zac__content__asset__list">
          <div className="zac__content__asset__list__left">
            <h4 className="zac__content__asset__list__left__force">Forces</h4>
            <div className="zac__content__asset__list__left__content">
              <p>-Très fort pour gank</p>
              <p>-beaucoup de cc (contrôle de foule)</p>
              <p>- Grosse engage de teamfights</p>
              <p>- Champion jamais inutile, même en retard</p>
              <p>- Bon dégâts juste avec un Liandry</p>
            </div>
          </div>
          <div className="zac__content__asset__list__right">
            <h4>Faiblesses</h4>
            <div className="zac__content__asset__list__right__content">
              <p>- Trop long pour les objectifs (drake, Herald, Nashor)</p>
              <p>- Faible duelliste contre d'autres junglers</p>
              <p>- Pas bon en afk farming</p>
              <p>- Besoin d'une bonne vision pour les engages</p>
            </div>
          </div>
        </div>

      </div>
      <div className="zac__content__carry">
        <h4>Comment Carry avec Zac ?</h4>
        <div className="zac__content__carry__content">
          <div className="zac__content__carry__content__left">
            <Youtube videoId="8aV7hl6nOjA" />
          </div>
          <div className="zac__content__carry__content__right">
            <h6>Le Chewing-Gum de la jungle</h6>
            <div className="zac__content__carry__content__right__content">
              <p>voici un <span>gameplay explicatif</span> très complet pour savoir comment jouer zac directement sur le terrain !</p>
              <p>Ce gameplay est realisé par <span>PatateVolante</span>, un joueur haut elo de Zac</p><br />
              <p>Si vous avez des questions n'hésitez pas à les poser directement en commentaires sur la <span>vidéo YouTube</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Zac;
