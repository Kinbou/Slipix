// == Import npm
import React from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Presentation from 'src/components/Presentation';
import News from 'src/components/News';
import Guides from 'src/components/Guides';
import Guide from 'src/components/Guides/Guide';
import Tutoriels from 'src/components/Tutoriels';
import Support from 'src/components/Support';
import Contact from 'src/components/Contact';
import RoleChampion from 'src/components/Guides/RoleChampion';
import ProgressLol from 'src/components/Guides/ProgressLol';

// Lanes
import Jungle from 'src/components/Tutoriels/Jungle';
import Midlane from 'src/components/Tutoriels/Midlane';
import Toplane from 'src/components/Tutoriels/Toplane';

// Champions Jungle
import Zac from 'src/containers/ChampionsJungle';

// == Composant
const App = () => {
  const location = useLocation();
  // return the current pathname
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isPresentation = currentPath === '/presentation';
  const isNews = currentPath === '/nouveaute';
  const isTutoriel = currentPath === '/tutoriels-champions';
  const isJungle = currentPath === '/tutoriels-jungle';
  const isJungle1 = currentPath === '/tutoriels-champions/jungle/zac';
  const isJungle2 = currentPath === '/tutoriels-champions/jungle/olaf';
  const isJungle3 = currentPath === '/tutoriels-champions/jungle/ekko';
  const isJungle4 = currentPath === '/tutoriels-champions/jungle/lee-sin';
  const isJungle5 = currentPath === '/tutoriels-champions/jungle/gragas';
  const isSupportPage = currentPath === '/me-soutenir';
  const isContact = currentPath === '/me-contacter';
  const isGuides = currentPath === '/guides';
  const isGuide = currentPath === '/guides/mental&rage';
  const isRoleChampion = currentPath === '/guides/role-champion';
  const isProgressLol = currentPath === '/guides/progresser-sur-leagueOfLegends';

  const appClass = classNames('app', {
    'app--home': isHome,
    'app--presentation': isPresentation,
    'app--news': isNews,
    'app--tutoriels': isTutoriel,
    'app--jungle': isJungle || isJungle1 || isJungle2 || isJungle3 || isJungle4 || isJungle5,
    'app--supportPage': isSupportPage,
    'app--contact': isContact,
    'app--guides': isGuides,
    'app--guide': isGuide,
    'app--roleChampion': isRoleChampion,
    'app--progressLol': isProgressLol,
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
          <Route exact path="/tutoriels-jungle">
            <Jungle />
          </Route>
          <Route exact path="/tutoriels-champions/jungle/:name">
            <Zac />
          </Route>
          <Route exact path="/tutoriels-midlane">
            <Midlane />
          </Route>
          <Route exact path="/tutoriels-toplane">
            <Toplane />
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
