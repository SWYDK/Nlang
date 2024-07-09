import { defineConfig } from 'vite';
import path from 'path'; // импортируем path из модуля node

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets')
    }
  }
});
