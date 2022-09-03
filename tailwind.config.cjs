/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      './node_modules/tw-elements/dist/js/**/*.js',
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tw-elements/dist/plugin'),
      require('flowbite/plugin')
    ],
  }
  
)