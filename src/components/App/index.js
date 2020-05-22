// == Import npm
import React from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Slideshow from 'src/components/Slideshow';
import Partenaires from 'src/components/Partenaires';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Presentation from 'src/components/Presentation';
import News from 'src/components/News';
import Tutoriels from 'src/components/Tutoriels';
import Jungle from 'src/components/Tutoriels/Jungle';

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

  const appClass = classNames('app', {
    'app--home': isHome,
    'app--presentation': isPresentation,
    'app--news': isNews,
    'app--tutoriels': isTutoriel,
    'app--jungle': isJungle,
    // 'app--error': isError,
  });

  return (
    <div className="app">
      {/* <Slideshow /> */}
      <div className={appClass}>
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>

    </div>
  );
};

// == Export
export default App;
