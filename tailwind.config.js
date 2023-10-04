/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        heading: '#403F3F',
        body: '#706F6F',
        'light-body': '#9F9F9F',
        theme: '#F75B5F',
        button: '#D72050',
      },
    },
  },
  plugins: [require('daisyui')],
};
