import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/liveApp/', // <-- use your repository name here
  plugins: [react()],
})
