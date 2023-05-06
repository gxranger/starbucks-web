<script lang="ts" setup>
    definePageMeta({
        layout: false,
    })
    useHead({
        title: '饮料 | 星巴克',
        meta: [
            { name: 'keywords', content: '星巴克饮料, 饮料' },
            { name: 'description', content: '探索星巴克饮料。' },
        ],
    })
</script>

<template>
    <NuxtLayout name="sidebar">
        <template #left-nav>
            <div class="left-nav">
                <h2 class="menu-title">菜单</h2>
                <ul class="nav">
                    <li><NuxtLink class="active">全部</NuxtLink></li>
                    <li><NuxtLink>饮料</NuxtLink></li>
                    <li><NuxtLink>美食</NuxtLink></li>
                    <li><NuxtLink>咖啡产品</NuxtLink></li>
                    <li><NuxtLink>商品</NuxtLink></li>
                </ul>
            </div>
        </template>
        <template #right-body>
            <div class="right-body">
                <ul v-for="(uitem, uindex) in [0, 0, 0, 0, 0]" :key="uindex">
                    <li v-for="(item, index) in [0, 0, 0, 0, 0]" :key="index">
                        <NuxtLink>
                            <div
                                class="bg-img"
                                style="
                                    background-image: url(https://www.starbucks.com.cn/images/products/affogato.jpg);
                                "
                            ></div>
                            <strong>阿馥奇朵™</strong>
                        </NuxtLink>
                    </li>
                    <h2>咖啡融合冰淇淋</h2>
                </ul>
            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    .left-nav {
        @apply flex h-[95%] flex-col items-center justify-center;
        .menu-title {
            @apply relative bottom-3 w-[71%] text-[26px] font-bold;
        }
        .nav {
            @apply flex w-[70%] flex-col;
            li {
                height: 37px;
                line-height: 37px;
                a {
                    color: rgba(0, 0, 0, 0.56);
                    font-size: 16px;
                }
                .active {
                    font-weight: 700;
                    color: rgba(0, 0, 0, 0.87);
                    border-bottom: 3px solid #00a862;
                    padding-bottom: 5px;
                }
            }
        }
    }
    .right-body {
        @apply bg-light;
        ul {
            @apply relative flex flex-wrap pb-5 pt-14;
            li {
                @apply w-1/4 p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2;
                a {
                    @apply flex flex-col items-center;
                    div {
                        @apply mb-4 h-[150px] w-[150px] rounded-full shadow-menu;
                    }
                }
            }
            li:hover {
                div {
                    @apply shadow-def;
                }
            }
            h2 {
                @apply absolute left-5 top-6 text-sm font-bold text-content;
            }
        }
    }
</style>
