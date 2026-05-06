import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/preview-growmystock/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
