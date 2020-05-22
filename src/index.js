// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
import App from 'src/components/App';
// import store from 'src/store';

// == Render
render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
