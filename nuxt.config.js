import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description-en',
        name: 'description',
        lang: 'en-US',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        hid: 'description-th',
        name: 'description',
        lang: 'th-TH',
        content: `พวกเราเป็นบริษัทที่ตั้งอยู่ในกรุงเทพมหานคร รับพัฒนาเว็บไซต์และแอพพลิเคชันแบบครบวงจร`,
      },
      {
        hid: 'fb-og-type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'fb-og-url',
        property: 'og:url',
        content: 'https://www.superdev.tech/',
      },
      {
        hid: 'fb-og-title',
        property: 'og:title',
        content: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
      },
      {
        hid: 'fb-og-description',
        property: 'og:description',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        hid: 'fb-og-image',
        property: 'og:image',
        content: `https://www.superdev.tech/superdev_cover.png`,
      },

      {
        hid: 'tw-og-card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'tw-og-url',
        property: 'twitter:url',
        content: 'https://www.superdev.tech/',
      },
      {
        hid: 'tw-og-title',
        property: 'twitter:title',
        content: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
      },
      {
        hid: 'tw-og-description',
        property: 'twitter:description',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        hid: 'tw-og-image',
        property: 'twitter:image',
        content: `https://www.superdev.tech/superdev_cover.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    'nuxt-i18n',

    '@nuxtjs/robots',

    // always declare the sitemap module at end of array
    '@nuxtjs/sitemap',
  ],

  i18n: {
    baseUrl: 'https://www.superdev.tech',
    seo: true,
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    locales: [
      { name: 'English', code: 'en', iso: 'en-US', file: 'en.json' },
      { name: 'ภาษาไทย', code: 'th', iso: 'th-TH', file: 'th.json' },
    ],
    detectBrowserLanguage: false,
  },

  sitemap: {
    hostname: 'https://www.superdev.tech',
    gzip: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 8080,
    host: 'localhost',
    timing: false,
  },
  publicRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
}
