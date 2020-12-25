module.exports = {
  title: 'Vue NodeGui',
  tagline: 'Build performant, native, cross platform desktop apps with Vue 🚀',
  url: 'https://vue.nodegui.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nodegui', // Usually your GitHub org/user name.
  projectName: 'vue-nodegui', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Vue NodeGui',
      logo: {
        alt: 'Vue NodeGui Logo',
        src: 'img/logo-circle.png',
      },
      items: [
        {
          to: 'docs/guides/1-getting-started',
          label: 'Docs',
          activeBasePath: 'docs/guides',
          position: 'right',
        },
        {
          to: 'docs/api/interfaces/buttonprops',
          label: 'API',
          activeBasePath: 'docs/api',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/nodegui/vue-nodegui',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/guides/1-getting-started',
            },
            {
              label: 'API guide',
              to: 'docs/api/interfaces/buttonprops',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Spectrum',
              href: 'https://spectrum.chat/nodegui',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/nodegui',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/node_gui',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nodegui/vue-nodegui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shubham Zanwar.`,
    },
    googleAnalytics: {
      trackingID: "UA-177685902-1"
    },
    algolia: {
      apiKey: '4ecc8a4a6fecbd2b21ab6942a9e0d45f',
      indexName: 'vue-nodegui',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
