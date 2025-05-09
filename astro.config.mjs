// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://modern.github.io/docs',
  base: '/docs',
  devToolbar: {
    enabled: false
  },
  integrations: [starlight({
    title: 'Modern AngularJS',
    description: 'Unofficial documentation for AngularJS with improvements over end of life support.',
    logo: {
      src: './src/assets/logo.png',
    },
    customCss: [
      './src/fonts/font-face.css',
      './src/styles/custom.css',
      './src/styles/global.css',
    ],
    defaultLocale: 'en',
    sidebar: [{
      label: 'Introduction',
      autogenerate: { directory: 'introduction' },
    },
    {
      label: 'Guides',
      autogenerate: { directory: 'guides' },
      collapsed: true,
    },
    {
      label: 'Developer Tools',
      autogenerate: { directory: 'developer-tools' },
    },
    {
      label: 'Best Practices',
      autogenerate: { directory: 'best-practices' },
    },
    {
      label: 'Building for production',
      autogenerate: { directory: 'building-for-production' },
      collapsed: true,
    },
    {
      label: 'Deployment',
      autogenerate: { directory: 'deployment' },
      collapsed: true,
    },
    {
      label: 'Ecosystem',
      autogenerate: { directory: 'ecosystem' },
      collapsed: true,
    },
    {
      label: 'Reference',
      autogenerate: { directory: 'reference' },
    },
    {
      label: 'Cookbook',
      autogenerate: { directory: 'cookbook' },
      collapsed: true,
    },
    {
      slug: 'resources',
    },
    {
      slug: 'faq',
    },
    {
      slug: 'contribute',
    },],
  }), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});