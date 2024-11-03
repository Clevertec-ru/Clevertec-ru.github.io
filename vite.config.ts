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
                        src: 'favicon.ico',
                        sizes: 'any',
                        type: 'image/x-icon',
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
