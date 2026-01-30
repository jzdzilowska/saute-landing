import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/saute-landing/',
    build: {
        outDir: 'dist'
    }
});
