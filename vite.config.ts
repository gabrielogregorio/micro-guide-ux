import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: '.',
  base: '/micro-guide-ux',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@/services': resolve(__dirname, './src/core/services'),
      '@/pages': resolve(__dirname, './src/pages'),
    },
  },
  // @ts-ignore
  test: {
    css: false,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/micro-guide-ux/',
      includeAssets: ['favicon.ico', 'icon.png', 'icon-512x512.png'],
      manifest: {
        name: 'micro-guide-ux',
        short_name: 'micro-guide-ux',
        description: 'Gerencie suas daily tasks diárias',
        theme_color: '#2d3036',
        background_color: '#2d3036',
        orientation: 'portrait',
        start_url: '/micro-guide-ux/registerSW.js',
        scope: '/micro-guide-ux/',
        display: 'standalone',
        icons: [
          {
            src: '/micro-guide-ux/icons/icon-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/micro-guide-ux/icons/icon-512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: '/micro-guide-ux/icons/icon-maskable-192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable',
          },
          {
            src: '/micro-guide-ux/icons/icon-maskable-512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
          },
        ],
      },

      // devOptions: {
      //   enabled: true,
      // },
    }),
  ],
});
