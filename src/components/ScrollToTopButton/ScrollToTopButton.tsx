import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

const ScrollToTopButton = () => {
	const { y: pageYOffset } = useWindowScroll();
	const [visible, setVisiblity] = useState(false);
	const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};

	useEffect(() => {
		if (pageYOffset > 400) {
			setVisiblity(true);
		}
		else {
			setVisiblity(false);
		}
	});

	return visible ? (
		<button type='button' className="cursor-grabbing position-fixed bg-#8b0000 text-white w-50px h-50px rounded-100% text-white bottom-12px left-48.75% border-none drop-shadow-2xl" onClick={scrollToTop}>
			<i className="fas fa-chevron-up text-1.1rem animate-bounce" />
		</button>
	) : null;
};

export default ScrollToTopButton;
