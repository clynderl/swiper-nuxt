// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
        },
      ],
    },
  },
  ssr: false,
  modules: [
    '@nuxtjs/eslint-module',
    '@anu-vue/nuxt',
    '@unocss/nuxt',
    'nuxt-swiper',
  ],
});
