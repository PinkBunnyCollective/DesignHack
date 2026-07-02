import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16211d",
        paper: "#f6f3ec",
        "paper-deep": "#ebe4d6",
        "dh-blue": "#2367d1",
        "dh-purple": "#7656c9",
        "dh-green": "#1f7a55",
        "dh-orange": "#c86521",
        "dh-red": "#bf3d35",
        "dh-yellow": "#b48b13",
        neon: "#38ffb4"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
