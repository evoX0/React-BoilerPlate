module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["/node_modules/**", "/build/**"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
