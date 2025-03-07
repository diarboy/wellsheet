import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Wellsheet.',
  description: 'Develop, Build, and Innovate with Confidence',
  base: '/',

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f=manrope&display=swap',
      },
    ],
  ],

  themeConfig: {
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Gallery', link: '/gallery' },
      {
        text: 'Resources',
        items: [
          {
            text: 'Internal Link',
            items: [
              { text: 'Blog', link: '/blog/introduction' },
              { text: 'PDF', link: '/blog/pdfmake' },
              { text: 'Teams', link: '/team' },
              { text: 'Teammate', link: '/blog/teammate' },
              { text: '404', link: '/resources/internal/' },
            ],
          },
          {
            text: 'External Links',
            items: [
              { text: 'GitHub', link: 'https://github.com/diarboy' },
              { text: 'Framer', link: 'https://allbibek.framer.website/' },
              { text: 'Meta', link: 'https://facebook.com/ardibukan' },
            ],
          },
        ],
      },
      { text: 'Contact', link: '/contact' },
      // { text: 'Menu Baru', link: '/menu-baru' },
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Tutorials', link: '/blog/tutorials' },
          { text: 'Full-Stack Website', link: '/blog/full-stack' },
          { text: 'Dasar Regex', link: '/blog/regex' },
        ],
      },
      {
        text: 'Blog',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/blog/introduction' },
          { text: 'Blog Tester', link: '/blog/blogtester.md' },
          { text: 'MyFirst Post', link: '/blog/my-first-post' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diarboy' },
      { icon: 'atlassian', link: 'https://allbibek.framer.website' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present allbibek',
    },
    outline: [2, 3],
  },
});
