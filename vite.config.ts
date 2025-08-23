import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/', // root deployment

  plugins: [
    react(),
    Sitemap({
      hostname: 'https://edtech-community.com', // ✅ correct domain
      outDir: 'dist', // output folder
      urls: [
        '/',                // Home
        '/about',
        '/education',
        '/experience',
        '/profiles',
        '/projects',
        '/certificates',
        '/skills',
        '/services',
        '/blogs',
        '/contact',
        '/milestones',
      ],
      changefreq: 'daily',
      priority: 1.0,
    }),
  ],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
