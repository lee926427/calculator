import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

function resolvePath(pathName) {
  return path.resolve(__dirname, pathName);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '@components': resolvePath('src/components'),
      '@styles': resolvePath('src/assets/styles'),
      '@utils': resolvePath('src/utils'),
    },
  },
  plugins: [react()],
});
