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
    <div class="app-wrapper">
        <!-- 左侧固定菜单 -->
        <div class="left-nav">
            <header>
                <div class="flex items-center">
                    <NuxtLink class="z-100 mr-3 w-9" to="/">
                        <img alt="星巴克" src="@/assets/images/logo.svg" />
                    </NuxtLink>
                    <ul>
                        <li><NuxtLink>门店</NuxtLink></li>
                        <li><NuxtLink>我的账户</NuxtLink></li>
                        <li><NuxtLink to="/menu">菜单</NuxtLink></li>
                    </ul>
                </div>
                <a class="menu-button" xyz="duration-3 short-100% wide-25%" @click="switchStatus">
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
                <div v-show="menuStatus" class="fold-menu">
                    <NuxtLink class="logo" to="/">
                        <img alt="星巴克" src="@/assets/images/logo.svg" />
                    </NuxtLink>
                    <a class="close" @click="switchStatus">
                        <icon-park
                            v-show="menuStatus"
                            type="close"
                            theme="outline"
                            size="24"
                            fill="#333"
                        />
                    </a>
                    <ul>
                        <li><NuxtLink to="/">门店</NuxtLink></li>
                        <li><NuxtLink to="/">我的账户</NuxtLink></li>
                        <li><NuxtLink to="/">菜单</NuxtLink></li>
                        <hr class="my-2.5" />
                        <li><NuxtLink to="/">我的账户</NuxtLink></li>
                        <li><NuxtLink to="/">菜单</NuxtLink></li>
                        <li><NuxtLink to="/">门店</NuxtLink></li>
                        <li><NuxtLink to="/">我的账户</NuxtLink></li>
                        <li><NuxtLink to="/">菜单</NuxtLink></li>
                        <hr class="my-2.5" />
                    </ul>
                    <AccountButton />
                    <div class="docs">
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
        <ul class="mobile-nav">
            <li v-for="(item, index) in mobileNavData" :key="index" @click="switchMobileNav(index)">
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

        <!-- 右侧滚动内容 -->
        <div class="w-full xs:pb-16 md:pb-0 lg:pl-30%">
            <slot name="right-body" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .app-wrapper {
        @apply h-screen w-full lg:flex lg:flex-col;
        .left-nav {
            @apply z-60 bg-white shadow-lg xs:w-full lg:fixed lg:h-full lg:w-30%;
            header {
                @apply relative items-center justify-between xs:hidden md:flex md:p-4 lg:p-5;
                ul {
                    @apply flex text-base font-bold;
                    li {
                        padding: 0 12px;
                    }
                }
                .menu-button {
                    @apply z-100 flex h-7 w-7 cursor-pointer items-center justify-center;
                }
            }
            .fold-menu {
                @apply absolute left-0 top-0 z-90 flex w-full flex-col justify-center bg-white pl-20 text-lg xs:h-screen lg:h-full;
                .logo {
                    @apply absolute left-4 top-4 z-100 w-9 md:hidden;
                }
                .close {
                    @apply absolute right-3 top-5 z-100 flex h-7 w-7 items-center justify-center md:hidden;
                }
                ul {
                    @apply pr-8 font-bold leading-10;
                }
                .docs {
                    @apply absolute bottom-10 flex pl-20 text-sm text-black text-opacity-40;
                }
            }
        }
        .mobile-nav {
            @apply fixed bottom-0 z-80 h-14 w-full justify-between bg-white px-1.5 pt-2 text-xs shadow-nav xs:flex md:hidden;
            li {
                @apply flex w-1/5 flex-col items-center;
            }
        }
    }
</style>
