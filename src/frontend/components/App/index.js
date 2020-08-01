// == Import npm
import React from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';

// == Import
import Header from 'src/frontend/components/Header';
import Home from 'src/frontend/components/Home';
import Footer from 'src/frontend/components/Footer';
import Presentation from 'src/frontend/components/Presentation';
import News from 'src/frontend/components/News';

import Support from 'src/frontend/components/Support';
import Contact from 'src/frontend/components/Contact';

// Guides
import Guides from 'src/frontend/components/Guides';
import Guide from 'src/frontend/components/Guides/Guide';
import RoleChampion from 'src/frontend/components/Guides/RoleChampion';
import ProgressLol from 'src/frontend/components/Guides/ProgressLol';
import LowElo from 'src/frontend/components/Guides/LowElo';
import WinLane from 'src/frontend/components/Guides/WinLane';
import VisionGame from 'src/frontend/components/Guides/VisionGame';

// Tutoriels
import Tutoriels from 'src/frontend/components/Tutoriels';
import Champion from 'src/frontend/containers/Tutoriels/Champion';

// Trollpicks
import TrollPicks from 'src/frontend/components/TrollPicks';
import XinAutoroute from 'src/frontend/components/TrollPicks/XinAutoroute';
import ThreshFlak from 'src/frontend/components/TrollPicks/ThreshFlak';
import KaisaLaser from 'src/frontend/components/TrollPicks/KaisaLaser';

// Lanes
import Jungle from 'src/frontend/containers/Tutoriels/Jungle';
// import Midlane from 'src/frontend/components/Tutoriels/Midlane';
// import Toplane from 'src/frontend/components/Tutoriels/Toplane';

// == Composant
const App = () => {
  const location = useLocation();
  // return the current pathname
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isPresentation = currentPath === '/presentation';
  const isNews = currentPath === '/nouveaute';
  const isTutoriel = currentPath === '/tutoriels-champions';
  const isJungle = currentPath === '/tutoriels-champions/jungle';
  const isJungle1 = currentPath === '/tutoriels-champions/jungle/zac';
  const isJungle2 = currentPath === '/tutoriels-champions/jungle/olaf';
  const isJungle3 = currentPath === '/tutoriels-champions/jungle/ekko';
  const isJungle4 = currentPath === '/tutoriels-champions/jungle/lee-sin';
  const isJungle5 = currentPath === '/tutoriels-champions/jungle/gragas';
  const isJungle6 = currentPath === '/tutoriels-champions/jungle/hecarim';
  const isTutorielTop = currentPath === '/tutoriels-champions/toplane';
  const isTop1 = currentPath === '/tutoriels-champions/toplane/hecarim';
  const isTop2 = currentPath === '/tutoriels-champions/toplane/volibear';
  const isTop3 = currentPath === '/tutoriels-champions/toplane/pantheon';
  const isTop4 = currentPath === '/tutoriels-champions/toplane/rumble';
  const isTop5 = currentPath === '/tutoriels-champions/toplane/camille';
  const isTop6 = currentPath === '/tutoriels-champions/toplane/mordekaiser';
  const isTop7 = currentPath === '/tutoriels-champions/toplane/gnar';
  const isTop8 = currentPath === '/tutoriels-champions/toplane/kled';
  const isTop9 = currentPath === '/tutoriels-champions/toplane/vladimir';
  const isTutorielMid = currentPath === '/tutoriels-champions/midlane';
  const isMid1 = currentPath === '/tutoriels-champions/midlane/lux';
  const isMidZed = currentPath === '/tutoriels-champions/midlane/zed';
  const isMidLeblanc = currentPath === '/tutoriels-champions/midlane/leblanc';
  const isMidRyze = currentPath === '/tutoriels-champions/midlane/ryze';
  const isMidAhri = currentPath === '/tutoriels-champions/midlane/ahri';
  const isMidYasuo = currentPath === '/tutoriels-champions/midlane/yasuo';
  const isMidKatarina = currentPath === '/tutoriels-champions/midlane/katarina';
  const isSupportPage = currentPath === '/me-soutenir';
  const isContact = currentPath === '/me-contacter';
  const isGuides = currentPath === '/guides';
  const isGuide = currentPath === '/guides/mental&rage';
  const isRoleChampion = currentPath === '/guides/role-champion';
  const isProgressLol = currentPath === '/guides/progresser-sur-leagueOfLegends';
  const isLowElo = currentPath === '/guides/sortir-du-bas-elo';
  const isWinLane = currentPath === '/guides/gagner-sa-phase-de-lane';
  const isVisionGame = currentPath === '/guides/vision-du-jeu';
  const isTrollPicks = currentPath === '/trollpicks';
  const isXinAutoroute = currentPath === '/trollpicks/xinZhao-autoroute';
  const isThreshFlak = currentPath === '/trollpicks/thresh-flak';
  const isKaisaLaser = currentPath === '/trollpicks/kaisa-laser';

  const appClass = classNames('app', {
    'app--home': isHome,
    'app--presentation': isPresentation,
    'app--news': isNews,
    'app--tutoriels': isTutoriel,
    'app--jungle': isJungle || isJungle1 || isJungle2 || isJungle3 || isJungle4 || isJungle5 || isJungle6,
    'app--tutorielTop': isTutorielTop || isTop1 || isTop2 || isTop3 || isTop4 || isTop5 || isTop6 || isTop7 || isTop8 || isTop9,
    'app--tutorielMid': isTutorielMid || isMid1 || isMidZed || isMidLeblanc || isMidRyze || isMidAhri || isMidYasuo || isMidKatarina,
    'app--supportPage': isSupportPage,
    'app--contact': isContact,
    'app--guides': isGuides,
    'app--guide': isGuide,
    'app--roleChampion': isRoleChampion,
    'app--progressLol': isProgressLol,
    'app--lowElo': isLowElo,
    'app--winLane': isWinLane || isVisionGame,
    'app--trollPicks': isTrollPicks || isXinAutoroute || isThreshFlak || isKaisaLaser,
    // 'app--error': isError,
  });

  return (
    <div className="app">
      <div className={appClass}>
        <Header />
        <main>
          {/* {!appIsLoad && <Loader />} */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/presentation">
            <Presentation />
          </Route>
          <Route exact path="/nouveaute">
            <News />
          </Route>
          {/* <Partenaires />
          */}
          <Route exact path="/tutoriels-champions">
            <Tutoriels />
          </Route>
          <Route exact path="/tutoriels-champions/:lane">
            <Jungle />
          </Route>
          <Route exact path="/tutoriels-champions/:lane/:name">
            <Champion />
          </Route>
          <Route exact path="/guides">
            <Guides />
          </Route>
          <Route exact path="/guides/mental&rage">
            <Guide />
          </Route>
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
          <Route exact path="/trollpicks/xinZhao-autoroute">
            <XinAutoroute />
          </Route>
          <Route exact path="/trollpicks/thresh-flak">
            <ThreshFlak />
          </Route>
          <Route exact path="/trollpicks/kaisa-laser">
            <KaisaLaser />
          </Route>
          <Route exact path="/me-soutenir">
            <Support />
          </Route>
          <Route exact path="/me-contacter">
            <Contact />
          </Route>
        </main>
        <Footer />
      </div>

    </div>
  );
};

// == Export
export default App;
