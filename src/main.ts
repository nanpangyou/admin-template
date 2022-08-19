import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Foo } from "./views/foo";
import Bar from "./views/bar.vue";
import ccc from "./views/ccc.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/ccc", component: ccc },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
