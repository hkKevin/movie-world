import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/movie-world/',
  // base: '/movie-world',
  server: {
    port: 3000
  }
})
