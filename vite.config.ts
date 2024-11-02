import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [commonjs(), react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
});
