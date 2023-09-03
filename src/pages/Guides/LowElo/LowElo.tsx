import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Youtube from '@components/Youtube';
import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

// images
import logoSlipix from '@/assets/images/guides/lowElo/logoSlipix.png';
import lowEloPicture from '@/assets/images/guides/lowElo/lowEloPicture.jpg';
import championOtp from '@/assets/images/guides/lowElo/championOtp.jpg';
import championStrong from '@/assets/images/guides/lowElo/championStrong.jpg';
import historiqueGame from '@/assets/images/guides/lowElo/historiqueGame.jpg';
import troll from '@/assets/images/guides/lowElo/troll.jpeg';
import trollRenekton from '@/assets/images/guides/lowElo/trollRenekton.jpg';
import trollVs from '@/assets/images/guides/lowElo/trollVs.jpg';
import heavyToCarry from '@/assets/images/guides/lowElo/heavyToCarry.jpg';
import trollSimpson from '@/assets/images/guides/lowElo/trollSimpson.jpg';
import Background from '../Background';
import Button from '@components/Buttons/Button/Button';

const LowElo = () => {
	useTitle('Sortir du bas Elo');
	return (
		<motion.div
			className="text flex flex-col items-center"
			key="lowElo"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<div className="breadcrumb">
				<Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
				<Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        progresser sur League of Legends
			</div>
			<h1 className="h1 my-1em">Sortir du bas Elo</h1>
			<p>Salut la <span className="red">#TEAMSLIP</span> c&apos;est coach Slipix et on va parler du bas elo dans league of Legends</p>
			<img className="w-35%" src={logoSlipix} alt="" />

			<Background title='Sortir du bas elo de League of Legends, un objectif sacré à la portée de tout le monde!'>

				<p>Sortir du bas elo est une priorité chez beaucoup de joueurs, League of Legends est une guerre d&apos;ego mais aussi une compétition entre amis !</p>
				<p>J&apos;ai beaucoup remarqué que mes élèves pendant mes coachings me disaient souvent :</p>
				<p>&quot;il faut que j&apos;arrive à monter pour rattraper mes potes et leur prouver que je suis pas nul&quot;</p>
				<p>Ne vous prenez pas la tête, si vous n&apos;avez pas l&apos;ambition de devenir joueur pro être dans le bas elo (<span className="text-green">Fer, Bronze, Argent, Or</span>) n&apos;est pas une mauvaise chose !</p>
				<p>Et si vos amis passent leurs temps à vous <span className="text-green">rabaisser</span> parce que vous êtes bas elo et que ça vous &quot;<span className="text-green">perturbe</span>&quot; bah changez d&apos;amis rapidement (Slipix destructeur d&apos;amitié depuis 1995)</p>

				<div className='border-solid border-gold rounded-md w-80% py-1em my-1em border-2'>
					<p>Voici les différentes étapes qu&apos;il faut valider pour sortir du bas elo sans trop de difficultés :</p>
					<ul className='text-gold text-3xl mt-1em'>
						<li><i className="fas fa-book mr-0.5em" />La remise en question</li>
						<li><i className="fas fa-book mr-0.5em" />L&apos;analyse de replays</li>
						<li><i className="fas fa-book mr-0.5em" />Trouver sa moitié</li>
						<li><i className="fas fa-book mr-0.5em" />Apprendre sans jouer</li>
						<li><i className="fas fa-book mr-0.5em" />Le rythme de jeu</li>
					</ul>
				</div>
				<div className="flex justify-evenly my-1em'">
					<img className="rounded-35% w-20% drop-shadow-filterBlue" src={lowEloPicture} alt="" />
					<img className="rounded-35% w-20% drop-shadow-filterBlue" src={championOtp} alt="" />
					<img className="rounded-35% w-20% drop-shadow-filterBlue" src={championStrong} alt="" />
				</div>
			</Background>

			<Background title='La remise en question' iconName='fas fa-question'>
				<p>Aie aie aie on est tous concernés par la remise en question et c&apos;est la base si vous voulez sortir du bas elo !</p>
				<p>C&apos;est bien beau de dire &quot;<span className="text-green">j&apos;ai pas de chance</span>&quot; ou &quot;<span className="text-green">impossible de monter dans ce jeu</span>&quot; ou encore &quot;<span className="text-green">j&apos;ai toujours les mauvais alliés</span>&quot; mais si on suit cette logique alors tout le monde serai en bas elo non ? Pourquoi il y a des diamants, puis des silvers ?</p>
				<p>Les diamants sont ceux qui ont réussi à s&apos;améliorer, avec de la remise en question et un bon travail personnel.</p>
				<p className="mt-2em">Dans cette vidéo je vais vous montrer l&apos;exemple parfait de quelqu&apos;un qui pense être <span className="text-green">bloqué à cause de ses alliés</span> sauf que je vais analyser son historique et essayer de le remettre en place, à voir absolument !</p>
				<Youtube idYoutube="vWfeB_2kbU4" />
				<p className="mt-3em">Vous l&apos;avez compris, au + vous passerez de temps à vous trouver des excuses, au moins vous allez vous concentrer sur VOTRE game et VOS défauts sur le jeu.</p>
				<p>Oui League of Legends n&apos;est pas parfait, oui il y a des games horribles avec des <span className="red">AFK</span>, des <span className="red">rageux</span>, des <span className="red">inters</span> mais ce n&apos;est pas une raison pour rester en bas elo.</p>
				<p>Il faut juste chercher la lumière et la mettre en valeur (pololo je deviens chaud à force d&apos;écrire, bientôt mon livre)</p>
				<p>Alors si vous avez du mal à vous remettre en question et que vous ragez souvent, n&apos;hésitez pas à visiter mon guide à ce sujet !</p>
				<Button category='primary'>
					<Link to="/guides/mental&rage" target="_blanc">Cliquez ici</Link>
				</Button>
			</Background>
			<Background title='L&apos;analyse des replays' iconName='fas fa-film'>
				<p>Beaucoup de joueurs sous-estiment cette technique et pourtant elle est redoutable.</p>
				<p>Moi le premier avant je ne regardai pas mes replays (En saison 4 quand j&apos;ai commencé League of Legends je suis très vite monté gold puis je suis resté bloqué 2 mois en gold par <span className="text-green">manque d&apos;auto-jugement</span>).</p>
				<p>Le fait d&apos;avoir regardé mes replays ma fait prendre conscience de mes erreurs directement en game.</p>
				<img className="w-23% rounded-md my-2em drop-shadow-filterGreyBlue" src={troll} alt="" />
				<p>Ce qui est drôle c&apos;est que en replays on a l&apos;impression d&apos;être vraiment mauvais et de ne rien comprendre sur la map alors que c&apos;est faux.</p>
				<p>Pendant qu&apos;on joue, notre cerveau se concentre sur beaucoup d&apos;informations (<span className="text-green">mini-map</span>, les <span className="text-green">combos des sorts</span>, le <span className="text-green">farm à récupérer</span>) il est donc normal que en replay avec des pauses on peut très bien analyser nos parties !</p>
				<p>Bref n&apos;hésitez pas à <span className="text-green">regarder vos replays</span>, d&apos;analyser en détails ce que vous auriez pu faire d&apos;autre pendant un teamfight ou autre...</p>
				<p>Pour regarder vos replays c&apos;est simple il faut cliquer sur le petit logo dans votre historique comme ci-dessous</p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-60%" src={historiqueGame} alt="" />
				<p>Dans cette vidéo de coaching en silver/gold j&apos;ai analysé un élève qui jouait Vel&apos;koz et on a remarqué que son gros problème était qu&apos;il se plaçait comme un assassin sauf qu&apos;il joue un mage longue portée!</p>
				<p className="mt-1em">Avec l&apos;analyse il a directement <span className="text-green">remarqué ses grosses erreurs</span> et il a pu les corriger rapidement !</p>
				<Youtube idYoutube="ltWONmX0joA" />
				<p className="mt-3em">Voici une série de vidéos ou j&apos;analyse des parties des élèves en bas elo, <span className="text-green">très intéressant pour voir les erreurs</span> qui se répètent et ainsi les supprimer rapidement. Il y a en tout 7 épisodes de cette série, bon visionnage!</p>
				<Youtube idYoutube="Igz6BnyN3_Y" />
			</Background>
			<Background title='Trouver sa moitié' iconName='fas fa-adjust'>
				<p>Maintenant il est temps de trouver votre meilleur ami(e), votre moitié, votr... Ouais bon vous avez compris votre <span className="text-green">champion principal</span>!</p>
				<p>Quand on est bloqué depuis longtemps en bas elo il est important de creer un &quot;déclic&quot; pour s&apos;améliorer rapidement.</p>
				<p>Pour ça rien de mieux que la <span className="text-green">technique de l&apos;OTP</span> (One trick Pony) qui signifie de jouer que un seul champion tout le temps !</p>
				<p>Pourquoi c&apos;est fort d&apos;OTP un champion ? C&apos;est logique en jouant tout le temps le même champion vous allez connaître vos match-up par cœur, vos dégâts par cœur, vos possibilités par coeur et j&apos;en passe!</p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-25%" src={trollRenekton} alt="" />
				<p>C&apos;est la maitrise total qui vous permettra de <span className="text-green">carry beaucoup de games</span> !</p>
				<p>Des inconvénients ? Oui il y en a, déjà premièrement quand votre champion est ban vous allez vous sentir très très bêtes.</p>
				<p>Vous avez le droit à un dodge par jour ne l&apos;oubliez pas.</p>
				<p>Ou pire encore quand votre champion est pick par l&apos;équipe ennemi. Donc ce que je conseille c&apos;est d&apos;avoir son champion OTP + un champion de secours !</p>
				<p><i className="fas fa-exclamation-triangle red mr-0.5em" /> : à vos risques et périls si vous voulez OTP un champion qui est trop souvent joué ou ban en bas elo <br />exemple : <span className="red">ZED</span>, <span className="red">YASUO</span>, <span className="red">DARIUS</span>, <span className="red">MORDEKAISER</span>, <span className="red">PYKE</span>.</p>
				<p className="mt-3em">Voici une liste de 5 champions à OTP pour carry et sortir du bas elo !</p>
				<Youtube idYoutube="Udf6A0N100w" />
				<p className="mt-3em">Encore une liste de 5 champions à otp !</p>
				<Youtube idYoutube="ffEnte7s3bQ" />
				<p className="mt-3em">Une liste de champions AD carry qui sont parfait pour débuter et prendre rapidement du plaisir !</p>
				<Youtube idYoutube="q3VjGRXzI1A" />
				<p className="mt-3em">Une liste de champions MIDLANE  qui sont parfait pour débuter et prendre rapidement du plaisir ! </p>
				<Youtube idYoutube="hdzF80rPSOE" />
				<p className="mt-3em">Une liste de champions JUNGLE  qui sont parfait pour débuter et prendre rapidement du plaisir !</p>
				<Youtube idYoutube="Q2N6V9h_JWg" />
				<p className="mt-3em">Une vidéo ou je vous présente des champions qui ont les meilleurs pourcentages de victoire en bas elo ! (attention ils sont souvent ban/pick)</p>
				<Youtube idYoutube="A3jerBTKHOU" />
				<p className="mt-3em">Si avec ça vous ne trouvez pas votre moitié je ne peux plus rien faire pour vous mes petits ... Oh wait ! N&apos;hésitez pas à visiter mon guide &quot;<span className="text-gold">TROUVER SON RÔLE/CHAMPION</span>&quot; ça pourrait encore vous aider à trouver la perle rare !</p>
				<Button category='primary'>
					<Link to="/guides/role-champion" target="_blanc">Cliquez ici</Link>
				</Button>
			</Background>
			<Background title='Apprendre sans jouer' iconName='far fa-edit'>
				<p>Apprendre sans jouer ? Oui on peut perfectionner son niveau sur League of Legends avec de la <span className="blue">connaissance</span> !</p>
				<p>Il est très important de connaître les bonus des <span className="text-gold">drakes</span>, du <span className="text-gold">nashor</span>, l&apos;éfficacité de <span className="text-gold">l&apos;herald</span>, les golds que l&apos;on gagne avec les plaques de tourelles etc...</p>
				<p>Ainsi que les objets, les différentes statistiques sur les objets, les passifs des sorts de certains personnages bref toutes ces informations sont sur le site officiel de League of Legends, profitez et renseignez vous ! (J&apos;ai failli écrire restez chez vous)</p>
				<p>Pour ça c&apos;est simple, pour optimiser sa courbe de progression il faut en + de jouer à League of Legends regarder des <span className="text-green">guides</span>, des <span className="text-green">coachings</span>, des vidéos <span className="text-green">gameplays explicatives</span> et autres !</p>
				<p>Et oui il faut manger League of Legends, boire League of Legends et dormir League of Legends ! (avec une petite tartiflette quand même)</p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-25%" src={trollVs} alt="" />
				<p>Vous avez de quoi vous régaler sur Youtube et Twitch avec les différents animateurs français ! Prenez le temps de regarder et de bien analyser leurs gameplays, c&apos;est toujours bénéfique.</p>
				<p className="mt-3em">Voici ma playlist YouTube la + complète de League of Legends ! Elle regroupe des <span className="text-green">guides sur tous les thèmes du jeu</span> (environ 100 vidéos au total) Alors régalez vous et je vous promet que la fin sera meilleure que Game of Thrones !</p>
				<Button>
					<a href="https://www.youtube.com/playlist?list=PL-u0LV-sQuCqk66I3UstmE1PxvKeSq-XS">Playlist complète: APPRENDRE SUR LEAGUE OF LEGENDS</a>
				</Button>
			</Background>
			<Background title='Le rythme de jeu' iconName='fas fa-gamepad'>
				<p>Pour se fixer un objectif il faut s&apos;en donner les moyens, tu vas pas aller manger au Burger King quand ton objectif est de perdre rapidement du poids pour faire le beau à la plage cet été</p>
				<p className="text-gold">(moi perso je préfère aller au Burger King)</p>
				<p>Sur League of Legends c&apos;est pareil, si vous voulez sortir du bas elo il faut commencer par adapter un rythme de jeu &quot;logique&quot;.</p>
				<p>Je m&apos;explique il faut surtout rester cohérent dans votre optimisation de progression, si votre but est de progresser avec Darius et de monter platine rapidement il va falloir sacrifier les games ou vous jouez d&apos;autres champions pour le &quot;fun&quot;.</p>
				<p> Si votre objectif est juste de prendre du plaisir alors jouez ce que vous désirez.</p>
				<p className="text-green">Mais si vous voulez sortir du bas elo il faut faire des sacrifices !</p>
				<p>N&apos;hésitez pas à spam vos champions préférés pour détruire le ladder, c&apos;est la base de tout ! Au + vous vous éparpillez au + vous allez galérer à monter et ce peu importe votre niveau global sur le jeu !</p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-25%" src={heavyToCarry} alt="" />
				<p>J&apos;ai des élèves diamants+ qui galèrent à monter car ils pensent pouvoir le faire en jouant 6-7 champions et bien non c&apos;est très très dur.</p>
				<p className="mt-1em">Voici l&apos;exemple parfait, dans cette vidéo je coach un élève qui joue peu au jeu, et pour le peu de temps qu&apos;il y passe il joue plusieurs rôles/champions à la fois ce qui donne une <span className="red">game catastrophique</span> !</p>
				<Youtube idYoutube="Krg3QdeQqX4" />
				<p className="mt-3em">Dans cette vidéo je vous explique les erreurs qui sont souvent la en bas elo avec la bonne réactivité à avoir !</p>
				<Youtube idYoutube="Zzt76aIMpZI" />
			</Background>
			<Background>
				<p>Pour résumer sur cette page qui parle du bas elo de League of Legends, remettez-vous en question, trouvez votre champion, optimisez votre temps de jeu et surtout <span className="text-gold">prenez du plaisir</span> ! Derrière chaque bas elo se cache un futur challenger...</p>
				<p className="">J&apos;espère que ce guide vous aura aider, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-25%" src={trollSimpson} alt="" />
				<p className="text-gold text-3xl">N&apos;hésitez pas à aller consulter les autres guides de coach Slipix</p>
			</Background>
		</motion.div>
	);
};

export default LowElo;
