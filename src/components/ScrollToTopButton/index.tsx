import { useState, useEffect } from 'react';
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

	return visible ? (
		<div className="scrollToTop cursorPointer textCenter" onClick={scrollToTop}>
			<i className="scrollToTop__icon fas fa-chevron-up" />
		</div>
	) : null;
};

export default ScrollToTopButton;
