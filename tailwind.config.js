/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  // rules: [
  //   {
  //     test: /\.css$/,
  //     use: ["style-loader", "css-loader", "postcss-loader"],
  //   },
  // ],
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
