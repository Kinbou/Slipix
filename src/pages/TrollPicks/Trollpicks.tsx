import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'
import { motion } from 'framer-motion'

import { animationOne, cardList, card } from '@/utils/animations/index'
import { useTitle } from '@/hooks/useTitle'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  trollpick_actions,
  selectTrollpick,
} from '@/store/trollpick/trollpick.slice'

import { Trollpick } from '@/api/trollpick/models'

import Background from '@pages/Guides/Background'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

interface TrollpickCardProps {
  name: string
  id: number
  title: string
  image: string
}

const TrollpickCard = ({ name, id, title, image }: TrollpickCardProps) => {
  return (
    <div className="m-1em rounded-md card bg-bgGuide lg:w-35% pl-.5em" key={id}>
      <Link to={`/trollpicks/${slugify(name)}/${id}`}>
        <motion.div
          className="flex justify-between items-center"
          key={id}
          variants={card}
        >
          <h3 className="gold font-squada w-50% h4">{title}</h3>
          {image && (
            <img
              className="rounded-md w-45%"
              src={`${apiBaseUrl}/${image}`}
              alt=""
            />
          )}
        </motion.div>
      </Link>
    </div>
  )
}

const TrollPicks = () => {
  useTitle('Trollpicks')
  const dispatch = useAppDispatch()
  const { trollpickActif, trollpickSoon } = useAppSelector(selectTrollpick)

  useEffect(() => {
    if (!trollpickActif.length) {
      dispatch(trollpick_actions.getTrollpicksActif())
      dispatch(trollpick_actions.getTrollpicksSoon())
    }
  }, [])

  return (
    <motion.div
      className="text flex flex-col items-center"
      key="trollpicks"
      initial="in"
      animate="end"
      exit="end"
      variants={animationOne}
    >
      <h1 className="h1 my-1em">Trollpicks</h1>
      <Background>
        <h3 className="h3 mb-1em text-gold font-squada">
          Mes TrollPicks favoris dans League of Legends en SAISON 13
        </h3>
        <p>
          Les Trollpicks et les picks exotiques font partie de League of Legends
          depuis toujours !
        </p>
        <p>
          Vous l&apos;avez sûrement déjà remarqué dans mes vidéos, je suis fan
          des gameplays différents et originaux !
        </p>
        <p>
          L&apos;avantage d&apos;un pick exotique et d&apos;un trollpick
          c&apos;est premièrement de se taper des bonnes barres de rire mais
          surtout de surprendre vos adversaires !
        </p>
        <p>
          Voici mes trollpicks que je joue le + souvent, que j&apos;ai
          theorycraft moi même, adapté moi même à la meta.
        </p>
        <p className="red text-2xl mt-1em">Attention</p>
        <p>
          <i className="fas fa-exclamation-triangle red mx-0.5em" />
          Ce ne sont pas des picks optimaux pour monter en ranked ou pour
          atteindre des objectifs, jouez les en NORMALE DRAFT pour bien vous
          amuser !
          <i className="fas fa-exclamation-triangle icons__exclamation red mx-0.5em" />
        </p>
      </Background>

      {trollpickActif && (
        <motion.div className="" variants={cardList} initial="in" animate="out">
          {trollpickActif.length !== 0 && (
            <div className="flex flex-wrap justify-center">
              {trollpickActif.map((trollpick: Trollpick) => (
                <TrollpickCard
                  key={trollpick.id}
                  id={trollpick.id}
                  name={trollpick.name}
                  title={trollpick.title}
                  image={trollpick.image}
                />
              ))}
            </div>
          )}
          {/* {trollpickSoon.length !== 0 && (
							<div className='flex flex-col items-center'>
								<div className="border border-solid border-gold w-90% my-3rem" />
								<h2 className='h2 text-gold mb-1em'>Prochainement</h2>
								<div className='flex flex-wrap justify-center'>
									{trollpickSoon.map((trollpick: Trollpick) => (
										<TrollpickCard key={trollpick.id} id={trollpick.id} name={trollpick.name} title={trollpick.title} image={trollpick.image} />
									))}
								</div>
							</div>
						)} */}
        </motion.div>
      )}
    </motion.div>
  )
}

export default TrollPicks
