/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0070CC",
        "main-blue-light": "#6ac2e2",
        "main-blue-ultra-light": "#bfe5f2",
        "main-blue-dark": "#196480",
        "main-blue-ultra-dark": "#0d3240",
        "main-orange": "#d53c00",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dissapear: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        sideMenuEnter: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        sideMenuLeave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        appearFromBottom: {
          "0%": { transform: "translateY(20%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        opacityAndScale: {
          "0%": { opacity: 0, scale: 0 },
          "100%": { opacity: 1, scale: 1 },
        },
        opacityAndReverse: {
          "0%": { opacity: 1, scale: 1 },
          "100%": { opacity: 0, scale: 0 },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-forwards": { "animation-fill-mode": "forwards" },
      });
    },
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
  ],
};
