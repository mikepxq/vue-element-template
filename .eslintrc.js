/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const prettier = require("./.prettierrc.js");
module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      // globalReturn: false,
      // impliedStrict: false,
      jsx: false,
    },
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettier], //同步规则
    "@typescript-eslint/explicit-module-boundary-types": "warn", //
    "@typescript-eslint/no-unused-vars": "warn", //没用的值
    "@typescript-eslint/no-empty-interface": "warn", //ts空类型
    "@typescript-eslint/no-empty-function": "warn", //空函数
    "@typescript-eslint/ban-types": "warn", //直接用 {} 定义类型
  },
};
