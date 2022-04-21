module.exports = {
  content: [],
  important: true,
  darkMode: "class", // or 'media' or 'false'
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ["dark"], //specific classes
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        orange: {
          100: "#FCF1EE",
          500: "#E37244",
        },
        gray: {
          100: "#F6F6F8",
          200: "#5A627A",
          300: "#C5BDBB",
          400: "#888BA5",
          900: "#212121",
        },
      },
    },
  },
};
