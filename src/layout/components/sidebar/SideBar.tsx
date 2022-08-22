import { ElMenu, ElMenuItem, ElMenuItemGroup, ElScrollbar, ElSubMenu } from "element-plus";
import { defineComponent, ref } from "vue";
import { RouteLocationNormalizedLoaded, Router, RouteRecordRaw, RouterLink, useRoute, useRouter } from "vue-router";
import s from "./SideBar.module.scss";

export const SideBar = defineComponent({
  setup(props, ctx) {
    const router: Router = useRouter();
    // todo: useRoute里取
    const allRouter = ref(router.options.routes);
    // const slots = {
    //   title: () => xx.value.map(i => i.meta?.title),
    //   default: (props: {}) =>
    // <ElMenuItemGroup title="Group One">
    //   <ElMenuItem index="1-1">item one</ElMenuItem>
    //   <ElMenuItem index="1-2">item two</ElMenuItem>
    // </ElMenuItemGroup>
    // props可作插槽作用域的作用
    // };
    const create = (item: RouteRecordRaw) => {
      return {
        title: () => item.meta?.title,
        default: () => (
          <ElMenuItemGroup>
            {item.children?.map(j => (
              <RouterLink to={j.path}>
                <ElMenuItem index={j.name as string}>{j.name}</ElMenuItem>
              </RouterLink>
            ))}
          </ElMenuItemGroup>
        )
      };
    };
    return () => (
      <>
        <div class={s.sidebar_content}>
          <ElScrollbar>
            <ElMenu unique-opened>
              <ElMenuItem index="42">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="52">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="62">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="22">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="24">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="28">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="82">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="72">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="9">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="92">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="29">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="277">
                <span>11111111111111</span>
              </ElMenuItem>
              <ElMenuItem index="2776">
                <span>11111111111111</span>
              </ElMenuItem>
              {allRouter.value.map(i => {
                if (i.children?.length) {
                  return <ElSubMenu index={Math.random() + ""}>{create(i)}</ElSubMenu>;
                } else {
                  return (
                    <RouterLink to={i.path}>
                      <ElMenuItem index={Math.random() + ""}>
                        <span>{i.meta?.title}</span>
                      </ElMenuItem>
                    </RouterLink>
                  );
                }
              })}
            </ElMenu>
          </ElScrollbar>
        </div>
      </>
    );
  }
});
