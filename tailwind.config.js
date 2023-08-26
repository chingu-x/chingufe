/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme.js'
import colors from 'tailwindcss/colors.js'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],  
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      green: colors.emerald,
      indigo: colors.indigo,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.violet,
      red: colors.red,
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {},
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/typography'),
    import('@tailwindcss/aspect-ratio'),
  ],
}

