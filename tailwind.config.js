/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#4FC263',
          DEFAULT: '#386641',
        },
        secondary: {
          DEFAULT: '#f2e8cf',
        },
        accent: {
          DEFAULT: '#a7c957',
        },
        neutral: {
          white: '#f5f5f5',
          black: '#171717',
        },
      },
      fontFamily: {
        title: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
});
