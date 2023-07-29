/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pearl': {
          '50': '#eaf8ff',
          '100': '#d9f1ff',
          '200': '#bbe4ff',
          '300': '#91d0ff',
          '400': '#66afff',
          '500': '#438dff',
          '600': '#2267ff',
          '700': '#1755eb',
          '800': '#164abd',
          '900': '#1b4394',
          '950': '#091530',
        },
      }
    },
  },
  plugins: [],
}
