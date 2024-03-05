/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width:{
        '400': '400px',
        '450' : '450px'
      },
      colors: {
        'blue-color' : "#60a5fa",
        'gray-color' : "#6b7280",
        'btn-hover' : '#0284c7',
        'light-gray' : '#e2e8f0',
        'light-white' : '#fff',
        'dark-gray': '#2d3748',
        'dark-white' : '#1a202c'

      },
      textColor: {
        'light': '#374151',
        'dark' : '#cbd5e0'
      },
      borderColor: {
        'light' : '#0f172a1a',
        'dark' : '#4a5568'
      }
    },
  },
  plugins: [],
}