import logoLol from '@/assets/images/logoLol.png';
import logoSlipix from '@/assets/images/logoTrollpicks.png';

const HomeHeader = () => {
	return (
		<div className="flex justify-center bg-bgColor mb-3em mt-1px w-100vw p-.3em">
			<img className="w-5% drop-shadow-filterLogo" src={logoLol} alt="" />
			<h1 className='h1 px-8'>Bienvenue sur League of trollpicks</h1>
			<img className="w-5% drop-shadow-filterLogo rounded-1/2" src={logoSlipix} alt="Slipix" />
		</div>
	);
};

export default HomeHeader;
