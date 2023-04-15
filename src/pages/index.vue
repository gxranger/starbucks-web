<script setup lang="ts">
    import { ref } from 'vue'
    let menuStatus = ref(true)
    function switchStatus():void {
      menuStatus.value = !menuStatus.value
    }
</script>

<template>
  <div class="w-full h-screen lg:flex">
    <div class="lg:w-30% lg:h-full md:w-full md:h-1/4 shadow-md fixed">
      <header class="flex items-center justify-between p-5.5">
        <div class="flex items-center">
          <NuxtLink to="/" class="logo">
            <img src="@/assets/images/logo.svg" alt="星巴克" />
          </NuxtLink>
          <ul class="menu flex text-base font-bold">
            <li>门店</li>
            <li>我的账户</li>
            <li>菜单</li>
          </ul>
        </div>
        <a class="w-7 h-7 flex items-center justify-center cursor-pointer" xyz="duration-3 short-100% wide-25%" @click="switchStatus">
          <img src="@/assets/icons/icon-hamburger.svg" class="xyz-in" v-show="menuStatus" />
          <img src="@/assets/icons/icon-close.svg" class="xyz-in" v-show="!menuStatus" />
        </a>
      </header>
      <div class="flex flex-col lg:justify-center h-full pl-16 pr-10">
        <div class="text-2.5xl font-bold">心情惬意，来杯咖啡吧&nbsp;☕</div>
        <div class="flex items-center h-16 text-primary text-base">
          <a class="flex items-center cursor-pointer mr-2">
            <img src="@/assets/icons/icon-account.svg" />
            <span class="ml-1">登录</span>
          </a>
          <button class="border border-primary rounded-full text-base px-3 ml-4">注册</button>
        </div>
      </div>
    </div>
    <div class="flex-1 h-full"></div>
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
</style>
