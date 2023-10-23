// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
	shortcuts: {
		// colors
		'red': 'text-red-800',
		'green': 'color-#4ADE80',
		'gold': 'color-#ffaa55',
		'blue': 'color-#00cefe',
		'purple': 'color-#8791D7',
		'orange': 'color-#ffa600',
		'black': 'color-black',
		'facebook': 'color-#4267b2',
		'twitch': 'color-#9aa5f4',
		'instagram': 'color-#ee4a5c',
		'pink': 'color-#ff80af',

		// button
		'button': `
			black
			border-rounded
			py-.4rem
			px-.7rem
			cursor-pointer
			text-xl
			overflow-clip
			border
			`,
			
		'buttonPrimary': `
			bg-#ffaa55
			border-gold
			hover:text-gold
			hover:bg-black
			hover:border-black`,

		'buttonYoutube': `
			text-red-900
			bg-transparent
			border-red-900
			hover:text-white
			hover:bg-red-900`,

		'buttonTwitch': `
			text-#9aa5f4
			bg-transparent
			border-#9aa5f4
			hover:text-white
			hover:bg-#9aa5f4`,

		'buttonDiscord': `
			text-#7289D9
			bg-transparent
			border-#7289D9
			hover:text-white
			hover:bg-#7289D9`,
			

		// card transition border
		'card': `border
			rounded-xl
			border-solid
			shadow-3xl
			border-transparent
			transition-all
			hover:scale-102
			hover:duration-200
			hover:shadow-hoverGuideCard
			durantion-600
			hover:border-gold
			`,

		'global_title': 'py-12 text-6xl text-center text-#ffaa55 font-squada',

		'text': 'text-1.4rem leading-normal',

		'divider': 'border-gold border w-80%',

		'h1': 'text-6xl text-gold flex items-center font-squada',
		'h2': 'text-5xl text-shadow-default',
		'h3': 'text-4xl',
		'h4': 'text-3xl',
	},
	theme: {
		colors: {
			gold: '#ffaa55',
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
			purple: '#8791D7',
		},
		minHeight: {
			fullscreen: 'calc(100vh - 160px)',
		},
		fontFamily: {
			squada: ['Squada One', 'cursive'],
			beba: ['Beba Neus', 'cursive'],
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
			'filterObject': '0 0 0.20rem gold',
			'filterCounter': '0 0 0.8rem rgb(88, 1, 1)',
		},
		textShadow: {
			'default': '2px 2px 30px black',
		},
	},
});
