module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ], //should add ".ts" if typescript project
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
