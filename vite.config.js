import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react  from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
