import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://davidmaldonadodev.github.io',
  base: '/profile/',
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    },
    optimizeDeps: {
      include: ['tailwindcss']
    }
  },
  buildOptions: {
    split: true
  }
});