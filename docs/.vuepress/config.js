const { defaultTheme } = require("vuepress");
const { searchPlugin } = require('@vuepress/plugin-search');

module.exports = {
  base: '/vuepress/',   // 部署时 网址域名后紧接着的

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '小麦片',
      description: '小麦片 笔记',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Little Oat',
      description: 'Little Oat Note',
    },
  },

  theme: defaultTheme({
    logo: '/assets/img/logo.jpg',    // 导航栏Logo
    navbar: [
      { text: 'Github', link: 'https://github.com/MichaelGmx/vuepress2' },
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        sidebar: 'auto',
        // {
        //   '/git/': [
        //     {
        //       text: 'git',
        //       collapsible: true,
        //       children: ['/git/git-cli.md'],
        //     }
        //   ]
        // },
      },
      '/en/': {
        selectLanguageName: 'English',
        sidebar: 'auto',
      },
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    })
  ]
}