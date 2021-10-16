import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@containers': '/src/containers',
      '@middlewares': '/src/middlewares',
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@': '/src'
    }
  },
  plugins: [
    svgrPlugin(),
    react()
  ],
})
