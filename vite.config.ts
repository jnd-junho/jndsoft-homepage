import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader(),
    viteSingleFile()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  }
})
