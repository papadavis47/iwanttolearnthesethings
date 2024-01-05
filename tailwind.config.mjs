const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mukta', 'sans-serif', ...defaultTheme.fontFamily.sans],
        serif: ['Lora Variable', 'serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
