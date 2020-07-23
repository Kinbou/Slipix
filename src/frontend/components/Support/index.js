import React from 'react';
import Slideshow from 'src/frontend/components/Slideshow';
import utip from '../../../assets/images/Utip.png';
import twitchPrime from '../../../assets/images/twitchPrime.png';

import facebook from '../../../assets/images/socialNetwork/Facebook.png';
import twitter from '../../../assets/images/socialNetwork/twitter.png';
import instagram from '../../../assets/images/socialNetwork/Instagram.png';
import './support.scss';

const Support = () => (
  <div className="support">
    <h1 className="globalTitle-page">Me Soutenir</h1>
    <Slideshow />
    <div className="support__content">
      <h4>Comment soutenir mon site League of Legends ?</h4>
      <p>Si vous avez cliqué ici c'est que vous voulez peut être soutenir mon site
        et je vous en remercie énormément.
      </p><br />
      <p>Il existe plusieurs façons de le faire, que ça soit gratuit ou payant.</p>
      <div className="support__content__utip">
        <h5>me soutenir gratuitement avec <span className="gold">uTip</span></h5>
        <img src={utip} alt="" />
      </div>
      <div>
        <p className="support__content__utip__content">Le principe est simple : Vous pouvez regarder des publicités d'une durée de 20 secondes environ et le site <span className="gold">Utip</span> me reversera de l'argent.<br />  ça ne vous coûtera rien, seulement un peu de votre temps alors merci si vous prenez la peine de le faire. N'oubliez pas de désactiver votre <span className="gold">ADBLOCK</span>. <a className="link" type="a" href="https://utip.io/slipix" target="_blanc">Cliquez ici</a></p>
      </div>
      <div className="support__content__twitch">
        <h5>Me soutenir gratuitement avec  <img src={twitchPrime} alt="" /> </h5>
        <p>Vous pouvez vous abonner à ma chaine Twitch <span>"Slipixxx"</span> Gratuitement si vous possédez un compte <span>Amazon Premium</span>.<br />Vous aurez les même avantages que les autres abonnés : Pas de publicités pendant les lives, un badge à côté de votre pseudo, des émoticones super stylées, un tchat réservé pour les abonnés ainsi que des avantages sur le discord <span>#TEAMSLIP</span>.<a className="link" type="a" href="https://www.twitch.tv/products/slipixxx" target="_blanc">Cliquez ici</a></p>
      </div>
      <div className="support__content__don">
        <h5>Me soutenir avec un don</h5>
        <p>Vous pouvez me soutenir directement avec un don , merci énormément pour
          votre soutien !
        </p>
        <p>La totalité des dons sera utilisée pour améliorer ce site, vous pouvez utiliser <span>Paypal</span>, <span>Skrill</span> (Paysafe Card) ou bien une <span>carte bancaire</span>. <a className="link" type="a" href="https://streamlabs.com/slipixxx/tip" target="_blanc">Cliquez ici</a></p>
      </div>
      <div className="support__content__social">
        <h5>Me suivre c'est me soutenir</h5>
        <p>Vous pouvez me suivre sur mes réseaux sociaux pour ne rien rater de mon contenu !</p>
        <p>J'utilise actuellement : <span>Facebook</span>, <span>Twitter</span>,
          <span>Instagram</span> alors n'hésitez pas à me rejoindre j'organise des
          concours pour gagner des skins sur League of Legends et d'autres cadeaux
        </p>
        <div className="support__content__social__picture">
          <a><img className="support__content__social__picture__card" src={facebook} alt="" /></a>
          <a><img className="support__content__social__picture__card" src={twitter} alt="" /></a>
          <a><img className="support__content__social__picture__card" src={instagram} alt="" /></a>

        </div>
      </div>
    </div>
  </div>
);

export default Support;
