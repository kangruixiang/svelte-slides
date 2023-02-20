/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Concourse", "ui-sans-serif", "system-ui"],
      serif: ["Equity", "ui-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
