import tailwindcss from "@tailwindcss/vite";

// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'Nuxt Home',
    },
  },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
