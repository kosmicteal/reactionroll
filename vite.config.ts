import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { homepage } from './package.json';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: homepage.substring(homepage.lastIndexOf('/')),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
