// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/a11y",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
  ],

  css: ["~/assets/css/reset.css"],
  
  app: {
      baseURL: '/Portfolio/',
    },
    ssr: true,        // ← cambia a true
    nitro: {
      prerender: {
        crawlLinks: true   // ← genera todas las rutas automáticamente
      },
      output: {
        publicDir: 'dist'
      }
    }
});
