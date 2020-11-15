import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__containDroit">
      <p>© Slipix 2020 - Tous droits réservés</p>
      <p>© League of Legends images 2020 - Tous droits réservés</p>
    </div>
    <p><Link className="breadcrumb__link" to="/mentions-legales">Mentions Légales</Link></p>
  </div>
);

export default Footer;
