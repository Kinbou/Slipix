// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
	shortcuts: {
		// colors
		'red': 'text-red-800',
		'green': 'color-rgb(115, 255, 0)',
		// 'blue': 'color-#00cefe',
		// 'blue': 'rgb(13, 151, 185)',
		'purple': 'color-#ab70eafc',
		'orange': 'color-#ffa600',
		'black': 'color-black',
		'facebook': 'color-#4267b2',
		'twitch': 'color-#9aa5f4',
		'instagram': 'color-#ee4a5c',
		'pink': 'color-#ff80af',

		// button
		'button': `black
			bg-#ffaa55
			border-rounded
			py-1
			px-2
			border-gold
			overflow-clip
			border
			hover:text-gold
			hover:bg-black hover:border-black`,

		'global_title': 'py-12 text-6xl text-center text-#ffaa55 font-squada',

		'text': 'text-xl leading-normal',

		'divider': 'border-gold border w-80%',

		'h1': 'text-6xl text-gold flex items-center font-squada',
		'h2': 'text-5xl text-shadow-default',
		'h3': 'text-4xl',
	},
	theme: {
		colors: {
			gold: '#ffaa55',
			// bluee: '#44acd4',
			contact: 'rgba(0, 0, 0, 0.7)',
			support: 'rgba(9, 30, 51, 0.7)',
			legal_mention: 'rgba(255, 255, 255, 0.874)',
			bgColor: 'rgba(28,36, 45, .5)',
			bgCard: 'rgba(28,36, 45, .15)',
			bgWhite: 'rgba( 255, 255, 255, 0.1)',
			bgPresentation: 'rgba(35, 22, 4, 0.7)',
			bgGuide: 'rgba(28, 36, 45, 0.8)',
		},
		textColor: {
			blue: '#44acd4',
		},
		minHeight: {
			fullscreen: 'calc(100vh - 160px)',
		},
		fontFamily: {
			squada: ['Squada One', 'cursive'],
		},
		fontSize: {
			xl: '1.45rem',
			xxl: '1.65rem',
			title_h5: '2rem',
		},
		boxShadow: {
			'3xl': '1px 1px 12px black',
			'home_discord': '0 58px 36px -56px black',
			'hoverGuideCard': '0 58px 36px -56px black',
		},
		dropShadow: {
			'filterLogo': '0 0 0.55rem #e39200',
			'filterRed': '0 0 0.75rem crimson',
			'filterBlue': '0 0 0.75rem #00cefe',
			'filterGold': '0 0 0.75rem #ffaa55',
			'filterGreen': '0 0 0.75rem #255e47',
			'filterGreyBlue': '0 0 0.75rem #465568',
			'filterBlack': '0 0 0.75rem #232122',
			'filterYellow': '0 0 0.50rem rgb(220, 207, 20)',
		},
		textShadow: {
			'default': '2px 2px 30px black',
		},
	},
});
