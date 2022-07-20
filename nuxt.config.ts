import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
  ],
autoImports: {
  dirs: ['./store']
},
  css: [
    'vuetify/lib/styles/main.sass',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/effect-coverflow',
    'swiper/css/navigation',
  ],
  build: {
    transpile: ['vuetify', 'swiper'],
  },
})
