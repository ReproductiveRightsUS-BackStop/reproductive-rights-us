/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        //syntax for the variations - use an online UI pallete generator)
        'blue': { '50': '#eef7ff', '100': '#d8ebff', '200': '#badcff', '300': '#8ac8ff', '400': '#53aaff', '500': '#2b85ff', '600': '#1465fc', '700': '#0d4ee8', '800': '#123fbb', '900': '#153a93', '950': '#112355', },
       'gray': { DEFAULT: '#818386', '50': '#f5f6f6', '100': '#e6e7e7', '200': '#cfd0d2', '300': '#aeafb2', '400': '#818386', '500': '#6b6d6f', '600': '#5b5c5f', '700': '#4d4e51', '800': '#444546', '900': '#3c3d3d', '950': '#252527', },
        'white': '#ffffff',
        'black': '#000000',

      }
    },
    plugins: [],
  }
}
