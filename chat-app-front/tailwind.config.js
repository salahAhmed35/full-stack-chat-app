/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '400': '400px'
      },
      backgroundColor: {
        'light-gray' : '#e2e8f0',
        'light-white' : '#fff',
        'dark-gray ': '#2d3748',
        'dark-white' : '#1a202c'
      },
      textColor: {
        'light': '#374151',
        'dark' : '#cbd5e0'
      },
      border: {
        'light' : '#374151',
        'dark' : '#4a5568'
      }
    },
  },
  plugins: [],
}