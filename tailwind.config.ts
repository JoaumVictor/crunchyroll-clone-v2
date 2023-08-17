import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#F47521",
        },
      },
    },
    colors: {
      primary: {
        DEFAULT: "#F47521",
      },
      gray: {
        DEFAULT: "#23252B",
      },
      black: {
        DEFAULT: "#171719",
      },
    },
  },
  plugins: [],
};
export default config;
