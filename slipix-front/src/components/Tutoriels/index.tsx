import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Loader from '@components/Loader/index'

import {
  animationOne, cardList, card
} from '@/utils/animations/index'
import './tutoriels.scss'

// images
import toplane from '@/assets/images/logoLanes/toplane.png'
import jungle from '@/assets/images/logoLanes/jungle.png'
import mid from '@/assets/images/logoLanes/mid.png'
import adc from '@/assets/images/logoLanes/adc.png'
import support from '@/assets/images/logoLanes/support.png'

const Tutoriels = () => (
  <motion.div
    className="tutoriel"
    key="tutorielChampion"
    initial="in"
    animate="end"
    exit="exit"
    variants={animationOne}
  >
    <h1 className="globalTitle-page">Tutoriels champions</h1>
    <p className="tutoriels__intro">Vous trouverez ici mes tutoriels sur vos champions favoris</p>
    <div className="tutoriels__cards">
      <motion.div
        className="tutoriels__cards__line tutoriels__cards__line__one"
        variants={cardList}
        initial="in"
        animate="out"
        exit="end"
      >
        <Link to="/tutoriels-champions/toplane">
          <motion.div
            className="tutoriels__cards__card tutoriels__cards__cardActif"
            variants={card}
            key="tutorielToplane"
          >
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Toplane</h3>
            <img className="tutoriels__picture" src={toplane} alt="" />
          </motion.div>
        </Link>
        <Link to="/tutoriels-champions/jungle">
          <motion.div
            className="tutoriels__cards__card tutoriels__cards__cardActif"
            variants={card}
            key="tutorielJungle"
          >
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Jungle</h3>
            <img className="tutoriels__picture" src={jungle} alt="" />
          </motion.div>
        </Link>
        <Link to="/tutoriels-champions/midlane">
          <motion.div
            className="tutoriels__cards__card tutoriels__cards__cardActif"
            variants={card}
            key="tutorielMidlane"
          >
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Midlane</h3>
            <img className="tutoriels__picture" src={mid} alt="" />
          </motion.div>
        </Link>
        <Link to="/tutoriels-champions/adc">
          <motion.div
            className="tutoriels__cards__card tutoriels__cards__cardActif"
            variants={card}
            key="tutorielAdc"
          >
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels ad carry</h3>
            <img className="tutoriels__picture" src={adc} alt="" />
          </motion.div>
        </Link>
        <Link to="/tutoriels-champions/support">
          <motion.div
            className="tutoriels__cards__card tutoriels__cards__cardActif"
            variants={card}
            key="tutorielSupport"
          >
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Support</h3>
            <img className="tutoriels__picture" src={support} alt="" />
          </motion.div>
        </Link>
      </motion.div>
      {/* <div className="betweenParagraph" /> */}
      {/* <div className="tutoriels__cards__line tutoriels__cards__line__two">
        <a>
          <div className="tutoriels__cards__card tutoriels__cards__cardSoon">
            <h3 className="tutoriels__cards__card__title news__cards__first__title">Tutoriels Support</h3>
            <img className="tutoriels__picture" src={support} alt="" />
            <p className="tutoriels__cards__cardSoon__content">Bientôt disponible</p>
          </div>
        </a>
      </div> */}
    </div>
  </motion.div>
)

export default Tutoriels
