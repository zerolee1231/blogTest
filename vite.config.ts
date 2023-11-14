import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/abc',
  build: {
    outDir: 'dist/abc',
  },
  plugins: [vue()],
});
