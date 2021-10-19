import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.center}>
      <p>© Slipix 2020/2021 - Tous droits réservés</p>
      <p>© League of Legends images 2020 - Tous droits réservés</p>
    </div>
    <p><Link className="breadcrumb__link" to="/mentions-legales">Mentions Légales</Link></p>
  </div>
)

export default Footer
