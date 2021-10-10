import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Route, useLocation, Switch } from 'react-router-dom'
import Analytics from 'react-router-ga'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

// // == Import
import dataImages from '@/utils/dataImages.json'
import { useResolution } from '@/utils/selectors'
import Loader from '@components/Loader/index'
import Header from '@containers/Header/index'
import Footer from '@components/Footer/Footer'
import Alert from '@containers/Alert/index'
import Home from '@components/Home/index'
import Presentation from '@components/Presentation/index'
import News from '@components/News/index'
import Support from '@components/Support/index'
import Contact from '@components/Contact/index'
import Thanks from '@containers/Thanks/index'
import MentionLegales from '@components/Legal-mentions/index'
import Profil from '@containers/Profil/index'

// outils
import ScrollToTop from '@components/ScrollToTop/index'
import ScrollToTopButton from '@components/ScrollToTopButton'
import BackgroundProfil from '@components/BackgroundProfil/index'

// Guides
import Guides from '@components/Guides/index'
import MentalRage from '@components/Guides/Mental&rage/index'
import RoleChampion from '@components/Guides/RoleChampion/index'
import ProgressLol from '@components/Guides/ProgressLol/index'
import LowElo from '@components/Guides/LowElo/index'
import WinLane from '@components/Guides/WinLane/index'
import VisionGame from '@components/Guides/VisionGame/index'

// Tutoriels
import Tutoriels from '@components/Tutoriels/index'
import Champion from '@containers/Tutoriels/Champion/index'

// Trollpicks
import TrollPicks from '@containers/TrollPicks/index'
import Trollpick from '@containers/TrollPicks/Trollpick/index'

// Lanes
import Jungle from '@containers/Tutoriels/Jungle/index'

// Automatic Link
import EmailVerification from '@components/AutomaticLink/EmailVerification/index'
import ResetPassword from '@containers/AutomaticLink/ResetPassword/index'

const BackgroundImage = styled.div`
/* object-fit: fill; */
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  background-color: black;
  background-image:linear-gradient(rgba(23, 48, 66, 0.4), rgba(3, 23, 32, 0.4)), url(https://backend.slipix-progresser-sur-league-of-legends.fr/images/backgroundPages/${({ appClass }) => appClass}/format-standard.jpg);

  /* Grand écran */
  @media (min-width: 3400px) {
    background-image:linear-gradient(rgba(23, 48, 66, 0.4), rgba(3, 23, 32, 0.4)),url(https://backend.slipix-progresser-sur-league-of-legends.fr/images/backgroundPages/${({ appClass }) => appClass}/format-3440x1440.jpg)
  }
  /* Grand écran */
  @media (min-width: 2000px) {
    background-image:linear-gradient(rgba(23, 48, 66, 0.4), rgba(3, 23, 32, 0.4)),url(https://backend.slipix-progresser-sur-league-of-legends.fr/images/backgroundPages/${({ appClass }) => appClass}/format-2560x1440.jpg)
  }
  /* Format tablette */
  @media (max-width: 1024px) {
    background-image:linear-gradient(rgba(23, 48, 66, 0.4), rgba(3, 23, 32, 0.4)),url(https://backend.slipix-progresser-sur-league-of-legends.fr/images/backgroundPages/${({ appClass }) => appClass}/format-tablette.jpg)
  }
  /* Format phone */
  @media (max-width: 600px) {
    background-image:linear-gradient(rgba(23, 48, 66, 0.4), rgba(3, 23, 32, 0.4)),url(https://backend.slipix-progresser-sur-league-of-legends.fr/images/backgroundPages/${({ appClass }) => appClass}/format-phone.jpg)
  }
`

// == Composant
const App = ({ showAlert }: any) => {
  const location = useLocation()
  const currentPath = location.pathname
  const isHome = currentPath === '/'
  const isPresentation = currentPath === '/presentation'
  const isNews = currentPath === '/nouveaute'
  const isThanks = currentPath === '/remerciements'
  const isProfil = currentPath === '/profil'
  const isTutoriel = currentPath === '/tutoriels-champions'
  const isTop = currentPath.includes('/tutoriels-champions/toplane')
  const isJungle = currentPath.includes('/tutoriels-champions/jungle')
  const isMid = currentPath.includes('/tutoriels-champions/mid')
  const isAdc = currentPath.includes('/tutoriels-champions/adc')
  const isSupport = currentPath.includes('/tutoriels-champions/support')
  const isTrollPicks = currentPath.includes('/trollpicks')
  const isSupportPage = currentPath === '/me-soutenir'
  const isContact = currentPath === '/me-contacter'
  const isGuides = currentPath === '/guides'
  const isMentalRage = currentPath === '/guides/mental&rage'
  const isRoleChampion = currentPath === '/guides/role-champion'
  const isProgressLol = currentPath === '/guides/progresser-sur-leagueOfLegends'
  const isLowElo = currentPath === '/guides/sortir-du-bas-elo'
  const isWinLane = currentPath === '/guides/gagner-sa-phase-de-lane'
  const isLegalNotice = currentPath === '/mentions-legales'
  const isEmailVerification = currentPath === '/email-verification'
  const isResetPassword = currentPath === '/reset-password'

  const appClass = classNames({
    home: isHome,
    presentation: isPresentation,
    news: isNews,
    thanks: isThanks,
    tutoriels: isTutoriel,
    tutorielJungle: isJungle,
    tutorielTop: isTop,
    tutorielMid: isMid,
    tutorielAdc: isAdc,
    tutorielSupport: isSupport,
    support: isSupportPage,
    contact: isContact,
    guides: isGuides,
    mentalRage: isMentalRage,
    roleChampion: isRoleChampion,
    progressLol: isProgressLol,
    lowElo: isLowElo,
    winLane: isWinLane,
    trollPicks: isTrollPicks,
    profil: isProfil,
    legalNotice: isLegalNotice,
    emailVerification: isEmailVerification,
    resetPassword: isResetPassword
  })
  const [imgLoaded, setImgLoaded] = useState(true)

  // const cacheImages = async (srcArray: any) => {
  //   const images = [...srcArray]
  //   const promises = images.map((src) => new Promise<void>((resolve, reject) => {
  //     const img = new Image()
  //     img.src = src
  //     img.onload = resolve()
  //     img.onerror = reject()
  //   }))
  //   await Promise.all(promises)
  //   setImgLoaded(true)
  // }
  useEffect(() => {
    // const format = useResolution()
    // const imagesCopy = { ...dataImages[appClass] }
    // const images = [...imagesCopy.otherImage]
    // images.push(imagesCopy.background[format])
    // cacheImages(images)
  }, [appClass])

  return (
    <div className="app">
      <ScrollToTop />
      <BackgroundImage appClass={appClass}>
        {appClass === 'profil' && (
          <BackgroundProfil />
        )}
      </BackgroundImage>
      <Header />
      <main>
        {!imgLoaded
          ? <Loader />
          : (
          <Analytics id="UA-176591379-1" debug>
            <ScrollToTopButton />
            {showAlert && <Alert />}
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/presentation" component={Presentation} />
                <Route exact path="/nouveaute" component={News} />
                <Route exact path="/tutoriels-champions" component={Tutoriels} />
                <Route exact path="/tutoriels-champions/:lane" component={Jungle} />
                <Route exact path="/tutoriels-champions/:lane/:name" component={Champion} />
                <Route exact path="/guides" component={Guides} />
                <Route exact path="/guides/mental&rage" component={MentalRage} />
                <Route exact path="/guides/role-champion" component={RoleChampion} />
                <Route exact path="/guides/progresser-sur-leagueOfLegends" component={ProgressLol} />
                <Route exact path="/guides/sortir-du-bas-elo" component={LowElo} />
                <Route exact path="/guides/gagner-sa-phase-de-lane" component={WinLane} />
                <Route exact path="/guides/vision-du-jeu" component={VisionGame} />
                <Route exact path="/trollpicks" component={TrollPicks} />
                <Route exact path="/trollpicks/:name/:id" component={Trollpick} />
                <Route exact path="/me-soutenir" component={Support} />
                <Route exact path="/me-contacter" component={Contact} />
                <Route exact path="/mentions-legales" component={MentionLegales} />
                <Route exact path="/remerciements" component={Thanks} />
                <Route exact path="/profil" component={Profil} />
                <Route path="/email-verification" component={EmailVerification} />
                <Route exact path="/reset-password" component={ResetPassword} />
              </Switch>
            </AnimatePresence>
          </Analytics>
            )}
      </main>

      <Footer />

    </div>
  )
}

App.propTypes = {
  showAlert: PropTypes.bool.isRequired
}

export default App
