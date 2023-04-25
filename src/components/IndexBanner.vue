<template>
    <div class="w-full">
        <swiper :loop="true" :modules="modules" :navigation="true" class="h-full w-full">
            <swiper-slide>
                <img class="xs:hidden md:block" src="https://i.328888.xyz/2023/04/24/iS9iVU.png" />
                <img class="xs:block md:hidden" src="https://i.328888.xyz/2023/04/24/iS9Dg8.jpeg" />
            </swiper-slide>
            <swiper-slide>
                <img class="xs:hidden md:block" src="https://i.328888.xyz/2023/04/24/iSvuSp.png" />
                <img class="xs:block md:hidden" src="https://i.328888.xyz/2023/04/24/iS9ULZ.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="xs:hidden md:block" src="https://i.328888.xyz/2023/04/24/iS9Vbv.jpeg" />
                <img class="xs:block md:hidden" src="https://i.328888.xyz/2023/04/24/iS9tUF.jpeg" />
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
