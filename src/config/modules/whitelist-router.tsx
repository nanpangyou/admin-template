import { RouteRecordRaw } from "vue-router";

export const WhiteList: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("/@/views/Login/index.vue"),
    meta: {
      title: "登录"
    }
  }
];
