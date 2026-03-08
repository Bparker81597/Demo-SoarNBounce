/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070f3', // Electric Blue
        secondary: '#39ff14', // Neon Green
        'secondary-dark': '#2ecc12', 
        accent: '#ff6700', // Orange
        dark: '#0f172a', // Deep Navy for dark mode background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
