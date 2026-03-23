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

  experimental: {
    restoreState: true,
  },

  vue: {
    runtimeCompiler: false,
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      "/img/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/_nuxt/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/**": {
        headers: {
          "cache-control": "public, max-age=0, must-revalidate",
        },
      },
    },
  },

  css: ["~/assets/css/reset.css"],

  image: {
    format: ["avif", "webp"],
  },

  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      title: "Ana López | Diseñadora Gráfica & Desarrolladora Web",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Ana López, diseñadora gráfica y desarrolladora web especializada en crear experiencias digitales únicas y funcionales.",
        },
        {
          property: "og:title",
          content: "Ana López | Diseñadora Gráfica & Desarrolladora Web",
        },
        {
          property: "og:description",
          content:
            "Portfolio de Ana López, diseñadora gráfica y desarrolladora web especializada en crear experiencias digitales únicas y funcionales.",
        },
        { property: "og:image", content: "/img/perro.avif" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Ana López | Diseñadora Gráfica & Desarrolladora Web",
        },
        {
          name: "twitter:description",
          content:
            "Portfolio de Ana López, diseñadora gráfica y desarrolladora web especializada en crear experiencias digitales únicas y funcionales.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css",
        },
      ],
    },
  },
});
