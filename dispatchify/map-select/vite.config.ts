/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/map-select',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false, // Prevents deleting static assets like manifest.json
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ensure entry point is correct
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
