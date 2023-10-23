
import { useId } from 'react';

import dracolaf from '@/assets/images/picturesYoutube/dracolaf.png';
import impossibleGragas from '@/assets/images/picturesYoutube/impossibleGragas.jpg';
import merguezEzreal from '@/assets/images/picturesYoutube/merguezEzreal.jpg';
import tartibriar from '@/assets/images/picturesYoutube/tartibriar.jpg';

interface VideosProps {
	key: string,
	image: string,
	title: string,
	url: string
}

const TrendyVideo = () => {
	const videos: VideosProps[] = [
		{
			key: useId(),
			image: impossibleGragas,
			title: 'impossibleGragas',
			url: 'https://www.youtube.com/watch?v=BGmUcsaWLYQ',
		},
		{
			key: useId(),
			image: merguezEzreal,
			title: 'merguezEzreal',
			url: 'https://www.youtube.com/watch?v=xdJ1ZswDB_A&t',
		},	{
			key: useId(),
			image: dracolaf,
			title: 'dracolaf',
			url: 'https://www.youtube.com/watch?v=PwiZeYTZuGQ&t',
		},	{
			key: useId(),
			image: tartibriar,
			title: 'tartibriar',
			url: 'https://www.youtube.com/watch?v=jtnYlwWNGrw',
		},
	];
	return (
		<div className='flex flex-col items-center rounded-md border border-solid border-gold p-2rem bg-bgWhite mb-5em m-x-5rem'>
			<h2 className='text-gold h3 text-shadow-default'>Découvrez les vidéos tendance trollpicks</h2>
			<div className="flex items-center justify-center w-80% flex-wrap">
				{videos.map((video) => (
					<a key={video.key} className='contents' href={video.url} target="_blanc"><img className='rounded-md border border-solid border-transparent transition-all hover:scale-103 duration-300 m-1em w-35% hover:border-blue hover:duration-200' src={video.image} alt={video.title} /></a>
				))}
			</div>
		</div>
	);
};

export default TrendyVideo;


