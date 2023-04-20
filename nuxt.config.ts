// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
    },
    app: {
        head: {
            title: '星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验',
            link: [
                {
                    rel: 'shortcut icon external nofollow"',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },
    srcDir: 'src/',
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt'],
})
