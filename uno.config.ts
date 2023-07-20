// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
	shortcuts: {
		// colors
		'red': 'text-red-800',
		'green': 'color-rgb(115, 255, 0)',
		'blue': 'color-#44acd4',
		'purple': 'color-#ab70eafc',
		'orange': 'color-#ffa600',
		'black': 'color-black',
		'facebook': 'color-#4267b2',
		'twitch': 'color-#9aa5f4',
		'instagram': 'color-#ee4a5c',
		'pink': 'color-#ff80af',

		'button': 'black  bg-#ffaa55   border-rounded  py-1 px-2 border-gold  border-gold overflow-clip border hover:text-gold  hover:bg-black hover:border-black',

		'global_title': 'py-12 text-6xl text-center text-#ffaa55 font-squada',

		'text': 'text-xl leading-normal',

		'divider': 'border-gold border w-80%',
	},
	theme: {
		colors: {
			gold: '#ffaa55',
			contact: 'rgba(0, 0, 0, 0.7)',
			support: 'rgba(9, 30, 51, 0.7)',
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
		},
	},
});
