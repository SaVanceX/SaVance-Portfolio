/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sea-foam': '#8df9e6',
        'chalk-black': '#231f20',
      },
    },
  },
  plugins: [],
};
