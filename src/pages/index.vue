<script lang="ts" setup>
    definePageMeta({
        layout: false,
    })
</script>

<template>
    <NuxtLayout name="sidebar">
        <template #left-nav>
            <div class="left-nav">
                <div class="nav-wrapper">
                    <div class="menu-title">心情惬意，来杯咖啡吧&nbsp;☕</div>
                    <AccountButton />
                </div>
            </div>
        </template>
        <template #right-body>
            <IndexBanner />
            <div class="row-list">
                <NuxtLink>
                    <img src="https://i.328888.xyz/2023/04/24/iS9f63.jpeg" />
                </NuxtLink>
                <NuxtLink>
                    <img src="https://i.328888.xyz/2023/04/24/iS9yQy.jpeg" />
                </NuxtLink>
                <NuxtLink>
                    <img src="https://i.328888.xyz/2023/04/24/iS9AC5.png" />
                </NuxtLink>
            </div>
            <div class="club-wrapper">
                <div class="left-content">
                    <h2>星享俱乐部</h2>
                    <p class="more">
                        开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。
                        <NuxtLink class="text-secondary">了解更多&nbsp;›</NuxtLink>
                    </p>
                    <p class="account">
                        <NuxtLink class="mr-3"> 注册 </NuxtLink>
                        <NuxtLink> 登录 </NuxtLink>
                    </p>
                </div>
                <div>
                    <img alt="" src="@/assets/images/logo-msr.svg" />
                </div>
            </div>
            <div class="chosen-wrapper">
                <h2>星巴克精选</h2>
                <p class="text-zinc-500 xs:mb-0 lg:mb-3">在星巴克天猫旗舰店发现更多咖啡心意</p>
                <ul class="chosen-list">
                    <li>
                        <NuxtLink>
                            <img src="https://i.328888.xyz/2023/04/26/ivb1zw.png" />
                            <p>会员星礼包</p>
                            <p class="list-describle">
                                星享卡新升级
                                <br />
                                更多心意好礼
                            </p>
                            <p class="more">了解更多&nbsp;›</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink>
                            <img src="https://i.328888.xyz/2023/04/26/ivbQaa.png" />
                            <p>星礼卡</p>
                            <p class="list-describle">
                                用一份心礼
                                <br />
                                让心意相随
                            </p>
                            <p class="more">了解更多&nbsp;›</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink>
                            <img src="https://i.328888.xyz/2023/04/26/ivbq0x.png" />
                            <p>电子产品券</p>
                            <p class="list-describle">
                                心意
                                <br />
                                从这一杯开始
                            </p>
                            <p class="more">了解更多&nbsp;›</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink>
                            <img src="https://i.328888.xyz/2023/04/26/ivjZJL.png" />
                            <p>咖啡生活</p>
                            <p class="list-describle">
                                星巴克
                                <br />
                                用心制作
                            </p>
                            <p class="more">了解更多&nbsp;›</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="blog-wrapper">
                <h2>1912 派克街 | 咖啡星讲堂</h2>
                <p class="text-zinc-500 xs:mb-0">了解更多星巴克咖啡文化</p>
                <div class="w-full p-5 pt-5">
                    <IndexList />
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    .left-nav {
        @apply flex h-full flex-col justify-center xs:pl-5 lg:justify-center;
        .nav-wrapper {
            @apply lg:relative lg:bottom-8 lg:pl-16;
            .menu-title {
                @apply font-bold xs:py-4 xs:text-[22px] md:text-[24px] lg:mb-3 lg:text-[26px];
            }
        }
    }
    .row-list {
        @apply flex w-full bg-light py-6 xs:flex-col xs:items-center xs:px-3 md:flex-row md:justify-around md:px-3;
        a {
            @apply transition delay-150 duration-300 ease-in-out hover:-translate-y-1 xs:pb-5 md:pb-0 lg:hover:shadow-def;
            img {
                @apply w-full rounded md:h-36 lg:h-64;
            }
        }
    }
    .club-wrapper {
        @apply flex items-center justify-around py-8 xs:flex-col xs:px-0 md:flex-row md:px-[3%] lg:px-[12%];
        .left-content {
            @apply xs:flex xs:w-3/4 xs:flex-col xs:items-center md:block md:w-[40%] lg:w-[26%];
            h2 {
                @apply mb-5 text-[22px] text-black;
            }
            .more {
                @apply mb-10 text-base font-normal leading-8 text-zinc-500 xs:text-center md:text-left;
            }
            .account {
                @apply xs:pb-5 md:pb-0;
                a {
                    @apply rounded-full border border-primary px-4 py-2 text-primary;
                }
            }
        }
    }
    .chosen-wrapper {
        @apply flex flex-col items-center bg-light py-6 md:px-[5%] lg:px-[10%];
        h2 {
            @apply mb-5 text-[22px] text-black;
        }
        .chosen-list {
            @apply flex justify-between xs:w-[95%] xs:flex-wrap md:flex-nowrap lg:w-[70%];
            li {
                @apply relative h-52 bg-white shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-def xs:mt-16 xs:w-[48%] md:mb-0 md:w-[23%];
                a {
                    @apply flex h-full w-full flex-col items-center p-8;
                    p:nth-child(2) {
                        @apply my-4 font-bold;
                    }
                    img {
                        @apply absolute top-[-15%] h-20 w-24;
                    }
                    .list-describle {
                        @apply text-center text-sm leading-7 text-zinc-500;
                    }
                    .more {
                        @apply absolute bottom-6 text-sm text-secondary;
                    }
                }
            }
        }
    }
    .blog-wrapper {
        @apply flex flex-col items-center py-6;
        h2 {
            @apply mb-5 text-[22px] text-black;
        }
    }
</style>
