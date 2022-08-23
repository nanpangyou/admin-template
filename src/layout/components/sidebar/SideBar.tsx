import { ElMenu, ElMenuItem, ElMenuItemGroup, ElScrollbar, ElSubMenu } from "element-plus";
import { defineComponent, ref } from "vue";
import { RouteLocationNormalizedLoaded, Router, RouteRecordRaw, RouterLink, useRoute, useRouter } from "vue-router";
import s from "./SideBar.module.scss";
import { SideBarItem } from "./sideBarItem";

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
    console.log(allRouter.value);
    const isCollapse = ref(false);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log("open", key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log("close", key, keyPath);
    };
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
            <ElMenu unique-opened onOpen={handleOpen} onClose={handleClose} collapse={isCollapse.value}>
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
              {/* {allRouter.value.map(item => (
                <SideBarItem item={item} />
              ))} */}
            </ElMenu>
          </ElScrollbar>
        </div>
      </>
    );
  }
});
