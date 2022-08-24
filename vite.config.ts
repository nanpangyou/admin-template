import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from "vite-plugin-mock";
// doc: https://www.npmjs.com/package/vite-svg-loader
import svgLoader from "vite-svg-loader";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// 设置别名
const alias: Record<string, string> = {
  "/@": pathResolve("src")
};

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
        mergeProps: true,
        transformOn: true
      }),
      vue(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve"
      }),
      svgLoader(),
      vueSetupExtend()
    ]
  };
};
