// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/a11y",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/eslint",
  ],

  css: ["~/assets/css/reset.css"],

  image: {
    format: ["avif", "webp"],
  },

  ssr: true,

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      ],
    },
  },
});