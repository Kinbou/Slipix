
import React, { useId } from 'react';

import Boom from '@/assets/images/picturesYoutube/boom.jpg';
import Legolash from '@/assets/images/picturesYoutube/legolash.jpg';
import Morgrana from '@/assets/images/picturesYoutube/morgrana.jpg';
import Tahmquiche from '@/assets/images/picturesYoutube/tahmquiche.jpg';

interface VideosProps {
	key: string,
	image: React.ReactNode,
	title: string,
	url: string
}

const TrendyVideo = () => {
	const videos: VideosProps[] = [
		{
			key: useId(),
			image: Boom,
			title: 'Boom',
			url: 'https://www.youtube.com/watch?v=OVFiLjXNgTQ',
		},
		{
			key: useId(),
			image: Legolash,
			title: 'Legolash',
			url: 'https://www.youtube.com/watch?v=9_2jTP6FEVc',
		},	{
			key: useId(),
			image: Morgrana,
			title: 'Morgrana',
			url: 'https://www.youtube.com/watch?v=U0RruXXnfs0',
		},	{
			key: useId(),
			image: Tahmquiche,
			title: 'Tahmquiche',
			url: 'https://www.youtube.com/watch?v=EA7D1EHgp1s',
		},
	];
	return (
		<div className='bg-bgWhite flex flex-col items-center rounded-md border border-solid border-gold mb-5em p-2rem m-x-5rem'>
			<h2 className='text-gold h2'>Découvrez les vidéos tendance trollpicks</h2>
			<div className="flex items-center justify-center flex-wrap w-80%">
				{videos.map((video) => (
					<a key={video.key} className='contents' href={video.url} target="_blanc"><img className='rounded-md border border-solid m-1em w-35% border-transparent transition-all hover:border-blue hover:scale-103 hover:duration-200 duration-300' src={video.image} alt={video.title} /></a>
				))}
			</div>
		</div>
	);
};

export default TrendyVideo;


