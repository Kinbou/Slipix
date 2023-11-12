import { useId } from 'react';
import { Link } from 'react-router-dom';
import Youtube from '@components/Youtube';
import { motion } from 'framer-motion';

import { useTitle } from '@/hooks/useTitle';
import { animationOne, transition } from '@/utils/animations/index';

// images
import logoSlipix from '@/assets/images/guides/progressLol/slipixLogo.png';
import quicklyProgress from '@/assets/images/guides/progressLol/quicklyProgress.jpg';
import initiative from '@/assets/images/guides/progressLol/initiative.jpg';
import trust from '@/assets/images/guides/progressLol/trust.jpg';
import time from '@/assets/images/guides/progressLol/time.jpg';
import sylasBroken from '@/assets/images/guides/progressLol/sylasBroken.jpg';
import brandJungleWtf from '@/assets/images/guides/progressLol/brandJungleWtf.jpg';
import zedForet from '@/assets/images/guides/progressLol/zedForet.jpg';
import giveEverything from '@/assets/images/guides/progressLol/giveEverything.jpg';
import trollPicture from '@/assets/images/guides/progressLol/trollPicture.jpg';
import trollPotter from '@/assets/images/guides/progressLol/trollPotter.jpg';
import Background from '../Background';
import Button from '@components/Buttons/Button/Button';
import Chapters from '../Chapters';

const ProgressLol = () => {
	useTitle('Progresser sur League of Legends');
	const listChapters = [
		{
			id: useId(),
			title: 'L\'optimisation du temps de jeu',
		},
		{
			id: useId(),
			title: 'Créer votre champion pool (vos champions joués)',
		},
		{
			id: useId(),
			title: 'être positif, une grande force',
		},
		{
			id: useId(),
			title: 'Ma technique secrète',
		},
		{
			id: useId(),
			title: 'La connaissance',
		},
	];
	return (
		<motion.div
			className="text flex flex-col items-center"
			key="progressLol"
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
			<h1 className="h1 my-1em">Progresser sur League of Legends</h1>
			<p >Salut la <span className="red">#TEAMSLIP</span> c&apos;est COACH SLIPIX et on va parler de la progression dans LEAGUE OF LEGENDS</p>
			<img className="w-40%" src={logoSlipix} alt="" />
			<Background title='Progresser sur League of Legends, L&apos;objectif de beaucoup de joueurs !'>
				<p>Progresser pour s&apos;améliorer et ainsi atteindre un <span className="green">objectif personnel</span>, ou
          bien rejoindre un ami dans un rank + élevé ? Ou tout simplement progresser
          car on passe beaucoup de temps sur le jeu. Il y a plein de façons
          différentes de s&apos;améliorer et on va le voir ensemble en détails, et aussi
          avec l&apos;aide de beaucoup de mes vidéos !
				</p>
				<p>J&apos;ai remarqué avec l&apos;experience de mes coachings que il y a une courbe de
          progression très différente selon les joueurs, bien evidemment il y a
          toujours des personnes &quot;<span className="green">douées</span>&quot; comme dans la musique mais surtout
          certaines personnes qui optimisent bien mieux cette <span className="green">courbe</span> !
				</p>
				<p>On va parler dans la globalité de comment progresser sur League of Legends
          alors attachez vos ceintures il y a du boulot !
				</p>
				<Chapters title='Voici les différentes catégories qu&apos;il faut maitriser pour progresser :' list={listChapters} />
				<div className='flex justify-evenly my-1em'>
					<img className="drop-shadow-filterRed rounded-35% w-20%" src={quicklyProgress} alt="" />
					<img className="drop-shadow-filterRed w-20% rounded-35%" src={initiative} alt="" />
					<img className="drop-shadow-filterRed w-20% rounded-35%" src={trust} alt="" />
				</div>
			</Background>

			<Background title='L&apos;optimisation du temps de jeu' iconName='fas fa-hourglass-half' >
				<p>Bien évidemment on a pas tous les même emploi du temps et on ne peut pas
          tous passer le même nombre d&apos;heures sur le jeu.
				</p>
				<p>Les adultes avec un travail régulier et une vie de famille auront moins
          de temps qu&apos;un jeune étudiant sur League of Legends, mais ce n&apos;est pas une
          excuse pour baisser les bras et se dire &quot;<span className="green">oui mais je ne peux pas trop jouer donc je stuck</span>&quot;.
				</p>
				<p>NON et NON ! On peut très bien garder une bonne progression, et on va
          parler de l&apos;optimisation de votre temps.
				</p>
				<img className="w-30% rounded-md drop-shadow-filterGold my-1.5em" src={time} alt="" />
				<p>Si vous avez que 2 parties par jours (ce qui est déjà pas mal) vous devez
          absolument rester &quot;<span className="text-green">logique</span>&quot;.
				</p>
				<p>C&apos;est à dire que pour le peu de games que vous allez faire il va falloir
          rester IMPERATIVEMENT sur votre rôle et votre champion principal.
				</p>
				<p>Si vous commencez à jouez de tout et n&apos;importe quoi tout en faisant peu de games dans la semaine votre niveau va totalement s&apos;affaiblir.
				</p>
				<p>Alors si vous ne pouvez pas trop jouer, rester sur vos acquis et <span className="text-green">spammez vos champions préférés</span> !
				</p>
				<p className="mt-2em">Voici un coaching très intéressant d&apos;un abonné qui ne connait pas assez son champion, par manque d&apos;optimisation de son temps de jeu et parce qu&apos;il jouait <span className="green">trop de champions</span>.</p>
				<Youtube idYoutube="MSSYY_bY9KM" />
				<p className="mt-2em"><span className="red">Attention</span> on part du principe que vous voulez progresser, je ne vous oblige pas à jouer les même champions, si vous avez peu de temps et que vous voulez juste jouer tranquilou, allez en normale draft mais ne pénalisez pas vos alliés en classées.</p>
			</Background>

			<Background title='Créer  votre champion Pool' iconName='fas fa-users' >
				<p>Il est très important pour progresser rapidement dans league of legends
          d&apos;avoir un <span className="green">champion pool</span> pas trop grand pour très vite s&apos;habituer aux méchaniques.
				</p>
				<p>Un joueurs qui va jouer 25 champions a 99% de chance de stuck dans son elo
          et je ne rigole vraiment pas sur les stats.
				</p>
				<p>Tout le temps dans mes coachings je refais le champion pool de l&apos;élève car
          il est souvent beaucoup trop grand.
				</p>
				<p>Je conseille <span className="green">3 champions maximum</span> (3 dans votre rôle principal et 1
          champion en rôle secondaire).
				</p>
				<div className="progressLol__pictures">
					<img className="progressLol__pictures__image" src={sylasBroken} alt="" />
					<img className="progressLol__pictures__image" src={brandJungleWtf} alt="" />
					<img className="progressLol__pictures__image" src={zedForet} alt="" />
				</div>
				<p>Le problème quand vous jouez trop de champions c&apos;est que vous ne serez
          jamais à l&apos;aise avec vos champions.
				</p>
				<p>Il est pratiquement impossible de maitriser à la perfection 10 champions
          pour un joueur normal (c&apos;est le niveau des joueurs pro). Par manque
          d&apos;habitude vous allez vous concentrer sur vos sorts, vos combos, vous
          n&apos;allez pas connaître vos dégâts
          par cœur et donc votre cerveau va se concentrer UNIQUEMENT sur la
				<span className="text-green"> micro-gestion</span> (la gestion de votre champion) et va ignorer en grande partie
          la <span className="text-green">macro-game</span> (vision de jeu).
				</p>
				<p>Si vous ne savez pas quels champions ou rôles jouer n&apos;hésitez pas à
          visiter mon guide &quot;<span className="gold">TROUVER SON RÔLE/CHAMPION</span>&quot; :
				</p>
				{/* <Link to="/guides/role-champion" className="link" target="_blanc">Cliquez ici</Link> */}
				<Button category='primary'><Link to="/guides/role-champion" target="_blanc">Cliquez ici</Link></Button>
			</Background>
			<Background title='Être positif, une grande force !' iconName='fas fa-plus icons__positive' >
				<p>Vous allez vivre beaucoup de <span className="text-green">déceptions</span> dans League of Legends, c&apos;est pour
          cela qu&apos;il va falloir essayer de retenir le <span className="text-green">positif</span> pour avancer dans votre
          quête de progression !
				</p>
				<p>Être négatif et de mauvaise foi, c&apos;est retenir que le mauvais, oublier les
          games faciles et se trouver des excuses dans la défaite.
				</p>
				<p>Il n&apos;y a pas de place pour les <span className="text-green">pleurnicheuses</span> dans le haut elo de League
          of Legends, alors si vous partez du principe que vous êtes bloqués dans
          votre elo/ranking à cause de vos alliés, on est mal barrés !
				</p>
				<img className="w-23% rounded-md m-2em drop-shadow-filterRed" src={trollPicture} alt="" />
				<p>Une défaite avec un très bon score ? Oui c&apos;est dur à encaisser mais
          retenez le fait que vous avez réussi à être très bien dans la game et que
          forcément vous avez prit du plaisir à la jouer.
				</p>
				<p>Il faut accepter que <span className="text-green">pas toutes les games sont gagnables</span> et peu importe
          votre niveau de jeu.
				</p>
				<p>J&apos;ai un exemple parfait. Faker (un des meilleurs joueurs du monde) avait
          fait 5 défaites pour monter un nouveau compte jusqu&apos;au platine , et oui
          même les + grands peuvent perdre des parties, ça reste un jeu 5v5.
				</p>
				<img className="rounded-md m-2em drop-shadow-filterRed w-28%" src={giveEverything} alt="" />
				<p>Ce qu&apos;il faut retenir c&apos;est de TOUT donner à chaque game , <span className="green">on en apprend toujours et même dans la défaite</span> !
				</p>
				<p>Pour ceux qui me suivent pendant mes
          lives vous le savez déjà, même quand j&apos;enchaîne des mauvaises parties je
          suis toujours la à jouer dans la bonne humeur et ça n&apos;affecte en rien mon
          gameplay.
				</p>
				<p>Si vous voulez + de conseils pour gérer votre <span className="text-green">mental</span> & votre <span className="text-green">rage</span>,
          n&apos;hésitez pas à aller voir mon guide sur ce sujet :
				</p>
				<Button category='primary'><Link to="/guides/mental&rage" target="_blanc">Cliquez ici</Link></Button>
			</Background>

			<Background title='Ma technique secrète' iconName='fas fa-user-ninja'>
				<p>Il n&apos;y a pas de miracles dans League of Legends pour progresser, il faut
          jouer jouer et jouer, on ne peut pas atteindre un elo sans y mettre du sien.
				</p>
				<p>Par contre avec le temps j&apos;ai remarqué que les élèves qui jouaient &quot;<span className="text-green">safe</span>&quot;
          et qui ne tentaient pas de plays progressaient beaucoup moins vite que les élèves <span className="text-green">agressifs</span>.
				</p>
				<p>Et vous allez voir que c&apos;est logique avec les détails, c&apos;est pour ça que
          je vais vous expliquer ma technique secrète dans cette vidéo :
				</p>
				<p>La technique Paire de Couilles. </p>
				<p>(Oui désolé pour le nom mais j&apos;en suis fier)</p>
				<Youtube idYoutube="EDA82qt7AyY" />
				<p className='mt-4em'>Vous l&apos;avez donc compris, on tente les plays, on se sort les doigts, on connait ses <span className="text-green">limites</span> et le potentiel de son champion et donc on sait quand on peut go in ou reculer ! </p>
				<p>Jouer safe vous empêche de connaître vos <span className="text-green">limites</span> et c&apos;est le problème de
          BEAUCOUP de joueurs bloqués dans un elo.
				</p>
				<p>J&apos;ai remarqué que certains élèves n&apos;osaient pas tenter les plays parce
          qu&apos;ils avaient <span className="text-green">peur de se faire flame</span> par les alliés en cas de fail.
				</p>
				<p>Si le jugement de vos alliés vous fait peur il y a le bouton &quot;MUTE&quot;.
          Faites moi confiance il n&apos;y a aucun intérêt à jouer safe dans
          l&apos;apprentissage d&apos;un champion ou d&apos;un rôle.
				</p>
				<p className="mt-4em">
          Voici une vidéo ou je coach un abonné qui joue LUX et qui <span className="text-green">se laisse totalement dominer</span> par un RYZE à cause de son gameplay beaucoup trop safe,
          vous allez voir le problème directement lié à ma technique.
				</p>
				<Youtube idYoutube="yX6EcSmjQRU" />
				<p className='mt-4em'>
          Une autre vidéo intéressante ou je coach une abonnée qui joue support et qui
          elle aussi se laisse dominer, ne tente pas de plays, ne poke pas bref
					<span className="text-green">évitez ce genre de gameplay</span> si vous voulez progresser !
				</p>
				<Youtube idYoutube="-Y35aQrFt9g" />
				<p className='mt-4em'>Pour terminer ce thème encore un coaching très important d&apos;un élève qui joue Ahri, il a réussi a avoir un <span className="text-green">très bon score</span> mais il perd la partie par manque d&apos;initiative.<br /><span className="text-green">Il laisse ses adversaires dominer la map</span> et les objectifs alors qu&apos;il peut changer les choses avec ses ressources !</p>
				<Youtube idYoutube="djvQl7o_He0" />
			</Background>
	
			<Background title='La connaissance' iconName='fas fa-book icons__book'>
				<p>C&apos;est bien beau d&apos;avoir les <span className="text-green">mechaniques du champion</span>, d&apos;être à l&apos;aise dans
          son gameplay, d&apos;avoir du temps pour jouer, d&apos;être positif à 100% mais il
          manque quelque chose de vital mes petits : <span className="text-green">LA CONNAISSANCE & LE SAVOIR</span> !
				</p>
				<p>Premièrement il est vital de connaître son champion par coeur ! Le stuff à
          faire selon le patch, les sorts à augmenter en priorité, la façon de jouer
          les teamfights, les bonnes Maîtrises, connaître les champion counter ou
          qu&apos;on counter etc...
				</p>
				<p>Tout ça se travail en jouant à fond le champion, oui je me répète beaucoup
          mais encore une fois j&apos;insiste n&apos;hésitez pas à spam un champion précis
          quand vous voulez progresser rapidement dessus, ce n&apos;est pas en le jouant <span className="text-green">1 partie par jour que vous allez vous améliorer</span>.
				</p>
				<p className='mt-2em'>Dans ce coaching je vais vous expliquer pourquoi c&apos;est très important de connaître le potentiel de votre champion à 100%</p>
				<Youtube idYoutube="90Fk-maGe8k" />
				<p className="mt-4em">Pour ce qui est du stuff et des runes à utiliser ainsi que les sorts à améliorer en priorité selon les patchs je vous conseille d&apos;utiliser <span className="text-green">PROBUILD</span>, car les meilleurs joueurs sont obligés d&apos;optimiser pour pouvoir monter donc ça sera à 95% le bon stuff à faire.</p>
				<Button category='primary'>
					<a href="https://www.probuilds.net/" target="_blanc">ProBuild Cliquez ici</a>
				</Button>
				<p className="mt-4em">Le stuff est-il si important que ça dans League of Legends ? Bien evidemment que oui, acheter le mauvais stuff c&apos;est mal investir les golds que l&apos;on obtient dans la faille.</p>
				<p>League of Legends est un jeu gros jeu de snowball (<span className="text-green">effet boule de neige</span>)
          donc quand vous avez de l&apos;avance et que vous n&apos;achetez pas les bon objets vous
          n&apos;arriverez pas à carry certaines games.
				</p>
				<p>Je vous conseille d&apos;aller sur le client de League of legends et d&apos;aller
          dans &quot;<span className="text-green">collection</span>&quot; pour voir et lire tous les objets du jeu, histoire de
          bien se familiariser et d&apos;essayer par vous même d&apos;imaginer un stuff pour
          votre personnage.
				</p>
				<p>Il est important de <span className="test-green">comprendre ce que l&apos;on fait</span> et pas de copier bêtement un stuff d&apos;une vidéo ou d&apos;un guide.
				</p>
				<p className="mt-4em">Dans ce coaching d&apos;un élève, on
          remarque que le stuff dans la game en général est une catastrophe, mal
          optimisé donc les joueurs perdent un <span className="text-green">gros potentiel de victoire</span> !
				</p>
				<Youtube idYoutube="V5ZCs62ujoI" />
				<p className="mt-4em">Maintenant voici une vidéo qui regroupe un peu tout ce qu&apos;on a dit, ça devrait compléter le guide écrit !</p>
				<Youtube idYoutube="AC1t5ESlfrM" />
				<p className="mt-4em">Et pour terminer voici l&apos;épisode 1 de ma série de gameplays &quot;<span className="green">PROGRESSER SUR LEAGUE OF LEGENDS</span>&quot; au programme environ 30 vidéos ou je joue plein de champions dans des rôles différents et j&apos;explique tout ce que je fais dans les games. Parfait pour <span className="green">bien apprendre</span> et reproduire ensuite dans vos parties !</p>
				<Youtube idYoutube="EsgqDFrnVt0" />
			</Background>
			<Background>
				<p>Pour résumer sur cette page qui parle de la progression dans League of Legends, optimisez votre temps de jeu, trouvez vos champions principaux, soyez positifs, tentez les plays pour connaître vos limites et renseignez-vous sur vos champions au maximum !<br /> <span className="text-gold">Le diamant est tout proche</span>, donnez tout pour l&apos;obtenir...</p>
				<p>J&apos;espère que ce guide vous aura aidé, à bientôt sur la faille la <span className="red">#TEAMSLIP</span></p>
				<img className="drop-shadow-filterGreen w-20% m-2em rounded-md" src={trollPotter} alt="" />
				<p className="text-3xl">N&apos;hésitez pas à aller consulter les autres guides de Coach Slipix</p>
			</Background>
		</motion.div>
	);
};

export default ProgressLol;
