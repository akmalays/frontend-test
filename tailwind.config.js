module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("tw-elements/dist/plugin"),
      ],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
