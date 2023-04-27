import { defineNuxtPlugin } from '#app'
// 引入动画库
import VueAnimXYZ from '@animxyz/vue3'
import '@animxyz/core'
// 引入图标库
import { IconPark } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAnimXYZ)
    nuxtApp.vueApp.component('icon-park', IconPark)
})
