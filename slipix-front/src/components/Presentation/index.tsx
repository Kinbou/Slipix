import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './presentation.scss'

import { useTitle } from '@/hooks/useTitle'
import { animationOne, transition } from '@/utils/animations/index'
import SocialNetwork from '@components/SocialNetwork/index'
// images
import tds from '@/assets/images/teamDuSud.png'
import coachingSlipix from '@/assets/images/presentation/coachingSlipix.jpg'

const Presentation = () => {
  useTitle('Présentation')
  return (
    <motion.div
      className="presentation"
      initial="out"
      animate="in"
      exit="out"
      key="presentation"
      variants={animationOne}
      transition={transition}
    >
      <h1 className="globalTitle-page">Présentation</h1>
      <div className="presentation__background">
        <h2>Salut c'est <span className="red">Slipix</span>  Bienvenue sur mon site Officiel !</h2>
        <img className="presentation__coaching" src={coachingSlipix} alt="" />
        <p>Joueur de League of Legends depuis 2014, Coach <span className="red">Mental</span>/<span className="red">Stratégique</span> depuis 2018.</p>
        <p>YouTuber/Streamer sur <span className="purple">Twitch</span> par passion depuis 2016, j'ai toujours aimé
          le contact avec ma communauté.
        </p>
        <br />
        <p>Je me suis trouvé une passion pour le Coaching quand j'ai appris 2-3
          trucs à des amis sur League of Legends, et depuis je ne m'en lasse pas.
        </p><br />
        <p>Je suis actuellement à 2000 heures d'experience de coaching en <span className="orange">SoloQ</span>/<span className="orange">DuoQ</span> et 1000 heures en Team complète.
        </p>
        <p>Je ne prend plus de réservations coaching <span className="orange">SoloQ</span>/<span className="orange">DuoQ</span> depuis juin 2020 afin de me concentrer exclusivement sur le coaching de team</p><br />
        <p className="presentation__content__refuseResist">Je suis actuellement Membre du Collectif indépendant<span className="red margin">TDS</span>, qui à pour objectif d'avoir une Team à notre nom en <span className="red margin">LFL</span>.<img src={tds} alt="" className="presentation__image__tds" /></p>
        <br />
        <p className="presentation__but">Le but de ce site est simple :<br />
          - Vous aider avec des <span className="green">guides</span> sur la <span className="presentation__game">macro-game</span> et la <span className="presentation__game">micro-gestion</span><br />
          - Vous aider avec des <span className="green">tutoriels</span> complets sur vos champions favoris<br />
          - Theory crafter dans l'âme je vous proposerai du contenu fun sur des
          <span className="blue"> trollpicks</span> que j'ai travaillé.<br />
          - Vous partager mon <span className="green">savoir</span> sur League of Legends ainsi que mon contenu <span className="red">Youtube</span><br /><br />
          Vous trouverez des liens direct avec mes vidéos <span className="red">Youtube</span> pour
          faciliter votre navigation et votre progression.
        </p><br />
        <p>N'hésitez pas à rejoindre le <a href="https://discord.com/invite/fsTYTg5" className="presentation__discord" target="_blanc">discord</a> de la <span className="red">#TEAMSLIP</span> et me suivre sur les réseaux sociaux ainsi que les plateformes <span className="presentation__youtube">Youtube</span> et <span className="presentation__twitch">Twitch</span>.</p>
        {/* @ts-ignore */}
        <SocialNetwork className="presentation__socialNetwork" />
        <p>tout le contenu de ce site est bien évidemment gratuit, si vous désirez soutenir son avancée de plusieurs manières n'hésitez pas à cliquer ici :  <Link to="/me-soutenir" className="link">Me soutenir</Link>
        </p> <br />
        <p>Merci pour votre lecture et j'espère que ce site vous aidera grandement,
          <span className="red"> Slipix.</span>
        </p>
      </div>
    </motion.div>
  )
}

export default Presentation
