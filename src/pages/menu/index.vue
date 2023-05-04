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
            <div class="flex h-[95%] flex-col items-center justify-center">
                <h2 class="relative bottom-3 w-[71%] text-[26px] font-bold">菜单</h2>
                <ul class="nav flex w-[70%] flex-col">
                    <li><NuxtLink class="active">全部</NuxtLink></li>
                    <li><NuxtLink>饮料</NuxtLink></li>
                    <li><NuxtLink>美食</NuxtLink></li>
                    <li><NuxtLink>咖啡产品</NuxtLink></li>
                    <li><NuxtLink>商品</NuxtLink></li>
                </ul>
            </div>
        </template>
        <template #right-body>
            <div class="h-screen bg-light">
                <ul class="relative flex flex-wrap border pb-5 pt-14">
                    <li
                        v-for="(item, index) in [0, 0, 0, 0, 0]"
                        :key="index"
                        class="w-[25%] border p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2"
                    >
                        <NuxtLink class="flex flex-col items-center">
                            <div
                                class="bg-img mb-4 h-[150px] w-[150px] rounded-full shadow-menu hover:shadow-def"
                                style="
                                    background-image: url(https://www.starbucks.com.cn/images/products/affogato.jpg);
                                "
                            ></div>
                            <strong>阿馥奇朵™</strong>
                        </NuxtLink>
                    </li>
                    <h2 class="absolute left-5 top-6 text-sm font-bold text-content">
                        咖啡融合冰淇淋
                    </h2>
                </ul>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
    .nav li {
        height: 37px;
        line-height: 37px;
    }
    .nav li a {
        color: rgba(0, 0, 0, 0.56);
        font-size: 16px;
    }
    .nav .active {
        font-weight: 700;
        color: rgba(0, 0, 0, 0.87);
        border-bottom: 3px solid #00a862;
        padding-bottom: 5px;
    }
</style>
