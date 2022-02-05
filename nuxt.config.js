export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ali Raza - Full Stack Web Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Ali Raza is a Web Developer from Faisalabad, Pakistan. After working as a freelancer for the past 3+ years, he is proficient at both frontend and backend development.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '0xAliRaza, Ali Raza, Faisalabad, Full Stack, Web Developer, PHP, JavaScript, Freelancer, Programmer, , Software Developer',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Ali Raza',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
    script: [
      {
        hid: 'tawk.to',
        src: 'https://embed.tawk.to/60ef6018d6e7610a49ab51bb/1fajguo58',
        defer: true,
        crossorigin: '*',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Sitemap module options: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://0xali.com',
    gzip: true,
    routes: [
      '/codefolio',
      '/wid-blog-frontend',
      '/habitly',
      '/0xfolio',
      '/dream-flowers-design',
    ],
  },

  // @nuxtjs/google-analytics configs, https://google-analytics.nuxtjs.org/setup/
  googleAnalytics: {
    id: 'UA-109228988-3',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
