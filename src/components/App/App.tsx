import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton';
import { AppRoutes } from '@/components/App/AppRoutes';

import '@/styles/reset.css';


const TRACKING_ID = 'G-VWTG2C936V';
ReactGA.initialize(TRACKING_ID, {
	debug: true,
});

const App = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	
	return (
		<div>
			<main className="text-white uppercase tracking-widest text">
				<AnimatePresence>
					<ScrollToTopButton />
					<AppRoutes />
				</AnimatePresence>
			</main>
		</div>
	);
};

export default App;
