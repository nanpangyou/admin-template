import { http } from "../utils/http";
enum Api {
  Login = "/login"
}
export const login = (param: { userName: string; passWord: string }) => http.post<{ token: string }>(Api.Login, param);
