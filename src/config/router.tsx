import { RouteRecordRaw } from "vue-router";
import { Foo } from "../views/foo";
import Bar from "../views/bar.vue";
import ccc from "../views/ccc.vue";
import { Layout } from "../layout";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    name: "home",
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: Foo },
      { path: "/bar", component: Bar },
      { path: "/ccc", component: ccc }
    ]
  }
];
