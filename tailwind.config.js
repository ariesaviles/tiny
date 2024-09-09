/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ["HeaderFont", "sans-serif"],
      header: ["HeaderFont", "serif"],
      body: ["BodyFont", "serif"],
    },
    extend: {
      colors: {
        retro: {
          black: "#000000",
          green: "#33ff33",
          blue: "#3333ff",
          red: "#ff3333",
          yellow: "#ffff33",
        },
      },
      backgroundImage: {
        "pixel-gradient":
          "linear-gradient(90deg, #ff7f7f 0%, #ffb47f 50%, #ffd27f 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        html: {
          imageRendering: "pixelated",
          imageRendering: "-moz-crisp-edges",
          imageRendering: "crisp-edges",
        },
      });
      addComponents({
        ".retro-pixelated": {
          width: "640px",
          height: "480px",
          transformOrigin: "top left",
        },
      });
      addUtilities({
        ".retro-scale-1": {
          transform: "scale(1.5)",
        },
        ".retro-scale-2": {
          transform: "scale(2)",
        },
        ".retro-scale-3": {
          transform: "scale(3)",
        },
      });
    }),
  ],
};
