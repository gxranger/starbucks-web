<script lang="ts" setup>
    import { ref } from 'vue'
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation } from 'swiper'

    // Import Swiper styles
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'

    const menuStatus = ref(false)
    const modules = [Navigation]

    function switchStatus() {
        menuStatus.value = !menuStatus.value
    }
</script>

<template>
    <div class="h-screen w-full lg:flex">
        <div class="z-60 bg-white shadow-lg xs:w-full lg:fixed lg:h-full lg:w-30%">
            <header class="relative items-center justify-between p-5.5 xs:hidden md:flex">
                <div class="flex items-center">
                    <NuxtLink class="logo z-100 mr-3 w-9" to="/">
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
                    <img v-show="menuStatus" class="xyz-in" src="@/assets/icons/icon-close.svg" />
                </a>
            </header>
            <XyzTransition xyz="fade small-4 origin-center">
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
                    <div class="absolute bottom-10 flex pl-20 text-sm text-black text-opacity-40">
                        <NuxtLink to="/">English</NuxtLink>
                        <span class="mx-1.5 text-gray-200">|</span>
                        <NuxtLink to="/">隐私政策</NuxtLink>
                        <span class="mx-1.5 text-gray-200">|</span>
                        <NuxtLink to="/">使用条款</NuxtLink>
                    </div>
                </div>
            </XyzTransition>
            <div class="flex h-full flex-col pl-16 pr-10 lg:justify-center">
                <div class="font-bold xs:text-2xl md:text-2.5xl">心情惬意，来杯咖啡吧&nbsp;☕</div>
                <AccountButton />
            </div>
        </div>
        <div class="h-full w-full bg-sky-500 lg:pl-30%">
            <div class="w-full">
                <swiper :modules="modules" :navigation="true" class="h-full w-full">
                    <swiper-slide>
                        <img class="h-full w-full" src="@/assets/images/1.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-full w-full" src="@/assets/images/2.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-full w-full" src="@/assets/images/3.jpg" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .menu li {
        padding: 0 12px;
    }

    .nav li {
        cursor: pointer;
    }
</style>
