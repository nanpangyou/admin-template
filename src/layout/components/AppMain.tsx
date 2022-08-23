import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./AppMain.module.scss";
import Hamburger from "./sidebar/hamBurger.vue";
export const AppMain = defineComponent({
  setup() {
    const HeaderBar = () => (
      <div class={s.header_bar_wrapper}>
        <div class={s.left_side}>
          <Hamburger class="hamburger-container" isActive />
          <div>面包</div>
        </div>
        <div class={s.right_side}>操作部分</div>
      </div>
    );
    return () => (
      <div class={s.app_main_wrapper}>
        {HeaderBar()}
        <RouterView></RouterView>
      </div>
    );
  }
});
