
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:'project-react-myprofile',
  plugins: [react()],
  build: {
    outDir: './build'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});

