import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/students': {
        target: 'http://localhost:5175', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})