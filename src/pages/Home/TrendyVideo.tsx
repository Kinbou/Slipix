import { useId } from 'react'

import dracolaf from '@/assets/images/picturesYoutube/dracolaf.png'
import impossibleGragas from '@/assets/images/picturesYoutube/impossibleGragas.jpg'
import merguezEzreal from '@/assets/images/picturesYoutube/merguezEzreal.jpg'
import tartibriar from '@/assets/images/picturesYoutube/tartibriar.jpg'

interface VideosProps {
  key: string
  image: string
  title: string
  url: string
}

const TrendyVideo = () => {
  const videos: VideosProps[] = [
    {
      key: useId(),
      image: impossibleGragas,
      title: 'impossibleGragas',
      url: 'https://www.youtube.com/watch?v=BGmUcsaWLYQ',
    },
    {
      key: useId(),
      image: merguezEzreal,
      title: 'merguezEzreal',
      url: 'https://www.youtube.com/watch?v=xdJ1ZswDB_A&t',
    },
    {
      key: useId(),
      image: dracolaf,
      title: 'dracolaf',
      url: 'https://www.youtube.com/watch?v=PwiZeYTZuGQ&t',
    },
    {
      key: useId(),
      image: tartibriar,
      title: 'tartibriar',
      url: 'https://www.youtube.com/watch?v=jtnYlwWNGrw',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-solid lg:p-2rem bg-bgCard lg:mb-5em lg:mx-5rem border-gold p-.5rem m-1rem">
      <h2 className="gold h3 text-shadow-default text-center">
        Découvrez les vidéos tendance trollpicks
      </h2>
      <div className="flex items-center justify-center xl:w-80% flex-wrap xs:w-95%">
        {videos.map((video) => (
          <a
            key={video.key}
            className="contents"
            href={video.url}
            target="_blanc"
          >
            <img
              className="rounded-md border border-solid border-transparent transition-all hover:scale-103 duration-300 m-1em xl:w-35% hover:border-blue hover:duration-200 xs:w-40%"
              src={video.image}
              alt={video.title}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default TrendyVideo
