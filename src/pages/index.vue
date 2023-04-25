<script lang="ts" setup>
    definePageMeta({
        layout: false,
    })
</script>

<template>
    <NuxtLayout name="sidebar">
        <template #left-nav>
            <div class="flex h-full flex-col justify-center xs:pl-5 lg:justify-center">
                <div class="lg:relative lg:bottom-8 lg:pl-16">
                    <div
                        class="font-bold xs:py-4 xs:text-[22px] md:text-[24px] lg:mb-3 lg:text-[26px]"
                    >
                        心情惬意，来杯咖啡吧&nbsp;☕
                    </div>
                    <AccountButton />
                </div>
            </div>
        </template>
        <template #right-body>
            <IndexBanner />
            <div
                class="flex w-full bg-light py-6 xs:flex-col xs:items-center xs:px-3 md:flex-row md:justify-around md:px-3"
            >
                <NuxtLink
                    class="xs:pb-5 md:pb-0 lg:relative lg:hover:bottom-1.5 lg:hover:shadow-lg"
                >
                    <img
                        class="w-full rounded md:h-36 lg:h-64"
                        src="https://i.328888.xyz/2023/04/24/iS9f63.jpeg"
                    />
                </NuxtLink>
                <NuxtLink
                    class="xs:pb-5 md:pb-0 lg:relative lg:hover:bottom-1.5 lg:hover:shadow-md"
                >
                    <img
                        class="w-full rounded md:h-36 lg:h-64"
                        src="https://i.328888.xyz/2023/04/24/iS9yQy.jpeg"
                    />
                </NuxtLink>
                <NuxtLink
                    class="xs:pb-5 md:pb-0 lg:relative lg:hover:bottom-1.5 lg:hover:shadow-md"
                >
                    <img
                        class="w-full rounded md:h-36 lg:h-64"
                        src="https://i.328888.xyz/2023/04/24/iS9AC5.png"
                    />
                </NuxtLink>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped></style>
