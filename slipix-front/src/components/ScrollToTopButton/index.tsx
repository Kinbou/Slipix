import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import './scrollToTopButton.scss';

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    }
    else {
      setVisiblity(false);
    }
  });

  if (!visible) {
    return false;
  }

  return (
    <div className="scrollToTop cursorPointer textCenter" onClick={scrollToTop}>
      <i className="scrollToTop__icon fas fa-chevron-up" />
    </div>
  );
};

export default ScrollToTopButton;
