import { FunctionalComponent } from "vue";
import { AppMain } from "./components/AppMain";
import { SideBar } from "./components/sidebar/SideBar";
import s from "./index.module.scss";

export const Layout: FunctionalComponent = () => (
  <div class={s.layout_wrapper}>
    <SideBar />
    <AppMain></AppMain>
  </div>
);

Layout.displayName = "Layout";
