import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    root: './src',
    base: '/deploy/',
    server: {
        port: 3000,
    },
    publicDir: './src/assets',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                pricing: './src/pricing.html',
                contact: './src/contact.html',
                active: './src/active.html',
                detail: './src/detail-blog.html',
            },
        },
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});
