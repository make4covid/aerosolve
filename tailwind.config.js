module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 0 6px 10px 2px rgba(0, 0, 0, 0.2)',
        'inner-xs': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      minWidth: {
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
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover'],
    },
  },
  plugins: [],
}
