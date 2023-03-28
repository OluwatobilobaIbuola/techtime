/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: "#E7E7E7",
        neutralTwo: "#A1A1A1",
        textBlack: "#000F24",
        textBlueVariant: "#AAC4E6",
        primary: "#004DB3",
        secondary: "#F5F5F5",
        bgWhite: "#FFFFF",
        bgNeutral: "#F8F9FC",
        bgLightBlue: "#CCDBF0",
        bgDark: "#000F24",
        bgInput: "#2A2A2B",
      },
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      clashDisplay: ["ClashDisplay", "sans-serif"],
    },
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
