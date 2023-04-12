import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { useTitle } from '@/hooks/useTitle';
import Youtube from '@components/Youtube/Youtube';
import parse from 'html-react-parser';


import './trollpick.scss';
import Loader from '@components/Loader';
import { selectTrollpick, trollpick_actions } from '@/store/trollpick/trollpick.slice';

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
		dispatch(trollpick_actions.getOneTrollpick(slug.id));
	}, []);


	return (

		<div className="trollpick">

			{/* {!trollpickIsLoad && <Loader />} */}
			{true && (
				<>
					<div className="breadcrumb">
						<Link className="breadcrumb__link" to="/">Accueil</Link><span style={{ margin: '0 .3rem' }}>&gt;</span>
						<Link className="breadcrumb__link" to="/trollpicks">trollpicks</Link><span style={{ margin: '0 .3rem' }}>&gt;</span>
						{trollpick.name}
					</div>
					<h1 className="globalTitle-page">{trollpick.name}</h1>,
					<p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c&apos;est Coach Slipix et on va parler de <span className="gold">{trollpick?.nameIntro}</span> {trollpick?.nameIntro2} dans League of Legends !</p>
					<img className="logo" src={`${apiBaseUrl}/${trollpick?.logo}`} alt="" />
					<div className="backgroundParagraphe">
						<p className="intro">{trollpick?.introIntro && parse(trollpick?.introIntro)}</p>
						{trollpick?.introContent && parse(trollpick?.introContent)}
						<div className="trollpick__pictures">
							{trollpick?.trollpickIntroImages?.map((img: ImageProps) => (
								<img className={`trollpick__pictures__${trollpick?.nameIntro}`} src={`${apiBaseUrl}/${img?.urlImage}`} key={img.id} alt="" />
							))}
						</div>
					</div>

					{/* Page de runes */}
					<div className="backgroundParagraphe trollpick__runes">
						<h2><i className="fas fa-scroll icons__rune" />La page des runes<i className="fas fa-scroll icons__rune" /></h2>
						<p className="paragraph">Voici selon moi la meilleure page des runes pour <span className='gold'>{trollpick.name}</span>. Vous pouvez modifier à votre sauce si vous avez des préférences !</p>
						<img className="trollpick__pictures__rune" src={`${apiBaseUrl}/${trollpick?.runePicture}`} alt="" />
						<div className="trollpick__runes__list">
							<ul>
								{trollpick?.trollpickRunes?.map((rune: { id: number, description: string, rune: { image: string, color: string, title: string } }) => (
									<div className="trollpick__runes__list__content trollpick__runes__list__border" key={rune?.id}>
										<img className="trollpick__pictures trollpick__pictures__runes" src={`${apiBaseUrl}/${rune?.rune?.image}`} alt="" />
										<li className="paragraph"><span className={`definition ${rune?.rune?.color}`}>{rune?.rune?.title} :</span>{rune?.description}</li>
									</div>
								))}
								<li className="paragraph">{trollpick?.runeContentEnd}</li>
							</ul>
						</div>
					</div>

					{/* Les objets */}
					<div className="backgroundParagraphe">
						<h2><i className="fas fa-gavel icons__gameplay" />Les objets<i className="fas fa-gavel icons__gameplay" /></h2>
						{trollpick?.objectsContent && parse(trollpick?.objectsContent)}
						{trollpick?.objects?.length && (
							trollpick?.objects.map((object: any) => (<img key={object.id} src={`${apiBaseUrl}/${object.image}`} className="trollpick__objects" alt="" />))
						)}
					</div>

					{/* Les sort d'invocateurs */}
					<div className="backgroundParagraphe">
						<h2><i className="fas fa-dragon icons__gameplay" />Les sorts d&apos;invocateurs<i className="fas fa-dragon icons__gameplay" /></h2>
						<p className="invocateur__title"><span className="gold">{trollpick.nameIntro}</span> peut se jouer :</p>
						<div className='spells' style={{ justifyContent: trollpick?.trollpick_lanes?.length > 2 ? 'space-around' : 'center' }}>
							{trollpick?.trollpick_lanes?.map((lane: any) => (
								<div key={lane.id} style={{ margin: '0 1.5rem' }}>
									<img src={`${apiBaseUrl}/${lane.lane.image}`} className="invocateur__img" alt="" />
									<div className="spells__spellContent">
										<p style={{ fontSize: '1.4em' }}>{lane.lane.name}</p>
										<div className='line'>
											<img className="imgSorts" src={`${apiBaseUrl}/${lane?.first_level?.first_spell?.image}`} alt="" /> + <img src={`${apiBaseUrl}/${lane?.first_level?.second_spell?.image}`} className="imgSorts" alt="" />
										</div>
										{lane.second_level_id && (
											<div className='line'>
												<img className="imgSorts" src={`${apiBaseUrl}/${lane?.second_level?.first_spell?.image}`} alt="" /> + <img src={`${apiBaseUrl}/${lane?.second_level?.second_spell?.image}`} className="imgSorts" alt="" />
											</div>
										)}
									</div>
								</div>
							))}
						</div>

					</div>

					{/* Les sorts du champion */}
					<div className="backgroundParagraphe">
						<h2><i className="fas fa-hat-wizard icons__gameplay" />Les sorts du champion<i className="fas fa-hat-wizard icons__gameplay" /></h2>
						<p className="invocateur__title">Voici l&apos;ordre des sorts à maxer en priorité quand vous jouez <span className='gold'>{trollpick.name}</span>:</p>
						<div className='championSpells'>
							{trollpick?.sortsOrder?.split('+')?.map((el: string, index: number) => (
								<>
									<div key={el} className='content'>
										<p className='paragraph'>{el}</p>
										<img className="imgSorts" src={`${apiBaseUrl}/images/trollpicks/${trollpick.name.replaceAll(' ', '')}/spells/spell${el}.png`} alt="" />
									</div>
									{index + 1 !== trollpick?.sortsOrder?.split('+').length && <span className="more">+</span>}
								</>
							))}
						</div>
						<p className='paragraph'>{trollpick.spellsEnd}</p>
					</div>

					{/* Les Gameplays */}
					<div className="backgroundParagraphe">
						<h2><i className="fas fa-gamepad icons__gameplay" />Le gameplay<i className="fas fa-gamepad icons__gameplay" /></h2>
						{trollpick?.gameplayIntro && parse(trollpick?.gameplayIntro)}
						<div className="trollpick__gameplay__content">
							{/* Contenue */}
							{trollpick?.gameplayContents?.[0]?.description && parse(trollpick?.gameplayContents?.[0]?.description)}

							{/* Image */}
							{trollpick?.gameplayImages?.[0] && (<img className={`trollpick__pictures__trollContent trollpick__pictures__trollContent__${trollpick?.nameIntro}`} src={`${apiBaseUrl}/${trollpick?.gameplayImages?.[0]?.urlImage}`} alt="" />)}

							{/* Contenu */}
							{trollpick?.gameplayContents?.[1] && <div>{parse(trollpick?.gameplayContents?.[1]?.description)}</div>}

							{/* Image */}
							{trollpick?.gameplayImages?.[1] && (<img className={`trollpick__pictures__capture trollpick__pictures__capture__${trollpick?.nameIntro}`} src={`${apiBaseUrl}/${trollpick?.gameplayImages?.[1]?.urlImage}`} alt="" />)}

							{/* Contenu */}
							{trollpick?.gameplayContents?.[2] && <div>{parse(trollpick?.gameplayContents?.[2]?.description)}</div>}
						</div>
					</div>

					{/* Weakness */}
					<div className="backgroundParagraphe">
						<h2><i className="fas fa-skull-crossbones icons__crossbones" />Les Faiblesses et Counters<i className="fas fa-skull-crossbones icons__crossbones" /></h2>
						<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
							{trollpick?.trollpick_counters?.map((counter: any) => (
								<div className='weakness__content' key={counter.id}>
									<img className="imgChampions" src={`${apiBaseUrl}/${counter.champion.image}`} alt="" />
									<p className='paragraph' style={{ width: '100%' }}>{parse(counter.description)}</p>
								</div>
							))}
						</div>
					</div>

					{/* Les vidéos */}
					<div className="backgroundParagraphe">
						<h2><i className="fab fa-youtube icons__gameplay" />Les Vidéos<i className="fab fa-youtube icons__gameplay" /></h2>
						<div>
							<p className='paragraph'>Voici toutes mes vidéos sur <span className='gold'>{trollpick.name}</span>. Régalez vous et n&apos;oubliez pas le petit commentaire pour soutenir c&apos;est gratuit.</p>
							<div className="introTrollpickYoutube" />
							<div>
								{trollpick?.gameplayVideosYoutubes?.map((video: any) => (
									<>
										<Youtube idYoutube={video?.urlVideo} />
									</>
								))}
							</div>
						</div>
					</div>

					{/* End */}
					<div className="backgroundParagraphe">
						<p className="paragraph">Amusez vous bien et j&apos;espère que cette présentation de {trollpick.name} vous aura donné envie d&apos;essayer le champion.</p>
						<img className={`trollpick__pictures__end trollpick__pictures__end__${trollpick?.nameIntro}`} src={`${apiBaseUrl}/${trollpick?.endPicture}`} alt="" />
						<p className="end">N&apos;hésitez pas à aller consulter les autres trollpicks de Coach slipix</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Trollpick;
