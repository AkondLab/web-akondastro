// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://akondlab.github.io',
  base: '/web-akondastro',
  vite: {
    plugins: [tailwindcss()]
  }
});