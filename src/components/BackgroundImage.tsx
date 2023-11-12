import classNames from 'classnames'
import styled from 'styled-components'

const apiBaseUrl: string =
  typeof import.meta.env.VITE_API_BASE_URL === 'string'
    ? import.meta.env.VITE_API_BASE_URL
    : ''

enum LIST_BACKGROUND {
  '/' = 'home',
  '/guides' = 'guides',
  '/guides/mental&rage' = 'mentalRage',
  '/guides/role-champion' = 'roleChampion',
  '/guides/progresser-sur-leagueOfLegends' = 'progressLol',
  '/guides/sortir-du-bas-elo' = 'lowElo',
  '/guides/gagner-sa-phase-de-lane' = 'winLane',
  '/presentation' = 'presentation',
  '/me-soutenir' = 'support',
  '/me-contacter' = 'contact',
  '/mentions-legales' = 'legalNotice',
  '/remerciement' = 'thanks',
}

const BackgroundImage = ({
  pathname,
}: {
  pathname: keyof typeof LIST_BACKGROUND
}) => {
  const BackgroundImageTest = styled.div`
    /* object-fit: fill; */
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    background-color: black;
    background-image: linear-gradient(
        rgba(23, 48, 66, 0.4),
        rgba(3, 23, 32, 0.4)
      ),
      url(${apiBaseUrl}/images/backgroundPages/${({
        appClass,
      }: {
        appClass: string
      }) => appClass}/format-standard.jpg);

    /* Grand écran */
    @media (min-width: 3400px) {
      background-image: linear-gradient(
          rgba(23, 48, 66, 0.4),
          rgba(3, 23, 32, 0.4)
        ),
        url(${apiBaseUrl}/images/backgroundPages/${({
          appClass,
        }: {
          appClass: string
        }) => appClass}/format-3440x1440.jpg);
    }
    /* Grand écran */
    @media (min-width: 2000px) {
      background-image: linear-gradient(
          rgba(23, 48, 66, 0.4),
          rgba(3, 23, 32, 0.4)
        ),
        url(${apiBaseUrl}/images/backgroundPages/${({
          appClass,
        }: {
          appClass: string
        }) => appClass}/format-2560x1440.jpg);
    }
    /* Format tablette */
    @media (max-width: 1024px) {
      background-image: linear-gradient(
          rgba(23, 48, 66, 0.4),
          rgba(3, 23, 32, 0.4)
        ),
        url(${apiBaseUrl}/images/backgroundPages/${({
          appClass,
        }: {
          appClass: string
        }) => appClass}/format-tablette.jpg);
    }
    /* Format phone */
    @media (max-width: 600px) {
      background-image: linear-gradient(
          rgba(23, 48, 66, 0.4),
          rgba(3, 23, 32, 0.4)
        ),
        url(${apiBaseUrl}/images/backgroundPages/${({
          appClass,
        }: {
          appClass: string
        }) => appClass}/format-phone.jpg);
    }
  `

  const choiceBackground = () => {
    const result = pathname?.includes('/trollpicks')
      ? 'trollPicks'
      : LIST_BACKGROUND[pathname]
    return result
  }

  const appClass = classNames(choiceBackground())

  return <BackgroundImageTest appClass={appClass} />
}

export default BackgroundImage
