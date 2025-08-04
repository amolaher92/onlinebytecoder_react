import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { OutputOptions } from 'rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo): string => {
          const ext = assetInfo.name?.split('.').pop()?.toLowerCase();
          let extType = ext;

          if (ext && /png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            extType = 'img';
          } else if (ext && /woff2?|ttf|eot/i.test(ext)) {
            extType = 'fonts';
          }

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      } as OutputOptions,
    },
  },
});
