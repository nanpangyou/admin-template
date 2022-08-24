import { ElMenuItem, ElSubMenu } from "element-plus";
import { defineComponent, PropType } from "vue";
import { RouterLink } from "vue-router";
import type { childrenType } from "../types";

export const SideBarItem = defineComponent({
  props: { item: Object as PropType<childrenType> },
  setup(props, context) {
    console.log(props, props.item as childrenType);
    return () => {
      // if (props.item.children?.length) {
      //   return <ElSubMenu index={Math.random() + ""}>{create(item)}</ElSubMenu>;
      // } else {
      //   return (
      //     <RouterLink to={item.path}>
      //       <ElMenuItem index={Math.random() + ""}>
      //         <span>{item.meta?.title}</span>
      //       </ElMenuItem>
      //     </RouterLink>
      //   );
      // }
      <div>xx</div>;
    };
  }
});
