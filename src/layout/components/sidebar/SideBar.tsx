import { Component, defineComponent, h, ref } from "vue";
import { MenuOption, NButton, NIcon, NMenu } from "naive-ui";
import { RouteLocationNormalizedLoaded, Router, RouteRecordRaw, RouterLink, useRoute, useRouter } from "vue-router";
import s from "./SideBar.module.scss";
import { SideBarItem } from "./sideBarItem";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";

export const SideBar = defineComponent({
  setup(props, ctx) {
    const renderIcon = (icon: Component) => {
      return () => h(NIcon, null, { default: () => h(icon) });
    };
    const isCollapsed = ref(false);
    const menuOptions: MenuOption[] = [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "welcome",
                params: {
                  lang: "zh-CN"
                }
              }
            },
            { default: () => "回家" }
          ),
        key: "go-back-home",
        icon: renderIcon(HomeIcon)
      },

      {
        label: () =>
          h(
            "a",
            {
              href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
              target: "_blank",
              rel: "noopenner noreferrer"
            },
            "且听风吟"
          ),
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
      },
      {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
          {
            label: "鼠",
            key: "rat"
          }
        ]
      },
      {
        label: "寻羊冒险记",
        key: "a-wild-sheep-chase",
        icon: renderIcon(BookIcon),
        disabled: true
      },
      {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
          {
            type: "group",
            label: "人物",
            key: "people",
            children: [
              {
                label: "叙事者",
                key: "narrator",
                icon: renderIcon(PersonIcon)
              },
              {
                label: "羊男",
                key: "sheep-man",
                icon: renderIcon(PersonIcon)
              }
            ]
          },
          {
            label: "饮品",
            key: "beverage",
            icon: renderIcon(WineIcon),
            children: [
              {
                label: "威士忌",
                key: "whisky"
              }
            ]
          },
          {
            label: "食物",
            key: "food",
            children: [
              {
                label: "三明治",
                key: "sandwich"
              }
            ]
          },
          {
            label: "过去增多，未来减少",
            key: "the-past-increases-the-future-recedes"
          }
        ]
      }
    ];

    return () => (
      <>
        <div>
          <NButton onClick={() => (isCollapsed.value = !isCollapsed.value)}>xx</NButton>
          <NMenu options={menuOptions} collapsed={isCollapsed.value} collapsedWidth={30}></NMenu>
        </div>
      </>
    );
  }
});
