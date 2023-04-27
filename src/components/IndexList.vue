<template>
    <div class="relative w-full">
        <div
            class="button-prev absolute bottom-28 left-0 z-100 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-def"
        >
            <icon-park type="left" theme="outline" size="24" fill="#333" />
        </div>
        <div
            class="button-next absolute bottom-28 right-0 z-100 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-def"
        >
            <icon-park type="right" theme="outline" size="24" fill="#333" />
        </div>
        <swiper
            :navigation="navigation"
            :modules="modules"
            :breakpoints="breakpoints"
            class="h-[240px] w-full"
        >
            <swiper-slide class="py-5">
                <div
                    class="relative h-full rounded shadow-list transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-def"
                >
                    <div
                        class="absolute left-0 top-3 z-100 bg-secondary px-4 py-2 text-xs text-white"
                    >
                        咖啡知识
                    </div>
                    <div
                        class="bg-img h-3/4 w-full rounded-t"
                        style="background-image: url(https://i.328888.xyz/2023/04/27/i9VdQy.jpeg)"
                    ></div>
                    <p class="flex h-1/4 items-center border pl-5 text-base font-light">
                        咖啡的起源与培植
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="py-5">
                <div
                    class="relative h-full rounded shadow-list transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-def"
                >
                    <div
                        class="absolute left-0 top-3 z-100 bg-secondary px-4 py-2 text-xs text-white"
                    >
                        咖啡知识
                    </div>
                    <div
                        class="bg-img h-3/4 w-full rounded-t"
                        style="background-image: url(https://i.328888.xyz/2023/04/27/i9VdQy.jpeg)"
                    ></div>
                    <p class="flex h-1/4 items-center border pl-5 text-base font-light">
                        咖啡的起源与培植
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="py-5">
                <div
                    class="relative h-full rounded shadow-list transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-def"
                >
                    <div
                        class="absolute left-0 top-3 z-100 bg-secondary px-4 py-2 text-xs text-white"
                    >
                        咖啡知识
                    </div>
                    <div
                        class="bg-img h-3/4 w-full rounded-t"
                        style="background-image: url(https://i.328888.xyz/2023/04/27/i9VdQy.jpeg)"
                    ></div>
                    <p class="flex h-1/4 items-center border pl-5 text-base font-light">
                        咖啡的起源与培植
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="py-5">
                <div
                    class="relative h-full rounded shadow-list transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-def"
                >
                    <div
                        class="absolute left-0 top-3 z-100 bg-secondary px-4 py-2 text-xs text-white"
                    >
                        咖啡知识
                    </div>
                    <div
                        class="bg-img h-3/4 w-full rounded-t"
                        style="background-image: url(https://i.328888.xyz/2023/04/27/i9VdQy.jpeg)"
                    ></div>
                    <p class="flex h-1/4 items-center border pl-5 text-base font-light">
                        咖啡的起源与培植
                    </p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation, Autoplay } from 'swiper'

    // Import Swiper styles
    import 'swiper/css'
    import 'swiper/css/navigation'

    const modules = [Navigation, Autoplay]
    const navigation = {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    }
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    }
</script>

<style scoped>
    .bg-img {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
</style>
