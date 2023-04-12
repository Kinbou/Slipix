import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './presentation.scss';

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
			className="presentation"
			initial="out"
			animate="in"
			exit="out"
			key="presentation"
			variants={animationOne}
			transition={transition}
		>
			<h1 className="globalTitle-page">Présentation</h1>
			<div className="presentation__background">
				<h2>Salut c&apos;est <span className="red">Slipix</span>  bienvenue sur LEAGUE OF TROLLPICKS !</h2>
				<img className="presentation__coaching" src={logoSlipix} alt="" />
				<p>Joueur de League of Legends depuis 2014, <span className='red'>créateur de trollpicks</span> depuis 2015.</p>
				<p>Coach League of Legends de 2017 à 2019, animateur <span className='twitch'>twitch</span>/<span className='red'>youtube</span> depuis 2019.</p>
				<br />
				<p>J&apos;ai toujours inventé des &quot;picks/builds&quot; originaux sur tous les jeux que j&apos;ai joué et ça depuis mon enfance.</p><br />
				<p>Ça a commencé sur <span className='orange'>Pokemon</span> version <span className='red'>Rouge Feu</span> ou mon équipe était composée seulement de Pokemon Gros.</p>
				<p>Ça a suivit sur <span className='orange'>Diablo 2</span> avec des stuffs PVP originaux puis sur Dofus également et même des classes d&apos;armes ridicules pendant mon époque <span className='orange'>Call of Duty</span> !</p>
				<br />
				<p>Vous l&apos;aurez compris j&apos;aime joué différement, à ma sauce. Pourquoi ? Tout simplement parce que ça m&apos;amuse, c&apos;est le but d&apos;un jeu non ?</p>
				<p>Jamais j&apos;aurai imaginé un jour vivre des trollpicks sur League of legends et pourtant ...</p>
				<br />
				<p>Aujourd&apos;hui je suis le CEO de la <span className='blue'>TDS E-SPORT</span><img src={tds} alt="" className="presentation__image__tds" /> (TEAM DU SUD) avec <span className='red'>Sixen</span> qui a pour but de rejoindre la LFL!</p><br />
				<p>Je vis grâce à <span className='twitch'>Twitch</span>/<span className='red'>Youtube</span> principalement en réalisant à 80% du temps du contenu autour de mes créations. (20% c&apos;est un peu de tryhard sur Gragas)</p>
				<br />
				<p className="presentation__but">Le but de ce site est simple :<br /><br />
          - Vous partager mes <span className='green'>trollpicks</span> et mon contenu <span className='twitch'>Twitch</span>/<span className='red'>Youtube</span><br />
          - Vous donner les conseils pour reproduire les trollpicks à la perfection<br />
          - Vous montrer la vrai valeur du jeu League of Legends et son potentiel<br />
          - Vous aider avec mes <span className='orange'>guides</span> realisés par moi même et des joueurs Pro<br /><br />
          Vous trouverez des liens direct avec mes vidéos <span className="red">Youtube</span> pour
          faciliter votre navigation et votre progression.
				</p><br />
				<p>N&apos;hésitez pas à rejoindre le <a href="https://discord.com/invite/fsTYTg5" className="presentation__discord" target="_blanc">discord</a> de la <span className="red">#TEAMSLIP</span> et me suivre sur les réseaux sociaux ainsi que les plateformes <span className="presentation__youtube">Youtube</span> et <span className="presentation__twitch">Twitch</span>.</p>
				<SocialNetwork />
				<p>tout le contenu de ce site est bien évidemment gratuit, si vous désirez soutenir son avancée de plusieurs manières n&apos;hésitez pas à cliquer ici :  <Button><Link to="/me-soutenir">Me soutenir</Link></Button>
				</p> <br />
				<p>Merci pour votre lecture et j&apos;espère que ce site vous aidera grandement,
					<span className="red"> Slipix.</span>
				</p>
			</div>
		</motion.div>
	);
};

export default Presentation;
