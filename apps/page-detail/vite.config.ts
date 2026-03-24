import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  resolve: {
    alias: {
      '@ds/components': resolve(__dirname, '../../packages/components/src/index.ts'),
      '@ds/tokens': resolve(__dirname, '../../packages/tokens'),
    },
  },
});
