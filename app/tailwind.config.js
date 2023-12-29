/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-1': '#ccd5ae',
        'green-2': '#e9edc9',
        'beige-1': '#fefae0',
        'beige-2': '#faedcd',
        'camel': '#d4a373',
        'green-hover': '#828773',
        'dark-color': '#1f2937'
      },
      backgroundColor: {
        dark: { // Couleurs de fond pour le mode sombre
          DEFAULT: '#1f2937', 
          
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
