/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f3ead4",
        bone: "#e8dcb8",
        ink: "#0d0a08",
        soot: "#1a1410",
        lavender: "#b8a6d8",
        moonlight: "#c8b8e0",
        gold: "#c89b3c",
        oldgold: "#a07b22",
        burnt: "#c84e1a",
        magenta: "#c0237a",
        teal: "#2b6a6a",
        crimson: "#8a1320",
        purple: "#3a1d4a",
        deeppurple: "#1f0e2e",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        display: ['"Bebas Neue"', '"Oswald"', "Impact", "sans-serif"],
        body: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
        psyche: ['"Abril Fatface"', '"Yeseva One"', "Georgia", "serif"],
        typewriter: ['"Special Elite"', '"Courier Prime"', "Courier", "monospace"],
        courier: ['"Courier Prime"', "Courier", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "45%": { opacity: 0.92 },
          "55%": { opacity: 0.7 },
          "65%": { opacity: 0.95 },
        },
        drift: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-12px) translateX(6px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
      },
      animation: {
        spinslow: "spinslow 18s linear infinite",
        flicker: "flicker 5s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
