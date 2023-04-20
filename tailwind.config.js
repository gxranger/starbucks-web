module.exports = {
    content: [
        './src/components/**/*.{js,vue,ts}',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        './src/plugins/**/*.{js,ts}',
        './src/app.vue',
    ],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            spacing: {
                '30%': '30%',
            },
            zIndex: {
                minus: '-1',
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            colors: {
                primary: '#00A862',
            },
            fontSize: {
                '2.5xl': '1.7rem',
            },
            width: {
                '30%': '30%',
                '70%': '70%',
            },
            padding: {
                5.5: '24px',
                '30%': '30%',
            },
        },
    },
    plugins: [],
}
