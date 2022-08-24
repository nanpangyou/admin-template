import { FunctionalComponent } from "vue";
import { FontIcon } from "../components/Icon";
import Xx from "/@/assets/svg/back_top.svg?component";
import s from "./foo.module.scss";
import axios from "axios";
axios.post("/mock/api/getList").then(res => {
  console.log(res);
});
export const Foo: FunctionalComponent = () => (
  <div class={s.wrapper}>
    Foo11
    <FontIcon icon="team-iconexit-fullscreen" svg />
    <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
    <Xx></Xx>
  </div>
);
Foo.displayName = "Foo";
