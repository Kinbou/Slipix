import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BasePage } from './BasePage';
import Home from '@pages/Home/Home';
import Presentation from '@pages/Presentation';
import Support from '@pages/Support/Support';
import Contact from '@pages/Contact';
import Thanks from '@pages/Thanks/Thanks';
import MentionLegales from '@pages/LegalMentions';

// Guides
import Guides from '@pages/Guides/Guides';
import MentalRage from '@pages/Guides/Mental&rage/MentalRage';
import RoleChampion from '@pages/Guides/RoleChampion/RoleChampion';
import ProgressLol from '@pages/Guides/ProgressLol/ProgressLol';
import LowElo from '@pages/Guides/LowElo/LowElo';
import WinLane from '@pages/Guides/WinLane/WinLane';

// Trollpicks
import TrollPicks from '@pages/TrollPicks/Trollpicks';
import Trollpick from '@pages/TrollPicks/Trollpick/Trollpick';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<BasePage>
				<Home />
			</BasePage>
		),
	},
	{
		path: '/trollpicks',
		element: (
			<BasePage>
				<TrollPicks />
			</BasePage>
		),
	},
	{
		path: '/trollpicks/:name/:id',
		element: (
			<BasePage>
				<Trollpick />
			</BasePage>
		),
	},
	{
		path: '/presentation',
		element: (
			<BasePage>
				<Presentation />
			</BasePage>
		),
	},
	{
		path: '/guides',
		element: (
			<BasePage>
				<Guides />
			</BasePage>
		),
	},
	{
		path: '/guides/mental&rage',
		element: (
			<BasePage>
				<MentalRage />
			</BasePage>
		),
	},
	{
		path: '/guides/role-champion',
		element: (
			<BasePage>
				<RoleChampion />
			</BasePage>
		),
	},
	{
		path: '/guides/progresser-sur-leagueOfLegends',
		element: (
			<BasePage>
				<ProgressLol />
			</BasePage>
		),
	},
	{
		path: '/guides/sortir-du-bas-elo',
		element: (
			<BasePage>
				<LowElo />
			</BasePage>
		),
	},
	{
		path: '/guides/gagner-sa-phase-de-lane',
		element: (
			<BasePage>
				<WinLane />
			</BasePage>
		),
	},
	{
		path: '/me-soutenir',
		element: (
			<BasePage>
				<Support />
			</BasePage>
		),
	},
	{
		path: '/me-contacter',
		element: (
			<BasePage>
				<Contact />
			</BasePage>
		),
	},
	{
		path: '/mentions-legales',
		element: (
			<BasePage>
				<MentionLegales />
			</BasePage>
		),
	},
	{
		path: '/remerciements',
		element: (
			<BasePage>
				<Thanks />
			</BasePage>
		),
	},
]);


export const AppRoutes = () => {
	return (
		<RouterProvider router={router} />
	);
};



