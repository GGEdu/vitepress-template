import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ca-ES',
  title: 'Fonaments de Programació',
  description: 'Unitat Formativa 01 - Fonaments de Programació',
  base: '/vitepress-template/',
  outDir: './dist',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo-centro.png' }]
  ],
  themeConfig: {
    siteTitle: 'Fonaments de Programació',
    logo: '/img/logo-centro.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/introduccio' },
        { text: '2. Algoritme', link: '/algoritme' },
        { text: '3. Cicle de Vida', link: '/cicle-vida' },
        { text: "4. Representació d'Algoritmes", link: '/algoritmes' },
        { text: "5. Elements d'un Programa", link: '/elements' }
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '📋 Objectius', link: '/objectius' },
          { text: '📚 1. Introducció', link: '/introduccio' },
          { text: '🔄 2. Algoritme', link: '/algoritme' },
          { text: '⚡ 3. Cicle de Vida', link: '/cicle-vida' },
          { text: "📊 4. Representació d'Algoritmes", link: '/algoritmes' },
          { text: "🔧 5. Elements d'un Programa", link: '/elements' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ceed-dev' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    }
  }
})
