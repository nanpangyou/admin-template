import { FunctionalComponent } from "vue";
import AppMain from "./components/AppMain.vue";
import SideBar from "./components/sidebar/SideBar.vue";
import s from "./index.module.scss";

export const Layout: FunctionalComponent = () => (
  <div class={s.wrapper}>
    <SideBar />
    <AppMain></AppMain>
  </div>
);
