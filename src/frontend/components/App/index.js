import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Route, useLocation, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import dataImages from 'src/utils/dataImages.json';
import { useResolution } from 'src/utils/selectors';
import styled from 'styled-components';

// == Import
import Header from 'src/frontend/containers/Header';
import Home from 'src/frontend/components/Home';
import Footer from 'src/frontend/components/Footer';
import Presentation from 'src/frontend/components/Presentation';
import News from 'src/frontend/components/News';
import Support from 'src/frontend/components/Support';
import Contact from 'src/frontend/components/Contact';
import ScrollToTopButton from 'src/frontend/components/ScrollToTopButton';
import Thanks from 'src/frontend/containers/Thanks';
import MentionLegales from 'src/frontend/components/Legal-mentions';
import Profil from 'src/frontend/containers/Profil';
import Alert from 'src/frontend/containers/Alert';
import Loader from 'src/frontend/components/Loader';

// outils
import ScrollToTop from 'src/frontend/components/ScrollToTop';
import BackgroundProfil from 'src/frontend/components/BackgroundProfil';

// Guides
import Guides from 'src/frontend/components/Guides';
import MentalRage from 'src/frontend/components/Guides/Mental&rage';
import RoleChampion from 'src/frontend/components/Guides/RoleChampion';
import ProgressLol from 'src/frontend/components/Guides/ProgressLol';
import LowElo from 'src/frontend/components/Guides/LowElo';
import WinLane from 'src/frontend/components/Guides/WinLane';
import VisionGame from 'src/frontend/components/Guides/VisionGame';

// Tutoriels
import Tutoriels from 'src/frontend/components/Tutoriels';
import Champion from 'src/frontend/containers/Tutoriels/Champion';

// Trollpicks
import TrollPicks from 'src/frontend/containers/TrollPicks';
import Trollpick from 'src/frontend/containers/TrollPicks/Trollpick';

// Lanes
import Jungle from 'src/frontend/containers/Tutoriels/Jungle';

// Automatic Link
import EmailVerification from 'src/frontend/components/AutomaticLink/EmailVerification';
import ResetPassword from 'src/frontend/containers/AutomaticLink/ResetPassword';

const BackgroundImage = styled.div`
/* object-fit: fill; */
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
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
`;

// == Composant
const App = ({ showAlert }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isPresentation = currentPath === '/presentation';
  const isNews = currentPath === '/nouveaute';
  const isThanks = currentPath === '/remerciements';
  const isProfil = currentPath === '/profil';
  const isTutoriel = currentPath === '/tutoriels-champions';
  const isTop = currentPath.includes('/tutoriels-champions/toplane');
  const isJungle = currentPath.includes('/tutoriels-champions/jungle');
  const isMid = currentPath.includes('/tutoriels-champions/mid');
  const isAdc = currentPath.includes('/tutoriels-champions/adc');
  const isSupport = currentPath.includes('/tutoriels-champions/support');
  const isTrollPicks = currentPath.includes('/trollpicks');
  const isSupportPage = currentPath === '/me-soutenir';
  const isContact = currentPath === '/me-contacter';
  const isGuides = currentPath === '/guides';
  const isMentalRage = currentPath === '/guides/mental&rage';
  const isRoleChampion = currentPath === '/guides/role-champion';
  const isProgressLol = currentPath === '/guides/progresser-sur-leagueOfLegends';
  const isLowElo = currentPath === '/guides/sortir-du-bas-elo';
  const isWinLane = currentPath === '/guides/gagner-sa-phase-de-lane';
  const isLegalNotice = currentPath === '/mentions-legales';
  const isEmailVerification = currentPath === '/email-verification';
  const isResetPassword = currentPath === '/reset-password';

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
    resetPassword: isResetPassword,
  });
  const [imgLoaded, setImgLoaded] = useState(false);

  const cacheImages = async (srcArray) => {
    const images = [...srcArray];
    const promises = await images.map((src) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    }));
    await Promise.all(promises);
    setImgLoaded(true);
  };
  useEffect(() => {
    const format = useResolution();
    const imagesCopy = { ...dataImages[appClass] };
    const images = [...imagesCopy.otherImage];
    images.push(imagesCopy.background[format]);
    cacheImages(images);
  }, [appClass]);

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
        {!imgLoaded ? <Loader /> : (
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
                <Route exact path="/guides/role-champion">
                  <RoleChampion />
                </Route>
                <Route exact path="/guides/progresser-sur-leagueOfLegends">
                  <ProgressLol />
                </Route>
                <Route exact path="/guides/sortir-du-bas-elo">
                  <LowElo />
                </Route>
                <Route exact path="/guides/gagner-sa-phase-de-lane">
                  <WinLane />
                </Route>
                <Route exact path="/guides/vision-du-jeu">
                  <VisionGame />
                </Route>
                <Route exact path="/trollpicks">
                  <TrollPicks />
                </Route>
                <Route exact path="/trollpicks/:name/:id">
                  <Trollpick />
                </Route>
                <Route exact path="/me-soutenir">
                  <Support />
                </Route>
                <Route exact path="/me-contacter">
                  <Contact />
                </Route>
                <Route exact path="/mentions-legales" component={MentionLegales} />
                <Route exact path="/remerciements">
                  <Thanks />
                </Route>
                <Route exact path="/profil">
                  <Profil />
                </Route>
                <Route path="/email-verification">
                  <EmailVerification />
                </Route>
                <Route exact path="/reset-password">
                  <ResetPassword />
                </Route>
              </Switch>
            </AnimatePresence>
          </Analytics>
        )}
      </main>
      <Footer />

    </div>
  );
};

App.propTypes = {
  showAlert: PropTypes.bool.isRequired,
};

export default App;
