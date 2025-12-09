import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                homelab: resolve(__dirname, 'homelab-rack.html'),
                server: resolve(__dirname, 'server-infrastructure.html'),
                iot: resolve(__dirname, 'iot-automation.html'),
            },
        },
    },
});
