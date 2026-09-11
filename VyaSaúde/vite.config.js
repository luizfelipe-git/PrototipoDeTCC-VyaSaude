import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'client/public',
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, 'client/src/hooks'),
      '@api': path.resolve(__dirname, 'client/src/api'),
      '@pages': path.resolve(__dirname, 'client/src/pages'),
      '@services': path.resolve(__dirname, 'client/src/services'),
      '@components': path.resolve(__dirname, 'client/src/components')
    }
  }
});