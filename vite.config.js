
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')



// https://vitejs.dev/config/
export default defineConfig({
  base:'/gh-pages/',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    chunkSizeWarningLimit:1500,
    rollupOptions: {
      // 解决打包时Some chunks are larger警告
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
