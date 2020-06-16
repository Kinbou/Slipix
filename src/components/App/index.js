// == Import npm
import React from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
// import Slideshow from 'src/components/Slideshow';
// import Partenaires from 'src/components/Partenaires';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Presentation from 'src/components/Presentation';
import News from 'src/components/News';
import Tutoriels from 'src/components/Tutoriels';
import Support from 'src/components/Support';
import Contact from 'src/components/Contact';
import Loader from 'src/components/Loader';

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
  const isSupportPage = currentPath === '/me-soutenir';
  const isContact = currentPath === '/me-contacter';

  const appClass = classNames('app', {
    'app--home': isHome,
    'app--presentation': isPresentation,
    'app--news': isNews,
    'app--tutoriels': isTutoriel,
    'app--jungle': isJungle || isJungle1 || isJungle2 || isJungle3,
    'app--supportPage': isSupportPage,
    'app--contact': isContact,
    // 'app--error': isError,
  });

  return (
    <div className="app">
      {/* <Slideshow /> */}
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

App.propTypes = {
};

// == Export
export default App;
