
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
})

