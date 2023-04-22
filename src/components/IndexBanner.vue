<template>
    <div class="w-full xs:hidden md:block">
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
    <div class="w-full xs:block md:hidden">
        <swiper :modules="modules" :navigation="true" class="h-full w-full">
            <swiper-slide>
                <img class="h-full w-full" src="@/assets/images/m1.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="h-full w-full" src="@/assets/images/m2.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="h-full w-full" src="@/assets/images/m3.jpg" />
            </swiper-slide>
        </swiper>
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
