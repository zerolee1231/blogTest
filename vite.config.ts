import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/abcd',
  build: {
    outDir: 'dist/abc',
  },
  plugins: [vue()],
});
