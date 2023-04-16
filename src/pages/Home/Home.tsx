import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';
import './home.scss';

// import
import HomeHeader from '@pages/Home/HomeHeader/HomeHeader';
import TrendyVideo from '@pages/Home/TrendyVideo/TrendyVideo';
import SocialNetwork from '@components/SocialNetwork/index';
import Publicity from '@pages/Home/Advertising/index';

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
		>
			<div className="home">
				<HomeHeader />
				<div className="home__introduction__content">
					<p>Le site parfait pour <strong className="home__introduction__content__important">apprendre</strong> et <strong className="home__introduction__content__important">maîtriser</strong> les trollpicks !</p><br />
					<p className="home__introduction__content__italic">"C’est en achetant n’importe quoi qu’on OneShot n’importe qui" <span className="home__introduction__content__important">-Slipix</span></p>
				</div>
				<TrendyVideo />
				<h2>Mes réseaux sociaux et plateformes</h2>
				<SocialNetwork />
				<Publicity />
			</div>
		</motion.div>
	);
};

export default Home;
