import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bioinformatics Hub",
  description: "Curated tools, literature, databases, and workflow guides",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "🧬 Bioinformatics Hub",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Books', link: '/books' },
      { text: 'Tools & CLI', link: '/tools' },
      { text: 'Workflows', link: '/workflows' },
      { text: 'Databases & Learning', link: '/databases' }
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
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Bioinformatics Hub'
    }
  }
})
