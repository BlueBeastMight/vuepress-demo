const moment = require('moment');
moment.locale("zh-CN")

// .vuepress/config.js
module.exports = {
    base:"/vuepress-demo/",
    title: "Today is wendy",
    description: "red velet 思密达",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
      ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,shawn' }],
      ['meta', { name: 'author', content: 'shawn' }],
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    themeConfig: {
      lastUpdated: '上次更新时间',
      logo: '/assets/img/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: 'About', link: '/about/' },
        { text: 'Nginx', link: '/nginx/' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ],
      sidebar: 'auto',
      
    },
  }