import tailwindcss from "@tailwindcss/vite";

// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'huraicid Home',
    },
  },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  vite: {
    plugins: [tailwindcss()],
  },
})
