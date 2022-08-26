import { defineComponent, FunctionalComponent, ref } from "vue";
import { FontIcon } from "../components/Icon";
import Xx from "/@/assets/svg/back_top.svg?component";
import s from "./foo.module.scss";
import { http, MockHttp } from "../utils/http/index";
import { ElButton } from "element-plus";

import { useUserStore, useUserStoreWithoutSetup } from "/@/store/modules/user";

// export const Foo: FunctionalComponent = () => (
//   <div class={s.wrapper}>
//     Foo11
//     <FontIcon icon="team-iconexit-fullscreen" svg />
//     <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
//     <Xx></Xx>
//     <ElButton onClick={cl}>xxxx</ElButton>
//   </div>
// );
export const Foo = defineComponent({
  setup() {
    const xxx = ref("");
    const userInfo = useUserStore();
    const userInfoWithoutSetup = useUserStoreWithoutSetup();
    xxx.value = userInfoWithoutSetup.userName;
    const cl = () => {
      useUserStoreWithoutSetup().modifyUserName("edit-Admin");
      xxx.value = userInfo.userName;
    };
    console.log("xxxx", userInfo.userName);
    return () => (
      <>
        {xxx.value}
        <FontIcon icon="team-iconexit-fullscreen" svg />
        <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
        <Xx></Xx>
        <ElButton onClick={cl}>xxxx</ElButton>
      </>
    );
  }
});

Foo.displayName = "Foo";
