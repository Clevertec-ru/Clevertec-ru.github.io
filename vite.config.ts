import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'РОСГОССТРАХ ЖИЗНЬ',
                short_name: 'СПОРТ-ГАРАНТ',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#990032',
                icons: [
                    {
                        src: 'android-icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'apple-icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },
                ],
                screenshots: [
                    {
                        src: 'screenshot_360.png',
                        sizes: '360x1200',
                        type: 'image/png',
                        label: 'Мобильный интерфейс',
                    },
                    {
                        src: 'screenshot_720.png',
                        sizes: '720x747',
                        type: 'image/png',
                        label: 'Планшетный интерфейс',
                    },
                    {
                        src: 'screenshot_1440.png',
                        sizes: '1440x1210',
                        type: 'image/png',
                        label: 'Десктопный интерфейс',
                    },
                ],
            },
        }),
    ],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        commonjsOptions: { transformMixedEsModules: true },
    },
});
