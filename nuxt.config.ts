// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  modules: ["@pinia/nuxt"],

  // Optional Pinia module config
  pinia: {
    // Only set this if you moved stores somewhere custom or want nested globs.
    // Nuxt 3 default: 'stores'
    // Nuxt 4 default: 'app/stores'
    storesDirs: ["./stores/**"],
  },
});
