/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a3c5e',
          dark: '#122b45',
          light: '#2a5280',
        },
        orange: {
          DEFAULT: '#e8622a',
          dark: '#c94f1a',
          light: '#f0814a',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#5a6a7a',
        },
        cream: '#f8f7f4',
        success: '#2d7a4f',
        warning: '#c97b2a',
        danger: '#c0392b',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
