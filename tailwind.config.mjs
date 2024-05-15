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
          '0%, 100%': { 'background-color': colors.red['500'] },
          '33%': { 'background-color': colors.green['500'] },
          '66%': { 'background-color': colors.blue['500'] },
        },
        heartbeat: {
          '0%, 12.5%, 37.5%, 62.5%, 75%, 100%': { opacity: 0.5 },
          '25%, 50%': { opacity: 1 },
        },
        spin3d: {
          '0%': { transform: 'rotateY(0turn)' },
          '50%': { transform: 'rotateY(.5turn)' },
          '100%': { transform: 'rotateY(1turn)' },
        },
      },
      animation: {
        rainbow: 'rainbow 3s ease-in-out infinite',
        heartbeat: 'heartbeat 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin3d: 'spin3d 3s linear infinite',
      },
    },
  },
  plugins: [],
};
