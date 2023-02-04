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
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
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
