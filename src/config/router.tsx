import { RouteRecordRaw } from "vue-router";
import { Foo } from "../views/foo";
import Bar from "../views/bar.vue";
import ccc from "../views/ccc.vue";
import Xxx from "../views/Xxx.vue";
import { Layout } from "../layout";
import errorRouter from "./modules/test";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/welcome",
    meta: {
      title: "test"
    },
    children: [{ path: "/welcome", component: Foo, name: "welcome" }]
  },
  {
    path: "/xxx",
    component: Xxx,
    meta: {
      title: "xxxxx"
    }
  },
  errorRouter
];
