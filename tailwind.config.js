/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#708238",
        "primary-base": "#568203",
        "primary-light": "#A8C090",
        "primary-darker": "#487800",
        "white-smoke": "#F5F5F5",
      },
      backgroundImage: {
        "custom-bg": "linear-gradient(135deg, #ffffff 0%, #A8C090 100%)",
      },
    },
  },
  plugins: [],
};

export default config;