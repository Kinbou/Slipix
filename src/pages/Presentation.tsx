import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';
import SocialNetwork from '@components/SocialNetwork/index';

// images
import tds from '@/assets/images/presentation/tds.png';
import logoSlipix from '@/assets/images/logoSlipix.png';
import Button from '@components/Buttons/Button/Button';

const Presentation = () => {
	useTitle('Présentation');
	return (
		<motion.div
			className="text text-center items-center flex flex-col"
			initial="out"
			animate="in"
			exit="out"
			key="presentation"
			variants={animationOne}
			transition={transition}
		>
			<h1 className="h1 mt-1em">Présentation</h1>
			<div className="w-70% bg-bgPresentation m-y-3em rounded-md flex flex-col items-center p-2rem">
				<h2 className='h2'>Salut c&apos;est <span className="red">Slipix</span> bienvenue sur LEAGUE OF TROLLPICKS !</h2>
				<img className="rounded-md w-18% shadow-black shadow-3xl mb-2em" src={logoSlipix} alt="" />
				<p>Joueur de League of Legends depuis 2014, <span className='red'>créateur de trollpicks</span> depuis 2015.</p>
				<p>Coach League of Legends de 2017 à 2019, animateur <span className='twitch'>twitch</span>/<span className='red'>youtube</span> depuis 2019.</p>
				<p>J&apos;ai toujours inventé des &quot;picks/builds&quot; originaux sur tous les jeux que j&apos;ai joué et ça depuis mon enfance.</p>
				<p>Ça a commencé sur <span className='orange'>Pokemon</span> version <span className='red'>Rouge Feu</span> ou mon équipe était composée seulement de Pokemon Gros.</p>
				<p>Ça a suivi sur <span className='orange'>Diablo 2</span> avec des stuffs PVP originaux puis sur Dofus également et même des classes d&apos;armes ridicules pendant mon époque <span className='orange'>Call of Duty</span> !</p>
				<br /><br />
				<p>Vous l&apos;aurez compris j&apos;aime joué différement, à ma sauce. Pourquoi ? Tout simplement parce que ça m&apos;amuse, c&apos;est le but d&apos;un jeu non ?</p>
				<p>Jamais j&apos;aurai imaginé un jour vivre des trollpicks sur League of legends et pourtant ...</p>
				<p>Aujourd&apos;hui je suis le CEO de la <span className='blue'>TDS E-SPORT</span><img src={tds} alt="" className="rounded-md w-4% ml-.5em mt-.5em -mb-.4em mr-.5em" /> (TEAM DU SUD) avec <span className='red'>Sixen</span> qui a pour but de rejoindre la LFL!</p>
				<p>Je vis grâce à <span className='twitch'>Twitch</span>/<span className='red'>Youtube</span> principalement en réalisant à 80% du temps du contenu autour de mes créations. (20% c&apos;est un peu de tryhard sur Gragas)</p>
				<ul className='flex flex-col items-start m-y-2em'>
						Le but de ce site est simple :
					<li>- Vous partager mes <span className='green'>trollpicks</span> et mon contenu <span className='twitch'>Twitch</span>/<span className='red'>Youtube</span></li>
					<li>- Vous donner les conseils pour reproduire les trollpicks à la perfection</li>
					<li>
          - Vous montrer la vrai valeur du jeu League of Legends et son potentiel</li>
					<li>          - Vous aider avec mes <span className='orange'>guides</span> realisés par moi même et des joueurs Pro.</li>
				</ul>
				<p>Vous trouverez des liens direct avec mes vidéos <span className="red">Youtube</span>pour
          faciliter votre navigation et votre progression.</p>
				<p>N&apos;hésitez pas à rejoindre le <a href="https://discord.com/invite/fsTYTg5" className="twitch" target="_blanc">discord</a> de la <span className="red">#TEAMSLIP</span> et me suivre sur les réseaux sociaux ainsi que les plateformes <span className="red">Youtube</span> et <span className="twitch">Twitch</span>.</p>
				<div className='my-2rem flex justify-center'><SocialNetwork /></div>
				<p className='mb-1em'>tout le contenu de ce site est bien évidemment gratuit, si vous désirez soutenir son avancée de plusieurs manières n&apos;hésitez pas à cliquer ici :  <Button><Link to="/me-soutenir">Me soutenir</Link></Button>
				</p>
				<p>Merci pour votre lecture et j&apos;espère que ce site vous aidera grandement,
					<span className="red"> Slipix.</span>
				</p>
			</div>
		</motion.div>
	);
};

export default Presentation;
