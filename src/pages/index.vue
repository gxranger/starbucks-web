<script lang="ts" setup>
  import { ref } from 'vue'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper'

  // Import Swiper styles
  import 'swiper/css'
  // import 'swiper/css'
  // import 'swiper/css/navigation'
  // import 'swiper/css/pagination'
  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation, Pagination]
  // })
  const menuStatus = ref(false)
  const list = [0, 1, 2, 3, 4, 5]
  const modules = [Navigation]

  function switchStatus(): void {
    menuStatus.value = !menuStatus.value
  }
</script>

<template>
  <div class="h-screen w-full lg:flex">
    <div class="fixed bg-white shadow-md xs:w-full lg:h-full lg:w-30%">
      <header
        class="relative items-center justify-between p-5.5 xs:hidden md:flex"
      >
        <div class="flex items-center">
          <NuxtLink class="logo z-100" to="/">
            <img alt="星巴克" src="@/assets/images/logo.svg" />
          </NuxtLink>
          <ul class="menu flex text-base font-bold">
            <li>门店</li>
            <li>我的账户</li>
            <li>菜单</li>
          </ul>
        </div>
        <a
          class="z-100 flex h-7 w-7 cursor-pointer items-center justify-center"
          xyz="duration-3 short-100% wide-25%"
          @click="switchStatus"
        >
          <img
            v-show="!menuStatus"
            class="xyz-in"
            src="@/assets/icons/icon-hamburger.svg"
          />
          <img
            v-show="menuStatus"
            class="xyz-in"
            src="@/assets/icons/icon-close.svg"
          />
        </a>
      </header>
      <XyzTransition xyz="fade small-1 origin-center">
        <div
          v-show="menuStatus"
          class="absolute left-0 top-0 flex w-full flex-col justify-center bg-white pl-20 text-lg xs:h-screen lg:h-full"
        >
          <ul class="nav pr-8 font-bold leading-10">
            <li>门店</li>
            <li>我的账户</li>
            <li>菜单</li>
            <hr class="my-2.5" />
            <li>我的账户</li>
            <li>菜单</li>
            <li>门店</li>
            <li>我的账户</li>
            <li>菜单</li>
            <hr class="my-2.5" />
          </ul>
          <AccountButton />
          <div
            class="absolute bottom-10 flex pl-20 text-sm text-black text-opacity-40"
          >
            <NuxtLink to="/">English</NuxtLink>
            <span class="mx-1.5 text-gray-200">|</span>
            <NuxtLink to="/">隐私政策</NuxtLink>
            <span class="mx-1.5 text-gray-200">|</span>
            <NuxtLink to="/">使用条款</NuxtLink>
          </div>
        </div>
      </XyzTransition>
      <div class="flex h-full flex-col pl-16 pr-10 lg:justify-center">
        <div class="font-bold xs:text-2xl md:text-2.5xl">
          心情惬意，来杯咖啡吧&nbsp;☕
        </div>
        <AccountButton />
      </div>
    </div>
    <div class="h-full flex-1 bg-sky-500">
      <div class="h-3/5 w-full border border-amber-700">
        <swiper :modules="modules" :navigation="true" class="h-full w-full">
          <swiper-slide v-for="(item, index) in list" :key="index"
            >Slide {{ item }}
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    width: 36px;
    margin-right: 12px;
  }

  .menu li {
    padding: 0 12px;
  }

  .nav li {
    cursor: pointer;
  }
</style>
