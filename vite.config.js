import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If Vercel is building the app, use the root path. Otherwise, use the GitHub Pages path.
  base: process.env.VERCEL ? '/' : '/Portfolio-React/', 
})