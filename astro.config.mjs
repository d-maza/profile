import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
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