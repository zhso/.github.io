const users = [
  {
    caption: '84227',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '84227',
  tagline: 'Coding Our Life',
  url: 'https://zhso.net',
  baseUrl: '/',
  projectName: 'zhso.github.io',
  organizationName: 'zhso',
  headerLinks: [
    { page: 'npm', label: 'Npm Packages' },
    // { page: 'chrome', label: 'Chrome Extensions' },
    // { page: 'gist', label: 'Code Snippets' },
    // { page: 'wechat', label: 'Wechat Mini Programs' },
  ],
  users,
  // headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#ff9ed1',
    secondaryColor: '#ffc0cb',
  },
  copyright: `Copyright © ${new Date().getFullYear()} 84227`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
