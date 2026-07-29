import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Defaults to GitHub Pages, unless VITE_BASE_PATH is provided
  base: process.env.VITE_BASE_PATH || '/Portfolio-React/', 
})