module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        // sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        // DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 6px 10px 2px rgba(0, 0, 0, 0.2)',
        inner2: 'inset 0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        // none: 'none',
      },
      minWidth: {
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
