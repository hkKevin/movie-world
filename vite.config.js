import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const isProduction = process.env.NODE_ENV === 'production'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: mode === 'production' ? '/movie-world/' : '/',
  server: {
    port: 3000,
    // middlewareMode: false,
    // open: '/movie-world/', // So localhost:3000/movie-world opens by default
  }
}))
