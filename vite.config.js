import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                background: fileURLToPath(new URL('./background/index.html', import.meta.url)),
                stripe_text: fileURLToPath(new URL('./stripe_text/index.html', import.meta.url)),
                index: fileURLToPath(new URL('./index.html', import.meta.url)),
            },
        },
    },
})