module.exports = {
  purge: {
    node: "layers",
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
