import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    },
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    include: [
      'tailwindcss',
      'autoprefixer'
    ]
  },
  css: {
    devSourcemap: true
  },
  esbuild: {
    target: 'es2022'
  }
});