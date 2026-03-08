import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://Bparker81597.github.io', // placeholder, will adjust
  base: '/Demo-SoarNBounce',
});
