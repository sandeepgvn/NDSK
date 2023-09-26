import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Other configuration options can be added here:
    build: {
        // Configuration for production builds
        outDir: 'build', // Specify the output directory for production builds
    },
    server: {
        // Configuration for the development server
        port: 3000, // Specify the port for the development server
    },
})
