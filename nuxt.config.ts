// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt3 Shoping',
      meta: [
        { name: 'description', content: ' Everything about nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href:'https://developers.google.com/fonts/docs/material_icons'}
      ]
    }
  }
})
