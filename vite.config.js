import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/admin/',
  plugins: [
    react(),
    // tailwindcss()
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
