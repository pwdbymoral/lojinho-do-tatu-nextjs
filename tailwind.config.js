/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#C2EAAD',
          200: '#CEEE85',
          300: '#4FC263',
          DEFAULT: '#5DB53F',
          400: '#92A762'
        },
      },
      fontFamily: {
        'title': 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
}
