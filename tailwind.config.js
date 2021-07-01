const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.fuchsia,
        cyan: colors.cyan,
        'light-blue': colors.sky,
      },
      boxShadow: {
        inner: 'inset 0 6px 10px 2px rgba(0, 0, 0, 0.2)',
        'inner-xs': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      minWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
      flexGrow: {
        2: 2,
      },
      transitionDuration: {
        0: '0ms',
      },
      borderWidth: {
        3: '3px',
      },
      maxHeight: {
        min: 'min-content',
        max: 'max-content',
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover'],
    },
  },
  plugins: [],
}
