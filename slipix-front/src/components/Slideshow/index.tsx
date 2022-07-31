/* eslint-disable no-undef */
// @ts-ignore
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import youtube from '@/assets/images/banner/youtubeSlipix.png'
import twitch from '@/assets/images/banner/twitchSlipixSlide.jpg'
import coaching from '@/assets/images/banner/CoachingSLIPIX.jpg'

import './slideshow.scss'

const Slideshow = (): React.ReactElement => {
  const proprietes = {
    duration: 5000,
    transitionDuration: 900,
    infinite: true,
    indicators: false,
    arrows: true,
  }

  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <img src={youtube} alt="youtube" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__youtube">
            <h2>Rejoignez moi sur Youtube !</h2>
            {/* @ts-ignore */}
            <a href="https://www.youtube.com/user/DeiiZFamily" target="_blanc" label><button type="button" target="_blanc">Cliquez Ici</button></a>
          </div>
        </div>
        <div className="each-slide">
          <img src={twitch} alt="twitch" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__twitch">
            <h2>Rejoignez moi sur Twitch !</h2>
            {/* @ts-ignore */}
            <a href="https://www.twitch.tv/slipixxx" target="_blanc" label><button type="button">Cliquez Ici</button></a>
          </div>
        </div>
        <div className="each-slide">
          <img src={coaching} alt="coaching" className="containerSlide__each-slide__image" />
          <div className="containerSlide__each-slide__image__content containerSlide__each-slide__image__content__coaching">
            <h2>Rejoignez LA #TEAMSLIP SUR DISCORD !</h2>
            <p>+ de 14000 membres</p>
            {/* @ts-ignore */}
            <a href="https://discord.gg/xsZbWs" target="_blanc" label><button type="button">Cliquez Ici</button></a>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow
