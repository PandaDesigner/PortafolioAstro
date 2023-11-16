/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Fira Code', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-home-portfolio':
          "url('/src/assets/images/porfolio-home-desktop@2x.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
