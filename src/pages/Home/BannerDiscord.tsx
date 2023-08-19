
import discord from '@/assets/images/socialNetwork/discord.png';
import discordTitle from '@/assets/images/socialNetwork/discordTitle.png';
import teamSlip from '@/assets/images/teamSlip.png';

const BannerDiscord = () => (
	<div className="text-0.6em font-bold flex w-50% rounded bg-bgColor p-y-3em transition-all hover:shadow-home_discord cursor-pointer hover:scale-101 m-y-5em">
		<a href="https://discord.com/invite/fsTYTg5" target="_blanc">
			<div className="flex justify-between">
				<div className="flex w-50% justify-center m-auto">
					<img className="w-70%" src={discordTitle} alt="discord" />
				</div>
				<div className="flex flex-col text-center w-30% m-auto">
					<p className='text-3xl'>Rejoins Nous</p>
					<div className="flex justify-evenly">
						<img className="w-25%" src={discord} alt="" />
						<img className="w-25%" src={teamSlip} alt="" />
					</div>
				</div>
			</div>
		</a>
	</div>
);

export default BannerDiscord;
