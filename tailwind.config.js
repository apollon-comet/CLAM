module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fffbfb", 600: "#827c7c" },
        blue_gray: { 100: "#d9d9d9" },
        deep_purple: {
          700: "#4633b9",
          "600_00": "#5f15bd00",
          "600_d9": "#5f15bdd9",
          "600_c2": "#5f15bdc2",
          A700: "#7f00ff",
        },
        red: { "300_00": "#b2696900", A700_01: "#ff0f00", A700: "#ff0000" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { A400: "#00ff47" },
        indigo: {
          300: "#7e74bc",
          900: "#12065f",
          A700_aa: "#2c4ae8aa",
          "900_01": "#130660",
        },
        white: { A700_01: "#fffcfc", A700: "#ffffff" },
      },
      fontFamily: {
        karantina: "Karantina",
        kavivanar: "Kavivanar",
        kameron: "Kameron",
        inter: "Inter",
        katibeh: "Katibeh",
        kleeone: "Klee One",
        kantumruy: "Kantumruy",
      },
      boxShadow: {
        bs: "inset 0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  4px 0px #0000003f",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#7f00ff,#b2696900)",
        gradient1: "linear-gradient(180deg ,#130660,#2c4ae8aa)",
        gradient2:
          "linear-gradient(180deg ,#130660,#5f15bd00,#5f15bdc2,#5f15bdd9)",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
