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
  ],
  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false,
  },

  content: {
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

  eslint: {
    config: {
      standalone: false,
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
            database_name: 'portfolio-test-db',
            database_id: '65c92032-40cd-4138-9269-81f34c1feef2',
          },
        ],
      },
    },
  },
})
