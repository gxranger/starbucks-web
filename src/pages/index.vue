<script setup lang="ts">
    import { ref } from 'vue'
    let menuStatus = ref(false)
    function switchStatus():void {
      menuStatus.value = !menuStatus.value
    }
</script>

<template>
  <div class="w-full h-screen lg:flex">
    <div class="lg:w-30% lg:h-full xs:w-full bg-white shadow-md fixed">
      <header class="md:flex xs:hidden items-center justify-between p-5.5 relative">
        <div class="flex items-center">
          <NuxtLink to="/" class="logo z-100">
            <img src="@/assets/images/logo.svg" alt="星巴克" />
          </NuxtLink>
          <ul class="menu flex text-base font-bold">
            <li>门店</li>
            <li>我的账户</li>
            <li>菜单</li>
          </ul>
        </div>
        <a class="w-7 h-7 flex items-center justify-center cursor-pointer z-100" xyz="duration-3 short-100% wide-25%" @click="switchStatus">
          <img src="@/assets/icons/icon-hamburger.svg" class="xyz-in" v-show="!menuStatus" />
          <img src="@/assets/icons/icon-close.svg" class="xyz-in" v-show="menuStatus" />
        </a>
      </header>
      <XyzTransition xyz="fade small-1 origin-center">
        <div class="w-full lg:h-full xs:h-screen flex flex-col justify-center text-lg bg-white absolute top-3 left-0" v-show="menuStatus">
          <ul class="nav font-bold leading-10 pl-20 pr-8" >
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
          <div class="flex items-center h-16 text-primary text-base relative left-20">
            <a class="flex items-center cursor-pointer mr-2">
              <img src="@/assets/icons/icon-account.svg" />
              <span class="ml-1">登录</span>
            </a>
            <button class="border border-primary rounded-full text-base px-3 ml-4">注册</button>
          </div>
          <div class="flex text-sm text-black text-opacity-40 pl-20 absolute bottom-10">
            <NuxtLink to="/">English</NuxtLink>
            <span class="mx-1.5 text-gray-200">|</span>
            <NuxtLink to="/">隐私政策</NuxtLink>
            <span class="mx-1.5 text-gray-200">|</span>
            <NuxtLink to="/">使用条款</NuxtLink>
          </div>
        </div>
      </XyzTransition>
      <div class="flex flex-col lg:justify-center h-full pl-16 pr-10">
        <div class="md:text-2.5xl xs:text-2xl font-bold">心情惬意，来杯咖啡吧&nbsp;☕</div>
        <div class="md:flex xs:hidden items-center h-16 text-primary text-base">
          <a class="flex items-center cursor-pointer mr-2">
            <img src="@/assets/icons/icon-account.svg" />
            <span class="ml-1">登录</span>
          </a>
          <button class="border border-primary rounded-full text-base px-3 ml-4">注册</button>
        </div>
      </div>
    </div>
    <div class="flex-1 h-full bg-sky-500"></div>
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
