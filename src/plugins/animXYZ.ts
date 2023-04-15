import { defineNuxtPlugin } from "#app";
import VueAnimXYZ from '@animxyz/vue3'
import '@animxyz/core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAnimXYZ);
});
