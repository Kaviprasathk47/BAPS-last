/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
      colors: {
        customBlue: '#24317f',
        HoverColor:'#1b265e', // Name your color
      },
    },
  },
  plugins: [],
};
