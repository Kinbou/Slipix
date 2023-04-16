import Boom from '@/assets/images/picturesYoutube/boom.jpg';
import Legolash from '@/assets/images/picturesYoutube/legolash.jpg';
import Morgrana from '@/assets/images/picturesYoutube/morgrana.jpg';
import Tahmquiche from '@/assets/images/picturesYoutube/tahmquiche.jpg';

const TrendyVideo = () => {
	return (
		<>
			<h2>Découvrez les vidéos tendance trollpicks</h2>
			<div className="home__news">
				<a href="https://www.youtube.com/watch?v=OVFiLjXNgTQ" target="_blanc"><img src={Boom} alt="Boom" /></a>
				<a href="https://www.youtube.com/watch?v=9_2jTP6FEVc" target="_blanc"><img src={Legolash} alt="Legolash" /></a>
				<a href="https://www.youtube.com/watch?v=U0RruXXnfs0" target="_blanc"><img src={Morgrana} alt="Morgrana" /></a>
				<a href="https://www.youtube.com/watch?v=EA7D1EHgp1s" target="_blanc"><img src={Tahmquiche} alt="Tahmquiche" /></a>
			</div>
		</>
	);
};

export default TrendyVideo;


