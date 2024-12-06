/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/sections/navbar.tsx",
    "./src/sections/hero.tsx",
    "./src/sections/Highlights.tsx",
    "./src/sections/VideoCarousel.tsx",
    "./src/sections/closerLook.tsx",
    "./src/sections/explore.tsx",
    "./src/sections/appleGpus.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
