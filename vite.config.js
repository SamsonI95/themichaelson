import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('redux')) {
              return 'redux-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit since we're optimizing
  },
})
