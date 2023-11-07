/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'

import { useTitle } from '@/hooks/useTitle'
import { animationOne, transition } from '@/utils/animations/index'

import Button from '@components/Buttons/Button/Button'

import tds from '@/assets/images/presentation/tds.png'

const Contact = () => {
  useTitle('Me contacter')
  return (
    <motion.div
      className="color-white flex flex-col items-center leading-relaxed min-h-fullscreen"
      key="contact"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1 className="h1 mb-1rem">Me Contacter</h1>
      <div className="bg-contact w-3/5 py-12 px-20 rounded-3xl text-start <md:px-5 <md:w-95% <xl:w-80% mb-8">
        <div>
          <p className="pb-2 h3 font-600">
            Pour me contacter c'est simple il y a 2 options :
          </p>
          <ul>
            <li>
              M'envoyer un Mail à cette adresse :{' '}
              <span className="gold">deiizfamilyhd@gmail.com </span>
              (Seulement pour les propositions professionnelles style
              partenariat, sponsor etc...)
            </li>
            <li>
              M'envoyer directement un message privé sur{' '}
              <span className="twitch">Discord</span> en rejoignant le serveur{' '}
              <span className="red">#TEAMSLIP</span>{' '}
              <Button>
                <a type="a" href="https://discord.gg/fsTYTg5" target="_blanc">
                  Cliquez ici
                </a>
              </Button>
            </li>
            <li>
              M'envoyer directement un message privé sur mes réseaux sociaux{' '}
              <span className="blue">TWITTER</span>{' '}
              <Button>
                <a
                  type="a"
                  href="https://twitter.com/SlipixLoL"
                  target="_blanc"
                >
                  Cliquez ici
                </a>
              </Button>
            </li>
          </ul>
          <h4 className="text-center red my-8 h3 font-600 mt-2rem">
            <i className="fas fa-exclamation-triangle icons__exclamation" />{' '}
            NOTES IMPORTANTES{' '}
            <i className="fas fa-exclamation-triangle icons__exclamation" />
          </h4>
          <p>
            JE NE FAIS PLUS DE COACHING SUR LEAGUE OF LEGENDS, JE ME CONSACRE A
            MON CONTENU & LA TEAM DU SUD
            <img
              src={tds}
              alt=""
              className="rounded-3xl absolute bottom1.3 ml-2 w-2.2rem"
            />
          </p>
          <p>
            Il est donc inutile de m'envoyer un message privé sur discord à ce
            sujet.
          </p>
          <p>
            Pareil pour les "conseils", IL Y A MES{' '}
            <span className="orange">vidéos</span> & MES{' '}
            <span className="orange">GUIDES</span> POUR VOUS AIDER. C'EST PAS
            QUE JE NE VEUX PAS, C'EST JUSTE UN MANQUE DE TEMPS POUR VOUS
            REPONDRE PAR ECRIT
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
