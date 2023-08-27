/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', ...fontFamily.sans],
      },
      colors: {
        primary: 'rgb(var(--primary) , <alpha-value>)',
        divider: 'rgb(var(--divider) , <alpha-value>)',
        content: 'rgb(var(--content) , <alpha-value>)',
        'base-100': 'rgb(var(--base-100) , <alpha-value>)',
        'base-200': 'rgb(var(--base-200) , <alpha-value>)',
        'base-gray': 'rgb(var(--base-gray) , <alpha-value>)',
        'primary-hover': 'rgb(var(--primary-hover) , <alpha-value>)',
        'primary-disable': 'rgb(var(--primary-disable) , <alpha-value>)',
      },
      screens: {
        xsm: '370px',
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
