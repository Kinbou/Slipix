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
			className="text-center text-white flex flex-col items-center text"
			key="support"
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<h1 className="global_title">Me Soutenir</h1>
			<Slideshow />
			<div className="bg-support py-1rem px2rem rounded-3xl my-8 w-70%">
				<SupportComponent title='Comment soutenir mon site League of Legends ?'>
					<p>Si vous avez cliqué ici c&apos;est que vous voulez peut être soutenir mon site
          et je vous en remercie énormément.
					</p><br />
					<p>Il existe plusieurs façons de le faire, que ça soit gratuit ou payant.</p>
				</SupportComponent>
				<div className="border border-gold border-solid border-b-1 my-6" />
				<SupportComponent title="Me soutenir gratuitement avec" icon={<img className='relative ml-3 w-10% -bottom-5' src={twitchPrime} alt="" />}>
					<p>Vous pouvez vous abonner à ma chaine Twitch <span>&quot;Slipixxx&quot;</span> Gratuitement si vous possédez un compte <span className="blue">Amazon Premium</span>.<br />Vous aurez les même avantages que les autres abonnés : Pas de publicités pendant les lives, un badge à côté de votre pseudo, des émoticones super stylées, un tchat réservé pour les abonnés ainsi que des avantages sur le discord <span className="red">#TEAMSLIP</span>. <Button><a  type="a" href="https://www.twitch.tv/products/slipixxx" target="_blanc">Cliquez ici</a></Button></p>
				</SupportComponent>
				<div className="border border-gold border-solid border-b-1 my-6" />
				<SupportComponent title="Me soutenir avec un don" icon={<i className="fas fa-coins ml-4" />}>
					<p>Vous pouvez me soutenir directement avec un don , merci énormément pour
            votre soutien !
					</p>
					<p>La totalité des dons sera utilisée pour améliorer ce site, vous pouvez utiliser <span className="blue">Paypal</span>, <span className="blue">Skrill</span> (Paysafe Card) ou bien une <span className="blue">carte bancaire</span>. <Button><a type="a" href="https://streamlabs.com/slipixxx/tip" target="_blanc">Cliquez ici</a></Button></p>
				</SupportComponent>
				<div className="border border-gold border-solid border-b-1 my-6" />
				<SupportComponent title="Me suivre c'est me soutenir" icon={<i className="fas fa-headset ml-4" />}>
					<p>Vous pouvez me suivre sur mes réseaux sociaux pour ne rien rater de mon contenu !</p>
					<p>J&apos;utilise actuellement : <span className="">Tiktok</span>, <span className="blue">Twitter</span>,
						<span className="instagram"> Instagram</span> alors n&apos;hésitez pas à me rejoindre. J&apos;organise des
            concours pour gagner des skins sur <span className="green">League of Legends</span> et d&apos;autres cadeaux
					</p>
					<div className="flex justify-around">
						<a href="https://www.tiktok.com/@slipixtv" className="w-27%" target="_blanc"><img className="w-40% flex flex-col bg-transparent justify-center shadow-3xl p-4" src={tiktok} alt="" /></a>
						<a href="https://twitter.com/SlipixLoL" target="_blanc"><img className="support__content__social__picture__card logo" src={twitter} alt="" /></a>
						<a href="https://www.instagram.com/slipixlol/?hl=fr" target="_blanc"><img className="support__content__social__picture__card logo" src={instagram} alt="" /></a>
					</div>
				</SupportComponent>
			</div>
		</motion.div>
	);
};

export default Support;
