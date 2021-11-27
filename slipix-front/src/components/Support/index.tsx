import { useTitle } from '@/hooks/useTitle'
import { motion } from 'framer-motion'

import { animationOne, transition } from '@/utils/animations/index'

import './support.scss'

import Slideshow from '@components/Slideshow/index'
// images
import teeShirt from '@/assets/images/support/teeShirt.png'
import cupYasuo from '@/assets/images/support/cupYasuo.png'
import cupTroll from '@/assets/images/support/cupTroll.png'
import tiktok from '@/assets/images/socialNetwork/tiktok.png'
import twitter from '@/assets/images/socialNetwork/twitter.png'
import instagram from '@/assets/images/socialNetwork/Instagram.png'
import twitchPrime from '@/assets/images/twitchPrime.png'

const Support = () => {
  useTitle('Me soutenir')
  return (
    <motion.div
      className="support"
      key="support"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1 className="globalTitle-page">Me Soutenir</h1>
      <Slideshow />
      <div className="support__content">
        <h4>Comment soutenir mon site League of Legends ?</h4>
        <p>Si vous avez cliqué ici c'est que vous voulez peut être soutenir mon site
          et je vous en remercie énormément.
        </p><br />
        <p>Il existe plusieurs façons de le faire, que ça soit gratuit ou payant.</p>
        <div className="betweenParagraph" />
        <div className="support__content__twitch support__paragraph">
          <h5>Me soutenir gratuitement avec  <img src={twitchPrime} alt="" /> </h5>
          <p>Vous pouvez vous abonner à ma chaine Twitch <span>"Slipixxx"</span> Gratuitement si vous possédez un compte <span className="blue">Amazon Premium</span>.<br />Vous aurez les même avantages que les autres abonnés : Pas de publicités pendant les lives, un badge à côté de votre pseudo, des émoticones super stylées, un tchat réservé pour les abonnés ainsi que des avantages sur le discord <span className="red">#TEAMSLIP</span>.<a className="link" type="a" href="https://www.twitch.tv/products/slipixxx" target="_blanc">Cliquez ici</a></p>
        </div>
        <div className="betweenParagraph" />
        <div className="support__content__don support__paragraph">
          <h5>Me soutenir avec un don<i className="fas fa-coins icons__coins" /></h5>
          <p>Vous pouvez me soutenir directement avec un don , merci énormément pour
            votre soutien !
          </p>
          <p>La totalité des dons sera utilisée pour améliorer ce site, vous pouvez utiliser <span className="blue">Paypal</span>, <span className="blue">Skrill</span> (Paysafe Card) ou bien une <span className="blue">carte bancaire</span>. <a className="link" type="a" href="https://streamlabs.com/slipixxx/tip" target="_blanc">Cliquez ici</a></p>
        </div>
        <div className="betweenParagraph" />
        <div className="support__content__social support__paragraph">
          <h5>Me suivre c'est me soutenir <i className="fas fa-headset icons__headset" /></h5>
          <p>Vous pouvez me suivre sur mes réseaux sociaux pour ne rien rater de mon contenu !</p>
          <p>J'utilise actuellement : <span className="facebook">Facebook</span>, <span className="blue">Twitter</span>,
            <span className="instagram"> Instagram</span> alors n'hésitez pas à me rejoindre. J'organise des
            concours pour gagner des skins sur <span className="green">League of Legends</span> et d'autres cadeaux
          </p>
          <div className="support__content__social__picture">
            <a href="https://www.tiktok.com/@slipixtv" className="logo logo__tiktok" target="_blanc"><img className="support__content__social__picture__card" src={tiktok} alt="" /></a>
            <a href="https://twitter.com/SlipixLoL" target="_blanc"><img className="support__content__social__picture__card logo" src={twitter} alt="" /></a>
            <a href="https://www.instagram.com/slipixlol/?hl=fr" target="_blanc"><img className="support__content__social__picture__card logo" src={instagram} alt="" /></a>
          </div>
        </div>
        <div className="betweenParagraph" />
        <div className="support__content__shop support__paragraph">
          <h5>Me soutenir avec un achat <i className="fas fa-shopping-cart icons__cart" /></h5>
          <p>Vous pouvez soutenir le site en achetant un des produits de la boutique <span className="red">#TEAMSLIP</span><a className="link" href="https://teespring.com/stores/boutique-teamslip" target="_blanc">Cliquez ici</a></p>
          <p>Vous y retrouverez des produits en cohérence avec League of Legends et
            autres délires de mes lives !
          </p>
          <div className="support__content__shop__pictures">
            <a href="https://teespring.com/stores/boutique-teamslip" target="_blanc"><img className="support__content__shop__pictures__picture effectImage" src={teeShirt} alt="" /></a>
            <a href="https://teespring.com/stores/boutique-teamslip" target="_blanc"><img className="support__content__shop__pictures__picture effectImage" src={cupYasuo} alt="" /></a>
            <a href="https://teespring.com/stores/boutique-teamslip" target="_blanc"><img className="support__content__shop__pictures__picture effectImage" src={cupTroll} alt="" /></a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Support
