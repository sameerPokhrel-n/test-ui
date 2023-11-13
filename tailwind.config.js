/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#7474C9",
        secondaryDim: "#EBEBF8",
        lightBlue: "#4786E7",
        green: "#4AC86E",
        textColor: "#475467",
        primaryBlue: "#7474C9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
