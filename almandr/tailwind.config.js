/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fafaf9', // stone-50
        ink: '#1c1917', // stone-900
        accent: '#f97316', // orange-500
      },
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
