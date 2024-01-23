import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Chakra Petch', 'system-ui', 'sans-serif'],
        sans: ['Noto Sans TC', 'Inter', 'sans-serif'],
        serif: ['Noto Serif TC', 'serif'],
      },
      keyframes: {
        rainbow: {
          '100%,0%': { 'background-color': colors.red['500'] },
          '33%': { 'background-color': colors.green['500'] },
          '66%': { 'background-color': colors.blue['500'] },
        },
      },
      animation: {
        rainbow: 'rainbow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
