import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This tells Vite that the app is not at the root domain, but inside a folder
  base: '/operationship-web/', 
})
