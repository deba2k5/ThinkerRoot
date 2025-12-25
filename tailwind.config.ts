import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        primary: "#FD0001",
        secondary: "#F44336",
        darked: "#7B0F0F",
        black: "#1A1A1A",
        gray: "#999999",
        "light-gray": "#E5E5E5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
