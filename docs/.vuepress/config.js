const { defaultTheme } = require("vuepress");
const { searchPlugin } = require('@vuepress/plugin-search');
const { pwaPlugin } = require('@vuepress/plugin-pwa');
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup');

module.exports = {
  base: '/vuepress/',   // 部署时 网址域名后紧接着的

  head: [
    ['link', { rel: 'manifest', herf: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

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
    logo: '/images/logo.jpg',    // 导航栏Logo
    navbar: [
      { text: 'Github', link: 'https://github.com/MichaelGmx/vuepress2' },
    ],
    // sidebar: false,        // 侧边栏，默认：'auto'
    contributors: false,   // 贡献者，默认：true

    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
        toggleDarkMode: '切换 黑夜模式',
        lastUpdatedText: '上次更新',
        backToHome: '返回 首页',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        toggleDarkMode: 'toggle dark mode',
        lastUpdatedText: 'Last Updated',
        backToHome: 'Back to home',
      },
    },
  }),

  plugins: [  // 插件
    searchPlugin({  // 搜索Bar
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
    pwaPlugin({     // pwa
      skipWaiting: true
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
        '/en/': {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
      },
    })
  ]
}