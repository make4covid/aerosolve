module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 0 6px 10px 2px rgba(0, 0, 0, 0.2)',
        inner2: 'inset 0 3px 5px 2px rgba(0, 0, 0, 0.2)',
      },
      minWidth: {
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
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
