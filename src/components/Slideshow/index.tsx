/* eslint-disable no-undef */
// @ts-ignore
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Button from '@components/Buttons/Button/Button';

import youtube from '@/assets/images/banner/youtubeSlipix.png';
import twitch from '@/assets/images/banner/twitchSlipixSlide.jpg';
import coaching from '@/assets/images/banner/CoachingSLIPIX.jpg';

const Slideshow = (): React.ReactElement => {
	const proprietes = {
		duration: 5000,
		transitionDuration: 900,
		infinite: true,
		indicators: false,
		arrows: true,
	};

	return (
		<div className="w-100%">
			<Slide {...proprietes}>
				<div className='relative'>
					<img src={youtube} alt="youtube" className="w-100%" />
					<div className="absolute left-40% text-center text-white top-30%">
						<h2 className='h2 mb-1rem'>Rejoignez moi sur Youtube !</h2>
						<Button category='youtube' type="button"><a href="https://www.youtube.com/user/DeiiZFamily" target="_blanc" >Cliquez Ici</a></Button>
					</div>
				</div>
				<div className='relative'>
					<img src={twitch} alt="twitch" className="w-100%" />
					<div className="absolute left-40% text-center text-white top-30%">
						<h2 className='h2 mb-1rem'>Rejoignez moi sur Twitch !</h2>
						<Button category='twitch'><a href="https://www.twitch.tv/slipixxx" target="_blanc">Cliquez Ici</a></Button>
					</div>
				</div>
				<div className='relative'>
					<img src={coaching} alt="coaching" className="w-100%" />
					<div className="absolute text-center text-white top-30% left-30%">
						<h2 className='h2 mb-1rem'>Rejoignez LA #TEAMSLIP SUR DISCORD !</h2>
						<p>+ de 18000 membres</p>
						<Button category='discord'><a href="https://discord.gg/xsZbWs" target="_blanc">Cliquez Ici</a></Button>
					</div>
				</div>
			</Slide>
		</div>
	);
};

export default Slideshow;
