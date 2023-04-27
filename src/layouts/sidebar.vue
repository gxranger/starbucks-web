<script lang="ts" setup>
    import { ref, computed } from 'vue'

    const menuStatus = ref(false)
    const mobileNavData = [
        { index: 0, icons: 'home-two', name: '主页' },
        { index: 1, icons: 'shop', name: '门店' },
        { index: 2, icons: 'people', name: '我的账户' },
        { index: 3, icons: 'juice', name: '菜单' },
        { index: 4, icons: 'all-application', name: '更多' },
    ]
    const curIndex = ref(0)

    const currentClass = computed(
        () => cIndex => cIndex === curIndex.value ? 'text-primary' : 'text-neutral-500'
    )

    function switchMobileNav(index) {
        curIndex.value = index
        if (index === 4) this.switchStatus()
    }

    function switchStatus() {
        menuStatus.value = !menuStatus.value
    }
</script>

<template>
    <div class="h-screen w-full lg:flex lg:flex-col">
        <div class="z-60 bg-white shadow-lg xs:w-full lg:fixed lg:h-full lg:w-30%">
            <header class="lg:p-5.5 relative items-center justify-between xs:hidden md:flex md:p-4">
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
                    <icon-park
                        v-show="menuStatus"
                        class="xyz-in"
                        type="close"
                        theme="outline"
                        size="24"
                        fill="#333"
                    />
                    <icon-park
                        v-show="!menuStatus"
                        class="xyz-in"
                        type="hamburger-button"
                        theme="outline"
                        size="26"
                        fill="#333"
                    />
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
                        <icon-park
                            v-show="menuStatus"
                            type="close"
                            theme="outline"
                            size="24"
                            fill="#333"
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
            <slot name="left-nav" />
        </div>
        <ul
            class="mobile-nav fixed bottom-0 z-80 h-14 w-full justify-between bg-white px-1.5 pt-2 text-xs shadow-nav xs:flex md:hidden"
        >
            <li
                v-for="(item, index) in mobileNavData"
                :key="index"
                class="flex w-1/5 flex-col items-center"
                @click="switchMobileNav(index)"
            >
                <NuxtLink class="flex flex-col items-center">
                    <icon-park
                        v-show="curIndex !== index"
                        :type="item.icons"
                        theme="outline"
                        size="24"
                        fill="#737373"
                        class="mb-1"
                        :stroke-width="2"
                    />
                    <icon-park
                        v-show="curIndex === index"
                        :type="item.icons"
                        theme="filled"
                        size="24"
                        fill="#00A862"
                        class="mb-1"
                        :stroke-width="1"
                    />
                    <span :class="currentClass(index)">{{ item.name }}</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="w-full xs:pb-16 md:pb-0 lg:pl-30%">
            <slot name="right-body" />
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
