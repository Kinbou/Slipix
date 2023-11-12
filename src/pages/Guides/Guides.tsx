import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useId } from 'react'

import { cardList, card, animationCardsPage } from '@/utils/animations/index'
import { useTitle } from '@/hooks/useTitle'

// import image
import role from '@/assets/images/guides/roleChampion.jpg'
import laneWin from '@/assets/images/guides/laneWin.jpg'
import progression from '@/assets/images/guides/progression.jpg'
import mentalWin from '@/assets/images/guides/mentalWin.jpg'
import lowEloProblem from '@/assets/images/guides/PROBLEMEBASELO.jpg'

interface ListGuidesProps {
  key: string
  location: string
  title: string
  image: React.ReactNode
}

const Guides = () => {
  useTitle('Guides')

  const listGuides: ListGuidesProps[] = [
    {
      key: useId(),
      location: '/guides/role-champion',
      title: 'Trouver son rôle/champion',
      image: role,
    },
    {
      key: useId(),
      location: '/guides/progresser-sur-leagueOfLegends',
      title: 'Progresser sur League of Legends',
      image: progression,
    },
    {
      key: useId(),
      location: '/guides/sortir-du-bas-elo',
      title: 'Sortir du bas elo',
      image: lowEloProblem,
    },
    {
      key: useId(),
      location: '/guides/gagner-sa-phase-de-lane',
      title: 'Gagner sa phase de lane',
      image: laneWin,
    },
    {
      key: useId(),
      location: '/guides/mental&rage',
      title: 'Le mental & la rage',
      image: mentalWin,
    },
  ]
  return (
    <motion.div
      className="flex flex-col items-center text"
      key="guides"
      initial="in"
      animate="out"
      exit="end"
      variants={animationCardsPage}
    >
      <h1 className="h1 my-1em">Guides League of Legends</h1>
      <p className="text-bold mx-1rem text-center">
        Ce sont des guides que j&apos;ai moi même créé à l&apos;aide de{' '}
        <span className="text-gold">joueurs pro</span> sur League of Legends. Il
        y a des astuces sur la <span className="text-gold">pratique</span> et
        beaucoup de théories pour vous aider à progresser.
      </p>
      <p className="mx-1rem text-center">
        Pas mal de <span className="text-gold">thématiques</span> différentes
        pour devenir un bon joueur sur ce jeu très frustrant dans la défaite.
      </p>
      <div>
        <motion.div
          variants={cardList}
          initial="in"
          key="listGuides"
          animate="out"
          className="flex flex-wrap justify-center"
        >
          {listGuides.map((guide: ListGuidesProps) => (
            <Link
              className="lg:w-550px m-1em text-center p-1rem rounded-md border border-solid shadow-3xl border-transparent transition-all hover:scale-103 hover:duration-100 hover:shadow-hoverGuideCard durantion-300 bg-support"
              to={guide.location}
              key={guide.key}
            >
              <motion.div className="" variants={card} key={guide.key}>
                <h3 className="h3 text-gold m-1rem">{guide.title}</h3>
                <img className="w-100% rounded-md" src={guide.image} alt="" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Guides
