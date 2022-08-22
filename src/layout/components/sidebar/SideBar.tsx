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
        <ElScrollbar wrap-class="scrollbar-wrapper">
          <div class={s.sidebar_content}>
            <ElMenu class="el-menu-vertical-demo" unique-opened>
              {allRouter.value.map(i => {
                if (i.children?.length) {
                  return <ElSubMenu index={Math.random() + ""}>{create(i)}</ElSubMenu>;
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
        </ElScrollbar>
      </>
    );
  }
});
