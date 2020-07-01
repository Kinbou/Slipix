import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { test } from 'src/utils/selectors';
// import { truncateText, formatDate, slugifyId } from 'src/utils/selectors';
import Loader from 'src/frontend/components/Loader';
// import YouTube from 'react-youtube';
import Youtube from '../../Youtube';
import logoLol from '../../../../../assets/images/logoLol.png';

import './zac.scss';


const Zac = ({
  fetchOneChampion,
  champion,
  appIsLoading,
  setAppLoading,
  stateName,
}) => {
  const slug = useParams();
  // permet de récupérer le nom du champion dans l'url
  stateName(slug);
  // console.log(slug.name);
  useEffect(() => {
    fetchOneChampion();
    console.log('passage dans le useEffect');
    return () => {
      setAppLoading();
    };
  }, []);

  // if (appIsLoading) {
  // }

  return (

    <div className="zac">
      {!appIsLoading && <Loader />}
      {appIsLoading && (
        <>
          <div className="zac__breadcrumb">
            <Link to="/">Accueil ></Link>
            <Link to="/tutoriels-champions"> Tutoriels champions > </Link>
            <Link to="/tutoriels-jungle"> Jungle > </Link>
            {champion[0].name}
          </div>
          <div className="zac__title">
            <img src={logoLol} alt="" />
            <h1 className="">Tutoriel {champion[0].name}</h1>
            <img className="zac__title__zac" src={`http://localhost:8090/images/champions/${champion[0].picture}`} alt="" />
          </div>
          <h3>Comment bien jouer {champion[0].name} ? C'est ici que ça se passe !</h3>
          <p className="zac__definition">{champion[0].intro}</p>
          <div className="zac__content">
            <div className="zac__content__history">
              <h4>L'histoire du champion</h4>
              <p className="zac__content__history__content">{champion[0].history}</p>
            </div>
            <div className="zac__content__skill">
              <h4>Les compétences</h4>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`http://localhost:8090/images/champions/${champion[0].sort_passif_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">Passif : <span>{champion[0].sort_passif_name}</span></p><br />
                  <p>{champion[0].sort_passif_content}</p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`http://localhost:8090/images/champions/${champion[0].sort_a_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">A : <span>{champion[0].sort_a_name}</span></p><br />
                  <p>{champion[0].sort_a_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`http://localhost:8090/images/champions/${champion[0].sort_z_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">Z : <span>{champion[0].sort_z_name}</span></p><br />
                  <p>{champion[0].sort_z_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`http://localhost:8090/images/champions/${champion[0].sort_e_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">E : <span>{champion[0].sort_e_name}</span></p><br />
                  <p>{champion[0].sort_e_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`http://localhost:8090/images/champions/${champion[0].sort_r_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">R : <span>{champion[0].sort_r_name}</span></p><br />
                  <p>{champion[0].sort_r_content}
                  </p>
                </div>
              </div>
            </div>
            <div className="zac__content__asset">
              <div className="zac__content__asset__list">
                <div className="zac__content__asset__list__left">
                  <h4 className="zac__content__asset__list__left__force"><i className="fas fa-plus-circle zac__content__asset__list__left__force__icon" />Forces</h4>
                  <div className="zac__content__asset__list__left__content">
                    {test(champion[0].strength).map((strengths) => (
                      <p><span className="dashes">-</span>{strengths}</p>
                    ))}
                  </div>
                </div>
                <div className="zac__content__asset__list__right">
                  <h4><i className="fas fa-minus-circle zac__content__asset__list__right__icon" />Faiblesses</h4>
                  <div className="zac__content__asset__list__right__content">
                    {test(champion[0].weakness).map((weaknes) => (
                      <p><span className="dashes">-</span>{weaknes}</p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            <div className="zac__content__carry">
              <h4>Comment Carry avec {champion[0].name} ?</h4>
              <div className="zac__content__carry__content">
                <div className="zac__content__carry__content__left">
                  <Youtube videoId={test(champion[0].youtube_id)[0]} SameSite="" />
                </div>
                <div className="zac__content__carry__content__right">
                  <h6>{champion[0].youtube_intro}</h6>
                  <div className="zac__content__carry__content__right__content">
                    <p>voici un <span>gameplay explicatif</span> très complet pour
                      savoir comment jouer {champion[0].name} directement sur le terrain !
                    </p>
                    <p>Ce gameplay est realisé par <span>{champion[0].youtube_acteur}</span>, un
                      joueur haut elo de {champion[0].name}
                    </p><br />
                    <p>Si vous avez des questions n'hésitez pas à les poser
                      directement en commentaires sur la <span>vidéo YouTube</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Ajout potentiel d'autres vidéo  */}
            {test(champion[0].youtube_id)[1] && (
              <div className="zac__content__carry__secondary">
                <div className="zac__content__carry__secondary__content">
                  <Youtube videoId={test(champion[0].youtube_id)[1]} SameSite="" />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Zac.propTypes = {
  fetchOneChampion: PropTypes.func.isRequired,
  appIsLoading: PropTypes.bool.isRequired,
  setAppLoading: PropTypes.func.isRequired,
  stateName: PropTypes.func.isRequired,
  champion: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      history: PropTypes.string.isRequired,
      sort_passif_picture: PropTypes.string.isRequired,
      sort_passif_name: PropTypes.string.isRequired,
      sort_passif_content: PropTypes.string.isRequired,
      sort_a_picture: PropTypes.string.isRequired,
      sort_a_name: PropTypes.string.isRequired,
      sort_a_content: PropTypes.string.isRequired,
      sort_z_picture: PropTypes.string.isRequired,
      sort_z_name: PropTypes.string.isRequired,
      sort_z_content: PropTypes.string.isRequired,
      sort_e_picture: PropTypes.string.isRequired,
      sort_e_name: PropTypes.string.isRequired,
      sort_e_content: PropTypes.string.isRequired,
      sort_r_picture: PropTypes.string.isRequired,
      sort_r_name: PropTypes.string.isRequired,
      sort_r_content: PropTypes.string.isRequired,
      youtube_id: PropTypes.string.isRequired,
      youtube_acteur: PropTypes.string.isRequired,
      youtube_intro: PropTypes.string.isRequired,
      strength: PropTypes.string.isRequired,
      weakness: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Zac;
