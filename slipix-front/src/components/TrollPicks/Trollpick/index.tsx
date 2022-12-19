import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Youtube from '@components/Youtube'
import parse from 'html-react-parser'

import { apiBaseUrl } from '@middlewares/index'
import { pipe } from '@/utils/selectors'
import './trollpick.scss'
import Loader from '@components/Loader'

interface ImageProps {
  id: number,
  urlImage: string,
}

const Trollpick = ({
  stateNameTrollpick,
  fetchOneTrollpick,
  trollpick,
  setTrollpickIsLoad,
  trollpickIsLoad,
}: any) => {
  const slug = useParams()
  // permet de récupérer le nom du trollpicks dans l'url
  console.log('trollpick', trollpick)
  stateNameTrollpick(slug)
  useEffect(() => {
    fetchOneTrollpick()
    // await useTitle(`Trollpicks - ${trollpick[0].name}`);
    return () => {
      setTrollpickIsLoad()
      // useTitle(`Trollpicks - ${trollpick[0].name}`);
    }
  }, [])

  // useTitle('Trollpicks');

  return (

    <div className="trollpick">

      {!trollpickIsLoad && <Loader />}
      {trollpickIsLoad && (
      <>
        <div className="breadcrumb">
          <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
          <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
          {trollpick.name}
        </div>
        <h1 className="globalTitle-page">{trollpick.name}</h1>,
        <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">{trollpick.nameIntro}</span> {trollpick.nameIntro2} dans League of Legends !</p>
        <img className="logo" src={`${apiBaseUrl}/${trollpick.logo}`} alt="" />
        <div className="backgroundParagraphe">
          <p className="intro">{parse(trollpick.introIntro)}</p>
          {parse(trollpick.introContent)}
          <div className="trollpick__pictures">
            {trollpick.trollpickIntroImages.map((img: ImageProps) => (
              <img className={`trollpick__pictures__${trollpick.nameIntro}`} src={`${apiBaseUrl}/${img.urlImage}`} key={img.id} alt="" />
            ))}
          </div>
        </div>
        <div className="backgroundParagraphe trollpick__runes">
          <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
          <p className="paragraph">{trollpick.runeIntro}</p>
          <img className="trollpick__pictures__rune" src={`${apiBaseUrl}/${trollpick.runePicture}`} alt="" />
          <div className="trollpick__runes__list">
            <ul>
              {trollpick.runes.map((rune: { id: number, image: string, color: string, title: string, trollpickRunes: { description: string } }) => (
                <div className="trollpick__runes__list__content trollpick__runes__list__border" key={rune.id}>
                  <img className="trollpick__pictures trollpick__pictures__runes" src={`${apiBaseUrl}/${rune.image}`} alt="" />
                  <li className="paragraph"><span className={`definition ${rune.color}`}>{rune.title} :</span>{rune.trollpickRunes.description}</li>
                </div>
              ))}
              <li className="paragraph">{trollpick.runeContentEnd}</li>
            </ul>
          </div>
        </div>
        <div className="backgroundParagraphe">
          <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
          {parse(trollpick.gameplayIntro)}
          <div className="trollpick__gameplay__content">
            {/* Contenue */}
            {parse(trollpick.gameplayContents[0].description)}

            {/* Image */}
            {trollpick.gameplayImages[0] && (<img className={`trollpick__pictures__trollContent trollpick__pictures__trollContent__${trollpick.nameIntro}`} src={`${apiBaseUrl}/${trollpick.gameplayImages[0].urlImage}`} alt="" />)}

            {/* Contenu */}
            {trollpick.gameplayContents[1] && <div>{parse(trollpick.gameplayContents[1].description)}</div>}

            {/* Image */}
            {trollpick.gameplayImages[1] && (<img className={`trollpick__pictures__capture trollpick__pictures__capture__${trollpick.nameIntro}`} src={`${apiBaseUrl}/${trollpick.gameplayImages[1].urlImage}`} alt="" />)}

            {/* Contenu */}
            {trollpick.gameplayContents[2] && <div>{parse(trollpick.gameplayContents[2].description)}</div>}
          </div>
          {parse(trollpick.gameplayIntroVideo)}
          <div className="introTrollpickYoutube" />
          {trollpick.gameplayVideosYoutubes.map((video: any) => (
            <>
              <Youtube idYoutube={video.urlVideo} />
              <div className="betweenYoutube" />
            </>
          ))}
        </div>

        {/* Weakness */}
        <div className="backgroundParagraphe">
          <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
          {parse(trollpick.weaknessContent)}
          {trollpick?.weaknessVideo && (
            <>
              <Youtube idYoutube={trollpick.weaknessVideo} />
              <div className="afterYoutube" />
            </>
          )}
          {trollpick?.weaknessPicture && (
            <img className={`trollpick__pictures__trollWeakness trollpick__pictures__trollWeakness__${trollpick.nameIntro}`} src={`${apiBaseUrl}/${trollpick.weaknessPicture}`} alt="" />
          )}
          {parse(trollpick.weaknessEnd)}
        </div>

        {/* End */}
        <div className="backgroundParagraphe">
          <p className="paragraph">Amusez vous bien et j'espère que cette présentation de {trollpick.name} vous aura donné envie d'essayer le champion.</p>
          <img className={`trollpick__pictures__end trollpick__pictures__end__${trollpick.nameIntro}`} src={`${apiBaseUrl}/${trollpick.endPicture}`} alt="" />
          <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
        </div>
      </>
      )}
    </div>
  )
}

export default Trollpick
