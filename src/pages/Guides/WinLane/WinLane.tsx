import { useId } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

import Youtube from '@components/Youtube';
import Background from '@/pages/Guides/Background';
import Chapters from '@/pages/Guides/Chapters';

// images
import logoSlipix from '@/assets/images/winLane/slipixLogoLane.png';
import snowball from '@/assets/images/winLane/snowballLol.jpg';
import back from '@/assets/images/winLane/back.jpg';
import roaming from '@/assets/images/winLane/roaming.jpg';
import troll from '@/assets/images/winLane/troll.jpg';
import troll2 from '@/assets/images/winLane/troll2.jpg';
import trollEnd from '@/assets/images/winLane/trollEnd.jpg';

const WinLane = () => {
	useTitle('Gagner sa phase de lane');
	const listChapters = [
		{
			id: useId(),
			title: 'Le farming',
		},
		{
			id: useId(),
			title: 'Le match-up',
		},
		{
			id: useId(),
			title: 'Le roaming',
		},
		{
			id: useId(),
			title: 'La gestion de wave',
		},
	];
	return (
		<motion.div
			className="text flex flex-col items-center"
			key="home"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<div className="breadcrumb">
				<Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
				<Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        Gagner sa lane facilement
			</div>
			<h1 className="h1 my-1em">Gagner sa phase de lane</h1>
			<p>Salut la <span className="red">#TeamSlip</span> c&apos;est coach Slipix et on va parler de la <span className="text-green">phase de lane</span> dans League of Legends</p>
			<img className="w-35%" src={logoSlipix} alt="" />
			<Background title='Gagner sa lane sur League of Legends vous permettra de remporter beaucoup de games !'>
				<p>Dans League of Legends votre phase de lane va définir 80% de l&apos;avenir de votre game.</p>
				<p>Si vous perdez votre phase de lane il sera difficile de revenir dans la partie et vous allez devoir compter sur vos <span className="text-green">alliés</span> ce qui est plutôt dérangeant dans ce jeu en soloQ.</p>
				<p>Avec ce guide je vais essayer de vous eclairer sur tous les sujets autour de la phase de lane, que ça soit l&apos;aspect <span className="text-green">micro-gestion</span> ou la <span className="text-green">macro-game</span> !</p>
				<Chapters list={listChapters} title='Voici les différentes catégories qu&apos;il faut maitriser pour maîtriser sa lane :' />	
				<div className="flex justify-evenly my-1em">
					<img className="drop-shadow-filterRed rounded-35% w-20%" src={snowball} alt="" />
					<img className="drop-shadow-filterRed rounded-35% w-20%" src={back} alt="" />
					<img className="drop-shadow-filterRed rounded-35% w-20%" src={roaming} alt="" />
				</div>
			</Background>
			<Background title='Le farming' iconName='fas fa-coins'>

				<p>Le farming dans League of Legends est primordial tout autant que les <span className="red">kills</span> et les <span className="blue">objectifs</span>.</p>
				<p>Beaucoup de personnes oublient que être en 5/0 dans son match-up n&apos;est pas forcément un énorme avantage quand votre adversaire a le même niveau d&apos;xp que votre champion ainsi que 80 sbires d&apos;avance.</p>
				<p className="text-green">15 sbires dans League of Legends= 1 kill.</p>
				<p>Retenez bien ça c&apos;est très important, voila pourquoi le snowball en haut Elo est bien + élevé, car non seulement ils vont prendre les kills et beaucoup de golds, mais aussi l&apos;avantage en sbires juste derrière pour creuser un écart énorme de golds le + rapidement possible.</p>
				<p>Je reçois beaucoup de questions dans mes coachings ainsi que sur les réseaux sociaux : <span className="text-gold">Slipix comment améliorer son farming ?</span></p>
				<p>Malheureusement c&apos;est l&apos;étape que je trouve vraiment chiante dans le jeu (je trouve ça trop linéaire j&apos;aime la baston).</p>
				<img className="w-30% drop-shadow-filterGreyBlue rounded-md w-20% my-2em" src={troll} alt="" />
				<p>Il n&apos;y a pas de méthodes miracle pour améliorer son farm, il faut jouer jouer et jouer! Je conseille cependant d&apos;aller 1 fois par jour en partie privé dans le mode &quot;<span className="red">entraînement</span>&quot;.</p>
				<p>L&apos;objectif est d&apos;avoir le + de sbires possible en 20 minutes! N&apos;hésitez pas à vous entrainer à farmer sous tours et avec VOS champions c&apos;est très important. </p>
				<p>Le farming sous tour est totalement différent avec un <span className="blue">mage</span> et un <span className="red">assassin</span> par exemple.</p>
				<p>Au final le farming c&apos;est les golds et les golds c&apos;est ce qui va rendre votre game facile ou difficile, alors n&apos;hésitez pas à vous entrainer!</p>
				<p className="mt-3em">J&apos;ai trouvé cette vidéo super détaillée et intéressante pour <span className="text-green">améliorer votre farming</span>. N&apos;hésitez pas à aller la voir (elle est en anglais mais c&apos;est la + qualitative sur YouTube).</p>
				<Youtube idYoutube="jOSyf1NQspo" />
			</Background>
			<Background title='Le match-up' iconName='fas fa-trophy'>
				<p>La connaissance du match-up dans League of Legends est très importante.</p>
				<p>Par exemple c&apos;est en fonçant sur une <span className="red">Illaoi sous ultime</span> qu&apos;on comprend qu&apos;il ne faut pas le faire, et pour ça il faut vivre le match-up<br /> (j&apos;ai encore mal de son ultime).</p>
				<p>Vous allez affronter en principe les même champions (aujourd&apos;hui même les bas elo jouent des picks qui sont meta)</p>
				<p>mais aussi parfois des <span className="text-green">picks exotiques</span> ! (des génies en gros)</p>
				<p>Je me répète souvent mais pour progresser dans League of Legends il faut pas toujours chercher compliquer :</p>
				<p><span className="blue">connaître son match-up</span> c&apos;est le vivre, et plusieurs fois.</p>
				<img className="rounded-md my-2em drop-shadow-filterGreyBlue w-25%" src={troll2} alt="" />
				<p>Donc vous allez devoir spammer votre champion et avec le temps vous allez découvrir vos counters, mais aussi les champions que vous allez pouvoir défoncer sans trop de difficultés et JOUER LE MATCH-UP.</p>
				<p>La <span className="blue">connaissance de votre match-up</span> va vous permettre d&apos;adapter votre playstyle dans la game.</p>
				<p>Par exemple avec mon Gragas mid je counter Fizz totalement en début de partie donc je vais jouer ultra agressif pour l&apos;empêcher de farm et ainsi prendre très vite l&apos;avantage !</p>
				<p>En revanche contre Syndra c&apos;est très compliqué donc au lieu de prendre <span className="red">embrasement</span> (ignite) je prend <span className="text-purple">téléportation</span> pour tenir le début de partie !</p>
				<p>Tout ça je le sais comment ? Parce que je l&apos;ai vécu et j&apos;ai analysé mon match-up, faites de même il faut juste du temps et des games !</p>
				<p className="mt-3em">ça donne quoi de pas connaître son match-up ? Voici un coaching en bas elo ou l&apos;abonné est totalement perdu face à un champion qu&apos;il ne connait pas.</p>
				<Youtube idYoutube="yGKJDd4YsSc" />
				<p className="mt-3em">Encore une exemple:  Coaching d&apos;un abonné jouant support, il a un match-up positif mais il n&apos;en profite pas parce qu&apos;il connait pas son match-up !</p>
				<Youtube idYoutube="47gDddxq9h4" />
			</Background>
			<Background title='Le roaming' iconName='fas fa-exchange-alt'>
				<p>Le roaming est une étape clé de la phase de lane ! Certains champions et aussi certains match-up sont obligés d&apos;utiliser le roaming pour gagner la partie!</p>
				<p>On pourrait croire que le roaming est seulement réservé aux <span className="red">assassins</span> mais c&apos;est faux, tout le monde peut l&apos;utiliser. <br />(ADC est le rôle ou l&apos;on roam le moins mais ça peut arriver pour aider le jungle)</p>
				<p>Imaginez une partie ou vous jouez contre un adversaire qui reste sous-tour, qui refuse totalement de vous trade, il a pour seul objectif de ne pas mourir.</p>
				<p>Sauf que vous jouez un champion qui après 30 minutes de jeu va fortement s&apos;épuiser, il faut donc <span className="text-green">réagir avec le ROAMING</span> !</p>
				<p>Pour roam sur la map il suffit simplement de <span className="blue">push votre vague de sbires</span> pour ensuite bloquer votre adversaire sous sa tour et ainsi l&apos;empêcher de vous suivre</p>
				<p>(il peut choisir de vous suivre mais c&apos;est très risqué car il va perdre beaucoup de farm et d&apos;xp, sans oublier qu&apos;il a peut être un champion très mauvais pour roam).</p>
				<p>Avec ce roaming vous allez mettre énormément de pression, forcer les adversaires à jouer safe, <span className="red">récupérer des kills</span> et ainsi débloquer des objectifs et j&apos;en passe !</p>
				<p className="mt-3em">Voici un tutoriel coaching &quot;comment gagner avec le roaming&quot; et prendre beaucoup d&apos;avantage !</p>
				<Youtube idYoutube="phBLIwFJNfw" />
				<p className="mt-3em">Petit gameplay fun ou j&apos;essaye un Lee Sin full roaming support (inspiré d&apos;un Corréen qui le joue en grand master). Vous allez voir le nombre d&apos;occasions et de roaming qu&apos;on peut faire pendant les games !</p>
				<Youtube idYoutube="V20Ifzt9cas" />
				<p className="mt-3em">Un autre de mes gameplays en midlane ou je prend très vite l&apos;avantage sur ma lane et j&apos;en profite pour aller aider mon jungle, ma toplane, ma botlane !</p>
				<Youtube idYoutube="0XX3w0cHiAM" />
			</Background>
			<Background title='La gestion de la wave' iconName='fas fa-balance-scale'>
				<p>Gérer sa wave est très sous-estimé et peu utilisé en bas elo ! On va commencer par expliquer le <span className="green">push</span> et le <span className="blue">freeze</span> pour pas que vous soyez trop perdus !</p>
				<div className="my-2em rounded-md p-2em border-2 border-gold border-solid w-85%">
					<p><span className="text-green">PUSH</span> : Le push consiste à faire avancer la wave de sbires sous la tour ennemi, ça vous permet de back tranquillement <br /> (le temps que la vague revienne sous VOTRE TOUR vous avez le temps de revenir la récupérer)</p>
					<p>ou bien de faire un <span className="text-green">roaming pour aider votre team</span>, ou bien tout simplement pour prendre les plaques de la tour. <br /> L&apos;inconvéniant ? Le jungler ennemi pourra vous gank facilement, et selon votre match-up vous ne pourrez pas le dive et donc faire des kills.</p>
					<div className='border-t border-solid border-gold my-1em' />
					<p><span className="blue">FREEZE</span> : Le freeze consiste à ne pas taper les sbires (seulement mettre le dernier coup pour les golds) et ainsi mettre la vague de sbires sous votre tour.</p>
					<p>Vous serez donc très dur à gank mais SURTOUT vous allez <span className="blue">forcer votre adversaire à avancer</span> vers votre tour <br />(il sera lui vulnérable aux ganks) mais aussi à vos agressions ! <br /> Pour tenter le kill sur un adversaire qui joue ultra safe il faut freeze et non push (sauf si vous pouvez le tuer sous tour).</p>
					<p>Avec votre freeze il va aussi ne pas pouvoir avancer, et perdre beaucoup de sbires.  à noter que le freeze est bien meilleur <span className="red">contre un champion corps à corps</span> car il ne pourra pas récupérer son farm si vous le zonez bien.</p>
				</div>
				<p className="mt-3em">Voici un coaching explicatif sur la gestion de wave, ça devrait compléter le guide</p>
				<Youtube idYoutube="rzKIH_zGRNo" />
				<p className="mt-3em">Les timing back sont très important dans League of Legends !</p>
				<p>On remarque souvent en bas elo que le problème vient aussi du timing back, ils restent souvent pour rien sur la lane, trop peu de PV, trop de peu de mana ou bien trop de golds sur eux !</p>
				<p>Pour bien optimiser votre timing back, soyez bien sûr d&apos;avoir push votre lane, d&apos;avoir assez de mana/pv pour rester!</p>
				<p><span className="text-gold">Il faut back seulement quand on ne peut plus tenir ou quand on a les golds pour un objet clé</span> par exemple (chapitre perdu pour un mage AP mid)</p>
				<p className="mt-3em">dans cette vidéo coaching on va parler des agression, et des timing back!</p>
				<Youtube idYoutube="tYBaoo4oxes" />
				<p className="mt-3em">Une vidéo coaching ou je vous montre comment impacter la map avec un bon timing back ainsi que le roaming</p>
				<Youtube idYoutube="uAmTtf3wwBY" />
				<p className="mt-3em">Une vidéo intéressante ou je vous donne 3 techniques pour gagner votre lane !</p>
				<Youtube idYoutube="cJFKzvSRScg" />
				<p className="mt-3em">Un coaching d&apos;un abonné ou je lui explique la domination de lane pour avoir une grande présence en early game.</p>
				<Youtube idYoutube="xtqB3kAPWRc" />
			</Background>

			<Background>
				<p>Pour résumer sur cette page qui parle de la phase de lane, entraînez vous au farming, connaissez vos match-up, bougez et apportez votre présence sur la carte, utilisez le <span className="text-green">push</span> et le <span className="blue">freeze</span> au bon moment !</p>
				<p>J&apos;espère que ce guide vous aura aidé, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
				<img className="w-30% rounded-md my-2em drop-shadow-filterBlue" src={trollEnd} alt="" />
				<p className="text-3xl">N&apos;hésitez pas à aller consulter les autres guides de coach Slipix</p>
			</Background>
		</motion.div>
	);
};

export default WinLane;
