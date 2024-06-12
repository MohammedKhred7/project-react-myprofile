
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:'project-react-myprofile',
  plugins: [react()],
  publicDir: 'public'
});

