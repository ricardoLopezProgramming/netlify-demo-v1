import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  site: 'https://ricardoLopezProgramming.github.io',
  base: 'netlify-demo-v1',
  adapter: netlify()
});