import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["./core", "./layers/site"],
  imports: {
    dirs: ["./core/types", "./layers/**/types"],
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "nuxt-appwrite",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/core/assets/css/main.css'],
  shadcn: {
    prefix: '',
    componentDir: './core/components/ui'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  appwrite: {
    endpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.NUXT_PUBLIC_APPWRITE_PROJECT,
    locale: process.env.NUXT_PUBLIC_APPWRITE_LOCALE
  }
});