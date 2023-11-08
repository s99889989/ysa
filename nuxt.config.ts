// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '單成大會',
      meta: [
        { name: 'description', content: '單成大會' },
        { name: 'og:title', content: '單成大會' },
        { name: 'og:description', content: '單成大會' },
        { name: 'og:image', content: '/logo.ico' },

      ],
      link: [
        {
          rel: "icon",
          href: "/logo.ico",
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/marked@3.0.6/marked.min.js",
        },
        {
          src: "https://kit.fontawesome.com/168d3a888b.js",
          crossorigin: "anonymous"
        },
      ]
    }
  }
})
