import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import awsAmplify from 'astro-aws-amplify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.overnightai.app',
  integrations: [mdx(), sitemap()],
  adapter: awsAmplify(),
  output: 'server',
  image: {
    service: passthroughImageService(),
  },
});
