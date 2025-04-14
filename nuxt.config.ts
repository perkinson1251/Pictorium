// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  extends: ['./core', './layers/site'],
  imports: {
    dirs: ['./core/types', './layers/**/types'],
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ]
})