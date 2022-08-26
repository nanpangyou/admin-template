import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/mock/api/login",
    method: "post",
    response: () => {
      return {
        token: "adminToken"
      };
    }
  },
  {
    url: "/mock/api/getUserInfo",
    method: "post",
    response: req => {
      const roleMap = {
        adminToken: {
          id: "1",
          userName: "admin",
          role: "admin",
          introduction: "我是超级管理员"
        }
      };
      const role = req.body.token;
      return roleMap[role];
    }
  }
] as MockMethod[];
