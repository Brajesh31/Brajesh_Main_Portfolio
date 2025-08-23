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

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err) => console.log('Proxy error:', err));
          proxy.on('proxyReq', (proxyReq, req) => console.log('Sending Request:', req.method, req.url));
          proxy.on('proxyRes', (proxyRes, req) => console.log('Received Response:', proxyRes.statusCode, req.url));
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
