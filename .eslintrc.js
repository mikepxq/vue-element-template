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
    "@typescript-eslint/explicit-module-boundary-types": "off", //每个函数都要显式声明返回值
    "@typescript-eslint/no-unused-vars": "warn", //没用的值
    "@typescript-eslint/no-empty-interface": "off", //ts空类型
    "@typescript-eslint/no-empty-function": "off", //空函数
    "@typescript-eslint/ban-types": "warn", //直接用 {} 定义类型
    "@typescript-eslint/no-explicit-any": "off", //可以定义any类型
  },
};
