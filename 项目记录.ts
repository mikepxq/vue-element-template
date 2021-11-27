/**
1.基础构建
  1.npm init vite@latest my-vue-app -- --template vue-ts
  2.进入项目
    npm install
  3.README.md
2.统一环境
  1.npm i -D eslint
    1. ./node_modules/.bin/eslint --init
      "lint:fix": "eslint --fix --ext  .ts,tsx,js,d.ts src"
      // run `npm audit fix` to fix them, or `npm audit` for details
    2.eslintrc.js  "@vue/typescript/recommended"
    // npx install-peerdeps --dev @vue/eslint-config-typescript
    npm i -D @vue/eslint-config-typescript
  2.npm i -D  prettier
    npm i -D eslint-plugin-prettier  使用eslint使用prettier
    npm i -D eslint-config-prettier
  3.git 格式化 提交校验
    npm i -D husky
    npx mrm@2 lint-staged
    // npm i -D lint-staged
    package.json 配置
  4.commitlint
    npm i -D @commitlint/config-conventional @commitlint/cli
    // package.json
    //   "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"    提交前检查 commit 标题
    commitlint.config.js
    npx husky add .husky/commit-msg 'commitlint -E HUSKY_GIT_PARAMS'
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
      //初始路由
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
    //补上
    10.utils
    11.settings
4. ui库 element
  1.npm i element-plus
  2.按需加载
    1.npm i -D vite-plugin-style-import
  3.npm i @element-plus/icons
5.layout & 完善路由
  1.components/layout
  2.routes 懒加载页面
  3.main 过度动画
6.基础功能
  1.权限管理
    1.utils getToken
    2.store user.ts token
    3.routes auths
    4.auth.ts
    5.menu 配合权限显示
  2.页面加载进度 nprogress
      npm i nprogress
      npm i -D @types/nprogress

7.特色功能
  1.国际化
  2.
 */

/**参照
vite官网------------https://www.pipipi.net/vite/
vue-eslint-parser---https://www.npmjs.com/package/vue-eslint-parser
element-plus--------https://element-plus.org/#/zh-CN
vite jsx------------https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
 */
