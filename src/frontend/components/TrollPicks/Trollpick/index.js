
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { pipe } from 'src/utils/selectors';
import { useTitle } from 'src/hooks/useTitle';
import './xinAutoroute.scss';
import Loader from 'src/frontend/components/Loader';

const XinAutoroute = ({
  stateNameTrollpick,
  fetchOneTrollpick,
  trollpick,
  setTrollpickIsLoad,
  trollpickIsLoad,
}) => {
  const slug = useParams();
  // permet de récupérer le nom du trollpicks dans l'url

  stateNameTrollpick(slug);
  useEffect(() => {
    fetchOneTrollpick();
    return () => {
      setTrollpickIsLoad();
    };
  }, []);
  // useTitle(`Trollpicks - ${trollpick[0].name}`);
  const indexRune = [0, 1, 2, 3, 4, 5];
  useTitle('Trollpicks');

  return (

    <div className="trollpick">
      {!trollpickIsLoad && <Loader />}
      {trollpickIsLoad && (
        <>
          <div className="breadcrumb">
            <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
            <Link className="breadcrumb__link" to="/trollpicks"> trollpicks</Link> &gt;
            {trollpick[0].name}
          </div>
          <h1 className="globalTitle-page">{trollpick[0].name}</h1>,
          <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est Coach Slipix et on va parler de <span className="green">{trollpick[0].name_intro}</span> {trollpick[0].name_intro2} dans League of Legends !</p>
          <img className="logo" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick[0].logo}`} alt="" />
          <div className="backgroundParagraphe">
            <p className="intro">{parse(trollpick[0].intro_intro)}</p>
            {pipe(trollpick[0].intro_content).map((content) => (
              <p className="paragraph" key={content}>{parse(content)}</p>
            ))}
            <div className="trollpick__pictures">
              {pipe(trollpick[0].intro_picture).map((picture) => (
                <img className={`trollpick__pictures__${trollpick[0].name_intro}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${picture}`} key={picture} alt="" />
              ))}
            </div>
          </div>
          <div className="backgroundParagraphe trollpick__runes">
            <h2><i className="fas fa-scroll icons__rune" />La page de rune<i className="fas fa-scroll icons__rune" /></h2>
            <p className="paragraph">{trollpick[0].rune_intro}</p>
            <img className="trollpick__pictures__rune" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick[0].rune_picture}`} alt="" />
            <div className="trollpick__runes__list">
              <ul>
                {indexRune.map((id) => (
                  <div className="trollpick__runes__list__content trollpick__runes__list__border" key={id}>
                    <img className="trollpick__pictures" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/runes/${pipe(trollpick[0].rune_iconRune)[id]}`} alt="" />
                    <li className="paragraph "><span className={`definition ${pipe(trollpick[0].rune_colorName)[id]}`}>{pipe(trollpick[0].rune_nameRune)[id]} :</span>{pipe(trollpick[0].rune_contentRune)[id]}</li>
                  </div>
                ))}
                <li className="paragraph">{trollpick[0].rune_contentEnd}</li>
              </ul>
            </div>
          </div>
          <div className="backgroundParagraphe">
            <h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
            {pipe(trollpick[0].gameplay_intro).map((content) => (
              <p className="paragraph" key={content}>{parse(content)}</p>
            ))}
            <div className="trollpick__gameplay__content">
              {pipe(trollpick[0].gameplay_content).map((content) => (
                <p className="paragraph" key={content}>{parse(content)}</p>
              ))}

              {/* Pour Thresh */}
              {trollpick[0].gameplay_method === 2 && (
              <>
                <img className="trollpick__pictures__capture" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${pipe(trollpick[0].gameplay_contentImage)[0]}`} alt="" />
                <div>{parse(trollpick[0].gameplay_content2)}</div>
                <img className="trollpick__pictures__capture" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${pipe(trollpick[0].gameplay_contentImage)[1]}`} alt="" />
                <p className="paragraph">{parse(trollpick[0].gameplay_content3)}</p>
              </>
              )}
              {/* Pour Xin Zhao */}
              {(trollpick[0].gameplay_method === 1) && (
              <>
                <img className="trollpick__pictures__trollContent" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick[0].gameplay_contentImage}`} alt="" />
                <div>{parse(trollpick[0].gameplay_content2)}</div>
              </>
              )}
              {trollpick[0].gameplay_method === 3 && (
                <p className="paragraph gold">{trollpick[0].gameplay_content2}</p>
              )}
              {trollpick[0].gameplay_method === 4 && (
                <>
                  <div className="lucianMissiles__gameplay__content__important">{parse(trollpick[0].gameplay_content2)}</div>
                  <p className="paragraph gold">{trollpick[0].gameplay_content3}</p>
                </>
              )}
              {trollpick[0].gameplay_method === 5 && (
              <>
                <img className={`trollpick__pictures__capture trollpick__pictures__capture__${trollpick[0].name_intro}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${pipe(trollpick[0].gameplay_contentImage)[0]}`} alt="" />
                  {pipe(trollpick[0].gameplay_content2).map((content) => (
                    <p className="paragraph">{parse(content)}</p>
                  ))}
                <img className={`trollpick__pictures__capture trollpick__pictures__capture__${trollpick[0].name_intro}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${pipe(trollpick[0].gameplay_contentImage)[1]}`} alt="" />
                {pipe(trollpick[0].gameplay_content3).map((content) => (
                  <p className="paragraph">{parse(content)}</p>
                ))}
              </>
              )}
            </div>
            {trollpick[0].gameplay_method === 4 ? (
              pipe(trollpick[0].gameplay_introVideo).map((content) => (
                <p className="paragraph">{content}</p>
              ))
            ) : (
              <p className="paragraph afterYoutube">{trollpick[0].gameplay_introVideo}</p>
            )}
            <div className="introTrollpickYoutube" />
            {pipe(trollpick[0].gameplay_video).map((content) => (
              <>
                <Youtube videoId={content} SameSite="" key={content} />
                <div className="betweenYoutube" />
              </>
            ))}
          </div>
          <div className="backgroundParagraphe">
            <h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
            {pipe(trollpick[0].weakness_content).map((content) => (
              <p className="paragraph" key={content}>{parse(content)} </p>
            ))}
            {trollpick[0].weakness_method === 1 ? (
              <>
                <Youtube videoId={trollpick[0].weakness_picture} SameSite="" />
                <div className="afterYoutube" />
              </>
            ) : (
              <img className={`trollpick__pictures__trollWeakness trollpick__pictures__trollWeakness__${trollpick[0].name_intro}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick[0].weakness_picture}`} alt="" />
            )}
            {pipe(trollpick[0].weakness_end).map((content) => (
              <p className="paragraph" key={content}>{parse(content)}</p>
            ))}
          </div>

          <div className="backgroundParagraphe">
            <p className="paragraph">Amusez vous bien et j'espère que cette présentation de {trollpick[0].name} vous aura donné envie d'essayer le champion.</p>
            <img className={`trollpick__pictures__end trollpick__pictures__end__${trollpick[0].name_intro}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/trollpicks/${trollpick[0].end_picture}`} alt="" />
            <p className="end">N'hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
          </div>
        </>
      )}
    </div>
  );
};

XinAutoroute.propTypes = {
  stateNameTrollpick: PropTypes.func.isRequired,
  fetchOneTrollpick: PropTypes.func.isRequired,
  setTrollpickIsLoad: PropTypes.func.isRequired,
  trollpickIsLoad: PropTypes.bool.isRequired,
  trollpick: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      name_intro: PropTypes.string.isRequired,
      name_intro2: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      intro_picture: PropTypes.string.isRequired,
      intro_intro: PropTypes.string.isRequired,
      intro_content: PropTypes.string.isRequired,
      rune_intro: PropTypes.string.isRequired,
      rune_picture: PropTypes.string.isRequired,
      rune_iconRune: PropTypes.string.isRequired,
      rune_colorName: PropTypes.string.isRequired,
      rune_nameRune: PropTypes.string.isRequired,
      rune_contentRune: PropTypes.string.isRequired,
      rune_contentEnd: PropTypes.string.isRequired,
      gameplay_method: PropTypes.number.isRequired,
      gameplay_intro: PropTypes.string.isRequired,
      gameplay_introVideo: PropTypes.string.isRequired,
      gameplay_video: PropTypes.string.isRequired,
      gameplay_content: PropTypes.string.isRequired,
      gameplay_content2: PropTypes.string.isRequired,
      gameplay_content3: PropTypes.string.isRequired,
      gameplay_contentImage: PropTypes.string.isRequired,
      weakness_method: PropTypes.number.isRequired,
      weakness_content: PropTypes.string.isrequired,
      weakness_picture: PropTypes.string.isRequired,
      weakness_end: PropTypes.string.isRequired,
      end_picture: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default XinAutoroute;
