import logoLol from '@/assets/images/logoLol.png';
import logoSlipix from '@/assets/images/logoSlipix.png';

const HomeHeader = () => {
	return (
		<div className="home__introduction">
			<img className="home__introduction__logo" src={logoLol} alt="" />
			<h1>Bienvenue sur League of trollpicks</h1>
			<img className="home__introduction__logo home__introduction__logoSlipix " src={logoSlipix} alt="Slipix" />
		</div>
	);
};

export default HomeHeader;
