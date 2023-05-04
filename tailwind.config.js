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
                secondary: '#C2A661',
                light: '#f7f7f7',
                content: 'rgba(0,0,0,0.56)',
            },
            fontSize: {
                '2.5xl': '1.7rem',
            },
            width: {
                '30%': '30%',
                '70%': '70%',
                98: '26rem',
            },
            padding: {
                '30%': '30%',
            },
            boxShadow: {
                nav: '0 0 5px rgba(0,0,0, 0.15)',
                def: '0 0 10px rgba(0,0,0, 0.15)',
                list: '0 1px 2px rgba(121,121,121, 0.45)',
                menu: '0 1px 1px 1px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [],
}
