import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

// import
import HomeHeader from '@pages/Home/HomeHeader';
import TrendyVideo from '@pages/Home/TrendyVideo';
import SocialNetwork from '@components/SocialNetwork/index';
import BannerDiscord from '@pages/Home/BannerDiscord';

const Home = () => {
	useTitle('Accueil');
	return (
		<motion.div
			key="home"
			initial="out"
			animate="in"
			exit="exit"
			variants={animationOne}
			transition={transition}
			className='text'
		>
			<div className='flex items-center flex-col'>
				<HomeHeader />
				<div className="flex items-center flex-col rounded-md border border-solid border-gold bg-bgCard mb-4em p-1em text-2xl">
					<p className='block p-y-.3em'>Le site parfait pour <strong className="gold">apprendre</strong> et <strong className="gold">maîtriser</strong> les trollpicks !</p>
					<p className="block p-y-.3em">&quot;C’est en achetant n’importe quoi qu’on OneShot n’importe qui&quot; <span className="gold">-Slipix</span></p>
				</div>
				<TrendyVideo />
				<SocialNetwork />
				<BannerDiscord />
			</div>
		</motion.div>
	);
};

export default Home;
