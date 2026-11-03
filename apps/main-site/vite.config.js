import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/resume/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'oxc',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](vue|vue-router|@vue[\\/][^\\/]+)[\\/]/.test(id)) {
            return 'vue-vendor'
          }
        },
      },
    },
    chunkSizeWarningLimit: 300,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
