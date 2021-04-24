import { defineComponent } from "vue";
import { ConsoleRoute } from "@/router/index";
import { RouteRecordRaw } from "vue-router";
import SideItem from "./SideItem";
import "./index.scss";
import _Divider from "element-plus/lib/el-divider";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, { slots }) {
    const getSideMenuList = (routeList: RouteRecordRaw[]) => {
      return routeList.map((route) => {
        if (route.children && route.children.length > 0) {
          return (
            <el-submenu
              index={route.path}
              v-slots={{
                title: () => (
                  <>
                    <SideItem
                      iconName={route.meta && route.meta.icon}
                      title={route.meta && route.meta.title}></SideItem>
                  </>
                ),
              }}>
              {route.children && getSideMenuList(route.children)}
            </el-submenu>
          );
        } else {
          return (
            <el-menu-item index={route.path}>
              <SideItem iconName={route.meta && route.meta.icon} title={route.meta && route.meta.title}></SideItem>
            </el-menu-item>
          );
        }
      });
    };
    return () => (
      <div class="page_layout">
        <el-menu class="m-menu__vertical">{ConsoleRoute.children && getSideMenuList(ConsoleRoute.children)}</el-menu>
      </div>
    );
  },
});
