import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        //
        mockPath: "mock",
        localEnabled: command !== "build",
      }),
      styleImport({
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              //el-****.scss
              name = name.slice(3);
              return `element-plus/packages/theme-chalk/src/${name}.scss`;
            },
            // https://github.com/anncwb/vite-plugin-style-import/pull/5
            // 用于一些可能需要按需引入组件的情况,不单单只是引入样式(对Esm不能很好支持的库)
            // 仅在生产环境工作
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};

/**参照：
https://element-plus.org/#/zh-CN/component/quickstart
 */
