import { useId } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

import Youtube from '@components/Youtube';
import QAComponent from '@pages/Guides/RoleChampion/QAComponent';
import Background from '@pages/Guides/Background';

// images
import logoSlipix from '@/assets/images/guides/roleChampion/slipixLogoRole.png';
import twistedfast from '@/assets/images/guides/roleChampion/twistedfast.jpg';
import superRammus from '@/assets/images/guides/roleChampion/superRammus.jpg';
import riverWick from '@/assets/images/guides/roleChampion/riverWick.jpg';
import coupleTroll from '@/assets/images/guides/roleChampion/coupleTroll.png';
import duplaisir from '@/assets/images/guides/roleChampion/duplaisir.jpg';
import pasFacile from '@/assets/images/guides/roleChampion/pasFacile.jpg';
import banYasuo from '@/assets/images/guides/roleChampion/banYasuo.jpg';
import trollPicture from '@/assets/images/guides/roleChampion/trollPicture.jpg';

const RoleChampion = () => {
	useTitle('Trouver son Rôle/Champion');

	const RoleQALists = [
		{
			id: useId(),
			question: 'J\'aime jouer seul ou bien en intéraction avec mes alliés ?',
			answer: 'Si vous préférez jouer seul dans votre coin, la toplane sera votre paradis en jouant des duellistes ! Pas besoin de se regrouper parfois pour gagner des parties.',
		},
		{
			id: useId(),
			question: 'J\'aime être présent sur la map et être très mobile ?',
			answer: 'Si vous aimez avoir une grande présence sur la carte, le rôle de jungle/midlane sera parfait pour vous ! C\'est avec le roaming d\'un midlaner et l\'initiative d\'un jungler que les parties sont gagnées.',
		},
		{
			id: useId(),
			question: 'J\'aime farm et last hit les sbires ?',
			answer: 'Si vous n\'aimez pas le farming de sbires, le rôle de support et de jungle sera optimal. Et si vous aimez ça, le rôle d\'ADC sera parfait !',
		},
		{
			id: useId(),
			question: 'J\'aime faire des teamfights ?',
			answer: 'Si vous aimez faire des bon gros teamfights, vous pouvez opter pour la toplane en jouant un tank qui va initier le combat, tout comme un jungle tank ou bruiser qui fera la même.',
		},
		{
			id: useId(),
			question: 'J\'aime faire les objectifs ?',
			answer: 'Si vous aimez faire les objectifs neutres (Drake, Herald, Nashor) le rôle de jungle est la pour vous ! C\'est avec le smite qu\'on fait ces objectifs.',
		},
		{
			id: useId(),
			question: 'J\'aime faire des gros dégâts (du DPS) ?',
			answer: 'Si vous aimez arroser vos ennemis d\'une pluie de dégâts que ça soit du BURST ou du DPS il est temps pour vous de jouer Midlane ou bien ADC.',
		},
		{
			id: useId(),
			question: 'J\'aime protéger mes alliés ?',
			answer: 'Si vous aimez sauver et protéger vos alliés de leurs pires bêtises, le rôle de support saura faire honneur à votre esprit d\'entraide.',
		},
	];

	const ChampionQALists = [
		{
			id: useId(),
			question: 'Mon champion doit savoir gérer les duels ?',
			answer: 'Si vous aimez vous battre et principalement en duel optez pour les bruisers comme Darius, Jax ou Renekton ainsi que les assassins tels que Zed, Fizz ou Talon !',
		},
		{
			id: useId(),
			question: 'Mon champion doit être au corps à corps ou à distance ?',
			answer: 'Pas vraiment compliqué mais c\'est toujours bien de le préciser, ne vous forcez pas à jouer des corps à corps ou des distances si vous n\'aimez pas ça.',
		},
		{
			id: useId(),
			question: 'Mon champion doit être facile ou dur à jouer ?',
			answer: 'Et oui on a pas tous envie de forcément faire des plays ou des montages en jouant du Yasuo, Zed et j\'en passe ! Si vous aimez les champions facile ne vous en privez pas, et à l\'inverse si vous aimez les combos et les plays lancez-vous !',
		},
		{
			id: useId(),
			question: 'Mon champion doit être fort en début de partie ou en fin de partie ?',
			answer: 'Très important de s\'adapter à son champion, si vous aimez jouer relativement safe en début et milieu de partie prenez des champions qui sont redoutables en fin de partie comme Veigar, Vayne, Kayle ou encore Jax ! Pareil pour le contraire si vous aimez mettre du rythme choisissez des champions redoutables en début de partie comme Olaf, Draven, Lee Sin ou bien Qiyana !',
		},
		{
			id: useId(),
			question: 'Mon champion est-il bon pour monter en elo ?',
			answer: 'Voici la question piège, je reçois beaucoup trop de messages dans ce style. Au début le but n\'est pas de trouver un champion bon pour monter mais un champion avec lequel on prend du plaisir ! De + on peut monter avec TOUS les champions, alors ne vous prenez pas la tête à vous demander si votre champion est fort ou non, jouer les champions forts c\'est important à partir du Master+ pour optimiser son winrate.',
		},
	];

	return (
		<motion.div
			className="text flex flex-col items-center"
			key="roleChampion"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<div className="breadcrumb">
				<Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
				<Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        Rôle/Champion
			</div>
			<h1 className="h1 m-1em">Trouver son Rôle/Champion</h1>
			<p>Salut la <span className="red">#TeamSlip</span> c&apos;est coach Slipix et on va parler des <span className="blue">rôles</span> et des <span className="red">champions</span> dans League of Legends</p>
			<img className="w-40%" src={logoSlipix} alt="" />
			<div className="bg-bgGuide rounded-md w-75% p-2em flex flex-col items-center text-center my-1em">
				<h3 className='h3 text-gold mb-1em'>
          Trouver son rôle et son champion est primordial dans League of Legends !
				</h3>
				<p>
          C&apos;est un jeu ou vous aurez beaucoup de moments difficiles donc autant jouer
          les <span className="red">champions</span> qu&apos;on aime et qui nous font aimer le jeu !
				</p>
				<p>
          Les questions que je reçois le + souvent pendant mes lives, mes coachings
          ou sur mes réseaux sociaux sont par rapport aux <span className="red">champions</span> ou rôles.
				</p>
				<p>Exemple : &quot;Slipix donne moi un <span className="red">champions</span> fort pour 1v9&quot; ou encore &quot;Hey
          Slipix tu as une idée de <span className="red">champions</span> à jouer en midlane?&quot;.
				</p>
				<div className="flex justify-evenly m-3em">
					<img className="w-20% rounded-35% drop-shadow-filterRed" src={twistedfast} alt="" />
					<img className="w-20% rounded-35% drop-shadow-filterRed" src={superRammus} alt="" />
					<img className="w-20% rounded-35% drop-shadow-filterRed" src={riverWick} alt="" />
				</div>
				<p>
          Et pourtant il faut trouver seul son <span className="blue">rôle</span> et son <span className="red">champion</span> ! C&apos;est comme
          demander à  quelqu&apos;un quel instrument de musique jouer alors que de base on
          préfère la guitare.
				</p>
				<p>
          Vous l&apos;avez donc compris, jouez ce que vous aimez ! Maintenant on arrive à
          la phase &quot;compliquée&quot; c&apos;est de savoir vraiment ce que vous aimez faire dans
          League of Legends.
				</p>
				<p>Pour ça il faut se poser les bonnes questions et vous allez voir que
          ensemble on va y arriver héhé
				</p>
				<img className="roleChampion__intro__heart" src={coupleTroll} alt="" />
			</div>
			<Background>
				<h2 className="h2 text-#00cefe px-1em"><i className="fas fa-university mx-.3em font-0.8em" />Trouver son rôle<i className="fas fa-university mx-.3em font-0.8em" /></h2>
				<p>Premièrement il ne faut pas s&apos;attarder à &quot;gagner&quot; mais à prendre du plaisir, ne l&apos;oubliez jamais je sais que je me répète mais ça reste un jeu ! Par exemple moi j&apos;ai un meilleur winrate en midlane mais ce n&apos;est pas pour autant que je vais jouer QUE midlane<br /> (il faut voir ses priorités, monter en elo ou bien s&apos;amuser).
				</p>
				<img className="w-35% rounded-md my-2em drop-shadow-filterBlue" src={duplaisir} alt="" />
				<p>Trouver son <span className="blue">rôle</span> determinera votre playstyle et ensuite vous allez pouvoir
          adapter vos champions à votre <span className="blue">rôle</span>! <br />(Je conseille d&apos;abord de trouver le
				<span className="blue"> rôle</span> puis de s&apos;interesser aux champions du <span className="blue">rôle</span>, ce n&apos;est que mon avis).
				</p><br />
				<p>Il est très important de savoir ce qu&apos;on recherche dans League of Legends
          : Monter le + haut possible en ranked ou bien juste s&apos;amuser en normal draft?
				</p>
				<p>Dans ces cas la pour le tryhard de la ranked il vaut mieux trouver son
          rôle principal (avec 3 champions pour optimiser) et ensuite un <span className="blue">rôle </span>
          secondaire en cas d&apos;autofill (avec 2 champions pour optimiser).
				</p>
				<p className="text-green text-3xl my-2em border-solid border-green border-b-2"><i className="fas fa-feather-alt icon" />Les questions à se poser pour trouver son rôle <i className="fas fa-feather-alt icon" /></p>
				<div>
					{RoleQALists.map((item) => (
						<QAComponent key={item.id} question={item.question} answer={item.answer} />
					))}
				</div>
				<p className="mt-4em">Pour vous aider en + de ma technique des questions/réponses voici une vidéo ou je vous explique comment trouver son <span className="blue">rôle</span> avec de la remise en forme !</p>
				<Youtube idYoutube="Z7G2ywfAQz0" />
				<p>Une fois que vous avez enfin trouvé votre rôle de rêve, on va ensemble s&apos;attaquer aux <span className="red">champions</span> ! Ne pas oublier que pour avoir une courbe de progression stable et positive, il faut jouer très souvent le même rôle et ne pas s&apos;éparpiller !</p>
				<p className='mt-4em'>Voici un exemple parfait d&apos;un coaching sur un abonné qui jouait tous les <span className="blue">rôles</span> à la fois, on remarque une manque de connaissance de ses match-ups, à ne pas faire si vous voulez monter en rankeds rapidement.</p>
				<Youtube idYoutube="uKVDl9wCl2U" />
			</Background>
			<Background>
				<h2 className="h2 text-red-800"><i className="fab fa-phoenix-framework icon__phoenix" />Trouver son Champion<i className="fab fa-phoenix-framework icon__phoenix" /></h2>
				<p>Il y a environ 150 <span className="red">champions</span> dans League of Legends, tous avec une
          identité unique ainsi que des kits de sorts différents.
				</p>
				<p>Et oui le charme de League of Legends c&apos;est aussi son vaste choix de gameplay !</p>
				<p>Le problème c&apos;est que ce côté positif de large choix est également un vice
          pour votre progression dans le jeu.
				</p>
				<img className="rounded-md my-2em drop-shadow-filterRed w-32%" src={pasFacile} alt="" />
				<p>J&apos;ai souvent remarqué que dans mes coachings, les élèves bas elo (Fer,
          Bronze,Argent,Or) changeaient très souvent de <span className="red">champions</span> et se lassaient
          très vite d&apos;un <span className="red">champion</span>. C&apos;est le problème quand on a beaucoup de choix.
				</p>
				<p>Par exemple quand on veut acheter une voiture c&apos;est bien + simple de
          choisir quand on a le choix entre 5 modèles au lieu de 150.
				</p>
				<p className='mb-2em'>Maintenant que vous avez trouvé votre <span className="blue">rôle</span> (j&apos;espère grâce à mon
          aide) il est temps de choisir votre premier champion !
				</p>
				<p>Ce que je conseille au début, c&apos;est de faire beaucoup de normales games en
          draft et non en classée pour ne pas abîmer votre MMR.
				</p>
				<p>Jouez sur le même <span className="blue">rôle</span> tous les <span className="red">champions</span> que vous trouvez intéressants,
          c&apos;est vital pour votre préparation aux rankeds.
				</p>
				<p>Attention de ne pas spam un seul champion sans avoir essayé les autres, il
          vaut mieux commencer à en découvrir plusieurs avant de faire son ultime choix.
				</p>
				<img className="rounded-md my-2em drop-shadow-filterRed w-22%" src={banYasuo} alt="" />
				<p>Si par exemple vous voullez devenir un joueur de toplane, vous pouvez
          essayer plein de <span className="red">champions</span> différents en toplane jusqu&apos;à trouver votre coup de coeur !
				</p>
				<p>Une fois que vous avez mis de côté dans votre tête environ 5 <span className="red">champions</span> que
          vous adorez, il est temps de faire la même technique que pour trouver son
				<span className="blue"> rôle</span> : Les Questions/Réponses.
				</p>
				<p className="text-green text-3xl my-2em border-solid border-green border-b-2"><i className="fas fa-feather-alt icon" />Les questions à se poser pour trouver son champion <i className="fas fa-feather-alt icon" /></p>
				{ChampionQALists.map((item) => (
					<QAComponent key={item.id} question={item.question} answer={item.answer} />
				))}
				<p className="mt-3em">Pour vous aider en + de ma technique des questions/réponses voici une vidéo ou je vous explique comment trouver son <span className="red">champion</span> avec de la remise en forme !</p>
				<Youtube idYoutube="q-rWwaUQ-4I" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>Maintenant on passe à une vidéo qui va vous montrer 3 <span className="red">champions</span> à OTP (One trick Pony) ça consiste à jouer que un seul <span className="red">champion</span> et de le spam pour très vite le maîtriser, ce sont en principe des <span className="red">champions</span> qui sont redoutable une fois qu&apos;on a un bon nombre de games dessus. Essayez les et à vous de carry !</p>
				<Youtube idYoutube="OMRt2MQJIgw" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>Encore une vidéo ou je vous présente 5 <span className="red">champions</span> à OTP ! Et bah dis donc il est plein de ressources ce Coach Slipix héhé</p>
				<Youtube idYoutube="ffEnte7s3bQ" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>On enchaine avec une vidéo ou je vous présente 3 <span className="red">champions</span> qui ont du potentiel et qui sont surtout très polyvalents, c&apos;est à dire qu&apos;ils n&apos;ont pas vraiment de gros counterpicks et ils sauront s&apos;adapter à la composition de votre équipe !</p>
				<Youtube idYoutube="MAB-VUtQQL8" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>Je me devais de réaliser cette vidéo car beaucoup d&apos;entre vous détestent les tanks mais ne savent pas comment les contrer. Voici une liste de 3 <span className="red">champions</span> pour les faire pleurer !</p>
				<Youtube idYoutube="MXTAwZAZyyk" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>Une liste de <span className="red">champions</span> qui ont atteint de très gros pourcentages de victoires en saison 10 ! Il en faut pour tous les goûts, allez-y les tryharders celle la est pour vous !</p>
				<Youtube idYoutube="J_WiOifXAv4" />
				<div className='border-b-2 border-solid w-100% border-red-800 mb-3em mt-1em' />
				<p>Et pour terminer une liste de <span className="red">champions</span> que je trouve super fun dans le jeu, dans la victoire ou la défaite ! (Ce n&apos;est que mon avis et je préfère vous le partager)</p>
				<Youtube idYoutube="RnO3eqRYNNk" />
			</Background>

			<Background>
				<p>Pour résumer sur cette page qui parle de votre rôle et de votre champion, n&apos;hésitez pas à vous poser les bonnes questions pour vite trouver votre playstyle et ainsi commencer une bonne courbe de progression !<br /> N&apos;oubliez pas que ça reste un jeu il faut s&apos;amuser, <span className="gold">ne vous forcez pas à jouer des champions forts que vous n&apos;aimez pas...</span></p>
				<p>J&apos;espère que ce guide vous aura aider, à bientot sur la faille la <span className="red">#TEAMSLIP</span></p>
				<img className="drop-shadow-filterRed rounded-md w-25% my-2em" src={trollPicture} alt="" />
				<p className="text-3xl">N&apos;hésitez pas à aller consulter les autres guides de COACH SLIPIX</p>
			</Background>
		</motion.div>
	);
};

export default RoleChampion;
