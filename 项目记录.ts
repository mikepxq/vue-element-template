/**
1.基础构建
  1.npm init @vitejs/app my-vue-app --template vue-ts
  2.进入项目
    npm install
  3.README.md
2.统一环境
  1.npm i -D eslint
    1. ./node_modules/.bin/eslint --init
      "lint:fix": "eslint --fix --ext  .ts,tsx,js,d.ts src"
    2.npm install -D vue-eslint-parser
    3.npm i -D @typescript-eslint/parser@3(v4有兼容问题 https://github.com/vuejs/vue-eslint-parser/issues/99)
      npm uninstall  @typescript-eslint/parser
  2.npm i -D  prettier
    npm i -D eslint-plugin-prettier  使用eslint使用prettier
    npm i -D eslint-config-prettier
  3.git 格式化 提交校验
    npm i -D husky@=4
    npm i -D lint-staged
    package.json 配置
  4.commitlint
    npm i -D @commitlint/config-conventional @commitlint/cli
    package.json
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"    提交前检查 commit 标题
    commitlint.config.js
  5.别名
    vite.config.ts
  6.scss
    npm i -D sass
  7.jsx
    1.npm i -D @vitejs/plugin-vue-jsx
3.搭建项目结构
    1.typings  
    2.assets
    3.components
    4.styles
    5.views
    //需要依赖的 数据结构 store mock 连通mock数据
    6.routes
      1.npm install vue-router@4
    7.store
      1.npm i vuex@next
      2.tsconfig
        files:["./src/typings/vuex.d.ts"] (ts:可以直接引入import语法到全局)
    8.api
      1.npm i axios
      2.mock
        1.npm i mockjs
        2.npm i -D vite-plugin-mock
    9.plugin
4. ui库 element
  1.npm i element-plus
  2.按需加载
    1.npm i -D vite-plugin-style-import
5.layout

6.基础功能
  1.权限管理
7.特色功能
  1.国际化
 */

/**参照
vite官网------------https://www.pipipi.net/vite/
vue-eslint-parser---https://www.npmjs.com/package/vue-eslint-parser
element-plus--------https://element-plus.org/#/zh-CN
vite jsx------------https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
 */
