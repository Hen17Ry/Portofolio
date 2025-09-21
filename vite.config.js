import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: '/',   // tu peux même l’omettre complètement
  plugins: [react(), tailwindcss()],
})
