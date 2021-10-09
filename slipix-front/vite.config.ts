import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@containers': '/src/containers',
      '@pages': '/src/pages',
      '@': '/src'
    }
  },
  plugins: [
    svgrPlugin(),
    react()
  ]
})
