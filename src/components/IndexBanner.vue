<template>
    <div class="w-full">
        <div class="xs:hidden md:block">
            <swiper :modules="modules" :navigation="true" class="h-full w-full">
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iS9iVU.png" />
                </swiper-slide>
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iSvuSp.png" />
                </swiper-slide>
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iS9Vbv.jpeg" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="xs:block md:hidden">
            <swiper :modules="modules" :navigation="true" class="h-full w-full">
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iS9Dg8.jpeg" />
                </swiper-slide>
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iS9ULZ.png" />
                </swiper-slide>
                <swiper-slide>
                    <img class="h-full w-full" src="https://i.328888.xyz/2023/04/24/iS9tUF.jpeg" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation } from 'swiper'

    // Import Swiper styles
    import 'swiper/css'
    import 'swiper/css/navigation'

    const modules = [Navigation]
</script>

<style scoped>
    .swiper {
        --swiper-navigation-color: #fff; /* 单独设置按钮颜色 */
    }
</style>
