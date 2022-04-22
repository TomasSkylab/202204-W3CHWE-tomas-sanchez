module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  extends: ["airbnb-base", "prettier"],

  parserOptions: {
    ecmaVersion: "latest",

    sourceType: "module",
  },

  rules: {},

  babel: {
    env: {
      test: {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      },
    },
  },

  jest: {
    testEnvironment: "jsdom",
  },
};
