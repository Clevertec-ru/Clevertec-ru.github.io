import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    return {
        base: isProduction ? '/sport-garant/' : '/',
        plugins: [react()],
        server: {
            host: true,
            port: 3000,
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src'),
            },
        },
    };
});
