import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'W工作室 文档',
  description: '智慧商圈数字化CRM运营方案文档',
  lang: 'zh-CN',
  
  appearance: 'dark',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: 'https://weinuo.work' },
      { text: '产品', link: '/overview' },
      { text: '接入', link: '/prerequisites' },
      { text: '联系', link: 'mailto:xk103295870@gmail.com' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '产品概述', link: '/overview' },
          { text: '快速开始', link: '/quickstart' },
          { text: '系统架构', link: '/architecture' }
        ]
      },
      {
        text: 'Integration',
        items: [
          { text: '接入前提', link: '/prerequisites' },
          { text: 'API 文档', link: '/api' },
          { text: 'Webhook 配置', link: '/webhook' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xk103295870-alt/newOfficial-website' }
    ],
    
    footer: {
      message: 'W工作室 · 智慧商圈数字化CRM',
      copyright: '© 2026 微诺技术工作室 · weinuo.work'
    },
    
    search: {
      provider: 'local'
    },
    
    outline: {
      label: '本页内容',
      level: [2, 3]
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到暗色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true
  },
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }]
  ]
})
