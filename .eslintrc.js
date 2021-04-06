module.exports = {
  parser: "babel-eslint", // kiểm tra đã có babel-eslint hay chưa
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb", // Cực quan trọng
    "prettier",
  ],
  rules: {
    semi: 1, // Kiểm tra xem có thiếu dấu ; không
    quotes: [2, "double"], // Kiểm tra dấu ngặc đơn hoặc ngặc kép
    "react/prop-types": 1,
    "linebreak-style": 0,
    "import/order": 0,
    indent: 0,
    "quote-props": 0,
    "no-trailing-spaces": 0,
    "comma-dangle": 0,
    "eol-last": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "key-spacing": 0,
    "react/jsx-tag-spacing": 0,
    "react/no-array-index-key": 0,
    "arow-parens": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prefer-stateless-function": 0,
    "spaced-comment": 0,
    "object-curly-spacing": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "no-var": 0,
    "react/jsx-curly-spacing": 0,
    "import/no-useless-path-segments": 0,
    "no-shadow": 0,
    "arrow-body-style": 0,
    "react/state-in-constructor": 0,
    "react/sort-comp": 0,

    "react/jsx-curly-newline": "off",
    "class-methods-use-this": 0,
    "space-before-blocks": 0,
    "react/jsx-one-expression-per-line": 0,
    "arrow-parens": 0,
    "object-curly-newline": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "prefer-arrow-callback": 0,
  },
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
  },
};
