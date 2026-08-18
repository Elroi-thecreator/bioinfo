import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bioinformatics Hub",
  description: "Curated tools, literature, databases, and workflow guides",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: "Bioinformatics Hub",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Books', link: '/books' },
      { text: 'Tools & CLI', link: '/tools' },
      { text: 'Workflows', link: '/workflows' },
      { text: 'Databases & Learning', link: '/databases' },
      { text: 'Contact Us', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Knowledge Base',
        items: [
          { text: '📚 Curated Books', link: '/books' },
          { text: '⚙️ Core Tools & CLI', link: '/tools' },
          { text: '🔄 Pipelines & Workflows', link: '/workflows' },
          { text: '🗄️ Databases & Platforms', link: '/databases' }
        ]
      },
      {
        text: 'About & Maintainer',
        items: [
          { text: '📬 Contact Us', link: '/contact' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Maintained by Dr. Pon Nivedha Rajamanickam, Assistant Professor, Dept. of Biotechnology and Bioinformatics, Holy Cross College, Tiruchirappalli, India (Email: ponnivedha@gmail.com).',
      copyright: 'Copyright © 2026 Bioinformatics Hub'
    }
  }
})
