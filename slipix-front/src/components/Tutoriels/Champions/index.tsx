import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { apiBaseUrl } from '@middlewares/index'
import Loader from '@components/Loader/index'
import {
  animationOne, cardList, card
} from '@/utils/animations/index'
import './champions.scss'

const Champions = ({
  stateNameLane,
  laneActif,
  laneSoon,
  setLaneIsLoad,
  setLaneIsLoad2,
  laneIsLoad,
  laneIsLoad2,
  fetchAllLane,
  fetchSoonLane,
  name
}: any) => {
  const slug = useParams()   // permet de récupérer le nom du champion dans l'url
  stateNameLane(slug)
  useEffect(() => {
    fetchAllLane()
    fetchSoonLane()
    return () => {
      setLaneIsLoad(false)
      setLaneIsLoad2(false)
    }
  }, [])
  return (
    <motion.div
      key="tutoriel1"
      initial="in"
      animate="end"
      exit="exit"
      variants={animationOne}
    >
      <div className="jungle">
        {(!laneIsLoad || !laneIsLoad2) && <Loader />}
        {(laneIsLoad && laneIsLoad2) && (
          <>
            <div className="breadcrumb">
              <Link className="breadcrumb__link" to="/">Accueil </Link> &gt;
              <Link className="breadcrumb__link" to="/tutoriels-champions">Tutoriels champions </Link> &gt;
              {name.lane}
            </div>
            <h1 className="globalTitle-page">Tutoriels {name.lane}</h1>
            {laneActif.length !== 0 && (
            <motion.div
              variants={cardList}
              initial="in"
              animate="out"
              exit="end"
              className="jungle__cards"
              key="listChampions"
            >
              {laneActif.map((listChampion: any) => (
                <>
                  <motion.div
                    key={listChampion.name}
                    variants={card}
                    className="jungle__cards__card"
                  >
                    {listChampion.actif === 1 && (
                    <Link to={`/tutoriels-champions/${listChampion.lane}/${listChampion.name}`}>
                      <div className="">
                        <img src={`${apiBaseUrl}/images/champions/${listChampion.pictureChampion}`} alt="" />
                        <h3>{listChampion.name}</h3>
                      </div>
                    </Link>
                    )}
                  </motion.div>
                </>
              ))}
            </motion.div>
            )}
            {laneSoon.length !== 0 && (
            <>
              <div className="betweenParagraph" />
              <h2>Prochainement</h2>
              <div className="jungle__cards">
                {laneSoon.map((listChampion: any) => (
                  <>
                    <div className="jungle__cards__cardSoon" key={listChampion.name}>
                      <img src={`${apiBaseUrl}/images/champions/${listChampion.pictureChampion}`} alt="" />
                      <p className="jungle__cards__cardSoon__content">Bientôt disponible</p>
                      <h3>{listChampion.name}</h3>
                    </div>
                  </>
                ))}
              </div>
            </>
            )}
            {(laneActif.length === 0 && laneSoon.length === 0) && (
            <h2>Aucun tutoriels {name.lane} n'est disponible</h2>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

export default Champions
