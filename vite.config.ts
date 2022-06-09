import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),

    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#2E8B56',
                    'link-color': '#000',
                    'link-hover-color': '#2E8B56',
                    'border-radius-base': '4px',
                    'font-size-base': '20px'
                },
                javascriptEnabled: true
            }
        }
    }
})
