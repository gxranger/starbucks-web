module.exports = {
    content: [
        './src/components/**/*.{js,vue,ts}',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        './src/plugins/**/*.{js,ts}',
        './src/app.vue'
    ],
    theme: {
        extend: {
          colors: {
            primary: '#00A862'
          },
          fontSize: {
            '2.5xl': '1.7rem'
          },
          width: {
            '30%': '30%',
            '70%': '70%'
          },
          padding: {
            '5.5': '24px'
          }
        },
    },
    plugins: [],
}
