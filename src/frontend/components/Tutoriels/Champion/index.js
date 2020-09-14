import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { test } from 'src/utils/selectors';
import Loader from 'src/frontend/components/Loader';
import Youtube from 'src/frontend/components/Youtube';
import './zac.scss';

// images
import logoLol from 'src/assets/images/logoLol.png';

const Champion = ({
  fetchOneChampion,
  champion,
  setChampionIsLoad,
  championIsLoad,
  stateName,
}) => {
  const slug = useParams();
  // permet de récupérer le nom du champion dans l'url
  stateName(slug);
  useEffect(() => {
    fetchOneChampion();
    return () => {
      setChampionIsLoad();
    };
  }, []);

  return (

    <div className="zac">
      {!championIsLoad && <Loader />}
      {championIsLoad && (
        <>
          <div className="breadcrumb">
            <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
            <Link className="breadcrumb__link" to="/tutoriels-champions"> Tutoriels champions  </Link> &gt;
            <Link className="breadcrumb__link" to={`/tutoriels-champions/${champion[0].lane}`}> {champion[0].lane} </Link> &gt;
            { champion[0].name}
          </div>
          <div className="zac__title">
            <img src={logoLol} alt="" />
            <h1 className="globalTitle-page">Tutoriel {champion[0].name}</h1>
            <img className="zac__title__zac" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].pictureHead}`} alt="" />
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
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].sort_passif_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">Passif : <span className="gold">{champion[0].sort_passif_name}</span></p><br />
                  <p>{champion[0].sort_passif_content}</p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].sort_a_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">A : <span className="gold">{champion[0].sort_a_name}</span></p><br />
                  <p>{champion[0].sort_a_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].sort_z_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">Z : <span className="gold">{champion[0].sort_z_name}</span></p><br />
                  <p>{champion[0].sort_z_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].sort_e_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">E : <span className="gold">{champion[0].sort_e_name}</span></p><br />
                  <p>{champion[0].sort_e_content}
                  </p>
                </div>
              </div>
              <div className="zac__content__skill__content">
                <div className="zac__content__skill__content__left">
                  <img src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/${champion[0].sort_r_picture}`} alt="" />
                </div>
                <div className="zac__content__skill__content__right">
                  <p className="zac__content__skill__content__right__title">R : <span className="gold">{champion[0].sort_r_name}</span></p><br />
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
                      <p><span className="dashes gold">-</span>{strengths}</p>
                    ))}
                  </div>
                </div>
                <div className="zac__content__asset__list__right">
                  <h4><i className="fas fa-minus-circle zac__content__asset__list__right__icon" />Faiblesses</h4>
                  <div className="zac__content__asset__list__right__content">
                    {test(champion[0].weakness).map((weaknes) => (
                      <p><span className="dashes gold">-</span>{weaknes}</p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            <div className="zac__content__carry">
              <h4>Comment Carry avec {champion[0].name} ?</h4>
              <div className="zac__content__carry__content">
                <div className="zac__content__carry__content__left">
                  <Youtube videoId={test(champion[0].youtube_identifiant)[0]} SameSite="" />
                </div>
                <div className="zac__content__carry__content__right">
                  <h6>{champion[0].youtube_intro}</h6>
                  <div className="zac__content__carry__content__right__content">
                    {champion[0].name === 'zed' && (
                      <p>{test(champion[0].youtube_content_coaching)[0]}</p>
                    )}
                    {champion[0].name !== 'zed' && (
                      <>
                        <p>voici un <span className="gold">gameplay explicatif</span> très complet pour
                          savoir comment jouer {champion[0].name} directement sur le terrain !
                        </p>

                        <p>Ce gameplay est realisé par <span className="gold">{champion[0].youtube_actor}</span>, un
                          joueur haut elo de {champion[0].name}
                        </p>
                      </>
                    )}
                    <br />
                    <p>Si vous avez des questions n'hésitez pas à les poser
                      directement en commentaires sur la <span className="gold">vidéo YouTube</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* VIDEO ABONNES : 2ième vidéo de Lee-Sin, lux et Hecarim et Ahri  */}
            {test(champion[0].youtube_identifiant)[1] && (champion[0].name === 'lee-sin' || champion[0].name === 'lux' || champion[0].name === 'hecarim' || champion[0].name === 'ahri') && (
              <div className="zac__content__carry">
                <div className="zac__content__carry__content">
                  <div className="zac__content__carry__content__left">
                    <Youtube videoId={test(champion[0].youtube_identifiant)[1]} SameSite="" />
                  </div>
                  <div className="zac__content__carry__content__right secondary">
                    <div className="zac__content__carry__content__right__content">
                      <p>Voici un <span className="gold">coaching d'un abonné</span> jouant {champion[0].name}.
                      </p>
                      <p>{champion[0].youtube_content_coaching}</p>
                      <br />
                      <p>Si vous avez des questions n'hésitez pas à les poser
                        directement en commentaires sur la <span className="gold">vidéo YouTube</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* 2ième VIDEO TUTO  de Ekko, Yasuo, KATARINA */}
            {test(champion[0].youtube_identifiant)[1] && (champion[0].name === 'ekko' || champion[0].name === 'yasuo' || champion[0].name === 'katarina') && (
              <div className="zac__content__carry">
                <div className="zac__content__carry__content">
                  <div className="zac__content__carry__content__left">
                    <Youtube videoId={test(champion[0].youtube_identifiant)[1]} SameSite="" />
                  </div>
                  <div className="zac__content__carry__content__right secondary">
                    <div className="zac__content__carry__content__right__content">
                      <p>voici un autre <span className="gold">gameplay explicatif</span> très complet pour
                        savoir comment jouer {champion[0].name} directement sur le terrain !
                      </p>
                      <p>Ce gameplay est realisé par <span className="gold">{champion[0].youtube_actor}</span>, un
                        joueur haut elo de {champion[0].name}
                      </p><br />
                      <p>Si vous avez des questions n'hésitez pas à les poser
                        directement en commentaires sur la <span className="gold">vidéo YouTube</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* 3ième vidéo de LEE-SIN et YASUO, KATARINA  */}
            {(champion[0].name === 'lee-sin' || champion[0].name === 'yasuo' || champion[0].name === 'katarina') && (
            <div className="zac__content__carry">
              <div className="zac__content__carry__content">
                <div className="zac__content__carry__content__left">
                  <Youtube videoId={test(champion[0].youtube_identifiant)[2]} SameSite="" />
                </div>
                <div className="zac__content__carry__content__right secondary">
                  <div className="zac__content__carry__content__right__content">
                    {champion[0].name === 'yasuo' && (
                      <p>{test(champion[0].youtube_content_coaching)[0]}
                      </p>
                    )}
                    {champion[0].name === 'lee-sin' && (
                      <p>{test(champion[0].youtube_content_coaching)[1]}
                      </p>
                    )}
                    {champion[0].name === 'katarina' && (
                      <>
                        <p>voici un autre <span className="gold">gameplay explicatif</span> très complet pour
                          savoir comment jouer {champion[0].name} directement sur le terrain !
                        </p>
                        <p>Ce gameplay est realisé par <span className="gold">{champion[0].youtube_actor}</span>, un
                          joueur haut elo de {champion[0].name}
                        </p>
                      </>
                    )}
                    <br />
                    <p>Si vous avez des questions n'hésitez pas à les poser
                      directement en commentaires sur la <span className="gold">vidéo YouTube</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            )}
            {/* 4ième vidéo de YASUO et KATARINA  */}
            {(champion[0].name === 'yasuo' || champion[0].name === 'katarina') && (
              <div className="zac__content__carry">
                <div className="zac__content__carry__content">
                  <div className="zac__content__carry__content__left">
                    <Youtube videoId={test(champion[0].youtube_identifiant)[3]} SameSite="" />
                  </div>
                  <div className="zac__content__carry__content__right secondary">
                    <div className="zac__content__carry__content__right__content">
                      {champion[0].name === 'yasuo' && (
                        <>
                          <p>Voici un coaching d'un abonné jouant Yasuo Midlane.</p>
                          <p>{test(champion[0].youtube_content_coaching)[1]}</p>
                        </>
                      )}
                      {champion[0].name === 'katarina' && (
                      <>
                        <p>voici un autre <span className="gold">gameplay explicatif</span> très complet pour
                          savoir comment jouer {champion[0].name} directement sur le terrain !
                        </p>
                        <p>Ce gameplay est realisé par <span className="gold">{champion[0].youtube_actor}</span>, un
                          joueur haut elo de {champion[0].name}
                        </p>
                      </>
                      )}
                      <br />
                      <p>Si vous avez des questions n'hésitez pas à les poser
                        directement en commentaires sur la <span className="gold">vidéo YouTube</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SERIES DE ZED  */}
            {champion[0].name === 'zed' && (
              <>
                <p className="intro afterYoutube zed">VOICI UNE SERIE DE GAMEPLAYS EXPLICATIFS TRES COMPLETS POUR SAVOIR COMMENT JOUER ZED DIRECTEMENT SUR LE TERRAIN !</p>
                <p className="paragraph">Si vous avez des questions n'hésitez pas à les poser directement en commentaires sur la vidéo YouTube</p>
                {test(champion[0].youtube_identifiant).map((zed) => (
                  <>
                    {test(champion[0].youtube_identifiant).indexOf(zed) !== 0 && (
                    <div className="zac__content__carry">
                      <div className="zac__content__carry__content">
                        <div className="zac__content__carry__content__center">
                          <Youtube videoId={zed} SameSite="" />
                        </div>
                      </div>
                    </div>
                    )}
                  </>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Champion.propTypes = {
  fetchOneChampion: PropTypes.func.isRequired,
  championIsLoad: PropTypes.bool.isRequired,
  setChampionIsLoad: PropTypes.func.isRequired,
  stateName: PropTypes.func.isRequired,
  champion: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lane: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      pictureHead: PropTypes.string.isRequired,
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
      youtube_identifiant: PropTypes.string.isRequired,
      youtube_actor: PropTypes.string.isRequired,
      youtube_intro: PropTypes.string.isRequired,
      youtube_content_coaching: PropTypes.string.isRequired,
      strength: PropTypes.string.isRequired,
      weakness: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Champion;
