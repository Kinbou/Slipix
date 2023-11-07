import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="h-80px flex text-center bg-bgColor justify-between text-.9rem xs:text-.7rem">
    <div className="text-center m-auto">
      <p className="m-auto">© Slipix 2020/2023 - Tous droits réservés</p>
      <p className="m-auto">
        © League of Legends images 2020 - Tous droits réservés
      </p>
    </div>
    <Link className="m-auto text-center hover:underline" to="/mentions-legales">
      Mentions Légales
    </Link>
  </footer>
)

export default Footer
