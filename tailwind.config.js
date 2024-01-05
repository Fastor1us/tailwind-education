/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // './pages/**/*.{html,js}',
    './src/*.{js,vue}',
    './src/components/*.{js,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-[#f0db4f]',
    'bg-[#218d00]'
  ],
}
