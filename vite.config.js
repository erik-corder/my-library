import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyLibrary',
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
        },
      },
    },
  },
  plugins: [react(), dts()],
});
