import React from 'react';
import { motion } from 'framer-motion';

import { useTitle } from 'src/hooks/useTitle';
import { animationThree } from 'src/utils/animations';
import './news.scss';

// images
import alpha from 'src/assets/images/news/alpha.jpg';
import cestNormal from 'src/assets/images/news/cestNormal.jpg';
import lesDegats from 'src/assets/images/news/lesDegats.jpg';
import poignona from 'src/assets/images/news/poignona.jpg';

const listVideo = [
  {
    link: 'https://youtu.be/kvn4p1-6ThA',
    title: 'Duo avec Wakz',
    content: "Vous n'êtes pas prêts !",
    picture: `${alpha}`,
  },
  {
    link: 'https://youtu.be/VONlsy2yZR4',
    title: 'Amoumou nucléaire',
    content: 'Des oneshots explosifs !',
    picture: `${cestNormal}`,
  },
  {
    link: 'https://www.youtube.com/watch?v=6yQWJw7jn0U',
    title: 'Lulucleaire',
    content: 'Enorminus les dégats !',
    picture: `${lesDegats}`,
  },
  {
    link: 'https://www.youtube.com/watch?v=vePP8SmsYkE',
    title: 'Poignona',
    content: 'Indestructible !',
    picture: `${poignona}`,
  },
];


const News = () => {
  useTitle('Nouveautés');
  return (
    <motion.div
      key="new"
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <div className="news">
        <h1 className="globalTitle-page">Nouveautés</h1>
        <h3>Vous trouverez ici mes vidéos du moment</h3>
        <div className="news__cards">
          <div className="news__cards__ligne">
            {listVideo.map((data) => (
              <a href={data.link} target="_blanc">
                <div className="news__cards__card news__cards__first">
                  <h2 className="news__cards__card__title news__cards__first__title  red">{data.title}</h2>
                  <img src={data.picture} alt="" />
                  <p className="news__cards__card__content">{data.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default News;
