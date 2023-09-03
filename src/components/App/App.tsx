import { AnimatePresence } from 'framer-motion';

import ScrollToTopButton from '@components/ScrollToTopButton';
import { AppRoutes } from '@/components/App/AppRoutes';

const App = () => {
	return (
		<div className="app">
			<main className="text-white uppercase tracking-widest text-14px">
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
