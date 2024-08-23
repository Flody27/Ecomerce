/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thcShpBlue: "#2A678C",
        tchShpWhite: "#F4F7FA",
        tchShpLigthBlue: "#4B8FAB",
        tchShpDarkBlue: "#164E63",
        tchShpDarkBg: "#121212",
        tchShpDarkText: "#E0E0E0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
