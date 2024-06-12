
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server:{
    https:'//github.com/MohammedKhred7.github.io/Project-react-myProfile',
  },
  base:'/',
  plugins: [react()],
  publicDir: 'public'
});

