import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // <--- CRITICAL: Enables browser-like environment
    setupFiles: './src/test-setup.js', // Optional: For global matchers
  },
});