import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  base: '/',
  plugins: [
    cssInjectedByJsPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'app/index.html')
      }
    }
  }
});
