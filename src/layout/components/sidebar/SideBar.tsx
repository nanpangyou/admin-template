import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from "element-plus";
import { defineComponent, ref } from "vue";
import { RouteLocationNormalizedLoaded, Router, RouteRecordRaw, RouterLink, useRoute, useRouter } from "vue-router";
import s from "./SideBar.module.scss";

export const SideBar = defineComponent({
  setup(props, ctx) {
    const router: Router = useRouter();
    const route: RouteLocationNormalizedLoaded = useRoute();
    console.log("r", router, route);
    console.log(router.options.routes);
    const xx = ref(router.options.routes);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    // const slots = {
    //   title: () => xx.value.map(i => i.meta?.title),
    //   default: (props: {}) =>
    // <ElMenuItemGroup title="Group One">
    //   <ElMenuItem index="1-1">item one</ElMenuItem>
    //   <ElMenuItem index="1-2">item two</ElMenuItem>
    // </ElMenuItemGroup>
    // props可作插槽作用域的作用
    // };
    const create = (item: any) => {
      return {
        title: () => item.meta?.title,
        default: () => (
          <ElMenuItemGroup>
            {item.children?.map((j: { name: any; path: any }) => (
              <RouterLink to={j.path}>
                <ElMenuItem index={j.name}>{j.name}</ElMenuItem>
              </RouterLink>
            ))}
          </ElMenuItemGroup>
        )
      };
    };
    return () => (
      <>
        <div class={s.sidebar_content}>
          <ElMenu class="el-menu-vertical-demo">
            {xx.value.map(i => {
              if (i.children?.length) {
                return (
                  <>
                    <ElSubMenu index={Math.random() + ""}>{create(i)}</ElSubMenu>
                  </>
                );
              } else {
                return (
                  <RouterLink to={i.path}>
                    <ElMenuItem index="2">
                      <span>{i.meta?.title}</span>
                    </ElMenuItem>
                  </RouterLink>
                );
              }
            })}
          </ElMenu>
        </div>
      </>
    );
  }
});
