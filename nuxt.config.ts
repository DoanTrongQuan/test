// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 8000,
  },
  extends: ['@nuxt/ui-pro'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui','@pinia/nuxt','@nuxt/ui'], 
})