import { FunctionalComponent } from "vue";
import { FontIcon } from "../components/Icon";
import Xx from "/@/assets/svg/back_top.svg?component";
import s from "./foo.module.scss";
import { http, MockHttp } from "../utils/http/index";
import { ElButton } from "element-plus";
const cl = () => {
  http
    .post("/getList", {}, {}, { _return_raw: true })
    .then(res => {
      console.log(res);
    })
    .catch(e => console.log(22, e));
};
export const Foo: FunctionalComponent = () => (
  <div class={s.wrapper}>
    Foo11
    <FontIcon icon="team-iconexit-fullscreen" svg />
    <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
    <Xx></Xx>
    <ElButton onClick={cl}>xxxx</ElButton>
  </div>
);
Foo.displayName = "Foo";
