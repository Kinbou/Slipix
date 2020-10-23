import React, { useEffect } from 'react';
import { useTitle } from 'src/hooks/useTitle';
import { pipe } from 'src/utils/selectors';
import Loader from 'src/frontend/components/Loader';
import PropTypes from 'prop-types';
import './thanks.scss';

import thankTroll from 'src/assets/images/thanks/thankTroll.jpg';

const Thanks = ({
  fetchAllThanks,
  setThanksIsLoad,
  thanksIsLoad,
  thanks,
}) => {
  useTitle('Remerciements');
  useEffect(() => {
    fetchAllThanks();
    return () => {
      setThanksIsLoad(false);
    };
  }, []);
  return (
    <div className="thanks">
      { !thanksIsLoad && <Loader />}
      { thanksIsLoad && (
        <>
          <h1 className="globalTitle-page">Remerciements test {thanks.thanks[0].name}</h1>
          <div className="thanks__backgroundParagraphe">

            <p className="paragraph">Yo le Slip, on a décidé de te faire une petite surprise !
            </p>
            <p className="paragraph"> voit par toi-même à quel point tu as changé l'évolution de beaucoup de joueur sur la faille de l'invocateur ;)
            </p>
            <p className="paragraph"> Alors on a qu'une chose à te dire ... reste comme tu es, et continue à faire ce que tu aimes !
            </p>
          </div>
          <div className="thanks__cards">
            {thanks.thanks.map((listThanks) => (
              <div className={`thanks__cards__card ${listThanks.borderColor}`} key={listThanks.id}>
                <div className="glass" />
                <div className="thanks__cards__card__box">
                  <div className="thanks__cards__card__box__author">

                    <img className="thanks__icon" src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/thanks/${listThanks.icon}`} alt="" />
                    <p className="thanks__cards__card__box__author__name">{listThanks.name}</p>
                  </div>
                  <div className="line" />
                  {listThanks.image !== '' && (
                  <img className={`thanks__pictures thanks__pictures__${listThanks.name}`} src={`https://backend.slipix-progresser-sur-league-of-legends.fr/images/thanks/${listThanks.image}`} alt="" />
                  )}

                  {listThanks.name === 'Soularyön'
                    ? (
                      <>
                        {pipe(listThanks.content).map((content) => (
                          // eslint-disable-next-line react/no-danger
                          <p className="thanks__cards__card__box__content" dangerouslySetInnerHTML={{ __html: content }} key={content} />
                        ))}
                      </>
                    )

                    : (<p className="thanks__cards__card__box__content">{listThanks.content}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="thanks__backgroundParagraphe">
            <p className="paragraph gold">Pour ceux et celles qui désirent faire passer un message pour Slipix sur le site n'hésitez pas à me mp directement sur  sur le serveur discord de la #teamSlip que vous pouvez retrouver directement sur la page d'accueil du site (mon pseudo: Kinbou)</p>
            <img className="thanks__pictures thanks__pictures__troll" src={thankTroll} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

Thanks.propTypes = {

  fetchAllThanks: PropTypes.func.isRequired,
  thanksIsLoad: PropTypes.bool.isRequired,
  setThanksIsLoad: PropTypes.func.isRequired,
  thanks: PropTypes.arrayOf(
    PropTypes.shape({
      thanks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          map: PropTypes.array.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,

};

export default Thanks;
