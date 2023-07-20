import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import UnoCss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const baseConfig = {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@containers': '/src/containers',
				'@pages': '/src/pages',
				'@store': '/src/store',
				'@': '/src',
			},
		},
		build: {
			sourcemap: true,
		},
	};

	const plugins = [
		svgrPlugin(),
		UnoCss(),
		// react(),
	];

	if (command === 'build') {
		return {
			...baseConfig,
			plugins,
			esbuild: {
				jsxInject: 'import React from "react";',
			},
			css: {
				modules: {
					localsConvention: 'camelCase',
				},
			},
		};
	}
	else {
		return {
			...baseConfig,
			plugins: [
				...plugins,
				react(),
			],
		};
	}
});
