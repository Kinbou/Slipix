import React from 'react';

// images
import zac from '../../../assets/images/zac.jpg';

import './jungle.scss';

const Jungle = () => (
  <div className="jungle">
    <h1>Tutoriels Jungle</h1>
    <div className="jungle__cards">
      <div className="jungle__cards__card">
        <img src={zac} alt="" />
        <h2>Zack</h2>
      </div>
    </div>
    <div>TEST</div>
  </div>
);

export default Jungle;
