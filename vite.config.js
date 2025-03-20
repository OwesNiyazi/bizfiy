import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  base: '/', // Changed to root path for better asset resolution
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/], // Exclude already compressed files
    }),
  ],
  server: {
    port: 5173, // Development server port
    strictPort: false,
    host: true, // Allows access from other devices on the network
  },
  preview: {
    port: 4174,
    strictPort: false,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['aos', 'gsap', 'framer-motion'],
          'ui': ['@headlessui/react', 'lucide-react', 'react-icons'],
          'three': ['three', '@react-three/fiber'],
          'particles': ['tsparticles', '@tsparticles/react']
        }
      },
    },
    chunkSizeWarningLimit: 1500, // Increase the warning limit for large chunks
    minify: 'terser', // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
      },
    },
    sourcemap: true, // Enable sourcemaps temporarily for debugging
    reportCompressedSize: false, // Disable reporting of compressed sizes
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'aos',
      'gsap',
      'framer-motion',
      'three',
      '@react-three/fiber',
    ], // Pre-bundle these dependencies for faster development
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});
