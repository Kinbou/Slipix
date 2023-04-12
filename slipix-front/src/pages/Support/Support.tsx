import { useTitle } from '@/hooks/useTitle';
import { motion } from 'framer-motion';

import { animationOne, transition } from '@/utils/animations/index';

import Slideshow from '@components/Slideshow/index';

// images
import tiktok from '@/assets/images/socialNetwork/tiktok.png';
import twitter from '@/assets/images/socialNetwork/twitter.png';
import instagram from '@/assets/images/socialNetwork/Instagram.png';
import twitchPrime from '@/assets/images/twitchPrime.png';
import SupportComponent from './SupportComponent/SupportComponent';
import Button from '@/components/Buttons/Button/Button';

import './support.scss';

const Support = () => {
	useTitle('Me soutenir');

	return (
		<motion.div
			className="support"
			key="support"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<h1 className="globalTitle-page">Me Soutenir</h1>
			<Slideshow />
			<div className="support__content">
				<SupportComponent title='Comment soutenir mon site League of Legends ?'>
					<p>Si vous avez cliqué ici c&apos;est que vous voulez peut être soutenir mon site
          et je vous en remercie énormément.
					</p><br />
					<p>Il existe plusieurs façons de le faire, que ça soit gratuit ou payant.</p>
				</SupportComponent>
				<div className="betweenParagraph" />
				<SupportComponent title="Me soutenir gratuitement avec" icon={<img className='twitch' src={twitchPrime} alt="" />}>
					<p>Vous pouvez vous abonner à ma chaine Twitch <span>&quot;Slipixxx&quot;</span> Gratuitement si vous possédez un compte <span className="blue">Amazon Premium</span>.<br />Vous aurez les même avantages que les autres abonnés : Pas de publicités pendant les lives, un badge à côté de votre pseudo, des émoticones super stylées, un tchat réservé pour les abonnés ainsi que des avantages sur le discord <span className="red">#TEAMSLIP</span>. <Button><a  type="a" href="https://www.twitch.tv/products/slipixxx" target="_blanc">Cliquez ici</a></Button></p>
				</SupportComponent>
				<div className="betweenParagraph" />
				<SupportComponent title="Me soutenir avec un don" icon={<i className="fas fa-coins icons__coins" />}>
					<p>Vous pouvez me soutenir directement avec un don , merci énormément pour
            votre soutien !
					</p>
					<p>La totalité des dons sera utilisée pour améliorer ce site, vous pouvez utiliser <span className="blue">Paypal</span>, <span className="blue">Skrill</span> (Paysafe Card) ou bien une <span className="blue">carte bancaire</span>. <Button><a type="a" href="https://streamlabs.com/slipixxx/tip" target="_blanc">Cliquez ici</a></Button></p>
				</SupportComponent>
				<div className="betweenParagraph" />
				<SupportComponent title="Me suivre c'est me soutenir" icon={<i className="fas fa-headset icons__headset" />}>
					<p>Vous pouvez me suivre sur mes réseaux sociaux pour ne rien rater de mon contenu !</p>
					<p>J&apos;utilise actuellement : <span className="">Tiktok</span>, <span className="blue">Twitter</span>,
						<span className="instagram"> Instagram</span> alors n&apos;hésitez pas à me rejoindre. J&apos;organise des
            concours pour gagner des skins sur <span className="green">League of Legends</span> et d&apos;autres cadeaux
					</p>
					<div className="support__content__social__picture">
						<a href="https://www.tiktok.com/@slipixtv" className="logo logo__tiktok" target="_blanc"><img className="support__content__social__picture__card" src={tiktok} alt="" /></a>
						<a href="https://twitter.com/SlipixLoL" target="_blanc"><img className="support__content__social__picture__card logo" src={twitter} alt="" /></a>
						<a href="https://www.instagram.com/slipixlol/?hl=fr" target="_blanc"><img className="support__content__social__picture__card logo" src={instagram} alt="" /></a>
					</div>
				</SupportComponent>
			</div>
		</motion.div>
	);
};

export default Support;
