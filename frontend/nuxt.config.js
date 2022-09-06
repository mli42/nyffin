export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(pageTitle) {
      return pageTitle ? `${pageTitle} - Nyffin Esport` : 'Nyffin Esport';
    },
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: [''],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/font.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tailwind.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-typed-vuex',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '', // empty for tailwind dark-mode
    storageKey: 'nuxt-color-mode',
  },

  tailwindcss: {
    cssPath: '~/assets/css/font.css',
    configPath: 'tailwind.config.js',
  },

  i18n: {
    defaultLocale: 'fr',
    langDir: '~/locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'fr', file: 'fr.json', iso: 'fr-FR', name: 'Français' },
    ],
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en', // if current local does not exist
      formatFallbackMessages: true, // if no translation available, use key
    },
  },
};
