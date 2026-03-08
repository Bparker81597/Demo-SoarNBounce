/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3', // Electric Blue (adjusted to better match a high-energy park)
        secondary: '#39ff14', // Neon Green
        accent: '#ff6700', // Orange
        dark: '#0a0a0a',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
