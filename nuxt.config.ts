// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'motion-v/nuxt',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],

  ssr: false,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  ui: {
    colorMode: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})