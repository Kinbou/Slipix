import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import cx from 'classnames';

import { Objects, Lanes, Counter, Video, Rune } from '@/api/trollpick/models';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectTrollpick, trollpick_actions } from '@/store/trollpick/trollpick.slice';
import { useTitle } from '@/hooks/useTitle';
import { PageCategory } from '@/models/breadcrumb';

import Background from '@pages/Guides/Background';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import Youtube from '@components/Youtube';
import Loader from '@components/Loader';

import './trollpick.scss';

interface ImageProps {
  id: number,
  urlImage: string,
}
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Trollpick = () => {
	const dispatch = useAppDispatch();
	const { trollpick } = useAppSelector(selectTrollpick);
	const slug = useParams();
	useTitle(`Trollpicks - ${slug.name}`);

	useEffect(() => {
		if (slug.id) {
			dispatch(trollpick_actions.getOneTrollpick(slug.id));
		}
	}, []);

	console.log('pagecategory', PageCategory);
	return (

		<div className='text'>
			{/* {!trollpickIsLoad && <Loader />} */}
			{true && (
				<>
					<Breadcrumb pageName={trollpick.name} pageCategory={PageCategory?.trollpicks} />
					<div className='flex flex-col items-center'>
						<h1 className="h1 my-1em">{trollpick.name}</h1>
						<p>Salut la <span className="red">#TEAMSLIP</span> c&apos;est Coach Slipix et on va parler de <span className="gold">{trollpick?.nameIntro}</span> {trollpick?.nameIntro2} dans League of Legends !</p>
						<img className="w-25%" src={`${apiBaseUrl}/${trollpick?.logo}`} alt="" />

						<Background>
							<p className="gold mb-1.5rem text">{trollpick?.introIntro && parse(trollpick?.introIntro)}</p>
							{trollpick?.introContent && parse(trollpick?.introContent)}
							<div className="flex justify-evenly m-2em">
								{trollpick?.trollpickIntroImages?.map((img: ImageProps) => (
									<img className={'w-25% rounded-35% drop-shadow-filterYellow'} src={`${apiBaseUrl}/${img?.urlImage}`} key={img.id} alt="" />
								))}
							</div>
						</Background>

						{/* Page de runes */}
						<Background title='La page des runes' iconName="fas fa-scroll">
							<p>Voici selon moi la meilleure page des runes pour <span className='gold'>{trollpick.name}</span>. Vous pouvez modifier à votre sauce si vous avez des préférences !</p>
							<img className="w-70% m-2rem card" src={`${apiBaseUrl}/${trollpick?.runePicture}`} alt="" />
							<div className="trollpick__runes__list">
								<ul className='border-2px border-solid border-gold p-2rem rounded-xl'>
									{trollpick?.trollpickRunes?.map((rune: Rune) => (
										<div className="flex border-solid border-gold border-b mb-1rem p-1em" key={rune?.id}>
											<img className="w-48px rounded-50% h-48px" src={`${apiBaseUrl}/${rune?.rune?.image}`} alt="" />
											<li className='flex-col items-start justify-center flex m-l-1rem'><p className={`decoration-underline p-0 ${rune?.rune?.color}`}>{rune?.rune?.title}:</p><p className='text-left'>{rune?.description}</p></li>
										</div>
									))}
									<li>{trollpick?.runeContentEnd}</li>
								</ul>
							</div>
						</Background>

						{/* Les objets */}
						<Background title='Les objets' iconName='fas fa-gavel'>
							{trollpick?.objectsContent && parse(trollpick?.objectsContent)}
							{trollpick?.objects?.length ? (
								<div>
									{trollpick?.objects?.map((object: Objects) => (<img key={object.id} src={`${apiBaseUrl}/${object.image}`} className="w-80px rounded-xl m-.5rem drop-shadow-filterObject" alt="" />))}
								</div>
							) : null}
						</Background>

						{/* Les sort d'invocateurs */}
						<Background title="Les sorts d'invocateurs" iconName='fas fa-dragon'>
							<p className="mb-2rem text-1.5em"><span className="gold">{trollpick.nameIntro}</span> peut se jouer :</p>
							<div className='flex' style={{ justifyContent: trollpick?.trollpick_lanes?.length > 2 ? 'space-around' : 'center' }}>
								{trollpick?.trollpick_lanes?.map((lane: Lanes) => (
									<div key={lane.id} className='mx-1.5rem'>
										<img src={`${apiBaseUrl}/${lane.lane.image}`} className="w-80px" alt="" />
										<div className="flex flex-col border-2px border-solid border-gold rounded-xl p-1rem">
											<p>{lane.lane.name}</p>
											<div className='flex items-center text-2em'>
												<img className="w-60px m-.5rem rounded-md" src={`${apiBaseUrl}/${lane?.first_level?.first_spell?.image}`} alt="" /> + <img src={`${apiBaseUrl}/${lane?.first_level?.second_spell?.image}`} className="w-60px rounded-md m-0.5rem" alt="" />
											</div>
											{lane.second_level_id ? (
												<div className='flex items-center text-2em'>
													<img className="w-60px m-0.5rem rounded-md" src={`${apiBaseUrl}/${lane?.second_level?.first_spell?.image}`} alt="" /> + <img src={`${apiBaseUrl}/${lane?.second_level?.second_spell?.image}`} className="w-60px m-.5rem" alt="" />
												</div>
											) : null}
										</div>
									</div>
								))}
							</div>

						</Background>

						{/* Les sorts du champion */}
						<Background title='Les sorts du champion' iconName='fas fa-hat-wizard'>
							<p className="text-xl mb-2rem">Voici l&apos;ordre des sorts à maxer en priorité quand vous jouez <span className='gold'>{trollpick.name}</span>:</p>
							<div className='flex items-center justify-center mb-2rem'>
								{trollpick?.sortsOrder?.split('+')?.map((el: string, index: number) => (
									<>
										<div key={el} className='my-1rem mx-.5rem rounded-xl border-2px border-solid border-gold px-.5rem py-.2rem'>
											<p>{el}</p>
											<img className="w-60px" src={`${apiBaseUrl}/images/trollpicks/${trollpick.name.replaceAll(' ', '')}/spells/spell${el}.png`} alt="" />
										</div>
										{index + 1 !== trollpick?.sortsOrder?.split('+').length && <span className="text-2em my-.5rem">+</span>}
									</>
								))}
							</div>
							<p>{trollpick.spellsEnd}</p>
						</Background>

						{/* Les Gameplays */}
						<Background title='Le gameplay' iconName='fas fa-gamepad'>
							{trollpick?.gameplayIntro && parse(trollpick?.gameplayIntro)}
							<div className="border-2px border-solid border-gold rounded-xl p-2rem my-2rem">
								{/* Contenue */}
								{trollpick?.gameplayContents?.[0]?.description && parse(trollpick?.gameplayContents?.[0]?.description)}

								{/* Image */}
								{trollpick?.gameplayImages?.[0] && (<img className={'rounded-xl my-2em w-24% drop-shadow-filterGold'} src={`${apiBaseUrl}/${trollpick?.gameplayImages?.[0]?.urlImage}`} alt="" />)}

								{/* Contenu */}
								{trollpick?.gameplayContents?.[1] && <div>{parse(trollpick?.gameplayContents?.[1]?.description)}</div>}

								{/* Image */}
								{trollpick?.gameplayImages?.[1] && (<img className={cx('my-2em rounded-xl w-30% drop-shadow-filterGreen')} src={`${apiBaseUrl}/${trollpick?.gameplayImages?.[1]?.urlImage}`} alt="" />)}

								{/* Contenu */}
								{trollpick?.gameplayContents?.[2] && <div>{parse(trollpick?.gameplayContents?.[2]?.description)}</div>}
							</div>
						</Background>

						{/* Counters */}
						<Background title='Les Faiblesses et Counters' iconName='fas fa-skull-crossbones'>
							<div 
								className='flex items-center flex-col w-90%'>
								{trollpick?.trollpick_counters?.map((counter: Counter) => (
									<div className='flex items-center relative m-1em w-100%' key={counter.id}>
										<img className="w-100px h-100px rounded-xl drop-shadow-filterCounter" src={`${apiBaseUrl}/${counter.champion.image}`} alt="" />
										<p className='w-100% m-0 drop-shadow-filterCounter pl-2em block text-left p-0 h-100%'>{parse(counter.description)}</p>
									</div>
								))}
							</div>
						</Background>

						{/* Les vidéos */}
						<Background title='Les Vidéos' iconName='fab fa-youtube'>
							<div>
								<p>Voici toutes mes vidéos sur <span className='gold'>{trollpick.name}</span>. Régalez vous et n&apos;oubliez pas le petit commentaire pour soutenir c&apos;est gratuit.</p>
								<div className="my-2em mx-5em border border-solid border-b-red" />
								<div>
									{trollpick?.gameplayVideosYoutubes?.map((video: Video) => (
										<>
											<Youtube idYoutube={video?.urlVideo} />
										</>
									))}
								</div>
							</div>
						</Background>

						{/* End */}
						<Background>
							<p>Amusez vous bien et j&apos;espère que cette présentation de <span className='gold'>{trollpick.name}</span> vous aura donné envie d&apos;essayer le champion.</p>
							<img className={'w-20% rounded-xl my-4em drop-shadow-filterGold'} src={`${apiBaseUrl}/${trollpick?.endPicture}`} alt="" />
							<p className="text-xl">N&apos;hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
						</Background>
					</div>
				</>
			)}
		</div>
	);
};

export default Trollpick;
