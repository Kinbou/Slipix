import { Link } from 'react-router-dom';
import Youtube from '@components/Youtube';
import { motion } from 'framer-motion';
import { useTitle } from '@/hooks/useTitle';

import { animationOne, transition } from '@/utils/animations/index';

import Background from '@/pages/Guides/Background';

// Picture
import logoSlipix from '@/assets/images/guides/mental&rage/slipixLogo.png';
import cerveau from '@/assets/images/guides/mental&rage/cerveau.jpg';
import OMental from '@/assets/images/guides/mental&rage/0Mental.jpg';
import rage from '@/assets/images/guides/mental&rage/rage.jpeg';
import textRage from '@/assets/images/guides/mental&rage/textRage.jpg';
import troll from '@/assets/images/guides/mental&rage/troll.jpg';

const Guide = () => {
	useTitle('Mental & Rage');
	return (
		<motion.div
			className="text flex flex-col items-center"
			key="mentalRage"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<div className="breadcrumb">
				<Link className="breadcrumb__link" to="/">Accueil </Link> &gt;
				<Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        mental&rage
			</div>
			<h1 className="h1 my-1em">Mental & Rage</h1>
			<div className="flex flex-col items-center w-100%">
				<p>Salut la <span className="red">#TEAMSLIP</span> c&apos;est Coach Slipix et on va parler du <span className="text-blue">mental</span> & la <span className="red">rage</span> dans League of Legends !</p>
				<img className="w-1O%" src={logoSlipix} alt="" />
			</div>
			<Background title='Le mental' iconName='fas fa-brain' color='blue'>
				<p>Le <span className="text-blue">mental</span> est très important pour tenir la pression qui est totalement présente dans les jeux vidéos. Il permet également d&apos;éviter une étape qui va vous faire perdre beaucoup de games : La <span className="red">rage</span>. Mais ça vous le savez déjà, c&apos;est bien pour cela que vous avez cliqué sur ce guide (c&apos;est bien d&apos;assumer).</p>
				<img className="w-35% my-2em rounded-50% drop-shadow-filterBlue" src={cerveau} alt="" />
				<p>Avoir un bon <span className="text-blue">mental</span> vous permettra d&apos;enchaîner vos parties sans pour autant être trop affecté par de mauvaises games. Par exemple un joueur qui a un faible <span className="text-blue">mental</span> ne va pas jouer de la même façon après 2 défaites alors que un joueur qui a bossé son <span className="text-blue">mental</span> pourra enchaîner sans trop de problèmes.</p><br />
				<p>Ne pas oublier que avoir un bon <span className="blue">mental</span> signifie &quot;rester positif&quot; et ce même dans une game très compliquée, par exemple quand je suis dans un bon <span className="text-blue">mental</span> je vais encourager mes alliés en écrivant dans le tchat des &quot;<span className="color-gold">Well played</span>&quot; ou des &quot;<span className="text-gold">wow gg</span>&quot;, ça peut paraître pas grand chose mais parfois les petits détails font gagner les + grandes guerres.</p><br />
				<p> Un allié qui était peut être épuisé de ses games précédentes? Un allié qui commençait à être <span className="red">toxic</span> ? Peut être que grâce à votre positivité il va essayer de faire un effort et la game sera bien + agréable. (bien sûr ce n&apos;est pas valable pour toutes les games)</p>
				<p className="mt-3em">Comment bosser son <span className="text-blue">mental</span> ? Il n&apos;y a pas de méthodes miracle, il faut premièrement RELATIVISER et en tirer que le positif ! Une mauvaise défaite, un AFK dans votre team, un gamin qui vous insulte ?</p>
				<img className="w-35% my-1em rounded-md drop-shadow-filterRed" src={OMental} alt="" />
				<p> Ce n&apos;est pas très grave, on passe vite à la game suivante et on essaye de se rappeler d&apos;une victoire avec de bon alliés ou une victoire que vous avez <span className="text-gold">hard carry</span>.</p>
				<p>Ce n&apos;est bien évidemment pas facile mais avec le temps ça ira beaucoup mieux, faites moi confiance se plaindre dans League of Legends ne vous attirera rien de bon si ce n&apos;est de l&apos;<span className="red">ego surdimensionné</span> et l&apos;impression de n&apos;avoir rien à se reprocher.</p>
				<p className="mt-3em">Voici une vidéo indispensable ou j&apos;explique à un abonné que <span className="red">rager</span> et se <span className="red">plaindre</span> ne l&apos;aidera jamais</p>
				<Youtube idYoutube="vWfeB_2kbU4" />
				<p className="mt-3em">Un mauvais <span className="text-blue">mental</span> peut-il carrément changer votre façon de jouer ? Et bien oui, dans mes coachings j&apos;ai remarqué que un élève avait un gameplay totalement différent après une série victoires et une série de défaites.</p>
				<p>Après la série de défaites, souvent les joueurs ont une perte de confiance et se mettent à jouer ultra safe et sans tenter de plays, ce n&apos;est clairement pas la bonne solution.</p>
				<p className="mt-3em">Dans ce coaching de niveau <span className="text-gold">Gold/Platine</span> on assiste à l&apos;exemple parfait du joueur qui a perdu confiance en lui à cause des défaites !</p>
				<Youtube idYoutube="K2DZTVPWhYg" />
				<p className="mt-3em">Souvent en tant que spectateur d&apos;un contenu <span className="red">Youtube</span>/<span className="twitch">Twitch</span> vous faites des remarques de différence de niveaux entre des bons joueurs dans une partie , et bien oui parfois on va remarquer une énorme différence parce que un des joueurs va perdre son <span className="text-blue">mental</span> et donc environ 25% de ses capacités sur le jeu.</p>
				<p>Sauf que 25% de capacités en haut elo sur League of Legends ça va se ressentir dès le début de partie et donc mener à faire de très mauvais scores. Ce n&apos;est pas que le joueur est forcément mauvais, si il est arrivé dans le haut elo il ne l&apos;est probablement pas. C&apos;est qu&apos;il ne se donne plus à fond et lance une game même sans en avoir envie !</p>
				<p className="mt-3em">Dans cette vidéo vous allez assister à une partie de niveau Haut <span className="text-gold">Diamant/Master</span> qui n&apos;a absolument aucun sens, oui on dirait une game de bas elo mais c&apos;est juste que mes ennemis étaient dans un très mauvais <span className="text-blue">mental</span> et donc ils jouent très mal !</p>
				<Youtube idYoutube="mhxVmuJkNwU" />
			</Background>
			<Background title='La rage' iconName='fas fa-fist-raised' color='red-800'>
				<p>La <span className="red">rage</span>, la <span className="red">toxicité</span> et la mauvaise foi seront vos pires ennemis sur League of Legends. On pourrait se dire qu&apos;on est tous différent et pourtant même le joueur le + calme du monde est capable de vriller dans League of Legends. Le matin on se lève tout va bien puis le soir après 4 défaites c&apos;est la fin du monde. Au final votre pire ennemi c&apos;est clairement vous-même, mais ne vous inquiétez pas Coach Slipix est la pour vous aider héhé !</p>
				<img className="drop-shadow-filterRed w-32% my-2em rounded-50%" src={rage} alt="" />
				<p>Dans les stats de <span className="text-gold">Riot Games</span> un joueur dans une phase de <span className="red">rage</span>/<span className="red">tilt</span> perd environ 25% de games en + (aie ça fait mal). On pourrait croire que c&apos;est une stratégie pour nous dire de se ressaisir mais malheureusement c&apos;est bien le cas.</p>
				<p> Avec toute l&apos;expérience que j&apos;ai acquise dans mes coachings je peux vous assurer à 300% (300 c&apos;est stylé puis je suis d&apos;origine spartiate AOUH) que c&apos;est bien vrai !</p>
				<p>Dans un état de <span className="red">rage</span> ou de <span className="red">toxicité</span> vous n&apos;allez jamais retenir le positif, être désagréable, perdre votre temps dans le tchat, être <span className="red">défaitiste</span> alors que la game n&apos;a même pas commencée et j&apos;en oublie !</p>
				<img className="drop-shadow-filterBlack w-33% rounded-md my-2em" src={textRage} alt="" />
				<p className='mt-2em'>Alors maintenant on va trouver une solution ! Voici mes 4 étapes pour éviter de trop <span className="red">rager</span> sur le jeu :</p>
				<ul className='border border-solid border-gold rounded-md my-1em w-90% text-left p-2em'>
					<li><i className="fas fa-plus-circle text-green mr-0.5em" />Faire des pauses entre les défaites, 15 minutes minimum oui c&apos;est beaucoup mais c&apos;est indispensable pour repartir à 0 mentalement !</li>
					<li><i className="fas fa-plus-circle text-green mr-0.5em" />Ne pas jouer si vous n&apos;avez pas envie, Oui j&apos;ai remarqué que beaucoup de mes élèves lancent des parties juste pour &quot;monter en elo&quot; et pas forcément pour jouer à son jeu préféré !</li>
					<li><i className="fas fa-plus-circle text-green mr-0.5em" />Mute le tchat dans la game, Oui parfois on a besoin de se concentrer sur nous même et si vous êtes sensible aux alliés qui écrivent des abominations, go bouton MUTE !</li>
					<li><i className="fas fa-plus-circle text-green mr-0.5em" />Faites de la DuoQ avec un joueur qui est positif, c&apos;est toujours mieux d&apos;être accompagné pour pouvoir se rassurer et se donner à fond !</li>
				</ul>
				<p>Et toi Slipix ça t&apos;arrive de <span className="red">rager</span> ? Bien evidemment mes petits ! On <span className="red">rage</span> tous sur ce jeu c&apos;est comme ça, mais je sais le prendre sur moi ça va être la différence avec quelqu&apos;un qui n&apos;aura pas le mental pour se remettre en question et donc il va moins monter en ranked (oui ça y joue beaucoup).</p>
				<p className="mt-3em">Je vous ai preparé une vidéo qui regroupe toutes les situations qui me font le + <span className="red">rager</span> dans League of Legends, il est temps de voir si on a des points en commun !</p>
				<Youtube className="guide__mental__youtube" idYoutube="EvWGqQWxeU8" />
				<p className="mt-3em">Il n&apos;y a pas que les situations qui font <span className="red">rager</span>, certains champions vont déclencher une haine en nous quand on va jouer contre. Alors pour votre plaisir voici une vidéo qui regroupe tous les champions qui me font le + <span className="red">rager</span> dans League of Legends !</p>
				<p className="mt-2em">(On a tous nos Nemesis c&apos;est ça qui est bon)</p>
				<Youtube className="guide__mental__youtube" idYoutube="msp79-TYqtk" />
			</Background>
			<Background>
				<p>Pour résumer sur cette page qui parle du <span className="text-blue">Mental</span> et de la <span className="red">Rage</span> ne sous-estimez jamais votre bonne humeur sur le jeu. Alors prenez du plaisir, amusez vous avec vos ami(e)s et ne lancez pas de rankeds après 7 défaites.
				</p>
				<p>J&apos;espère que ce guide vous aura aider , à bientôt sur la faille la <span className="red">#TEAMSLIP</span> !</p>
				<img className="drop-shadow-filterYellow rounded-md w-30% my-2em" src={troll} alt="" />
				<p className="text-3xl mt-1em">N&apos;hésitez pas à consulter les autres guides de Coach Slipix</p>
			</Background>
		</motion.div>
	);
};

export default Guide;
