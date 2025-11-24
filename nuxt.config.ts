// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'motion-v/nuxt',
    '@nuxt/image',
    'nuxt-studio',
  ],
  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },

  i18n: {
    locales: [{
      code: 'en',
      language: 'en-US',
      name: 'English',
      file: 'en.json',
    }, {
      code: 'zh_cn',
      language: 'zh-CN',
      name: '简体中文',
      file: 'zh_cn.json',
    }],
    defaultLocale: 'en',
    baseUrl: 'https://rennanduan.com',
    skipSettingLocaleOnNavigate: true,
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'blaconix',
      repo: 'rennanduan',
      branch: 'main',
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },

    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'rennanduan',
            database_id: '105fb714-7634-44b1-9268-cbd883568c80',
          },
        ],
      },
    },
  },
})
