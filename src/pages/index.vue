<script lang="ts" setup>
    import { ref, computed } from 'vue'

    const menuStatus = ref(false)
    const mobileNavData = [
        { index: 0, url: '/icon-home.svg', active: '/icon-home-active.svg', name: '主页' },
        { index: 1, url: '/icon-stores.svg', active: '/icon-stores-active.svg', name: '门店' },
        {
            index: 2,
            url: '/icon-account.svg',
            active: '/icon-account-active.svg',
            name: '我的账户',
        },
        { index: 3, url: '/icon-menu.svg', active: '/icon-menu-active.svg', name: '菜单' },
        { index: 4, url: '/icon-more.svg', active: '/icon-more-active.svg', name: '更多' },
    ]
    const navIndex = ref(0)

    const currentClass = computed(
        () => cIndex => cIndex === navIndex.value ? 'text-primary' : 'text-neutral-500'
    )
    const currentSrc = computed(
        () => item => item.index === navIndex.value ? item.active : item.url
    )
    function switchMobileNav(index) {
        navIndex.value = index
        if (index === 4) this.switchStatus()
    }

    function switchStatus() {
        menuStatus.value = !menuStatus.value
    }
</script>

<template>
    <div class="h-screen w-full lg:flex">
        <div class="z-60 bg-white shadow-lg xs:w-full lg:fixed lg:h-full lg:w-30%">
            <header class="relative items-center justify-between p-5.5 xs:hidden md:flex">
                <div class="flex items-center">
                    <NuxtLink class="z-100 mr-3 w-9" to="/">
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
            <XyzTransition xyz="fade small-3 origin-center">
                <div
                    v-show="menuStatus"
                    class="absolute left-0 top-0 z-90 flex w-full flex-col justify-center bg-white pl-20 text-lg xs:h-screen lg:h-full"
                >
                    <NuxtLink class="absolute left-4 top-4 z-100 w-9 md:hidden" to="/">
                        <img alt="星巴克" src="@/assets/images/logo.svg" />
                    </NuxtLink>
                    <a
                        class="absolute right-3 top-5 z-100 flex h-7 w-7 items-center justify-center md:hidden"
                        @click="switchStatus"
                    >
                        <img
                            v-show="menuStatus"
                            class="xyz-in"
                            src="@/assets/icons/icon-close.svg"
                        />
                    </a>
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
            <div class="flex h-full flex-col xs:py-4 xs:pl-5 md:pl-16 md:pr-10 lg:justify-center">
                <div class="font-bold xs:text-xl md:text-2.5xl">心情惬意，来杯咖啡吧&nbsp;☕</div>
                <AccountButton />
            </div>
        </div>
        <ul
            class="mobile-nav fixed bottom-0 z-80 h-14 w-full justify-between px-1.5 pt-2 text-xs shadow-[0_30px_25px_10px_rgba(0,0,0,0.5)] xs:flex md:hidden"
        >
            <li
                class="flex w-1/5 flex-col items-center"
                v-for="(item, index) in mobileNavData"
                :key="index"
                @click="switchMobileNav(index)"
            >
                <NuxtLink class="flex flex-col items-center">
                    <img :src="currentSrc(item)" />
                    <span :class="currentClass(index)">{{ item.name }}</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="h-full w-full lg:pl-30%">
            <IndexBanner />
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
