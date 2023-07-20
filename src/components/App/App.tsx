import { AnimatePresence } from 'framer-motion';

import ScrollToTopButton from '@components/ScrollToTopButton';
import { AppRoutes } from '@/components/App/AppRoutes';

const App = () => {
	return (
		<div className="app">
			<main className="uppercase tracking-widest leading-relaxed text-xl">
				<AnimatePresence>
					<ScrollToTopButton />
					<AppRoutes />
				</AnimatePresence>
				{/* <Analytics id="UA-176591379-1" debug> */}
				{/* </Analytics> */}
			</main>
		</div>
	);
};

export default App;
