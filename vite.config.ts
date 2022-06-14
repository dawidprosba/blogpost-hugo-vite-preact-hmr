
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vite-hugo-plugin'

// Root directory of our application
const appDir = __dirname;

// The directory where hugo builds it's files.
const hugoOutDir = resolve(appDir, 'public');
const s = resolve(appDir, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact(), // Specify preact plugin, we will need that later
        hugoPlugin({ appDir, hugoOutDir })  // Hugo plugin that configures vite to work with hugo
    ],
});
