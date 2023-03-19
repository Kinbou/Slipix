import { motion } from 'framer-motion'

import { useTitle } from '@/hooks/useTitle'
import { animationOne, transition } from '@/utils/animations/index'
import './home.scss'

// picture TENDANCES
import Boom from '@/assets/images/picturesYoutube/boom.jpg'
import Legolash from '@/assets/images/picturesYoutube/legolash.jpg'
import Morgrana from '@/assets/images/picturesYoutube/morgrana.jpg'
import Tahmquiche from '@/assets/images/picturesYoutube/tahmquiche.jpg'

// picture
import logoLol from '@/assets/images/logoLol.png'
import logoSlipix from '@/assets/images/logoSlipix.png'

// import
import SocialNetwork from '@components/SocialNetwork/index'
import Publicity from './Advertising/index'

const Home = () => {
  useTitle()
  return (
    <motion.div
      key="home"
      initial="out"
      animate="in"
      exit="exit"
      variants={animationOne}
      transition={transition}
    >
      <div className="home">
        <div className="home__introduction">
          <img className="home__introduction__logo" src={logoLol} alt="" />
          <h1>Bienvenue sur League of trollpicks</h1>
          <img className="home__introduction__logo home__introduction__logoSlipix " src={logoSlipix} alt="Slipix" />
        </div>
        <div className="home__introduction__content">
          <p>Le site parfait pour <strong className="home__introduction__content__important">apprendre</strong> et <strong className="home__introduction__content__important">maîtriser</strong> les trollpicks !</p><br />
          <p className="home__introduction__content__italic">"C’est en achetant n’importe quoi qu’on OneShot n’importe qui" <span className="home__introduction__content__important">-Slipix</span></p>
        </div>
        <div className="home__content">
          <h2>Découvrez les vidéos tendances trollpicks</h2>
        </div>
        <div className="home__news">
          <a href="https://www.youtube.com/watch?v=OVFiLjXNgTQ" target="_blanc"><img src={Boom} alt="Boom" /></a>
          <a href="https://www.youtube.com/watch?v=9_2jTP6FEVc" target="_blanc"><img src={Legolash} alt="Legolash" /></a>
          <a href="https://www.youtube.com/watch?v=U0RruXXnfs0" target="_blanc"><img src={Morgrana} alt="Morgrana" /></a>
          <a href="https://www.youtube.com/watch?v=EA7D1EHgp1s" target="_blanc"><img src={Tahmquiche} alt="Tahmquiche" /></a>
        </div>
        <h2>Mes réseaux sociaux et plateformes</h2>
        <SocialNetwork />
        <Publicity />
      </div>
    </motion.div>
  )
}

export default Home
