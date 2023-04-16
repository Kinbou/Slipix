import { Link } from 'react-router-dom';
import Youtube from '@components/Youtube/Youtube';
import { motion } from 'framer-motion';

import { animationOne, transition } from '@/utils/animations/index';
import { useTitle } from '@/hooks/useTitle';
import './mental&rage.scss';

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
			className="guide"
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
			<h1 className="globalTitle-page">Mental & Rage</h1>
			<div className="guide__intro">
				<div className="guide__content">
					<p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c&apos;est Coach Slipix et on va parler du <span className="blue">mental</span> & la <span className="red">rage</span> dans League of Legends !</p>
					<img className="logo" src={logoSlipix} alt="" />
				</div>
			</div>
			<div className="backgroundParagraphe guide__mental">
				<h2 className="blue"><i className="fas fa-brain icons__brain" />Le mental<i className="fas fa-brain icons__brain" /></h2>
				<p className="paragraph">Le <span className="blue">mental</span> est très important pour tenir la pression qui est totalement présente dans les jeux vidéos. Il permet également d&apos;éviter une étape qui va vous faire perdre beaucoup de games : La <span className="red">rage</span>. Mais ça vous le savez déjà, c&apos;est bien pour cela que vous avez cliqué sur ce guide (c&apos;est bien d&apos;assumer).</p>
				<img className="guide__mental__cerveau" src={cerveau} alt="" />
				<p className="paragraph">Avoir un bon <span className="blue">mental</span> vous permettra d&apos;enchaîner vos parties sans pour autant être trop affecté par de mauvaises games. Par exemple un joueur qui a un faible <span className="blue">mental</span> ne va pas jouer de la même façon après 2 défaites alors que un joueur qui a bossé son <span className="blue">mental</span> pourra enchaîner sans trop de problèmes.</p><br />
				<p className="paragraph">Ne pas oublier que avoir un bon <span className="blue">mental</span> signifie &quot;rester positif&quot; et ce même dans une game très compliquée, par exemple quand je suis dans un bon <span className="blue">mental</span> je vais encourager mes alliés en écrivant dans le tchat des &quot;<span className="gold">Well played</span>&quot; ou des &quot;<span className="gold">wow gg</span>&quot;, ça peut paraître pas grand chose mais parfois les petits détails font gagner les + grandes guerres.</p><br />
				<p className="paragraph"> Un allié qui était peut être épuisé de ses games précédentes? Un allié qui commençait à être <span className="red">toxic</span> ? Peut être que grâce à votre positivité il va essayer de faire un effort et la game sera bien + agréable. (bien sûr ce n&apos;est pas valable pour toutes les games)</p>
				<p className="paragraph beforeYoutube">Comment bosser son <span className="blue">mental</span> ? Il n&apos;y a pas de méthodes miracle, il faut premièrement RELATIVISER et en tirer que le positif ! Une mauvaise défaite, un AFK dans votre team, un gamin qui vous insulte ?</p>
				<img className="guide__mental__picture" src={OMental} alt="" />
				<p className="paragraph"> Ce n&apos;est pas très grave, on passe vite à la game suivante et on essaye de se rappeler d&apos;une victoire avec de bon alliés ou une victoire que vous avez <span className="gold">hard carry</span>.</p>
				<p className="paragraph">Ce n&apos;est bien évidemment pas facile mais avec le temps ça ira beaucoup mieux, faites moi confiance se plaindre dans League of Legends ne vous attirera rien de bon si ce n&apos;est de l&apos;<span className="red">ego surdimensionné</span> et l&apos;impression de n&apos;avoir rien à se reprocher.</p>
				<p className="paragraph beforeYoutube">Voici une vidéo indispensable ou j&apos;explique à un abonné que <span className="red">rager</span> et se <span className="red">plaindre</span> ne l&apos;aidera jamais</p>
				<Youtube className="guide__mental__youtube" idYoutube="vWfeB_2kbU4" />
				<p className="paragraph afterYoutube">Un mauvais <span className="blue">mental</span> peut-il carrément changer votre façon de jouer ? Et bien oui, dans mes coachings j&apos;ai remarqué que un élève avait un gameplay totalement différent après une série victoires et une série de défaites.</p>
				<p className="paragraph">Après la série de défaites, souvent les joueurs ont une perte de confiance et se mettent à jouer ultra safe et sans tenter de plays, ce n&apos;est clairement pas la bonne solution.</p>
				<p className="paragraph beforeYoutube">Dans ce coaching de niveau <span className="gold">Gold/Platine</span> on assiste à l&apos;exemple parfait du joueur qui a perdu confiance en lui à cause des défaites !</p>
				<Youtube idYoutube="K2DZTVPWhYg" />
				<p className="paragraph afterYoutube">Souvent en tant que spectateur d&apos;un contenu <span className="red">Youtube</span>/<span className="twitch">Twitch</span> vous faites des remarques de différence de niveaux entre des bons joueurs dans une partie , et bien oui parfois on va remarquer une énorme différence parce que un des joueurs va perdre son <span className="blue">mental</span> et donc environ 25% de ses capacités sur le jeu.</p>
				<p className="paragraph">Sauf que 25% de capacités en haut elo sur League of Legends ça va se ressentir dès le début de partie et donc mener à faire de très mauvais scores. Ce n&apos;est pas que le joueur est forcément mauvais, si il est arrivé dans le haut elo il ne l&apos;est probablement pas. C&apos;est qu&apos;il ne se donne plus à fond et lance une game même sans en avoir envie !</p>
				<p className="paragraph beforeYoutube">Dans cette vidéo vous allez assister à une partie de niveau Haut <span className="gold">Diamant/Master</span> qui n&apos;a absolument aucun sens, oui on dirait une game de bas elo mais c&apos;est juste que mes ennemis étaient dans un très mauvais <span className="blue">mental</span> et donc ils jouent très mal !</p>
				<Youtube idYoutube="mhxVmuJkNwU" />
			</div>
			<div className="backgroundParagraphe guide__rage">
				<h2 className="rage red"><i className="fas fa-fist-raised icons__raised" />La rage<i className="fas fa-fist-raised icons__raised" /></h2>
				<p className="paragraph">La <span className="red">rage</span>, la <span className="red">toxicité</span> et la mauvaise foi seront vos pires ennemis sur League of Legends. On pourrait se dire qu&apos;on est tous différent et pourtant même le joueur le + calme du monde est capable de vriller dans League of Legends. Le matin on se lève tout va bien puis le soir après 4 défaites c&apos;est la fin du monde. Au final votre pire ennemi c&apos;est clairement vous-même, mais ne vous inquiétez pas Coach Slipix est la pour vous aider héhé !</p>
				<img className="guide__rage__content__rage" src={rage} alt="" />
				<p className="paragraph">Dans les stats de <span className="gold">Riot Games</span> un joueur dans une phase de <span className="red">rage</span>/<span className="red">tilt</span> perd environ 25% de games en + (aie ça fait mal). On pourrait croire que c&apos;est une stratégie pour nous dire de se ressaisir mais malheureusement c&apos;est bien le cas.</p>
				<p className="paragraph"> Avec toute l&apos;expérience que j&apos;ai acquise dans mes coachings je peux vous assurer à 300% (300 c&apos;est stylé puis je suis d&apos;origine spartiate AOUH) que c&apos;est bien vrai !</p>
				<p className="paragraph">Dans un état de <span className="red">rage</span> ou de <span className="red">toxicité</span> vous n&apos;allez jamais retenir le positif, être désagréable, perdre votre temps dans le tchat, être <span className="red">défaitiste</span> alors que la game n&apos;a même pas commencée et j&apos;en oublie !</p>
				<img className="guide__rage__content__textRage" src={textRage} alt="" />
				<p className="paragraph">Alors maintenant on va trouver une solution ! Voici mes 4 étapes pour éviter de trop <span className="red">rager</span> sur le jeu :</p>
				<ul>
					<li><i className="fas fa-plus-circle positif" />Faire des pauses entre les défaites, 15 minutes minimum oui c&apos;est beaucoup mais c&apos;est indispensable pour repartir à 0 mentalement !</li>
					<li><i className="fas fa-plus-circle positif" />Ne pas jouer si vous n&apos;avez pas envie, Oui j&apos;ai remarqué que beaucoup de mes élèves lancent des parties juste pour &quot;monter en elo&quot; et pas forcément pour jouer à son jeu préféré !</li>
					<li><i className="fas fa-plus-circle positif" />Mute le tchat dans la game, Oui parfois on a besoin de se concentrer sur nous même et si vous êtes sensible aux alliés qui écrivent des abominations, go bouton MUTE !</li>
					<li><i className="fas fa-plus-circle positif" />Faites de la DuoQ avec un joueur qui est positif, c&apos;est toujours mieux d&apos;être accompagné pour pouvoir se rassurer et se donner à fond !</li><br />
				</ul>
				<p className="paragraph">Et toi Slipix ça t&apos;arrive de <span className="red">rager</span> ? Bien evidemment mes petits ! On <span className="red">rage</span> tous sur ce jeu c&apos;est comme ça, mais je sais le prendre sur moi ça va être la différence avec quelqu&apos;un qui n&apos;aura pas le mental pour se remettre en question et donc il va moins monter en ranked (oui ça y joue beaucoup).</p>
				<p className="paragraph betweenYoutube">Je vous ai preparé une vidéo qui regroupe toutes les situations qui me font le + <span className="red">rager</span> dans League of Legends, il est temps de voir si on a des points en commun !</p>
				<Youtube className="guide__mental__youtube" idYoutube="EvWGqQWxeU8" />
				<p className="paragraph betweenYoutube">Il n&apos;y a pas que les situations qui font <span className="red">rager</span>, certains champions vont déclencher une haine en nous quand on va jouer contre. Alors pour votre plaisir voici une vidéo qui regroupe tous les champions qui me font le + <span className="red">rager</span> dans League of Legends !</p>
				<p className="paragraph before">(On a tous nos Nemesis c&apos;est ça qui est bon)</p>
				<Youtube className="guide__mental__youtube" idYoutube="msp79-TYqtk" />
			</div>
			<div className="backgroundParagraphe">
				<p className="paragraph">Pour résumer sur cette page qui parle du <span className="blue">Mental</span> et de la <span className="red">Rage</span> ne sous-estimez jamais votre bonne humeur sur le jeu. Alors prenez du plaisir, amusez vous avec vos ami(e)s et ne lancez pas de rankeds après 7 défaites.
				</p>
				<p className="paragraph">J&apos;espère que ce guide vous aura aider , à bientôt sur la faille la <span className="red">#TEAMSLIP</span> !</p>
				<img className="guide__rage__content__troll" src={troll} alt="" />
				<p className="paragraph end">N&apos;hésitez pas à consulter les autres guides de Coach Slipix</p>
			</div>
		</motion.div>
	);
};

export default Guide;
