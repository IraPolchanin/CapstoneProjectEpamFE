import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/CapstoneProjectEpamFE/' 
    : '/',
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'pages/gallery.html'),
        contacts: resolve(__dirname, 'pages/contacts.html'),
        courseDetail: resolve(__dirname, 'pages/courseDetail.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  server: {
    open: '/index.html'
  }
});