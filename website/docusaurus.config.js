module.exports = {
  title: 'Vue NodeGui',
  tagline: 'Build performant, native, cross platform desktop apps with Vue 🚀',
  url: 'https://shubhamzanwar.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'shubhamzanwar', // Usually your GitHub org/user name.
  projectName: 'vue-nodegui', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Vue NodeGui',
      logo: {
        alt: 'Vue NodeGui Logo',
        src: 'img/logo-circle.png',
      },
      links: [
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
          href: 'https://github.com/shubhamzanwar/vue-nodegui',
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
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/szanwar22',
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
              href: 'https://github.com/shubhamzanwar/vue-nodegui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shubham Zanwar.`,
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
