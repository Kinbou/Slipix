import { useId } from 'react';
import { useLocation } from 'react-router-dom';

// images
import tiktok from '@/assets/images/socialNetwork/tiktok.png';
import twitch from '@/assets/images/socialNetwork/Twitch.png';
import twitter from '@/assets/images/socialNetwork/twitter.png';
import youtube from '@/assets/images/socialNetwork/Youtube.png';
import instagram from '@/assets/images/socialNetwork/Instagram.png';

interface ListSocialNetworkProps {
	id: string,
	title: string,
	image: string,
	url: string,
}

const SocialNetwork = () => {
	const location = useLocation();
	// return the current pathname
	const currentPath = location.pathname;
	const isHome = currentPath === '/';
	const isPresentation = currentPath === '/presentation';

	const listSocialNetwork: ListSocialNetworkProps[] = [
		{
			id: useId(),
			title: 'youtube',
			image: youtube,
			url: 'https://www.youtube.com/channel/UCA4h2qHrC9x7_ChsOZvjoZQ',
		},
		{
			id: useId(),
			title: 'twitch',
			image: twitch,
			url: 'https://www.twitch.tv/slipixxx',
		},
		{
			id: useId(),
			title: 'tiktok',
			image: tiktok,
			url: 'https://www.tiktok.com/@slipixtv',
		},
		{
			id: useId(),
			title: 'x',
			image: twitter,
			url: 'https://twitter.com/SlipixLoL',
		},
		{
			id: useId(),
			title: 'instagram',
			image: instagram,
			url: 'https://www.instagram.com/slipixlol/',
		},
	];

	return (
		<div className='border border-solid border-gold rounded w-80% bg-bgCard flex flex-col items-center py-2em'>
			<h2 className='gold h3 text-shadow-default mb-4rem'>Mes réseaux sociaux et plateformes</h2>
			<div className="flex justify-center">
				{listSocialNetwork.map((item: ListSocialNetworkProps) => (
					<div key={item.id} className="flex duration-300 flex-col justify-evenly text-center hover:duration-500 hover:shadow-3xl w-15%" data-state="#about">
						<a href={item.url} target="_blanc">
							<img src={item.image} alt={item.title} className="w-50%" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default SocialNetwork;
