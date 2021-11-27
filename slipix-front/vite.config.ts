import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig = {
    // server: {
    //   proxy: {
    //     '^/api': {
    //       target: 'http://localhost:8000',
    //     },
    //   },
    // },
    resolve: {
      alias: {
        '@components': '/src/components',
        '@containers': '/src/containers',
        '@middlewares': '/src/middlewares',
        '@pages': '/src/pages',
        '@store': '/src/store',
        '@': '/src',
      },
    },
    build: {
      sourcemap: true,
    },
  }

  const plugins = [
    svgrPlugin(),
  ]

  if (command === 'build') {
    return {
      ...baseConfig,
      plugins,
      esbuild: {
        jsxInject: 'import React from "react";',
      },
    }
  }
  else {
    return {
      ...baseConfig,
      plugins: [
        ...plugins,
        react(),
      ],
    }
  }
})
